<script>
  import gsap from "gsap";
  import SplitType from "split-type";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  export let data;
  let articles = data.articles;

  let defaultArticleIndex = Math.floor(Math.random() * articles.length);
  // let defaultQuote = articles.filter(
  //   (d) => d.index === defaultArticleIndex.toString()
  // )[0].quote1;
  let defaultQuote = articles[defaultArticleIndex].quote1;

  let highlightedArticleIndex = defaultArticleIndex;
  let highlightedQuote = defaultQuote;
  let highlightedArticleImage = `/images/writing-page/header-${highlightedArticleIndex}.webp`;

  // Function to update quote
  function updateQuote(article) {
    const randomQuoteIndex = Math.floor(Math.random() * 5) + 1;

    highlightedQuote = article[`quote${randomQuoteIndex}`];
    highlightedArticleIndex = article.index;
    highlightedArticleImage = `/images/writing-page/header-${highlightedArticleIndex}.webp`;

    const hoveredArticle = document.getElementById(`article-${article.index}`);
  }

  onMount(() => {
    updateQuote(articles[defaultArticleIndex]);
  });
</script>

<div class="container-all">
  <div class="lists">
    <h2 class="section-title">Highlighted work</h2>

    <ul class="article-list">
      {#each articles as article}
        {#if article.highlighted === "Y"}
        <li
          class="article-item"
          class:is-current={article.index === highlightedArticleIndex}
          id="article-{article.index}"
          on:mouseenter={() => updateQuote(article)}
          transition:fade
        >
          <a
            href={article.href}
            target="_blank"
            rel="noopener noreferrer"
            on:focus={() => updateQuote(article)}
          >
            <span>
              <span class="article-title"><span class="kn-mark">{article.articleName}</span></span>
              <small class="article-subtitle">{article.publishedIn}</small>
            </span>
            <span class="article-year kn-figure">{article.year}</span>
          </a>
        </li>
        {/if}
      {/each}
    </ul>

    <h2 class="section-title">All work</h2>

    <ul class="article-list">
      {#each articles as article}
        {#if article.highlighted === "N"}
        <li
          class="article-item"
          class:is-current={article.index === highlightedArticleIndex}
          id="article-{article.index}"
          on:mouseenter={() => updateQuote(article)}
          transition:fade
        >
          <a
            href={article.href}
            target="_blank"
            rel="noopener noreferrer"
            on:focus={() => updateQuote(article)}
          >
            <span>
              <span class="article-title"><span class="kn-mark">{article.articleName}</span></span>
              <small class="article-subtitle">{article.publishedIn}</small>
            </span>
            <span class="article-year kn-figure">{article.year}</span>
          </a>
        </li>
        {/if}
      {/each}
    </ul>
  </div>

  <aside class="quote-column">
    {#key highlightedQuote}
      <figure class="quote-container" in:fade={{ duration: 200 }}>
        <img class="quote-spine" src={highlightedArticleImage} alt="" />
        <blockquote class="quote-text" id="highlighted-quote">
          <span class="quote-glyph" aria-hidden="true">“</span>
          <p><span class="quote-text-content">{highlightedQuote}”</span></p>
        </blockquote>
      </figure>
    {/key}
  </aside>
</div>

<style>
  .container-all {
    max-width: var(--page-max);
    margin: 0 auto;
    padding: var(--space-7) var(--space-6) var(--space-8);
    display: grid;
    grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
    gap: var(--space-7);
    align-items: start;
  }

  /* ── the marked-up clipping ── */

  .quote-column {
    position: sticky;
    top: calc(var(--header-h, 70px) + var(--space-6));
  }

  .quote-container {
    margin: 0;
    display: grid;
    grid-template-columns: 88px minmax(0, 1fr);
    gap: var(--space-5);
    min-height: 320px;
  }

  .quote-spine {
    width: 88px;
    height: 100%;
    min-height: 320px;
    object-fit: cover;
    display: block;
  }

  .quote-text {
    position: relative;
    margin: 0;
    padding: var(--space-6) 0 0 0;
    border-top: var(--horizon) solid var(--ink);
  }

  .quote-glyph {
    position: absolute;
    top: 6px;
    left: -6px;
    font-family: var(--font-display);
    font-size: 120px;
    line-height: 1;
    color: var(--sunset-pink);
    pointer-events: none;
  }

  .quote-text p {
    position: relative;
    margin: 0;
    padding-top: var(--space-6);
    font-family: var(--font-text);
    font-style: italic;
    font-size: clamp(26px, 2.6vw, 36px);
    line-height: 1.35;
    color: var(--ink);
  }

  /* each line gets marked, left to right, when a new quote arrives */
  .quote-text-content {
    background: linear-gradient(var(--highlighter), var(--highlighter)) no-repeat 0 90% / 0% 0.55em;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    animation: mark-in 700ms 150ms ease-out forwards;
  }

  @keyframes mark-in {
    to {
      background-size: 100% 0.55em;
    }
  }

  /* ── lists ── */

  .section-title {
    margin: 0 0 var(--space-3);
    font-family: var(--font-display);
    font-weight: 400;
    font-size: 38px;
    line-height: 44px;
  }

  .section-title + .article-list {
    margin-bottom: var(--space-7);
  }

  .article-list {
    list-style: none;
    margin: 0;
    padding: 0;
    border-top: 1px solid var(--rule-strong);
  }

  .article-item {
    border-bottom: 1px solid var(--rule);
  }

  .article-item a {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: var(--space-5);
    align-items: baseline;
    padding: var(--space-3) 0;
    color: inherit;
    text-decoration: none;
  }

  .article-title {
    display: block;
    font-family: var(--font-display);
    font-size: 22px;
    line-height: 30px;
    color: var(--ink);
  }

  .article-item.is-current .kn-mark {
    background-size: 100% 0.6em;
  }

  .article-subtitle {
    display: block;
    margin-top: var(--space-1);
    font-size: 15px;
    line-height: 23px;
    font-style: italic;
    color: var(--ink-muted);
  }

  .article-year {
    font-size: 13px;
    color: var(--ink-muted);
    white-space: nowrap;
  }

  .article-item.is-current .article-year {
    color: var(--ink);
  }

  @media (max-width: 1000px) {
    .container-all {
      grid-template-columns: 1fr;
      gap: var(--space-6);
      padding: var(--space-6) var(--space-4) var(--space-7);
    }
    .quote-column {
      position: static;
      order: -1;
    }
    .quote-container,
    .quote-spine {
      min-height: 200px;
    }
    .quote-container {
      grid-template-columns: 64px minmax(0, 1fr);
    }
    .quote-spine {
      width: 64px;
    }
  }
</style>
