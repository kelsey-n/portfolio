<script>
  import { onMount } from "svelte";
  import DataVizContentCard from "./DataViz_ContentCard.svelte";

  let images = [
    {
      src: "/images/PLACEHOLDER.png",
      title: "Image 0",
      content: {
        title: "Streets to Stability, 2024",
        images: [
          "/images/12 Recommendations.jpg",
          "/images/Cycle of homlessness.jpg",
          "/images/Homeless Service providers-mission.jpg",
          "/images/1.Network_diagram-web.gif",
          "/images/landscape-City.jpg",
          "/images/SF Chart.png",
        ],
        tags: ["D3", "Scrollama", "Creative coding", "Website development"],
      },
    },
    {
      src: "/images/PLACEHOLDER.png",
      title: "Image 1",
      content: {
        title: "Content for image 1",
        images: ["/images/PLACEHOLDER.png"],
      },
    },
    {
      src: "/images/PLACEHOLDER.png",
      title: "Image 2",
      content: {
        title: "Content for image 2",
        images: ["/images/PLACEHOLDER.png"],
      },
    },
    {
      src: "/images/PLACEHOLDER.png",
      title: "Image 3",
      content: {
        title: "Content for image 3",
        images: ["/images/PLACEHOLDER.png"],
      },
    },
    {
      src: "/images/PLACEHOLDER.png",
      title: "Image 4",
      content: {
        title: "Content for image 4",
        images: ["/images/PLACEHOLDER.png"],
      },
    },
    {
      src: "/images/PLACEHOLDER.png",
      title: "Image 4",
      content: {
        title: "Content for image 4",
        images: ["/images/PLACEHOLDER.png"],
      },
    },
    {
      src: "/images/PLACEHOLDER.png",
      title: "Image 4",
      content: {
        title: "Content for image 4",
        images: ["/images/PLACEHOLDER.png"],
      },
    },
    {
      src: "/images/PLACEHOLDER.png",
      title: "Image 4",
      content: {
        title: "Content for image 4",
        images: ["/images/PLACEHOLDER.png"],
      },
    },
  ];

  let currentImageIndex = 0;
  const mediaBreakWidth = 9999999;

  // dataset of content for each viz
  // hook up data to viz
  // style content
  // CHANGE TO ONLY BE HORIZONTAL! (if that looks better than the vertical) - prob easier to only do logic for horizontal - also like the focus on the timeline at the top of the page
  // image transition (layer all images and transition opacity?)

  /* 
  TIMELINE LOGIC:
  get INITIAL bounding box dimensions for work labels that exist.
  from those initial dims, get the distances between each label and its next label.
  start off with 0 translate for first label
  translate all OTHER labels with the .items transform
  when second label overlaps with first, translate first label (currentTranslate+initialDistBetween)
  if the x position of second label overlaps with the x+width position of the first label, start translating the first label
  once the current translate is distance between label1 and label2 + width of label1, stop translating label2
  repeat
  figure out opposite direction (add in logic for translating the old active element when going in opp direction )
  Turn everything in the workLabels translation into a function - ensure this still works
  figure out how to prevent spans going beyond the first element's initial position when user scrolls hard (also happens for click) - quick solution may just be padding
  Try out the function for year sublabels
  TODO:
  Figure out how to prevent spans overshooting when scrolling in opposite direction
  slight tweak: figure out translate for active label when transition to a new active label doesn't fully happen (both directions)
  SLIGHT BUG: jump for year label translate in opposite direction; and weird jumping behavior and 2023 not scrolling properly... TRY removing stickytranslate for work labels, see if year works. THEN removing work labels entirely, see if year works. May have to do with calling function more than once? 
  Try borders for year sublabels
  ^ Proving a bit tricky. TRY FOR A BIT: changing all titles to be smaller than the indicator width.
  Change back logic to initial one that doesn't require word overlap, but looks at indicator overlap? or dims of space?
  See if this makes easier the borders for the year timeline, as well as capping translate in opp direction? (may not do latter)
  Opacity changes for active labels

  CONNECT TO A DATASET, SEE HOW EVERYTHING ACTUALLY LOOKS
  then just need to figure out sizing for timeline & content below (latter esp on mobile)
  Debounce func: https://davidwalsh.name/javascript-debounce-function
  */

  onMount(() => {
    const container = document.querySelector(".minimap-container");
    const items = document.querySelector(".items");
    // const workLabelSpacingElements = document.querySelectorAll(
    //   ".minimap-labels .minimap-label-space"
    // );
    const workLabelElements = document.querySelectorAll(".minimap-label.work");
    const yearLabelElements = document.querySelectorAll(".minimap-label.year");
    const workLabelTextSpans = document.querySelectorAll(
      ".minimap-label.work span"
    ); // using spans lets us calculate the dims of text that overflows the div
    const yearLabelTextSpans = document.querySelectorAll(
      ".minimap-label.year span"
    ); // using spans lets us calculate the dims of text that overflows the div
    let activeLabelIndices = {
      work: 0,
      year: 0,
    };
    const indicator = document.querySelector(".indicator");
    const itemElements = document.querySelectorAll(".item");
    const previewImage = document.querySelector(".img-preview-content");
    const itemImages = document.querySelectorAll(".item img");

    let isHorizontal = window.innerWidth <= mediaBreakWidth;
    let dimensions = {
      itemSize: 0,
      containerSize: 0,
      indicatorSize: 0,
    };

    let maxTranslate = 0;
    let currentTranslate = 0;
    let targetTranslate = 0;
    let isClickMove = false;
    let test = 0;
    // let currentImageIndex = 0;
    const inactiveItemOpacity = 0.3;
    const activeItemOpacity = 1;
    const inactiveItemScale = 1;
    const activeItemScale = 1.1;

    function lerp(start, end, factor) {
      return start + (end - start) * factor;
    }

    function updateDimensions() {
      isHorizontal = window.innerWidth <= mediaBreakWidth;
      if (isHorizontal) {
        dimensions = {
          itemSize: itemElements[0].getBoundingClientRect().width,
          containerSize: items.scrollWidth,
          indicatorSize: indicator.getBoundingClientRect().width,
        };
      } else {
        dimensions = {
          itemSize: itemElements[0].getBoundingClientRect().height,
          containerSize: items.getBoundingClientRect().height,
          indicatorSize: indicator.getBoundingClientRect().height,
        };
      }
      return dimensions;
    }

    dimensions = updateDimensions();
    maxTranslate = dimensions.containerSize - dimensions.indicatorSize;

    function getItemInIndicator() {
      itemImages.forEach((img) => {
        img.style.opacity = inactiveItemOpacity;
        img.style.scale = inactiveItemScale;
      });
      // itemImages.forEach((img) => img.classList.add('inactive-image'));
      // itemImages.forEach((img) => img.classList.remove('active-image'));

      const indicatorStart = -currentTranslate;
      const indicatorEnd = indicatorStart + dimensions.indicatorSize;

      let maxOverlap = 0;
      let selectedIndex = 0;

      itemElements.forEach((item, index) => {
        const itemStart = index * dimensions.itemSize;
        const itemEnd = itemStart + dimensions.itemSize;

        const overlapStart = Math.max(indicatorStart, itemStart);
        const overlapEnd = Math.min(indicatorEnd, itemEnd);
        const overlap = Math.max(0, overlapEnd - overlapStart);

        if (overlap > maxOverlap) {
          maxOverlap = overlap;
          selectedIndex = index;
        }
      });

      itemImages[selectedIndex].style.opacity = activeItemOpacity;
      itemImages[selectedIndex].style.scale = activeItemScale;
      // itemImages[selectedIndex].classList.remove('inactive-image');
      // itemImages[selectedIndex].classList.add('active-image');
      return selectedIndex;
    }

    function updateSelectedImageContent(index) {
      if (currentImageIndex !== index) {
        // SEE IF THIS ALONE CHANGES CONTENT. IF NOT, UNCOMMENT LAST LINE
        currentImageIndex = index;
        // const targetItem = itemElements[index].querySelector('img')
        // const targetSrc =
        // previewImage.innerHTML = itemElements[index].content
      }
    }

    function getDistanceBetweenElems(dimsArray, leftElemIndex, rightElemIndex) {
      // Using initialDims to get initial distances between label elements
      return dimsArray[rightElemIndex].left - dimsArray[leftElemIndex].right;
    }

    function stickyTranslate(
      initialDims,
      workLabelElements,
      workLabelTextSpans,
      type
    ) {
      // Updating dimensions of all labels
      const currentDims = [...workLabelTextSpans].map((d) =>
        d.getBoundingClientRect()
      );

      // TRANSLATE EACH LABEL except the activeIndex:
      // labels > active index: transform = currentTranslate
      // label = active index: no transform UNLESS left of active index is greater than left of initial dims
      // labels < active index: transform = currentTranslate + initial distance between that label and the next one? (OR need to do distance between LEFT edges of BOTH labels??)
      if (
        activeLabelIndices[type] < currentDims.length - 1 ||
        activeLabelIndices[type] > 0
        // && currentDims[activeLabelIndices[type] + 1].left > initialDims[0].left
      ) {
        workLabelElements.forEach((workLabel, i) => {
          if (
            // i !== activeLabelIndices[type]
            i > activeLabelIndices[type]
            // &&
            // !(currentDims[activeLabelIndices[type] + 1].left <= initialDims[0].left)
          ) {
            // cap the translate so that each label can't translate further than its initial distance from the first label
            workLabel.style.transform = `translateX(${Math.max(Math.min(currentTranslate, 0), -(initialDims[i].left - initialDims[0].left))}px)`;
          } else if (i < activeLabelIndices[type]) {
            // let currentTranslateCapped = Math.max(
            // 	Math.min(currentTranslate, 0),
            // 	initialDims[i].left - initialDims[0].right
            // );
            let currentTranslateCapped = Math.max(
              Math.min(
                currentTranslate +
                  getDistanceBetweenElems(initialDims, i, i + 1),
                0
              ),
              // getDistanceBetweenElems(initialDims, 0, i)
              -(initialDims[0].left - currentDims[i].left)
            );
            workLabel.style.transform = `translateX(${currentTranslate + getDistanceBetweenElems(initialDims, i, i + 1)}px)`;
            // workLabel.style.transform = `translateX(${currentTranslateCapped}px)`;
          }
          // TODO: TWEAK
          // else if (
          // 	i === activeLabelIndices[type] &&
          // 	currentDims[activeLabelIndices[type]].left > initialDims[0].left
          // ) {
          // 	workLabel.style.transform = transform;
          // 	// workLabel.style.transform = `translateX(${currentTranslate + getDistanceBetweenElems(initialDims, activeLabelIndices[type] - 1, activeLabelIndices[type])}px)`;
          // }
        });
      }

      // CHANGE ACTIVE LABEL
      // determine active index based on overlap of the current active index and an index BEFORE it
      if (activeLabelIndices[type] < currentDims.length - 1) {
        if (
          currentDims[activeLabelIndices[type] + 1].left <= initialDims[0].left
        ) {
          console.log("inc ac ind");
          activeLabelIndices[type] += 1;
        }
      }
      // determine active index based on overlap of the current active index and an index AFTER it
      if (activeLabelIndices[type] > 0) {
        if (
          currentDims[activeLabelIndices[type] - 1].left >= initialDims[0].left
        ) {
          console.log("dec ac ind");
          activeLabelIndices[type] -= 1;
        }
      }

      // TRANSLATE ACTIVE LABEL WHEN ANOTHER LABEL OVERLAPS WITH IT
      if (activeLabelIndices[type] < currentDims.length - 1) {
        // if (!(currentDims[activeLabelIndices[type]].left < initialDims[0].left)) {
        // If NEXT label overlaps with active label, start translating the active label
        if (
          currentDims[activeLabelIndices[type] + 1].left <=
          currentDims[activeLabelIndices[type]].right
        ) {
          // THIS DOESN'T FULLY WORK - need to make the max translate be dependent on current pos???
          // not sure, investigate further.
          workLabelElements[activeLabelIndices[type]].style.transform =
            `translateX(${currentTranslate + getDistanceBetweenElems(initialDims, activeLabelIndices[type], activeLabelIndices[type] + 1)}px)`;
        }
        // }
      }
      if (activeLabelIndices[type] > 0) {
        // If PREVIOUS label overlaps with active label, start translating the active label
        if (
          currentDims[activeLabelIndices[type] - 1].right >
          currentDims[activeLabelIndices[type]].left
        ) {
          workLabelElements[activeLabelIndices[type]].style.transform =
            `translateX(${currentTranslate}px)`;
        }
      }
    }

    const initialDimsWork = [...workLabelTextSpans].map((d) =>
      d.getBoundingClientRect()
    );
    const initialDimsYear = [...yearLabelTextSpans].map((d) =>
      d.getBoundingClientRect()
    );

    function animate() {
      const lerpFactor = isClickMove ? 0.05 : 0.075;
      // const lerpFactor = isClickMove ? 0.01 : 0.05;
      currentTranslate = lerp(currentTranslate, targetTranslate, lerpFactor);

      if (Math.abs(currentTranslate - targetTranslate) > 0.01) {
        const transform = isHorizontal
          ? `translateX(${currentTranslate}px)`
          : `translateY(${currentTranslate}px)`;
        items.style.transform = transform;

        stickyTranslate(
          initialDimsWork,
          workLabelElements,
          workLabelTextSpans,
          "work"
        );
        stickyTranslate(
          initialDimsYear,
          yearLabelElements,
          yearLabelTextSpans,
          "year"
        );

        const activeIndex = getItemInIndicator();
        updateSelectedImageContent(activeIndex);
      } else {
        isClickMove = false;
      }

      requestAnimationFrame(animate);
    }

    container.addEventListener(
      "wheel",
      (e) => {
        e.preventDefault();
        isClickMove = false;

        let delta;
        delta = e.deltaY;

        const scrollVelocity = Math.min(Math.max(delta * 0.5, -20), 20);

        targetTranslate = Math.min(
          Math.max(targetTranslate - scrollVelocity, -maxTranslate),
          0
        );
      },
      { passive: false }
    );

    let touchStartY = 0;
    container.addEventListener("touchstart", (e) => {
      if (isHorizontal) {
        touchStartY = e.touches[0].clientY;
      }
    });

    container.addEventListener(
      "touchmove",
      (e) => {
        if (isHorizontal) {
          const touchY = e.touches[0].clientY;
          const deltaY = (touchStartY = touchY);

          const delta = deltaY;
          const scrollVelocity = Math.min(Math.max(delta * 0.5, -20), 20);

          targetTranslate = Math.min(
            Math.max(targetTranslate - scrollVelocity, -maxTranslate),
            0
          );

          touchStartY = touchY;
          e.preventDefault();
        }
      },
      { passive: false }
    );

    itemElements.forEach((item, index) => {
      item.addEventListener("click", () => {
        isClickMove = true;
        targetTranslate =
          -index * dimensions.itemSize +
          (dimensions.indicatorSize - dimensions.itemSize) / 2;
        targetTranslate = Math.max(Math.min(targetTranslate, 0), -maxTranslate);
      });
    });

    window.addEventListener("resize", () => {
      dimensions = updateDimensions();
      const newMaxTranslate = (dimensions.containerSize =
        dimensions.indicatorSize);

      targetTranslate = Math.min(
        Math.max(targetTranslate, -newMaxTranslate),
        0
      );
      currentTranslate = targetTranslate;

      const transform = isHorizontal
        ? `translateX(${currentTranslate}px)`
        : `translateY(${currentTranslate}px)`;

      items.style.transform = transform;
      // workLabelSpacingElements.forEach((workLabel) => (workLabel.style.transform = transform));
    });
    itemImages.forEach((img) => {
      img.style.opacity = inactiveItemOpacity;
      img.style.scale = inactiveItemScale;
    });
    itemImages[0].style.opacity = activeItemOpacity;
    itemImages[0].style.scale = activeItemScale;
    // itemImages[0].classList.remove('inactive-image');
    // itemImages[0].classList.add('active-image');
    updateSelectedImageContent(0);
    animate();
  });
</script>

<div class="minimap-container">
  <div class="img-preview">
    <DataVizContentCard data={images[currentImageIndex]} />
  </div>
  <!-- Horizontal Scrolling Gallery -->
  <div class="minimap">
    <div class="indicator">
      <!-- <div class="indicator-left-border"></div> -->
    </div>
    <div class="minimap-labels">
      {#each images as image, i}
        <div class="minimap-label-space">
          {#if i === 0}<div class="minimap-label work">
              <span>HIGHLIGHTED long label WORK</span>
            </div>{/if}
          {#if i === 3}<div class="minimap-label work">
              <span>ALL WORK</span>
            </div>{/if}
          {#if i === 4}<div class="minimap-label work">
              <span>TEST</span>
            </div>{/if}
          {#if i === 5}<div class="minimap-label work">
              <span>another test</span>
            </div>{/if}
        </div>
      {/each}
    </div>
    <div class="items">
      {#each images as image, i}
        <!-- {#if i === 0 || i === 3}<div class="vertical-separator"></div>{/if} -->
        <div class="item">
          <img src={image.src} alt={image.title} />
          <!-- <p class="year">2020</p> -->
        </div>
      {/each}
    </div>
    <div class="minimap-labels">
      {#each images as image, i}
        <div class="minimap-label-space year">
          {#if i === 0}<div class="minimap-label year">
              <span>test</span>
            </div>{/if}
          {#if i === 3}<div class="minimap-label year">
              <span>2024</span>
            </div>{/if}
          {#if i === 5}<div class="minimap-label year">
              <span>2023</span>
            </div>{/if}
          {#if i === 6}<div class="minimap-label year">
              <span>2022</span>
            </div>{/if}
        </div>
      {/each}
    </div>
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

  .item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    transition:
      opacity 0.2s,
      scale 0.2s;
    user-select: none;
  }

  .minimap-container {
    position: relative;
    width: 100vw;
    height: calc(100vh - 60px);
    overflow: hidden;
  }

  .img-preview {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    height: 75%;
    overflow: hidden;
  }

  /* MAY NEED TO ADJUST THIS BASED ON CONTENT WE ADD  */
  /* .img-preview-content {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		height: 100%;
		object-fit: contain;
	} */

  .minimap {
    position: absolute;
    top: 20%;
    right: 8em;
    width: var(--minimap-big-value);
    /* overflow: hidden; */
  }

  .indicator {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: var(--minimap-small-value);
    border: 1px solid red;
    /* border-left: 2px solid white; */
    z-index: 2;
  }

  .indicator-left-border {
    border-left: 2px solid white;
    height: var(--minimap-small-value);
  }

  .items {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    will-change: transform;
  }

  .item {
    width: 100%;
    height: var(--minimap-small-value);
    padding: 5px;
    transition:
      opacity 0.2s,
      scale 0.2s;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .item:hover {
    opacity: 0.9;
    scale: 1.05;
  }

  .minimap-labels {
    position: relative;
    width: 100%;
    /* height: 10px; */
    display: flex;
    flex-direction: row;
    gap: 0px;
    will-change: transform;
    /* overflow: visible; */
    white-space: nowrap;
  }

  .minimap-label-space {
    width: var(--minimap-small-value);
    /* width: 100%; */
    /* height: 10px; */
    /* padding: 5px; */
    transition:
      opacity 0.2s,
      scale 0.2s;
    cursor: pointer;
    /* display: flex;
		flex-direction: column;
		align-items: center; */
  }

  .minimap-label.year {
    /* position: absolute; */
    /* left: 40px; */
    border-left: 1px solid white;
    /* border-bottom: 1px solid white; */
  }

  .vertical-separator {
    border-left: 2px solid white;
    height: var(--minimap-small-value) + 300px;
    opacity: 0.3;
  }

  @media (max-width: 1680px) {
    /* body {
			overflow: hidden;
			touch-action: none;
		} */
    .minimap-container {
      touch-action: none;
    }
    .minimap {
      /* top: auto; */
      top: 0;
      right: auto;
      bottom: 5em;
      left: 20%;
      width: auto;
      height: var(--minimap-big-value);
      touch-action: none;
    }
    .indicator {
      top: 0;
      left: 0;
      width: var(--minimap-small-value);
      height: 100%;
    }
    .items {
      flex-direction: row;
      width: max-content;
      height: 100%;
      touch-action: none;
    }
    .item {
      width: var(--minimap-small-value);
      height: 100%;
      padding: 5px;
    }
    .img-preview {
      width: 90%;
      height: calc(100% - var(--minimap-big-value) - 5%);
      top: calc(var(--minimap-big-value) + 2.5%);
      left: 5%;
      transform: unset;
    }
  }
</style>
