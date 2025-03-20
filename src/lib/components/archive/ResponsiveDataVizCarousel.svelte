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

	let currentImageIndex = 0;
	const mediaBreakWidth = 1680;

	onMount(() => {
		const container = document.querySelector('.minimap-container');
		const items = document.querySelector('.items');
		const indicator = document.querySelector('.indicator');
		const itemElements = document.querySelectorAll('.item');
		const previewImage = document.querySelector('.img-preview-content');
		const itemImages = document.querySelectorAll('.item img');

		let isHorizontal = window.innerWidth <= mediaBreakWidth;
		let dimensions = {
			itemSize: 0,
			containerSize: 0,
			indicatorSize: 0
		};

		let maxTranslate = 0;
		let currentTranslate = 0;
		let targetTranslate = 0;
		let isClickMove = false;
		// let currentImageIndex = 0;
		const inactiveItemOpacity = 0.3;
		const activeItemOpacity = 1;
		const inactiveItemScale = 1;
		const activeItemScale = 1.1;

		function lerp(start, end, factor) {
			return start + (end - start) * factor;
		}

		function updateDimensions() {
			isHorizontal = window.innerWidth <= mediaBreakWidth;
			if (isHorizontal) {
				dimensions = {
					itemSize: itemElements[0].getBoundingClientRect().width,
					containerSize: items.scrollWidth,
					indicatorSize: indicator.getBoundingClientRect().width
				};
			} else {
				dimensions = {
					itemSize: itemElements[0].getBoundingClientRect().height,
					containerSize: items.getBoundingClientRect().height,
					indicatorSize: indicator.getBoundingClientRect().height
				};
			}
			return dimensions;
		}

		dimensions = updateDimensions();
		maxTranslate = dimensions.containerSize - dimensions.indicatorSize;

		function getItemInIndicator() {
			itemImages.forEach((img) => {
				img.style.opacity = inactiveItemOpacity;
				img.style.scale = inactiveItemScale;
			});
			// itemImages.forEach((img) => img.classList.add('inactive-image'));
			// itemImages.forEach((img) => img.classList.remove('active-image'));

			const indicatorStart = -currentTranslate;
			const indicatorEnd = indicatorStart + dimensions.indicatorSize;

			let maxOverlap = 0;
			let selectedIndex = 0;

			itemElements.forEach((item, index) => {
				const itemStart = index * dimensions.itemSize;
				const itemEnd = itemStart + dimensions.itemSize;

				const overlapStart = Math.max(indicatorStart, itemStart);
				const overlapEnd = Math.min(indicatorEnd, itemEnd);
				const overlap = Math.max(0, overlapEnd - overlapStart);

				if (overlap > maxOverlap) {
					maxOverlap = overlap;
					selectedIndex = index;
				}
			});

			itemImages[selectedIndex].style.opacity = activeItemOpacity;
			itemImages[selectedIndex].style.scale = activeItemScale;
			// itemImages[selectedIndex].classList.remove('inactive-image');
			// itemImages[selectedIndex].classList.add('active-image');
			return selectedIndex;
		}

		function updateSelectedImageContent(index) {
			if (currentImageIndex !== index) {
				// SEE IF THIS ALONE CHANGES CONTENT. IF NOT, UNCOMMENT LAST LINE
				currentImageIndex = index;
				// const targetItem = itemElements[index].querySelector('img')
				// const targetSrc =
				// previewImage.innerHTML = itemElements[index].content
			}
		}

		function animate() {
			const lerpFactor = isClickMove ? 0.05 : 0.075;
			currentTranslate = lerp(currentTranslate, targetTranslate, lerpFactor);

			if (Math.abs(currentTranslate - targetTranslate) > 0.01) {
				const transform = isHorizontal
					? `translateX(${currentTranslate}px)`
					: `translateY(${currentTranslate}px)`;
				items.style.transform = transform;

				const activeIndex = getItemInIndicator();
				updateSelectedImageContent(activeIndex);
			} else {
				isClickMove = false;
			}

			requestAnimationFrame(animate);
		}

		container.addEventListener(
			'wheel',
			(e) => {
				e.preventDefault();
				isClickMove = false;

				let delta;
				delta = e.deltaY;

				const scrollVelocity = Math.min(Math.max(delta * 0.5, -20), 20);

				targetTranslate = Math.min(Math.max(targetTranslate - scrollVelocity, -maxTranslate), 0);
			},
			{ passive: false }
		);

		let touchStartY = 0;
		container.addEventListener('touchstart', (e) => {
			if (isHorizontal) {
				touchStartY = e.touches[0].clientY;
			}
		});

		container.addEventListener(
			'touchmove',
			(e) => {
				if (isHorizontal) {
					const touchY = e.touches[0].clientY;
					const deltaY = (touchStartY = touchY);

					const delta = deltaY;
					const scrollVelocity = Math.min(Math.max(delta * 0.5, -20), 20);

					targetTranslate = Math.min(Math.max(targetTranslate - scrollVelocity, -maxTranslate), 0);

					touchStartY = touchY;
					e.preventDefault();
				}
			},
			{ passive: false }
		);

		itemElements.forEach((item, index) => {
			item.addEventListener('click', () => {
				isClickMove = true;
				targetTranslate =
					-index * dimensions.itemSize + (dimensions.indicatorSize - dimensions.itemSize) / 2;
				targetTranslate = Math.max(Math.min(targetTranslate, 0), -maxTranslate);
			});
		});

		window.addEventListener('resize', () => {
			dimensions = updateDimensions();
			const newMaxTranslate = (dimensions.containerSize = dimensions.indicatorSize);

			targetTranslate = Math.min(Math.max(targetTranslate, -newMaxTranslate), 0);
			currentTranslate = targetTranslate;

			const transform = isHorizontal
				? `translateX(${currentTranslate}px)`
				: `translateY(${currentTranslate}px)`;

			items.style.transform = transform;
		});
		itemImages.forEach((img) => {
			img.style.opacity = inactiveItemOpacity;
			img.style.scale = inactiveItemScale;
		});
		itemImages[0].style.opacity = activeItemOpacity;
		itemImages[0].style.scale = activeItemScale;
		// itemImages[0].classList.remove('inactive-image');
		// itemImages[0].classList.add('active-image');
		updateSelectedImageContent(0);
		animate();

		console.log(itemElements);
	});
</script>

<div class="minimap-container">
	<div class="img-preview">
		<div class="img-preview-content">
			{images[currentImageIndex].content}
		</div>
	</div>
	<!-- Horizontal Scrolling Gallery -->
	<div class="minimap">
		<div class="indicator"></div>
		<div class="items">
			{#each images as image, i}
				<div class="item"><img src={image.src} alt={image.title} /></div>
			{/each}
		</div>
	</div>
</div>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		--minimap-small-value: 100px;
		--minimap-big-value: 100px;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 10px;
		transition:
			opacity 0.2s,
			scale 0.2s;
		user-select: none;
	}

	.minimap-container {
		position: relative;
		width: 100vw;
		height: calc(100vh - 60px);
		overflow: hidden;
	}

	.img-preview {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 50%;
		height: 75%;
		overflow: hidden;
	}

	/* MAY NEED TO ADJUST THIS BASED ON CONTENT WE ADD  */
	/* .img-preview-content {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		height: 100%;
		object-fit: contain;
	} */

	.minimap {
		position: absolute;
		top: 20%;
		right: 8em;
		width: var(--minimap-big-value);
	}

	.indicator {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: var(--minimap-small-value);
		border: 1px solid red;
		z-index: 2;
	}

	.items {
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		gap: 0px;
		will-change: transform;
	}

	.item {
		width: 100%;
		height: var(--minimap-small-value);
		padding: 5px;
		transition:
			opacity 0.2s,
			scale 0.2s;
		cursor: pointer;
	}
	.item:hover {
		opacity: 0.9;
		scale: 1.05;
	}

	@media (max-width: 1680px) {
		body {
			overflow: hidden;
			touch-action: none;
		}
		.minimap-container {
			touch-action: none;
		}
		.minimap {
			/* top: auto; */
			top: 0;
			right: auto;
			bottom: 5em;
			left: 20%;
			width: auto;
			height: var(--minimap-big-value);
			touch-action: none;
		}
		.indicator {
			top: 0;
			left: 0;
			width: var(--minimap-small-value);
			height: 100%;
		}
		.items {
			flex-direction: row;
			width: max-content;
			height: 100%;
			touch-action: none;
		}
		.item {
			width: var(--minimap-small-value);
			height: 100%;
			padding: 5px;
		}
		.img-preview {
			width: 90%;
			height: calc(100% - var(--minimap-big-value) - 5%);
			top: calc(var(--minimap-big-value) + 2.5%);
			left: 5%;
			transform: unset;
		}
	}
</style>
