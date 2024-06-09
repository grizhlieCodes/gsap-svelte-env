<script lang="ts">
	import { smoother } from '$lib/scripts/gsap.svelte.js';
	import { page } from '$app/stores';
	const links = [
		{
			label: 'Home',
			url: '/'
		},
		{
			label: 'About',
			url: '/about'
		},
		{
			label: 'Contact',
			url: '/contact'
		}
	];

	const refreshScrollTrigger = () => {
		smoother.refreshScrollTrigger();
		console.log('tried refreshing trigger');
	};
	const refreshSmoother = () => {
		smoother.killSmoother();
		smoother.setNewSmoother()
		console.log('tried refreshing all');
	};
	const refreshAll = () => {
		smoother.refreshAll();
		console.log('tried refreshing all');
	};
</script>

<header
	class="fixed z-20 w-full bg-slate-800 py-5 px-5 md:px-6
lg:px-8"
>
	<div class="mx-auto flex w-full max-w-5xl justify-between">
		<a
			href="/"
			class="text-2xl text-slate-400 transition-colors duration-300 hover:text-slate-50 hover:underline"
			>Animator</a
		>

		<button
			class="cursor-pointer rounded-full bg-cyan-600 py-2 px-4 text-cyan-50"
			onclick={refreshScrollTrigger}
		>
			Ref S.T.
		</button>
		<button
			class="cursor-pointer rounded-full bg-cyan-600 py-2 px-4 text-cyan-50"
			onclick={refreshSmoother}
		>
			Ref Smoother
		</button>

		<button
			class="cursor-pointer rounded-full bg-cyan-600 py-2 px-4 text-cyan-50"
			onclick={refreshAll}
		>
			Refresh All
		</button>
		<nav>
			<ul class="flex items-center gap-4">
				{#each links as { url, label }}
					<li>
						<a
							href={url}
							class="text-lg
                        transition-colors duration-300 hover:text-slate-50
						hover:underline {$page.url.pathname === url ? 'font-bold text-slate-50' : 'text-slate-300'} "
							>{label}</a
						>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</header>
