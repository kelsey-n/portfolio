<script>
  import { onMount } from "svelte";
  import DataVizContentCard from "./DataViz_ContentCard.svelte";

  let { data } = $props();

  let currentImageIndex = $state(0);

  function setActiveImage(index) {
    currentImageIndex = index;
  }

  let scrollOffset = $state(0);
  let maxOffset = $state(0);
  const SCROLL_STEP = 220;

  let canScrollLeft = $derived(scrollOffset > 0);
  let canScrollRight = $derived(scrollOffset < maxOffset);

  let itemsEl;
  let minimapEl;

  function shiftLeft() {
    scrollOffset = Math.max(0, scrollOffset - SCROLL_STEP);
  }

  function shiftRight() {
    scrollOffset = Math.min(maxOffset, scrollOffset + SCROLL_STEP);
  }

  onMount(() => {
    const updateMax = () => {
      if (itemsEl && minimapEl) {
        maxOffset = Math.max(0, itemsEl.scrollWidth - minimapEl.clientWidth);
      }
    };
    updateMax();
    window.addEventListener("resize", updateMax);
    return () => window.removeEventListener("resize", updateMax);
  });
</script>

<div class="minimap-container">
  <!-- Thumbnail strip -->
  <div class="minimap" bind:this={minimapEl}>
    {#if canScrollLeft}
      <div class="fade-left"></div>
      <button class="arrow arrow-left" onclick={shiftLeft}>&#8249;</button>
    {/if}

    <div class="items" bind:this={itemsEl} style="transform: translateX(-{scrollOffset}px)">
      {#each data as image, i}
        {#if image.show === "Y"}
          <button
            class="item {i === currentImageIndex ? 'active' : 'inactive'}"
            onclick={() => setActiveImage(i)}
          >
            <img
              src="/images/data-viz-page/{image.imageFolder}/carouselImage.webp"
              alt={image.mainImageAlt}
              loading="lazy"
            />
            <div class="tooltip">{image.content.title}</div>
          </button>
        {/if}
      {/each}
    </div>

    {#if canScrollRight}
      <div class="fade-right"></div>
      <button class="arrow arrow-right" onclick={shiftRight}>&#8250;</button>
    {/if}
  </div>

  <div class="img-preview">
    <DataVizContentCard
      data={data[currentImageIndex].content}
      imageFolder={data[currentImageIndex].imageFolder}
    />
  </div>
</div>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    --minimap-small-value: 100px;
    --minimap-big-value: 130px;
  }

  .minimap {
    width: 100%;
    height: calc(var(--minimap-big-value) + 25px);
    background-color: #f5f5f3;
    white-space: nowrap;
    overflow-x: clip;
    overflow-y: visible;
    /* clip left/right at element edges; extend 80px below for tooltips */
    clip-path: inset(0 0 -80px 0);
    box-shadow: 0 4px 4.5px rgba(0, 0, 0, 0.3);
    position: sticky;
    z-index: 9999;
    top: 0px;
  }

  .items {
    display: flex;
    flex-direction: row;
    height: 100%;
    gap: 0.5rem;
    transition: transform 0.3s ease;
    padding: 0 5px;
  }

  .item {
    position: relative;
    transition: all 0.3s ease;
    border-radius: 10px;
    padding: 0;
  }

  .item img {
    width: 100%;
    height: var(--minimap-small-value);
    object-fit: cover;
    transition:
      opacity 0.15s ease,
      transform 0.25s ease,
      height 0.3s ease,
      border-color 0.2s ease;
    cursor: pointer;
    border-radius: 10px;
  }

  .item.inactive {
    flex: 0 0 var(--minimap-small-value);
  }

  .item.inactive img {
    opacity: 0.35;
    transform: scale(0.9);
    border: 1.5px solid black;
  }

  .item.inactive:hover {
    transform: scale(1.15);
    z-index: 2;
  }

  .item.inactive:hover img {
    opacity: 1;
    border-color: black;
  }

  .item.active {
    flex: 0 0 var(--minimap-big-value);
  }

  .item.active img {
    opacity: 1;
    transform: scale(1);
    height: var(--minimap-big-value);
    border: 3px solid var(--color-pink);
  }

  /* Tooltip */
  .tooltip {
    position: absolute;
    top: calc(var(--minimap-small-value) + 23px);
    left: 50%;
    transform: translateX(-50%);
    width: max-content;
    max-width: 220px;
    white-space: normal;
    font-size: 0.62rem;
    line-height: 1.35;
    max-height: calc(1.35em * 2 + 10px);
    overflow: hidden;
    color: #021a2b;
    background: rgba(255, 255, 255, 0.96);
    padding: 3px 6px;
    border-radius: 3px;
    text-align: center;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.15s ease;
    border: 1px solid #ddd;
    z-index: 10000;
  }

  .item:hover .tooltip {
    opacity: 1;
  }

  .item:first-child .tooltip {
    left: 0;
    transform: none;
  }

  .item:last-child .tooltip {
    left: auto;
    right: 0;
    transform: none;
  }

  /* Navigation arrows */
  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 100;
    background: rgba(235, 235, 233, 0.95);
    border: 1px solid rgba(0, 0, 0, 0.22);
    border-radius: 50%;
    width: 32px;
    height: 32px;
    cursor: pointer;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    line-height: 1;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.14);
    transition:
      background 0.15s ease,
      box-shadow 0.15s ease;
  }

  .arrow:hover {
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 2px 7px rgba(0, 0, 0, 0.2);
  }

  .arrow-left {
    left: 6px;
  }

  .arrow-right {
    right: 6px;
  }

  /* Edge fade gradients */
  .fade-left,
  .fade-right {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 55px;
    pointer-events: none;
    z-index: 50;
  }

  .fade-left {
    left: 0;
    background: linear-gradient(to right, rgba(245, 245, 243, 0.75), transparent);
  }

  .fade-right {
    right: 0;
    background: linear-gradient(to left, rgba(245, 245, 243, 0.75), transparent);
  }
</style>
