<script>
  import gsap from "gsap";
  import SplitType from "split-type";
  import { onMount } from "svelte";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { text } from "@sveltejs/kit";

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    const splitTypes = document.querySelectorAll(".reveal-type");

    splitTypes.forEach((char, i) => {
      const text = new SplitType(char, { types: "words" });

      // gsap.from(text.words, {
      // 	scrollTrigger: {
      // 		trigger: char,
      // 		start: 'top 40%',
      // 		end: 'top 10%',
      // 		scrub: true,
      // 		markers: true
      // 	},
      // 	scaleY: 0,
      // 	y: -30,
      // 	opacity: 0.2,
      // 	transformOrigin: 'top',
      // 	// duration: 1,
      // 	stagger: 0.1,
      // 	ease: 'power2.out'
      // });
    });

    // gsap.to('.rainbow-word', {
    // 	scrollTrigger: {
    // 		trigger: '.rainbow-word',
    // 		start: 'top 80%',
    // 		end: 'top 20%',
    // 		scrub: true
    // 		// markers: true
    // 	},
    // 	backgroundPosition: '100% 50%', // Moves gradient left to right
    // 	duration: 2,
    // 	ease: 'power2.inOut',
    // 	onUpdate: function () {
    // 		document.querySelector('.rainbow-word').style.webkitTextFillColor = 'transparent'; // Gradually reveal gradient fill
    // 	}
    // });
  });
</script>

<!-- <h1 class="flex justify-center text-2xl">🛠️🚧</h1> -->

<div class="intro-page">
  <div class="intro-container">
    <img src="/images/flower headshot 1.webp" alt="Kelsey Nanan headshot" />
    <div class="intro-text">
      <p>
        I design and code data visualizations that help people see their story
        clearly. My clients have included Anthropic and the Olympic Broadcasting
        Services. I’m also the author of <em>Creativity through Flexibility</em>
        and teach data visualization at the School of Visual Arts.
      </p>
    </div>
  </div>

  <div style="height: 2.5em"></div>
  <hr />
  <div style="height: 2.5em"></div>

  <!-- <div class="video-container">
    <div class="video-description">
      How do you tell the right story in the best way?
      <br /> Check out my presentation at Observable's 2024 Insight Conference where
      I go behind the scenes of a few projects to show how the magic happens when
      we collaborate beyond our roles!
    </div>
    <iframe
      class="responsive-iframe"
      src="https://www.youtube.com/embed/gRBVR-PI6pw?si=Zy55Tno87LdW148r"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  </div> -->

  <div class="book-section">
    <img
      src="/images/Book cover - with stars for site.webp"
      alt="Book cover for Creativity through Flexibility"
      class="book-cover"
    />
    <div class="book-details">
      <div class="book-title">Creativity through Flexibility</div>
      <p class="book-description">
        A collection of 30 data visualizations from the #30DayChartChallenge —
        exploring creativity in data storytelling across chart types, themes,
        and design styles.
      </p>
      <!-- <div class="book-price">$XX.XX</div> -->
      <!-- <a
        href="https://www.blurb.com"
        target="_blank"
        rel="noopener noreferrer"
        class="book-btn">Purchase on Blurb →</a
      > -->
      <div class="book-coming-soon">Purchase link coming soon</div>
    </div>
  </div>

  <div style="height: 2.5em"></div>
  <hr />
  <div style="height: 2.5em"></div>

  <div class="page-buttons">
    <a href="/data-viz" rel="noopener noreferrer">
      <span class="button-title">→ Data viz</span><br />
      <span class="button-subtitle">Visual storytelling, code & design</span>
    </a>
    <a href="/writing" rel="noopener noreferrer">
      <span class="button-title">→ Writing</span><br />
      <span class="button-subtitle">Articles, interviews & talks</span>
    </a>
  </div>

  <div style="height: 2.5em"></div>
  <hr />
  <div style="height: 2.5em"></div>

  <div class="contact-info">
    <div>kelsey.nanan@gmail.com</div>
    <a
      href="https://www.linkedin.com/in/knanan"
      target="_blank"
      rel="noopener noreferrer">LinkedIn</a
    >
    <a
      href="https://drive.google.com/file/d/1p3Cg1Y4J5n-0DdJ4XWBzdv4OI_2AoXD7/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer">Resume (typical)</a
    >
    <div style="height: 20px;"></div>
    <div>
      <div>Resume (not so typical):</div>
      <img
        src="/images/Personal journey map.webp"
        alt="Career experience shown as path through woods"
        class="personal-journey-map-img"
      />
    </div>
  </div>
</div>

<!-- <section class="grid h-screen place-content-center px-[clamp(4rem,12vw,20rem)]">
	<p class="text reveal-type w-full px-4 md:w-1/2">
		Hi, I'm Kelsey! I'm a data visualization developer and creative storyteller based in New York.
		As a technical collaborator, I help communicate insights from data and enable clients to <span
			class="rainbow-word">tell their story in a way that will resonate</span
		> with their audience.
	</p>
</section>

<section class="grid h-screen place-content-center px-[clamp(4rem,12vw,20rem)]">
	<p class="reveal-type w-full px-4 md:w-1/2">technical collaborator</p>
</section>

<section class="grid h-screen place-content-center px-[clamp(4rem,12vw,20rem)]">
	<p class="reveal-type w-full px-4 md:w-1/2">communicate insights</p>
</section>

<section class="grid h-screen place-content-center px-[clamp(4rem,12vw,20rem)]"></section> -->

<style>
  /* .responsive-iframe {
    width: 100%;
    max-width: 800px;
    aspect-ratio: 16 / 9;
    height: auto;
    border: 0;
    display: block;
    margin: 0 auto;
  } */

  .book-section {
    display: flex;
    flex-direction: row;
    gap: 2.5em;
    align-items: center;
    justify-content: center;
  }

  .book-cover {
    max-height: 320px;
    width: auto;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  .book-details {
    display: flex;
    flex-direction: column;
    gap: 0.75em;
    max-width: 420px;
  }

  .book-title {
    font-size: 1.8rem;
    font-weight: 600;
  }

  .book-description {
    font-size: 1.05rem;
    line-height: 1.6;
    font-style: italic;
    margin: 0;
  }

  .book-coming-soon {
    font-size: 1.05rem;
    color: #999;
    font-style: italic;
  }

  .intro-page {
    padding: 1.25em 6em;
  }

  .intro-container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 3em;
    font-size: 20px;
    align-items: center;
  }

  .intro-container img {
    max-height: 160px;
    width: auto;
    flex-shrink: 0;
  }

  /* .video-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
  }

  .video-description {
    max-width: 500px;
    font-style: italic;
  } */

  .intro-text {
    display: flex;
    flex-direction: column;
    gap: 0.55em;
  }

  .intro-text p {
    margin: 0;
  }

  .contact-info {
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    align-items: center;
  }

  a {
    text-decoration: underline;
    color: blue;
  }

  .text {
    color: white;
  }

  .rainbow-word {
    background-image: linear-gradient(
      90deg,
      red,
      orange,
      yellow,
      green,
      blue,
      violet
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: white; /* Start as white */
    display: inline-block;
    background-size: 200% 100%;
    background-position: 0% 50%;
    transition: -webkit-text-fill-color 0.3s ease-in-out; /* Smooth transition */
  }

  a {
    color: #ff8a0c;
    text-decoration: underline;
    padding: 0 5px;
    transition: all 0.3s ease;
  }

  a:hover {
    box-shadow: 0 4px 4.5px rgba(0, 0, 0, 0.3);
  }

  .page-buttons {
    font-size: 28px;
    display: flex;
    gap: 20px;
    justify-content: space-around;
  }

  .button-subtitle {
    font-size: 20px;
  }

  .personal-journey-map-img {
    max-width: 800px;
    width: 100%;
  }

  @media (max-width: 1000px) {
    .intro-container {
      flex-direction: column-reverse;
      gap: 2em;
    }
    .intro-page {
      padding: 20px;
    }
    .book-section {
      flex-direction: column;
      align-items: center;
    }
    .book-cover {
      max-height: 260px;
    }
  }
</style>
