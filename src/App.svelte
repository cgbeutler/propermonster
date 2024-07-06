<script lang="ts">
  import { fade } from 'svelte/transition';
  import { Router, Link, link, Route } from 'svelte-routing';
  import { Modals, closeModal, openModal } from 'svelte-modals';
  import NavModal from './lib/NavModal.svelte';
  import NavMenu from "./lib/NavMenu.svelte";

  import NotFound from './routes/NotFound.svelte';
  import Home from "./routes/Home.svelte";
  import AgeRoller from "./routes/ageroller/AgeRoller.svelte";
  import EyeRoller from "./routes/eyeroller/EyeRoller.svelte";
  import PoolRoller from "./routes/poolroller/PoolRoller.svelte";
  import PoweredRoller from './routes/poweredroller/PoweredRoller.svelte';
  import { locationHref } from './lib/stores';
  
  let viewWidth = 0;

  function onKeyPress(event: KeyboardEvent) {
    if (event.repeat) return;
    if (event.key === "Escape") {
      closeModal();
      event.preventDefault();
    }
  }

  let navBtn = null;
  function replayNavBtnAnim() {
    console.log("replay")
    if (!navBtn) return;
    // Hack to clear the animation
    navBtn.style.animation = 'none';
    navBtn.offsetHeight;
    navBtn.style.animation = null;
  }

  $: console.log($locationHref + " != " + new URL("/",$locationHref).href)

</script>

<svelte:window bind:innerWidth={viewWidth} />


<Router>
  <Modals>
    <div slot="backdrop" class="backdrop" transition:fade on:click={closeModal} on:keypress={onKeyPress} />
  </Modals>

  <div class="horizontal">
    {#if $locationHref != new URL("/",$locationHref).href}
      {#if viewWidth >= 1000}
        <div class="nav-embed">
          <NavMenu />
        </div>
      {:else}
        <button bind:this={navBtn} id="nav-button" on:click={()=>openModal(NavModal)} ><img src="/img/ProperMonster2.png" alt="H&S" height="100px"></button>
      {/if}
    {/if}
    
    <div class:float-right={$locationHref != new URL("/",$locationHref).href && viewWidth >= 1000}>
      <Route component="{NotFound}" />
      <Route path="ageroller" component={AgeRoller} />
      <Route path="eyeroller" component={EyeRoller} />
      <Route path="poolroller" component={PoolRoller} />
      <Route path="poweredroller" component={PoweredRoller} />
    </div>
  </div>
  <Route path="/" component={Home} />
</Router>

<style>

  .horizontal {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    width: 100%;
    height: 100%;
    max-height: 100vh;
    max-width: 100vw;
    overflow: auto;
  }

  .backdrop {
    position: fixed;
    z-index: 9;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0,0,0,0.50)
  }
  
  #nav-button {
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    float: left;
    width: 100px;
    height: 100px;
    background-color: transparent;
    margin: 5px;
    padding: 0px;
    transform-origin: 10% 70%;
    transform: translate(6px,8px) scaleX(-1) rotate(-38deg);
    animation-name: peek;
    animation-duration: 2s;
    animation-iteration-count: 1;
  }
  
  .nav-embed {
    display: block;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    align-self: flex-start;
    /* float: left; */
    height: 100vh;
    min-height: 100vh;
    max-height: 100vh;
    min-width: 200px;
    max-width: 90vw;
    margin-right: 0;
    padding: 0;
    border-right: 0;
    z-index: 10;
    /* display: flex; */
    /* justify-content: left; */
    /* align-items: flex-start; */
  }

  .float-right {
    flex-grow: 1;
    flex-shrink: 1;
    /* margin-left: 300px; */
  }

  @keyframes peek {
      0% { transform: translate(-50px,-20px) scaleX(-1) rotate(0deg); }
      100% { transform: translate(6px,8px) scaleX(-1) rotate(-38deg); }
  }

</style>