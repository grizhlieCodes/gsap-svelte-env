<script lang="ts">
	import { gsap, ScrollTrigger, smoother } from '$lib/scripts/gsap.svelte.js';
	import { onMount, onDestroy } from 'svelte';
	let mounted: boolean = $state(false);
	let element1: HTMLElement | null = $state(null);
	let element2: HTMLElement | null = $state(null);
	let element3: HTMLElement | null = $state(null);
	let context: any | null = $state(null);

	onMount(() => {
		mounted = true;

		if (mounted && element1 && element2 && element3) {
			context = gsap.context(() => {
				gsap.from(element1, {
					x: 600,
					opacity: 0.5,
					scrollTrigger: {
						trigger: element1,
						scrub: true
					}
				});
				gsap.from(element2, {
					x: 600,
					opacity: 0.5,
					scrollTrigger: {
						trigger: element2,
						scrub: true
					}
				});
				gsap.from(element3, {
					x: 600,
					opacity: 0.5,
					scrollTrigger: {
						trigger: element3,
						scrub: true
					}
				});
			});
			ScrollTrigger.getAll().forEach((trigger: any) => {
				console.log('before', trigger.trigger);
			});
		}
	});

	onDestroy(() => {
		if (!smoother.smoother) return;
		context.kill();

		// ScrollTrigger.killAll();
	});
</script>

<h1 bind:this={element1} id="home-hero-heading-1" class="text-8xl text-slate-700">I am Home</h1>
<h1 bind:this={element2} id="home-hero-heading-2" class="text-8xl text-slate-700">I am Home</h1>
<h1 bind:this={element3} id="home-hero-heading-3" class="text-8xl text-slate-700">I am Home</h1>
