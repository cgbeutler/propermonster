<script lang="ts">
  import { Router, Link, link, Route } from 'svelte-routing';
  import NotFound from './routes/NotFound.svelte';
  import Home from "./routes/Home.svelte";
  import AgeRoller from "./routes/ageroller/AgeRoller.svelte";
  import EyeRoller from "./routes/eyeroller/EyeRoller.svelte";
  import HnsRoller from './routes/hnsroller/HnsRoller.svelte';
  import PoolRoller from "./routes/poolroller/PoolRoller.svelte";
  import PoweredRoller from './routes/poweredroller/PoweredRoller.svelte';

  function backLinkGetProps({ location, href, isPartiallyCurrent, isCurrent }) {
    if (href === "/") return isCurrent ? { class: "hidden" } : {};
    if (isPartiallyCurrent || isCurrent) return { class: "active" };
    return { class: "hidden" };
  }
  function forwardLinkGetProps({ location, href, isPartiallyCurrent, isCurrent }) {
    if (isPartiallyCurrent || isCurrent) return { class: "hidden" };

    let pathname = location.pathname;
    if (pathname[pathname.length-1] === "/") pathname = pathname.slice(0,-1);
    let locCount, hrefCount;
    for(var i = locCount = 0; i < pathname.length; locCount += +("/" === pathname[i++]));
    for(var i = hrefCount = 0; i < href.length; hrefCount += +("/" === href[i++]));
    if (hrefCount - locCount > 1) return { class: "hidden" };
    if (!href.startsWith(pathname)) return { class: "hidden" }
    return {};
  }
</script>


<Router>
  <nav>
    <Link to="/" id="home-button" getProps={backLinkGetProps}><img src="/img/home.svg" alt="H" /></Link>
    <Link to="/dice" getProps={backLinkGetProps}>Dice</Link>
    <Link to="/dice/ageroller" getProps={backLinkGetProps}>Age Roller</Link>
    <Link to="/dice/motwroller" getProps={backLinkGetProps}>MotW Roller</Link>
    <Link to="/dice/eyeroller" getProps={backLinkGetProps}>Eye Roller</Link>
  </nav>
  <nav>
    <Link to="/dice" getProps={forwardLinkGetProps}>Dice</Link>
    <Link to="/dice/ageroller" getProps={forwardLinkGetProps}>Age Roller</Link>
    <Link to="/dice/motwroller" getProps={forwardLinkGetProps}>MotW Roller</Link>
    <Link to="/dice/eyeroller" getProps={forwardLinkGetProps}>Eye Roller</Link>
  </nav>
  
  <Route component="{NotFound}" />
  <Route path="/" component={Home} />
  <Route path="ageroller" component={AgeRoller} />
  <Route path="eyeroller" component={EyeRoller} />
  <Route path="hnsroller" component={HnsRoller} />
  <Route path="poolroller" component={PoolRoller} />
  <Route path="poweredroller" component={PoweredRoller} />
</Router>
