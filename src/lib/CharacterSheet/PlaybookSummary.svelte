<script lang="ts">
  import Markdown from "../MarkdownRenderers/Markdown.svelte"
  import {type PlaybookDesc, PlaybookLookup, Playbooks} from "../MotW/Compendium/PlaybookCompendium";
  import {openModal} from "svelte-modals";
  import PlaybookSelectionModal from "./PlaybookSelectionModal.svelte";

  export let value: PlaybookDesc | undefined;
</script>

<div class="item-details">
  {#if !value}
    <h2 style="color: gray;">Playbook</h2>
    <p style="color: gray;">None</p>
  {:else}
    <h2>{value.name}</h2>
    <div style="text-align: left;">
      <h4>Short Description</h4>
      <Markdown source={value.description}/>
      <h4>Long Description</h4>
      <Markdown source={value.longDescription}/>
    </div>
  {/if}
</div>

<style>
  h4 { margin-top: 0; }
  
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
    background-color: rgb(26, 26, 26);
    border-radius: 8px;
  }
  .item-details h2,
  .item-details p {
    padding: 0;
    margin: 0;
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
  .add-button > img {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 1.5em;
    height: 1.5em;
    /*transform: translate(-50%,-50%);*/
  }
</style>