<script lang="ts">
	import type { Hero } from "$lib/stackbit/models"

	export let data: Hero
	export let id: string
</script>

<section data-sb-field-path={id} class="bg relative flex flex-row">
	<h1 data-sb-field-path=".heading" class="text-7xl text-sky-900">
		{data.heading}
	</h1>
</section>
