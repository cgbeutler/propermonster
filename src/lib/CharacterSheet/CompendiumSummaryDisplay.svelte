<script lang="ts">
  import type { CompendiumDescription } from "../MotW/Compendium/Shared";

  export let compendiumItem: CompendiumDescription;
</script>

<h4>{compendiumItem.name}</h4>
{@html compendiumItem.description}

<style>
  h4 { margin-top: 0; }
</style>