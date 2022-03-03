import { c as create_ssr_component, e as escape } from "../../chunks/index-756e41cf.js";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-1jvtmjb{font-size:clamp(1rem, 3vw + 1rem, 4rem);position:relative;font-family:'Source Code Pro', monospace;width:max-content}h1.svelte-1jvtmjb::before,h1.svelte-1jvtmjb::after{content:'';position:absolute;top:0;right:0;bottom:0;left:0}h1.svelte-1jvtmjb::before{background:var(--bgcolor);animation:svelte-1jvtmjb-typewriter 3s steps(var(--typewriterCharacters)) 1s forwards}h1.svelte-1jvtmjb::after{width:0.125em;background:var(--textcolor);animation:svelte-1jvtmjb-typewriter 3s steps(var(--typewriterCharacters)) 1s forwards,\n			svelte-1jvtmjb-blink 750ms steps(var(--typewriterCharacters)) infinite}@keyframes svelte-1jvtmjb-typewriter{to{left:100%}}@keyframes svelte-1jvtmjb-blink{to{background:transparent}}",
  map: null
};
let dummy_name = "Melissa";
let dummy_university = "KU Leuven";
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Sequis</title>`, ""}`, ""}

<section><div class="${"h-screen w-screen flex items-center -mt-10 overflow-x-hidden"}"><div class="${"w-1/2 ml-5 md:ml-10 lg:ml-32 xl:ml-60 -mt-64 lg:-mt-56 z-10"}"><div class="${"text-4xl md:text-6xl lg:text-7xl uppercase font-serif flex flex-col"}"><div><p>To<br>Those<br>That</p></div>
				<div class="${"ml-32 md:ml-56"}"><p>Follow</p></div></div>
			<p class="${"w-44 italic text-sm mt-2"}">Leave your knowledge and advice behind for the next generation or find out what your
				predecessors have to conseil.
			</p></div>
		<img class="${"h-1/2 lg:h-2/3 max-w-none -ml-16 lg:-ml-28 xl:-ml-12 mt-20 z-0"}" src="${"imgs/bg_students.jpg"}" alt="${""}"></div>
	<div class="${"border border-black min-w-fit bg-white px-5 py-3 absolute bottom-1/4 lg:bottom-20 left-1/2 -translate-x-1/2 mx-auto font-serif text-xl lg:text-3xl"}">Rate a professor
	</div>
	
	<div class="${"h-screen w-screen flex flex-col items-center md:items-start text-white bg-black gap-10"}" style="${"--typewriterCharacters: " + escape(dummy_name.length) + "; --bgcolor: #1E1E24; --textcolor: white;"}"><div class="${"font-serif text-xl md:text-3xl pt-10 md:pt-20 md:pl-20"}">Search by name...</div>
		<h1 class="${"text-white text-3xl md:text-5xl md:ml-20 svelte-1jvtmjb"}">${escape(dummy_name)}</h1>
		<img class="${"h-1/2 w-auto max-w-none md:w-full md:h-min xl:h-full xl:w-auto xl:mx-auto mt-20"}" src="${"imgs/search_cards.png"}" alt="${""}"></div>
	
	<div class="${"h-screen w-screen flex flex-col items-center md:items-end text-black bg-white gap-10"}" style="${"--typewriterCharacters: " + escape(dummy_university.length) + " ; --bgcolor: black; --textcolor: white;"}"><div class="${"font-serif text-xl md:text-3xl pt-10 md:pt-20 md:pr-20"}">... or use filters</div>
		<div class="${"flex flex-col md:flex-row gap-4 md:gap-10 text-xl md:text-3xl xl:text-5xl md:mr-20"}"><div class="${"flex items-center font-semibold border border-black px-5 py-3 gap-3"}">KU Leuven <img class="${"w-8"}" src="${"imgs/chevron-down.png"}" alt="${""}"></div>
			<div class="${"flex items-center font-semibold border border-black px-5 py-3 gap-3"}">Engineering <img class="${"w-8"}" src="${"imgs/chevron-down.png"}" alt="${""}"></div></div>
		<img class="${"h-1/2 w-auto max-w-none md:w-full md:h-min xl:h-full xl:w-auto xl:mx-auto md:mt-20"}" src="${"imgs/filter_cards.png"}" alt="${""}"></div>
</section>`;
});
export { Routes as default };
