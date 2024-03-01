<script lang="ts">
  import { Link } from 'svelte-routing';
  import Die from '../lib/Die.svelte';

  function linkGetProps({ location, href, isPartiallyCurrent, isCurrent }) { return { class: "big-link" }; }
</script>

<div class="title-gradient">
  <div class="title-float">
    <img class="title-image" src="/img/ProperMonster2.png" alt="Proper Monster"/>
    <div class="title"><h1>Proper<br><span class="nobreak">&ensp;Monster</span></h1></div>
  </div>
</div>

<div style="display:block;height:20px"></div>

<div class="page-break">
  <hr/>
  <h1>Main Rollers</h1>
  <hr/>
</div>
<Link to="/poolroller" getProps={linkGetProps}>
  <div class="dice-display-3">
    <Die faces={2} result={2} enabled={false} />
    <Die faces={4} result={4} enabled={false} />
    <Die faces={6} result={6} enabled={false} />
    <Die faces={8} result={8} enabled={false} />
    <Die faces={10} result={10} enabled={false} />
    <Die faces={12} result={12} enabled={false} />
    <Die faces={20} result={20} enabled={false} />
    <Die faces={30} result={30} enabled={false} />
    <Die faces={100} result={100} enabled={false} />
  </div>
  <div>
    <h1>Pool Roller</h1>
    <p>Roll large pools of dice</p>
  </div>
</Link>
<Link to="/poweredroller" getProps={linkGetProps}>
  <div class="dice-display-2">
    <Die faces={6} result={6} showPips={true} enabled={false} />
    <Die faces={6} result={6} showPips={true} enabled={false} />
  </div>
  <div>
    <h1>Powered Roller</h1>
    <p>2d6 Powered System Roller<br>(Monster of the Week, Blades, etc.)</p>
  </div>
</Link>
<div class="page-break">
  <hr/>
  <h1>Other Dice Rollers</h1>
  <hr/>
</div>
<Link to="/ageroller" getProps={linkGetProps}>
  <div class="dice-display-2">
    <Die faces={6} result={6} showPips={true} enabled={false} />
    <Die faces={6} result={6} showPips={true} enabled={false} />
    <Die faces={6} result={6} showPips={true} enabled={false} invert={true} />
  </div>
  <div>
    <h1>Age Roller</h1>
    <p>3d6 Age System Roller<br>(Fantasy Age, Modern Age, etc.)</p>
  </div>
</Link>
<Link to="/eyeroller" getProps={linkGetProps}>
  <div class="dice-display-2">
    <Die faces={-2} result={1} enabled={false} />
    <Die faces={-2} result={2} enabled={false} />
    <Die faces={-2} result={3} enabled={false} />
  </div>
  <div>
    <h1>Eye Roller</h1>
    <p>Experimental Eye Dice roller</p>
  </div>
</Link>
<Link to="/hnsroller" getProps={linkGetProps}>
  <div class="dice-display-2">
    <Die faces={-3} result={9} enabled={false} />
    <Die faces={-4} result={3} showPips={true} enabled={false} />
  </div>
  <div>
    <h1>H&S Roller</h1>
    <p>Hamer & Steel Dice Roller</p>
  </div>
</Link>

<span class="ext-nav"> Created by<a href="http://corybeutler.com">Cory Beutler</a> </span>


<style>

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

.dice-display-2 {
    display: flex;
    flex-wrap: wrap;
    max-width: calc( 48px * 2 );
    min-height: 60px;
    justify-content: center;
}

.dice-display-3 {
    display: flex;
    flex-wrap: wrap;
    max-width: calc( 48px * 3 );
    min-height: 60px;
    justify-content: center;
}

.ext-nav {
  display: block;
  position: absolute;
  right: 0;
  width: fit-content;
  color: whitesmoke;
  margin: 0 auto;
  padding: 0pt 10px;
  text-align: right;
  align-content: right;
}

.ext-nav a {
  display: inline-block;
  margin: 5pt;
}

</style>