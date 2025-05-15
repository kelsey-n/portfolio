<script>
  import { base } from "$app/paths";
  import { onMount, onDestroy } from "svelte";
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import Lenis from "lenis";
  import "../app.css";
  import { page } from "$app/state";
  let { children } = $props();

  // let lenis;

  // onMount(() => {
  //   // Initialize Lenis for smooth scrolling
  //   lenis = new Lenis({
  //     duration: 0.9, // Adjust for smoother/slower scrolling
  //     smooth: true,
  //     lerp: 0.1, // Smoother animation flow
  //   });
  //   // lenis = new Lenis();

  //   // Sync Lenis with requestAnimationFrame
  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }
  //   requestAnimationFrame(raf);

  //   // Register GSAP ScrollTrigger
  //   gsap.registerPlugin(ScrollTrigger);

  //   // Update ScrollTrigger whenever Lenis scrolls
  //   lenis.on("scroll", ScrollTrigger.update);

  //   // TODO: check https://github.com/darkroomengineering/lenis?tab=readme-ov-file#gsap-scrolltrigger
  //   // for more stuff to do to integrate Lenis w/ GSAP

  //   return () => {
  //     // Cleanup when the component unmounts
  //     lenis.destroy();
  //   };
  // });

  // onDestroy(() => {
  //   if (lenis) lenis.destroy();
  // });
</script>

<nav
  class="bg-navigation flex items-center justify-between p-4 bg-white border-b-2 border-b-[var(--color-pink)]"
>
  <!-- Home Link with Flower Emoji -->
  <a
    href="/"
    class="relative px-2.5 text-lg text-black transition-colors duration-300 ease-in-out {page
      .url.pathname === '/'
      ? 'active-link'
      : 'nav-link'}"
  >
    KELSEY NANAN
  </a>

  <!-- Navigation Links -->
  <div class="flex space-x-5">
    {#each [{ href: `${base}/writing-2`, label: "Writing" }, { href: `${base}/data-viz-2`, label: "Data viz" }] as { href, label }}
      <a
        {href}
        class="relative px-1.5 text-lg text-black transition-colors duration-300 ease-in-out
                    {page.url.pathname === href ? 'active-link' : 'nav-link'}"
      >
        {label}
      </a>
    {/each}
  </div>
</nav>

{@render children()}

<style>
  /* Hover Effect: Rainbow Underline */
  .nav-link::after {
    content: "";
    position: absolute;
    left: 0%;
    bottom: -2px;
    width: 100%;
    height: 3px;
    background: var(--color-rainbow-gradient);
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.3s ease-in-out;
  }

  .nav-link:hover::after {
    transform: scaleX(1);
  }

  /* Active Link Effect: Full Rainbow Background */
  .active-link {
    background: var(--color-rainbow-gradient);
    color: #000000;
    font-weight: bold;
    border-radius: 5px;
  }
  .active-link-flower {
    /* background: var(--color-rainbow-gradient);
		-webkit-background-clip: text;
		background-clip: text;
		color: black; */
    background: #000;
    color: #000000;
    font-weight: bold;
    border-radius: 100%;
  }
</style>
