<script lang="ts">
  import { closeModal } from 'svelte-modals'
  import {type PlaybookDesc, Playbooks} from "../MotW/Compendium/PlaybookCompendium";
  import Markdown from "../MarkdownRenderers/Markdown.svelte";
  
  export let isOpen: Boolean | undefined;
  export let currentId: string | undefined = undefined;
  export let oninput: (newId: string | undefined) => void = (_) => {};

  let options: Array<PlaybookDesc> = Playbooks;
  let currentItem: PlaybookDesc | undefined = undefined;
  let newItem: PlaybookDesc | undefined = undefined;
  function currentItemUpdated( ci: string | undefined ) {
    currentItem = options.find(it => it.id == ci );
    select(currentItem);
  }
  $: currentItemUpdated( currentId );
  
  let innerWidth = 0;
  let innerHeight = 0;

  function select(item: PlaybookDesc | undefined) {
    newItem = item;
  }

  function apply() {
    closeModal();
    oninput(newItem?.id);
  }
  
  function blurbScoreToOpacity(blurbScore: number) {
    return blurbScore===3?1:blurbScore===2?0.4:0.1;
  }
</script>

<svelte:window bind:innerWidth bind:innerHeight />

{#if isOpen}
  <div role="dialog" class="modal">
    <div class="panel">
      <div class="header">
        <h2 style="flex-grow: 1; flex-basis: 50%">Playbook</h2>
      </div>
      <div class="body">
        {#if innerWidth > 768 || newItem === undefined}
          <div class="item-list">
            <button class="dark" class:selected={currentItem === undefined} on:click={()=>select(undefined)}>
              None
            </button>
              {#each options as option}
                <button class:selected={option.id === currentItem?.id} on:click={()=>select(option)}>
                  <span style="font-size:1.5lh;"><b>The {option.name}</b></span><br>
                  <img src="/img/icons/FantasyIcon.svg" style="height:2lh;opacity:{blurbScoreToOpacity(option.vibe.fantasy??0)}" alt="Odd: {option.vibe.fantasy}">
                  <img src="/img/icons/ActionIcon.svg" style="height:2lh;opacity:{blurbScoreToOpacity(option.vibe.action??0)}" alt="Action: {option.vibe.action}">
                  <img src="/img/icons/MysteryIcon.svg" style="height:2lh;opacity:{blurbScoreToOpacity(option.vibe.mystery??0)}" alt="Mystery: {option.vibe.mystery}">
                  <img src="/img/icons/SupportIcon.svg" style="height:2lh;opacity:{blurbScoreToOpacity(option.vibe.support??0)}" alt="Support: {option.vibe.support}">
<!--                  <img src="/img/icons/StoryIcon.svg" style="height:2lh;opacity:{blurbScoreToOpacity(option.blurbScore.storySway)}" alt="Writing: {option.blurbScore.storySway}">-->
                </button>
              {/each}
          </div>
        {/if}
        {#if innerWidth > 768 || newItem !== undefined}
          <div class="item-details">
            {#if !newItem}
              <h4 class="dark">-Unselected-</h4>
            {:else}
              <h2 style="margin-block-start:0">The {newItem.name}</h2>
              <img src="/img/icons/FantasyIcon.svg" style="height:2lh;opacity:{blurbScoreToOpacity(newItem.vibe.fantasy??0)}" alt="Odd: {newItem.vibe.fantasy}">
              <img src="/img/icons/ActionIcon.svg" style="height:2lh;opacity:{blurbScoreToOpacity(newItem.vibe.action??0)}" alt="Action: {newItem.vibe.action}">
              <img src="/img/icons/MysteryIcon.svg" style="height:2lh;opacity:{blurbScoreToOpacity(newItem.vibe.mystery??0)}" alt="Mystery: {newItem.vibe.mystery}">
              <img src="/img/icons/SupportIcon.svg" style="height:2lh;opacity:{blurbScoreToOpacity(newItem.vibe.support??0)}" alt="Support: {newItem.vibe.support}">
<!--              <img src="/img/icons/StoryIcon.svg" style="height:2lh;opacity:{blurbScoreToOpacity(newItem.blurbScore.storySway)}" alt="Writing: {newItem.blurbScore.storySway}">-->
              <div style="text-align: left;">
                <Markdown source={newItem.description}/>
                <Markdown source={'> ' + newItem.blurb}/>
              </div>
            {/if}
          </div>
<!--          <CompendiumDisplay compendiumItem={newItem} />-->
        {/if}
      </div>
      <div class="footer">
        {#if innerWidth <= 768 && newItem !== undefined}
          <button on:click={()=>{newItem = undefined;}}>Change Selection</button>
        {/if}
        <div style="display: flex; flex-direction: row; gap: 4px; justify-content: end; flex-grow: 1; flex-basis: 50%">
          <button class="bright" on:click={apply} disabled={currentId === newItem?.id}>
            {#if currentId === newItem?.id}
              No Changes
            {:else if innerWidth <= 768 && newItem === undefined}
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