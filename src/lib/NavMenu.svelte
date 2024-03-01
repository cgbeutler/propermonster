<script lang="ts">
  import { Link, link } from 'svelte-routing';
  import type { GetPropsParams } from 'svelte-routing/types/Link';
  import Die from './Die.svelte';
    import { closeAllModals } from 'svelte-modals';
    
  function getMainLinkProps(params: GetPropsParams) {
    if (params.isPartiallyCurrent) return { class: "curr-path" };
    return { class: "" }
  }
  function getSubLinkProps(params: GetPropsParams) {
    let { location, href, isPartiallyCurrent, isCurrent } = params;
    if (isCurrent) return { class: "ml20 active curr-path" };
    if (isPartiallyCurrent) return { class: "ml20 active" }

    let pathname = location.pathname;
    console.log( "pathname: " +pathname)
    if (pathname.length <= 1 || pathname[0] !== "/") return { class: "ml20 hidden" };
    const nextSlash = pathname.indexOf("/", 1);
    const rootPath = nextSlash > 0 ? pathname.slice(0, nextSlash) : pathname;
    console.log( "rootpath: " + rootPath)
    if (rootPath.length < 2) return { class: "ml20 hidden" };
    if (href.startsWith(rootPath)) return { class: "ml20 active" }
    if (href.startsWith("/" + rootPath)) return { class: "ml20 active" }
    return { class: "ml20 hidden" };
  }

  const dieHeight: string = "28px";

</script>

<div class="contents">
  <nav class="banded-menu">
    <a class="title-link" href="/" use:link on:click={closeAllModals}>
      <div class="title-gradient">
        <div class="title-float">
          <img class="title-image" src="/img/ProperMonster2.png" alt="Proper Monster"/>
          <div class="title"><h1>Proper<br><span class="nobreak">&ensp;Monster</span></h1></div>
        </div>
      </div>
    </a>
  
    <h2>Dice Rollers</h2>
    <Link to="/ageroller" getProps={getMainLinkProps}>
      <div class="dice-display">
        <Die faces={6} result={6} showPips={true} enabled={false} height={dieHeight} />
        <Die faces={6} result={6} showPips={true} enabled={false} height={dieHeight} />
        <Die faces={6} result={6} showPips={true} enabled={false} invert={true} height={dieHeight} />
      </div>
      <div>
        <h3>Age System Roller</h3>
      </div>
    </Link>
    <Link to="/poolroller" getProps={getMainLinkProps}>
      <div class="dice-display">
        <Die faces={4} result={4} enabled={false} height={dieHeight} />
        <Die faces={6} result={6} enabled={false} height={dieHeight} />
        <Die faces={8} result={8} enabled={false} height={dieHeight} />
        <Die faces={10} result={10} enabled={false} height={dieHeight} />
        <Die faces={12} result={12} enabled={false} height={dieHeight} />
        <Die faces={20} result={20} enabled={false} height={dieHeight} />
      </div>
      <div>
        <h3>Dice Pool Roller</h3>
      </div>
    </Link>
    <Link to="/hnsroller" getProps={getMainLinkProps}>
      <div class="dice-display">
        <Die faces={-3} result={9} enabled={false} height={dieHeight} />
        <Die faces={-4} result={3} showPips={true} enabled={false} height={dieHeight} />
      </div>
      <div>
        <h3>H&S Roller</h3>
      </div>
    </Link>
    <Link to="/poweredroller" getProps={getMainLinkProps}>
      <div class="dice-display">
        <Die faces={6} result={6} showPips={true} enabled={false} height={dieHeight} />
        <Die faces={6} result={6} showPips={true} enabled={false} height={dieHeight} />
      </div>
      <div>
        <h3>Powered Roller</h3>
        <p>(Monster of the Week, Blades, etc.)</p>
      </div>
    </Link>
    <br/>
    <Link to="/eyeroller" getProps={getMainLinkProps}>
      <div class="dice-display">
        <Die faces={-2} result={1} enabled={false} height={dieHeight} />
        <Die faces={-2} result={2} enabled={false} height={dieHeight} />
        <Die faces={-2} result={3} enabled={false} height={dieHeight} />
      </div>
      <div>
        <h3>Eye Roller</h3>
      </div>
    </Link>
    <br>
  </nav>
</div>

<style>
  .contents {
    display: flex; 
    position: sticky;
    top: 0;
    float: left;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;
    pointer-events: auto;
    background-color: black;
    height: 100vh;
    min-height: 100vh;
    max-height: 100vh;
    min-width: 200px;
    max-width: 90vw;
    margin-right: 20px;
    padding: 0px;
    border-right: 2px solid;
    border-color: rgb(44, 44, 44);
  }

  .title-link {
    display: block;
    margin: 0;
    padding: 0;
    border: 0;
  }
  .title-gradient {
  display: flex;
  background: rgb(0,0,0);
  background: linear-gradient(0deg, rgba(0,0,0,1) 13%, #4b4945 15%);
  justify-content: center;
}
.title-float {
  display: block;
  position: relative;
  aspect-ratio: 413 / 200;
  width: 80%;
  max-width: 413px;
  max-height: 200px;
  container-name: title-float;
}
.title-image {
  display: block;
  position: absolute;
  left: 0px;
  top: 0px;
  height: 100%;
  object-fit: contain;
  margin: 0;
  padding: 0;
}
.title {
  display: flex;
  position: absolute;
  height: 90%;
  width: 52%;
  right: 0px;
  padding: 0 5% 10% 0;
  align-items: center;
  container-type: inline-size;
}
.title > h1 {
  display: inline-block;
  width: 100%;
  text-align: left;
  color: #FDF6E3;
  text-shadow: 1px -1px black, 0px -1px black, -1px -1px black, 0px 3px black, 2px 3px black, -1px 2px black;
  padding: 0;
  margin: 0;
  font-family: 'Times New Roman', Times, serif;
  font-size: 25cqw;
}

  .banded-menu h2 {
    color: #c7c2b4;
    font-size: larger;
    margin: 0;
    padding: 4px 2px 0px 2px;
    border-radius: 0px;
    background-clip: padding-box;
    text-align: center;
    margin-bottom: 0.1em;
  }
  .banded-menu h3 {
    color: #c7c2b4;
    font-size: larger;
    margin: 0;
    padding: 4px 2px 0px 2px;
    border-radius: 0px;
    background-clip: padding-box;
    text-align: center;
    margin-bottom: 0.1em;
  }
  .banded-menu p {
    color: #c7c2b4;
    font-size: medium;
    margin: 0;
    padding: 4px 2px 4px 2px;
    border-radius: 0px;
    background-clip: padding-box;
    text-align: center;
    margin-bottom: 0.1em;
  }
  
  .dice-display {
      display: flex;
      flex-wrap: wrap;
      max-width: calc( 48px * 5 );
      padding: 0.3em;
      justify-content: center;
  }

</style>
