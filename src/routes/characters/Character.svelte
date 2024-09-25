<svelte:options runes={true} />
<script lang="ts">
  import { localCharacter } from '../../lib/stores.svelte';
  import { Link, Route, Router } from 'svelte-routing';
  import { validate } from 'uuid';
  import Build from './build/Build.svelte';
  import CharacterMenu from './slideouts/CharacterMenu.svelte';
  import Play from './play/Play.svelte';

  let { id }: { id: string } = $props()
  
  let character = $state(localCharacter);
  let error: string | undefined = $derived.by(() => {
    // character = id == 'local' ? localCharacter : getCharacter(id);
    if (!character) {
      if (id !== 'local' && !validate(id)) return `Could not load character: Invalid ID.`;
      return `Could not load character.`;
    }
    return undefined
  });
</script>

<div id="character-page">
  {#if id === undefined || !character}
    <h2>Loading...</h2>
  {:else if error}
    <div>
      <h2>Error</h2>
      <p>{error}</p>
      <Link to="/characters">Return to Characters List</Link>
    </div>
  {:else}

    <CharacterMenu id={id} slim />

    <div id="character-page-content">
      <Router>
        <Route path="/build/*"> <Build bind:character={character}/> </Route>
        <Route path="/play/*"> <Play id={id} bind:character={character}/> </Route>
      </Router>
    </div>
  {/if}
</div>

<style>
  
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