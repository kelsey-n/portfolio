import { e as ensure_array_like, f as stringify, g as bind_props, c as pop, p as push } from "../../../chunks/index2.js";
import "split-type";
import { e as escape_html } from "../../../chunks/escaping.js";
import { a as attr } from "../../../chunks/attributes.js";
function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  let articles = data.articles;
  let defaultArticleIndex = Math.floor(Math.random() * articles.length) + 1;
  let defaultQuote = articles.filter((d) => d.index === defaultArticleIndex.toString())[0].quote1;
  let highlightedQuote = defaultQuote;
  const each_array = ensure_array_like(articles);
  const each_array_1 = ensure_array_like(articles);
  $$payload.out += `<div class="p-6 text-gray-200 svelte-1k76gyh"><!---->`;
  {
    $$payload.out += `<div class="quote-container relative mx-auto h-24 w-full overflow-hidden md:w-1/2 svelte-1k76gyh" style="background-image: url('/images/writing-page/image 57 (1).png')"><p class="gradient-text quote-container line-clamp-3 w-full overflow-hidden text-xl text-ellipsis italic svelte-1k76gyh" id="highlighted-quote"><svg class="quote-icon svelte-1k76gyh" xmlns="http://www.w3.org/2000/svg" width="30" height="27" viewBox="0 0 30 27" fill="none"><path fill="white" d="M28.6 0.499994L30 2.4C27.9333 3.93333 26.3333 5.76667 25.2 7.9C24.0667 9.96666 23.5 12.2333 23.5 14.7H23.7C25.3 14.7 26.6333 15.2667 27.7 16.4C28.8333 17.4667 29.4 18.8 29.4 20.4C29.4 21.9333 28.8333 23.3 27.7 24.5C26.6333 25.6333 25.3 26.2 23.7 26.2C22.0333 26.2 20.6667 25.6667 19.6 24.6C18.6 23.4667 18 22 17.8 20.2C17.6667 18.2 17.9 15.9667 18.5 13.5C19.1667 11.0333 20.3 8.63333 21.9 6.3C23.5667 3.96666 25.8 2.03333 28.6 0.499994ZM11.4 0.499994L12.8 2.4C10.7333 3.93333 9.13333 5.76667 8 7.9C6.86667 9.96666 6.3 12.2333 6.3 14.7H6.5C8.1 14.7 9.43333 15.2667 10.5 16.4C11.6333 17.4667 12.2 18.8 12.2 20.4C12.2 21.9333 11.6333 23.3 10.5 24.5C9.43333 25.6333 8.1 26.2 6.5 26.2C4.83333 26.2 3.46667 25.6667 2.4 24.6C1.4 23.4667 0.8 22 0.6 20.2C0.466667 18.2 0.7 15.9667 1.3 13.5C1.96667 11.0333 3.1 8.63333 4.7 6.3C6.36667 3.96666 8.6 2.03333 11.4 0.499994Z" class="svelte-1k76gyh"></path></svg> <span class="pl-[2rem] svelte-1k76gyh">${escape_html(highlightedQuote)}</span></p></div>`;
  }
  $$payload.out += `<!----> <h2 class="border-b border-gray-600 pb-2 text-2xl font-bold svelte-1k76gyh">Highlighted work</h2> <ul class="mt-4 svelte-1k76gyh"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let article = each_array[$$index];
    if (article.highlighted === "Y") {
      $$payload.out += "<!--[-->";
      $$payload.out += `<li role="listitem" class="hovered-gradient mb-4 flex cursor-pointer items-center justify-between text-gray-400 svelte-1k76gyh"${attr("id", `article-${stringify(article.index)}`)}><span class="svelte-1k76gyh"><a href="#" class="text-lg font-semibold svelte-1k76gyh">${escape_html(article.articleName)}</a> <small class="block svelte-1k76gyh">${escape_html(article.publishedIn)}</small></span> <span class="svelte-1k76gyh">${escape_html(article.year)}</span></li>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></ul> <h2 class="border-b border-gray-600 pb-2 text-2xl font-bold svelte-1k76gyh">All work</h2> <ul class="mt-4 svelte-1k76gyh"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let article = each_array_1[$$index_1];
    if (article.highlighted === "N") {
      $$payload.out += "<!--[-->";
      $$payload.out += `<li role="listitem" class="hover-container mb-4 flex cursor-pointer items-center justify-between transition-all duration-300 svelte-1k76gyh"><span class="svelte-1k76gyh"><a href="#" class="text-lg font-semibold text-gray-400 hover:underline svelte-1k76gyh">${escape_html(article.articleName)}</a> <small class="block text-gray-400 svelte-1k76gyh">${escape_html(article.publishedIn)}</small></span> <span class="text-gray-400 svelte-1k76gyh">${escape_html(article.year)}</span></li>`;
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
