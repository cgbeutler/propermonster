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

    let hideResult :boolean = true;

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

    let timeout;
    function rerollDice() {
        if (timeout) { clearTimeout(timeout); timeout = undefined; }
        hideResult = true;
        if (totalDice.active == 0) diceComps.filter( d => d ).forEach( d => d.roll() );
        else diceComps.filter( d => d ).forEach( d => d.rollIfActive() );
        timeout = setTimeout(()=> {hideResult = false}, 400)
    }

    function _formatMod( n :number ): string {
        return (n<0?"":"+") + n;
    }

</script>


<div class="page-break">
    <hr>
    <h1>Powered Roller</h1>
    <hr>
</div>
<p>Roller for PbtA games like<span class="line">Monster of the Week.</span></p>

<div class="page">
    <div class="dice-box">
        {#each diceData as die, i (die.id)}
            <Die bind:this={diceComps[i]} showPips={true} bind:result={die.result} bind:active={die.active} invert={i == 2} />
        {/each}
        <span style="font-size:36px; line-height:48px;">={hideResult ? "?" : totalDice.sum}</span>
    </div>

    <div style="justify-content: center;margin:0 0 12px 0;">
        <button class="button-outlined" style="font-size: 30px;" disabled={diceData.length <= 0} on:click={rerollDice}> {totalDice.active == 0 ? "Reroll" : "Reroll " + String(totalDice.active) } </button>
    </div>

    {#if !hideResult}
        {#if totalDice.sum == 2}
            <h3 style="margin-bottom:0;color:rgb(255,100,100);">CRITICAL</h3>
            <h1 style="margin-top:0.1em;color:rgb(255,100,100);">FAILURE!</h1>
        {:else if totalDice.sum == 12}
            <h3 style="margin-bottom:0;color:rgb(100,255,200);">Critical</h3>
            <h1 style="margin-top:0.1em;color:rgb(100,255,200);">SUCCESS!</h1>
        {/if}
    {/if}

    <div style="justify-content: center;">
        <h3 class="text-center" style="margin-top:1em;margin-bottom:0.1em;">
            Modifiers
        </h3>
        <div class="result-mods">
            <h3 class="mod-result ellipse">..</h3>
            <h3 class="mod-result failure"> {hideResult? "+?" : _formatMod(6 - totalDice.sum)} </h3>
            <h3 class="mod-result weaksuccess"> {hideResult? "+?" : _formatMod(7 - totalDice.sum)} </h3>
            <h3 class="mod-result weaksuccess"> {hideResult? "+?" : _formatMod(8 - totalDice.sum)} </h3>
            <h3 class="mod-result weaksuccess"> {hideResult? "+?" : _formatMod(9 - totalDice.sum)} </h3>
            <h3 class="mod-result success"> {hideResult? "+?" : _formatMod(10 - totalDice.sum)} </h3>
            <h3 class="mod-result success"> {hideResult? "+?" : _formatMod(11 - totalDice.sum)} </h3>
            <h3 class="mod-result advanced"> {hideResult? "+?" : _formatMod(12 - totalDice.sum)} </h3>
            <h3 class="mod-result ellipse">..</h3>
        </div>
        <div class="result-mods" style="margin-top:0;">
            <h3 class="mod-result ellipse">..</h3>
            <h3 class="mod-result failure"> 6 </h3>
            <h3 class="mod-result weaksuccess"> 7 </h3>
            <h3 class="mod-result weaksuccess"> 8 </h3>
            <h3 class="mod-result weaksuccess"> 9 </h3>
            <h3 class="mod-result success"> 10 </h3>
            <h3 class="mod-result success"> 11 </h3>
            <h3 class="mod-result advanced"> 12 </h3>
            <h3 class="mod-result ellipse">..</h3>
        </div>
        <div class="result-labels">
            <h3 class="text-center mod-result failure" style="width:3.5em;"> Fail </h3>
            <h3 class="text-center mod-result weaksuccess" style="width:6em;"> Weak </h3>
            <h3 class="text-center mod-result success" style="width:4em;"> Good </h3>
            <h3 class="text-center mod-result advanced" style="width:3.5em;"> Adv. </h3>
        </div>
    </div>
</div>

<div class="page-break">
    <hr>
    <h3>Guide</h3>
    <hr>
</div>

<div class="page">
    <p>Most all Tabletop Games based on Powered by the Apocalypse use 2d6 with a modifier. This is then compared to a set of ranges to tell how well you did.<br>Those ranges are:</p>

    <p>[..6] is a Failure.<br>[7..9] is a Weak Success.<br>[10..] is a Success.<br>[12..] Advanced move bonus.*</p>

    <p>*Some moves can be upgraded allowing you to gain extra effects on a 12 or higher.</p>

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
    grid-template-columns: 1.5em 2em 2em 2em 2em 2em 2em 2em 1.5em;
    justify-content: center;
}
.result-labels {
    display: grid;
    margin: 0 0 1em 0;
    grid-template-columns: 3.5em 6em 4em 3.5em;
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
    width: 2em;
    height: 1.75em;
    line-height: 1.75em;
    margin: 0;
    padding: 0;
    border: 1px solid rgb(204, 204, 204);
    justify-self: start;
    text-align: center;
}


.mod-result {
    display: inline-block;
    font-size: 1em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;

    color: rgb(204, 204, 204);
    width: 2em;
    height: 1.6em;
    line-height: 1.6em;
    margin: 0;
    padding: 0;
    border: 1px solid rgb(204, 204, 204);
    justify-self: start;
    text-align: center;
}

.mod-result.ellipse {
    width: 1.5em;
    line-height: 1.6em;
    border: 0;
    text-align: center;
}

.mod-result.failure {
    background-color: rgb(10, 10, 10);
}

.mod-result.weaksuccess {
    background-color: rgb(50, 50, 50);
}

.mod-result.success {
    background-color: rgb(60, 60, 60);
    background-color: rgb(141, 141, 141);
    color: rgb(40, 40, 40);
}

.mod-result.advanced {
    background-color: rgb(204, 204, 204);
    color: rgb(40, 40, 40);
}

</style>