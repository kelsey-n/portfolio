<!-- The sun and rays from the Creativity through Flexibility cover, as a small mark. -->
<svg class="sunrise" viewBox="0 0 34 18" aria-hidden="true">
  <circle class="sun" cx="17" cy="18" r="6" />
  <line class="ray pink" x1="8.0" y1="18.0" x2="1.0" y2="18.0" />
  <line class="ray orange" x1="8.7" y1="14.6" x2="2.2" y2="11.9" />
  <line class="ray pink" x1="10.6" y1="11.6" x2="5.7" y2="6.7" />
  <line class="ray orange" x1="13.6" y1="9.7" x2="10.9" y2="3.2" />
  <line class="ray pink" x1="17.0" y1="9.0" x2="17.0" y2="2.0" />
  <line class="ray orange" x1="20.4" y1="9.7" x2="23.1" y2="3.2" />
  <line class="ray pink" x1="23.4" y1="11.6" x2="28.3" y2="6.7" />
  <line class="ray orange" x1="25.3" y1="14.6" x2="31.8" y2="11.9" />
  <line class="ray pink" x1="26.0" y1="18.0" x2="33.0" y2="18.0" />
</svg>

<style>
  .sunrise {
    display: block;
    width: 34px;
    height: 18px;
    overflow: visible;
    flex-shrink: 0;
  }
  .sun {
    fill: var(--sunset-yellow);
  }
  .ray {
    stroke-width: 1.5px;
    stroke-linecap: square;
    fill: none;
  }
  .pink {
    stroke: var(--sunset-pink);
  }
  .orange {
    stroke: var(--sunset-orange);
  }
  :global([data-theme="cover"]) .sun {
    fill: var(--sunset-orange);
  }
</style>
