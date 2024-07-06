<script lang="ts">
  import type { Writable } from "svelte/store";
  import type { Character } from "../../../../lib/MotW/Character/PlayerCharacter";
  import CompendiumSelector from "../../../../lib/CharacterSheet/CompendiumSelector.svelte";
  import { Classes } from "../../../../lib/MotW/Compendium/PlaybookCompendium";
  import { Lineages } from "../../../../lib/Compendium/LineageCompendium";
  import { Constitutions } from "../../../../lib/Compendium/ConstitutionCompendium";
  
  export let character: Writable<Character>;
</script>

<div class="sheet-block">
  <h1><img src="/img/icons/StarIcon.svg" alt=""/> Feats & Abilities <img src="/img/icons/StarIcon.svg" alt=""/></h1>

  <div class="sheet-block-h">
    <div class="sheet-block-v">
      <h2>Class</h2>
      <p>Optional. Classes serve as easy recipes of Class Features.</p>
      <CompendiumSelector bind:selectedId={$character.classId} compendium={Classes} typeDisplayName={"Class"}></CompendiumSelector>

      <h2>Lineage</h2>
      <p>Optional. Lineages serve as easy recipes of Trait Features.</p>
      <CompendiumSelector bind:selectedId={$character.lineageId} compendium={Lineages} typeDisplayName={"Lineage"}></CompendiumSelector>
    </div>

    <div class="sheet-block-v">
      <h2>Constitution</h2>
      <p>Your Constitution will provide core abilities<br>and make some features cheaper.</p>
      <CompendiumSelector bind:selectedId={$character.constitutionId} bind:lineageId={$character.lineageId} bind:classId={$character.classId} compendium={Constitutions} typeDisplayName={"Constitution"}></CompendiumSelector>
    </div>
  </div>
  
  <div class="sheet-block-v">
    <details>
      <summary class="h2">Social Features</summary>
      <p>Points Spent: 0/{$character.SocialFeatPoints}</p>
      <p>Coming Soon</p>
    </details>
  </div>
  
  <div class="sheet-block-v">
    <details>
      <summary class="h2">Trait Features</summary>
      <p>Points Spent: 0/{$character.TraitFeatPoints}</p>
      <p>Prestige Points Spent: 0/{$character.PrestigeFeatPoints}</p>
      <p>Coming Soon</p>
    </details>
  </div>

  <div class="sheet-block-v">
    <details>
      <summary class="h2">Class Feats</summary>
      <p>Points Spent: 0/{$character.ClassFeatPoints}</p>
      <p>Prestige Points Spent: 0/{$character.PrestigeFeatPoints}</p>
      <p>Coming Soon</p>
    </details>
  </div>

  <div class="sheet-block-v">
    <details>
      <summary class="h2">Abilities</summary>
      <p>Coming Soon</p>
    </details>
  </div>
</div>