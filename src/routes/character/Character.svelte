<script lang="ts">
  import { localCharacter, getCharacter } from '../../lib/stores'
  import { onMount } from 'svelte';
  import { Link, Route, Router, navigate } from 'svelte-routing';
  import { NIL, validate } from 'uuid';
  import type { Writable } from 'svelte/store';
  import type { Character } from '../../lib/MotW/Character/PlayerCharacter';
  import Build from './build/Build.svelte';
  import CharacterMenu from '../../lib/Slideouts/CharacterMenu.svelte';
  import Play from './play/Play.svelte';

  export let id: string = NIL;
  let character: Writable<Character>;
  $: character = id == "local" ? localCharacter : getCharacter(id)
  let error: string | undefined;

  onMount(async () => {
    error = !!character || $character == null ? undefined : `Could not load character.`;
    if (error) {
      // Try to get more specific
      if (id !== "local" && !validate(id)) error = `Could not load character: Invalid ID.`;
      return;
    }
    if (window.location.pathname.endsWith(`/character/${id}`) || window.location.pathname.endsWith(`/character/${id}/`)) {
      console.log("redirecting to play view")
      navigate( `/character/${id}/play`, {replace:true} );
      return;
    }
  });
</script>

<div id="character-page">
  {#if !character || $character == null}
    <h2>Loading...</h2>
  {:else if error}
    <h2>Error</h2>
    <p>{error}</p>
    <Link to="/characters">Return to Characters List</Link>
  {:else}

    <CharacterMenu bind:id={id} slim />

    <div id="character-page-content">
      <Router>
        <Route path="/build/*"> <Build bind:id={id} bind:character={character}/> </Route>
        <Route path="/play/*"> <Play bind:id={id} bind:character={character}/> </Route>
      </Router>
    </div>
  {/if}
</div>

<style>

  #nav-button {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 50px;
    height: 50px;
    z-index: 10;
    background-color: transparent;
    margin: 5px;
    padding: 0px;
  }

  #character-page {
    display: flex;
    flex-direction: row;
    justify-content: start;
    min-width: 100%;
    min-height: 100%;
    width: 100%;
  }

  #character-page-content {
    display: flex;
    flex-direction: column;
    width: auto;
    align-items: center;
    flex: 1 1 auto;
    overflow: auto;
  }

  h2 { font-size: 18pt; margin-top: 6pt; margin-bottom: 2pt; }

</style>