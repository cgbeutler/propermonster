<script lang="ts">
  import { onMount } from 'svelte';
  import type { Writable } from 'svelte/store';
  import type { Character } from '../../../lib/MotW/Character/PlayerCharacter';
  import { Route, Router } from 'svelte-routing';
  import Summary from './Summary.svelte';
  import Abilities from './abilities/Abilities.svelte';
  import Skills from './skills/Skills.svelte';

  export let id: string;
  export let character: Writable<Character>;
  let error: string | undefined;

  onMount(async () => { error = !!character || $character == null ? undefined : `Failed to load character`; });
</script>

{#if error}
  <div class="sheet-block">{error}</div>
{:else if !character || $character == null}
  <h2>Loading...</h2>
{:else}

  <div class="sheet-block">
    <div style="display:flex; flex-direction: column;">
      <p id="name-label">{$character.name && $character.name.length>0 ? $character.name : "Unnamed Character"}</p>
    </div>
    <div>
      HP Display
    </div>
  </div>

  <Router>
    <Route path="/"> <Summary bind:id={id} bind:character={character}/> </Route>
    <Route path="/skills"> <Skills bind:character={character}/> </Route>
    <Route path="/abilities"> <Abilities bind:character={character}/> </Route>
  </Router>
  
{/if}

<style>
</style>