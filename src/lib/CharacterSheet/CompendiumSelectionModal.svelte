<script lang="ts">
  import { closeModal } from 'svelte-modals'
  import type { CompendiumDescription } from '../MotW/Compendium/Shared';
  import CompendiumSummaryDisplay from './CompendiumSummaryDisplay.svelte';
  import { groupBy } from '../Helpers/ArrayHelpers';
  import CompendiumDisplay from './CompendiumDisplay.svelte';
  
  export let isOpen: Boolean | undefined;
  export let compendium: Array<CompendiumDescription> = [];
  export let currentId: string | undefined = undefined;
  export let onSelected: (newId: string | undefined) => void = (_) => {};

  export let typeDisplayName: string = "Item";
  export let lineageId: string | undefined = undefined;
  export let classId: string | undefined = undefined;
  export let constitutionId: string | undefined = undefined;

  let recommendations = groupBy( compendium, it => {
    if (lineageId && it.lineages?.includes(lineageId)) return "lineage";
    if (classId && it.lineages?.includes(classId)) return "class";
    if (constitutionId && it.lineages?.includes(constitutionId)) return "constitution";
    return ""
  } );

  let currentItem: CompendiumDescription | undefined = undefined;
  let newItem: CompendiumDescription | undefined = undefined;
  function currentItemUpdated( ci: string | undefined ) {
    currentItem = compendium.find( it => it.id == ci );
    select(currentItem);
  }
  $: currentItemUpdated( currentId );
  
  let innerWidth = 0;
  let innerHeight = 0;

  function select(item: CompendiumDescription | undefined) {
    newItem = item;
  }

  function apply() {
    closeModal();
    onSelected(newItem?.id);
  }
</script>

<svelte:window bind:innerWidth bind:innerHeight />

{#if isOpen}
  <div role="dialog" class="modal">
    <div class="panel">
      <div class="header">
        <h2 style="flex-grow: 1; flex-basis: 50%">Select {typeDisplayName}</h2>
      </div>
      <div class="body">
        {#if innerWidth > 768 || newItem == undefined}
          <div class="item-list">
            <button class="dark" class:selected={newItem == undefined} on:click={()=>select(undefined)}>
              None
            </button>
            {#each Object.entries(recommendations) as [key, group]}
              {#if key}
                <details open>
                  <summary class="h3">Recommended by {key}</summary>
                  {#each group as option}
                    <button class:selected={option.id == newItem?.id} on:click={()=>select(option)}>
                      <CompendiumSummaryDisplay compendiumItem={option}></CompendiumSummaryDisplay>
                    </button>
                  {/each}
                </details>
              {:else}
                <h3>All other options</h3>
                {#each group as option}
                  <button class:selected={option.id == newItem?.id} on:click={()=>select(option)}>
                    <CompendiumSummaryDisplay compendiumItem={option}></CompendiumSummaryDisplay>
                  </button>
                {/each}
              {/if}
            {/each}
          </div>
        {/if}
        {#if innerWidth > 768 || newItem != undefined}
          <CompendiumDisplay compendiumItem={newItem} />
        {/if}
      </div>
      <div class="footer">
        {#if innerWidth <= 768 && newItem != undefined}
          <button on:click={()=>{newItem = undefined;}}>Change Selection</button>
        {/if}
        <div style="display: flex; flex-direction: row; gap: 4px; justify-content: end; flex-grow: 1; flex-basis: 50%">
          <button class="bright" on:click={apply} disabled={currentId == newItem?.id}>
            {#if currentId == newItem?.id}
              No Changes
            {:else if innerWidth <= 768 && newItem == undefined}
              Select None
            {:else}
              Apply
            {/if}
          </button>
          <button on:click={closeModal}>Cancel</button>
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  .modal {
    position: fixed;
    z-index: 10;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    /* allow click-through to backdrop */
    pointer-events: none;
  }

  .panel {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 8px;
    flex: 1 1;
    min-width: 240px;
    max-width: 90%;
    max-height: 90%;
    border-radius: 6px;
    padding: 10px;
    background: #222222;
    pointer-events: auto;
  }

  p {
    text-align: center;
    margin: 10px;
  }

  .header {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: stretch;
  }

  .body {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    gap: 12px;
    overflow: auto;
  }

  .footer {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: stretch;
  }

  .item-list {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    overflow: auto;
    gap: 5px;
    flex: 1 1;
  }

  .selected {
    border: 1px solid white;
  }

</style>