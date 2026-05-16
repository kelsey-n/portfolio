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
      <div class="flex flex-wrap gap-2.5">
        <!-- {#each data.tags as tag}
          <div class="tag-card {tagClassMap[tag]}">{tag}</div>
        {/each} -->
      </div>
      <div class="content-title">
        {data.title} ({data.year})
      </div>
      <div class="project-description">{data.description}</div>
      <div class="project-meta">
        {#if data.client}<div>
            <strong>CLIENT:</strong>
            {data.client}
          </div>{/if}
        {#if data.featured[0] !== ""}<div>
            <strong>FEATURED: </strong>
            {#each data.featured as link_text, i (link_text)}
              <a
                class="inline-a"
                href={data.featured_links[i]}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link_text}
              </a>{i < data.featured.length - 1 ? ", " : ""}
            {/each}
          </div>{/if}
        {#if data.honors[0] !== ""}<div>
            <strong>HONORS:</strong>
            {#each data.honors as link_text, i (link_text)}
              <a
                class="inline-a"
                href={data.honors_links[i]}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link_text}
              </a>{i < data.featured.length - 1 ? ", " : ""}
            {/each}
          </div>{/if}
      </div>
      <div class="mini-image-gallery-flex">
        {#each data.images as image, i (imageFolder + '/' + image)}
          {#if isGif(image) && !gifVideoFailed[image]}
            <video
              autoplay
              loop
              muted
              playsinline
              onmouseenter={() => updateHoveredImageIndex(i)}
              class:active={hoveredImageIndex === i}
            >
              <source
                src={gifVideoSrc(image, "webm")}
                type="video/webm"
                onerror={() => { gifVideoFailed[image] = true; }}
              />
              <source src={gifVideoSrc(image, "mp4")} type="video/mp4" />
            </video>
          {:else}
            <img
              src={imgSrc(image)}
              alt="mini carousel"
              loading="lazy"
              onmouseenter={() => updateHoveredImageIndex(i)}
              class:active={hoveredImageIndex === i}
            />
          {/if}
        {/each}
      </div>
      <button>
        <a
          class="view-project"
          href={data.content_link}
          target="_blank"
          rel="noopener noreferrer"
          >View project
        </a></button
      >

      <div class="image-description">
        {data.image_descriptions[hoveredImageIndex]}
      </div>
    </div>
    <div class="image-container-flex-child">
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
    </div>
  </div>
</div>

<style>
  .content-title {
    font-size: 2rem;
    font-weight: 600;
    display: flex;
    justify-content: center;
    padding-top: 13px;
  }

  .main-content-flex {
    display: flex;
    height: calc(100vh - 140px - 62px - 61px);
    gap: 25px;
    margin: 0 3em;
    /* align-items: flex-start; */
  }

  .image-container-flex-child {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 0;
    transition: all 0.1s ease-in-out;
  }

  .main-preview-img {
    max-width: 100%;
    max-height: 100%;
    display: block;
    border: 2px solid black;
    border-radius: 3px;
  }

  .content-description-flex-child {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
  }

  .mini-image-gallery-flex {
    display: flex;
    justify-content: center;
    column-gap: 10px;
    row-gap: 10px;
    flex-wrap: wrap;
  }

  .mini-image-gallery-flex img,
  .mini-image-gallery-flex video {
    height: 10vh;
    min-height: 70px;
    border-radius: 3px;
    cursor: pointer;
    transition: opacity 0.2s ease;
    border: 1.5px solid rgba(0, 0, 0, 0.25);
    object-fit: cover;
  }

  .mini-image-gallery-flex img.active,
  .mini-image-gallery-flex video.active {
    opacity: 0.5;
    border: 2.5px solid black;
  }

  .project-meta {
    font-size: 0.9rem;
    color: #666;
    margin-top: 0.5rem;
  }

  .project-description {
    margin-top: 1rem;
    font-size: 1.1rem;
    line-height: 1.6;
  }

  .image-description {
    font-style: italic;
  }

  .view-project {
    font-size: 20px;
    font-weight: 500;
    color: #ff8a0c;
  }

  /* .view-project:hover {
    color: #003366;
  } */

  a {
    color: #ff8a0c;
    text-decoration: underline;
    padding: 0 5px;
    transition: all 0.3s ease;
  }

  .inline-a {
    padding: 0;
  }

  a:hover {
    box-shadow: 0 4px 4.5px rgba(0, 0, 0, 0.3);
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

  @media (max-width: 1000px) {
    .main-content-flex {
      flex-direction: column;
      height: 120vh;
      /* height: auto; */
      gap: 5px;
      padding: 0 20px;
      margin: 0 5px;
    }
    .content-title {
      padding-left: 13px;
      padding-right: 13px;
    }
    .content-description-flex-child {
      flex: unset;
    }
    .image-container-flex-child {
      width: 100%;
    }
    .main-preview-img {
      width: 100%;
      max-height: 50vh;
    }
  }
</style>
