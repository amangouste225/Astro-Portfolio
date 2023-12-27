/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderComponent, s as spreadAttributes, u as unescapeHTML, F as Fragment, j as renderHead, k as renderSlot } from '../astro_Dddrdlqz.mjs';
import 'kleur/colors';
import 'clsx';
import { optimize } from 'svgo';

const $$Astro$b = createAstro();
const $$Button = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Button;
  const { title, active, href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} target="_blank"${addAttribute(`${active ? "text-white bg-black md:inline-block" : "text-black dark:text-white bg-white dark:bg-black"} md:text-md font-semibold text-p px-10 py-2 md:px-10 md:py-3 rounded-full`, "class")}>${title}</a>`;
}, "C:/Users/Amangoua.k/Desktop/Astro/new/src/components/Button.astro", void 0);

const $$Astro$a = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-10 max-w-5xl mx-auto items-center my-10 md:my-[100px]"> <figure class="md:max-w-sm"> <img src="/ange.jpeg" alt="ange" class="ange"> </figure> <div class="justify-start"> <div class="text-white dark:text-black leading-none"> <h2 class="text-2xl lg:text-4xl font-semibold">
a brief
<span class="text-3xl lg:text-5xl font-display">discovery</span>
on me.
</h2> <p class="my-5 text-p lg:text-lg leading-tight  pb-2 lg:pb-10">I believe that the human dimensions essential to start any successful project and that this is where splendid emotional relationships between the company and people are born.
<br><br>
Intuition and strategy integrate the research methodology that we also apply to traditional media.
</p> ${renderComponent($$result, "Button", $$Button, { "title": "Contact me", "href": "mailto" })} </div> </div> </div>`;
}, "C:/Users/Amangoua.k/Desktop/Astro/new/src/components/About.astro", void 0);

const __vite_glob_1_0 = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r\n<svg fill=\"#000000\" width=\"800px\" height=\"800px\" viewBox=\"-5.5 0 32 32\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<title>linkedin</title>\r\n<path d=\"M0 8.219v15.563c0 1.469 1.156 2.625 2.625 2.625h15.563c0.719 0 1.406-0.344 1.844-0.781 0.469-0.469 0.781-1.063 0.781-1.844v-15.563c0-1.469-1.156-2.625-2.625-2.625h-15.563c-0.781 0-1.375 0.313-1.844 0.781-0.438 0.438-0.781 1.125-0.781 1.844zM2.813 10.281c0-1 0.813-1.875 1.813-1.875 1.031 0 1.875 0.875 1.875 1.875 0 1.031-0.844 1.844-1.875 1.844-1 0-1.813-0.813-1.813-1.844zM7.844 23.125v-9.531c0-0.219 0.219-0.406 0.375-0.406h2.656c0.375 0 0.375 0.438 0.375 0.719 0.75-0.75 1.719-0.938 2.719-0.938 2.438 0 4 1.156 4 3.719v6.438c0 0.219-0.188 0.406-0.375 0.406h-2.75c-0.219 0-0.375-0.219-0.375-0.406v-5.813c0-0.969-0.281-1.5-1.375-1.5-1.375 0-1.719 0.906-1.719 2.125v5.188c0 0.219-0.219 0.406-0.438 0.406h-2.719c-0.156 0-0.375-0.219-0.375-0.406zM2.875 23.125v-9.531c0-0.219 0.219-0.406 0.375-0.406h2.719c0.25 0 0.406 0.156 0.406 0.406v9.531c0 0.219-0.188 0.406-0.406 0.406h-2.719c-0.188 0-0.375-0.219-0.375-0.406z\"></path>\r\n</svg>";

const SPRITESHEET_NAMESPACE = `astroicon`;

const baseURL = "https://api.astroicon.dev/v1/";
const requests = /* @__PURE__ */ new Map();
const fetchCache = /* @__PURE__ */ new Map();
async function get(pack, name) {
  const url = new URL(`./${pack}/${name}`, baseURL).toString();
  if (requests.has(url)) {
    return await requests.get(url);
  }
  if (fetchCache.has(url)) {
    return fetchCache.get(url);
  }
  let request = async () => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(await res.text());
    }
    const contentType = res.headers.get("Content-Type");
    if (!contentType.includes("svg")) {
      throw new Error(`[astro-icon] Unable to load "${name}" because it did not resolve to an SVG!

Recieved the following "Content-Type":
${contentType}`);
    }
    const svg = await res.text();
    fetchCache.set(url, svg);
    requests.delete(url);
    return svg;
  };
  let promise = request();
  requests.set(url, promise);
  return await promise;
}

const splitAttrsTokenizer = /([a-z0-9_\:\-]*)\s*?=\s*?(['"]?)(.*?)\2\s+/gim;
const domParserTokenizer = /(?:<(\/?)([a-zA-Z][a-zA-Z0-9\:]*)(?:\s([^>]*?))?((?:\s*\/)?)>|(<\!\-\-)([\s\S]*?)(\-\->)|(<\!\[CDATA\[)([\s\S]*?)(\]\]>))/gm;
const splitAttrs = (str) => {
  let res = {};
  let token;
  if (str) {
    splitAttrsTokenizer.lastIndex = 0;
    str = " " + (str || "") + " ";
    while (token = splitAttrsTokenizer.exec(str)) {
      res[token[1]] = token[3];
    }
  }
  return res;
};
function optimizeSvg(contents, name, options) {
  return optimize(contents, {
    plugins: [
      "removeDoctype",
      "removeXMLProcInst",
      "removeComments",
      "removeMetadata",
      "removeXMLNS",
      "removeEditorsNSData",
      "cleanupAttrs",
      "minifyStyles",
      "convertStyleToAttrs",
      {
        name: "cleanupIDs",
        params: { prefix: `${SPRITESHEET_NAMESPACE}:${name}` }
      },
      "removeRasterImages",
      "removeUselessDefs",
      "cleanupNumericValues",
      "cleanupListOfValues",
      "convertColors",
      "removeUnknownsAndDefaults",
      "removeNonInheritableGroupAttrs",
      "removeUselessStrokeAndFill",
      "removeViewBox",
      "cleanupEnableBackground",
      "removeHiddenElems",
      "removeEmptyText",
      "convertShapeToPath",
      "moveElemsAttrsToGroup",
      "moveGroupAttrsToElems",
      "collapseGroups",
      "convertPathData",
      "convertTransform",
      "removeEmptyAttrs",
      "removeEmptyContainers",
      "mergePaths",
      "removeUnusedNS",
      "sortAttrs",
      "removeTitle",
      "removeDesc",
      "removeDimensions",
      "removeStyleElement",
      "removeScriptElement"
    ]
  }).data;
}
const preprocessCache = /* @__PURE__ */ new Map();
function preprocess(contents, name, { optimize }) {
  if (preprocessCache.has(contents)) {
    return preprocessCache.get(contents);
  }
  if (optimize) {
    contents = optimizeSvg(contents, name);
  }
  domParserTokenizer.lastIndex = 0;
  let result = contents;
  let token;
  if (contents) {
    while (token = domParserTokenizer.exec(contents)) {
      const tag = token[2];
      if (tag === "svg") {
        const attrs = splitAttrs(token[3]);
        result = contents.slice(domParserTokenizer.lastIndex).replace(/<\/svg>/gim, "").trim();
        const value = { innerHTML: result, defaultProps: attrs };
        preprocessCache.set(contents, value);
        return value;
      }
    }
  }
}
function normalizeProps(inputProps) {
  const size = inputProps.size;
  delete inputProps.size;
  const w = inputProps.width ?? size;
  const h = inputProps.height ?? size;
  const width = w ? toAttributeSize(w) : void 0;
  const height = h ? toAttributeSize(h) : void 0;
  return { ...inputProps, width, height };
}
const toAttributeSize = (size) => String(size).replace(/(?<=[0-9])x$/, "em");
async function load(name, inputProps, optimize) {
  const key = name;
  if (!name) {
    throw new Error("<Icon> requires a name!");
  }
  let svg = "";
  let filepath = "";
  if (name.includes(":")) {
    const [pack, ..._name] = name.split(":");
    name = _name.join(":");
    filepath = `/src/icons/${pack}`;
    let get$1;
    try {
      const files = /* #__PURE__ */ Object.assign({


});
      const keys = Object.fromEntries(
        Object.keys(files).map((key2) => [key2.replace(/\.[cm]?[jt]s$/, ""), key2])
      );
      if (!(filepath in keys)) {
        throw new Error(`Could not find the file "${filepath}"`);
      }
      const mod = files[keys[filepath]];
      if (typeof mod.default !== "function") {
        throw new Error(
          `[astro-icon] "${filepath}" did not export a default function!`
        );
      }
      get$1 = mod.default;
    } catch (e) {
    }
    if (typeof get$1 === "undefined") {
      get$1 = get.bind(null, pack);
    }
    const contents = await get$1(name, inputProps);
    if (!contents) {
      throw new Error(
        `<Icon pack="${pack}" name="${name}" /> did not return an icon!`
      );
    }
    if (!/<svg/gim.test(contents)) {
      throw new Error(
        `Unable to process "<Icon pack="${pack}" name="${name}" />" because an SVG string was not returned!

Recieved the following content:
${contents}`
      );
    }
    svg = contents;
  } else {
    filepath = `/src/icons/${name}.svg`;
    try {
      const files = /* #__PURE__ */ Object.assign({"/src/icons/linkedin.svg": __vite_glob_1_0


});
      if (!(filepath in files)) {
        throw new Error(`Could not find the file "${filepath}"`);
      }
      const contents = files[filepath];
      if (!/<svg/gim.test(contents)) {
        throw new Error(
          `Unable to process "${filepath}" because it is not an SVG!

Recieved the following content:
${contents}`
        );
      }
      svg = contents;
    } catch (e) {
      throw new Error(
        `[astro-icon] Unable to load "${filepath}". Does the file exist?`
      );
    }
  }
  const { innerHTML, defaultProps } = preprocess(svg, key, { optimize });
  if (!innerHTML.trim()) {
    throw new Error(`Unable to parse "${filepath}"!`);
  }
  return {
    innerHTML,
    props: { ...defaultProps, ...normalizeProps(inputProps) }
  };
}

const $$Astro$9 = createAstro();
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Icon;
  let { name, pack, title, optimize = true, class: className, ...inputProps } = Astro2.props;
  let props = {};
  if (pack) {
    name = `${pack}:${name}`;
  }
  let innerHTML = "";
  try {
    const svg = await load(name, { ...inputProps, class: className }, optimize);
    innerHTML = svg.innerHTML;
    props = svg.props;
  } catch (e) {
    {
      throw new Error(`[astro-icon] Unable to load icon "${name}"!
${e}`);
    }
  }
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(name, "astro-icon")}>${unescapeHTML((title ? `<title>${title}</title>` : "") + innerHTML)}</svg>`;
}, "C:/Users/Amangoua.k/Desktop/Astro/new/node_modules/astro-icon/lib/Icon.astro", void 0);

const sprites = /* @__PURE__ */ new WeakMap();
function trackSprite(request, name) {
  let currentSet = sprites.get(request);
  if (!currentSet) {
    currentSet = /* @__PURE__ */ new Set([name]);
  } else {
    currentSet.add(name);
  }
  sprites.set(request, currentSet);
}
const warned = /* @__PURE__ */ new Set();
async function getUsedSprites(request) {
  const currentSet = sprites.get(request);
  if (currentSet) {
    return Array.from(currentSet);
  }
  if (!warned.has(request)) {
    const { pathname } = new URL(request.url);
    console.log(`[astro-icon] No sprites found while rendering "${pathname}"`);
    warned.add(request);
  }
  return [];
}

const $$Astro$8 = createAstro();
const $$Spritesheet = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Spritesheet;
  const { optimize = true, style, ...props } = Astro2.props;
  const names = await getUsedSprites(Astro2.request);
  const icons = await Promise.all(names.map((name) => {
    return load(name, {}, optimize).then((res) => ({ ...res, name })).catch((e) => {
      {
        throw new Error(`[astro-icon] Unable to load icon "${name}"!
${e}`);
      }
    });
  }));
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(`position: absolute; width: 0; height: 0; overflow: hidden; ${style ?? ""}`.trim(), "style")}${spreadAttributes({ "aria-hidden": true, ...props })} astro-icon-spritesheet> ${icons.map((icon) => renderTemplate`<symbol${spreadAttributes(icon.props)}${addAttribute(`${SPRITESHEET_NAMESPACE}:${icon.name}`, "id")}>${unescapeHTML(icon.innerHTML)}</symbol>`)} </svg>`;
}, "C:/Users/Amangoua.k/Desktop/Astro/new/node_modules/astro-icon/lib/Spritesheet.astro", void 0);

const $$Astro$7 = createAstro();
const $$SpriteProvider = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$SpriteProvider;
  const content = await Astro2.slots.render("default");
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })}${renderComponent($$result, "Spritesheet", $$Spritesheet, {})}`;
}, "C:/Users/Amangoua.k/Desktop/Astro/new/node_modules/astro-icon/lib/SpriteProvider.astro", void 0);

const $$Astro$6 = createAstro();
const $$Sprite = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Sprite;
  let { name, pack, title, class: className, x, y, ...inputProps } = Astro2.props;
  const props = normalizeProps(inputProps);
  if (pack) {
    name = `${pack}:${name}`;
  }
  const href = `#${SPRITESHEET_NAMESPACE}:${name}`;
  trackSprite(Astro2.request, name);
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(className, "class")}${addAttribute(name, "astro-icon")}> ${title ? renderTemplate`<title>${title}</title>` : ""} <use${spreadAttributes({ "xlink:href": href, width: props.width, height: props.height, x, y })}></use> </svg>`;
}, "C:/Users/Amangoua.k/Desktop/Astro/new/node_modules/astro-icon/lib/Sprite.astro", void 0);

Object.assign($$Sprite, { Provider: $$SpriteProvider });

const $$Astro$5 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<div class="lg:h-screen h-[70vh]  flex justify-center relative py-" data-astro-cid-bbe6dxrz> <div class="max-w-4xl text-center flex flex-col justify-center items-center h-full relative texte" data-astro-cid-bbe6dxrz> <div class="text-white dark:text-black items-center	" data-astro-cid-bbe6dxrz> <span class="lg:text-6xl md:text-4xl sm:text-3xl text-3xl leading-none font-semibold" data-astro-cid-bbe6dxrz> <span data-astro-cid-bbe6dxrz>creative</span> <span class="font-display relative lg:text-7xl md:text-5xl sm:text-4xl text-4xl" data-astro-cid-bbe6dxrz>front-end
<svg viewBox="0 0 550 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="icons absolute bottom-2 left-0" data-astro-cid-bbe6dxrz><path d="M2.00024 1.5C14.5002 19.5 34.5 21 60.5 10C102.864 -7.92334 154.649 17.7997 200 17.5C267.5 17.0539 294.186 7.58925 337 5C379.814 2.41075 402.484 20.6688 445 15C482.5 10 495 10 510.5 13.5C526 17 545.5 15 548.5 2" stroke-linecap="round" data-astro-cid-bbe6dxrz></path></svg> </span> <span data-astro-cid-bbe6dxrz>focusing on digital experiences</span> </span> </div> <div class="flex justify-center items-center md:flex-row flex-col mt-10 gap-5 mx-10 md:mx-0" data-astro-cid-bbe6dxrz> ${renderComponent($$result, "Button", $$Button, { "title": "Contact me", "href": "mailto:amangouakcouange@gmail.com", "active": true, "data-astro-cid-bbe6dxrz": true })} ${renderComponent($$result, "Button", $$Button, { "title": "Download my resume", "href": "/portfolio.png", "data-astro-cid-bbe6dxrz": true })} </div> <div class="gap-2 font-medium text-gray-200 dark:text-black absolute bottom-12 flex justify-center items-center" data-astro-cid-bbe6dxrz> <p data-astro-cid-bbe6dxrz>Follow me</p> <div class="w-10 bg-white dark:bg-black h-[1px] flex-1" data-astro-cid-bbe6dxrz></div> <div class="flex gap-4" data-astro-cid-bbe6dxrz> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:linkedin", "class": "w-5 cursor-pointer hover:text-yellow-200 hover:scale-150", "data-astro-cid-bbe6dxrz": true })} ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:twitter", "class": "w-5 cursor-pointer hover:text-yellow-200 hover:scale-150", "data-astro-cid-bbe6dxrz": true })} ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:instagram", "class": "w-5 cursor-pointer hover:text-yellow-200 hover:scale-150", "data-astro-cid-bbe6dxrz": true })} ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:github", "class": "w-5 cursor-pointer hover:text-yellow-200 hover:scale-150", "data-astro-cid-bbe6dxrz": true })} </div> </div> </div> </div> `;
}, "C:/Users/Amangoua.k/Desktop/Astro/new/src/components/Hero.astro", void 0);

const $$Astro$4 = createAstro();
const $$MainHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$MainHead;
  const title = "Amangoua Kacou Ange-Thierry";
  return renderTemplate`<meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"><title>${title}</title>`;
}, "C:/Users/Amangoua.k/Desktop/Astro/new/src/components/MainHead.astro", void 0);

const $$Astro$3 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate``;
}, "C:/Users/Amangoua.k/Desktop/Astro/new/src/components/Footer.astro", void 0);

const $$Astro$2 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const Logo = "./a.svg";
  return renderTemplate`${maybeRenderHead()}<div class="absolute w-full z-50 text-white dark:text-black py-5 px-5"> <div class="flex justify-between items-center"> <figure class="w-[175px]"> <img${addAttribute(Logo, "src")} alt="Logo" class="dark:invert"> </figure> <div class="flex items-center"> <div class="md:flex items-center gap-3 hidden cursor-pointer light" id="theme-toggle"> <span class="font-medium">Turn on the lights !</span> <button type="button" class=" border-none rounded-full bg-white dark:bg-black text-sm p-2 flex"> <svg id="lights" class="hidden w-4 h-4 text-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.509 5.75c0-1.493.394-2.96 1.144-4.25h-.081a8.5 8.5 0 1 0 7.356 12.746A8.5 8.5 0 0 1 8.509 5.75Z"></path> </svg> <svg id="darks" class="hidden w-4 h-4 text-white  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3V1m0 18v-2M5.05 5.05 3.636 3.636m12.728 12.728L14.95 14.95M3 10H1m18 0h-2M5.05 14.95l-1.414 1.414M16.364 3.636 14.95 5.05M14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"></path> </svg> </button> </div> <div> <div class="ml-10 grid grid-cols-2 gap-2 max-w-[30px] cursor-pointer"> <span class="block h-2 w-2 bg-white dark:bg-black rounded-full"></span> <span class="block h-2 w-2 bg-white dark:bg-black rounded-full"></span> <span class="block h-2 w-2 bg-white dark:bg-black rounded-full"></span> <span class="block h-2 w-2 bg-white dark:bg-black rounded-full"></span> </div> </div> </div> </div> </div> `;
}, "C:/Users/Amangoua.k/Desktop/Astro/new/src/components/Header.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" class=""> <head>${renderComponent($$result, "MainHead", $$MainHead, { "title": title })}${renderHead()}</head> <body class="bg-black dark:bg-white"> <div class="wrapper"> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </div> </body></html>`;
}, "C:/Users/Amangoua.k/Desktop/Astro/new/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Index.", "description": "Frontend Dev" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <div class="wrapper px-6 lg:px-5 md:px-8"> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "About", $$About, {})} </div> </main> ` })}`;
}, "C:/Users/Amangoua.k/Desktop/Astro/new/src/pages/index.astro", void 0);

const $$file = "C:/Users/Amangoua.k/Desktop/Astro/new/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
