<svelte:options runes={true}/>
<script lang="ts">
  import type { CharacterModel } from '../../../lib/MotW/Character/CharacterModel.svelte';
  import { Route, Router } from 'svelte-routing';

  interface Props {
    id: string,
    character: CharacterModel
  }
  let {
    id,
    character = $bindable()
  }: Props = $props();
</script>

<div class="sheet-block">
  <div style="display:flex; flex-direction: column;">
    <p id="name-label">{character.name && character.name.length>0 ? character.name : "Unnamed Character"}</p>
  </div>
  <div>
    HP Display
  </div>
</div>

<Router>
  <Route path="/"> Summary Coming Soon </Route>
  <Route path="/abilities"> Abilities Coming Soon </Route>
</Router>

<style>
</style>