import { e as ensure_array_like, d as stringify, f as bind_props, c as pop, p as push } from "../../../chunks/index2.js";
import "split-type";
import { a as attr } from "../../../chunks/attributes.js";
import { e as escape_html } from "../../../chunks/escaping.js";
function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  let articles = data.articles;
  let defaultArticleIndex = Math.floor(Math.random() * articles.length);
  let defaultQuote = articles[defaultArticleIndex].quote1;
  let highlightedArticleIndex = defaultArticleIndex;
  let highlightedQuote = defaultQuote;
  let highlightedArticleImage = `/images/writing-page/header-${highlightedArticleIndex}.png`;
  const each_array = ensure_array_like(articles);
  const each_array_1 = ensure_array_like(articles);
  $$payload.out += `<div class="container-all svelte-107xo0d"><!---->`;
  {
    $$payload.out += `<div class="quote-container svelte-107xo0d"${attr("style", `background-image: url('${stringify(highlightedArticleImage)}')`)}><p class="quote-text svelte-107xo0d" id="highlighted-quote"><span class="quote-text-content svelte-107xo0d">“${escape_html(highlightedQuote)}”</span></p></div>`;
  }
  $$payload.out += `<!----> <h2 class="section-title svelte-107xo0d">Highlighted work</h2> <ul class="article-list svelte-107xo0d"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let article = each_array[$$index];
    if (article.highlighted === "Y") {
      $$payload.out += "<!--[-->";
      $$payload.out += `<li role="listitem"${attr("class", `highlighted-article article-item svelte-107xo0d ${stringify([
        article.index === highlightedArticleIndex ? "article-item-hovered" : ""
      ].filter(Boolean).join(" "))}`)}${attr("id", `article-${stringify(article.index)}`)}><span class="svelte-107xo0d"><a href="#" class="article-title svelte-107xo0d">${escape_html(article.articleName)}</a> <small class="article-subtitle svelte-107xo0d">${escape_html(article.publishedIn)}</small></span> <span class="article-year svelte-107xo0d">${escape_html(article.year)}</span></li>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></ul> <h2 class="section-title svelte-107xo0d">All work</h2> <ul class="article-list svelte-107xo0d"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let article = each_array_1[$$index_1];
    if (article.highlighted === "N") {
      $$payload.out += "<!--[-->";
      $$payload.out += `<li role="listitem"${attr("class", `all-work-article article-item svelte-107xo0d ${stringify([
        article.index === highlightedArticleIndex ? "article-item-hovered" : ""
      ].filter(Boolean).join(" "))}`)}><span class="svelte-107xo0d"><a href="#" class="article-title svelte-107xo0d">${escape_html(article.articleName)}</a> <small class="article-subtitle svelte-107xo0d">${escape_html(article.publishedIn)}</small></span> <span class="article-year svelte-107xo0d">${escape_html(article.year)}</span></li>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></ul></div>`;
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
