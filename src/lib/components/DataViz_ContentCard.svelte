<script>
  import { tagClassMap } from "../../constants.js";
  let { data, imageFolder } = $props();

  let hoveredImageIndex = $state(0);
  // Tracks which gif filenames failed to load as video (webm/mp4 not yet generated)
  let gifVideoFailed = $state({});

  function isGif(filename) {
    return filename?.toLowerCase().endsWith(".gif");
  }

  function toWebp(filename) {
    return filename?.replace(/\.(png|jpg|jpeg)$/i, ".webp");
  }

  function imgSrc(filename) {
    const name = isGif(filename) ? filename : toWebp(filename);
    return `/images/data-viz-page/${imageFolder}/${name}`;
  }

  function gifVideoSrc(filename, ext) {
    return imgSrc(filename.replace(/\.gif$/i, `.${ext}`));
  }

  $effect(() => {
    if (hoveredImageIndex >= data.images?.length) {
      hoveredImageIndex = 0;
    }
  });

  function updateHoveredImageIndex(i) {
    hoveredImageIndex = i;
  }
</script>

<div class="img-preview-content">
  <div class="main-content-flex">
    <div class="content-description-flex-child">
      <h1 class="content-title">
        {data.title} <span class="content-year kn-figure">({data.year})</span>
      </h1>
      <div class="project-description">{data.description}</div>
      <dl class="project-meta">
        {#if data.client}
          <dt>CLIENT:</dt>
          <dd>{data.client}</dd>
        {/if}
        {#if data.featured[0] !== ""}
          <dt>FEATURED:</dt>
          <dd>
            {#each data.featured as link_text, i (link_text)}
              <a
                class="kn-link"
                href={data.featured_links[i]}
                target="_blank"
                rel="noopener noreferrer">{link_text}</a
              >{i < data.featured.length - 1 ? ", " : ""}
            {/each}
          </dd>
        {/if}
        {#if data.honors[0] !== ""}
          <dt>HONORS:</dt>
          <dd>
            {#each data.honors as link_text, i (link_text)}
              <a
                class="kn-link"
                href={data.honors_links[i]}
                target="_blank"
                rel="noopener noreferrer">{link_text}</a
              >{i < data.honors.length - 1 ? ", " : ""}
            {/each}
          </dd>
        {/if}
      </dl>
      <div class="mini-image-gallery-flex">
        {#each data.images as image, i (imageFolder + '/' + image)}
          <button
            class="gallery-item"
            aria-current={hoveredImageIndex === i ? "true" : undefined}
            onmouseenter={() => updateHoveredImageIndex(i)}
            onfocus={() => updateHoveredImageIndex(i)}
            onclick={() => updateHoveredImageIndex(i)}
          >
            {#if isGif(image) && !gifVideoFailed[image]}
              <video autoplay loop muted playsinline>
                <source
                  src={gifVideoSrc(image, "webm")}
                  type="video/webm"
                  onerror={() => { gifVideoFailed[image] = true; }}
                />
                <source src={gifVideoSrc(image, "mp4")} type="video/mp4" />
              </video>
            {:else}
              <img src={imgSrc(image)} alt="mini carousel" loading="lazy" />
            {/if}
          </button>
        {/each}
      </div>
      <a
        class="view-project kn-link"
        href={data.content_link}
        target="_blank"
        rel="noopener noreferrer">View project</a
      >
    </div>
    <figure class="image-container-flex-child">
      {#key data.images[hoveredImageIndex]}
      {#if isGif(data.images[hoveredImageIndex]) && !gifVideoFailed[data.images[hoveredImageIndex]]}
        <video class="main-preview-img" autoplay loop muted playsinline>
          <source
            src={gifVideoSrc(data.images[hoveredImageIndex], "webm")}
            type="video/webm"
            onerror={() => { gifVideoFailed[data.images[hoveredImageIndex]] = true; }}
          />
          <source src={gifVideoSrc(data.images[hoveredImageIndex], "mp4")} type="video/mp4" />
        </video>
      {:else}
        <img
          class="main-preview-img"
          src={imgSrc(data.images[hoveredImageIndex])}
          alt={data.image_alts?.[hoveredImageIndex] ?? ""}
          loading="lazy"
        />
      {/if}
      {/key}
      <figcaption class="image-description">
        {data.image_descriptions[hoveredImageIndex]}
      </figcaption>
    </figure>
  </div>
</div>

<style>
  .main-content-flex {
    max-width: var(--page-max);
    margin: 0 auto;
    padding: var(--space-7) var(--space-6) var(--space-8);
    display: grid;
    grid-template-columns: minmax(0, var(--measure)) minmax(0, 1fr);
    gap: var(--space-6);
    align-items: start;
  }

  .content-title {
    margin: 0 0 var(--space-5);
    font-family: var(--font-display);
    font-weight: 400;
    font-size: clamp(38px, 4vw, 52px);
    line-height: 1.08;
    letter-spacing: -0.01em;
    color: var(--ink);
  }

  .content-year {
    font-size: 0.42em;
    vertical-align: 0.3em;
    letter-spacing: 0;
    color: var(--ink-muted);
    white-space: nowrap;
  }

  .project-description {
    margin: 0 0 var(--space-5);
    font-size: 21px;
    line-height: 33px;
  }

  .project-meta {
    margin: 0 0 var(--space-5);
    padding-top: var(--space-3);
    border-top: 1px solid var(--rule);
    display: grid;
    grid-template-columns: max-content 1fr;
    column-gap: var(--space-4);
    row-gap: var(--space-1);
  }

  .project-meta dt {
    font-family: var(--font-display);
    font-size: 12px;
    line-height: 26px;
    letter-spacing: 0.1em;
    color: var(--ink-muted);
  }

  .project-meta dd {
    margin: 0;
    font-size: 16px;
    line-height: 26px;
  }

  .mini-image-gallery-flex {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
    margin: 0 0 var(--space-5);
  }

  .gallery-item {
    padding: 0 0 5px;
    border-bottom: 2px solid transparent;
    cursor: pointer;
  }

  .gallery-item[aria-current="true"] {
    border-bottom-color: var(--ink);
  }

  .gallery-item img,
  .gallery-item video {
    display: block;
    height: 64px;
    width: 88px;
    object-fit: cover;
    outline: 1px solid var(--rule);
    outline-offset: -1px;
  }

  .view-project {
    font-family: var(--font-display);
    font-size: 22px;
    line-height: 30px;
  }

  .image-container-flex-child {
    margin: 0;
    position: sticky;
    top: calc(var(--header-h, 70px) + 150px);
  }

  .main-preview-img {
    display: block;
    width: 100%;
    max-height: 68vh;
    object-fit: contain;
    background: var(--paper-sunk);
    border: 1px solid var(--rule-strong);
  }

  .image-description {
    margin-top: var(--space-2);
    font-size: 15px;
    line-height: 23px;
    font-style: italic;
    color: var(--ink-muted);
  }

  @media (max-width: 1000px) {
    .main-content-flex {
      grid-template-columns: 1fr;
      padding: var(--space-6) var(--space-4) var(--space-7);
    }
    .image-container-flex-child {
      position: static;
      order: -1;
    }
    .main-preview-img {
      max-height: 50vh;
    }
  }
</style>
