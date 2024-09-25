<svelte:options runes={true} />
<script lang="ts">
  import "../../../lib/css/PointTable.css"
  import type { CharacterModel } from "../../../lib/MotW/Character/CharacterModel.svelte";
  import Spinner from "../../../lib/Inputs/Spinner.svelte";
  import PlaybookDisplay from "../../../lib/CharacterSheet/PlaybookDisplay.svelte";
  import FeatBox from "../../../lib/CharacterSheet/FeatBox/FeatBox.svelte";

  interface Props { character: CharacterModel }
  let { character = $bindable() }: Props = $props()
  
  function onNameInput(e: Event) { character.name = (<HTMLInputElement>e.target)?.value ?? "";}
</script>

<div class="sheet-block">
  <h1><img src="/img/icons/HammerIcon.svg" alt="" style="height:1em"/> Builder <img src="/img/icons/HammerIcon.svg" alt="" style="height:1em;transform:scaleX(-1)"/></h1>

  <PlaybookDisplay value={character.playbookId} oninput={v => character.playbookId = v} />
  
  <FeatBox bind:character={character} label="Granted Features" feats={character.startingFeats} hideAdd/>
  <FeatBox bind:character={character} label="Starting Moves" feats={[]} min={character.playbook?.movesToChoose} />
  <FeatBox bind:character={character} label="Starting Gear" feats={[character.gearFeat]} hideAdd/>
  
  <h2>Look</h2>
  <h2>Starting Ratings (Stats)</h2>
  <h2>History</h2>
  
  <div class="sheet-block-v">
    <div class="sheet-block-h">
      <label class="label-h" style="line-height: 1em;">
        Character Name:
        <input class:needs-input={!character.name} style="align-self: stretch;" placeholder="Unnamed Character" value={character.name} oninput={onNameInput}>
        {character.name}
      </label>
    </div>

    <div class="sheet-block-h">
      <div class="sheet-block-v">
        <h2 style="margin-bottom: 0;">Experience</h2>

<!--        <p style="font-size:14pt">[{#each {length: character.experience} as _,i }◈{/each}{#each {length: 10-(character.experience)} as _,i }◇{/each}]</p>-->
<!--        <Spinner bind:value={character.experience} min={0} max={10} maxAction={levelUp}>-->
<!--          <img slot="max-icon" src="/img/icons/PromotionIcon.svg" alt="Level Up"/>-->
<!--        </Spinner>-->


        <h2>Level</h2>

        <Spinner bind:value={character.level} min={1} max={15} />
      </div>
    </div>
  </div>
</div>


<style src="CharacterSheet.css">
  .label-h {
    display: flex;
    flex-direction: row;
    gap: 0 10px;
  }

  .needs-input {
    border: solid 1px palegoldenrod;
  }

  /* This worked okay as a Balance display that doubled as an expanding textbox
  p[contenteditable] {
    margin: 0px 0px 0px 24px;
    flex-grow: 1;
    width: calc(100% - 34px);
    max-width: none;
    
    font-family: monospace;
    text-rendering: auto;
    letter-spacing: normal;
    word-spacing: normal;
    line-height: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    appearance: auto;
    -webkit-rtl-ordering: logical;
    resize: auto;
    cursor: text;
    white-space-collapse: preserve;
    text-wrap: wrap;
    overflow-wrap: break-word;
    background-color: field;
    column-count: initial !important;
    writing-mode: horizontal-tb !important;
    border-width: 1px;
    border-style: solid;
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
    border-image: initial;
    padding: 2px;
  } */
</style>