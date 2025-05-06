<script>
  import { onMount } from "svelte";
  import DataVizContentCard from "./DataViz_ContentCard.svelte";

  let { data } = $props();

  let currentImageIndex = $state(0);
  const inactiveItemOpacity = 0.3;
  const inactiveItemScale = 0.7;
  const activeItemOpacity = 1;
  const activeItemScale = 1;

  //   function setActiveImage(index) {
  //     const itemImages = document.querySelectorAll(".item img");
  //     if (currentImageIndex !== index) {
  //       itemImages.forEach((img) => {
  //         img.style.opacity = inactiveItemOpacity;
  //         img.style.scale = inactiveItemScale;
  //       });

  //       currentImageIndex = index;

  //       itemImages[index].style.opacity = activeItemOpacity;
  //       itemImages[index].style.scale = activeItemScale;
  //     }
  //   }

  function setActiveImage(index) {
    currentImageIndex = index;
  }
</script>

<div class="minimap-container">
  <!-- Horizontal Scrolling Gallery -->
  <div class="minimap">
    <!-- <div class="indicator"></div> -->
    <div class="items">
      {#each data as image, i}
        <!-- <button class="item" on:click={() => (currentImageIndex = i)}> -->
        <button
          class="item {i === currentImageIndex ? 'active' : 'inactive'}"
          on:click={() => setActiveImage(i)}
        >
          <img
            src="/images/data-viz-page/{image.imageFolder}/carouselImage.png"
            alt={image.mainImageAlt}
          />
        </button>
      {/each}
    </div>
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
    --minimap-small-value: 150px;
    --minimap-big-value: 150px;
    /* scroll-behavior: smooth; */
  }

  .minimap {
    /* width: 100vw; */
    width: 100%;
    height: 150px;
    overflow-x: scroll;
    white-space: nowrap;
  }

  .items {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: max-content;
    /* width: 100%;
    height: 100%; */
  }

  .item {
    width: 150px;
    height: 100%;
    transition: all 0.3s;
  }

  .item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    cursor: pointer;
    transition:
      opacity 0.3s ease,
      transform 0.3s ease;
    /* use transform instead of scale property */
  }

  .item.inactive:hover {
    opacity: 0.9;
    transform: scale(1.05);
  }

  .item.inactive img {
    opacity: 0.3;
    transform: scale(0.7);
    /* margin: 0 -15px; */
  }

  .item.active img {
    opacity: 1;
    transform: scale(1);
  }

  .indicator {
    position: absolute;
    width: 150px;
    height: var(--minimap-small-value);
    border: 1px solid red;
  }
</style>
