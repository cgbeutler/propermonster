<svelte:options runes={true} />
<script lang="ts">
  import Markdown from "../MarkdownRenderers/Markdown.svelte"
  import {type PlaybookDesc, PlaybookLookup, Playbooks} from "../MotW/Compendium/PlaybookCompendium";
  import {openModal} from "svelte-modals";
  import PlaybookSelectionModal from "./PlaybookSelectionModal.svelte";

  interface Props {
    value: string | undefined;
    oninput: (value: string|undefined) => void;
    readonly?: Boolean | undefined; 
  }
  let {
    value,
    oninput,
    readonly = undefined,
  }: Props = $props();
  
  let playbook: PlaybookDesc | undefined = $derived(!value ? undefined : PlaybookLookup[value]);
  
  function onclick() {
    openModal(PlaybookSelectionModal, {currentId: value, oninput})
  }
</script>

<div class="feat-box">
    {#if !value || !playbook}
      <div class="item-details dark">
        <h2 style="color: gray;">Playbook</h2>
        <p style="color: gray;">None</p>
        {#if !readonly}
          <img class="add-icon" src="/img/icons/PlusIcon.svg" alt="edit">
        {/if}
      </div>
    {:else}
      <div class="item-details">
        <h2>The {playbook.name}</h2>
        <div style="text-align: left;">
          <Markdown source={playbook.description}/>
        </div>
        {#if !readonly}
          <img class="pencil-icon" src="/img/icons/Pencil.svg" alt="edit">
        {/if}
      </div>
    {/if}
    {#if !readonly}
      <button class="add-button" {onclick}></button>
    {/if}
</div>

<style>
  .feat-box {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin: 2px;
    padding: 4px;
    border: 3px solid var(--light-gray);
    border-radius: 14px;
  }
  
  .item-details {
    position: relative;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    overflow: auto;
    min-height: 2lh;
    gap: 5px;
    flex: 1 1;
    padding: 18px 24px 12px 24px;
    background-color: var(--gray);
    border-radius: 8px;
  }
  .item-details h2,
  .item-details p {
    padding: 0;
    margin: 0;
  }
  .item-details.dark {
      background-color: var(--dark-gray);
  }
  
  .add-button {
    position: absolute;
    background-color: transparent;
    left:0;
    right:0;
    top:0;
    bottom:0;
    margin: 0;
    padding: 0;
    border-width: 0;
  }
  .add-icon,
  .pencil-icon {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 1.5em;
    height: 1.5em;
    /*transform: translate(-50%,-50%);*/
  }
</style>