<svelte:options runes={true}/>
<script lang="ts">
  import FeatDisplay from "./FeatDisplay.svelte";
  import {type CharacterModel} from "../../MotW/Character/CharacterModel.svelte";
  import type {FeatModel} from "../../MotW/Compendium/Feat.svelte";

  interface Props {
    character: CharacterModel;
    label: string | undefined;
    feats: Array<FeatModel>;
    min?: number | undefined;
    max?: number | undefined;
    options?: Array<string>;
    hideAdd?: Boolean;
    readonly?: Boolean;
  }
  let {
    character = $bindable(),
    label,
    feats,
    min = undefined,
    max = undefined,
    options = [],
    hideAdd = false,
    readonly = false,
  }: Props = $props();

  let numFeats = $derived(feats?.length ?? 0);

  let isFeatsVisible = $state(true);  
  function toggle() { isFeatsVisible = !isFeatsVisible; }
</script>

<div class="feat-box">
  <div class="feat-box-header">
    <button class="feat-box-label" onclick={toggle} disabled={numFeats<=0}>
      {#if numFeats > 0}
        {#if isFeatsVisible}<div class="down-arrow" aria-label="collapse"></div>{:else}<div class="right-arrow" aria-label="expand"></div>{/if}
      {/if}
      {label}
    </button>
    {numFeats}{#if (min !== undefined && numFeats < min)}/{min}{:else if (max !== undefined && numFeats > max)}/{max}{/if}
    {#if !(hideAdd || readonly)}<button><img src="/img/icons/Pencil.svg" style="height: 1lh" alt="edit"></button>{/if}
  </div>
  {#if isFeatsVisible}
    {#if !feats || feats.length === 0}
      <div style="color: var(--fg-color-dim);padding-bottom: 0.5rlh;">None</div>
    {:else}
      {#each feats as feat}
        <FeatDisplay bind:character={character} feat={feat} />
      {/each}
    {/if}
  {/if}
</div>

<style>
  .feat-box {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin: 2px;
    padding: 4px;
    border: 3px solid var(--light-gray);
    border-radius: 14px;
  }
  
  .feat-box-header {
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    align-items: center;
    gap: 5px;
    height: 1.8rlh;
    margin: 0 0.5rlh;
  }
  
  .feat-box-header button {
    background-color: transparent;
    height: 1.8rlh;
    border-radius: 0;
    padding: 0;
    margin: 0;
  }
  
  .feat-box-label {
    color: var(--fg-color);
    display: inline-block;
    text-align: left;
    flex-grow: 1;
  }
  .feat-box-label:disabled {
    color: var(--fg-color)
  }
</style>
