<script lang="ts">
	import '../app.css';
	import { gsap, smoother } from '$lib/scripts/gsap.svelte.js';
	let { children, data }: { children: any; data: any } = $props();
	import Header from '$lib/nav/Header.svelte';
	import Page from '$lib/layout/Page.svelte';
	import { fly } from 'svelte/transition';
	let introEnded: boolean = $state(false);

	let previousUrl: string | undefined = $state(undefined);
	let url: string | undefined = $state(data.url);

	let mounted: boolean = $state(false);
	let mountedRunOnce: boolean = $state(false);

	// $effect(() => {
	// 	mounted = true;
	// 	if (mounted && !mountedRunOnce) {
	// 		mountedRunOnce = true;
	// 		smoother.setNewSmoother();
	// 	}
	// });

	// $effect(() => {
	// 	previousUrl = url;
	// 	if (previousUrl === data.url) return;
	// 	url = data.url;
	// 	smoother.setNewSmoother();
	// });
</script>


<Header></Header>

<div class="grid">
	{#key data.url}
		<div
			class="col-start-1 col-end-2 row-start-1 row-end-2"
			in:fly={{ duration: 300, x: 1000, opacity: 1 }}
			out:fly={{ duration: 300, x: -1000, opacity: 1 }}
			onintrostart={() => (introEnded = false)}
			onintroend={() => (introEnded = true)}
		>
			<Page url={data.url} {introEnded}>
				{@render children()}
			</Page>
		</div>
	{/key}
</div>
