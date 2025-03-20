<script>
	import gsap from 'gsap';
	import SplitType from 'split-type';
	import { onMount } from 'svelte';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { text } from '@sveltejs/kit';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		const splitTypes = document.querySelectorAll('.reveal-type');

		splitTypes.forEach((char, i) => {
			const text = new SplitType(char, { types: 'words' });

			// gsap.from(text.words, {
			// 	scrollTrigger: {
			// 		trigger: char,
			// 		start: 'top 40%',
			// 		end: 'top 10%',
			// 		scrub: true,
			// 		markers: true
			// 	},
			// 	scaleY: 0,
			// 	y: -30,
			// 	opacity: 0.2,
			// 	transformOrigin: 'top',
			// 	// duration: 1,
			// 	stagger: 0.1,
			// 	ease: 'power2.out'
			// });
		});

		// gsap.to('.rainbow-word', {
		// 	scrollTrigger: {
		// 		trigger: '.rainbow-word',
		// 		start: 'top 80%',
		// 		end: 'top 20%',
		// 		scrub: true
		// 		// markers: true
		// 	},
		// 	backgroundPosition: '100% 50%', // Moves gradient left to right
		// 	duration: 2,
		// 	ease: 'power2.inOut',
		// 	onUpdate: function () {
		// 		document.querySelector('.rainbow-word').style.webkitTextFillColor = 'transparent'; // Gradually reveal gradient fill
		// 	}
		// });
	});
</script>

<section class="grid h-screen place-content-center px-[clamp(4rem,12vw,20rem)]">
	<p class="text reveal-type w-full px-4 md:w-1/2">
		Hi, I'm Kelsey! I'm a data visualization developer and creative storyteller based in New York.
		As a technical collaborator, I help communicate insights from data, enabling clients to <span
			class="rainbow-word">tell their story in a way that will resonate</span
		> with their audience.
	</p>
</section>

<section class="grid h-screen place-content-center px-[clamp(4rem,12vw,20rem)]">
	<p class="reveal-type w-full px-4 md:w-1/2">technical collaborator</p>
</section>

<section class="grid h-screen place-content-center px-[clamp(4rem,12vw,20rem)]">
	<p class="reveal-type w-full px-4 md:w-1/2">communicate insights</p>
</section>

<section class="grid h-screen place-content-center px-[clamp(4rem,12vw,20rem)]"></section>

<style>
	.text {
		color: white;
	}

	.rainbow-word {
		background-image: linear-gradient(90deg, red, orange, yellow, green, blue, violet);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: white; /* Start as white */
		display: inline-block;
		background-size: 200% 100%;
		background-position: 0% 50%;
		transition: -webkit-text-fill-color 0.3s ease-in-out; /* Smooth transition */
	}
</style>
