<script lang="ts">
    import type { SvelteComponent } from 'svelte';
    import Die from '../../lib/Die.svelte';

    let nextId = 0
    let diceData :Array<{id :number, faces :number, result :number, active :boolean}> = [
    ]
    let diceComps :Array<SvelteComponent> = []
    function addDie( sides :number ) {
        diceData = diceData.concat({
            id: nextId++,
            faces: sides,
            result: Infinity,
            active: false
        })
    }
    // Handle die rolling and removal
	$: diceComps = diceComps.filter( (c,i) => {
        if (!c) return false; // remove cleared dice comps
        if (diceData[i]?.result == Infinity) c.roll();
        return true;
    });

    let currDie :Die;
    let currRoll :number = Infinity;
    let lowRoll :number = Infinity;
    $: lowRoll = Math.min(currRoll, lowRoll);

    // Aggregate the current selection whenever it changes
    let diceAgg = { active: 0, sum: 0, activeSum: 0, low: Infinity, high: -Infinity, activeLow: Infinity, activeHigh: -Infinity }
    $: diceAgg = diceData.reduce( (agg, die) => {
        if (agg.hasOwnProperty( die.faces )) agg[die.faces] = agg[die.faces] + 1;
        else agg[die.faces] = 1;
        agg.sum += die.result;
        if (die.result < agg.low) agg.low = die.result;
        if (die.result > agg.high) agg.high = die.result;
        if (die.active) {
            agg.active = agg.active +1;
            agg.activeSum += die.result;
            if (die.result < agg.activeLow) agg.activeLow = die.result;
            if (die.result > agg.activeHigh) agg.activeHigh = die.result;
        }
        return agg;
    }, { active: 0, sum: 0, activeSum: 0, low: Infinity, high: -Infinity, activeLow: Infinity, activeHigh: -Infinity } )

    let hideAllResult :boolean = true;
    let hideBoonResult :boolean = false;
    let timeout;
    function rollMainDie() {
        if (timeout) { clearTimeout(timeout); timeout = undefined; }
        hideAllResult = true;
        currDie.roll();
        timeout = setTimeout(()=> {hideAllResult = false}, 400)
    }
    function rollBoonBaneDice() {
        if (timeout) { clearTimeout(timeout); timeout = undefined; }
        hideBoonResult = true;
        if (diceAgg.active == 0) diceComps.filter( d => d ).forEach( d => d.roll() );
        else diceComps.filter( d => d ).forEach( d => d.rollIfActive() );
        timeout = setTimeout(()=> {hideBoonResult = false}, 400)
    }

    function removeDice() {
        if (diceAgg.active == 0) diceData = [];
        else diceData = diceData.filter( d => d.id == 0 || !d.active );
    }

    let result = 9;
    $: result = lowRoll + (diceData.length == 0? 0 : diceAgg.active > 0 ? diceAgg.activeSum : diceAgg.sum)
    
    function _formatMod( n :number ): string {
        return (n<0?"":"+") + n;
    }
</script>

<div class="page-break">
    <hr>
    <h1><span class="line">Hammer & Steel</span> Roller</h1>
    <hr>
</div>

<div class="page">
    <div style="justify-content: space-between;">
        <div style="display:inline-block;">
            Current
            <br/>
            <Die bind:this={currDie} faces={-3} bind:result={currRoll}/>
            <button on:click={rollMainDie}>Roll!</button>
        </div>
        <div style="display:inline-block;">
            Chain Low
            <br>
            <Die faces={-3} result={hideAllResult ? Infinity : lowRoll} enabled={false}/>
            <button on:click={()=>lowRoll=currRoll} disabled={lowRoll==currRoll}>Reset</button>
        </div>
    </div>
    
    {#if lowRoll == 0}
    <h3 style="margin-bottom:0;color:rgb(255,100,100);">CRITICAL</h3>
    <h1 style="margin-top:0.1em;color:rgb(255,100,100);">FAILURE!</h1>
    {:else if lowRoll == 9}
    <h3 style="margin-bottom:0;color:rgb(100,255,200);">Critical</h3>
    <h1 style="margin-top:0.1em;color:rgb(100,255,200);">SUCCESS!</h1>
    {:else}
        <h3 style="margin-bottom:0;">Boon and Bane Dice</h3>
        <hr class="underule">
        <div class="dice-button-box">
            <button type="button" class="die-button dark-text" on:click={()=>addDie(-4)}
                style="background-image: url('/img/dice/dBoon.svg');">
                {#if (diceAgg[-4] ?? 0) == 0} <sup>+</sup>dB
                {:else if (diceAgg[-4] > 9)} {diceAgg[-4]}
                {:else} {diceAgg[-4]}dB
                {/if}
            </button>
            <button type="button" class="die-button" on:click={()=>addDie(-5)}
                style="background-image: url('/img/dice/dBane.svg');">
                {#if (diceAgg[-5] ?? 0) == 0} <sup>-</sup>dB
                {:else if (diceAgg[-5] > 9)} {diceAgg[-5]}
                {:else} {diceAgg[-5]}dB
                {/if}
            </button>
        </div>
        
        {#if diceData.length > 0}
            <div class="dice-box">
                {#each diceData as die, i (die.id)}
                    <Die bind:this={diceComps[i]} faces={die.faces} bind:result={die.result} bind:active={die.active} />
                {/each}
            </div>
        
            <div class="operation-button-box">
                <button class="button-outlined" disabled={diceData.length <= 0} on:click={removeDice}> Clear {diceAgg.active == 0 ? "" : String(diceAgg.active) } </button>
                <button class="button-outlined" disabled={diceData.length <= 0} on:click={rollBoonBaneDice}> Reroll {diceAgg.active == 0 ? "" : String(diceAgg.active) } </button>
            </div>

            <div class="result-summary">
                <div>
                    <p class="text-center" style="margin:0;"> <span class="line"> {#if diceAgg.active != 0} SELECTION {/if} SUBTOTAL: </span>
                        {#if diceAgg.active == 0}
                            <span class="line"> {hideBoonResult ? "?" : diceAgg.sum} + {hideAllResult ? "?" : lowRoll} = {hideBoonResult || hideAllResult ? "?" : diceAgg.sum + lowRoll} </span>
                        {:else}
                            <span class="line"> {hideBoonResult ? "?" : diceAgg.activeSum} + {hideAllResult ? "?" : lowRoll} = {hideBoonResult || hideAllResult ? "?" : diceAgg.activeSum + lowRoll} </span>
                        {/if}
                    </p>
                </div>
            </div>
        {/if}
        
        
        <div style="justify-content: center;">
            <h3 class="text-center" style="margin-top:1.5em;margin-bottom:0.1em;">
                Modifiers
            </h3>
            <div class="result-mods">
                <h3 class="result ellipse">..</h3>
                <h3 class="result failure"> {hideAllResult||hideBoonResult ? "+?" : _formatMod(5 - result)} </h3>
                <h3 class="result weaksuccess"> {hideAllResult||hideBoonResult ? "+?" : _formatMod(6 - result)} </h3>
                <h3 class="result weaksuccess"> {hideAllResult||hideBoonResult ? "+?" : _formatMod(7 - result)} </h3>
                <h3 class="result success"> {hideAllResult||hideBoonResult ? "+?" : _formatMod(8 - result)} </h3>
                <h3 class="result success"> {hideAllResult||hideBoonResult ? "+?" : _formatMod(9 - result)} </h3>
                <h3 class="result advanced"> {hideAllResult||hideBoonResult ? "+?" : _formatMod(10 - result)} </h3>
                <h3 class="result ellipse">..</h3>
            </div>
            <div class="result-mods" style="margin-top:0;">
                <h3 class="result ellipse">..</h3>
                <h3 class="result failure"> 5 </h3>
                <h3 class="result weaksuccess"> 6 </h3>
                <h3 class="result weaksuccess"> 7 </h3>
                <h3 class="result success"> 8 </h3>
                <h3 class="result success"> 9 </h3>
                <h3 class="result advanced"> 10 </h3>
                <h3 class="result ellipse">..</h3>
            </div>
            <div class="result-labels">
                <h3 class="text-center result failure" style="width:3.2em;"> Fail </h3>
                <h3 class="text-center result weaksuccess" style="width:4.4em;"> Weak </h3>
                <h3 class="text-center result success" style="width:4.4em;"> Good </h3>
                <h3 class="text-center result advanced" style="width:3.2em;"> Adv. </h3>
            </div>
        </div>
    {/if}
</div>

<div class="page-break">
    <hr>
    <h3>Guide</h3>
    <hr>
</div>

<div class="page">
    <p class="text-left">
        In Hammer and Steel, you can spend 'Chain' to make multiple Actions on your turn.<br>
        When you chain actions in this way, each action must use the current lowest roll in the chain. This means that the best action
        you can perform on your turn is always the first action. Each after that may slowly get weaker. If your current chain die is
        too low, you will likely want to end your turn and save some chain to use next turn.
    </p>
    <p class="text-left">
        Example Turn:
    </p>
    <ol>
        <li>Alice takes her first action.</li>
        <ol>
            <li>Alice clicks 'Roll' to roll the power die, and hits 'Reset' indicate that it should be used as the new chain die.
            <li>Alice clicks to clear old boon/bane dice, then adds the current ones she needs.
            <li>Alice looks at the modifier chart to see if her modifier is a success. It is! Yay!
        </ol>
        <li>Alice decides to use a chain to perform a second action.</li>
        <ol>
            <li>Alice clicks 'Roll' and gets a higher value than before. Sadly, she cannot use it. She must use the chain die from the previous roll.
            <li>Alice clicks to clear old boon/bane dice, then adds the current ones she needs.
            <li>Alice looks at the modifier chart to see if her modifier is a success. For this mod it is a weak success, but not a total failure.
        </ol>
        <li>Alice ends her turn.</li>
    </ol>
    <p class="text-left">
        Note that the Power Die and the Boon/Bane die used are not traditional dice. They instead have a built-in curve:<br>
    </p>
    <div>
        <div style="display:inline-block;margin-right:10px;">
            {#each [[0,1],[1,2],[2,3],[3,4],[4,5],[5,5],[6,4],[7,3],[8,2],[9,1]] as [n,h]}
                <div style="display:inline-block;width:12px;height:{h*12}px;padding-left:1px;padding-right:1px;">
                    {#each [...Array(h).keys()] as _}
                        <div style="display:block;background-color:gray;width:10px;height:10px;border:1px solid black;"></div>
                    {/each}
                    {n}
                </div>
            {/each}
            <br>
            dPow
        </div>
        <div style="display:inline-block;margin-left:10px;">
            {#each [[0,1],[1,2],[2,2],[3,1]] as [n,h]}
                <div style="display:inline-block;width:12px;height:{h*12}px;padding-left:1px;padding-right:1px;">
                    {#each [...Array(h).keys()] as _}
                        <div style="display:block;background-color:gray;width:10px;height:10px;border:1px solid black;"></div>
                    {/each}
                    {n}
                </div>
            {/each}
            <br>
            dB
        </div>
    </div>
</div>

<style>

.dice-button-box {
    display: flex;
    flex-wrap: wrap;
    max-width: calc( 64px * 2 + 24em );
    margin: 10px auto;
    justify-content: center;
}
.die-button {
    display: inline-flex;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    color: rgb(210, 210, 210);
    width: 64px;
    height: 64px;
    margin: 0px;
    border: 0px;
    padding: 0px;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
}
.dark-text {
    color: rgb(30, 30, 30);
}

.operation-button-box {
    display: grid;
    min-height: 3em;
    max-width: calc( 1em*28 );
    grid-template-columns: 40% 40%;
    justify-content: center;
    margin: 10px auto;
}

.dice-box {
    display: flex;
    flex-wrap: wrap;
    max-width: calc( 48px * 5 );
    /* min-height: 60px; */
    margin: 10px auto 10px auto;
    justify-content: center;
}

.underule {
    max-width: 256px;
    border-color: rgb(88, 88, 88);
    margin: 0 auto 0 auto;
}

.result-summary {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.result-summary > div {
    margin: 4px;
}

.result-mods {
    display: grid;
    margin: 0 0 0 0;
    grid-template-columns: 1em 2.2em 2.2em 2.2em 2.2em 2.2em 2.2em 1em;
    justify-content: center;
}
.result-labels {
    display: grid;
    margin: 0 0 1em 0;
    grid-template-columns: 3.2em 4.4em 4.4em 3.2em;
    justify-content: center;
}

.result {
    display: inline-block;
    font-size: 1em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;

    color: rgb(204, 204, 204);
    width: 2.2em;
    height: 1.6em;
    line-height: 1.6em;
    margin: 0;
    padding: 0;
    border: 1px solid rgb(204, 204, 204);
    justify-self: start;
    text-align: center;
}

.result.ellipse {
    font-size: 0.75em;
    border: 0;
    width: 20px;
}

.result.failure {
    background-color: rgb(10, 10, 10);
}

.result.weaksuccess {
    background-color: rgb(50, 50, 50);
}

.result.success {
    background-color: rgb(60, 60, 60);
    background-color: rgb(141, 141, 141);
    color: rgb(40, 40, 40);
}

.result.advanced {
    background-color: rgb(204, 204, 204);
    color: rgb(40, 40, 40);
}

</style>