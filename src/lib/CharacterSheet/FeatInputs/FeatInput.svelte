<script lang="ts">
  import Markdown from "../../MarkdownRenderers/Markdown.svelte";
  import {InputTypes} from "../../MotW/Compendium/UserInputs";
  import type {UserInputModel} from "../../MotW/Compendium/UserInputModels.svelte";
  
  let {input}: {input: UserInputModel} = $props();
</script>

<h4 class="input-label">{input.input.label}</h4>
{#if input.input.subLabel}<Markdown source={input.input.subLabel} />{/if}
{#if input.input.inputType === InputTypes.Text}
  <input type="text" /> <!-- TEST -->
{/if}
{#if input.input.inputType === InputTypes.TextArea}
  <textarea></textarea> <!-- TEST -->
{/if}
{#if input.input.inputType === InputTypes.TextChoice && input.input.hasOwnProperty("options")}
  {#each input.input.options as option}
    {#if typeof(option) === "string"}
      <!-- str[] -->
      <input type="checkbox" id={option}><label for={option}>{option}</label>
      <!-- TEST -->
    {:else}
      <!-- [str,str][] -->
      <input type="checkbox" id={option[0]}><label for={option[0]}><b>{option[0]}:</b> {option[1]}</label>
      <!-- TEST -->
    {/if}
  {/each}
{/if}
{#if input.input.inputType === InputTypes.Checks}
  {#each Array.from({length:input.input.max}) as i}
    <input type="checkbox">
    <!-- TEST -->
  {/each}
  {#if input.input.resetPerMystery}
    * Resets each mystery.
  {/if}
{/if}
{#if input.input.inputType === InputTypes.FeatChoice}
  <div>
    {#each input.input.options as option}
      {option.name}
    {/each}
  </div>
{/if}

<!--FeatChoice = "FeatChoice", FeatChoiceByType = "FeatChoiceByType", FeatChoiceById = "FeatChoiceById",-->
<!--Character = "Character", Hunter = "Hunter",-->

<style>
  .input-label {
    margin: 1lh 0 0.25lh 0;
  }
</style>