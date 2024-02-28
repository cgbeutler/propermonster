<script lang="ts">
    import { onMount } from "svelte";

    export let faces :number = 6;
    export let showPips :boolean = false;
    export let result :number = Infinity;
    export let active :boolean = false;
    export let enabled :boolean = true;
    export let invert :boolean = false;

    const fateFlag :number = -1;
    const eyeFlag :number = -2;
    const powFlag :number = -3;
    const boonFlag :number = -4;
    const baneFlag :number = -5;
    const powFaces :Array<number> = [0,1,1,2,2,2,3,3,3,3,4,4,4,4,4,5,5,5,5,5,6,6,6,6,7,7,7,8,8,9];
    const boonFaces :Array<number> = [0,1,1,2,2,3];

    let die;
    let overlayAnim;

    function _roll() {
        if (faces > 0) return Math.floor( Math.random() * faces ) + 1;
        if (faces == fateFlag) return Math.floor( Math.random() * 3 ) - 1;
        if (faces == eyeFlag) {
            var sixes = Math.floor( Math.random() * 6 ) + 1;
            if (sixes == 1) return 1
            if (sixes == 2 || sixes == 3) return 2
            if (sixes == 4 || sixes == 5 || sixes == 6) return 3
        }
        if (faces == powFlag) return powFaces[Math.floor( Math.random() * powFaces.length )];
        if (faces == boonFlag) return boonFaces[Math.floor( Math.random() * boonFaces.length )];
        if (faces == baneFlag) return -boonFaces[Math.floor( Math.random() * boonFaces.length )];
        return 0;
    }
    function _restartRollAnimation() {
        if (!die || !overlayAnim) return;
        // Hack to clear the animation
        die.style.animation = 'none';
        overlayAnim.style.animation = 'none';
        die.offsetHeight;
        overlayAnim.offsetHeight;

        // Start anims
        let delay = "-" + (Math.random() * 0.1) + "s";
        die.style.animation = null;
        die.style.animationDuration = '0.38s';
        die.style.animationDelay = delay;
        overlayAnim.style.animation = null;
        // overlayAnim.style.animationDuration = 0.3 + (Math.random() * 0.4) + "s";
        overlayAnim.style.animationDelay = delay;
        die.offsetHeight;
        overlayAnim.offsetHeight;
    }

    export function roll() {
        if (!enabled) return;
        result = _roll();
        active = false;
        _restartRollAnimation();
    }
    export function rollIfActive() {
        if (!active || !enabled) return;
        result = _roll();
        active = false;
        _restartRollAnimation();
    }

    onMount(() => {
        if (!enabled)
        {
            // Hack to clear the animation
            die.style.animation = 'none';
            overlayAnim.style.animation = 'none';
            die.offsetHeight;
            overlayAnim.offsetHeight;
        }
        else roll();
    })
</script>

<div>
    <!--was class:inverted={invert} -->
    <button bind:this={die} type="button" class:active={active} class:show-pips={showPips}
        on:click={() => {active = enabled && !active}} disabled={!enabled}
        class="die
            faces-{
                faces == fateFlag ? "F" :
                faces == eyeFlag ? "E" :
                faces == powFlag ? "Pow" :
                faces == boonFlag ? "Boon" :
                faces == baneFlag ? "Bane" :
                faces
            }{faces == 6 && invert ? "-inverted" : "" }
            result-{result}
        "
        >
        {result == Infinity ? "?" : result}
        <div bind:this={overlayAnim} class="overlay-anim"></div>
    </button>
</div>

<style>

.die {
    display: inline-flex;
    position: relative;
    background-image: url('/img/dice/d6.svg');
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    color: black;
    width: 48px;
    height: 48px;
    margin: 0px;
    border: 0px;
    padding: 0px;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    animation-name: momentary-hide;
    animation-duration: 0s;
    animation-iteration-count: 1;
    transform-origin: 50% 50%;
}
.die.active {
    animation-name: shake;
    animation-duration: 0.4s;
    transform-origin: 50% 50%;
    animation-iteration-count: infinite;
}
.die:disabled,
.die[disabled] {
    pointer-events: none;
}

.die.faces-2 { background-image: url('/img/dice/d2.svg'); }
.die.faces-4 { background-image: url('/img/dice/d4.svg'); }
.die.faces-6 { background-image: url('/img/dice/d6.svg'); }
.die.faces-6-inverted { background-image: url('/img/dice/d6-inverted.svg'); }
.die.faces-8 { background-image: url('/img/dice/d8.svg'); }
.die.faces-10 { background-image: url('/img/dice/d10.svg'); }
.die.faces-12 { background-image: url('/img/dice/d12.svg'); }
.die.faces-20 { background-image: url('/img/dice/d20.svg'); }
.die.faces-30 { background-image: url('/img/dice/d30.svg'); }
.die.faces-100 { background-image: url('/img/dice/d100.svg'); }
.die.faces-F { background-image: url('/img/dice/dF.svg'); font-size: 0px; }
.die.faces-Pow { background-image: url('/img/dice/dPow.svg'); }

.die.show-pips.faces-6.result-1 { background-image: url('/img/dice/d6-1.svg'); font-size: 0px; }
.die.show-pips.faces-6.result-2 { background-image: url('/img/dice/d6-2.svg'); font-size: 0px; }
.die.show-pips.faces-6.result-3 { background-image: url('/img/dice/d6-3.svg'); font-size: 0px; }
.die.show-pips.faces-6.result-4 { background-image: url('/img/dice/d6-4.svg'); font-size: 0px; }
.die.show-pips.faces-6.result-5 { background-image: url('/img/dice/d6-5.svg'); font-size: 0px; }
.die.show-pips.faces-6.result-6 { background-image: url('/img/dice/d6-6.svg'); font-size: 0px; }

.die.show-pips.faces-6-inverted.result-1 { background-image: url('/img/dice/d6-1-inverted.svg'); font-size: 0px; }
.die.show-pips.faces-6-inverted.result-2 { background-image: url('/img/dice/d6-2-inverted.svg'); font-size: 0px; }
.die.show-pips.faces-6-inverted.result-3 { background-image: url('/img/dice/d6-3-inverted.svg'); font-size: 0px; }
.die.show-pips.faces-6-inverted.result-4 { background-image: url('/img/dice/d6-4-inverted.svg'); font-size: 0px; }
.die.show-pips.faces-6-inverted.result-5 { background-image: url('/img/dice/d6-5-inverted.svg'); font-size: 0px; }
.die.show-pips.faces-6-inverted.result-6 { background-image: url('/img/dice/d6-6-inverted.svg'); font-size: 0px; }

.die.faces-F.result--1 { background-image: url('/img/dice/dF-minus.svg'); font-size: 0px; }
.die.faces-F.result-1 { background-image: url('/img/dice/dF-plus.svg'); font-size: 0px; }

.die.faces-E.result-1 { background-image: url('/img/dice/d6-snake.svg'); font-size: 0px; }
.die.faces-E.result-2 { background-image: url('/img/dice/d6-bat.svg'); font-size: 0px; }
.die.faces-E.result-3 { background-image: url('/img/dice/d6-fish.svg'); font-size: 0px; }

.die.faces-Boon.result-0 { background-image: url('/img/dice/dBoon.svg'); font-size: 0px; }
.die.faces-Boon.result-1 { background-image: url('/img/dice/dBoon-1.svg'); font-size: 0px; }
.die.faces-Boon.result-2 { background-image: url('/img/dice/dBoon-2.svg'); font-size: 0px; }
.die.faces-Boon.result-3 { background-image: url('/img/dice/dBoon-3.svg'); font-size: 0px; }
.die.faces-Bane.result-0 { background-image: url('/img/dice/dBane.svg'); font-size: 0px; }
.die.faces-Bane.result--1 { background-image: url('/img/dice/dBane-1.svg'); font-size: 0px; }
.die.faces-Bane.result--2 { background-image: url('/img/dice/dBane-2.svg'); font-size: 0px; }
.die.faces-Bane.result--3 { background-image: url('/img/dice/dBane-3.svg'); font-size: 0px; }

/* .die.inverted { filter: invert(100%); -webkit-filter: invert(100%); } */

.overlay-anim {
    position: absolute;
    padding: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: none;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    animation-name: roll;
    animation-duration: 1s;
    animation-iteration-count: 1;
}
.die:disabled .overlay-anim,
.die[disabled] .overlay-anim {
    pointer-events: none;
}

@keyframes shake {
    0% { -webkit-transform: translate(1px, 1px) rotate(0deg); } 
    10% { -webkit-transform: translate(-1px, -1px) rotate(-1deg); }
    20% { -webkit-transform: translate(-1px, 0px) rotate(1deg); }
    30% { -webkit-transform: translate(0px, 1px) rotate(0deg); }
    40% { -webkit-transform: translate(1px, -1px) rotate(1deg); }
    50% { -webkit-transform: translate(-1px, 1px) rotate(-1deg); }
    60% { -webkit-transform: translate(-1px, 1px) rotate(0deg); }
    70% { -webkit-transform: translate(1px, 1px) rotate(-1deg); }
    80% { -webkit-transform: translate(-1px, -1px) rotate(1deg); }
    90% { -webkit-transform: translate(1px, 1px) rotate(0deg); }
    100% { -webkit-transform: translate(1px, -1px) rotate(-1deg); }
}

@keyframes momentary-hide {
    0% { background-size: 1%; font-size: 0; }
    99% { background-size: 1%; font-size: 0; }
    100% { background-size: 100%; font-size: 18px; }
}

@keyframes roll {
    0% { background-image: url('/img/dice/roll-0.svg'); }
    8% { background-image: url('/img/dice/roll-2.svg'); }
    16% { background-image: url('/img/dice/roll-1.svg'); }
    24% { background-image: url('/img/dice/roll-3.svg'); }
    32% { background-image: url('/img/dice/roll-5.svg'); }
    40% { background-image: url('/img/dice/roll-4.svg'); background-size: 100%; }
    48% { background-image: url('/img/dice/roll-shine.svg'); }
    100% { background-image: none; background-size: 130%; }
}

</style>