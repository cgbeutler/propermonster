<script lang="ts">
  import "../../../../lib/css/PointTable.css"
  import type { Writable } from "svelte/store";
  import { StatGenMethodEnum, type Character } from "../../../../lib/MotW/Character/PlayerCharacter";
  import { ExplorationSkillEnum, ExplorationSkills, ExplorationStats, SocialSkillEnum, SocialSkills, SocialStats, StatEnum, levelTrackerPerks } from "../../../../lib/MotW/Character/CharacterEnums";
  import TextBox from "../../../../lib/Inputs/TextBox.svelte";
  import { chunk } from "../../../../lib/Helpers/ArrayHelpers";
  import IntSelect from "../../../../lib/Inputs/IntSelect.svelte";

  export let character: Writable<Character>;

  const baseStatPoints = levelTrackerPerks.StatPoints[0];
  
  let rawSocialRolls: Array<number> | undefined;
  let rawSocialRollsString: string = "";
  function rollSocialStats() {
    rawSocialRolls = Array.from( { length:baseStatPoints }, () => Math.floor( Math.random() * 3 ) + 1 );
  }
  $: if (rawSocialRolls && rawSocialRolls.length == baseStatPoints) {
    $character.statGen_Roll[StatEnum.Envoy] = -1 + rawSocialRolls.filter(r => r == 1).length;
    $character.statGen_Roll[StatEnum.Sage] = -1 + rawSocialRolls.filter(r => r == 2).length;
    $character.statGen_Roll[StatEnum.Rogue] = -1 + rawSocialRolls.filter(r => r == 3).length;
    rawSocialRollsString = rawSocialRolls?.join((", ")) ?? "";
  }
  let socialPointSum = 0;
  $: if($character.socialStatGenMethod === StatGenMethodEnum.Manual) {
    if ($character.statGen_Manual[StatEnum.Envoy] == null) $character.statGen_Manual[StatEnum.Envoy] = -1;
    if ($character.statGen_Manual[StatEnum.Sage] == null) $character.statGen_Manual[StatEnum.Sage] = -1;
    if ($character.statGen_Manual[StatEnum.Rogue] == null) $character.statGen_Manual[StatEnum.Rogue] = -1;
    socialPointSum = 3
      + ($character.statGen_Manual[StatEnum.Envoy]??-1)
      + ($character.statGen_Manual[StatEnum.Sage]??-1)
      + ($character.statGen_Manual[StatEnum.Rogue]??-1);
  } else {
    socialPointSum = 3
      + ($character.statGen_Roll[StatEnum.Envoy]??-1)
      + ($character.statGen_Roll[StatEnum.Sage]??-1)
      + ($character.statGen_Roll[StatEnum.Rogue]??-1);
  }
  let socialImprovementSum = 0;
  $: socialImprovementSum = ($character.statImprovements.Envoy??0)
    + ($character.statImprovements.Sage??0)
    + ($character.statImprovements.Rogue??0);

  let rawExplorationRolls: Array<number> | undefined;
  let rawExplorationRollsString: string = "";
  function rollExplorationStats() {
    rawExplorationRolls = Array.from( { length:baseStatPoints }, () => Math.floor( Math.random() * 3 ) + 1 );
  }
  $: if (rawExplorationRolls && rawExplorationRolls.length == baseStatPoints) {
    $character.statGen_Roll[StatEnum.Might] = -1 + rawExplorationRolls.filter(r => r == 1).length;
    $character.statGen_Roll[StatEnum.Artifice] = -1 + rawExplorationRolls.filter(r => r == 2).length;
    $character.statGen_Roll[StatEnum.Tuning] = -1 + rawExplorationRolls.filter(r => r == 3).length;
    rawExplorationRollsString = rawExplorationRolls?.join((", ")) ?? "";
  }
  let explorationPointSum = 0;
  $: if ($character.explorationStatGenMethod === StatGenMethodEnum.Manual) {
    if ($character.statGen_Manual[StatEnum.Might] == null) $character.statGen_Manual[StatEnum.Might] = -1;
    if ($character.statGen_Manual[StatEnum.Artifice] == null) $character.statGen_Manual[StatEnum.Artifice] = -1;
    if ($character.statGen_Manual[StatEnum.Tuning] == null) $character.statGen_Manual[StatEnum.Tuning] = -1;
    explorationPointSum = 3
      + ($character.statGen_Manual[StatEnum.Might]??-1)
      + ($character.statGen_Manual[StatEnum.Artifice]??-1)
      + ($character.statGen_Manual[StatEnum.Tuning]??-1);
  } else {
    explorationPointSum = 3
      + ($character.statGen_Roll[StatEnum.Might]??-1)
      + ($character.statGen_Roll[StatEnum.Artifice]??-1)
      + ($character.statGen_Roll[StatEnum.Tuning]??-1);
  }
  let explorationImprovementSum = 0;
  $: explorationImprovementSum = ($character.statImprovements.Might??0)
    + ($character.statImprovements.Artifice??0)
    + ($character.statImprovements.Tuning??0);

  let socialSkillPointSum: number = 0;
  $: socialSkillPointSum = Object
    .entries($character.skills)
    .filter(e => SocialSkills.includes(<SocialSkillEnum>e[0]))
    .reduce((sum, entry) => sum + entry[1].points, 0);
  
  let explorationSkillPointSum: number = 0;
  $: explorationSkillPointSum = Object
    .entries($character.skills)
    .filter(e => ExplorationSkills.includes(<ExplorationSkillEnum>e[0]))
    .reduce((sum, entry) => sum + entry[1].points, 0);
    
</script>

<div class="sheet-block">
  <h1><img src="/img/icons/PlusPlusIcon.svg" alt=""/> Stats & Skills <img src="/img/icons/PlusPlusIcon.svg" alt=""/></h1>

  <div class="sheet-block-h">
    <div class="sheet-block-v">

      <h2>Social Stats</h2>

      <div class="sheet-row">
        <div class="toggle-bg">
          <button class:active={$character.socialStatGenMethod === StatGenMethodEnum.Manual} on:click={()=>{ $character.socialStatGenMethod = StatGenMethodEnum.Manual }}>Manual</button>
          <button class:active={$character.socialStatGenMethod === StatGenMethodEnum.Roll} on:click={()=>{ $character.socialStatGenMethod = StatGenMethodEnum.Roll }}>Roll</button>
        </div>
      </div>
      
      <table class="point-table">
        <tr>
          <td></td>
          {#each SocialStats as socialStat}
            <th>{socialStat}</th>
          {/each}
        </tr>
        <tr>
          <th>
            starting<br/>
            {#if $character.socialStatGenMethod === StatGenMethodEnum.Manual}
              <span class:red={socialPointSum != baseStatPoints}>{socialPointSum}</span>/{baseStatPoints}
            {:else if  $character.socialStatGenMethod === StatGenMethodEnum.Roll}
              (rolled)
            {/if}
          </th>
          {#each SocialStats as socialStat}
            <td>
              {#if $character.socialStatGenMethod === StatGenMethodEnum.Manual}
                <IntSelect bind:value={$character.statGen_Manual[socialStat]} min={-1} max={5} />
              {:else}
                <TextBox id="stat-{socialStat}-input" value={$character.statGen_Roll[socialStat]} disabled/>
              {/if}
            </td>
          {/each}
        </tr>
        <tr>
          <th>
            points<br>
            <span class:red={$character.StatPoints - baseStatPoints != socialImprovementSum}>{socialImprovementSum}</span>/{$character.StatPoints - baseStatPoints}
          </th>
          {#each SocialStats as socialStat}
            {@const stat = $character.socialStatGenMethod === StatGenMethodEnum.Manual ? $character.statGen_Manual[socialStat] : ($character.statGen_Roll[socialStat]??-1) }
            <td>
              <IntSelect bind:value={$character.statImprovements[socialStat]} min={0} max={5-stat} />
            </td>
          {/each}
        </tr>
        <tr>
          <th class="row-header">total</th>
          {#each SocialStats as socialStat}
            <td>
              <TextBox value={$character.GetStat(socialStat)} disabled/>
            </td>
          {/each}
        </tr>
      </table>

      {#if $character.socialStatGenMethod === StatGenMethodEnum.Roll}
        <div class="sheet-section">
          <div class="sheet-row">
            <button on:click={rollSocialStats}>
              {socialPointSum != baseStatPoints?"":"Re-"}Roll {baseStatPoints}d3
            </button>
            &nbsp;=&gt;&nbsp;
            <input type="string" style="width: {baseStatPoints*1.2}em;" value={ rawSocialRollsString } disabled/>
          </div>
        </div>
      {/if}
    </div>

    <div class="sheet-block-v">

      <h2>Exploration Stats</h2>

      <div class="sheet-row">
        <div class="toggle-bg">
          <button class:active={$character.explorationStatGenMethod === StatGenMethodEnum.Manual} on:click={()=>{ $character.explorationStatGenMethod = StatGenMethodEnum.Manual }}>Manual</button>
          <button class:active={$character.explorationStatGenMethod === StatGenMethodEnum.Roll} on:click={()=>{ $character.explorationStatGenMethod = StatGenMethodEnum.Roll }}>Roll</button>
        </div>
      </div>
      
      
      <table class="point-table">
        <tr>
          <td></td>
          {#each ExplorationStats as explorationStat}
            <th>{explorationStat}</th>
          {/each}
        </tr>
        <tr>
          <th>
            starting<br/>
            {#if $character.explorationStatGenMethod === StatGenMethodEnum.Manual}
              <span class:red={explorationPointSum != baseStatPoints}>{explorationPointSum}</span>/{baseStatPoints}
            {:else if  $character.explorationStatGenMethod === StatGenMethodEnum.Roll}
              (rolled)
            {/if}
          </th>
          {#each ExplorationStats as explorationStat}
            <td>
              {#if $character.explorationStatGenMethod === StatGenMethodEnum.Manual}
                <IntSelect bind:value={$character.statGen_Manual[explorationStat]} min={-1} max={5} />
              {:else}
                <TextBox id="stat-{explorationStat}-input" value={$character.statGen_Roll[explorationStat]} disabled/>
              {/if}
            </td>
          {/each}
        </tr>
        <tr>
          <th>
            points<br>
            <span class:red={$character.StatPoints - baseStatPoints != explorationImprovementSum}>{explorationImprovementSum}</span>/{$character.StatPoints - baseStatPoints}
          </th>
          {#each ExplorationStats as explorationStat}
            {@const stat = $character.explorationStatGenMethod === StatGenMethodEnum.Manual ? $character.statGen_Manual[explorationStat] : ($character.statGen_Roll[explorationStat]??-1) }
            <td>
              <IntSelect bind:value={$character.statImprovements[explorationStat]} min={0} max={5-stat} />
            </td>
          {/each}
        </tr>
        <tr>
          <th class="row-header">total</th>
          {#each ExplorationStats as explorationStat}
            <td>
              <TextBox value={$character.GetStat(explorationStat)} disabled/>
            </td>
          {/each}
        </tr>
      </table>

      {#if $character.explorationStatGenMethod === StatGenMethodEnum.Roll}
        <div class="sheet-section">
          <div class="sheet-row">
            <button on:click={rollExplorationStats}>
              {explorationPointSum != baseStatPoints?"":"Re-"}Roll {baseStatPoints}d3
            </button>
            &nbsp;=&gt;&nbsp;
            <input type="string" style="width: {baseStatPoints*1.2}em;" value={ rawExplorationRollsString } disabled/>
          </div>
        </div>
      {/if}
    </div>
  </div>
</div>
  

<div class="sheet-block">
  <h2>Social Skills</h2>

  <div class="sheet-block-v">
    <p> Assigned: <span class:red={$character.SocialSkillPoints != socialSkillPointSum}>{socialSkillPointSum}</span>/{$character.SocialSkillPoints}
    
    <table style="margin:0px;" class="point-table">
      <tr>
        {#each SocialStats as stat}
          <th class="col-header">
            {stat}&nbsp;<TextBox value={$character.GetStat(stat)} disabled />
          </th>
        {/each}
      </tr>
      {#each chunk(SocialSkills,3) as skillsChunk, i}
        <tr>
          {#each skillsChunk as skill}
            <td style="text-align: right;">
              <label class="skill-label" for={skill+"-dropdown"}>
                <span style="user-select: none;">{skill}</span>
                <div>
                  <IntSelect id={skill+"-dropdown"} bind:value={$character.skills[skill].points} max={2} />
                  <TextBox value={$character.GetSkill(skill, false)} disabled />
                </div>
              </label>
            </td>
          {/each}
        </tr>
      {/each}
    </table>
  </div>


  <h2>Exploration Skills</h2>

  <div class="sheet-block-v">
    <p> Assigned: <span class:red={$character.ExplorationSkillPoints != explorationSkillPointSum}>{explorationSkillPointSum}</span>/{$character.ExplorationSkillPoints}
    
    <table style="margin:0px;" class="point-table">
      <tr>
        {#each ExplorationStats as stat}
          <th class="col-header">
            {stat}&nbsp;<TextBox value={$character.GetStat(stat)} disabled />
          </th>
        {/each}
      </tr>
      {#each chunk(ExplorationSkills, 3) as skillsChunk, i}
        <tr>
          {#each skillsChunk as skill}
            <td style="text-align: right;">
              <label class="skill-label" for={skill+"-dropdown"}>
                <span style="user-select: none;">{skill}</span>
                <div>
                  <IntSelect id={skill+"-dropdown"} bind:value={$character.skills[skill].points} max={2} />
                  <TextBox value={$character.GetSkill(skill, false)} disabled />
                </div>
              </label>
            </td>
          {/each}
        </tr>
      {/each}
    </table>
  </div>
</div>

<style>
  .red {
    color: var(--error-color);
  }

  .sheet-block {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    justify-items: center;
    align-content: center;
    text-align: left;
  }

  .sheet-section {
    display: flex;
    flex-flow: column;
    align-items: center;
  }

  .sheet-row {
    display: flex;
    flex-flow: row;
    align-items: center;
  }

  .skill-label {
    display: inline-flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: right;
    gap: 4px
  }

  .skill-label > div {
    display: inline-flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 4px;
  }

  @media only screen and (max-width: 768px) {
    .skill-label {
      flex-direction: column;
      justify-content: start;
    }
  }

</style>