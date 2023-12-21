<script lang="ts">
	import type { ComponentType, SvelteComponent } from "svelte"
	import Hero from "./blocks/Hero.svelte"

	export let block: { type: string }
	export let id: string

	type BlockMap = Record<string, ComponentType>
	const blockMap: BlockMap = {
		Hero: Hero
	}

	const component: ComponentType<SvelteComponent<{ data: typeof block; id: string }>> =
		blockMap[block.type]
</script>

<svelte:component this={component} data={block} {id} />
