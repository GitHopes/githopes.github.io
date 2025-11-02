import { c as createComponent, m as maybeRenderHead, g as renderSlot, d as renderTemplate, e as createAstro, r as renderComponent, f as addAttribute } from '../../chunks/astro/server_CRB85aQe.mjs';
import { f as formatDate } from '../../chunks/utils_3d8shty0.mjs';
import 'clsx';
import { r as renderEntry, g as getCollection } from '../../chunks/_astro_content_CVpAUSJ8.mjs';
import { $ as $$InfoLayout } from '../../chunks/InfoLayout_DLJTg65z.mjs';
export { renderers } from '../../renderers.mjs';

const $$Prose = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="prose dark:prose-invert prose:space-y-1 prose:text-balance
    prose-h1:text-3xl prose-h1:text-zinc-50 prose-h1:font-semibold
    prose-h2:text-xl prose-h2:text-zinc-100 prose-h2:font-semibold
    prose-p:text-base prose-p:text-zinc-300 prose-p:leading-7
    prose-strong:text-zinc-300
    prose-blockquote:text-zinc-200 prose-blockquote:font-normal
    prose-img:rounded-xl prose-img:w-full prose-img:aspect-square prose-img:object-top prose-img:object-cover"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/maind/Documents/GitHub/githopes.github.io/src/components/prose.astro", void 0);

const $$Astro = createAstro("https://githopes.github.io");
const prerender = true;
async function getStaticPaths() {
  const articles = await getCollection("articles");
  return articles.map((article) => ({
    params: {
      slug: article.data.slug
    },
    props: { article }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { article } = Astro2.props;
  if (article === void 0) {
    return new Response("Article not found", { status: 404 });
  }
  const { Content } = await renderEntry(article);
  const allArticles = await getCollection("articles");
  const relatedArticles = allArticles.filter(
    (relatedArticle) => relatedArticle.data.category === article.data.category && relatedArticle.id !== article.id
  );
  return renderTemplate`${renderComponent($$result, "InfoLayout", $$InfoLayout, { "title": article.data.title, "frontmatter": article.data }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="p-4 sm:pt-8 sm:px-12 pb-20 min-h-dvh"> ${renderComponent($$result2, "Prose", $$Prose, {}, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Content", Content, {})} ` })} <p class="my-4 text-sm italic text-zinc-300">
This is an excerpt from ${`${article.data.author}'s`} <a${addAttribute(article.data.originalLink, "href")} target="_blank" class="underline underline-offset-4 decoration-zinc-100 hover:decoration-white hover:text-white"> ${article.data.title} </a>
article. I highly recommend you give it a read!
</p> ${relatedArticles.length > 0 && renderTemplate`<div> <h2 class="mt-8 sm:mt-12 text-lg text-zinc-400 font-medium">
Related Articles
</h2> <ul class="mt-2.5"> ${relatedArticles.map((article2) => renderTemplate`<li class="group"> <a${addAttribute(`/blog/${article2.data.slug}`, "href")}> <h3 class="text-xl text-zinc-50 group-hover:text-white underline underline-offset-2 decoration-transparent group-hover:decoration-zinc-500"> ${article2.data.title} </h3> <p class="mt-0.5 text-sm text-zinc-400"> ${formatDate(article2.data.pubDate)}
&middot; ${article2.data.author} </p> </a> </li>`)} </ul> </div>`} </section> ` })}`;
}, "C:/Users/maind/Documents/GitHub/githopes.github.io/src/pages/blog/[...slug].astro", void 0);

const $$file = "C:/Users/maind/Documents/GitHub/githopes.github.io/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$,
    file: $$file,
    getStaticPaths,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
