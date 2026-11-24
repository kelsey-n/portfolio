<script>
  import Hero from "$lib/components/Hero.svelte";
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

<Hero />

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

  <hr />

  <div class="book-section">
    <img
      src="/images/Book cover - with stars for site.webp"
      alt="Book cover for Creativity through Flexibility"
      class="book-cover"
    />
    <div class="book-details">
      <h2 class="book-title">Creativity through Flexibility</h2>
      <p class="book-description">
        A collection of 30 data visualizations from the #30DayChartChallenge —
        exploring creativity in data storytelling across chart types, themes,
        and design styles.
      </p>
      <div class="book-coming-soon">Purchase link coming soon</div>
    </div>
  </div>

  <hr />

  <div class="page-buttons">
    <a href="/data-viz">
      <span class="button-title"><span class="arrow">→</span> <span class="kn-mark">Data viz</span></span>
      <span class="button-subtitle">Visual storytelling, code & design</span>
    </a>
    <a href="/writing">
      <span class="button-title"><span class="arrow">→</span> <span class="kn-mark">Writing</span></span>
      <span class="button-subtitle">Articles, interviews & talks</span>
    </a>
  </div>

  <hr />

  <div class="contact-info">
    <div>kelsey.nanan@gmail.com</div>
    <a
      class="kn-link"
      href="https://www.linkedin.com/in/knanan"
      target="_blank"
      rel="noopener noreferrer">LinkedIn</a
    >
    <a
      class="kn-link"
      href="https://drive.google.com/file/d/1p3Cg1Y4J5n-0DdJ4XWBzdv4OI_2AoXD7/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer">Resume (typical)</a
    >
    <div class="journey">
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
  .intro-page {
    max-width: var(--page-max);
    margin: 0 auto;
    padding: 0 var(--space-6) var(--space-8);
  }

  hr {
    border: 0;
    border-top: 1px solid var(--rule);
    margin: var(--space-7) 0;
  }

  /* Intro */
  .intro-container {
    display: grid;
    grid-template-columns: 148px minmax(0, 46rem);
    gap: var(--space-6);
    align-items: center;
    padding-top: var(--space-7);
  }

  .intro-container img {
    width: 148px;
    height: 148px;
    border-radius: 50%;
    object-fit: cover;
  }

  .intro-text p {
    margin: 0;
    font-family: var(--font-display);
    font-size: 28px;
    line-height: 38px;
  }

  .intro-text em {
    font-family: var(--font-text);
  }

  /* Book */
  .book-section {
    display: grid;
    grid-template-columns: auto minmax(0, var(--measure));
    gap: var(--space-7);
    align-items: center;
    justify-content: start;
  }

  .book-cover {
    display: block;
    height: 340px;
    width: auto;
    box-shadow: var(--shadow-object);
  }

  .book-title {
    margin: 0 0 var(--space-3);
    font-family: var(--font-display);
    font-weight: 400;
    font-size: 38px;
    line-height: 44px;
  }

  .book-description {
    margin: 0 0 var(--space-5);
    font-size: 18px;
    line-height: 30px;
  }

  .book-coming-soon {
    font-size: 15px;
    line-height: 23px;
    font-style: italic;
    color: var(--ember);
  }

  /* Page links */
  .page-buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-6);
  }

  .page-buttons a {
    display: flex;
    flex-direction: column;
    gap: var(--space-1);
    color: var(--ink);
    text-decoration: none;
  }

  .button-title {
    font-family: var(--font-display);
    font-size: 38px;
    line-height: 44px;
  }

  .arrow {
    color: var(--link);
  }

  .page-buttons a:hover .kn-mark {
    background-size: 100% 0.6em;
  }

  .button-subtitle {
    font-size: 18px;
    line-height: 28px;
    font-style: italic;
    color: var(--ink-muted);
  }

  /* Contact */
  .contact-info {
    display: flex;
    flex-direction: column;
    gap: var(--space-1);
    align-items: center;
    font-size: 18px;
    line-height: 30px;
  }

  .journey {
    margin-top: var(--space-5);
    text-align: left;
  }

  .personal-journey-map-img {
    max-width: 800px;
    width: 100%;
    margin-top: var(--space-2);
  }

  @media (max-width: 1000px) {
    .intro-page {
      padding: 0 var(--space-4) var(--space-7);
    }
    .intro-container,
    .book-section,
    .page-buttons {
      grid-template-columns: 1fr;
    }
    .intro-text p {
      font-size: 24px;
      line-height: 34px;
    }
    .book-cover {
      height: 260px;
    }
    .button-title {
      font-size: 30px;
      line-height: 36px;
    }
  }
</style>
