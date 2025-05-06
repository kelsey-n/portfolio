<script>
  import { tagClassMap } from "../../constants.js";
  let { data, imageFolder } = $props();

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
    {data.title}
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
      <div class="project-description">Network chart coded with D3</div>
      <div class="project-meta">
        <div><strong>FEATURED:</strong> San Francisco Standard</div>
        <div><strong>HONORS:</strong> IIB Awards 2024 Longlist</div>
      </div>
      <div class="image-description">
        current image description - INCLUDE TOOLS HERE IN LIEU OF TAGS
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
      <button class="view-project">View project</button>
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
    height: calc(100vh - 300px);
    gap: 25px;
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
    font-size: 1.05rem;
    font-weight: 500;
    color: #1a1a1a;
    text-decoration: underline;
    transition: all 0.2s ease;
    cursor: pointer;
  }

  .view-project:hover {
    color: #003366;
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
