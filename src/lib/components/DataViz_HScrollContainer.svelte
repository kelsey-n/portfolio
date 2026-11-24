<script>
  import { onMount } from "svelte";
  import DataVizContentCard from "./DataViz_ContentCard.svelte";

  let { data } = $props();

  let currentImageIndex = $state(0);

  // Native horizontal scrolling (trackpad, touch, shift+wheel); arrows scroll by a step.
  const SCROLL_STEP = 320;
  let scrollEl;
  let canScrollLeft = $state(false);
  let canScrollRight = $state(false);

  function updateScrollState() {
    if (!scrollEl) return;
    canScrollLeft = scrollEl.scrollLeft > 2;
    canScrollRight =
      scrollEl.scrollLeft < scrollEl.scrollWidth - scrollEl.clientWidth - 2;
  }

  function shiftLeft() {
    scrollEl.scrollBy({ left: -SCROLL_STEP, behavior: "smooth" });
  }

  function shiftRight() {
    scrollEl.scrollBy({ left: SCROLL_STEP, behavior: "smooth" });
  }

  let visibleProjects = $derived(
    data
      .map((item, i) => ({ ...item, originalIndex: i }))
      .filter((item) => item.show === "Y"),
  );

  let highlightedProjects = $derived(
    visibleProjects.filter((p) => p.highlighted === "Y"),
  );

  let allWorkByYear = $derived.by(() => {
    const nonHighlighted = visibleProjects.filter((p) => p.highlighted !== "Y");
    const yearMap = new Map();
    for (const p of nonHighlighted) {
      const y = p.year || "Other";
      if (!yearMap.has(y)) yearMap.set(y, []);
      yearMap.get(y).push(p);
    }
    return [...yearMap.entries()]
      .sort(([a], [b]) => Number(b) - Number(a))
      .map(([year, items]) => ({ year, items }));
  });

  let currentProject = $derived(data[currentImageIndex]);
  let isCurrentHighlighted = $derived(currentProject?.highlighted === "Y");
  let currentYear = $derived(currentProject?.year);

  function setActiveImage(index) {
    currentImageIndex = index;
  }

  onMount(() => {
    updateScrollState();
    window.addEventListener("resize", updateScrollState);
    return () => window.removeEventListener("resize", updateScrollState);
  });
</script>

{#snippet thumb(image)}
  <button
    class="item"
    aria-current={image.originalIndex === currentImageIndex ? "true" : undefined}
    onclick={() => setActiveImage(image.originalIndex)}
  >
    <img
      src="/images/data-viz-page/{image.imageFolder}/carouselImage.webp"
      alt={image.mainImageAlt}
      loading="lazy"
    />
    <span class="bar"></span>
    <span class="tooltip">{image.content.title}</span>
  </button>
{/snippet}

<div class="minimap-container">
  <nav class="minimap" aria-label="Projects">
    <div class="scroller" bind:this={scrollEl} onscroll={updateScrollState}>
      <div class="items">
        <!-- Highlighted Work: each thumbnail has its own year label -->
        <div class="section-group" class:label-active={isCurrentHighlighted}>
          <div class="section-header">Highlighted Work</div>
          <div class="thumb-row">
            {#each highlightedProjects as image}
              <div class="thumb-col">
                {@render thumb(image)}
                <div
                  class="year kn-figure"
                  class:label-active={image.originalIndex === currentImageIndex}
                >
                  {image.year}
                </div>
              </div>
            {/each}
          </div>
        </div>

        <!-- All Work: year groups, year label below each group -->
        <div class="section-group" class:label-active={!isCurrentHighlighted}>
          <div class="section-header">All Work</div>
          <div class="thumb-row">
            {#each allWorkByYear as yearGroup}
              <div class="year-group">
                <div class="year-thumbs">
                  {#each yearGroup.items as image}
                    {@render thumb(image)}
                  {/each}
                </div>
                <div
                  class="year kn-figure"
                  class:label-active={yearGroup.year === currentYear &&
                    !isCurrentHighlighted}
                >
                  {yearGroup.year}
                </div>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>

    {#if canScrollLeft}
      <button class="arrow arrow-left" onclick={shiftLeft} aria-label="Scroll left"
        >&#8249;</button
      >
    {/if}
    {#if canScrollRight}
      <button class="arrow arrow-right" onclick={shiftRight} aria-label="Scroll right"
        >&#8250;</button
      >
    {/if}
  </nav>

  <div class="img-preview">
    <DataVizContentCard
      data={data[currentImageIndex].content}
      imageFolder={data[currentImageIndex].imageFolder}
    />
  </div>
</div>

<style>
  .minimap {
    --thumb: 92px;
    position: sticky;
    top: var(--header-h, 0px);
    z-index: 9999;
    background: var(--paper-sunk);
    border-bottom: 1px solid var(--rule);
  }

  .scroller {
    overflow-x: auto;
    overflow-y: hidden;
    scrollbar-width: thin;
    scrollbar-color: var(--rule) transparent;
    overscroll-behavior-x: contain;
  }

  .items {
    display: flex;
    width: max-content;
    padding: var(--space-3) var(--space-6) var(--space-2);
    gap: var(--space-6);
  }

  .section-group {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }

  .section-group + .section-group {
    border-left: 1px solid var(--rule);
    padding-left: var(--space-6);
  }

  /* Labels stay pinned to the left edge while their group scrolls past */
  .section-header {
    position: sticky;
    left: var(--space-6);
    align-self: flex-start;
    font-family: var(--font-display);
    font-size: 12px;
    line-height: 20px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--ink-muted);
    transition: color 0.2s ease;
  }

  .section-group.label-active .section-header {
    color: var(--ink);
  }

  .thumb-row,
  .year-thumbs {
    display: flex;
    gap: var(--space-2);
    align-items: flex-start;
  }

  .thumb-row {
    gap: var(--space-5);
  }

  .section-group:first-child .thumb-row {
    gap: var(--space-2);
  }

  .thumb-col,
  .year-group {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .year {
    font-size: 11px;
    line-height: 16px;
    font-weight: 500;
    color: var(--ink-muted);
    transition: color 0.2s ease;
  }

  .year.label-active {
    color: var(--ember);
  }

  /* Thumbnails: full colour, square; the current one is framed and underlined */
  .item {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: var(--thumb);
    padding: 0;
    cursor: pointer;
  }

  .item img {
    display: block;
    width: var(--thumb);
    height: var(--thumb);
    object-fit: cover;
    outline: 1px solid var(--rule);
    outline-offset: -1px;
  }

  .item[aria-current="true"] img {
    outline-color: var(--rule-strong);
  }

  .bar {
    height: var(--horizon);
    background: var(--sunset);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 220ms ease-out;
  }

  .item:hover .bar {
    transform: scaleX(0.35);
  }

  .item[aria-current="true"] .bar {
    transform: scaleX(1);
  }

  /* Tooltip: the project title on hover, over the image's lower edge */
  .tooltip {
    position: absolute;
    top: calc(var(--thumb) - 4px);
    left: 0;
    width: max-content;
    max-width: 220px;
    white-space: normal;
    font-family: var(--font-text);
    font-size: 13px;
    line-height: 1.3;
    color: var(--ink);
    background: var(--paper);
    border: 1px solid var(--rule-strong);
    padding: 3px 6px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.15s ease;
    z-index: 2;
  }

  .item:hover .tooltip {
    opacity: 1;
  }

  /* Arrows: square, on paper, no shadow */
  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 3;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    font-size: 20px;
    line-height: 1;
    color: var(--ink);
    background: var(--paper);
    border: 1px solid var(--rule-strong);
    cursor: pointer;
  }

  .arrow:hover {
    background: var(--highlighter);
  }

  .arrow-left {
    left: 6px;
  }

  .arrow-right {
    right: 6px;
  }

  @media (max-width: 640px) {
    .minimap {
      --thumb: 72px;
    }
    .items {
      padding-left: var(--space-4);
      padding-right: var(--space-4);
    }
    .arrow {
      display: none;
    }
  }
</style>
