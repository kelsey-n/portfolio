<script>
	import gsap from 'gsap';
	import SplitType from 'split-type';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	// TODO: BRING BACK TOOLTIP
	// style more like book (opposite skews on each side of div, gradient in middle)

	export let data;
	let articles = data.articles;

	let defaultArticleIndex = Math.floor(Math.random() * articles.length) + 1;
	let defaultQuote = articles.filter((d) => d.index === defaultArticleIndex.toString())[0].quote1;

	let highlightedArticleIndex = defaultArticleIndex;
	let highlightedQuote = defaultQuote;

	// Function to update quote
	function updateQuote(article) {
		const randomQuoteIndex = Math.floor(Math.random() * 5) + 1;

		highlightedQuote = article[`quote${randomQuoteIndex}`];

		const hoveredArticle = document.getElementById(`article-${article.index}`);
		console.log(hoveredArticle);
		hoveredArticle.classList.add('persist-gradient');

		// Remove the gradient class from the last hovered element
		// if (lastHoveredElement) {
		// 	lastHoveredElement.classList.remove('persist-gradient');
		// }

		// // Set new hovered element
		// lastHoveredElement = event.currentTarget;
		// lastHoveredElement.classList.add('persist-gradient');
	}

	onMount(() => {
		// gsap.registerPlugin(TextPlugin);
	});
</script>

<div class="p-6 text-gray-200">
	{#key highlightedQuote}
		<div
			class="quote-container relative mx-auto h-24 w-full overflow-hidden md:w-1/2"
			style="background-image: url('/images/writing-page/image 57 (1).png')"
		>
			<p
				class="gradient-text quote-container line-clamp-3 w-full overflow-hidden text-xl text-ellipsis italic"
				id="highlighted-quote"
				in:fade
			>
				<svg
					class="quote-icon"
					xmlns="http://www.w3.org/2000/svg"
					width="30"
					height="27"
					viewBox="0 0 30 27"
					fill="none"
				>
					<path
						fill="white"
						d="M28.6 0.499994L30 2.4C27.9333 3.93333 26.3333 5.76667 25.2 7.9C24.0667 9.96666 23.5 12.2333 23.5 14.7H23.7C25.3 14.7 26.6333 15.2667 27.7 16.4C28.8333 17.4667 29.4 18.8 29.4 20.4C29.4 21.9333 28.8333 23.3 27.7 24.5C26.6333 25.6333 25.3 26.2 23.7 26.2C22.0333 26.2 20.6667 25.6667 19.6 24.6C18.6 23.4667 18 22 17.8 20.2C17.6667 18.2 17.9 15.9667 18.5 13.5C19.1667 11.0333 20.3 8.63333 21.9 6.3C23.5667 3.96666 25.8 2.03333 28.6 0.499994ZM11.4 0.499994L12.8 2.4C10.7333 3.93333 9.13333 5.76667 8 7.9C6.86667 9.96666 6.3 12.2333 6.3 14.7H6.5C8.1 14.7 9.43333 15.2667 10.5 16.4C11.6333 17.4667 12.2 18.8 12.2 20.4C12.2 21.9333 11.6333 23.3 10.5 24.5C9.43333 25.6333 8.1 26.2 6.5 26.2C4.83333 26.2 3.46667 25.6667 2.4 24.6C1.4 23.4667 0.8 22 0.6 20.2C0.466667 18.2 0.7 15.9667 1.3 13.5C1.96667 11.0333 3.1 8.63333 4.7 6.3C6.36667 3.96666 8.6 2.03333 11.4 0.499994Z"
					/>
				</svg>
				<span class="pl-[2rem]">{highlightedQuote}</span>
			</p>
		</div>
	{/key}

	<h2 class="border-b border-gray-600 pb-2 text-2xl font-bold">Highlighted work</h2>

	<ul class="mt-4">
		{#each articles as article}
			{#if article.highlighted === 'Y'}
				<!-- <div class="hover-container"> -->
				<li
					role="listitem"
					class="hovered-gradient mb-4 flex cursor-pointer items-center justify-between text-gray-400"
					id="article-{article.index}"
					on:mouseenter={() => updateQuote(article)}
					transition:fade
				>
					<span>
						<a href="#" class="text-lg font-semibold">
							{article.articleName}
						</a>
						<small class="block">{article.publishedIn}</small>
					</span>
					<span>{article.year}</span>
				</li>
				<!-- </div> -->
			{/if}
		{/each}
	</ul>

	<h2 class="border-b border-gray-600 pb-2 text-2xl font-bold">All work</h2>

	<ul class="mt-4">
		{#each articles as article}
			{#if article.highlighted === 'N'}
				<li
					role="listitem"
					class="hover-container mb-4 flex cursor-pointer items-center justify-between transition-all duration-300"
					on:mouseenter={() => updateQuote(article.quote)}
				>
					<span>
						<a href="#" class="text-lg font-semibold text-gray-400 hover:underline">
							{article.articleName}
						</a>
						<small class="block text-gray-400">{article.publishedIn}</small>
					</span>
					<span class="text-gray-400">{article.year}</span>
				</li>
			{/if}
		{/each}
	</ul>
</div>

<style>
	/* Apply the gradient text effect */
	.gradient-text {
		background: var(--color-rainbow-gradient);
		background-clip: text;
		background-size: 300%;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		/* transition: 0.5s ease-in-out; */
		/* animation: animate 0.5s ease-in-out; */
		/* position: relative; */
	}

	.quote-icon {
		position: absolute;
	}

	.quote-container {
		background-repeat: no-repeat;
		background-size: cover;
	}

	/* .hovered-gradient {
		background: linear-gradient(90deg, #ddd, #aaa);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		transition: background-position 0.5s ease-in-out;
	} */
	.hovered-gradient:hover,
	.persist-gradient {
		background: var(--color-rainbow-gradient);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		transition: all 0.5s ease-in-out;
	}

	@keyframes animate {
		0% {
			background-position: 0 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0 50%;
		}
	}

	.hover-container {
		position: relative;
		cursor: pointer;
	}

	/* NO COLORED BACKGROUND ON TOOLTIP */

	/* .tooltip {
		font-family: 'Reenie Beanie', cursive;
		position: absolute;
		bottom: 150%;
		left: 50%;
		transform: translateX(-50%) skew(-5deg, -7deg);
		background: #fff;
		color: black;
		padding: 12px 18px;
		border-radius: 15px;
		font-size: 16px;
		text-align: center;
		white-space: normal;
		width: auto;
		max-width: 250px;
		word-wrap: break-word;
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
		pointer-events: none;
		box-shadow: 2px 3px 0px black;
		font-family: 'Reenie Beanie', cursive;
		border: 2px solid black;
		z-index: 999;
	}

	.tooltip::before {
		content: '';
		position: absolute;
		top: 4px;
		left: 4px;
		width: 100%;
		height: 100%;
		background: var(--color-light-yellow);
		border-radius: 15px;
		z-index: -10;
		filter: blur(2px);
	}

	.tooltip::after {
		content: '';
		position: absolute;
		top: 100%;
		left: 50%;
		transform: translateX(-50%);
		border-width: 12px;
		border-style: solid;
		border-color: #fff transparent transparent transparent;
		filter: drop-shadow(3px 4px 0px black);
	} */

	/* KEEP FOR BOTH TOOLTIP OPTIONS */
	.hover-container:hover .tooltip,
	.hover-container:hover .tooltip-wrapper {
		display: block;
		opacity: 1;
	}

	/* COLORED BACKGROUND ON TOOLTIP  */
	.tooltip-wrapper {
		position: absolute;
		opacity: 0;
		bottom: 150%;
		left: 50%;
		transform: translateX(-50%);
		display: inline-block;
		pointer-events: none;
	}

	.tooltip-bg {
		position: absolute;
		top: 5%;
		left: 5%;
		width: 100%;
		height: 100%;
		background: var(--color-light-yellow);
		border-radius: 15px;
		z-index: 0;
		transform: skew(-7deg, -3deg);
	}

	.tooltip-bg::after {
		content: '';
		position: absolute;
		top: 100%;
		left: 45%;
		transform: translateX(-50%);
		border-width: 10px;
		/* border-style: solid; */
		border-color: var(--color-light-yellow) transparent transparent transparent;
	}

	.tooltip {
		font-family: 'Reenie Beanie', cursive;
		position: relative;
		transform: skew(-7deg, -3deg);
		background: #fff;
		color: black;
		padding: 12px 18px;
		border-radius: 15px;
		font-size: 16px;
		text-align: center;
		white-space: normal;
		width: auto;
		max-width: 250px;
		word-wrap: break-word;
		opacity: 0;
		pointer-events: none;
		box-shadow: 2px 3px 0px black;
		border: 2px solid black;
		z-index: 1;
	}
	.tooltip::after {
		content: '';
		position: absolute;
		top: 100%;
		left: 50%;
		transform: translateX(-50%);
		border-width: 12px;
		border-style: solid;
		border-color: var(--color-light-yellow) transparent transparent transparent;
		filter: drop-shadow(3px 4px 0px black);
	}

	.tooltip::before {
		content: '';
		position: absolute;
		top: 4%;
		left: 4%;
		width: 96%;
		height: 96%;
		background: var(--color-light-yellow);
		border-radius: 15px 5px 10px 5px;
		z-index: -10;
		filter: blur(1px);
	}

	.tooltip p {
		transform: skew(7deg, 3deg);
	}
</style>
