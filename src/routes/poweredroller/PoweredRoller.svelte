<script lang="ts">
    import type { SvelteComponent } from 'svelte';
    import Die from '../../lib/Die.svelte';

    let diceData :Array<{id :number, result :number, active :boolean}> = [{
            id: 0,
            result: 0,
            active: false
        },{
            id: 1,
            result: 0,
            active: false
        }]
    let diceComps :Array<SvelteComponent> = []

    // Aggregate the current selection whenever it changes
    let totalDice = { active: 0, sum: 0, hasPair: false }
    $: totalDice = diceData.reduce( (agg,dieData) => {
        if (!agg.hasOwnProperty( dieData.result )) agg[dieData.result] = 1;
        else { agg[dieData.result] += 1; agg.hasPair = true; }
        agg.sum += dieData.result;
        if (dieData.active) {
            agg.active = agg.active +1;
        }
        return agg;
    }, { active: 0, sum: 0, hasPair: Boolean(false) } )

    function rerollDice() {
        if (totalDice.active == 0) diceComps.filter( d => d ).forEach( d => d.roll() )
        else diceComps.filter( d => d ).forEach( d => d.rollIfActive() )
    }

</script>


<div class="page">
    <h1>Monster of the Week Dice&nbsp;Roller</h1>
    <p>Roll 2d6 and sum them, then find your modifier below.</p>
    
    <div style="justify-content: center;">
        <button class="button-outlined" disabled={diceData.length <= 0} on:click={rerollDice}> {totalDice.active == 0 ? "Reroll All" : "Reroll " + String(totalDice.active) } </button>
    </div>
    
    <div class="dice-box">
        {#each diceData as die, i (die.id)}
            <Die bind:this={diceComps[i]} showPips={true} bind:result={die.result} bind:active={die.active} invert={i == 2} />
        {/each}
    </div>

    <div class="result-summary">
        <div>
            <h2 class="text-center" style="margin-bottom:0;">
                Sum
            </h2>
            <h3 class="result" style="width: 100px; margin: 0 auto 0 auto;">
                {totalDice.sum}
            </h3>
        </div>
    </div>

    <div style="justify-content: center;">
        <h2 class="text-center" style="margin-top:1.5em;margin-bottom:0;">
            Modifiers
        </h2>
        <div class="result-mods">
            <h3 class="result ellipse">..</h3>
            <h3 class="result failure"> {6 - totalDice.sum >= 0? "+" : ""}{6 - totalDice.sum} </h3>
            <h3 class="result weaksuccess"> {7 - totalDice.sum >= 0? "+" : ""}{7 - totalDice.sum} </h3>
            <h3 class="result weaksuccess"> {8 - totalDice.sum >= 0? "+" : ""}{8 - totalDice.sum} </h3>
            <h3 class="result weaksuccess"> {9 - totalDice.sum >= 0? "+" : ""}{9 - totalDice.sum} </h3>
            <h3 class="result success"> {10 - totalDice.sum >= 0? "+" : ""}{10 - totalDice.sum} </h3>
            <h3 class="result success"> {11 - totalDice.sum >= 0? "+" : ""}{11 - totalDice.sum} </h3>
            <h3 class="result advanced"> {12 - totalDice.sum >= 0? "+" : ""}{12 - totalDice.sum} </h3>
            <h3 class="result ellipse">..</h3>
        </div>
        <div class="result-mods" style="margin-top:0;">
            <h3 class="result ellipse">..</h3>
            <h3 class="result failure"> 6 </h3>
            <h3 class="result weaksuccess"> 7 </h3>
            <h3 class="result weaksuccess"> 8 </h3>
            <h3 class="result weaksuccess"> 9 </h3>
            <h3 class="result success"> 10 </h3>
            <h3 class="result success"> 11 </h3>
            <h3 class="result advanced"> 12 </h3>
            <h3 class="result ellipse">..</h3>
        </div>
        <div class="result-labels">
            <h3 class="text-center result failure" style="width:70px;"> Fail </h3>
            <h3 class="text-center result weaksuccess" style="width:150px;"> Weak </h3>
            <h3 class="text-center result success" style="width:100px;"> Good </h3>
            <h3 class="text-center result advanced" style="width:70px;"> Adv. </h3>
        </div>
        <p>[..6] is a Failure.<br>[7..9] is a Weak Success.<br>[10..] is a Success.<br>[12..] has extra effects for Advanced Moves.</p>
    </div>


    <p>Check out Monster of the Week and other PbtA games at <a href="https://evilhat.com/product/monster-of-the-week/">Evil&nbsp;Hat&nbsp;Productions</a> (Not&nbsp;affiliated)</p>

</div>

<style>

.dice-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    min-height: 60px;
    margin: 10px;
}

.result-summary {
    display: flex;
    margin: 0 0 1em 0;
    justify-content: center;
}
.result-mods {
    display: grid;
    margin: 0 0 0 0;
    grid-template-columns: 20px 50px 50px 50px 50px 50px 50px 50px 20px;
    justify-content: center;
}
.result-labels {
    display: grid;
    margin: 0 0 1em 0;
    grid-template-columns: 70px 150px 100px 70px;
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