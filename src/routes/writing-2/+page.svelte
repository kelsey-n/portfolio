<script>
  import gsap from "gsap";
  import SplitType from "split-type";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  export let data;
  let articles = data.articles;

  let defaultArticleIndex = Math.floor(Math.random() * articles.length) + 1;
  let defaultQuote = articles.filter(
    (d) => d.index === defaultArticleIndex.toString()
  )[0].quote1;

  let highlightedArticleIndex = defaultArticleIndex;
  let highlightedQuote = defaultQuote;
  let highlightedArticleImage = `/images/writing-page/header-${highlightedArticleIndex}.png`;

  // Function to update quote
  function updateQuote(article) {
    const randomQuoteIndex = Math.floor(Math.random() * 5) + 1;

    highlightedQuote = article[`quote${randomQuoteIndex}`];
    highlightedArticleIndex = article.index;
    highlightedArticleImage = `/images/writing-page/header-${highlightedArticleIndex}.png`;

    console.log(highlightedArticleIndex);

    const hoveredArticle = document.getElementById(`article-${article.index}`);
  }

  onMount(() => {
    updateQuote(articles[defaultArticleIndex]);
  });
</script>

<div class="container-all">
  {#key highlightedQuote}
    <div
      class="quote-container"
      style="background-image: url('{highlightedArticleImage}')"
    >
      <p class="quote-text" id="highlighted-quote" in:fade>
        <!-- <svg
          class="quote-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="27"
          viewBox="0 0 30 27"
          fill="none"
        >
          <path
            fill="white"
            d="M28.6 0.499994L30 2.4C27.9333 3.93333 26.3333 5.76667 25.2 7.9C24.0667 9.96666 23.5 12.2333 23.5 14.7H23.7C25.3 14.7 26.6333 15.2667 27.7 16.4C28.8333 17.4667 29.4 18.8 29.4 20.4C29.4 21.9333 28.8333 23.3 27.7 24.5C26.6333 25.6333 25.3 26.2 23.7 26.2C22.0333 26.2 20.6667 25.6667 19.6 24.6C18.6 23.4667 18 22 17.8 20.2C17.6667 18.2 17.9 15.9667 18.5 13.5C19.1667 11.0333 20.3 8.63333 21.9 6.3C23.5667 3.96666 25.8 2.03333 28.6 0.499994ZM11.4 0.499994L12.8 2.4C10.7333 3.93333 9.13333 5.76667 8 7.9C6.86667 9.96666 6.3 12.2333 6.3 14.7H6.5C8.1 14.7 9.43333 15.2667 10.5 16.4C11.6333 17.4667 12.2 18.8 12.2 20.4C12.2 21.9333 11.6333 23.3 10.5 24.5C9.43333 25.6333 8.1 26.2 6.5 26.2C4.83333 26.2 3.46667 25.6667 2.4 24.6C1.4 23.4667 0.8 22 0.6 20.2C0.466667 18.2 0.7 15.9667 1.3 13.5C1.96667 11.0333 3.1 8.63333 4.7 6.3C6.36667 3.96666 8.6 2.03333 11.4 0.499994Z"
          />
        </svg> -->
        <span class="quote-text-content">“{highlightedQuote}”</span>
      </p>
    </div>
  {/key}

  <h2 class="section-title">Highlighted work</h2>

  <ul class="article-list">
    {#each articles as article}
      {#if article.highlighted === "Y"}
        <li
          role="listitem"
          class="highlighted-article article-item"
          class:article-item-hovered={article.index === highlightedArticleIndex}
          id="article-{article.index}"
          on:mouseenter={() => updateQuote(article)}
          transition:fade
        >
          <span>
            <a href="#" class="article-title">{article.articleName}</a>
            <small class="article-subtitle">{article.publishedIn}</small>
          </span>
          <span class="article-year">{article.year}</span>
        </li>
      {/if}
    {/each}
  </ul>

  <h2 class="section-title">All work</h2>

  <ul class="article-list">
    {#each articles as article}
      {#if article.highlighted === "N"}
        <li
          role="listitem"
          class="all-work-article article-item"
          class:article-item-hovered={article.index === highlightedArticleIndex}
          on:mouseenter={() => updateQuote(article)}
        >
          <span>
            <a href="#" class="article-title">{article.articleName}</a>
            <small class="article-subtitle">{article.publishedIn}</small>
          </span>
          <span class="article-year">{article.year}</span>
        </li>
      {/if}
    {/each}
  </ul>
</div>

<style>
  .container-all {
    padding: 1.5rem;
    color: #414141;
  }

  .quote-container {
    /* position: relative; */
    position: sticky;
    top: 5px;
    margin-left: auto;
    margin-right: auto;
    /* height: 6rem; */
    height: 150px;
    width: 100%;
    overflow: hidden;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    opacity: 0.8;
    border-radius: 5px;
    box-shadow: 0 4px 4.5px rgba(0, 0, 0, 0.3);
  }

  @media (min-width: 768px) {
    .quote-container {
      width: 50%;
    }
  }

  .quote-text {
    width: 100%;
    overflow: hidden;
    color: black;
    /* font-family: "Courier New", Courier, monospace; */
    font-family: Arial, Helvetica, sans-serif;
    font-size: 25px;
    font-style: italic;
    font-weight: 900;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    padding: 0.3rem;
    text-align: center;
  }

  .quote-text-content {
    background-color: rgb(255, 255, 255, 1);
  }

  /* .quote-text-content {
    padding-left: 2rem;
  } */

  .section-title {
    border-bottom: 1px solid #4b5563;
    padding-bottom: 0.5rem;
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 2rem;
  }

  .article-list {
    margin-top: 1rem;
    list-style: none;
    padding: 0;
  }

  .article-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    color: #9ca3af; /* text-gray-400 */
    cursor: pointer;
  }

  /* .all-work-article {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
  } */

  .article-item {
    color: #9ca3af;
    transition: color 0.4s ease;
  }

  .article-item-hovered {
    color: black;
  }

  /* .article-item:hover {
    color: black;
  } */

  .article-title {
    font-size: 1.125rem;
    font-weight: 600;
  }

  /* .link {
    color: #9ca3af;
    text-decoration: none;
  }

  .link:hover {
    text-decoration: underline;
  } */

  .article-subtitle {
    display: block;
    font-size: 0.875rem;
  }

  /* Apply the gradient text effect */
  .gradient-text {
    background: var(--color-rainbow-gradient);
    background-clip: text;
    background-size: 300%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    /* transition: 0.5s ease-in-out; */
    /* animation: animate 0.5s ease-in-out; */
    /* position: relative; */
  }

  .quote-icon {
    position: absolute;
  }

  /* .hovered-gradient {
		background: linear-gradient(90deg, #ddd, #aaa);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		transition: background-position 0.5s ease-in-out;
	} */
  .hovered-gradient:hover {
    background: var(--color-rainbow-gradient);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.5s ease-in-out;
  }

  @keyframes animate {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }

  .hover-container {
    position: relative;
    cursor: pointer;
  }
</style>
