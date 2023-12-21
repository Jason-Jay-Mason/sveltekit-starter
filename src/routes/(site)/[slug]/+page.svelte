<script lang="ts">
	import PageBlock from "$lib/components/site/PageBlock.svelte"
	import type { PageData } from "./$types"

	export let data: PageData
</script>

<div data-sb-object-id={data.content.path}>
	{#if data.content.blocks}
		{#each data.content.blocks as block, i}
			<PageBlock {block} id={`blocks.${i}`}></PageBlock>
		{/each}
	{/if}
</div>
