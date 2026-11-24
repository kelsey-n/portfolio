<!--
  Home hero, from the design system's cover: the name, plus the palette as blocks
  and the book cover's sunburst clipped inside an ink slab.
-->
<section class="hero" aria-label="Kelsey Nanan">
  <h1 class="hero__name">Kelsey<br />Nanan</h1>
  <svg class="hero__art" viewBox="0 0 384 288" preserveAspectRatio="xMaxYMid slice" aria-hidden="true">
    <defs>
      <clipPath id="hero-slab"><rect x="0" y="0" width="224" height="288" /></clipPath>
    </defs>
    <rect class="slab" x="0" y="0" width="224" height="288" />
    <g clip-path="url(#hero-slab)">
      <circle class="sun" cx="0" cy="236" r="40" />
      <line class="ray pink" x1="3.9" y1="180.1" x2="20.9" y2="-63.3" />
      <line class="ray orange" x1="10.8" y1="181.0" x2="57.7" y2="-58.4" />
      <line class="ray yellow" x1="17.5" y1="182.8" x2="93.6" y2="-49.0" />
      <line class="ray pink" x1="23.9" y1="185.4" x2="128.1" y2="-35.3" />
      <line class="ray orange" x1="30.0" y1="188.7" x2="160.6" y2="-17.4" />
      <line class="ray yellow" x1="35.6" y1="192.8" x2="190.6" y2="4.4" />
      <line class="ray pink" x1="40.7" y1="197.5" x2="217.8" y2="29.7" />
      <line class="ray orange" x1="45.1" y1="202.8" x2="241.6" y2="58.1" />
      <line class="ray yellow" x1="48.8" y1="208.6" x2="261.7" y2="89.3" />
      <line class="ray pink" x1="51.9" y1="214.9" x2="277.8" y2="122.7" />
      <line class="ray orange" x1="54.1" y1="221.4" x2="289.7" y2="157.9" />
      <line class="ray yellow" x1="55.5" y1="228.2" x2="297.1" y2="194.2" />
    </g>
    <rect class="pink" x="224" y="0" width="160" height="112" />
    <rect class="orange" x="224" y="112" width="96" height="64" />
    <rect class="yellow" x="320" y="112" width="64" height="64" />
    <rect class="sunk" x="224" y="176" width="160" height="112" />
  </svg>
</section>

<style>
  .hero {
    position: relative;
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    align-items: end;
    min-height: clamp(260px, 30vw, 380px);
    max-width: var(--page-max);
    margin: 0 auto;
    padding: 0 0 0 var(--space-6);
    overflow: hidden;
  }

  .hero__name {
    margin: 0 0 var(--space-6);
    font-family: var(--font-display);
    font-weight: 400;
    font-size: clamp(64px, 9vw, 120px);
    line-height: 0.93;
    color: var(--ink);
  }

  .hero__art {
    align-self: stretch;
    width: 100%;
    height: 100%;
    min-height: inherit;
  }

  .slab { fill: var(--ink); }
  .pink { fill: var(--sunset-pink); stroke: var(--sunset-pink); }
  .orange { fill: var(--sunset-orange); stroke: var(--sunset-orange); }
  .yellow { fill: var(--sunset-yellow); stroke: var(--sunset-yellow); }
  .sunk { fill: var(--paper-sunk); }
  .sun { fill: var(--sunset-yellow); }
  .ray { stroke-width: 3px; fill: none; }
  :global([data-theme="cover"]) .sun { fill: var(--sunset-orange); }
  :global([data-theme="cover"]) .ray.yellow { stroke: var(--sunset-orange); }

  /* Narrow: the blocks become a band across the top, the name below */
  @media (max-width: 760px) {
    .hero {
      grid-template-columns: 1fr;
      padding: 0;
      min-height: 0;
    }
    .hero__art {
      order: -1;
      height: 120px;
      min-height: 0;
    }
    .hero__name {
      margin: var(--space-5) var(--space-4) var(--space-4);
    }
  }
</style>
