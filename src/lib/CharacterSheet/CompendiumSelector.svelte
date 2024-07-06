<script lang="ts">
  import { openModal } from "svelte-modals";
  import type { CompendiumDescription } from "../MotW/Compendium/Shared";
  import CompendiumSelectionModal from "./CompendiumSelectionModal.svelte";
  import CompendiumSummaryDisplay from "./CompendiumSummaryDisplay.svelte";
  import { NIL } from "uuid";

  export let selectedId: string | undefined = undefined;
  export let compendium: Array<CompendiumDescription>;
  export let typeDisplayName: string = "Item";
  export let lineageId: string | undefined = undefined;
  export let classId: string | undefined = undefined;
  export let constitutionId: string | undefined = undefined;

  let description: CompendiumDescription | undefined;
  $: description = selectedId == null || compendium == null ? undefined : compendium.find( it => it.id == selectedId );

  function boxClicked() {
    openModal( CompendiumSelectionModal, {
      compendium: compendium,
      currentId: selectedId,
      typeDisplayName,
      lineageId,
      classId,
      constitutionId,
      onSelected: (newId: string | undefined) => { selectedId = newId; }
    });
  }

</script>

<button class="outer-box" on:click={boxClicked}>
  {#if description == undefined}
    <span class="dark">No {typeDisplayName} selected.</span>
  {:else}
    <CompendiumSummaryDisplay bind:compendiumItem={description}></CompendiumSummaryDisplay>
  {/if}
</button>

<style>
  .outer-box {
    border: 1px solid white;
    border-radius: 8px;
    padding: 10px;
    width: 100%;
    max-width: 500px;
    overflow: none;
  }
</style>