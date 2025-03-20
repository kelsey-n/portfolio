<script>
	import { tagClassMap } from '../../constants.js';
	let { data } = $props();

	let hoveredImageIndex = $state(0);

	function updateHoveredImageIndex(i) {
		hoveredImageIndex = i;
	}

	function getRandomValue(min = -3, max = 3.1) {
		return Math.random() * (max - min) + min;
	}
	// style="transform: rotate({getRandomValue()}deg)"
</script>

<div class="img-preview-content">
	<div class="content-title">
		{data.content.title}
	</div>
	<div class="main-content-flex">
		<div
			class="image-container-flex-child"
			style="background-image: url('{data.content.images[hoveredImageIndex]}')"
		></div>
		<div class="content-description-flex-child">
			<div class="flex flex-wrap gap-2.5">
				{#each data.content.tags as tag}
					<div class="tag-card {tagClassMap[tag]}">{tag}</div>
				{/each}
			</div>
			<div>Network chart coded with D3</div>
			<div>FEATURED:</div>
			<button>View project</button>
			<div class="mini-image-gallery-flex">
				{#each data.content.images as image, i}
					<img
						src={image}
						alt="mini carousel"
						onmouseenter={() => updateHoveredImageIndex(i)}
						class:active={hoveredImageIndex === i}
					/>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	.content-title {
		font-size: 32px;
		display: flex;
		justify-content: center;
		padding-bottom: 2%;
	}

	.main-content-flex {
		display: flex;
		border: 1px solid;
		height: calc(100vh - 300px);
	}

	.image-container-flex-child {
		flex: 1;
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
		transition: all 0.1s ease-in-out;
	}

	.content-description-flex-child {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	.mini-image-gallery-flex {
		display: flex;
		justify-content: center;
		column-gap: 10px;
		row-gap: 10px;
		flex-wrap: wrap;
	}

	.mini-image-gallery-flex img {
		height: 10vh;
		min-height: 70px;
		border-radius: 3px;
		cursor: pointer;
		transition: all 0.2s ease-in-out;
	}

	.mini-image-gallery-flex img.active {
		opacity: 0.5;
	}

	.tag-card {
		padding: 0.2% 1%;
		border-radius: 3px;
	}

	.tech {
		background-color: aquamarine;
		color: black;
	}

	.design {
		background-color: blueviolet;
	}
</style>
