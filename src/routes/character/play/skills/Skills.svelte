<script lang="ts">
  import type { Writable } from 'svelte/store';
  import type { Character } from '../../../../lib/MotW/Character/PlayerCharacter';
  import { ExplorationSkills, ExplorationStats, SocialSkills, SocialStats } from '../../../../lib/MotW/Character/CharacterEnums';
  import { diceCheck } from '../../../../lib/Toast/DiceCheck.svelte';

  export let character: Writable<Character>;

  let innerWidth = 0;
  let innerHeight = 0;
  
  function formatMod( mod: number ): string {
    if (mod < -1) return "--";
    return (mod < 0 ? "" : "+") + mod;
  }
  
  let SocialSkillsSorted = Array.from(SocialSkills).sort();
  let ExplorationSkillsSorted = Array.from(ExplorationSkills).sort();
</script>

<svelte:window bind:innerWidth bind:innerHeight />

{#if innerWidth > 768}
  <div class="sheet-block">
    
    <div class="sheet-block-h">
      <div class="sheet-block-v">
        <h2>Social Skills</h2>
        <div class="skill-grid">
          {#each SocialStats as stat }
            <div class="skill-cell">
              <button class="passive-button" on:click={diceCheck(stat, $character.GetStat(stat), [20])}>{formatMod($character.GetStat(stat))}</button>
              <p style="text-align: center;">{stat}</p>
            </div>
          {/each}
          <div class="grid-divider"/>
          {#each SocialSkills as skill }
            <div class="skill-cell">
              <div class="skill-cell-row">
                <label class="inspiration-check" class:checked={$character.skills[skill].inspiration}>
                  <input type="checkbox" bind:checked={$character.skills[skill].inspiration}>
                </label>
                <button class="skill-button" on:click={diceCheck(skill, $character.GetSkill(skill), [20])}>{formatMod($character.GetSkill(skill))}</button>
              </div>
              <p>{skill}<sup>{"+".repeat($character.skills[skill].points)}</sup></p>
            </div>
          {/each}
        </div>
      </div>


      Social Feats/Abilities Here.
    </div>

    <div class="sheet-block-h">
      <div class="sheet-block-v">
        <h2>Exploration Skills</h2>
        <div class="skill-grid">
          {#each ExplorationStats as stat }
            <div class="skill-cell">
              <button class="passive-button" on:click={diceCheck(stat, $character.GetStat(stat), [20])}>{formatMod($character.GetStat(stat))}</button>
              <p style="text-align: center;">{stat}</p>
            </div>
          {/each}
          <div class="grid-divider"/>
          {#each ExplorationSkills as skill }
            <div class="skill-cell">
              <div class="skill-cell-row">
                <label class="inspiration-check" class:checked={$character.skills[skill].inspiration}>
                  <input type="checkbox" bind:checked={$character.skills[skill].inspiration}>
                </label>
                <button class="skill-button" on:click={diceCheck(skill, $character.GetSkill(skill), [20])}>{formatMod($character.GetSkill(skill))}</button>
              </div>
              <p>{skill}<sup>{"+".repeat($character.skills[skill].points)}</sup></p>
            </div>
          {/each}
        </div>
      </div>

      Exploration Feats/Abilities Here.
    </div>
  </div>
{:else}
  <div class="sheet-block">
    
    <div class="sheet-block-h">
      <div class="sheet-block-v">
        <h2>Social Skills</h2>
        <div class="skill-grid-small">
          {#each SocialSkillsSorted as skill }
            <div class="skill-cell-row">
              <label class="inspiration-check" class:checked={$character.skills[skill].inspiration}>
                <input type="checkbox" bind:checked={$character.skills[skill].inspiration}>
              </label>
              <button class="skill-button" on:click={diceCheck(skill, $character.GetSkill(skill), [20])}>{formatMod($character.GetSkill(skill))}</button>
            </div>
            <p>{skill}<sup>{"+".repeat($character.skills[skill].points)}</sup></p>
          {/each}
        </div>
      </div>


      Social Feats/Abilities Here.
    </div>

    <div class="sheet-block-h">
      <div class="sheet-block-v">
        <h2>Exploration Skills</h2>
        <div class="skill-grid-small">
          {#each ExplorationSkillsSorted as skill }
            <div class="skill-cell-row">
              <label class="inspiration-check" class:checked={$character.skills[skill].inspiration}>
                <input type="checkbox" bind:checked={$character.skills[skill].inspiration}>
              </label>
              <button class="skill-button" on:click={diceCheck(skill, $character.GetSkill(skill), [20])}>{formatMod($character.GetSkill(skill))}</button>
            </div>
            <p>{skill}<sup>{"+".repeat($character.skills[skill].points)}</sup></p>
          {/each}
        </div>
      </div>

      Exploration Feats/Abilities Here.
    </div>
  </div>
{/if}

<style>
  .skill-grid-small {
    display: grid;
    background-color: black;
    color: #FDF6E3;
    border: 3px solid #111111;
    border-radius: 4px;
    grid-template-columns: min-content minmax(0, 1fr);
    row-gap: 0px;
    column-gap: 4px;
    margin: 0px;
    padding: 2px;
  }

  .skill-grid-small > .grid-divider {
    background-color: #111111;
    color: #99998f;
    width: auto;
    font-size: 16px;
    text-align: center;
    margin: 0px;
    grid-column-start: 1;
    grid-column-end: 3;
    border-top: 3px solid black;
    border-radius: 14px 14px 2px 2px;
  }


  .skill-grid {
    display: grid;
    background-color: black;
    color: #FDF6E3;
    border: 3px solid #111111;
    border-radius: 4px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    row-gap: 0px;
    column-gap: 4px;
    margin: 0px;
    padding: 2px;
  }

  .skill-grid > .grid-divider {
    background-color: #111111;
    color: #99998f;
    width: auto;
    font-size: 16px;
    text-align: center;
    margin: 0px;
    grid-column-start: 1;
    grid-column-end: 4;
    border-top: 3px solid black;
    border-radius: 14px 14px 2px 2px;
  }


  .skill-cell {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: stretch;
    align-content: flex-start;
    background-color: #222222;
    margin: 0px;
    padding: 4px;
    border-radius: 1px;
  }

  .skill-cell p {
    flex-grow: 1;
    text-align: left;
    margin: auto 0px;
    padding: 0px 10px;
    white-space: nowrap;
  }


  .skill-cell-row {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: stretch;
    align-content: flex-start;
  }


  .inspiration-check {
    background-image: url("/img/icons/inspiration.svg");
    background-size: cover;
    background-repeat: no-repeat;
    display: block;
    position: relative;
    width: 28px;
    height: 28px;
    margin: auto 3px auto auto;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    filter: opacity(60%);
  }
  /* Hide the browser's default checkbox */
  .inspiration-check input {
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* On mouse-over, add a grey background color */
  .inspiration-check:hover {
    background-image: url("/img/icons/inspiration_hover.svg");
  }
  /* When the checkbox is checked, add a blue background */
  .inspiration-check.checked {
    background-image: url("/img/icons/inspiration_filled.svg");
  }
  /* On mouse-over, add a grey background color */
  .inspiration-check.checked:hover {
    background-image: url("/img/icons/inspiration_filled_hover.svg");
  }

  .skill-button {
    background-size: 100% 100%;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 18px;
    width: 45px;
    height: 40px;
    padding: 0px;
    border-top: 2px solid #3b3b3b;
    background-color: #2b2b2b;
    border-bottom: 2px solid #111111;
    font-variant-ligatures: no-common-ligatures;
  }
  .passive-button {
    background-size: 100% 100%;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 18px;
    width: 45px;
    height: 40px;
    padding: 0px;
    border-top: 2px solid  #111111;
    background-color: #1b1b1b;
    border-bottom: 2px solid #333333;
    color: #ccccc5;
    font-variant-ligatures: no-common-ligatures;
  }

  @media only screen and (max-width: 768px) {
    .skill-cell {
      flex-direction: column-reverse;
      justify-content: flex-start;
      align-items: center;
      align-content: flex-end;
      padding: 10px 0px;
    }
  }
  
  @media only screen and (max-width: 480px) {
    .skill-cell p {
      font-size: small;
    }
  }
</style>