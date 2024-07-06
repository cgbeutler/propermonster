<script lang="ts">
  import Markdown from "../MarkdownRenderers/Markdown.svelte"
  import type { CompendiumDescription } from "../MotW/Compendium/Shared";

  export let compendiumItem: CompendiumDescription | undefined;
</script>

<div class="item-details">
  {#if !compendiumItem}
    <h4 class="dark">-Unselected-</h4>
  {:else}
    <h2>{compendiumItem.name}</h2>
    <div style="text-align: left;">
      {#if compendiumItem}
        <h4>Short Description</h4>
        <Markdown source={compendiumItem.description}/>
        <h4>Long Description</h4>
        <Markdown source={compendiumItem.longDescription}/>
      {/if}
    </div>
  {/if}
</div>

<style>
  h4 { margin-top: 0; }
  
  .item-details {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    overflow: auto;
    gap: 5px;
    flex: 1 1;
    padding: 8px 24px;
    background-color: rgb(26, 26, 26);
    border-radius: 8px;
  }
</style>