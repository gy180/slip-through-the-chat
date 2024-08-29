<script>
	import { onMount } from 'svelte';
	import { micromark } from 'micromark';
	let text = '';

	onMount(async () => {
		const raw = await fetch('/articles/thailand-pm.md').then((x) => x.text());
		text = micromark(raw);
	});
</script>

<div class="flex w-screen items-center justify-center p-10">
	<div class="prose prose-p:font-serif">{@html text}</div>
</div>
