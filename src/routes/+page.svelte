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
    <img src="/images/flower headshot 1.png" />
    <div>
      Hi, I’m Kelsey!<br /><br />
      I’m a data visualization developer and creative storyteller based in New York.<br
      /><br />
      As a technical collaborator, I help communicate insights from data, enabling
      clients to tell their story in a way that will resonate with their audience.
    </div>
  </div>

  <div style="height: 2.5em"></div>
  <hr />
  <div style="height: 2.5em"></div>

  <div class="video-container">
    <div class="video-description">
      How do you tell the right story in the best way?
      <br /> Check out my presentation at Observable's 2024 Insight Conference where
      I go behind the scenes of a few projects to show how the magic happens when
      we collaborate beyond our roles!
    </div>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/gRBVR-PI6pw?si=Zy55Tno87LdW148r"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
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
      rel="noopener noreferrer">Resume</a
    >
  </div>
</div>

<!-- <section class="grid h-screen place-content-center px-[clamp(4rem,12vw,20rem)]">
	<p class="text reveal-type w-full px-4 md:w-1/2">
		Hi, I'm Kelsey! I'm a data visualization developer and creative storyteller based in New York.
		As a technical collaborator, I help communicate insights from data, enabling clients to <span
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
    padding: 2em 6em;
  }

  .intro-container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 5em;
    font-size: 25px;
    align-items: center;
  }

  .intro-container img {
    flex-grow: 4;
  }

  .video-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
  }

  .video-description {
    max-width: 500px;
    font-style: italic;
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
    transition: all 0.3s ease;
  }

  a:hover {
    box-shadow: 0 4px 4.5px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 1000px) {
    .intro-container {
      flex-direction: column-reverse;
      gap: 2em;
    }
    .intro-page {
      padding: 2em;
    }
  }
</style>
