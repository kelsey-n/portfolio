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
        {#if image.show === "Y"}
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
        {/if}
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
    --minimap-small-value: 100px;
    --minimap-big-value: 130px;
    /* scroll-behavior: smooth; */
  }

  .minimap {
    /* width: 100vw; */
    width: 100%;
    height: calc(var(--minimap-big-value) + 25px);
    background-color: #f5f5f3;
    /* overflow-x: scroll; REMOVING FOR NOW, TO TRY TO FIX WEIRD SCROLL BAR WHEN IT'S NOT NEEDED*/
    white-space: nowrap;
    overflow-y: hidden;
    box-shadow: 0 4px 4.5px rgba(0, 0, 0, 0.3); /* drop shadow */
    position: sticky;
    z-index: 9999;
    top: 0px;
  }

  .items {
    display: flex;
    flex-direction: row;
    height: 100%;
    /* width: max-content; */
    gap: 0.5rem; /* optional spacing between items */
    transition: all 0.3s ease;
    padding: 0 5px;
  }

  .item {
    transition: all 0.3s ease;
    overflow: hidden;
    border-radius: 10px;
    padding: 0;
  }

  .item img {
    width: 100%;
    /* height: 100%; */
    height: var(--minimap-small-value);
    object-fit: cover;
    transition:
      opacity 0.3s ease,
      transform 0.3s ease,
      height 0.3s ease;
    cursor: pointer;
    border-radius: 10px;
  }

  .item.inactive:hover {
    opacity: 0.9;
    transform: scale(1.15);
  }

  .item.inactive {
    flex: 0 0 var(--minimap-small-value); /* fixed smaller width */
  }

  .item.active {
    flex: 0 0 var(--minimap-big-value); /* wider */
  }

  .item.inactive img {
    opacity: 0.3;
    transform: scale(0.9);
    transition: all 0.3s ease;
  }

  .item.inactive img:hover {
    opacity: 1;
  }

  .item.active img {
    opacity: 0.9;
    transform: scale(1);
    height: var(--minimap-big-value);
    border: 1.5px solid var(--color-pink);
  }

  /* .indicator {
    position: absolute;
    width: var(--minimap-small-value);
    height: var(--minimap-small-value);
    border: 1px solid red;
  } */
</style>
