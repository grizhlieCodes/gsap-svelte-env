<script lang="ts">
	let { children, url, introEnded }: { children: any; url: string; introEnded: boolean } = $props();
	import { smoother } from '$lib/scripts/gsap.svelte.js';
	let mounted = $state(false);
	let runSmootherAlready: boolean = $state(false);

	$effect(() => console.log(`Intro Ended State: ${introEnded}, at ${url}`));

	$effect(() => {
		if (introEnded && !runSmootherAlready) {
			runSmootherAlready = true;
			smoother.setNewSmoother();
			console.log('running 1st', url);
		}
	});

	$effect(() => {
		if (!mounted) {
			mounted = true;
			smoother.setNewSmoother();
			console.log('running 2nd', url);
		}
	});
</script>

<div id="smooth-wrapper">
	<div id="smooth-content">
		<div class="flex flex-col items-center justify-between bg-blue-100 p-40">
			{@render children()}
		</div>
	</div>
</div>
