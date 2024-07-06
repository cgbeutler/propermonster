<script lang="ts">
  import SvelteMarkdown from "svelte-markdown";
  import HtmlNotRenderer from "./HtmlNotRenderer.svelte";

  export let source: string | undefined;
  export let isInline: boolean | undefined = undefined;
  
</script>

<SvelteMarkdown
  source={source ?? ""}
  renderers={{ html: HtmlNotRenderer }}
  isInline={isInline}
/>