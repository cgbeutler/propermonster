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
            result: 0,
            active: false
        })
    }
    // Handle die removal with null scan
	$: diceComps = diceComps.filter( c => c );

    let currDie :Die;
    let currRoll :number = 9;
    let lowRoll :number = 9;
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

    function rerollDice() {
        if (diceAgg.active == 0) diceComps.filter( d => d ).forEach( d => d.roll() )
        else diceComps.filter( d => d ).forEach( d => d.rollIfActive() )
    }

    function removeDice() {
        if (diceAgg.active == 0) diceData = [];
        else diceData = diceData.filter( d => d.id == 0 || !d.active );
    }

    let result = 9;
    $: result = lowRoll + (diceData.length == 0? 0 : diceAgg.active > 0 ? diceAgg.activeSum : diceAgg.sum)
    let modifier = 1
</script>


<div class="page">
    <h1>H&S Dice Roller</h1>

    <div style="justify-content: space-between;">
        <div style="display:inline-block;">
            Current
            <br/>
            <Die bind:this={currDie} faces={-3} bind:result={currRoll}/>
            <button on:click={()=>currDie.roll()}>Roll!</button>
        </div>
        <div style="display:inline-block;">
            Chain Low
            <br>
            <Die faces={-3} result={lowRoll} enabled={false}/>
            <button on:click={()=>lowRoll=currRoll} disabled={lowRoll==currRoll}>Reset</button>
        </div>
    </div>
    
    {#if lowRoll == 0}
        <h3>CRITICAL</h3>
        <h1>FAILURE!</h1>
    {:else if lowRoll == 9}
        <h3>Critical</h3>
        <h1>SUCCESS!</h1>
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
                <button class="button-outlined" disabled={diceData.length <= 0} on:click={rerollDice}> Reroll {diceAgg.active == 0 ? "" : String(diceAgg.active) } </button>
            </div>

            <div class="result-summary">
                <div>
                    <p class="text-center" style="margin:0;"> <span class="line"> {#if diceAgg.active != 0} SELECTION {/if} SUBTOTAL: </span>
                        {#if diceAgg.active == 0}
                            <span class="line"> {lowRoll} + {diceAgg.sum} = {lowRoll + diceAgg.sum} </span>
                        {:else}
                            <span class="line"> {lowRoll} + {diceAgg.activeSum} = {lowRoll + diceAgg.activeSum} </span>
                        {/if}
                    </p>
                </div>
            </div>
        {/if}
        
        
        <div style="justify-content: center;">
            <h2 class="text-center" style="margin-top:1.5em;margin-bottom:0;">
                Modifiers
            </h2>
            <div class="result-mods">
                <h3 class="result ellipse">..</h3>
                <h3 class="result failure"> {5 - result >= 0? "+" : ""}{5 - result} </h3>
                <h3 class="result weaksuccess"> {6 - result >= 0? "+" : ""}{6 - result} </h3>
                <h3 class="result weaksuccess"> {7 - result >= 0? "+" : ""}{7 - result} </h3>
                <h3 class="result success"> {8 - result >= 0? "+" : ""}{8 - result} </h3>
                <h3 class="result success"> {9 - result >= 0? "+" : ""}{9 - result} </h3>
                <h3 class="result advanced"> {10 - result >= 0? "+" : ""}{10 - result} </h3>
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
                <h3 class="text-center result failure" style="width:70px;"> Fail </h3>
                <h3 class="text-center result weaksuccess" style="width:100px;"> Weak </h3>
                <h3 class="text-center result success" style="width:100px;"> Good </h3>
                <h3 class="text-center result advanced" style="width:70px;"> Adv. </h3>
            </div>
        </div>
    {/if}
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
    grid-template-columns: 20px 50px 50px 50px 50px 50px 50px 20px;
    justify-content: center;
}
.result-labels {
    display: grid;
    margin: 0 0 1em 0;
    grid-template-columns: 70px 100px 100px 70px;
    justify-content: center;
}

.result {
    display: inline-block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;

    color: rgb(204, 204, 204);
    width: 50px;
    height: 1.75em;
    line-height: 1.75em;
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