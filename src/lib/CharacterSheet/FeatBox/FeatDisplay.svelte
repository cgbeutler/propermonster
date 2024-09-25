<svelte:options runes={true}/>
<script lang="ts">
  import {type CharacterModel} from "../../MotW/Character/CharacterModel.svelte";
  import Markdown from "../../MarkdownRenderers/Markdown.svelte";
  import FeatInput from "../FeatInputs/FeatInput.svelte";
  import type {FeatModel} from "../../MotW/Compendium/Feat.svelte";

  interface Props {
    character: CharacterModel;
    feat: FeatModel;
  }
  let {
    character = $bindable(),
    feat,
  }: Props = $props();
  
  let expanded = $state(false);
  function onclick() { expanded = !expanded; }
</script>

<div class="feat-display">
  <button class="feat-header" {onclick}>
    {#if expanded}<div class="down-arrow" aria-label="collapse"></div>{:else}<div class="right-arrow" aria-label="expand"></div>{/if}
    {feat.featDesc.name}
    {#if feat.featDesc.vibe}(Vibe){/if}
    {#if !feat.isValid}<div class="invalid-icon">!</div>{/if}
  </button>

  {#if !expanded}
    <div class="feat-display-short">
      <Markdown source={feat.featDesc.description} />
    </div>
  {:else}
    <div class="feat-display-long">
      <Markdown source={feat.featDesc.longDescription ?? feat.featDesc.description} />

      {#if feat.featDesc.attacks !== undefined}
        <div>
        {#each feat.featDesc.attacks as attack}
          <div>Attack: {attack.harm}-harm</div>
<!--          categories?: Array<string>;-->
<!--          amendResults?: ResultDescription;-->
<!--          replaceResults?: ResultDescription;-->
        {/each}
        </div>
      {/if}
<!--      modAttack?: Array<AttackModifier>;-->
      {#if feat.featDesc.armors !== undefined}
        <div>
          {#each feat.featDesc.armors as armor}
            <div>Armor: {armor.armor}-armor{#if armor.armorCondition !== undefined}<br>&nbsp;&nbsp;Condition: {armor.armorCondition}{/if}</div>
<!--            categories?: Array<string>;-->
          {/each}
        </div>
      {/if}
<!--      modArmor?: Array<ArmorModifier>;-->

      {#if feat.featDesc.tags !== undefined && feat.featDesc.tags.length > 0}Tags: <Markdown isInline source={"`#" + feat.featDesc.tags.join("` `#") + "`"} />{/if}
      <!--tagInputs?: Array<TagChoice>;  TODO: Add tag input -->
      
      {#if feat.featDesc.offsetMaxLuck !== undefined}<div>+{feat.featDesc.offsetMaxLuck} Luck</div>{/if}
      {#if feat.featDesc.offsetMaxHealth !== undefined}<div>+{feat.featDesc.offsetMaxHealth} Luck</div>{/if}
      {#if feat.featDesc.offsetStat !== undefined}<div>+{feat.featDesc.offsetStat.offset} {feat.featDesc.offsetStat.ability} (max {feat.featDesc.offsetStat.max})</div>{/if}
      {#if (feat.featDesc.addRotes??0) > 0}<div>+{feat.featDesc.addRotes} Rotes</div>{/if}

      <!--passives?: Array<Passive>; Usually covered by the longDescription?-->

      {#if feat.featDesc.actions !== undefined && feat.featDesc.actions.length > 0}
        <div>
          {#if feat.featDesc.actions.length === 1}You get this move:{:else}You get these moves:{/if}<br>
          {#each feat.featDesc.actions as action}
            <!--Action Display-->
            {action.name}<br>
          {/each}
        </div>
      {/if}
      {#if feat.featDesc.autoActions !== undefined && feat.featDesc.autoActions.length > 0}
        <div>
          {#if feat.featDesc.autoActions.length === 1}You get this automatic move:{:else}You get these automatic moves:{/if}<br>
          {#each feat.featDesc.autoActions??[] as autoAction}
            <!--AutoAction Display-->
            {autoAction.name}<br>
          {/each}
        </div>
      {/if}
      
      <!-- We may not need the Action Modifiers to be shown. Just assume the descriptions cover it? -->
      <!--{#if feat.featDesc.modMoves !== undefined && feat.featDesc.modMoves.length > 0}-->
      <!--  <div>-->
      <!--    {#if feat.featDesc.modMoves.length === 1}The following moves are modified:{/if}<br>-->
      <!--    {#each feat.featDesc.modMoves as actionModifier}-->
      <!--      {#each actionModifier.applyToMoves as move}-->
      <!--        &lt;!&ndash;ActionModifier Display&ndash;&gt;-->
      <!--        {move === '*' ? "All Moves" : actionModifier.applyToMoves}-->
      <!--      {/each}-->
      <!--    {/each}-->
      <!--  </div>-->
      <!--{/if}-->

      <!--      inputs?: Array<UserInput>;-->
      <!--      showInputs?: Array<string>; // TODO: HOW!? Borrows an input to show in the expanded view!-->
      {#if feat.inputs !== undefined && feat.inputs.length > 0}
        <div>
        {#each feat.inputs as input}
          <FeatInput input={input} />
        {/each}
        </div>
      {/if}

<!--      showInputsInSummary?: Array<string>; // Displays the short name string next to the short description.-->
<!--      modChooseInput?: Array<ChooseModifier>;-->

      {#each feat.subFeats as subFeat}
        <svelte:self bind:character={character} feat={subFeat} />
      {/each}
    </div>
  {/if}
</div>

<style>
  .feat-display {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    background-color: var(--dark-gray);
    border-radius: 8px;
    padding: 4px;
    text-align: left;
  }
  
  .feat-header {
    position: relative;
    text-align: left;
    padding: 8px;
    margin: 0;
  }
  
  .invalid-icon {
    position: absolute;
    top: 50%;
    right: 0;
    width: 1rlh;
    height: 1rlh;
    text-align: center;
    transform: translate(0,-50%);
    color: var(--c-warning);
    font-weight: bolder;
  }
  
</style>
