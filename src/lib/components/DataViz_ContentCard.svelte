<script>
  import { tagClassMap } from "../../constants.js";
  let { data, imageFolder } = $props();

  console.log(data);

  let hoveredImageIndex = $state(0);

  // $effect: currentImage = data.images[hoveredImageIndex] ?? data.images[0]

  // const currentImage = $derived(
  //   () => data.images?.[hoveredImageIndex] ?? data.images?.[0]
  // );

  $effect(() => {
    if (hoveredImageIndex >= data.images?.length) {
      hoveredImageIndex = 0;
    }
  });

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
    {data.title} ({data.year})
  </div>
  <div class="main-content-flex">
    <div
      class="image-container-flex-child"
      style="background-image: url('/images/data-viz-page/{imageFolder}/{data
        .images[hoveredImageIndex]}')"
    ></div>
    <div class="content-description-flex-child">
      <div class="flex flex-wrap gap-2.5">
        <!-- {#each data.tags as tag}
          <div class="tag-card {tagClassMap[tag]}">{tag}</div>
        {/each} -->
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
        {#each data.images as image, i}
          <img
            src="/images/data-viz-page/{imageFolder}/{image}"
            alt="mini carousel"
            onmouseenter={() => updateHoveredImageIndex(i)}
            class:active={hoveredImageIndex === i}
          />
        {/each}
      </div>
      <a
        class="view-project"
        href={data.content_link}
        target="_blank"
        rel="noopener noreferrer"
        >View project
      </a>

      <div class="image-description">
        {data.image_descriptions[hoveredImageIndex]}
      </div>
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
    margin: 0 8em;
    /* align-items: flex-start; */
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

  .mini-image-gallery-flex img {
    height: 10vh;
    min-height: 70px;
    border-radius: 3px;
    cursor: pointer;
    transition: opacity 0.2s ease;
  }

  .mini-image-gallery-flex img.active {
    opacity: 0.5;
    border: 1px solid black;
    /* box-shadow: inset 5px #f00; */
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
    transition: all 0.3s ease;
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
      flex-direction: column-reverse;
      height: 100vh;
      gap: 5px;
      padding: 0 20px;
    }
    .content-description-flex-child {
      flex: unset;
    }
    .image-container-flex-child {
      width: 100%;
    }
  }
</style>
