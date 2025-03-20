<script>
	import { onMount, tick } from 'svelte';
	import { flip } from 'svelte/animate';
	import gsap from 'gsap';
	import ScrollTrigger from 'gsap/ScrollTrigger';

	let images = [
		{ src: '/images/PLACEHOLDER.png', title: 'Image 0', content: 'Content for image 0' },
		{ src: '/images/PLACEHOLDER.png', title: 'Image 1', content: 'Content for image 1' },
		{ src: '/images/PLACEHOLDER.png', title: 'Image 2', content: 'Content for image 2' },
		{ src: '/images/PLACEHOLDER.png', title: 'Image 3', content: 'Content for image 3' },
		{ src: '/images/PLACEHOLDER.png', title: 'Image 4', content: 'Content for image 4' }
	];

	// QUESTIONS: how to change styling of an active svelte component??????

	let activeIndex = $state(0); // Set the currently active image to the first one
	let imageRefs;
	const activeIndexDistance = 50; // Max distance from left of viewport for an image to be the active image
	let shiftX = $state(0);

	// active index is determined by checking the left values of all the images and the one that has a left value less than a certain value
	// when click or scroll happens, all images are translated so that THAT image is the one that's leftmost
	// need to connect scroll to translate somehow?

	function getImagePosition(el) {
		return el.getBoundingClientRect().left;
	}

	function getActiveIndex(imageArray, activeIndex = 0) {
		let closestImgIndex = activeIndex;
		let closestDistance = activeIndexDistance;
		imageArray.forEach((img, imgIndex) => {
			const imagePos = getImagePosition(img);
			// if (imagePos < 50 && imagePos > 0) {
			// 	closestImgIndex = imgIndex;
			// }
			// smallest positive value
			if (imagePos > 0 && imagePos < activeIndexDistance) {
				closestImgIndex = imgIndex;
				closestDistance = imagePos;
			}
		});
		console.log(closestImgIndex);
		return closestImgIndex;
	}

	// Function to update image positions with GSAP
	function updatePositions(i) {
		// 1. Get the left position of the clicked element
		const clickedImgPos = getImagePosition(imageRefs[i]);

		// console.log('clicked pos', clickedImgPos);

		// 2. Calculate the amount to shift the clicked element by so that it becomes the active element
		// const shiftAmount = clickedImgPos - activeIndexDistance + 2;
		shiftX += clickedImgPos - activeIndexDistance + 2;

		// console.log($$('.gallery-button'))

		// 3. Shift all elements to the left by that amount - TEST SVELTE ANIMATE
	}

	// $: currentActiveIndex = activeIndex;
	// $: activeIndex = getActiveIndex(imageRefs);

	onMount(() => {
		// imageRefs = gsap.utils.toArray('.gallery-image');
		imageRefs = document.querySelectorAll('.gallery-image');
		// console.log('test', getImagePosition(imageRefs[2]));
		// console.log(getActiveIndex(imageRefs, activeIndex));
	});
</script>

<!-- Horizontal Scrolling Gallery -->
<div class="gallery-container">
	<div class="gallery">
		{#each images as image, i (i)}
			<!-- <button type="button" on:click={() => (activeIndex = i)}> -->
			<button
				type="button"
				animate:flip
				onclick={() => {
					if (activeIndex !== i) {
						updatePositions(i);
						activeIndex = i;
					}
					// activeIndex = getActiveIndex(imageRefs);
				}}
				style="transform: translateX(-{shiftX}px);"
			>
				<img
					src={image.src}
					alt={image.title}
					class="gallery-image"
					class:active={i === activeIndex}
				/>
			</button>
		{/each}
	</div>
</div>

<div class="content-container">
	{images[activeIndex].content}
</div>

<style>
	.gallery-container {
		width: 100vw;
		height: 200px;
		display: flex;
		align-items: center;
		overflow: hidden;
		/* position: relative; */
		background: black;
	}

	.gallery {
		display: flex;
		gap: 20px;
		padding: 20px;
		position: relative;
	}

	.gallery button {
		transition: transform 0.5s ease;
	}

	.gallery img {
		height: 150px;
		width: 150px;
		transition:
			opacity 0.3s,
			transform 0.3s;
		opacity: 0.6;
		border-radius: 10px;
		/* position: absolute; */
	}

	.gallery img.active,
	.gallery img:hover {
		transform: scale(1.1);
		opacity: 1;
		border: 2px solid white;
		cursor: pointer;
	}

	.content-container {
		margin-top: 20px;
		color: white;
		font-size: 24px;
		text-align: center;
	}
</style>
