<script>
  import { onMount, tick } from "svelte";
  import DataVizContentCard from "./DataViz_ContentCard.svelte";

  let { data } = $props();

  let currentImageIndex = $state(0);

  let scrollOffset = $state(0);
  let maxOffset = $state(0);
  const SCROLL_STEP = 220;

  let canScrollLeft = $derived(scrollOffset > 0);
  let canScrollRight = $derived(scrollOffset < maxOffset);

  let itemsEl;
  let minimapEl;

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

  // Which section + year the current selection belongs to
  let currentProject = $derived(data[currentImageIndex]);
  let isCurrentHighlighted = $derived(currentProject?.highlighted === "Y");
  let currentYear = $derived(currentProject?.year);

  // ── Sticky labels ────────────────────────────────────────────────────────────
  // Set to false to disable sticky behaviour and revert to static labels.
  const STICKY_LABELS = true;

  // Natural left positions of each section/year group, measured from the
  // minimap's left edge at scrollOffset=0. Stored so $derived can react to
  // scrollOffset changes without re-querying the DOM on every frame.
  let highlightedPos = $state({ left: 0, width: 0 });
  let allWorkPos     = $state({ left: 0, width: 0 });
  let yearGroupPos   = $state(/** @type {{ left: number, width: number }[]} */ ([]));

  function measurePositions() {
    if (!minimapEl || !itemsEl) return;
    const mRect = minimapEl.getBoundingClientRect();
    const cur   = scrollOffset; // add back the current translate so we get natural coords

    const sections = itemsEl.querySelectorAll(":scope > .section-group");
    if (sections[0]) {
      const r = sections[0].getBoundingClientRect();
      highlightedPos = { left: r.left - mRect.left + cur, width: r.width };
    }
    if (sections[1]) {
      const r = sections[1].getBoundingClientRect();
      allWorkPos = { left: r.left - mRect.left + cur, width: r.width };
    }
    yearGroupPos = Array.from(itemsEl.querySelectorAll(".year-group")).map((el) => {
      const r = el.getBoundingClientRect();
      return { left: r.left - mRect.left + cur, width: r.width };
    });
  }

  // How many px to counter-translate a label so it stays at the visible left
  // edge of its section, capped so it doesn't spill into the next section.
  function labelShift(pos, labelWidth) {
    if (!STICKY_LABELS || !pos.width) return 0;
    return Math.max(0, Math.min(scrollOffset - pos.left, pos.width - labelWidth - 8));
  }

  let highlightedShift = $derived(labelShift(highlightedPos, 116));
  let allWorkShift     = $derived(labelShift(allWorkPos, 72));
  let yearShifts       = $derived(yearGroupPos.map((pos) => labelShift(pos, 34)));
  // ─────────────────────────────────────────────────────────────────────────────

  async function setActiveImage(index) {
    currentImageIndex = index;
    // Active thumbnail resizes, which shifts year-group widths — re-measure.
    await tick();
    measurePositions();
  }

  function shiftLeft() {
    scrollOffset = Math.max(0, scrollOffset - SCROLL_STEP);
  }

  function shiftRight() {
    scrollOffset = Math.min(maxOffset, scrollOffset + SCROLL_STEP);
  }

  onMount(() => {
    const update = () => {
      if (itemsEl && minimapEl) {
        maxOffset = Math.max(0, itemsEl.scrollWidth - minimapEl.clientWidth);
      }
      measurePositions();
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  });
</script>

<div class="minimap-container">
  <!-- Thumbnail strip -->
  <div class="minimap" bind:this={minimapEl}>
    {#if canScrollLeft}
      <div class="fade-left"></div>
      <button class="arrow arrow-left" onclick={shiftLeft}>&#8249;</button>
    {/if}

    <div
      class="items"
      bind:this={itemsEl}
      style="transform: translateX(-{scrollOffset}px)"
    >
      <!-- Highlighted Work: section label on top, each thumbnail has its own year label below -->
      <div class="section-group">
        <div
          class="section-header"
          class:label-active={isCurrentHighlighted}
          style="transform: translateX({highlightedShift}px)"
        >
          Highlighted Work
        </div>
        <div class="thumb-row">
          {#each highlightedProjects as image}
            <div class="thumb-col">
              <button
                class="item {image.originalIndex === currentImageIndex
                  ? 'active'
                  : 'inactive'}"
                onclick={() => setActiveImage(image.originalIndex)}
              >
                <img
                  src="/images/data-viz-page/{image.imageFolder}/carouselImage.webp"
                  alt={image.mainImageAlt}
                  loading="lazy"
                />
                <div class="tooltip">{image.content.title}</div>
              </button>
              <div
                class="thumb-year"
                class:label-active={image.originalIndex === currentImageIndex}
              >
                {image.year}
              </div>
            </div>
          {/each}
        </div>
      </div>

      <!-- Vertical divider between sections -->
      <div class="section-divider"></div>

      <!-- All Work: section label on top, year groups with thumbnails, year label below each group -->
      <div class="section-group">
        <div
          class="section-header"
          class:label-active={!isCurrentHighlighted}
          style="transform: translateX({allWorkShift}px)"
        >
          All Work
        </div>
        <div class="thumb-row all-work-row">
          {#each allWorkByYear as yearGroup, gi}
            {#if gi > 0}
              <div class="year-divider"></div>
            {/if}
            <div class="year-group">
              <div class="year-thumbs">
                {#each yearGroup.items as image}
                  <button
                    class="item {image.originalIndex === currentImageIndex
                      ? 'active'
                      : 'inactive'}"
                    onclick={() => setActiveImage(image.originalIndex)}
                  >
                    <img
                      src="/images/data-viz-page/{image.imageFolder}/carouselImage.webp"
                      alt={image.mainImageAlt}
                      loading="lazy"
                    />
                    <div class="tooltip">{image.content.title}</div>
                  </button>
                {/each}
              </div>
              <div
                class="year-label"
                class:label-active={yearGroup.year === currentYear && !isCurrentHighlighted}
                style="transform: translateX({yearShifts[gi] ?? 0}px)"
              >
                {yearGroup.year}
              </div>
            </div>
          {/each}
        </div>
      </div>
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
    --minimap-small-value: 95px;
    --minimap-big-value: 110px;
    --section-header-h: 20px;
    --year-label-h: 18px;
  }

  .minimap {
    width: 100%;
    height: calc(
      var(--minimap-big-value) + var(--section-header-h) + var(--year-label-h) +
        6px
    );
    background-color: #f5f5f3;
    white-space: nowrap;
    overflow-x: clip;
    overflow-y: visible;
    clip-path: inset(0 0 -80px 0);
    box-shadow: 0 4px 4.5px rgba(0, 0, 0, 0.3);
    position: sticky;
    z-index: 9999;
    top: 0px;
  }

  /* Outer flex row — section groups sit side by side */
  .items {
    display: flex;
    flex-direction: row;
    height: 100%;
    transition: transform 0.3s ease;
    padding: 0 5px;
    align-items: stretch;
  }

  /* Each section (highlighted / all work) is a column: header → thumb row */
  .section-group {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 0 6px;
  }

  .section-header {
    flex-shrink: 0;
    height: var(--section-header-h);
    line-height: var(--section-header-h);
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: rgba(2, 26, 43, 0.5);
    font-weight: 500;
    white-space: nowrap;
    transition: color 0.2s ease, transform 0.3s ease;
  }

  .section-header.label-active {
    color: #000;
  }

  /* Row of thumbnails fills remaining height */
  .thumb-row {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 0.5rem;
  }

  /* Each highlighted thumbnail is wrapped in a column: image on top, year below */
  .thumb-col {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* Per-thumbnail year label (highlighted section only) */
  .thumb-year {
    flex-shrink: 0;
    height: var(--year-label-h);
    line-height: var(--year-label-h);
    font-size: 0.6rem;
    color: rgba(2, 26, 43, 0.5);
    text-align: center;
    letter-spacing: 0.03em;
    transition: color 0.2s ease;
  }

  .thumb-year.label-active {
    color: #000;
    font-weight: 600;
  }

  /* Full-height divider between the two sections */
  .section-divider {
    flex-shrink: 0;
    width: 1px;
    background: rgba(2, 26, 43, 0.38);
    align-self: stretch;
    margin: 0 10px;
  }

  /* All-work thumb-row: year-groups need to stretch vertically */
  .all-work-row {
    align-items: stretch;
  }

  /* Each year group: thumbnails on top, year label pinned below */
  .year-group {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .year-thumbs {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 0.5rem;
  }

  .year-label {
    flex-shrink: 0;
    height: var(--year-label-h);
    line-height: var(--year-label-h);
    font-size: 0.6rem;
    color: rgba(2, 26, 43, 0.5);
    text-align: left;
    padding-left: 2px;
    letter-spacing: 0.04em;
    transition: color 0.2s ease, transform 0.3s ease;
  }

  .year-label.label-active {
    color: #000;
    font-weight: 600;
  }

  /* Divider between year groups — full thumbnail height + year label */
  .year-divider {
    flex-shrink: 0;
    width: 1px;
    background: rgba(2, 26, 43, 0.25);
    align-self: flex-end;
    height: calc(var(--minimap-small-value) + var(--year-label-h));
    margin: 0 8px;
  }

  /* Thumbnail buttons */
  .item {
    position: relative;
    transition: all 0.3s ease;
    border-radius: 10px;
    padding: 0;
  }

  .item img {
    display: block;
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
    width: var(--minimap-small-value);
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
    width: var(--minimap-big-value);
  }

  .item.active img {
    opacity: 1;
    transform: scale(1);
    height: var(--minimap-big-value);
    border: 3px solid var(--color-pink);
  }

  /* Tooltip — flush with the bottom edge of the image */
  .tooltip {
    position: absolute;
    top: calc(var(--minimap-small-value) - 5px);
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

  /* Keep first tooltip flush left, last flush right so they don't overflow the strip */
  .section-group:first-child .thumb-col:first-child .tooltip {
    left: 0;
    transform: none;
  }

  .year-group:last-child .item:last-child .tooltip {
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

  /* Edge fade gradients — cover only the thumbnail band, not the label rows */
  .fade-left,
  .fade-right {
    position: absolute;
    top: var(--section-header-h);
    bottom: var(--year-label-h);
    width: 55px;
    pointer-events: none;
    z-index: 50;
  }

  .fade-left {
    left: 0;
    background: linear-gradient(
      to right,
      rgba(245, 245, 243, 0.75),
      transparent
    );
  }

  .fade-right {
    right: 0;
    background: linear-gradient(
      to left,
      rgba(245, 245, 243, 0.75),
      transparent
    );
  }
</style>
