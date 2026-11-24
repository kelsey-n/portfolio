<script>
  import { base } from "$app/paths";
  import { onMount, onDestroy } from "svelte";
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import Lenis from "lenis";
  import "../app.css";
  import { page } from "$app/state";
  import SunriseMark from "$lib/components/SunriseMark.svelte";
  import { HEADER_VARIANT } from "$lib/site-config.js";
  let { children } = $props();

  // Header variant: set in site-config.js, or preview with ?header=axis / ?header=sunrise
  let headerVariant = $state(HEADER_VARIANT);
  let headerHeight = $state(0);

  onMount(() => {
    const v = new URLSearchParams(window.location.search).get("header");
    if (v === "axis" || v === "sunrise") headerVariant = v;
  });

  // Expose header height so sticky elements (the project strip) sit under it
  $effect(() => {
    document.documentElement.style.setProperty("--header-h", `${headerHeight}px`);
  });

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

<header class="site-header" bind:offsetHeight={headerHeight}>
  <nav class="site-header__inner">
    <a
      href="/"
      class="wordmark"
      aria-current={page.url.pathname === "/" ? "page" : undefined}
    >
      <SunriseMark />
      <span class="hidden sm:inline">KELSEY NANAN</span>
      <span class="inline sm:hidden">KN</span>
    </a>

    <!-- Navigation Links -->
    <div class="nav-links">
      {#each [{ href: `${base}/data-viz`, label: { full: "Data viz", short: "Dataviz" } }, { href: `${base}/writing`, label: "Writing" }] as { href, label }}
        <a
          {href}
          class="nav-link"
          aria-current={page.url.pathname === href ? "page" : undefined}
        >
          {#if typeof label === "string"}
            {label}
          {:else}
            <span class="hidden sm:inline">{label.full}</span>
            <span class="inline sm:hidden">{label.short}</span>
          {/if}
        </a>
      {/each}
    </div>
  </nav>
  <div class="horizon"></div>
  {#if headerVariant === "axis"}
    <div class="axis"></div>
  {/if}
</header>

{@render children()}

<style>
  .site-header {
    position: sticky;
    top: 0;
    z-index: 10000;
    background: var(--paper);
  }

  .site-header__inner {
    max-width: var(--page-max);
    margin: 0 auto;
    padding: 20px var(--space-6) 16px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: var(--space-5);
  }

  .wordmark {
    display: inline-flex;
    align-items: flex-end;
    gap: 10px;
    font-family: var(--font-display);
    font-size: 18px;
    line-height: 20px;
    letter-spacing: 0.08em;
    color: var(--ink);
    text-decoration: none;
  }

  .nav-links {
    display: flex;
    gap: var(--space-6);
  }

  .nav-link {
    position: relative;
    font-family: var(--font-display);
    font-size: 17px;
    line-height: 24px;
    color: var(--ink);
    text-decoration: none;
    padding-bottom: 6px;
  }

  /* Horizon underline: draws from the left on hover, stays on the current page */
  .nav-link::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: var(--horizon);
    background: var(--sunset);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 220ms ease-out;
  }

  .nav-link:hover::after,
  .nav-link[aria-current="page"]::after {
    transform: scaleX(1);
  }

  .horizon {
    height: var(--horizon);
    background: var(--sunset);
  }

  /* Chart-axis ticks hanging under the horizon */
  .axis {
    height: 5px;
    background: repeating-linear-gradient(90deg, var(--rule-strong) 0 1px, transparent 1px 48px);
    background-position: var(--space-6) 0;
    opacity: 0.55;
  }

  @media (max-width: 640px) {
    .site-header__inner {
      padding: 16px var(--space-4) 12px;
    }
    .nav-links {
      gap: var(--space-5);
    }
    .axis {
      background-position: var(--space-4) 0;
    }
  }
</style>
