'use strict';

var sirv = require('sirv');
var polka = require('polka');
var compression = require('compression');
var fs = require('fs');
var path = require('path');
var Stream = require('stream');
var http = require('http');
var Url = require('url');
var https = require('https');
var zlib = require('zlib');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var sirv__default = /*#__PURE__*/_interopDefaultLegacy(sirv);
var polka__default = /*#__PURE__*/_interopDefaultLegacy(polka);
var compression__default = /*#__PURE__*/_interopDefaultLegacy(compression);
var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);
var path__default = /*#__PURE__*/_interopDefaultLegacy(path);
var Stream__default = /*#__PURE__*/_interopDefaultLegacy(Stream);
var http__default = /*#__PURE__*/_interopDefaultLegacy(http);
var Url__default = /*#__PURE__*/_interopDefaultLegacy(Url);
var https__default = /*#__PURE__*/_interopDefaultLegacy(https);
var zlib__default = /*#__PURE__*/_interopDefaultLegacy(zlib);

// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
		title: 'What is Sapper?',
		slug: 'what-is-sapper',
		html: `
			<p>First, you have to know what <a href='https://svelte.dev'>Svelte</a> is. Svelte is a UI framework with a bold new idea: rather than providing a library that you write code with (like React or Vue, for example), it's a compiler that turns your components into highly optimized vanilla JavaScript. If you haven't already read the <a href='https://svelte.dev/blog/frameworks-without-the-framework'>introductory blog post</a>, you should!</p>

			<p>Sapper is a Next.js-style framework (<a href='blog/how-is-sapper-different-from-next'>more on that here</a>) built around Svelte. It makes it embarrassingly easy to create extremely high performance web apps. Out of the box, you get:</p>

			<ul>
				<li>Code-splitting, dynamic imports and hot module replacement, powered by webpack</li>
				<li>Server-side rendering (SSR) with client-side hydration</li>
				<li>Service worker for offline support, and all the PWA bells and whistles</li>
				<li>The nicest development experience you've ever had, or your money back</li>
			</ul>

			<p>It's implemented as Express middleware. Everything is set up and waiting for you to get started, but you keep complete control over the server, service worker, webpack config and everything else, so it's as flexible as you need it to be.</p>
		`
	},

	{
		title: 'How to use Sapper',
		slug: 'how-to-use-sapper',
		html: `
			<h2>Step one</h2>
			<p>Create a new project, using <a href='https://github.com/Rich-Harris/degit'>degit</a>:</p>

			<pre><code>npx degit "sveltejs/sapper-template#rollup" my-app
			cd my-app
			npm install # or yarn!
			npm run dev
			</code></pre>

			<h2>Step two</h2>
			<p>Go to <a href='http://localhost:3000'>localhost:3000</a>. Open <code>my-app</code> in your editor. Edit the files in the <code>src/routes</code> directory or add new ones.</p>

			<h2>Step three</h2>
			<p>...</p>

			<h2>Step four</h2>
			<p>Resist overdone joke formats.</p>
		`
	},

	{
		title: 'Why the name?',
		slug: 'why-the-name',
		html: `
			<p>In war, the soldiers who build bridges, repair roads, clear minefields and conduct demolitions — all under combat conditions — are known as <em>sappers</em>.</p>

			<p>For web developers, the stakes are generally lower than those for combat engineers. But we face our own hostile environment: underpowered devices, poor network connections, and the complexity inherent in front-end engineering. Sapper, which is short for <strong>S</strong>velte <strong>app</strong> mak<strong>er</strong>, is your courageous and dutiful ally.</p>
		`
	},

	{
		title: 'How is Sapper different from Next.js?',
		slug: 'how-is-sapper-different-from-next',
		html: `
			<p><a href='https://github.com/zeit/next.js'>Next.js</a> is a React framework from <a href='https://vercel.com/'>Vercel</a>, and is the inspiration for Sapper. There are a few notable differences, however:</p>

			<ul>
				<li>It's powered by <a href='https://svelte.dev'>Svelte</a> instead of React, so it's faster and your apps are smaller</li>
				<li>Instead of route masking, we encode route parameters in filenames. For example, the page you're looking at right now is <code>src/routes/blog/[slug].svelte</code></li>
				<li>As well as pages (Svelte components, which render on server or client), you can create <em>server routes</em> in your <code>routes</code> directory. These are just <code>.js</code> files that export functions corresponding to HTTP methods, and receive Express <code>request</code> and <code>response</code> objects as arguments. This makes it very easy to, for example, add a JSON API such as the one <a href='blog/how-is-sapper-different-from-next.json'>powering this very page</a></li>
				<li>Links are just <code>&lt;a&gt;</code> elements, rather than framework-specific <code>&lt;Link&gt;</code> components. That means, for example, that <a href='blog/how-can-i-get-involved'>this link right here</a>, despite being inside a blob of HTML, works with the router as you'd expect.</li>
			</ul>
		`
	},

	{
		title: 'How can I get involved?',
		slug: 'how-can-i-get-involved',
		html: `
			<p>We're so glad you asked! Come on over to the <a href='https://github.com/sveltejs/svelte'>Svelte</a> and <a href='https://github.com/sveltejs/sapper'>Sapper</a> repos, and join us in the <a href='https://svelte.dev/chat'>Discord chatroom</a>. Everyone is welcome, especially you!</p>
		`
	}
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

const contents = JSON.stringify(posts.map(post => {
	return {
		title: post.title,
		slug: post.slug
	};
}));

function get$1(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}

var route_0 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	get: get$1
});

const lookup = new Map();
posts.forEach(post => {
	lookup.set(post.slug, JSON.stringify(post));
});

function get(req, res, next) {
	// the `slug` parameter is available because
	// this file is called [slug].json.js
	const { slug } = req.params;

	if (lookup.has(slug)) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(lookup.get(slug));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
}

var route_1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	get: get
});

function noop$1() { }
function run(fn) {
    return fn();
}
function blank_object() {
    return Object.create(null);
}
function run_all(fns) {
    fns.forEach(run);
}
function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}

let current_component;
function set_current_component(component) {
    current_component = component;
}
function get_current_component() {
    if (!current_component)
        throw new Error('Function called outside component initialization');
    return current_component;
}
function afterUpdate(fn) {
    get_current_component().$$.after_update.push(fn);
}
function setContext(key, context) {
    get_current_component().$$.context.set(key, context);
}
Promise.resolve();
const escaped$1 = {
    '"': '&quot;',
    "'": '&#39;',
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
};
function escape(html) {
    return String(html).replace(/["'&<>]/g, match => escaped$1[match]);
}
function each(items, fn) {
    let str = '';
    for (let i = 0; i < items.length; i += 1) {
        str += fn(items[i], i);
    }
    return str;
}
const missing_component = {
    $$render: () => ''
};
function validate_component(component, name) {
    if (!component || !component.$$render) {
        if (name === 'svelte:component')
            name += ' this={...}';
        throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
    }
    return component;
}
let on_destroy;
function create_ssr_component(fn) {
    function $$render(result, props, bindings, slots, context) {
        const parent_component = current_component;
        const $$ = {
            on_destroy,
            context: new Map(parent_component ? parent_component.$$.context : context || []),
            // these will be immediately discarded
            on_mount: [],
            before_update: [],
            after_update: [],
            callbacks: blank_object()
        };
        set_current_component({ $$ });
        const html = fn(result, props, bindings, slots);
        set_current_component(parent_component);
        return html;
    }
    return {
        render: (props = {}, { $$slots = {}, context = new Map() } = {}) => {
            on_destroy = [];
            const result = { title: '', head: '', css: new Set() };
            const html = $$render(result, props, {}, $$slots, context);
            run_all(on_destroy);
            return {
                html,
                css: {
                    code: Array.from(result.css).map(css => css.code).join('\n'),
                    map: null // TODO
                },
                head: result.title + result.head
            };
        },
        $$render
    };
}
function add_attribute(name, value, boolean) {
    if (value == null || (boolean && !value))
        return '';
    return ` ${name}${value === true ? '' : `=${typeof value === 'string' ? JSON.stringify(escape(value)) : `"${value}"`}`}`;
}

/* src/routes/index.svelte generated by Svelte v3.38.3 */

const css$7 = {
	code: ".index.svelte-n7o2k9{z-index:-1}h1.svelte-n7o2k9{text-align:center;margin:0 auto}h1.svelte-n7o2k9{font-size:2.8em;text-transform:uppercase;font-weight:700;margin:0 0 0.5em 0}@media(min-width: 480px){h1.svelte-n7o2k9{font-size:4em}}",
	map: "{\"version\":3,\"file\":\"index.svelte\",\"sources\":[\"index.svelte\"],\"sourcesContent\":[\"<script>\\n\\timport successkid from 'images/successkid.jpg';\\n</script>\\n\\n<style>\\n\\t.index{\\n\\t\\tz-index: -1;\\n\\t}\\n\\th1{\\n\\t\\ttext-align: center;\\n\\t\\tmargin: 0 auto;\\n\\t}\\n\\n\\th1 {\\n\\t\\tfont-size: 2.8em;\\n\\t\\ttext-transform: uppercase;\\n\\t\\tfont-weight: 700;\\n\\t\\tmargin: 0 0 0.5em 0;\\n\\t}\\n\\n\\n\\t@media (min-width: 480px) {\\n\\t\\th1 {\\n\\t\\t\\tfont-size: 4em;\\n\\t\\t}\\n\\t}\\n</style>\\n\\n<svelte:head>\\n\\t<title>Este ews mi primer proyecto</title>\\n</svelte:head>\\n\\n<div class=\\\"index\\\">\\n\\t<h1>Hola que tal my name is Abel Escobar </h1>\\n</div>\"],\"names\":[],\"mappings\":\"AAKC,oBAAM,CAAC,AACN,OAAO,CAAE,EAAE,AACZ,CAAC,AACD,gBAAE,CAAC,AACF,UAAU,CAAE,MAAM,CAClB,MAAM,CAAE,CAAC,CAAC,IAAI,AACf,CAAC,AAED,EAAE,cAAC,CAAC,AACH,SAAS,CAAE,KAAK,CAChB,cAAc,CAAE,SAAS,CACzB,WAAW,CAAE,GAAG,CAChB,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,AACpB,CAAC,AAGD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAC1B,EAAE,cAAC,CAAC,AACH,SAAS,CAAE,GAAG,AACf,CAAC,AACF,CAAC\"}"
};

const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css$7);

	return `${($$result.head += `${($$result.title = `<title>Este ews mi primer proyecto</title>`, "")}`, "")}

<div class="${"index svelte-n7o2k9"}"><h1 class="${"svelte-n7o2k9"}">Hola que tal my name is Abel Escobar </h1></div>`;
});

var component_0 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': Routes
});

/* src/routes/atumedida.svelte generated by Svelte v3.38.3 */

const Atumedida = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return ``;
});

var component_1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': Atumedida
});

/* src/components/VideoHeaderOveroles.svelte generated by Svelte v3.38.3 */

const css$6 = {
	code: "div.svelte-hqqeml{position:relative}video.svelte-hqqeml{width:80%}",
	map: "{\"version\":3,\"file\":\"VideoHeaderOveroles.svelte\",\"sources\":[\"VideoHeaderOveroles.svelte\"],\"sourcesContent\":[\"<script>\\n\\t// These values are bound to properties of the video\\n\\tlet time = 0;\\n\\tlet duration;\\n\\tlet paused = true;\\n\\n\\tlet showControls = true;\\n\\tlet showControlsTimeout;\\n\\n\\tfunction handleMousemove(e) {\\n\\t\\t// Make the controls visible, but fade out after\\n\\t\\t// 2.5 seconds of inactivity\\n\\t\\tclearTimeout(showControlsTimeout);\\n\\t\\tshowControlsTimeout = setTimeout(() => showControls = false, 2500);\\n\\t\\tshowControls = true;\\n\\n\\t\\tif (!(e.buttons & 1)) return; // mouse not down\\n\\t\\tif (!duration) return; // video not loaded yet\\n\\n\\t\\tconst { left, right } = this.getBoundingClientRect();\\n\\t\\ttime = duration * (e.clientX - left) / (right - left);\\n\\t}\\n\\n\\tfunction handleMousedown(e) {\\n\\t\\t// we can't rely on the built-in click event, because it fires\\n\\t\\t// after a drag — we have to listen for clicks ourselves\\n\\n\\t\\tfunction handleMouseup() {\\n\\t\\t\\tif (paused) e.target.play();\\n\\t\\t\\telse e.target.pause();\\n\\t\\t\\tcancel();\\n\\t\\t}\\n\\n\\t\\tfunction cancel() {\\n\\t\\t\\te.target.removeEventListener('mouseup', handleMouseup);\\n\\t\\t}\\n\\n\\t\\te.target.addEventListener('mouseup', handleMouseup);\\n\\n\\t\\tsetTimeout(cancel, 200);\\n\\t}\\n\\n\\tfunction format(seconds) {\\n\\t\\tif (isNaN(seconds)) return '...';\\n\\n\\t\\tconst minutes = Math.floor(seconds / 60);\\n\\t\\tseconds = Math.floor(seconds % 60);\\n\\t\\tif (seconds < 10) seconds = '0' + seconds;\\n\\n\\t\\treturn `${minutes}:${seconds}`;\\n\\t}\\n</script>\\n\\n<div>\\n\\t<video\\n\\t\\tsrc=\\\"https://photos.app.goo.gl/CZNLdFmYMTtExNSS7\\\"\\n\\t\\tmuted\\n\\t\\tloop\\n\\t\\t\\n\\t\\ton:mousemove={handleMousemove}\\n\\t\\ton:mousedown={handleMousedown}>\\n\\t\\t\\n\\t\\t<track kind=\\\"captions\\\">\\n\\t</video>\\n\\n</div>\\n\\n<style>\\n\\tdiv {\\n\\t\\tposition: relative;\\n\\t}\\n\\n\\t.controls {\\n\\t\\tposition: absolute;\\n\\t\\ttop: 0;\\n\\t\\twidth: 100%;\\n\\t\\ttransition: opacity 1s;\\n\\t}\\n\\n\\t.info {\\n\\t\\tdisplay: flex;\\n\\t\\twidth: 100%;\\n\\t\\tjustify-content: space-between;\\n\\t}\\n\\n\\tspan {\\n\\t\\tpadding: 0.2em 0.5em;\\n\\t\\tcolor: white;\\n\\t\\ttext-shadow: 0 0 8px black;\\n\\t\\tfont-size: 1.4em;\\n\\t\\topacity: 0.7;\\n\\t}\\n\\n\\t.time {\\n\\t\\twidth: 3em;\\n\\t}\\n\\n\\t.time:last-child { text-align: right }\\n\\n\\tprogress {\\n\\t\\tdisplay: block;\\n\\t\\twidth: 100%;\\n\\t\\theight: 10px;\\n\\t\\t-webkit-appearance: none;\\n\\t\\tappearance: none;\\n\\t}\\n\\n\\tprogress::-webkit-progress-bar {\\n\\t\\tbackground-color: rgba(0,0,0,0.2);\\n\\t}\\n\\n\\tprogress::-webkit-progress-value {\\n\\t\\tbackground-color: rgba(255,255,255,0.6);\\n\\t}\\n\\n\\tvideo {\\n\\t\\twidth: 80%;\\n\\t}\\n</style>\"],\"names\":[],\"mappings\":\"AAoEC,GAAG,cAAC,CAAC,AACJ,QAAQ,CAAE,QAAQ,AACnB,CAAC,AA6CD,KAAK,cAAC,CAAC,AACN,KAAK,CAAE,GAAG,AACX,CAAC\"}"
};

const VideoHeaderOveroles = create_ssr_component(($$result, $$props, $$bindings, slots) => {

	$$result.css.add(css$6);

	return `<div class="${"svelte-hqqeml"}"><video src="${"https://photos.app.goo.gl/CZNLdFmYMTtExNSS7"}" muted loop class="${"svelte-hqqeml"}"><track kind="${"captions"}"></video>

</div>`;
});

var imgParteDos = "/client/13e9f24b22aa8115.png";

var fondoVentanaDos = "/client/728b8cdb46c7829f.png";

var muestrasvg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI0AAAEyCAYAAADHtVOxAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAADFBSURBVHgB7X0LmBTlme433EZghmm5GFBhSiMqapgGjYvJgWmibtRFQVbZJwYEjHr0bIgS87hx0QdYxWQ3F0T0SGIMg2ZzEjACarzEoD2QFddFmUGRiBh6BgUEBnu4DAxzO9/7d9XY9PSlqvr//6runvd5aqqnu/pab3337/uJChAdLS2hF1evXt5x4kSQutGNTOg4dsxgsuzkrQPbwb17d1avWzcf91M3bKGICgxMlM0/XrQoeFprK02+9VZ6cckSOvfv/o7OHTeOBp1xRpgPWUFtbeGivn0j1I1usFqaX/WrX3VMHDiw43+PGNHxwk9/2rGrtrZj7kUXif8fmTWr49Xf/EZIoI7m5tW8n8VPC1A3TkLBSBomwF2RurpHZk6cSKN69Oi8f+a//7vYr/iXf+m8r1dJCX317/+eLvvHf6TTzjuPmpub16z/y1/WTvvWt8L8cIQKHAVBGtgr0cOHN4cuuywwrqXlpMf6DhhA9/znf1LNa6/Ri48+2uW5rLKE+rp89mxq7dePjh09Gn7iySfXLn388TA/XEMFiLwnTUdHR4BaWjb/8N57jV0rV1Jpr15djgExvv/b39K65cvp9aqqlK+F4y6fNYsqWAodZpvo6aefjry/devCVc89F6YCkkD5T5oTJ5b/24MPzgo//jidy2onFUCIeS++SMvuuIO2//d/Z3xdSJ/Lpk4VBvT7O3bQ9h07qnZ/+umKBQ89FKY8R16TBoZvbU3NgtuuuILGlpVlPP7MUaPozmXLhJra+Ic/kF0Er7ySKvg9YAO9/fbbkePNzVWVl1++gvJU+uQtaRDAi0Qib0y75hoa29xs+3nJVFU/tntACioqSksm67gkBnQV5RHylTTBO77znbtuvummWY/NmJHUjkkHizi1f/oT9WUJVcGS5JMPPog9duaZtP2tt2jjc8+lVWOWAQ0C8T7Cd4V5W1LUp0/OG8/5QpoQO9FB/jKT+XaQSRIYWlxM79TX27ZREmER59ihQ/Tzb3+bmnhv3W95U/C87BLoK5Mn05X/9E/0X5s319wwderslhz2vHKVNAEmySz+8JV8OzSod+/A0FNOodOZKNgXm3GYSd/7HvUrLaWVixaRG1jEgUpK5Y7Dm4IxbBFo+9tvi33Dp592OR7H3P/CC/TPP/hB+Pd/+MNEylHkEmkMpsJM/sCh4qKi0AiOmZzOBBnRt28nSRJhnaRF117bKSmcworjfMhEWJWGfJYEslSSZUwnkgdG81U//CGdM3Lk7DaiKspB+J00kCh3WUQ5h11mg0kyjMliFzfef79QMckkhV2AONPmzRP2zIp7700qReIBAkHKQQKtevBBqvnzn096/PtMwtc2bYp8d+7csygH0ZP8iRB/sOV9i4qWnV9aGro0EDC+PmgQDWfCODVqW9lzAnFe/cUvyC3wGrV84kGaaQ88QLUcPT52+HDK4/EYjv9k2za66aGHhFcVb/Pg9sz77gt88OGHjTs+/vgtyjH4iTSQKnfw9v/OKC6++6LSUmPC4MFksBpySpR4QCpcOGGC2GeSEJmAkw0CgDhvsfHbksGVx/uBYDCahddlEgek6sXu+w233z7ul7/6Fdh8nHIIPcgHYObO4m0zG7KL/+G004x/+NKX6CI+OalsFaeAaoK6kPVasFXueOIJW8eDOIj3wNaJxzq+r6SlJbDzww/vphyD16QxmCxvDCsuXm6RxYm9Yhe4ws+84IIuJy4TLKM2ESBOwyef0I1s59jBh3h/jjYnYiWrLuOss+4S+bEcgmek2bRp0xRIl3GnnhpSRZZ4vM4R3iCiuikAtYMT+w12oWf+x3/QzzdvFmUTyC8lIwfc+CAnLnF8JsAQxwYVFQ/YPM898kiAOD9GOQRPvKc7b799yoxvf3v1uWefTS8uXkwbn32WVAMe0KLqajrW2ChsCrjgIEpfjuP0NfNSB1l67OITuYujvzBkIU2s5y2aNKmLTWTFcX5+000Z7aU7WZ29yWqtNsGTwuvfu2YN/duPflS17KmnkK8Kk8/hBWmESrpi8GBjypQpdOP8+SJEv3LhQnGSVANXO4gCwoA4IBCkQLo4jmUPJXPbRakEx14QNU4HSC0E/pLlrqAGpz78MH3t0ktp3+efR/ikzG71MXm0e0/sB73BGefzR/GJ2/vxx/T6r39NZUOG0Hcee4x6s4pCNFUlQJBDBw4IyYA9/m+xkdCcdNddSWttdtbUCLsHEgO3U2E421SJrrcFfJZhI0bQVFaf9W++GTh44sSsVrZz2olwsO88K602Db/ZfM4JBRPLFNYxcRZdfbUIhn3/97/vovu9hjjRHR0pPxcCfnCr09lMmQApdtkNN9Ckyy+n64cNo3P6978bNh8/ZJDPoFPSGGU9e665gqVKMlcaVzxsGxFAY5WFDPMxl6F/FRjORjIMZUgnbPGAihMBu5/8RNyGgZsIqLBD+/enlEYIIOLxa1mi/dfvfifiU32KigINzc2zON3Q3EHkmyCgNtIwTd5gT2no6Rm8JKgnGKS3srrCHirMDwAZzg4G6SrOmkOqgEQwCEEgqDfsEci7Y9kyQYxEw7jyW98SxPrsb39L+R4g2yVscFuq7jROwJ7dv/8p9U1NV51gScfEqSYfQAtpELwb0LPnHZUc4bUDEAXkmfmzn8WuXLOWxUuI6C57PrBrcPIhGSaw13QT55ZAIGGP8f1b16+nW5cs6ZJqANlQQpEopeIBSfZVJg3UtBVxhlQuZ6lzpLU1dIg3kzhR8hBavCcmzU6OxRgcxHP0PKgq2DgvPvIIbVy1ivyI+Go9fF7YJijH+AZLIyu7Ltz2cJi+P3ZsytfB8yfNmSOeD3Im8+be5XDBodNOi/x1+/aqoqKiheQRlJMGUmZk//7LKznh6AaI5N755JP0xG23+ULipAPiNlZWvQlShlUKyingUsNtT+WWQ8JY8Z5k9lA8drHkeXj1aqoIBmczcarIA+jwnuZz8pHcAkRZcc89gjh+86oSARW27M47xecsYsLAGwJhYASnquyLDxBmIgwwvL2d1v3oR7i52Kv0g1LSQMqwSjIG9elD2QD2zetPPSVsnFwAXPBxTBh8bkgY2DzJSGMRBv3kdghjQVQIvvVWIBKJeJLsVC1pZrJqIhlALAeYdLf/k8KQOE8zcRDQg3o9MwVpQChEiNM16KUC0i91kcj83kTax6WoJI1R2rNnKF2DmlNATV12442+V1MA2nyxwa5JlpcSXQrsJbmtKER+7KtsWA8aMmQxaYYy0rBqmg9XUSaQm4IXlStqShCiqEioJ3hZFqxyUNgxbgFjG/be177+dXRiaBW/qkhj8DbrwiwM4FSAmhK1MXyV+h04sVBTwLipUzvvB2FSdSw4wa6tW+kK/i3YBZ5PGkeiKCENpAxsmWzKNFMBJwJG8aS5cykXABWFKj10IQCQMla3QraApAmOGYOW4wBqqkkTVJDG4G2Wnd5pt7CkTbzI9zNAEMsghoRM1tqSDRDSYPtxCl+iIdIA6WkEtJyc27+/VAM4EQjhD+DEJwzinZs3k9+Bz9sbeSTOXaHIHd6SDNLAOxs0fDi9z9KsuGdPimCeIMa/KYZsSWMUKZYyFpAFD37zm5QrgIoaF+vrdhSTsYvyvn2xg/ut3LaRanT0iMVlDBW2TCLgckLkW9h9/Djt5isa772Hb+/h25zkowH8fwlfhX04/I7HrH0JbrNnk23g0S6Et8NkgXRsUlDyge/FgdTA3ubmoOqqP5lnV5uUAXASUDrRdtZZ9JdNmyCaaVRFBfUdOpT67d1LX+Zj9vJ+z549FGXypEqy4X784CAR2wWCZJ2k4vsH9u4trZWmxuyBkgUQsGHXrs7/UZzPF84UyhXS6JQywFZOCL7+P/9DF1aeR8MGvUe1dUSDK8bQLbfckvR4kAckAiwyJbt/p3l/IskgkSCZSk1S4X+QCVLM7ndGaYSs/itg+IUX0ptx2X9UEfDnriDFkHWGtUoZAOro82iU5lw7nNrOHUgPPneQdqc5ftiwYWKzi0wk22fdv3u3IFhZEjUIUg00yQaSWa0ssGvcjD9JhJA0ccX4pqoNUcyuUVZzI4U07IKFdEoZoKGlhf72ygJqs1nY5RR2SbZhwwba+OxD9NMZg6l+fytFm9qpbn8Lbdh2TNx+cdvn4jgQCyd17SWXUI+jR2k0hwtAMrc2FWp0BjJp4stFQFS83r4TJwxSOP9G1lmer1PKnGhvF0bu+PP7ktcYOXIkLatrpvLBvcVm4btXfeHEbOHHIwdaxb6aybSlroX+tH+/eAzSaBDbTTjZsEnsEuk8jvd8tHFjl/thgzWcOBFs8zNpzCIrvVLmxAnUy9KEUd6TZigb3g3HT6Ho0XYK9E9uMI8uLxbbdRf3pxksja5c9Al9uNigLfXNbIs1Uz0TCvtXtu3vNMxBJNRTY0tW8YixtDUcdkgEnrddceZbxpnWKmUAkKZiRHHKk6QbkDZb6vfZInEZf+bGphjBcHz8c746bxddO/0HmH1MO3bsoI8++ohe5+3oZ58J4gwzSQRiVHCMCmWwiSjlx4oUt71kRRovpAyAGMz/KndWb6wSIE1t3S5bpAn06yFsnWSoGNGHDrNXOG3atJPuB3lgdG/m6Dduv8Hb7uuvp1OYWIk98FBvLIXLSSGyPdvapQxwpK2NT5D8DLpbCNJseMX28eWDe7GN00JGnA0EVBjFtI4Jkez1sY0fP178/2vOvS3n7WunntqFNFBtRYqjwq7lu1dSBoB6SnZVv/TSS+JqdIOmpiZ6fd06sTU0NDh67jnnnENbIvZnFafCBDbsP0pCmlRIZjCb58MghcjGKPBEylgoH3LyVfrA1IFU3HqA7rvvPrFZcRW7WPbEE7Ry5Uqx/fxnPxMksgsQtbbePmnw2eGeJ7sftsyRI0fsvIyI/ySDSRxlKsoVaayCcS+kDNztVCjr35OWLl0qxPicOXPo4Ycfdkwep3j00UcF0ZwC3lYiYO/Ay8r0ma2gY6rfH243n6MxpAhuz/r8sQFvhjc1pyENDEmI92uuuUZs0P0gz9ixY4VrbAXrcNuCdXv6jBn08ccf0zGWMBXBIPXLUKqKEwuJdvrpp9Py5cvp6quvJruATRNtaqNU3wGSCzZMOiC+0ydFTgyeFufiQnxzDSmAY9JYUsZpt6QOQLzvNq9CAHkonMyXX35Z/P/uu++K/d64Y6zb8FostWCRq6SkRGzxt0tLS8Ue9hO8nERPJ1ukMoYTgeRqKqA2+61odCYpqh12I2k8kzKZAG/knV0ni3YQIFUSMxUs9QASWUSyblvkmjdvHo0ZI18DwBhetjwzafqkybxDbZllEiEVZRKOSOMHKYP0QUeKx0aX96Efv27f+0gFJ4lN2Yg3hkvSVD/2yVCuAVec41mQNmGSDKeGsG+lDBDo19O25+ElQIy6A61JH7NrDJdkcEJQN1xcVITaGuknzDZp/GzLWCgf0ouOH9qXE8RJB8sYTgUQKlNhGCTRyJKSgIqeKCeSZr6sFttsgGhwOpTxlXo4zQj6XACM4UxBPjvhDvSdcSTnLpIsbWyRBlKGrXVDZYeBLEC0O4mq+hF2IsMlNkgDYvGFLl3a2JU088d4GP2Nx+E0hjBgsL0Q71LnIpxGhtMBUftTioqkSpseNg6YD1vGL1IGEeHKNNlk2DW5Thq7xrAdQNpcOGBAoFesdVcKMpHGYJYumOByipUKQNKkK0FAnY3f1RPKQREVTodMxrATwJPqXVR0t6wOzLSkwWTxMexie5FjSgUYwuPTkCYfbBrAjjFsF/CkoKY6JEmbHmkegLdkXFTqn7oV4HBLi5AmqQDR3qu9SavbrSIpms4YhvotLnI2LhFLIbGZIWUsSSrSGAN69lww1ifGrwXU0Ywa3keUTKaDbmmDhCVKM2QikzHcx0UDH8wMNjcgbQzKAknfWaglJoyf1BJwkKXMiCGZP1OFRtIgcbn17T/R/ZJJI9MYtoDzOUbCWJIeSe4QasmPMZlIUxNNujhzgBFV/yiLUF1Lg9fH+7w27wxHz0MKwUgoIksGmcawBaipQb17h7IxihNJE/KjWgLgNVH/FiZEZjLDu1ow5RRRS6PStoFaunJkU5cqQlm4ecIA0YwnGyidaCeaQi4RTxohtvyoloDNjY1CXJfZbFuZc1WAbgwepyVLlpAKQMpALT0w9VRSBZD/4K73pEsbpIPYjJ5JLtEj7sYsv6olSJkPjx61pZri8dPpg+loJCxUiGxAisGOcSNl0MKCHJmt97k60OXzI7fmxhC2YA4xCLhVUZ3vzMyrNPp637GYDJAy16I7cYLzcWm/uv00Wvf808JglQWcRKilmye4G9/WeLTNtsScMX4A7fyw9iT7DCo32/EnGILU7pI0nXqIAz9GiQ/VUh0bv5Aya6e7K66HJHh27jC6ctGPRaG5LGxfrLQfrRPwotAXvmrVKvqexDElIM37hw9XkgtYLAkwc4O6pkI5wcZolKbz1ZaNsQlb6LNfnk1+gfCeBtv/PrDPzrv7WWHbxBfFZwPzXFvj1hyNJbFkXBD9wX4DlqoZyF/pfoXGZi4A0gak/+2s43S4/m2SYUZY49Z6uRgW0MP84zspg7l57zBppk8YoMyl9QJ1+1szJitTARITBDpb0iR4nPN2t6Qhn9kz8JaqDx6kEfzjyo605jqQIZcFkMbNuDVBGjzRT5LmtQMHBHHm5SFh6g60ZCU5YQ/JusAHxkySEDmEIA08pz4Os6aqsL6hQSQmp48vde3SdsMezCCu44o+8SwMwfFS0qDVFtM64V4f4KQkJEy+qiUE9gL9souxyIIZIHRFGk89J0iVl/btizJxwgg2/WT64MCcq/zbW5UtGo+2i0EFfgE0zLHYsoa23W5QLdCnhzfMtwjT1N4+sY3oelaTNeWD88dTSgYMM3LrPalAcawn3HDyHNAlWOLRYCKLMPTFJMq1z797lLqRHiU95UkqRIZ7ODSGhaTRndVOQRhgzQubcrs7MhPsFJXrBEjDNu1kJ8/RrpfSEAaI8AM167cdo3xFzBD2j02DQQFs14TIQZCvB7MsIgqcNCADYSysrc5j0ljjYP0EVPP1cFCU1QOTrQ/yydQBjAlhLwlkSTdNO/zCpvy1a5zU0ujCRQ57vvHpaxpaWqLpZtnJAsoMbYjCcG19cxReRj7CSS1NMiAEK9sGtZKXPW0axNanr6k7pkcl2BSFa/NV2jgti9AFs2LTlkFspRHWYikcHbApCtc8/07+kcZP0eBsIL4BK6YqSBodKsoShahJTnNY+D1WUcnGpuYyRDTY36SxVbhkfQPYNGGsOaADaJHJEBuIfn40/1zvbDPcKjE0NuHMVvlnfDfC3GrOMOtwvxEbYGMuU8NW3kWHUy2k4RQqzpE1EdROr3cnadhXqWFpM/uP+/ZpIY5ZDZ/Oi8q76DDUU7aSBrTDOVJhStjt9T5JwXLMpooJM1cHcWxUjeVddDjbZCUkFTstUY53rdh+VL4UtgYgZZI2Xawy5u8jR1tbF+qSOBmQV9Hhxiy9JyxnyKhh4kRUOS2md4vuy5TebdJvwFRZ4BPiPPLQcwejMutivUQUgb0sSGOGIWpVpn7sdCmk/AYgDlTV6r17lejP5gyjXU2gMGjJrb/cR/kAu9MiUuH5mI1XRTFvl1TBtDdTBmDT0h6qinNFK1REi090dEA/19k49BG2ayL5nPm2A3x/Jl2Eb9a0xVI/pApI96QbEGBHVioRhch4F9lbBhjSZiEWa891QM3aGcqUDKZtt8L8N8LGsDJpYw0IoBQLjdkhjZLFwHCl8BUTsXl4FV9p4VyXNtnknRpjMZ74Ot6wynyhWdF3fbLHMpKGpUGZ7PYWSC7eIuRswfGFt/7iMypUmAZ0p0fDqr064mDJRKcwQyKhZI/ZkTSBPj3lVpphdh5/oFpyhjBfqeGlrzjqVfcNsmnHTQbkC/c2NytTUenSCnZII73FBfZMhzMpY2Ehu+CUi4lMLD8oucwzery9fcn7ihYPSWfX2AoaNEtmswMjOBFhjoquWPpq7kkb2CRlkss84d2+29gYVZVohrRhmk9MvN/OtwjLLgeFSC1yOBMlDnc//mo058omFNXSRPl3vP61/fvFhSgbpobpoqIyfgvEUmQzGaPq2YnfSe6Qk2UTqjorsUYla4IlKjwpVCNQEmPYjvcU9kEOKhE5VzYRPdamrAALql6JpGEPij1ngxLyUBm/BaKPuoqzHKAq18omoE5VlXryOVqDc6TCkwJxEvNQtiLC/GGkunYSVqiPso2Q88E+iRCVlypUVLJpWbaojxoOmSqqPDYz7i7KDtVr87D4PBXMBruU5QqsohZuVzCdPVmQzxZpoDOPSCQN2iXMZWQWkHvkfd+3BdQWR/aL3z/l+gMwiFlFhT+SXJxlBvlOKpazFaKEB3XYXimDbaC4fM++fZA2C8gdalKtba0bsFcaj7WlfozdbRRQYYyKyFbv/+JzI+hn1Q5b3wcNdSBJIz/WaHZkmp6XkeZjCGnzTmNjCJJc1vgYBPlgDMfPsLEb144ckexBwZ1DsQ+HwkOtWaxSXzx9B3kNGLipPCOcbDyODHctE6e2vvmkOmE8zzKQK8/vaz4ndh/W4yzr21OoJhRg3bh4j5HmYwhpc7S1dQkH/O4ad6q8MbpQUSzFQjC48b8t0iAQ16zAMgdxdjc3o9gnTC7R/JtzKBdw5aJPxUJi6dbfTAfzeQZlGBaN4rn3Dh+eXN6vnzGsuJhkAKTh82RY/9uSYaqGBAxz0GuTCvna850IIXliCU8jw6FRPqmzESWW5bwkNgHYVXzR5o4Okg3zw1ij1vMasGlGj8juyjelTSjTcWaUeO6fDxyQErsxjeGQ9b9d0ki3aQAYa+ZUUYNcItDXPwOCUsEydLOdS4MVdMlmkz6SmawdlsiQOJYxTObFbftbdCgq+zQDfY5HrVvw24CgZIiNTMu+vOS6sWKyQ4hsSmY+W3ezo7FERnNdKZ8nKzJs+xdH28RBRZnUDnekMXJlAgNc6fIh2Rdg4TVMFTXL7nNAHHhU2dbdwP5sd0oaxGpOKLBrwOAid+oplCvjY+FqYzEMGbjuErG6nqOlBPmshbNNaMYbw04u1Zo9CmbYmPP5HS/qwKiUcfXqAAJ6FVkawYgKoyPjoT+Irgxc8bPsPrdNQp/UwDiNYJs0qEndfvSo9CqxYpej1hlBtzEP3RA2jQuCQ0KBKF/91110KW8wqFfNHUbmRPfFdl+HbcZAtrOiYQxbGsHJKyGgNLu6oWH11KFDpYWpXc7nN3gL1tadoFzoh4JNg4iuneleIEY9kwzSCdHiay8pocoL+vL9xfSz6YM7j1v6ShS/WYhsBEaxYMot3/0u9dy5kz754ANqOnSInALnCTXD0dbWckf0QxhZRZjaBYIIdDm9enHFP7PhMF199dW0d+/eLo+XcCK1xFwteNiwYWKPBVNja2+7u1KdDpuGcR+8uIR+OmNwp8cFiXPbL75oTYaExXFMMFvRdJY04cCXvxwdO2lSYNTo0dRvwABq+OQTsR1jAoFExxobu5AJx/XlHCH2g848k37O24CysomOfwkrTM3izsCEAY8Qgoh2svAGTh5C+Vg8dNq0abafh8XU51zVmypcGrIogkf+6YEsVpVBrqouIfKNlYNZ2sAgvjvT8zF76J9vv31i7x493pgydKiYUH/mBRcIMghimBtux+MASMWSCcTC7T9v3SqklpvLJ8r2zcS3Pv98MxKOMpb8qQgG6d0aR80JlU5OokWYy6+72RFhgI8++ogJ4z6/Vf3BMarM0vayQgtImVgdmpA2TlQUiNPW3r6Qo8SLr2fzAmrKKVpjbnvArWES4SdOxPTxbFw5MHvS3Lm07o03KMSw+TT8ULaNYJQm3LB4ryDMLbfcQk6A1Wmz9XpQ2lAhwd0ewdKmMa4DI+772540jigxny/XNTdYsQUdt66tWXPc2vUgjpsPcdkNN9C8l1+mc8eNo9uYLxvC4fk2n+qIMJAwl1zxbceEASBlso2vyMg5ARUj+gjbxgKkj/k7OIrZoObmvSwDfVn5YUiMtba3jwk3NLyx/cgRA6UOKK5KBRDk3Msuo2/wCYR4XHHPPbT9rbeolGMImGTe0tFhp7YmZIc0FmHOHzfZFWEAGMuXlrtXv7JyTgDyTrX1J0t1SDD2shx5nq2xQF+EQyeuSydkRMci/NOcxR9iymO/+93q0oaGTivcsr6Hs9E1kC3vg2xM1bz6Ki277TZBFgtw5zDJnL0yXDXhDO9XkUllWIQ586LLheHrFpA0t13jXkpskRgJRmK2fv/JheOmXYObaJ21M+vHwgoO1M53ShpznSlDWkgV7nhVVVXNpK98JfilgTFPAeTZxRJl3VNPCcKkiw/AE9t66NCUpo6OuZS++9JId+XGS5hsCAPAphl9x9nkFrJGwAIgyIPPNZx0n1t7iz/VGs5FzU+nFdJBahz++bVraw/95S/Bkf37k1NA2mCy5DuNjXe3p68bNlLZCPFekluVZEF4Tfw+2agWGSNgLaAENLEmOos0So05bDzkRkXJThNnVT4BsmVYNwH3B7bUd01lIB7yjR99TpNv+j9ZEwaAPZNtbkvmepUZMvqOI61YD+N9F5FhQKqkyXbqpDU1e3dzcyppE0TE9t6XTqOdi2uFvYArGa0sZ51XQYsf/9fOSG62gGryW24LBIyP1QBmZNhx7s5cD2P+73fvDsBWMdMEnXsrV4WBVlbKyGzGi8hOE0ezrfAzW1tgEC9I8nBwKAemli5dSnv27BHSANuTc4LSyGIhWyNYF8pipCEXiLIdeurx1laDz5nBkifQYRauF8UMa9yGRBLSHbeLYkMil0glDQrQs+2PMltbjBStLUapmboASWQTJR4iRjPiNMoRGOQSx2NzDyNOniPbppHS8w1pwwxfTV1tmwpIGtUAYQadctx3paTIYTX6YC6PCtJkTRyrka5n1xB5QKV0sRAzgrP3emQvpwz7pbEp/0gjhgXIaKwziZcYrwlapQsqAUkjwwjWuJyyQRqhQv5mJWlQUvrHzz7DnOEVVhuoCaGqdKgnGYlKQPZyysLoTVBPKqZrZYL0ItuiWI9U0EnJBNx0JD1BGHa3a/g1lrTF1gCIhyBNqYYaHnhmMtSTrGSlhZh73dblPtLcbCidNKyeGjN1LaCcgr0jOmDuD7W2opUUI9zXtGfIPamWNEeOHKHjh/ZxMtB9+gCQmay0AXf5AJdQUc4fNSeSi4GMR8zb2EAQ7NF4h1l+vK/tEyNKxIZCM/BHtSEsoxwCkJms9BuUkIbzR2IrMmMA6JkqihVu1ZjrIXQauE6aYnQZwTJONkaKyCZNrOwzafBUa8G2dNKY4f8FyR7LcixSYOTIkaQaMIK/d3H2ntPzm47SnG+qNzXMuTha1VNu9LXGoMXYk5GoBKCedOSuvGhNzinS6DCCY4Xk2akV9CxBNck2gpGoTKGeDNKInCKNDiNYhnR4ev0huu5i5zVFuYJcIo2hWtLIMoIhabpJ4w+Uq5Y0O3bsYBWQnT0DwiB1IKtiLx6o3sPkzyTQGtzLJdIozzvJsGegmmZMUBO1DiSpnTHJ2U2aJBCFQLlg0+S7agJyhTRiLopKSWMVkmcDTIXAla9CNQEYCJBmYfty0oSckTQ6jOBs4zNYbH3GeM+GImhDzkgaHUZwNqrJGmNS6bNidBXIFdJU+N0IXr/tOEuZAcpUEyC8pwRDOC6AeBZpQq6QxkC0Fnmhw4pWh40VkrsnzaOvRunmCWpVUzLvyYs5yrkx6ZDV09e/tJNW/d97RU5nyBlfFnU1SGBis267BQjz5YEtrsP+9/zmgIif6Mg14T3goSV5L21ud66Q5qR5c1vqjlPkwA6qrdtKG59t5tutgkxjxowR9TbnnHOOIBH2dir9sklS4gQ+9ko0q0lXToD3wZzB1+adkfhQN2nSAaF+bPHxENTObqnfx0TaRZHtb9Kq15oFkVp79OuUSCBVMqkkGv1d2jPW8MXpE/R4TZaESSFttCAnSZMMUC34ERN/SHg1dQf2UfW2OpZKf+yUSpZaA5FAmtumuTsB1eY6mvX7W09ql1WJFNKmW9LIghVsSySTpeKqt71Hw3ph1Tfn3ZQgJBMQVYhhlnS2x5hlC+u7WLaUiW7SqEYyFecUcLMZ1bw1JnYJqAZsPCz8apImQlkstOYUuZSw9B2qtzVhh96sqO7ORxAeaurmCWKMa4Q0kqZgJY0MmOuCh3kLRHyyCKsO5IKkCfhxiR6x6u2BVgw/jpAHksZL5AJpDD8u0WO62tXmv9EUxVHKYf42BmlETkiaMh+uHme62laveSR+re18R7d6coF4V9u8K6rbe/ISOaGeRgzxl3qKc7UtROq6DWFfwUAE1/RUfIG17xzBbk3C3dGoD6ZU6UAukKYchMFEzy/d/je6cfEeUbwdv06Abmz4wtWORzR6rDBUVC7EaQLWRE/U0tTU1NDqDRvogeffpeLWPRxS7ycWA51wfl8tYz1A4GhTe5i6DjeMcP7JMDR7emZ23iCNyAnSWKWeKHMYP3682ADUwWB7lEk0+8nNNHZ4m4iUTubUgKoMcIKrHY+6CBvIubKuZjbIBdIYqR6wSh6uueYa8T+y1VgJ7t6XPhLDqXECr2UCoYyzQtLYj+rkqgkomABfzqgnO0CZAzZAhSozXe0IJSdNpFBSCX4njYE/bubs2VVl8RWBmWC62uEUD3dLGp/AwB8ZnQjJVNmcOXMckcZ0tdemeLhmS8Q7j04ncqI0QkWjnKXGnOCFmBEcTvFwwUSF/U4aA39U9DyhJcZJeiKuDCLVAmYFExX2O2mUzQ4GacockAYBRUqtmixEIgdaKN+RE6TRMdUzE9andrXjEfXDgheqkRPqScciGumAlAWrngjfzLTifK2X6Q1d8DtpxKjT++67j1auXClcZllAHMfuYhfr/2pLygAF4Xb73eUOQDVNmzZNRHpBHGDs2LEi/hIMBl3bOy+//DLZLe7CTGDKbM8AkcS1s/MRvo/TwN1ODNIhxgICQQLBdcZj2Nvp58ZiGQ8//LDYX3pGZtKg4d6mPQNEvCr71AnfS5pESWIF6SB9rFSBXSkEsi1atEg8F2jf/nTGD2DD1Y5HTSHYNDmhnlIhWaoglRQCsV566SWaN2+e+P/RRx+lS21M8sR0K7KnmoBum8ZjGPjjxN1OJ4XggaEmx/LExJpOF2eufXGgmgCOCrcjVqO9rkYn/EwaEaNx624nSqFEiIhwBkPYgasdj1isxn5KK+fgZ5dbaWAPqmxEhpk0DlzteOR9rKZgSQNJk0mFOHC145H3OSg/k8bAHxXRYDH5KoMR7NDVjkc3aTyEMkljZ2HTLTEVEyZ7rnY88r6uxveSRgVpIGkylUXYzGonA0ua/M50+5k0Ymy7CvUESZNpxp5L1QRYbjflK3ytnlQawekkTWxOn2NXOx6RLZH8zUH5Wj2pdLfTtbRkKCC3g7p8VlG+ljSq6mgyVe2ZBeTV5B41+dzO4lfSGKQQwntKE6PZ4N6esRDZkscBPl+TRkUXAqRMr/amlCkEs1fbGovmFjXdpNGPrPJO6ZBJyphtt9moJiDCxMvb0SO+ljSqWlfSVeytP3ksWjao2VKfn9LG15JGhXqKrSCXWtKYpHHrascjbxOXvpY0qvqdUuWdHFbpZUJNvtYL+5U0IhqsKoWQijSS7BkLeZuDKkhD2EihntZn72rHI1LLNk0+GsO+VU+QMqokTarAnukmy7BnAKi4mnyMDPtW0qhaUhmSJlkKAUarGZ+RYc90vqyfppLKgh9JIxZuV2UEp0pUmoVTdSQXWoxh8ztpW+/Jj6RRVnwlVsRNkaiUbM9YCOswhs3h3AZpgm9Jo2JJ5XSSplauPWNBGMOqUTGiD3ZB0gQ/trAYmMo5Om5JZWvx0vhllSGJnC6rHOtASO45bVFDGthHyvugKoxiembD4YImTeWM8aXWimkCJ6+Eu1GshItCqYbjpwi3PNMa3Vb/9sFd79Gzc7u68SgiR66I5BrBnS+vug9K9/I9fiRNqDJhgHOqlXBjZGriEx5bwHRjbUuX1XBhUL8ZfoXunzqQ5txjJH1DRVLGApb1CcqaY5wMFSPEa1eQJviNNCH+AQLlNlddscgEJC5gaq2GC4m0fLGRtpvStDsipAbKF0XVPereb6SZMv4COWPirdVw7cBc4KuW1EBLHxRSI/w+SL/IDht0gd+8p8rJWSx57Bam5xQhNUB3AqmGeYE4n3PrAn4ijcHucNCLBSnMkxohNdAyfsTQGKvxE2lCXq1gotgQ1rIoqk5j2FeSZrRCDyMVFKsm8do6FkUdXa4vwJcTY+5VolGtagK0jL8vL1D15AkUu9uAFpsG6RHekIJRnrgseNKYRVIq3VQt3hNg1gmVkWJ0Sxq1RrAFLQMBTBWl3O3utmliUkBFzikeWtZMMGufC0o9lTtZSkcWtuiRNHrsmv5ibL9BiuEn0ihN6qVCVI+kESvpqoaZgyonxfAVaXQH9zTZM4AeSdNXSJpTSTH8QpqQGdHUCk32jHgPPfknEeArGEkT9CIabEZqI6QeWjLd5lJEBWMIV1TErhKtMN1g5aUEpCn/pKuuxjeSpsITSSNIEyH10JJ/0gXfkMaLDLepMiKkHnm1/LIfSOOJEQxENRrC+TTF3A+k8cQIBur1qSfR6ZAvwwD8QJpA+RBvSpU1ShrxPtFj+aGiCjb3pNHdtlCTLwOpC5c0B7Spps63zJexIwVLGlM1NZI+aKurUY1ClzSfkz4Y5YP92NDqHIUradRX7CWizAzz5zz8QBpP6mga9XpOQCDTQqu5Al/EabyIBkf2azeE8wZekwYZWU/yTh5IGmPEkG6bRgaCXnVVRr1QT327bRoZ8CyFYJYq6PSeum0aSaisPN8bSdOoN04T8MLYVwWvv4lRIHmnQFk3aaQAV58nRrAHMOxO98oFeEkaz+wZD5KVeQUvSRPyjDT6k5XdNo0kVHhlBJuTIlTN2EuGQFn//HC3AU8ljRcdCEBtRPl4kUQYdfvzZzUWTw1hr4xDc5GLMOlDVTdp5CAa8aAoCa72Fn3tuBYiugrLdazI4ilpyAOYhAmTfmiZUaNjsFHB1dOY61TqNILzDl6SJlLvQdehxHW3nULLYCPTS1M6OaLgJI3EdbedQsu4ER1rP3lq0+huHpO87rZTaBlsVDmqH3YzSSG8JE2j7v7m5985ip2sdbd9CR2TIwpKPVWrWafSVzDzamFSCE/Vk86meATX2N2OkHek0WLTmNOwQqQQBROnWb/tOHZh8g5amuVQasIBPoMUBvg8TVjqbB5b+84R7PLankmAsgCfp7knQ1PuCVf4CzEj2Iv4jHaoXjDM0yIsXS0dHrva2nHdJWJ1vsmkCF6RRqwWonKt6ng8v0mophVUILhubAl2U0gRvCKNoXNkmqmawlQgQKyGVRQuzBApgGekKdPUA4SAHts0YSqwmmBzyekQKYBnpNFVH1xoqslCZaxztZIUwDPSGJrc7UJTTRZGx+I1IVIQr/GKNByjUW8EP7P+sJ9UU6XOjgS8lynNpWe8PfOedHRWmpVyfgno1eocn4Ywg1mXHCLJ8Gr2RbB8cP50HNqElhgRyPL0+kNCLWMiB+f3pNs1XpDGECu75skEBT8AdUnPbDgkPEXUQM+5KkAfLjaIitgRuP1v0tWTJ6QZXRj928qADtHauhOi1AMkwXbtJSX0wNSBlDjvh/N7AZY2WANK2nxBzyRNIeKh5w5yCOCokLLo+bIStqki4yhSgx2EEhLM04nsb6V6Jgw6DpDNBkEmczwm3WAoXKD8fOShcps0hSpp7mdJgJMsiMAEsFpaqv96LOnxZbEF2gntywiGIkwxggnmRLWbSWGDJCI/hsDlEDovmFGkBWa6poIkotsazXOoqBnuJk2ewwxtGCQR3aTJc5iJYamphG7S5DlUDAToJk2e40F280lywtYT0sDdVN1didf320wY3SvmgjAcG4rwzdkkEV7M9Ao1NrWF7l/ZEEuqceCKo90ck+hJp/QpomyASCky2/f/voEe4G37nhY63tKBhGWYfIAt9c0h/s6ioF71QKc4wkwkyVn+7M6SOyzgINd8hLxBGoTC15vhcMCsA+ncY7kbGHNWFBmBMUxfiI+WYhyaFSmdcEE/EQy7loNoS1+N4odbiPck/2AWb/M5imvMGF9KN08YQDIBCXvbLz9DHgpDDq4nBWUhngb3EP6OD4HjC/PV2BktjSB83nRChNCtsgKQxxp6iDA8CPK9b5Y5jpR6iCpsfKHM4m0mkzo0YVQ/Jk8pZbNOBH47XCSPvRLFb7WEYheKksy6ryLCOOnih5MULa2t0z6Q0QmqsLGkNDhDPYW3mRjGbV1IyC2N5mhuugsB6nj9B8dFGuKFTUdAFrwmJGuEFCKv0whmr7gXs2icIMLbI9j4pBusVoK8hSgW+g8ykQKJUhQGPvrC+XhIkjDFCs2qSFPNTl6TxoOVVrJFxNw6O0GZGIFofbNBJ8dacEyUPGr+KwRJo3OdShUAMXwlLfM6uGfWq5RTN6SiOyLcDcfIa9Konp5QqCgESWNQN6TCC9KEEYBSnRf6wW8OoI0jQgXYXakaXuSeIpwPquNYxBQEsYYG5DpwSEncsHgvCBMmBXmXbnhDGqCGg1O1T75+aBzfDlRKWGYZkgvShbfoZ41t3+K77uPtOHVDOrxIWMbD4G0xu8ZTUKnvJnlndRQ+s+Ew4hnIuSC6WhATr7yC16SxMIu3+UweA01f6Xp5rKQmsuPPMFk4gBeh2CiRbrJogl9IYyFEsbFf6D8OIjhn1Z2ALI1NbSCJFSG16mTC1A2t8BtpEmHQFy6zlWuJUDc8xf8HUhdxjfZAX4sAAAAASUVORK5CYII=";

var servicioDelivery = "/client/a6eea02fb97941b9.png";

var imgFinal = "/client/8c0c1f16f0e0df5c.png";

/* src/routes/overoles.svelte generated by Svelte v3.38.3 */

const css$5 = {
	code: ".overoles.svelte-1mcx6nd.svelte-1mcx6nd{padding:0px 0px}.overoles.svelte-1mcx6nd.svelte-1mcx6nd{z-index:-1;color:white;padding:0px 0px}.overoles.svelte-1mcx6nd .header.svelte-1mcx6nd{height:90vh;background-color:rgb(255, 255, 255)}.overoles.svelte-1mcx6nd .header .parteUno.svelte-1mcx6nd{width:100%;height:53%;background-color:black;padding-top:20px;text-align:center}.overoles.svelte-1mcx6nd .header .parteUno h1.svelte-1mcx6nd{font-family:'Open Sans', sans-serif;font-weight:700;text-transform:uppercase;font-size:40px}.overoles.svelte-1mcx6nd .header .parteUno h2.svelte-1mcx6nd{margin-top:25px;font-weight:600;text-transform:uppercase}.overoles.svelte-1mcx6nd .header .parteDos.svelte-1mcx6nd{color:black;display:flex;text-align:center}.overoles.svelte-1mcx6nd .header .parteDos img.svelte-1mcx6nd{height:40.8vh;margin-top:-3px}.overoles.svelte-1mcx6nd .header .parteDos h2.svelte-1mcx6nd{margin-left:-40px;text-transform:uppercase;font-size:18px}.overoles.svelte-1mcx6nd .header .parteDos p.svelte-1mcx6nd{margin-left:-40px;font-style:italic;font-weight:lighter}.overoles.svelte-1mcx6nd .header .parteDos button.svelte-1mcx6nd{margin-left:-40px;background-color:black;color:white;font-weight:600;width:127px;height:26px;border:none}.overoles.svelte-1mcx6nd .segundaParte.svelte-1mcx6nd{height:100vh}.overoles.svelte-1mcx6nd .segundaParte .laParteDos.svelte-1mcx6nd{height:65%;background-position:center;background-repeat:no-repeat;background-size:cover;padding-top:20px;text-align:center}.overoles.svelte-1mcx6nd .segundaParte .laParteDos h1.svelte-1mcx6nd{font-family:'Open Sans', sans-serif;font-weight:700;text-transform:uppercase;font-size:25px}.overoles.svelte-1mcx6nd .segundaParte .laParteDos p.svelte-1mcx6nd{font-family:'Open Sans', sans-serif;font-weight:400;text-transform:uppercase;font-size:15px}.overoles.svelte-1mcx6nd .segundaParte .laParteTres.svelte-1mcx6nd{height:105vh;background-color:black;padding:5px;width:97%;margin:auto}.overoles.svelte-1mcx6nd .segundaParte .laParteTres .queOfrecemos.svelte-1mcx6nd{text-align:right;margin-right:20px;text-transform:uppercase;font-weight:400}.overoles.svelte-1mcx6nd .segundaParte .laParteTres .queOfrecemos h2.svelte-1mcx6nd{font-weight:700}.overoles.svelte-1mcx6nd .segundaParte .laParteTres .calidadText.svelte-1mcx6nd{text-align:center;display:flex;width:100%}.overoles.svelte-1mcx6nd .segundaParte .laParteTres .calidadText .tetx.svelte-1mcx6nd{width:70%}.overoles.svelte-1mcx6nd .segundaParte .laParteTres .calidadText .imgEjm.svelte-1mcx6nd{margin-left:30px;width:50%}.overoles.svelte-1mcx6nd .segundaParte .laParteTres .calidadText .imgEjm img.svelte-1mcx6nd{width:150px;height:300px}.overoles.svelte-1mcx6nd .segundaParte .laParteTres .calidadText .imgEjm .imgListo.svelte-1mcx6nd{width:150px;height:300px}.overoles.svelte-1mcx6nd .segundaParte .laParteTres .pantallaDosSegundaParte.svelte-1mcx6nd{text-align:center}.overoles.svelte-1mcx6nd .segundaParte .laParteTres .pantallaDosSegundaParte img.svelte-1mcx6nd{width:350px;margin-top:40px}.overoles.svelte-1mcx6nd .segundaParte .garantias.svelte-1mcx6nd{height:100vh;width:100%;color:black}.overoles.svelte-1mcx6nd .segundaParte .garantias .queOfrecemos.svelte-1mcx6nd{text-align:right;margin-right:20px;text-transform:uppercase;font-weight:400}.overoles.svelte-1mcx6nd .segundaParte .garantias .queOfrecemos h2.svelte-1mcx6nd{font-weight:700}.overoles.svelte-1mcx6nd .segundaParte .garantias .garantiaGratuita.svelte-1mcx6nd{text-align:center}.overoles.svelte-1mcx6nd .segundaParte .garantias .garantiaGratuita h1.svelte-1mcx6nd{font-weight:700;color:chocolate}.overoles.svelte-1mcx6nd .segundaParte .oferta.svelte-1mcx6nd{background-color:black;width:100%;height:72px;color:white;text-align:center;font-family:'Open Sans', sans-serif}.overoles.svelte-1mcx6nd .segundaParte .oferta h1.svelte-1mcx6nd{font-weight:700}.overoles.svelte-1mcx6nd .segundaParte .venta.svelte-1mcx6nd{height:100vh;text-align:center}.overoles.svelte-1mcx6nd .segundaParte .venta .descuento h1.svelte-1mcx6nd{text-transform:uppercase;font-weight:700;font-size:20px;margin:20px 0px}.overoles.svelte-1mcx6nd .segundaParte .venta .accion.svelte-1mcx6nd{margin:auto;text-align:center}.overoles.svelte-1mcx6nd .segundaParte .venta .accion h1.svelte-1mcx6nd{text-transform:uppercase;font-weight:700;font-size:20px;margin:20px 0px}.overoles.svelte-1mcx6nd .segundaParte .venta .accion .muestras.svelte-1mcx6nd{display:flex;justify-content:center;text-align:center}.overoles.svelte-1mcx6nd .segundaParte .venta .accion .muestras img.svelte-1mcx6nd{width:110px;margin:20px 5px}@media screen and (max-width: 503px){.overoles.svelte-1mcx6nd .segundaParte .laParteDos img.svelte-1mcx6nd{width:50%}.overoles.svelte-1mcx6nd .segundaParte .laParteTres .pantallaDosSegundaParte img.svelte-1mcx6nd{width:50%}}@media screen and (max-width: 349px){.overoles.svelte-1mcx6nd .header .parteDos h2.svelte-1mcx6nd{margin-left:-40px;text-transform:uppercase;font-size:10px}.overoles.svelte-1mcx6nd .header .parteDos p.svelte-1mcx6nd{margin-left:-40px;font-size:11px}}@media screen and (max-height: 685px){.overoles.svelte-1mcx6nd .segundaParte .laParteDos img.svelte-1mcx6nd{display:none}.overoles.svelte-1mcx6nd .segundaParte .laParteTres .pantallaDosSegundaParte img.svelte-1mcx6nd{display:none}}",
	map: "{\"version\":3,\"file\":\"overoles.svelte\",\"sources\":[\"overoles.svelte\"],\"sourcesContent\":[\"<script>\\n\\timport VideoHeaderOveroles from './../components/VideoHeaderOveroles.svelte';\\n    import imgParteDos from './../img/overoles/imgParteDos.png'\\n    import fondoVentanaDos from './../img/overoles/fondoParteDos.png'\\n    import muestraDeCrear from './../img/overoles/muestraDeCrear.png'\\n    import muestrasvg from './../img/overoles/overolsvg.png'\\n    import muestrapng from './../img/overoles/overolDisenoPNG.png'\\n    import caracteristicasDeModelo from \\\"./../img/overoles/CaracteristicasModelo.png\\\";\\n    import garatiaGratuita from './../img/overoles/garantiaGratuitaIMG.png'\\n    import bonoPorCompra from './../img/overoles/bonosPorCompra.png'\\n    import servicioDelivery from './../img/overoles/servicioDeliveryIMG.png'\\n    import overolUno from './../img/overoles/venta/overolesUno.png'\\n    import overolDos from './../img/overoles/venta/overolDos.png'\\n    import overolTres from './../img/overoles/venta/overolTres.png'\\n    import chalecoUno from './../img/overoles/venta/chalecoUno.png'\\n    import chalecoDos from './../img/overoles/venta/chalecoDos.png'\\n    import chalecoTres from './../img/overoles/venta/chalecoTres.png'\\n    import imgFinal from './../img/overoles/ultimaParte.png'\\n    import {blur, slide, fade, fly} from 'svelte/transition';\\n\\n    let y;\\n    $: console.log(y);\\n\\n    const cotizar = ()=>{\\n        var cantidad = prompt(\\\"Que Cantidad Desea?\\\");\\n        if (cantidad) {\\n            window.open(`https://api.whatsapp.com/send?phone=+59175270413&text=Cotizar%20Overoles%20Unidades:${cantidad}%20CODIGO%20DE%20DESCUENTO:%20ZaxSdOveroles`)\\n        }\\n    }\\n    const cotizarC = ()=>{\\n        var cantidad = prompt(\\\"Que Cantidad De Chalecos Desea?\\\");\\n        if (cantidad) {\\n            window.open(`https://api.whatsapp.com/send?phone=+59175270413&text=Cotizar%20Overoles%20Unidades%20De%20Chalecos:${cantidad}%20CODIGO%20DE%20DESCUENTO:%20ZaxSdChalecOs`)\\n        }\\n    }\\n\\n</script>\\n\\n<style>\\n    \\n.overoles{\\n    padding: 0px 0px;\\n}\\n.overoles{\\n    z-index: -1;\\n    color: white;\\n    padding: 0px 0px;\\n}\\n.overoles .header{\\n    height: 90vh;\\n    background-color: rgb(255, 255, 255);\\n}\\n.overoles .header .parteUno{\\n    width: 100%;\\n    height: 53%;\\n    background-color: black;\\n    padding-top: 20px;\\n    text-align: center;\\n}\\n.overoles .header .parteUno h1{\\n       font-family: 'Open Sans', sans-serif;\\n       font-weight: 700;\\n       text-transform: uppercase;\\n       font-size: 40px;\\n}\\n.overoles .header .parteUno h2{\\n    margin-top: 25px;\\n    font-weight: 600;\\n    text-transform: uppercase;\\n}\\n.overoles .header .parteDos{\\n    color: black;\\n    display: flex;\\n    text-align: center;\\n}\\n.overoles .header .parteDos img{\\n    height: 40.8vh;\\n    margin-top: -3px;\\n}\\n.overoles .header .parteDos h2{\\n    margin-left: -40px;\\n    text-transform: uppercase;\\n    font-size: 18px;\\n    \\n}\\n.overoles .header .parteDos p{\\n    margin-left: -40px;\\n    font-style: italic;\\n    font-weight: lighter;\\n}\\n.overoles .header .parteDos button{\\n    margin-left: -40px;\\n    background-color: black;\\n    color: white;\\n    font-weight: 600;\\n    width: 127px;\\n    height: 26px;\\n    border: none;\\n}\\n.overoles .segundaParte{\\n    height: 100vh;\\n}\\n.overoles .segundaParte .laParteDos{\\n    height: 65%;\\n    background-position: center;\\n    background-repeat: no-repeat;\\n    background-size: cover;\\n    padding-top: 20px;\\n    text-align: center;\\n}\\n.overoles .segundaParte .laParteDos h1{\\n    font-family: 'Open Sans', sans-serif;\\n       font-weight: 700;\\n       text-transform: uppercase;\\n       font-size: 25px;\\n}\\n.overoles .segundaParte .laParteDos p{\\n    font-family: 'Open Sans', sans-serif;\\n       font-weight: 400;\\n       text-transform: uppercase;\\n       font-size: 15px;\\n}\\n.overoles .segundaParte .laParteTres{\\n    height: 105vh;\\n    background-color: black;\\n    padding: 5px;\\n    width: 97%;\\n    margin: auto;\\n\\n\\n}\\n.overoles .segundaParte .laParteTres .queOfrecemos{\\n    text-align: right;\\n    margin-right: 20px;\\n    text-transform: uppercase;\\n    font-weight: 400;\\n\\n}\\n.overoles .segundaParte .laParteTres .queOfrecemos h2{\\n    font-weight: 700;\\n}\\n.overoles .segundaParte .laParteTres .calidadText{\\n    text-align: center;\\n    display: flex;\\n    width: 100%;\\n}\\n.overoles .segundaParte .laParteTres .calidadText .tetx{\\n    width: 70%;\\n}\\n.overoles .segundaParte .laParteTres .calidadText .imgEjm{\\n margin-left: 30px;\\n width: 50%;\\n}\\n.overoles .segundaParte .laParteTres .calidadText .imgEjm img{\\n    width: 150px;\\n    height: 300px;\\n}\\n.overoles .segundaParte .laParteTres .calidadText .imgEjm .imgListo{\\n    width: 150px;\\n    height: 300px;\\n}\\n.overoles .segundaParte .laParteTres .pantallaDosSegundaParte{\\n    text-align: center;\\n\\n}\\n.overoles .segundaParte .laParteTres .pantallaDosSegundaParte img{\\n    width: 350px;\\n    margin-top: 40px;\\n}\\n.overoles .segundaParte .garantias{\\n    height: 100vh;\\n    width: 100%;\\n    color: black;\\n}\\n.overoles .segundaParte .garantias .queOfrecemos{\\n    text-align: right;\\n    margin-right: 20px;\\n    text-transform: uppercase;\\n    font-weight: 400;\\n}\\n.overoles .segundaParte .garantias .queOfrecemos h2{\\n    font-weight: 700;\\n}\\n.overoles .segundaParte .garantias .garantiaGratuita{\\n    text-align: center;\\n}\\n.overoles .segundaParte .garantias .garantiaGratuita h1{\\n    font-weight: 700;\\n    color: chocolate;\\n}\\n.overoles .segundaParte .oferta{\\n    background-color: black;\\n    width: 100%;\\n    height: 72px;\\n    color: white;\\n    text-align: center;\\n    font-family: 'Open Sans', sans-serif;\\n}\\n.overoles .segundaParte .oferta h1{\\n    font-weight: 700;\\n}\\n.overoles .segundaParte .venta{\\n    height: 100vh;\\n    text-align: center;\\n}\\n.overoles .segundaParte .venta .descuento h1{\\n    text-transform: uppercase;\\n    font-weight: 700;\\n    font-size: 20px;\\n    margin: 20px 0px;\\n}\\n.overoles .segundaParte .venta .accion{\\n    margin: auto;\\n    text-align: center;\\n}\\n.overoles .segundaParte .venta .accion h1{\\n    text-transform: uppercase;\\n    font-weight: 700;\\n    font-size: 20px;\\n    margin: 20px 0px;\\n}\\n.overoles .segundaParte .venta .accion .muestras{\\n    display: flex;\\n    justify-content: center;\\n    text-align: center;\\n}\\n.overoles .segundaParte .venta .accion .muestras img{\\n    width: 110px;\\n    margin: 20px 5px;\\n}\\n@media screen and (max-width: 503px){\\n    .overoles .segundaParte .laParteDos img{\\n        width: 50%;\\n    }\\n    .overoles .segundaParte .laParteTres .pantallaDosSegundaParte img{\\n        width: 50%;\\n        \\n}\\n}\\n@media screen and (max-width: 349px){\\n    .overoles .header .parteDos h2{\\n    margin-left: -40px;\\n    text-transform: uppercase;\\n    font-size: 10px;\\n    \\n}\\n.overoles .header .parteDos p{\\n    margin-left: -40px;\\n   font-size: 11px;\\n}\\n}\\n@media screen and (max-height: 685px){\\n    .overoles .segundaParte .laParteDos img{\\n        display: none;\\n    }\\n    .overoles .segundaParte .laParteTres .pantallaDosSegundaParte img{\\n        display: none;\\n        \\n}\\n}\\n\\n</style>\\n<svelte:window bind:scrollY={y}/>\\n\\n<div class=\\\"overoles\\\">\\n    <div class=\\\"header\\\">\\n        <div class=\\\"parteUno\\\">\\n            <h1>Overoles Industriales</h1>\\n            <h2>Hecho a tu estilo</h2>\\n            <VideoHeaderOveroles></VideoHeaderOveroles>\\n        </div>\\n        <div class=\\\"parteDos\\\">\\n            <div class=\\\"imgParteDos\\\">\\n              <img src=\\\"{imgParteDos}\\\" alt=\\\"Overol Industrial\\\"> \\n            </div>\\n            <div class=\\\"textoParteDos\\\">\\n                {#if y >= 20}\\n                <h2 transition:blur>Hecho a tu estilo</h2>\\n                <p transition:blur>Un overol es mas que <br> una prenda, es una herramienta que optimiza <br> tu trabajo.</p>\\n                <p transition:blur>Hecha con medidas <br> y moldes con el modo de su  rubro exclusivamente para  usted </p>\\n                <button><a href=\\\"overoles/#overoles\\\">PERSONALIZAR</a></button>\\n                {:else}\\n                <h2 style=\\\"visibility: hidden;\\\">Hecho a tu estilo</h2>\\n                <p style=\\\"visibility: hidden;\\\">Un overol es mas que <br> una prenda, es una herramienta que optimiza <br> tu trabajo.</p>\\n                <p style=\\\"visibility: hidden;\\\">Hecha con medidas <br> y moldes con el modo de su  rubro exclusivamente para  usted </p>\\n                <button>PERSONALIZAR</button>\\n                {/if}\\n            </div>\\n        </div>\\n    </div>\\n    <div class=\\\"segundaParte\\\">\\n       <div class=\\\"laParteDos\\\" style=\\\"background-image: url('{fondoVentanaDos}');\\\">\\n         <h1>Podemos <br> Crear?</h1>\\n         <p>Podemos convertir casi todas tus <br> solicitudes en realidad.</p>\\n         <p>Esta vez podemos ofrecerle lo que esta buscando, le gustaria ver nuestros <br> modelos mas recientes?</p>\\n       {#if y >= 450}\\n           <img src=\\\"{muestraDeCrear}\\\" alt=\\\"\\\" transition:slide>\\n       {/if}\\n        \\n       </div>\\n       <div class=\\\"laParteTres\\\">\\n           <div class=\\\"queOfrecemos\\\">\\n            <h2>Que ofrecemos?</h2>    \\n           </div>\\n           <div class=\\\"calidadText\\\">\\n               <div class=\\\"tetx\\\">\\n                <h1>CALIDAD</h1>\\n                <p>Cansado de bordados con material de mala calidad?, de costuras y tela de material barato?</p>\\n                <p>Te ofrecemos lo mejor en materiales!</p>\\n                <p>Con tela de buen material, bordados personalizados con las mejores costuras.</p> \\n               </div>\\n               <div class=\\\"imgEjm\\\">\\n                   {#if y >= 930}\\n                        <img class=\\\"imgListo\\\" src=\\\"{muestrapng}\\\" alt=\\\"\\\" transition:blur={{y:200, duration:1000, delay:500}}>\\n                   {:else}\\n                        <img src=\\\"{muestrasvg}\\\" alt=\\\"\\\" transition:blur={{delay: 100}} >\\n                   {/if}\\n               </div>\\n            </div>\\n            <div class=\\\"pantallaDosSegundaParte\\\">\\n                {#if y >= 1080}\\n                <h1 transition:blur>Diseño</h1>\\n                <p transition:blur>Te ofrecemos el mejor diseño para tu empresa, <br> necesitas overoles para construccion?. <br> Pues te mostramos los diseños</p>\\n                \\n                {/if}\\n                {#if y >= 1400}\\n                 <img src=\\\"{caracteristicasDeModelo}\\\" alt=\\\"\\\" transition:blur>\\n                {/if}\\n              \\n            </div>\\n       </div>\\n       <div class=\\\"garantias\\\">\\n                   <div class=\\\"queOfrecemos\\\">\\n                    <h2>Que ofrecemos?</h2>    \\n                   </div>\\n            <div class=\\\"garantiaGratuita\\\">\\n                <h1>GARANTIA GRATUITA</h1>\\n                {#if y >= 1700}\\n                       <img src=\\\"{garatiaGratuita}\\\" alt=\\\"\\\" transition:fly>\\n                {/if}\\n              \\n            </div>\\n\\n            <div class=\\\"garantiaGratuita\\\">\\n                <h1>BONOS POR COMPRA</h1>\\n                {#if y >= 2100}\\n                <img src=\\\"{bonoPorCompra}\\\" alt=\\\"\\\" transition:fly>\\n                {/if}\\n              \\n            </div>\\n\\n            <div class=\\\"garantiaGratuita\\\">\\n                <h1>Envios a Toda Bolivia</h1>\\n                <img src=\\\"{servicioDelivery}\\\" alt=\\\"\\\">\\n            </div>\\n            <div class=\\\"oferta\\\">\\n                <h1>TENEMOS UN OFERTA ESPECIAL PARA TI</h1>\\n            </div>\\n   \\n            <div class=\\\"venta\\\" id=\\\"overoles\\\">\\n                <div class=\\\"descuento\\\">\\n                    <h1>Accede a un descuento de</h1>\\n                </div>\\n                <div class=\\\"accion\\\">\\n                    <div class=\\\"titulo\\\"><h1>OVEROLES</h1></div>\\n                    <div class=\\\"muestras\\\">\\n                        {#if y >= 3000}\\n                        <img on:click=\\\"{cotizar}\\\" src=\\\"{overolUno}\\\" alt=\\\"\\\" transition:fly={{duration:300, delay: 200}}>\\n                        <img on:click=\\\"{cotizar}\\\" src=\\\"{overolDos}\\\" alt=\\\"\\\" transition:fly={{duration:300, delay: 1000}}>\\n                        <img on:click=\\\"{cotizar}\\\" src=\\\"{overolTres}\\\" alt=\\\"\\\" transition:fly={{duration:300, delay: 700}}>\\n                        {/if}\\n\\n                    </div>\\n                </div>\\n                <div class=\\\"accion\\\">\\n                    <div class=\\\"titulo\\\"><h1>CHALECOS</h1></div>\\n                    <div class=\\\"muestras\\\">\\n                        {#if y >= 3350}\\n                        <img on:click=\\\"{cotizarC}\\\" src=\\\"{chalecoUno}\\\" alt=\\\"\\\" transition:fly={{duration:300, delay: 200}}>\\n                        <img on:click=\\\"{cotizarC}\\\" src=\\\"{chalecoDos}\\\" alt=\\\"\\\" transition:fly={{duration:300, delay: 1000}}>\\n                        <img on:click=\\\"{cotizarC}\\\" src=\\\"{chalecoTres}\\\" alt=\\\"\\\" transition:fly={{duration:300, delay: 700}}>\\n                        {/if}\\n               \\n                </div>\\n                <div class=\\\"imgFinal\\\">\\n                    <img src=\\\"{imgFinal}\\\" alt=\\\"\\\" width=\\\"300\\\">\\n                </div>\\n                <div class=\\\"ropaIndustrial\\\">\\n                    <h2>Ropa Industrial Juanetex</h2>\\n                </div>\\n                </div>\\n            </div>\\n         </div>\\n     \\n    </div>\\n</div>\\n\\n\"],\"names\":[],\"mappings\":\"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\"}"
};

const Overoles = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let y;

	$$result.css.add(css$5);

	{
		console.log(y);
	}

	return `

<div class="${"overoles svelte-1mcx6nd"}"><div class="${"header svelte-1mcx6nd"}"><div class="${"parteUno svelte-1mcx6nd"}"><h1 class="${"svelte-1mcx6nd"}">Overoles Industriales</h1>
            <h2 class="${"svelte-1mcx6nd"}">Hecho a tu estilo</h2>
            ${validate_component(VideoHeaderOveroles, "VideoHeaderOveroles").$$render($$result, {}, {}, {})}</div>
        <div class="${"parteDos svelte-1mcx6nd"}"><div class="${"imgParteDos"}"><img${add_attribute("src", imgParteDos, 0)} alt="${"Overol Industrial"}" class="${"svelte-1mcx6nd"}"></div>
            <div class="${"textoParteDos"}">${`<h2 style="${"visibility: hidden;"}" class="${"svelte-1mcx6nd"}">Hecho a tu estilo</h2>
                <p style="${"visibility: hidden;"}" class="${"svelte-1mcx6nd"}">Un overol es mas que <br> una prenda, es una herramienta que optimiza <br> tu trabajo.</p>
                <p style="${"visibility: hidden;"}" class="${"svelte-1mcx6nd"}">Hecha con medidas <br> y moldes con el modo de su  rubro exclusivamente para  usted </p>
                <button class="${"svelte-1mcx6nd"}">PERSONALIZAR</button>`}</div></div></div>
    <div class="${"segundaParte svelte-1mcx6nd"}"><div class="${"laParteDos svelte-1mcx6nd"}" style="${"background-image: url('" + escape(fondoVentanaDos) + "');"}"><h1 class="${"svelte-1mcx6nd"}">Podemos <br> Crear?</h1>
         <p class="${"svelte-1mcx6nd"}">Podemos convertir casi todas tus <br> solicitudes en realidad.</p>
         <p class="${"svelte-1mcx6nd"}">Esta vez podemos ofrecerle lo que esta buscando, le gustaria ver nuestros <br> modelos mas recientes?</p>
       ${``}</div>
       <div class="${"laParteTres svelte-1mcx6nd"}"><div class="${"queOfrecemos svelte-1mcx6nd"}"><h2 class="${"svelte-1mcx6nd"}">Que ofrecemos?</h2></div>
           <div class="${"calidadText svelte-1mcx6nd"}"><div class="${"tetx svelte-1mcx6nd"}"><h1 class="${"svelte-1mcx6nd"}">CALIDAD</h1>
                <p class="${"svelte-1mcx6nd"}">Cansado de bordados con material de mala calidad?, de costuras y tela de material barato?</p>
                <p class="${"svelte-1mcx6nd"}">Te ofrecemos lo mejor en materiales!</p>
                <p class="${"svelte-1mcx6nd"}">Con tela de buen material, bordados personalizados con las mejores costuras.</p></div>
               <div class="${"imgEjm svelte-1mcx6nd"}">${`<img${add_attribute("src", muestrasvg, 0)} alt="${""}" class="${"svelte-1mcx6nd"}">`}</div></div>
            <div class="${"pantallaDosSegundaParte svelte-1mcx6nd"}">${``}
                ${``}</div></div>
       <div class="${"garantias svelte-1mcx6nd"}"><div class="${"queOfrecemos svelte-1mcx6nd"}"><h2 class="${"svelte-1mcx6nd"}">Que ofrecemos?</h2></div>
            <div class="${"garantiaGratuita svelte-1mcx6nd"}"><h1 class="${"svelte-1mcx6nd"}">GARANTIA GRATUITA</h1>
                ${``}</div>

            <div class="${"garantiaGratuita svelte-1mcx6nd"}"><h1 class="${"svelte-1mcx6nd"}">BONOS POR COMPRA</h1>
                ${``}</div>

            <div class="${"garantiaGratuita svelte-1mcx6nd"}"><h1 class="${"svelte-1mcx6nd"}">Envios a Toda Bolivia</h1>
                <img${add_attribute("src", servicioDelivery, 0)} alt="${""}" class="${"svelte-1mcx6nd"}"></div>
            <div class="${"oferta svelte-1mcx6nd"}"><h1 class="${"svelte-1mcx6nd"}">TENEMOS UN OFERTA ESPECIAL PARA TI</h1></div>
   
            <div class="${"venta svelte-1mcx6nd"}" id="${"overoles"}"><div class="${"descuento"}"><h1 class="${"svelte-1mcx6nd"}">Accede a un descuento de</h1></div>
                <div class="${"accion svelte-1mcx6nd"}"><div class="${"titulo"}"><h1 class="${"svelte-1mcx6nd"}">OVEROLES</h1></div>
                    <div class="${"muestras svelte-1mcx6nd"}">${``}</div></div>
                <div class="${"accion svelte-1mcx6nd"}"><div class="${"titulo"}"><h1 class="${"svelte-1mcx6nd"}">CHALECOS</h1></div>
                    <div class="${"muestras svelte-1mcx6nd"}">${``}</div>
                <div class="${"imgFinal"}"><img${add_attribute("src", imgFinal, 0)} alt="${""}" width="${"300"}" class="${"svelte-1mcx6nd"}"></div>
                <div class="${"ropaIndustrial"}"><h2 class="${"svelte-1mcx6nd"}">Ropa Industrial Juanetex</h2></div></div></div></div></div></div>`;
});

var component_2 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': Overoles
});

/* src/routes/modelos.svelte generated by Svelte v3.38.3 */

const Modelos = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return ``;
});

var component_3 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': Modelos
});

/* src/routes/about.svelte generated by Svelte v3.38.3 */

const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `${($$result.head += `${($$result.title = `<title>About</title>`, "")}`, "")}

<h1>About this site</h1>

<p>This is the &#39;about&#39; page. There&#39;s not much here.</p>`;
});

var component_4 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': About
});

/* src/routes/blog/index.svelte generated by Svelte v3.38.3 */

const css$4 = {
	code: "ul.svelte-1frg2tf{margin:0 0 1em 0;line-height:1.5}",
	map: "{\"version\":3,\"file\":\"index.svelte\",\"sources\":[\"index.svelte\"],\"sourcesContent\":[\"<script context=\\\"module\\\">\\n\\texport function preload() {\\n\\t\\treturn this.fetch(`blog.json`).then(r => r.json()).then(posts => {\\n\\t\\t\\treturn { posts };\\n\\t\\t});\\n\\t}\\n</script>\\n\\n<script>\\n\\texport let posts;\\n</script>\\n\\n<style>\\n\\tul {\\n\\t\\tmargin: 0 0 1em 0;\\n\\t\\tline-height: 1.5;\\n\\t}\\n</style>\\n\\n<svelte:head>\\n\\t<title>Blog</title>\\n</svelte:head>\\n\\n<h1>Recent posts</h1>\\n\\n<ul>\\n\\t{#each posts as post}\\n\\t\\t<!-- we're using the non-standard `rel=prefetch` attribute to\\n\\t\\t\\t\\ttell Sapper to load the data for the page as soon as\\n\\t\\t\\t\\tthe user hovers over the link or taps it, instead of\\n\\t\\t\\t\\twaiting for the 'click' event -->\\n\\t\\t<li><a rel=\\\"prefetch\\\" href=\\\"blog/{post.slug}\\\">{post.title}</a></li>\\n\\t{/each}\\n</ul>\\n\"],\"names\":[],\"mappings\":\"AAaC,EAAE,eAAC,CAAC,AACH,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CACjB,WAAW,CAAE,GAAG,AACjB,CAAC\"}"
};

function preload$1() {
	return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
		return { posts };
	});
}

const Blog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { posts } = $$props;
	if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0) $$bindings.posts(posts);
	$$result.css.add(css$4);

	return `${($$result.head += `${($$result.title = `<title>Blog</title>`, "")}`, "")}

<h1>Recent posts</h1>

<ul class="${"svelte-1frg2tf"}">${each(posts, post => `
		<li><a rel="${"prefetch"}" href="${"blog/" + escape(post.slug)}">${escape(post.title)}</a></li>`)}</ul>`;
});

var component_5 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': Blog,
	preload: preload$1
});

/* src/routes/blog/[slug].svelte generated by Svelte v3.38.3 */

const css$3 = {
	code: ".content.svelte-emm3f3 h2{font-size:1.4em;font-weight:500}.content.svelte-emm3f3 pre{background-color:#f9f9f9;box-shadow:inset 1px 1px 5px rgba(0, 0, 0, 0.05);padding:0.5em;border-radius:2px;overflow-x:auto}.content.svelte-emm3f3 pre code{background-color:transparent;padding:0}.content.svelte-emm3f3 ul{line-height:1.5}.content.svelte-emm3f3 li{margin:0 0 0.5em 0}",
	map: "{\"version\":3,\"file\":\"[slug].svelte\",\"sources\":[\"[slug].svelte\"],\"sourcesContent\":[\"<script context=\\\"module\\\">\\n\\texport async function preload({ params }) {\\n\\t\\t// the `slug` parameter is available because\\n\\t\\t// this file is called [slug].svelte\\n\\t\\tconst res = await this.fetch(`blog/${params.slug}.json`);\\n\\t\\tconst data = await res.json();\\n\\n\\t\\tif (res.status === 200) {\\n\\t\\t\\treturn { post: data };\\n\\t\\t} else {\\n\\t\\t\\tthis.error(res.status, data.message);\\n\\t\\t}\\n\\t}\\n</script>\\n\\n<script>\\n\\texport let post;\\n</script>\\n\\n<style>\\n\\t/*\\n\\t\\tBy default, CSS is locally scoped to the component,\\n\\t\\tand any unused styles are dead-code-eliminated.\\n\\t\\tIn this page, Svelte can't know which elements are\\n\\t\\tgoing to appear inside the {{{post.html}}} block,\\n\\t\\tso we have to use the :global(...) modifier to target\\n\\t\\tall elements inside .content\\n\\t*/\\n\\t.content :global(h2) {\\n\\t\\tfont-size: 1.4em;\\n\\t\\tfont-weight: 500;\\n\\t}\\n\\n\\t.content :global(pre) {\\n\\t\\tbackground-color: #f9f9f9;\\n\\t\\tbox-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);\\n\\t\\tpadding: 0.5em;\\n\\t\\tborder-radius: 2px;\\n\\t\\toverflow-x: auto;\\n\\t}\\n\\n\\t.content :global(pre) :global(code) {\\n\\t\\tbackground-color: transparent;\\n\\t\\tpadding: 0;\\n\\t}\\n\\n\\t.content :global(ul) {\\n\\t\\tline-height: 1.5;\\n\\t}\\n\\n\\t.content :global(li) {\\n\\t\\tmargin: 0 0 0.5em 0;\\n\\t}\\n</style>\\n\\n<svelte:head>\\n\\t<title>{post.title}</title>\\n</svelte:head>\\n\\n<h1>{post.title}</h1>\\n\\n<div class=\\\"content\\\">\\n\\t{@html post.html}\\n</div>\\n\"],\"names\":[],\"mappings\":\"AA4BC,sBAAQ,CAAC,AAAQ,EAAE,AAAE,CAAC,AACrB,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,GAAG,AACjB,CAAC,AAED,sBAAQ,CAAC,AAAQ,GAAG,AAAE,CAAC,AACtB,gBAAgB,CAAE,OAAO,CACzB,UAAU,CAAE,KAAK,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CACjD,OAAO,CAAE,KAAK,CACd,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,IAAI,AACjB,CAAC,AAED,sBAAQ,CAAC,AAAQ,GAAG,AAAC,CAAC,AAAQ,IAAI,AAAE,CAAC,AACpC,gBAAgB,CAAE,WAAW,CAC7B,OAAO,CAAE,CAAC,AACX,CAAC,AAED,sBAAQ,CAAC,AAAQ,EAAE,AAAE,CAAC,AACrB,WAAW,CAAE,GAAG,AACjB,CAAC,AAED,sBAAQ,CAAC,AAAQ,EAAE,AAAE,CAAC,AACrB,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,AACpB,CAAC\"}"
};

async function preload({ params }) {
	// the `slug` parameter is available because
	// this file is called [slug].svelte
	const res = await this.fetch(`blog/${params.slug}.json`);

	const data = await res.json();

	if (res.status === 200) {
		return { post: data };
	} else {
		this.error(res.status, data.message);
	}
}

const U5Bslugu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { post } = $$props;
	if ($$props.post === void 0 && $$bindings.post && post !== void 0) $$bindings.post(post);
	$$result.css.add(css$3);

	return `${($$result.head += `${($$result.title = `<title>${escape(post.title)}</title>`, "")}`, "")}

<h1>${escape(post.title)}</h1>

<div class="${"content svelte-emm3f3"}"><!-- HTML_TAG_START -->${post.html}<!-- HTML_TAG_END --></div>`;
});

var component_6 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': U5Bslugu5D,
	preload: preload
});

var logoJuanetex = "/client/8da3a8caafd6cc05.png";

/* src/components/Nav.svelte generated by Svelte v3.38.3 */

const css$2 = {
	code: "@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,600;0,800;1,300;1,600&display=swap');header.svelte-1le73bq.svelte-1le73bq{background-image:url('hero.jpg');width:100%;background-size:cover;background-position:center;position:relative;overflow:hidden}header.svelte-1le73bq nav.svelte-1le73bq{height:70px;background-color:#000;display:flex;justify-content:space-between}.icono.svelte-1le73bq.svelte-1le73bq{display:none}.enlaces.svelte-1le73bq.svelte-1le73bq{display:flex;height:100%;width:50%;justify-content:space-around;align-items:center}.enlaces.svelte-1le73bq a.svelte-1le73bq{border-top:1px solid transparent;border-bottom:1px solid transparent;padding:4px 0px;transition:0.7s ease-out;color:#fff;text-decoration:none;font-family:'Open Sans', sans-serif;font-weight:bold;font-size:10px;margin:0px 10px}.enlaces.svelte-1le73bq a.svelte-1le73bq:hover,.active.svelte-1le73bq.svelte-1le73bq{border-top:1px solid coral;border-bottom:1px solid coral}nav.svelte-1le73bq .logo.svelte-1le73bq{height:100%;background-color:#fff;margin-left:40px}nav.svelte-1le73bq .logo img.svelte-1le73bq{object-fit:cover;height:inherit}header.svelte-1le73bq .textos.svelte-1le73bq{text-align:center;color:rgb(0, 0, 0);margin-top:150px}[aria-current].svelte-1le73bq.svelte-1le73bq{position:relative;display:inline-block}[aria-current].svelte-1le73bq.svelte-1le73bq::after{position:absolute;content:'';width:calc(100% - 1em);height:2px;background-color:rgb(255,62,0);display:block;bottom:-1px}@media screen and (max-width: 750px){.icono.svelte-1le73bq.svelte-1le73bq{display:flex;justify-content:center;height:30px;align-items:center;color:rgb(255, 255, 255);padding:20px;z-index:100;cursor:pointer;margin-right:15px;background-color:transparent;font-size:30px}.enlaces.svelte-1le73bq.svelte-1le73bq{z-index:2;position:fixed;height:100vh;right:0px;width:100%;flex-direction:column;transition:all 1s ease;background:#334d50;background:-webkit-linear-gradient(to right, #cbcaa5, #334d50);background:linear-gradient(to right, #cbcaa5, #334d50)}.enlaces.svelte-1le73bq a.svelte-1le73bq{font-weight:bold;font-size:30px}.uno.svelte-1le73bq.svelte-1le73bq{-webkit-clip-path:circle(0% at 100% 0%);clip-path:circle(0% at 100% 0%)}.dos.svelte-1le73bq.svelte-1le73bq{-webkit-clip-path:circle(150% at 100% 0%);clip-path:circle(150% at 100% 0%)}}@media screen and (max-width: 400px){nav.svelte-1le73bq .logo.svelte-1le73bq{margin-left:20px}.icono.svelte-1le73bq.svelte-1le73bq{margin-right:10px}}",
	map: "{\"version\":3,\"file\":\"Nav.svelte\",\"sources\":[\"Nav.svelte\"],\"sourcesContent\":[\"<script>\\n\\texport let segment;\\n\\timport logoJuanetex from './../img/perfilJuanetex.png';\\n\\n\\tvar contador = 0\\n\\tvar menu = \\\"uno\\\";\\n\\tconst menuClick = ()=>{\\n      if (contador == 0) {\\n\\t\\t  menu = \\\"dos\\\"\\n\\t\\t  contador = 1;\\n\\t  } else{\\n          menu = \\\"uno\\\"\\n\\t\\t  contador = 0;\\n\\t  }\\n\\t}\\n\\n\\tconst menuBack = ()=>{\\n\\t\\tmenu = \\\"uno\\\"\\n\\t}\\n\\n\\n</script>\\n\\n<style>\\n\\t@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,600;0,800;1,300;1,600&display=swap');\\n\\n\\theader{\\n\\t\\tbackground-image: url('hero.jpg');\\n\\t\\twidth: 100%;\\n\\t\\tbackground-size: cover;\\n\\t\\tbackground-position: center;\\n\\t\\tposition: relative;\\n\\t\\toverflow: hidden;\\n\\t}\\n\\theader nav {\\n\\t\\theight: 70px;\\n\\t\\tbackground-color: #000;\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: space-between;\\n\\n\\t}\\n\\t.icono{\\n\\t\\tdisplay: none;\\n\\t}\\n\\t.enlaces{\\n\\t\\tdisplay: flex;\\n\\t\\theight: 100%;\\n\\t\\twidth: 50%;\\n\\t\\tjustify-content: space-around;\\n\\t\\talign-items: center;\\n\\n\\t}\\n\\t.enlaces a{\\n\\t\\tborder-top: 1px solid transparent;\\n\\t\\tborder-bottom: 1px solid transparent;\\n\\t\\tpadding: 4px 0px;\\n\\t\\ttransition: 0.7s ease-out;\\n\\t\\tcolor: #fff;\\n\\t\\ttext-decoration: none;\\n\\t\\tfont-family: 'Open Sans', sans-serif;\\n\\t\\tfont-weight: bold;\\n\\t\\tfont-size: 10px;\\n\\t\\tmargin: 0px 10px;\\n\\t\\t\\n\\t}\\n\\t.enlaces a:hover, .active{\\n\\t\\tborder-top: 1px solid coral;\\n\\t\\tborder-bottom: 1px solid coral;\\n\\t}\\n\\tnav .logo{\\n\\t\\theight: 100%;\\n\\t\\tbackground-color: #fff;\\n\\t\\tmargin-left: 40px;\\n\\t}\\n\\tnav .logo img{\\n\\t\\tobject-fit: cover;\\n\\t\\theight: inherit;\\n\\t}\\n\\theader .textos{\\n\\t\\ttext-align: center;\\n\\t\\tcolor: rgb(0, 0, 0);\\n\\t\\tmargin-top: 150px;\\n\\t}\\n\\theader.textos h1{\\n\\t\\tfont-size: 100px;\\n\\t\\tletter-spacing: 3px;\\n\\t\\tfont-weight: 600px;\\n\\t\\tmargin-bottom: 10px;\\n\\t}\\n\\theader.textos h2{\\n\\t\\tfont-size: 30px;\\n\\t\\tfont-weight: 600px;\\n\\t}\\n\\t/* clearfix */\\n\\t[aria-current] {\\n\\t\\tposition: relative;\\n\\t\\tdisplay: inline-block;\\n\\t}\\n\\n\\t[aria-current]::after {\\n\\t\\tposition: absolute;\\n\\t\\tcontent: '';\\n\\t\\twidth: calc(100% - 1em);\\n\\t\\theight: 2px;\\n\\t\\tbackground-color: rgb(255,62,0);\\n\\t\\tdisplay: block;\\n\\t\\tbottom: -1px;\\n\\t}\\n\\t@media screen and (max-width: 750px){\\n\\t\\t.icono{\\n\\t\\t\\tdisplay: flex;\\n\\t\\t\\tjustify-content: center;\\n\\t\\t\\theight: 30px;\\n\\t\\t\\talign-items: center;\\n\\t\\t\\tcolor: rgb(255, 255, 255);\\n\\t\\t\\tpadding: 20px;\\n\\t\\t\\tz-index: 100;\\n\\t\\t\\tcursor: pointer;\\n\\t\\t\\tmargin-right: 15px;\\n\\t\\t\\tbackground-color: transparent;\\n\\t\\t\\tfont-size: 30px;\\n\\t\\t}\\n\\t\\t.enlaces{\\n\\t\\t\\tz-index: 2;\\n\\t\\t\\tposition: fixed;\\n\\t\\t\\theight: 100vh;\\n\\t\\t\\tright: 0px;\\n\\t\\t\\twidth: 100%;\\n\\t\\t\\tflex-direction: column;\\n\\t\\t\\ttransition: all 1s ease;\\n\\t\\t\\t/*Exportamos el gradiente de fondo de la pagina UIGRADIENTS.COM*/\\n\\t\\t\\tbackground: #334d50;  /* fallback for old browsers */\\n            background: -webkit-linear-gradient(to right, #cbcaa5, #334d50);  /* Chrome 10-25, Safari 5.1-6 */\\n            background: linear-gradient(to right, #cbcaa5, #334d50); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\\n            \\n\\t\\t}\\n\\t\\t.enlaces a{\\n\\t\\t\\tfont-weight: bold;\\n\\t\\tfont-size: 30px;\\n\\t\\t}\\n\\t\\t.uno{\\n\\t\\t\\t-webkit-clip-path: circle(0% at 100% 0%);\\n\\t\\t\\tclip-path: circle(0% at 100% 0%);\\n\\t\\t\\n\\t\\t}\\n\\t\\t.dos{\\n\\t\\t\\t-webkit-clip-path: circle(150% at 100% 0%);\\n\\t\\t\\tclip-path: circle(150% at 100% 0%);\\n\\t\\t}\\n\\t}\\n\\t@media screen and (max-width: 400px){\\n\\t\\tnav .logo{\\n\\t\\t\\tmargin-left: 20px;\\n\\t\\t}\\n\\t\\t.icono{\\n\\t\\t\\tmargin-right: 10px;\\n\\n\\t\\t}\\n\\t}\\n\\n</style>\\n<!-- Menu Responsive bonito -->\\n<header>\\n\\t<nav>\\n\\t\\t<div class=\\\"logo\\\">\\n\\t\\t\\t<img src=\\\"{logoJuanetex}\\\" alt=\\\"\\\">\\n\\t\\t</div>\\n\\t\\t<div class=\\\"icono\\\" on:click=\\\"{menuClick}\\\">\\n\\t\\t\\t<!-- los numero indican que es un menu hamburguesa -->\\n\\t\\t\\t<span>&#9776;</span>\\n\\n\\t\\t</div>\\n\\t\\t<div class=\\\"enlaces {menu}\\\">\\n\\t\\t    <a on:click=\\\"{menuBack}\\\" class=\\\"active\\\" aria-current=\\\"{segment === undefined ? 'page' : undefined}\\\" href=\\\".\\\">Inicio</a>\\n\\t\\t\\t<a on:click=\\\"{menuBack}\\\" aria-current=\\\"{segment === 'overoles' ? 'page' : undefined}\\\" href=\\\"overoles\\\">Overoles</a>\\n\\t\\t\\t<a on:click=\\\"{menuBack}\\\" aria-current=\\\"{segment === 'atumedida' ? 'page' : undefined}\\\" href=\\\"atumedida\\\">Tu Medida</a>\\n\\t\\t\\t<a on:click=\\\"{menuBack}\\\" aria-current=\\\"{segment === 'modelos' ? 'page' : undefined}\\\" href=\\\"modelos\\\">Modelos</a>\\n\\t\\t\\t\\t\\n\\t\\t\\t<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches\\n\\t\\t\\t\\t the blog data when we hover over the link or tap it on a touchscreen -->\\n\\t\\t\\t\\t <a on:click=\\\"{menuBack}\\\" rel=prefetch aria-current=\\\"{segment === 'blog' ? 'page' : undefined}\\\" href=\\\"blog\\\">Venta</a>\\n\\t\\t\\t<a on:click=\\\"{menuBack}\\\" aria-current=\\\"{segment === 'about' ? 'page' : undefined}\\\" href=\\\"about\\\">Informacion</a>\\n\\n        </div>\\n\\t</nav>\\t\\n\\n</header>\\n\"],\"names\":[],\"mappings\":\"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\"}"
};

const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { segment } = $$props;
	var menu = "uno";

	if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0) $$bindings.segment(segment);
	$$result.css.add(css$2);

	return `
<header class="${"svelte-1le73bq"}"><nav class="${"svelte-1le73bq"}"><div class="${"logo svelte-1le73bq"}"><img${add_attribute("src", logoJuanetex, 0)} alt="${""}" class="${"svelte-1le73bq"}"></div>
		<div class="${"icono svelte-1le73bq"}">
			<span>☰</span></div>
		<div class="${"enlaces " + escape(menu) + " svelte-1le73bq"}"><a class="${"active svelte-1le73bq"}"${add_attribute("aria-current", segment === undefined ? "page" : undefined, 0)} href="${"."}">Inicio</a>
			<a${add_attribute("aria-current", segment === "overoles" ? "page" : undefined, 0)} href="${"overoles"}" class="${"svelte-1le73bq"}">Overoles</a>
			<a${add_attribute("aria-current", segment === "atumedida" ? "page" : undefined, 0)} href="${"atumedida"}" class="${"svelte-1le73bq"}">Tu Medida</a>
			<a${add_attribute("aria-current", segment === "modelos" ? "page" : undefined, 0)} href="${"modelos"}" class="${"svelte-1le73bq"}">Modelos</a>
				
			
				 <a rel="${"prefetch"}"${add_attribute("aria-current", segment === "blog" ? "page" : undefined, 0)} href="${"blog"}" class="${"svelte-1le73bq"}">Venta</a>
			<a${add_attribute("aria-current", segment === "about" ? "page" : undefined, 0)} href="${"about"}" class="${"svelte-1le73bq"}">Informacion</a></div></nav></header>`;
});

/* src/routes/_layout.svelte generated by Svelte v3.38.3 */

const css$1 = {
	code: "@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,600;0,800;1,300;1,600&display=swap');main.svelte-e4gkpx{position:relative;max-width:56em;background-color:white;margin:0 auto;box-sizing:border-box}",
	map: "{\"version\":3,\"file\":\"_layout.svelte\",\"sources\":[\"_layout.svelte\"],\"sourcesContent\":[\"<script>\\n\\timport Nav from '../components/Nav.svelte';\\n\\n\\texport let segment;\\n</script>\\n\\n<style>\\n\\t@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,600;0,800;1,300;1,600&display=swap');\\n\\n\\tmain {\\n\\t\\tposition: relative;\\n\\t\\tmax-width: 56em;\\n\\t\\tbackground-color: white;\\n\\t\\tmargin: 0 auto;\\n\\t\\tbox-sizing: border-box;\\n\\t}\\n</style>\\n\\n<Nav {segment}/>\\n\\n<main>\\n\\t<slot></slot>\\n</main>\"],\"names\":[],\"mappings\":\"AAOC,QAAQ,IAAI,mGAAmG,CAAC,CAAC,AAEjH,IAAI,cAAC,CAAC,AACL,QAAQ,CAAE,QAAQ,CAClB,SAAS,CAAE,IAAI,CACf,gBAAgB,CAAE,KAAK,CACvB,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,UAAU,CAAE,UAAU,AACvB,CAAC\"}"
};

const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { segment } = $$props;
	if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0) $$bindings.segment(segment);
	$$result.css.add(css$1);

	return `${validate_component(Nav, "Nav").$$render($$result, { segment }, {}, {})}

<main class="${"svelte-e4gkpx"}">${slots.default ? slots.default({}) : ``}</main>`;
});

var root_comp = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': Layout
});

/* src/routes/_error.svelte generated by Svelte v3.38.3 */

const css = {
	code: "h1.svelte-8od9u6,p.svelte-8od9u6{margin:0 auto}h1.svelte-8od9u6{font-size:2.8em;font-weight:700;margin:0 0 0.5em 0}p.svelte-8od9u6{margin:1em auto}@media(min-width: 480px){h1.svelte-8od9u6{font-size:4em}}",
	map: "{\"version\":3,\"file\":\"_error.svelte\",\"sources\":[\"_error.svelte\"],\"sourcesContent\":[\"<script>\\n\\texport let status;\\n\\texport let error;\\n\\n\\tconst dev = undefined === 'development';\\n</script>\\n\\n<style>\\n\\th1, p {\\n\\t\\tmargin: 0 auto;\\n\\t}\\n\\n\\th1 {\\n\\t\\tfont-size: 2.8em;\\n\\t\\tfont-weight: 700;\\n\\t\\tmargin: 0 0 0.5em 0;\\n\\t}\\n\\n\\tp {\\n\\t\\tmargin: 1em auto;\\n\\t}\\n\\n\\t@media (min-width: 480px) {\\n\\t\\th1 {\\n\\t\\t\\tfont-size: 4em;\\n\\t\\t}\\n\\t}\\n</style>\\n\\n<svelte:head>\\n\\t<title>{status}</title>\\n</svelte:head>\\n\\n<h1>{status}</h1>\\n\\n<p>{error.message}</p>\\n\\n{#if dev && error.stack}\\n\\t<pre>{error.stack}</pre>\\n{/if}\\n\"],\"names\":[],\"mappings\":\"AAQC,gBAAE,CAAE,CAAC,cAAC,CAAC,AACN,MAAM,CAAE,CAAC,CAAC,IAAI,AACf,CAAC,AAED,EAAE,cAAC,CAAC,AACH,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,GAAG,CAChB,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,AACpB,CAAC,AAED,CAAC,cAAC,CAAC,AACF,MAAM,CAAE,GAAG,CAAC,IAAI,AACjB,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAC1B,EAAE,cAAC,CAAC,AACH,SAAS,CAAE,GAAG,AACf,CAAC,AACF,CAAC\"}"
};

const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { status } = $$props;
	let { error } = $$props;
	if ($$props.status === void 0 && $$bindings.status && status !== void 0) $$bindings.status(status);
	if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
	$$result.css.add(css);

	return `${($$result.head += `${($$result.title = `<title>${escape(status)}</title>`, "")}`, "")}

<h1 class="${"svelte-8od9u6"}">${escape(status)}</h1>

<p class="${"svelte-8od9u6"}">${escape(error.message)}</p>

${``}`;
});

// This file is generated by Sapper — do not edit it!

const d = decodeURIComponent;

const manifest = {
	server_routes: [
		{
			// blog/index.json.js
			pattern: /^\/blog\.json$/,
			handlers: route_0,
			params: () => ({})
		},

		{
			// blog/[slug].json.js
			pattern: /^\/blog\/([^/]+?)\.json$/,
			handlers: route_1,
			params: match => ({ slug: d(match[1]) })
		}
	],

	pages: [
		{
			// index.svelte
			pattern: /^\/$/,
			parts: [
				{ name: "index", file: "index.svelte", component: component_0 }
			]
		},

		{
			// atumedida.svelte
			pattern: /^\/atumedida\/?$/,
			parts: [
				{ name: "atumedida", file: "atumedida.svelte", component: component_1 }
			]
		},

		{
			// overoles.svelte
			pattern: /^\/overoles\/?$/,
			parts: [
				{ name: "overoles", file: "overoles.svelte", component: component_2 }
			]
		},

		{
			// modelos.svelte
			pattern: /^\/modelos\/?$/,
			parts: [
				{ name: "modelos", file: "modelos.svelte", component: component_3 }
			]
		},

		{
			// about.svelte
			pattern: /^\/about\/?$/,
			parts: [
				{ name: "about", file: "about.svelte", component: component_4 }
			]
		},

		{
			// blog/index.svelte
			pattern: /^\/blog\/?$/,
			parts: [
				{ name: "blog", file: "blog/index.svelte", component: component_5 }
			]
		},

		{
			// blog/[slug].svelte
			pattern: /^\/blog\/([^/]+?)\/?$/,
			parts: [
				null,
				{ name: "blog_$slug", file: "blog/[slug].svelte", component: component_6, params: match => ({ slug: d(match[1]) }) }
			]
		}
	],

	root_comp,
	error: Error$1
};

const build_dir = "__sapper__/build";

const subscriber_queue = [];
/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 * @param {*=}value initial value
 * @param {StartStopNotifier=}start start and stop notifications for subscriptions
 */
function writable(value, start = noop$1) {
    let stop;
    const subscribers = [];
    function set(new_value) {
        if (safe_not_equal(value, new_value)) {
            value = new_value;
            if (stop) { // store is ready
                const run_queue = !subscriber_queue.length;
                for (let i = 0; i < subscribers.length; i += 1) {
                    const s = subscribers[i];
                    s[1]();
                    subscriber_queue.push(s, value);
                }
                if (run_queue) {
                    for (let i = 0; i < subscriber_queue.length; i += 2) {
                        subscriber_queue[i][0](subscriber_queue[i + 1]);
                    }
                    subscriber_queue.length = 0;
                }
            }
        }
    }
    function update(fn) {
        set(fn(value));
    }
    function subscribe(run, invalidate = noop$1) {
        const subscriber = [run, invalidate];
        subscribers.push(subscriber);
        if (subscribers.length === 1) {
            stop = start(set) || noop$1;
        }
        run(value);
        return () => {
            const index = subscribers.indexOf(subscriber);
            if (index !== -1) {
                subscribers.splice(index, 1);
            }
            if (subscribers.length === 0) {
                stop();
                stop = null;
            }
        };
    }
    return { set, update, subscribe };
}

const CONTEXT_KEY = {};

/* src/node_modules/@sapper/internal/App.svelte generated by Svelte v3.38.3 */

const App = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { stores } = $$props;
	let { error } = $$props;
	let { status } = $$props;
	let { segments } = $$props;
	let { level0 } = $$props;
	let { level1 = null } = $$props;
	let { notify } = $$props;
	afterUpdate(notify);
	setContext(CONTEXT_KEY, stores);
	if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0) $$bindings.stores(stores);
	if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
	if ($$props.status === void 0 && $$bindings.status && status !== void 0) $$bindings.status(status);
	if ($$props.segments === void 0 && $$bindings.segments && segments !== void 0) $$bindings.segments(segments);
	if ($$props.level0 === void 0 && $$bindings.level0 && level0 !== void 0) $$bindings.level0(level0);
	if ($$props.level1 === void 0 && $$bindings.level1 && level1 !== void 0) $$bindings.level1(level1);
	if ($$props.notify === void 0 && $$bindings.notify && notify !== void 0) $$bindings.notify(notify);

	return `


${validate_component(Layout, "Layout").$$render($$result, Object.assign({ segment: segments[0] }, level0.props), {}, {
		default: () => `${error
		? `${validate_component(Error$1, "Error").$$render($$result, { error, status }, {}, {})}`
		: `${validate_component(level1.component || missing_component, "svelte:component").$$render($$result, Object.assign(level1.props), {}, {})}`}`
	})}`;
});

/**
 * @param typeMap [Object] Map of MIME type -> Array[extensions]
 * @param ...
 */
function Mime() {
  this._types = Object.create(null);
  this._extensions = Object.create(null);

  for (var i = 0; i < arguments.length; i++) {
    this.define(arguments[i]);
  }

  this.define = this.define.bind(this);
  this.getType = this.getType.bind(this);
  this.getExtension = this.getExtension.bind(this);
}

/**
 * Define mimetype -> extension mappings.  Each key is a mime-type that maps
 * to an array of extensions associated with the type.  The first extension is
 * used as the default extension for the type.
 *
 * e.g. mime.define({'audio/ogg', ['oga', 'ogg', 'spx']});
 *
 * If a type declares an extension that has already been defined, an error will
 * be thrown.  To suppress this error and force the extension to be associated
 * with the new type, pass `force`=true.  Alternatively, you may prefix the
 * extension with "*" to map the type to extension, without mapping the
 * extension to the type.
 *
 * e.g. mime.define({'audio/wav', ['wav']}, {'audio/x-wav', ['*wav']});
 *
 *
 * @param map (Object) type definitions
 * @param force (Boolean) if true, force overriding of existing definitions
 */
Mime.prototype.define = function(typeMap, force) {
  for (var type in typeMap) {
    var extensions = typeMap[type].map(function(t) {return t.toLowerCase()});
    type = type.toLowerCase();

    for (var i = 0; i < extensions.length; i++) {
      var ext = extensions[i];

      // '*' prefix = not the preferred type for this extension.  So fixup the
      // extension, and skip it.
      if (ext[0] == '*') {
        continue;
      }

      if (!force && (ext in this._types)) {
        throw new Error(
          'Attempt to change mapping for "' + ext +
          '" extension from "' + this._types[ext] + '" to "' + type +
          '". Pass `force=true` to allow this, otherwise remove "' + ext +
          '" from the list of extensions for "' + type + '".'
        );
      }

      this._types[ext] = type;
    }

    // Use first extension as default
    if (force || !this._extensions[type]) {
      var ext = extensions[0];
      this._extensions[type] = (ext[0] != '*') ? ext : ext.substr(1);
    }
  }
};

/**
 * Lookup a mime type based on extension
 */
Mime.prototype.getType = function(path) {
  path = String(path);
  var last = path.replace(/^.*[/\\]/, '').toLowerCase();
  var ext = last.replace(/^.*\./, '').toLowerCase();

  var hasPath = last.length < path.length;
  var hasDot = ext.length < last.length - 1;

  return (hasDot || !hasPath) && this._types[ext] || null;
};

/**
 * Return file extension associated with a mime type
 */
Mime.prototype.getExtension = function(type) {
  type = /^\s*([^;\s]*)/.test(type) && RegExp.$1;
  return type && this._extensions[type.toLowerCase()] || null;
};

var Mime_1 = Mime;

var standard = {"application/andrew-inset":["ez"],"application/applixware":["aw"],"application/atom+xml":["atom"],"application/atomcat+xml":["atomcat"],"application/atomdeleted+xml":["atomdeleted"],"application/atomsvc+xml":["atomsvc"],"application/atsc-dwd+xml":["dwd"],"application/atsc-held+xml":["held"],"application/atsc-rsat+xml":["rsat"],"application/bdoc":["bdoc"],"application/calendar+xml":["xcs"],"application/ccxml+xml":["ccxml"],"application/cdfx+xml":["cdfx"],"application/cdmi-capability":["cdmia"],"application/cdmi-container":["cdmic"],"application/cdmi-domain":["cdmid"],"application/cdmi-object":["cdmio"],"application/cdmi-queue":["cdmiq"],"application/cu-seeme":["cu"],"application/dash+xml":["mpd"],"application/davmount+xml":["davmount"],"application/docbook+xml":["dbk"],"application/dssc+der":["dssc"],"application/dssc+xml":["xdssc"],"application/ecmascript":["ecma","es"],"application/emma+xml":["emma"],"application/emotionml+xml":["emotionml"],"application/epub+zip":["epub"],"application/exi":["exi"],"application/fdt+xml":["fdt"],"application/font-tdpfr":["pfr"],"application/geo+json":["geojson"],"application/gml+xml":["gml"],"application/gpx+xml":["gpx"],"application/gxf":["gxf"],"application/gzip":["gz"],"application/hjson":["hjson"],"application/hyperstudio":["stk"],"application/inkml+xml":["ink","inkml"],"application/ipfix":["ipfix"],"application/its+xml":["its"],"application/java-archive":["jar","war","ear"],"application/java-serialized-object":["ser"],"application/java-vm":["class"],"application/javascript":["js","mjs"],"application/json":["json","map"],"application/json5":["json5"],"application/jsonml+json":["jsonml"],"application/ld+json":["jsonld"],"application/lgr+xml":["lgr"],"application/lost+xml":["lostxml"],"application/mac-binhex40":["hqx"],"application/mac-compactpro":["cpt"],"application/mads+xml":["mads"],"application/manifest+json":["webmanifest"],"application/marc":["mrc"],"application/marcxml+xml":["mrcx"],"application/mathematica":["ma","nb","mb"],"application/mathml+xml":["mathml"],"application/mbox":["mbox"],"application/mediaservercontrol+xml":["mscml"],"application/metalink+xml":["metalink"],"application/metalink4+xml":["meta4"],"application/mets+xml":["mets"],"application/mmt-aei+xml":["maei"],"application/mmt-usd+xml":["musd"],"application/mods+xml":["mods"],"application/mp21":["m21","mp21"],"application/mp4":["mp4s","m4p"],"application/mrb-consumer+xml":["*xdf"],"application/mrb-publish+xml":["*xdf"],"application/msword":["doc","dot"],"application/mxf":["mxf"],"application/n-quads":["nq"],"application/n-triples":["nt"],"application/node":["cjs"],"application/octet-stream":["bin","dms","lrf","mar","so","dist","distz","pkg","bpk","dump","elc","deploy","exe","dll","deb","dmg","iso","img","msi","msp","msm","buffer"],"application/oda":["oda"],"application/oebps-package+xml":["opf"],"application/ogg":["ogx"],"application/omdoc+xml":["omdoc"],"application/onenote":["onetoc","onetoc2","onetmp","onepkg"],"application/oxps":["oxps"],"application/p2p-overlay+xml":["relo"],"application/patch-ops-error+xml":["*xer"],"application/pdf":["pdf"],"application/pgp-encrypted":["pgp"],"application/pgp-signature":["asc","sig"],"application/pics-rules":["prf"],"application/pkcs10":["p10"],"application/pkcs7-mime":["p7m","p7c"],"application/pkcs7-signature":["p7s"],"application/pkcs8":["p8"],"application/pkix-attr-cert":["ac"],"application/pkix-cert":["cer"],"application/pkix-crl":["crl"],"application/pkix-pkipath":["pkipath"],"application/pkixcmp":["pki"],"application/pls+xml":["pls"],"application/postscript":["ai","eps","ps"],"application/provenance+xml":["provx"],"application/pskc+xml":["pskcxml"],"application/raml+yaml":["raml"],"application/rdf+xml":["rdf","owl"],"application/reginfo+xml":["rif"],"application/relax-ng-compact-syntax":["rnc"],"application/resource-lists+xml":["rl"],"application/resource-lists-diff+xml":["rld"],"application/rls-services+xml":["rs"],"application/route-apd+xml":["rapd"],"application/route-s-tsid+xml":["sls"],"application/route-usd+xml":["rusd"],"application/rpki-ghostbusters":["gbr"],"application/rpki-manifest":["mft"],"application/rpki-roa":["roa"],"application/rsd+xml":["rsd"],"application/rss+xml":["rss"],"application/rtf":["rtf"],"application/sbml+xml":["sbml"],"application/scvp-cv-request":["scq"],"application/scvp-cv-response":["scs"],"application/scvp-vp-request":["spq"],"application/scvp-vp-response":["spp"],"application/sdp":["sdp"],"application/senml+xml":["senmlx"],"application/sensml+xml":["sensmlx"],"application/set-payment-initiation":["setpay"],"application/set-registration-initiation":["setreg"],"application/shf+xml":["shf"],"application/sieve":["siv","sieve"],"application/smil+xml":["smi","smil"],"application/sparql-query":["rq"],"application/sparql-results+xml":["srx"],"application/srgs":["gram"],"application/srgs+xml":["grxml"],"application/sru+xml":["sru"],"application/ssdl+xml":["ssdl"],"application/ssml+xml":["ssml"],"application/swid+xml":["swidtag"],"application/tei+xml":["tei","teicorpus"],"application/thraud+xml":["tfi"],"application/timestamped-data":["tsd"],"application/toml":["toml"],"application/ttml+xml":["ttml"],"application/urc-ressheet+xml":["rsheet"],"application/voicexml+xml":["vxml"],"application/wasm":["wasm"],"application/widget":["wgt"],"application/winhlp":["hlp"],"application/wsdl+xml":["wsdl"],"application/wspolicy+xml":["wspolicy"],"application/xaml+xml":["xaml"],"application/xcap-att+xml":["xav"],"application/xcap-caps+xml":["xca"],"application/xcap-diff+xml":["xdf"],"application/xcap-el+xml":["xel"],"application/xcap-error+xml":["xer"],"application/xcap-ns+xml":["xns"],"application/xenc+xml":["xenc"],"application/xhtml+xml":["xhtml","xht"],"application/xliff+xml":["xlf"],"application/xml":["xml","xsl","xsd","rng"],"application/xml-dtd":["dtd"],"application/xop+xml":["xop"],"application/xproc+xml":["xpl"],"application/xslt+xml":["xslt"],"application/xspf+xml":["xspf"],"application/xv+xml":["mxml","xhvml","xvml","xvm"],"application/yang":["yang"],"application/yin+xml":["yin"],"application/zip":["zip"],"audio/3gpp":["*3gpp"],"audio/adpcm":["adp"],"audio/basic":["au","snd"],"audio/midi":["mid","midi","kar","rmi"],"audio/mobile-xmf":["mxmf"],"audio/mp3":["*mp3"],"audio/mp4":["m4a","mp4a"],"audio/mpeg":["mpga","mp2","mp2a","mp3","m2a","m3a"],"audio/ogg":["oga","ogg","spx"],"audio/s3m":["s3m"],"audio/silk":["sil"],"audio/wav":["wav"],"audio/wave":["*wav"],"audio/webm":["weba"],"audio/xm":["xm"],"font/collection":["ttc"],"font/otf":["otf"],"font/ttf":["ttf"],"font/woff":["woff"],"font/woff2":["woff2"],"image/aces":["exr"],"image/apng":["apng"],"image/bmp":["bmp"],"image/cgm":["cgm"],"image/dicom-rle":["drle"],"image/emf":["emf"],"image/fits":["fits"],"image/g3fax":["g3"],"image/gif":["gif"],"image/heic":["heic"],"image/heic-sequence":["heics"],"image/heif":["heif"],"image/heif-sequence":["heifs"],"image/hej2k":["hej2"],"image/hsj2":["hsj2"],"image/ief":["ief"],"image/jls":["jls"],"image/jp2":["jp2","jpg2"],"image/jpeg":["jpeg","jpg","jpe"],"image/jph":["jph"],"image/jphc":["jhc"],"image/jpm":["jpm"],"image/jpx":["jpx","jpf"],"image/jxr":["jxr"],"image/jxra":["jxra"],"image/jxrs":["jxrs"],"image/jxs":["jxs"],"image/jxsc":["jxsc"],"image/jxsi":["jxsi"],"image/jxss":["jxss"],"image/ktx":["ktx"],"image/png":["png"],"image/sgi":["sgi"],"image/svg+xml":["svg","svgz"],"image/t38":["t38"],"image/tiff":["tif","tiff"],"image/tiff-fx":["tfx"],"image/webp":["webp"],"image/wmf":["wmf"],"message/disposition-notification":["disposition-notification"],"message/global":["u8msg"],"message/global-delivery-status":["u8dsn"],"message/global-disposition-notification":["u8mdn"],"message/global-headers":["u8hdr"],"message/rfc822":["eml","mime"],"model/3mf":["3mf"],"model/gltf+json":["gltf"],"model/gltf-binary":["glb"],"model/iges":["igs","iges"],"model/mesh":["msh","mesh","silo"],"model/mtl":["mtl"],"model/obj":["obj"],"model/stl":["stl"],"model/vrml":["wrl","vrml"],"model/x3d+binary":["*x3db","x3dbz"],"model/x3d+fastinfoset":["x3db"],"model/x3d+vrml":["*x3dv","x3dvz"],"model/x3d+xml":["x3d","x3dz"],"model/x3d-vrml":["x3dv"],"text/cache-manifest":["appcache","manifest"],"text/calendar":["ics","ifb"],"text/coffeescript":["coffee","litcoffee"],"text/css":["css"],"text/csv":["csv"],"text/html":["html","htm","shtml"],"text/jade":["jade"],"text/jsx":["jsx"],"text/less":["less"],"text/markdown":["markdown","md"],"text/mathml":["mml"],"text/mdx":["mdx"],"text/n3":["n3"],"text/plain":["txt","text","conf","def","list","log","in","ini"],"text/richtext":["rtx"],"text/rtf":["*rtf"],"text/sgml":["sgml","sgm"],"text/shex":["shex"],"text/slim":["slim","slm"],"text/stylus":["stylus","styl"],"text/tab-separated-values":["tsv"],"text/troff":["t","tr","roff","man","me","ms"],"text/turtle":["ttl"],"text/uri-list":["uri","uris","urls"],"text/vcard":["vcard"],"text/vtt":["vtt"],"text/xml":["*xml"],"text/yaml":["yaml","yml"],"video/3gpp":["3gp","3gpp"],"video/3gpp2":["3g2"],"video/h261":["h261"],"video/h263":["h263"],"video/h264":["h264"],"video/jpeg":["jpgv"],"video/jpm":["*jpm","jpgm"],"video/mj2":["mj2","mjp2"],"video/mp2t":["ts"],"video/mp4":["mp4","mp4v","mpg4"],"video/mpeg":["mpeg","mpg","mpe","m1v","m2v"],"video/ogg":["ogv"],"video/quicktime":["qt","mov"],"video/webm":["webm"]};

var lite = new Mime_1(standard);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function get_server_route_handler(routes) {
    function handle_route(route, req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            req.params = route.params(route.pattern.exec(req.path));
            const method = req.method.toLowerCase();
            // 'delete' cannot be exported from a module because it is a keyword,
            // so check for 'del' instead
            const method_export = method === 'delete' ? 'del' : method;
            const handle_method = route.handlers[method_export];
            if (handle_method) {
                if (process.env.SAPPER_EXPORT) {
                    const { write, end, setHeader } = res;
                    const chunks = [];
                    const headers = {};
                    // intercept data so that it can be exported
                    res.write = function (chunk) {
                        chunks.push(Buffer.from(chunk));
                        return write.apply(res, [chunk]);
                    };
                    res.setHeader = function (name, value) {
                        headers[name.toLowerCase()] = value;
                        setHeader.apply(res, [name, value]);
                    };
                    res.end = function (chunk) {
                        if (chunk)
                            chunks.push(Buffer.from(chunk));
                        end.apply(res, [chunk]);
                        process.send({
                            __sapper__: true,
                            event: 'file',
                            url: req.url,
                            method: req.method,
                            status: res.statusCode,
                            type: headers['content-type'],
                            body: Buffer.concat(chunks)
                        });
                    };
                }
                const handle_next = (err) => {
                    if (err) {
                        res.statusCode = 500;
                        res.end(err.message);
                    }
                    else {
                        process.nextTick(next);
                    }
                };
                try {
                    yield handle_method(req, res, handle_next);
                }
                catch (err) {
                    console.error(err);
                    handle_next(err);
                }
            }
            else {
                // no matching handler for method
                process.nextTick(next);
            }
        });
    }
    return function find_route(req, res, next) {
        for (const route of routes) {
            if (route.pattern.test(req.path)) {
                handle_route(route, req, res, next);
                return;
            }
        }
        next();
    };
}

/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */

/**
 * Module exports.
 * @public
 */

var parse_1 = parse;

/**
 * Module variables.
 * @private
 */

var decode = decodeURIComponent;
var pairSplitRegExp = /; */;

/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 *
 * @param {string} str
 * @param {object} [options]
 * @return {object}
 * @public
 */

function parse(str, options) {
  if (typeof str !== 'string') {
    throw new TypeError('argument str must be a string');
  }

  var obj = {};
  var opt = options || {};
  var pairs = str.split(pairSplitRegExp);
  var dec = opt.decode || decode;

  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i];
    var eq_idx = pair.indexOf('=');

    // skip things that don't look like key=value
    if (eq_idx < 0) {
      continue;
    }

    var key = pair.substr(0, eq_idx).trim();
    var val = pair.substr(++eq_idx, pair.length).trim();

    // quoted values
    if ('"' == val[0]) {
      val = val.slice(1, -1);
    }

    // only assign once
    if (undefined == obj[key]) {
      obj[key] = tryDecode(val, dec);
    }
  }

  return obj;
}

/**
 * Try decoding a string using a decoding function.
 *
 * @param {string} str
 * @param {function} decode
 * @private
 */

function tryDecode(str, decode) {
  try {
    return decode(str);
  } catch (e) {
    return str;
  }
}

var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$';
var unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var escaped = {
    '<': '\\u003C',
    '>': '\\u003E',
    '/': '\\u002F',
    '\\': '\\\\',
    '\b': '\\b',
    '\f': '\\f',
    '\n': '\\n',
    '\r': '\\r',
    '\t': '\\t',
    '\0': '\\0',
    '\u2028': '\\u2028',
    '\u2029': '\\u2029'
};
var objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function devalue(value) {
    var counts = new Map();
    function walk(thing) {
        if (typeof thing === 'function') {
            throw new Error("Cannot stringify a function");
        }
        if (counts.has(thing)) {
            counts.set(thing, counts.get(thing) + 1);
            return;
        }
        counts.set(thing, 1);
        if (!isPrimitive(thing)) {
            var type = getType(thing);
            switch (type) {
                case 'Number':
                case 'String':
                case 'Boolean':
                case 'Date':
                case 'RegExp':
                    return;
                case 'Array':
                    thing.forEach(walk);
                    break;
                case 'Set':
                case 'Map':
                    Array.from(thing).forEach(walk);
                    break;
                default:
                    var proto = Object.getPrototypeOf(thing);
                    if (proto !== Object.prototype &&
                        proto !== null &&
                        Object.getOwnPropertyNames(proto).sort().join('\0') !== objectProtoOwnPropertyNames) {
                        throw new Error("Cannot stringify arbitrary non-POJOs");
                    }
                    if (Object.getOwnPropertySymbols(thing).length > 0) {
                        throw new Error("Cannot stringify POJOs with symbolic keys");
                    }
                    Object.keys(thing).forEach(function (key) { return walk(thing[key]); });
            }
        }
    }
    walk(value);
    var names = new Map();
    Array.from(counts)
        .filter(function (entry) { return entry[1] > 1; })
        .sort(function (a, b) { return b[1] - a[1]; })
        .forEach(function (entry, i) {
        names.set(entry[0], getName(i));
    });
    function stringify(thing) {
        if (names.has(thing)) {
            return names.get(thing);
        }
        if (isPrimitive(thing)) {
            return stringifyPrimitive(thing);
        }
        var type = getType(thing);
        switch (type) {
            case 'Number':
            case 'String':
            case 'Boolean':
                return "Object(" + stringify(thing.valueOf()) + ")";
            case 'RegExp':
                return "new RegExp(" + stringifyString(thing.source) + ", \"" + thing.flags + "\")";
            case 'Date':
                return "new Date(" + thing.getTime() + ")";
            case 'Array':
                var members = thing.map(function (v, i) { return i in thing ? stringify(v) : ''; });
                var tail = thing.length === 0 || (thing.length - 1 in thing) ? '' : ',';
                return "[" + members.join(',') + tail + "]";
            case 'Set':
            case 'Map':
                return "new " + type + "([" + Array.from(thing).map(stringify).join(',') + "])";
            default:
                var obj = "{" + Object.keys(thing).map(function (key) { return safeKey(key) + ":" + stringify(thing[key]); }).join(',') + "}";
                var proto = Object.getPrototypeOf(thing);
                if (proto === null) {
                    return Object.keys(thing).length > 0
                        ? "Object.assign(Object.create(null)," + obj + ")"
                        : "Object.create(null)";
                }
                return obj;
        }
    }
    var str = stringify(value);
    if (names.size) {
        var params_1 = [];
        var statements_1 = [];
        var values_1 = [];
        names.forEach(function (name, thing) {
            params_1.push(name);
            if (isPrimitive(thing)) {
                values_1.push(stringifyPrimitive(thing));
                return;
            }
            var type = getType(thing);
            switch (type) {
                case 'Number':
                case 'String':
                case 'Boolean':
                    values_1.push("Object(" + stringify(thing.valueOf()) + ")");
                    break;
                case 'RegExp':
                    values_1.push(thing.toString());
                    break;
                case 'Date':
                    values_1.push("new Date(" + thing.getTime() + ")");
                    break;
                case 'Array':
                    values_1.push("Array(" + thing.length + ")");
                    thing.forEach(function (v, i) {
                        statements_1.push(name + "[" + i + "]=" + stringify(v));
                    });
                    break;
                case 'Set':
                    values_1.push("new Set");
                    statements_1.push(name + "." + Array.from(thing).map(function (v) { return "add(" + stringify(v) + ")"; }).join('.'));
                    break;
                case 'Map':
                    values_1.push("new Map");
                    statements_1.push(name + "." + Array.from(thing).map(function (_a) {
                        var k = _a[0], v = _a[1];
                        return "set(" + stringify(k) + ", " + stringify(v) + ")";
                    }).join('.'));
                    break;
                default:
                    values_1.push(Object.getPrototypeOf(thing) === null ? 'Object.create(null)' : '{}');
                    Object.keys(thing).forEach(function (key) {
                        statements_1.push("" + name + safeProp(key) + "=" + stringify(thing[key]));
                    });
            }
        });
        statements_1.push("return " + str);
        return "(function(" + params_1.join(',') + "){" + statements_1.join(';') + "}(" + values_1.join(',') + "))";
    }
    else {
        return str;
    }
}
function getName(num) {
    var name = '';
    do {
        name = chars[num % chars.length] + name;
        num = ~~(num / chars.length) - 1;
    } while (num >= 0);
    return reserved.test(name) ? name + "_" : name;
}
function isPrimitive(thing) {
    return Object(thing) !== thing;
}
function stringifyPrimitive(thing) {
    if (typeof thing === 'string')
        return stringifyString(thing);
    if (thing === void 0)
        return 'void 0';
    if (thing === 0 && 1 / thing < 0)
        return '-0';
    var str = String(thing);
    if (typeof thing === 'number')
        return str.replace(/^(-)?0\./, '$1.');
    return str;
}
function getType(thing) {
    return Object.prototype.toString.call(thing).slice(8, -1);
}
function escapeUnsafeChar(c) {
    return escaped[c] || c;
}
function escapeUnsafeChars(str) {
    return str.replace(unsafeChars, escapeUnsafeChar);
}
function safeKey(key) {
    return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? key : escapeUnsafeChars(JSON.stringify(key));
}
function safeProp(key) {
    return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? "." + key : "[" + escapeUnsafeChars(JSON.stringify(key)) + "]";
}
function stringifyString(str) {
    var result = '"';
    for (var i = 0; i < str.length; i += 1) {
        var char = str.charAt(i);
        var code = char.charCodeAt(0);
        if (char === '"') {
            result += '\\"';
        }
        else if (char in escaped) {
            result += escaped[char];
        }
        else if (code >= 0xd800 && code <= 0xdfff) {
            var next = str.charCodeAt(i + 1);
            // If this is the beginning of a [high, low] surrogate pair,
            // add the next two characters, otherwise escape
            if (code <= 0xdbff && (next >= 0xdc00 && next <= 0xdfff)) {
                result += char + str[++i];
            }
            else {
                result += "\\u" + code.toString(16).toUpperCase();
            }
        }
        else {
            result += char;
        }
    }
    result += '"';
    return result;
}

// Based on https://github.com/tmpvar/jsdom/blob/aa85b2abf07766ff7bf5c1f6daafb3726f2f2db5/lib/jsdom/living/blob.js

// fix for "Readable" isn't a named export issue
const Readable = Stream__default['default'].Readable;

const BUFFER = Symbol('buffer');
const TYPE = Symbol('type');

class Blob {
	constructor() {
		this[TYPE] = '';

		const blobParts = arguments[0];
		const options = arguments[1];

		const buffers = [];
		let size = 0;

		if (blobParts) {
			const a = blobParts;
			const length = Number(a.length);
			for (let i = 0; i < length; i++) {
				const element = a[i];
				let buffer;
				if (element instanceof Buffer) {
					buffer = element;
				} else if (ArrayBuffer.isView(element)) {
					buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
				} else if (element instanceof ArrayBuffer) {
					buffer = Buffer.from(element);
				} else if (element instanceof Blob) {
					buffer = element[BUFFER];
				} else {
					buffer = Buffer.from(typeof element === 'string' ? element : String(element));
				}
				size += buffer.length;
				buffers.push(buffer);
			}
		}

		this[BUFFER] = Buffer.concat(buffers);

		let type = options && options.type !== undefined && String(options.type).toLowerCase();
		if (type && !/[^\u0020-\u007E]/.test(type)) {
			this[TYPE] = type;
		}
	}
	get size() {
		return this[BUFFER].length;
	}
	get type() {
		return this[TYPE];
	}
	text() {
		return Promise.resolve(this[BUFFER].toString());
	}
	arrayBuffer() {
		const buf = this[BUFFER];
		const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		return Promise.resolve(ab);
	}
	stream() {
		const readable = new Readable();
		readable._read = function () {};
		readable.push(this[BUFFER]);
		readable.push(null);
		return readable;
	}
	toString() {
		return '[object Blob]';
	}
	slice() {
		const size = this.size;

		const start = arguments[0];
		const end = arguments[1];
		let relativeStart, relativeEnd;
		if (start === undefined) {
			relativeStart = 0;
		} else if (start < 0) {
			relativeStart = Math.max(size + start, 0);
		} else {
			relativeStart = Math.min(start, size);
		}
		if (end === undefined) {
			relativeEnd = size;
		} else if (end < 0) {
			relativeEnd = Math.max(size + end, 0);
		} else {
			relativeEnd = Math.min(end, size);
		}
		const span = Math.max(relativeEnd - relativeStart, 0);

		const buffer = this[BUFFER];
		const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
		const blob = new Blob([], { type: arguments[2] });
		blob[BUFFER] = slicedBuffer;
		return blob;
	}
}

Object.defineProperties(Blob.prototype, {
	size: { enumerable: true },
	type: { enumerable: true },
	slice: { enumerable: true }
});

Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
	value: 'Blob',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * fetch-error.js
 *
 * FetchError interface for operational errors
 */

/**
 * Create FetchError instance
 *
 * @param   String      message      Error message for human
 * @param   String      type         Error type for machine
 * @param   String      systemError  For Node.js system error
 * @return  FetchError
 */
function FetchError(message, type, systemError) {
  Error.call(this, message);

  this.message = message;
  this.type = type;

  // when err.type is `system`, err.code contains system error code
  if (systemError) {
    this.code = this.errno = systemError.code;
  }

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

FetchError.prototype = Object.create(Error.prototype);
FetchError.prototype.constructor = FetchError;
FetchError.prototype.name = 'FetchError';

let convert;
try {
	convert = require('encoding').convert;
} catch (e) {}

const INTERNALS = Symbol('Body internals');

// fix an issue where "PassThrough" isn't a named export for node <10
const PassThrough = Stream__default['default'].PassThrough;

/**
 * Body mixin
 *
 * Ref: https://fetch.spec.whatwg.org/#body
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
function Body(body) {
	var _this = this;

	var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	    _ref$size = _ref.size;

	let size = _ref$size === undefined ? 0 : _ref$size;
	var _ref$timeout = _ref.timeout;
	let timeout = _ref$timeout === undefined ? 0 : _ref$timeout;

	if (body == null) {
		// body is undefined or null
		body = null;
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		body = Buffer.from(body.toString());
	} else if (isBlob(body)) ; else if (Buffer.isBuffer(body)) ; else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		body = Buffer.from(body);
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
	} else if (body instanceof Stream__default['default']) ; else {
		// none of the above
		// coerce to string then buffer
		body = Buffer.from(String(body));
	}
	this[INTERNALS] = {
		body,
		disturbed: false,
		error: null
	};
	this.size = size;
	this.timeout = timeout;

	if (body instanceof Stream__default['default']) {
		body.on('error', function (err) {
			const error = err.name === 'AbortError' ? err : new FetchError(`Invalid response body while trying to fetch ${_this.url}: ${err.message}`, 'system', err);
			_this[INTERNALS].error = error;
		});
	}
}

Body.prototype = {
	get body() {
		return this[INTERNALS].body;
	},

	get bodyUsed() {
		return this[INTERNALS].disturbed;
	},

	/**
  * Decode response as ArrayBuffer
  *
  * @return  Promise
  */
	arrayBuffer() {
		return consumeBody.call(this).then(function (buf) {
			return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		});
	},

	/**
  * Return raw response as Blob
  *
  * @return Promise
  */
	blob() {
		let ct = this.headers && this.headers.get('content-type') || '';
		return consumeBody.call(this).then(function (buf) {
			return Object.assign(
			// Prevent copying
			new Blob([], {
				type: ct.toLowerCase()
			}), {
				[BUFFER]: buf
			});
		});
	},

	/**
  * Decode response as json
  *
  * @return  Promise
  */
	json() {
		var _this2 = this;

		return consumeBody.call(this).then(function (buffer) {
			try {
				return JSON.parse(buffer.toString());
			} catch (err) {
				return Body.Promise.reject(new FetchError(`invalid json response body at ${_this2.url} reason: ${err.message}`, 'invalid-json'));
			}
		});
	},

	/**
  * Decode response as text
  *
  * @return  Promise
  */
	text() {
		return consumeBody.call(this).then(function (buffer) {
			return buffer.toString();
		});
	},

	/**
  * Decode response as buffer (non-spec api)
  *
  * @return  Promise
  */
	buffer() {
		return consumeBody.call(this);
	},

	/**
  * Decode response as text, while automatically detecting the encoding and
  * trying to decode to UTF-8 (non-spec api)
  *
  * @return  Promise
  */
	textConverted() {
		var _this3 = this;

		return consumeBody.call(this).then(function (buffer) {
			return convertBody(buffer, _this3.headers);
		});
	}
};

// In browsers, all properties are enumerable.
Object.defineProperties(Body.prototype, {
	body: { enumerable: true },
	bodyUsed: { enumerable: true },
	arrayBuffer: { enumerable: true },
	blob: { enumerable: true },
	json: { enumerable: true },
	text: { enumerable: true }
});

Body.mixIn = function (proto) {
	for (const name of Object.getOwnPropertyNames(Body.prototype)) {
		// istanbul ignore else: future proof
		if (!(name in proto)) {
			const desc = Object.getOwnPropertyDescriptor(Body.prototype, name);
			Object.defineProperty(proto, name, desc);
		}
	}
};

/**
 * Consume and convert an entire Body to a Buffer.
 *
 * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
 *
 * @return  Promise
 */
function consumeBody() {
	var _this4 = this;

	if (this[INTERNALS].disturbed) {
		return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`));
	}

	this[INTERNALS].disturbed = true;

	if (this[INTERNALS].error) {
		return Body.Promise.reject(this[INTERNALS].error);
	}

	let body = this.body;

	// body is null
	if (body === null) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is blob
	if (isBlob(body)) {
		body = body.stream();
	}

	// body is buffer
	if (Buffer.isBuffer(body)) {
		return Body.Promise.resolve(body);
	}

	// istanbul ignore if: should never happen
	if (!(body instanceof Stream__default['default'])) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is stream
	// get ready to actually consume the body
	let accum = [];
	let accumBytes = 0;
	let abort = false;

	return new Body.Promise(function (resolve, reject) {
		let resTimeout;

		// allow timeout on slow response body
		if (_this4.timeout) {
			resTimeout = setTimeout(function () {
				abort = true;
				reject(new FetchError(`Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`, 'body-timeout'));
			}, _this4.timeout);
		}

		// handle stream errors
		body.on('error', function (err) {
			if (err.name === 'AbortError') {
				// if the request was aborted, reject with this Error
				abort = true;
				reject(err);
			} else {
				// other errors, such as incorrect content-encoding
				reject(new FetchError(`Invalid response body while trying to fetch ${_this4.url}: ${err.message}`, 'system', err));
			}
		});

		body.on('data', function (chunk) {
			if (abort || chunk === null) {
				return;
			}

			if (_this4.size && accumBytes + chunk.length > _this4.size) {
				abort = true;
				reject(new FetchError(`content size at ${_this4.url} over limit: ${_this4.size}`, 'max-size'));
				return;
			}

			accumBytes += chunk.length;
			accum.push(chunk);
		});

		body.on('end', function () {
			if (abort) {
				return;
			}

			clearTimeout(resTimeout);

			try {
				resolve(Buffer.concat(accum, accumBytes));
			} catch (err) {
				// handle streams that have accumulated too much data (issue #414)
				reject(new FetchError(`Could not create Buffer from response body for ${_this4.url}: ${err.message}`, 'system', err));
			}
		});
	});
}

/**
 * Detect buffer encoding and convert to target encoding
 * ref: http://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#determining-the-character-encoding
 *
 * @param   Buffer  buffer    Incoming buffer
 * @param   String  encoding  Target encoding
 * @return  String
 */
function convertBody(buffer, headers) {
	if (typeof convert !== 'function') {
		throw new Error('The package `encoding` must be installed to use the textConverted() function');
	}

	const ct = headers.get('content-type');
	let charset = 'utf-8';
	let res, str;

	// header
	if (ct) {
		res = /charset=([^;]*)/i.exec(ct);
	}

	// no charset in content type, peek at response body for at most 1024 bytes
	str = buffer.slice(0, 1024).toString();

	// html5
	if (!res && str) {
		res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
	}

	// html4
	if (!res && str) {
		res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);
		if (!res) {
			res = /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(str);
			if (res) {
				res.pop(); // drop last quote
			}
		}

		if (res) {
			res = /charset=(.*)/i.exec(res.pop());
		}
	}

	// xml
	if (!res && str) {
		res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
	}

	// found charset
	if (res) {
		charset = res.pop();

		// prevent decode issues when sites use incorrect encoding
		// ref: https://hsivonen.fi/encoding-menu/
		if (charset === 'gb2312' || charset === 'gbk') {
			charset = 'gb18030';
		}
	}

	// turn raw buffers into a single utf-8 buffer
	return convert(buffer, 'UTF-8', charset).toString();
}

/**
 * Detect a URLSearchParams object
 * ref: https://github.com/bitinn/node-fetch/issues/296#issuecomment-307598143
 *
 * @param   Object  obj     Object to detect by type or brand
 * @return  String
 */
function isURLSearchParams(obj) {
	// Duck-typing as a necessary condition.
	if (typeof obj !== 'object' || typeof obj.append !== 'function' || typeof obj.delete !== 'function' || typeof obj.get !== 'function' || typeof obj.getAll !== 'function' || typeof obj.has !== 'function' || typeof obj.set !== 'function') {
		return false;
	}

	// Brand-checking and more duck-typing as optional condition.
	return obj.constructor.name === 'URLSearchParams' || Object.prototype.toString.call(obj) === '[object URLSearchParams]' || typeof obj.sort === 'function';
}

/**
 * Check if `obj` is a W3C `Blob` object (which `File` inherits from)
 * @param  {*} obj
 * @return {boolean}
 */
function isBlob(obj) {
	return typeof obj === 'object' && typeof obj.arrayBuffer === 'function' && typeof obj.type === 'string' && typeof obj.stream === 'function' && typeof obj.constructor === 'function' && typeof obj.constructor.name === 'string' && /^(Blob|File)$/.test(obj.constructor.name) && /^(Blob|File)$/.test(obj[Symbol.toStringTag]);
}

/**
 * Clone body given Res/Req instance
 *
 * @param   Mixed  instance  Response or Request instance
 * @return  Mixed
 */
function clone(instance) {
	let p1, p2;
	let body = instance.body;

	// don't allow cloning a used body
	if (instance.bodyUsed) {
		throw new Error('cannot clone body after it is used');
	}

	// check that body is a stream and not form-data object
	// note: we can't clone the form-data object without having it as a dependency
	if (body instanceof Stream__default['default'] && typeof body.getBoundary !== 'function') {
		// tee instance body
		p1 = new PassThrough();
		p2 = new PassThrough();
		body.pipe(p1);
		body.pipe(p2);
		// set instance body to teed body and return the other teed body
		instance[INTERNALS].body = p1;
		body = p2;
	}

	return body;
}

/**
 * Performs the operation "extract a `Content-Type` value from |object|" as
 * specified in the specification:
 * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
 *
 * This function assumes that instance.body is present.
 *
 * @param   Mixed  instance  Any options.body input
 */
function extractContentType(body) {
	if (body === null) {
		// body is null
		return null;
	} else if (typeof body === 'string') {
		// body is string
		return 'text/plain;charset=UTF-8';
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		return 'application/x-www-form-urlencoded;charset=UTF-8';
	} else if (isBlob(body)) {
		// body is blob
		return body.type || null;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return null;
	} else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		return null;
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		return null;
	} else if (typeof body.getBoundary === 'function') {
		// detect form data input from form-data module
		return `multipart/form-data;boundary=${body.getBoundary()}`;
	} else if (body instanceof Stream__default['default']) {
		// body is stream
		// can't really do much about this
		return null;
	} else {
		// Body constructor defaults other things to string
		return 'text/plain;charset=UTF-8';
	}
}

/**
 * The Fetch Standard treats this as if "total bytes" is a property on the body.
 * For us, we have to explicitly get it with a function.
 *
 * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
 *
 * @param   Body    instance   Instance of Body
 * @return  Number?            Number of bytes, or null if not possible
 */
function getTotalBytes(instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		return 0;
	} else if (isBlob(body)) {
		return body.size;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return body.length;
	} else if (body && typeof body.getLengthSync === 'function') {
		// detect form data input from form-data module
		if (body._lengthRetrievers && body._lengthRetrievers.length == 0 || // 1.x
		body.hasKnownLength && body.hasKnownLength()) {
			// 2.x
			return body.getLengthSync();
		}
		return null;
	} else {
		// body is stream
		return null;
	}
}

/**
 * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
 *
 * @param   Body    instance   Instance of Body
 * @return  Void
 */
function writeToStream(dest, instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		dest.end();
	} else if (isBlob(body)) {
		body.stream().pipe(dest);
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		dest.write(body);
		dest.end();
	} else {
		// body is stream
		body.pipe(dest);
	}
}

// expose Promise
Body.Promise = global.Promise;

/**
 * headers.js
 *
 * Headers class offers convenient helpers
 */

const invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
const invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;

function validateName(name) {
	name = `${name}`;
	if (invalidTokenRegex.test(name) || name === '') {
		throw new TypeError(`${name} is not a legal HTTP header name`);
	}
}

function validateValue(value) {
	value = `${value}`;
	if (invalidHeaderCharRegex.test(value)) {
		throw new TypeError(`${value} is not a legal HTTP header value`);
	}
}

/**
 * Find the key in the map object given a header name.
 *
 * Returns undefined if not found.
 *
 * @param   String  name  Header name
 * @return  String|Undefined
 */
function find(map, name) {
	name = name.toLowerCase();
	for (const key in map) {
		if (key.toLowerCase() === name) {
			return key;
		}
	}
	return undefined;
}

const MAP = Symbol('map');
class Headers {
	/**
  * Headers class
  *
  * @param   Object  headers  Response headers
  * @return  Void
  */
	constructor() {
		let init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

		this[MAP] = Object.create(null);

		if (init instanceof Headers) {
			const rawHeaders = init.raw();
			const headerNames = Object.keys(rawHeaders);

			for (const headerName of headerNames) {
				for (const value of rawHeaders[headerName]) {
					this.append(headerName, value);
				}
			}

			return;
		}

		// We don't worry about converting prop to ByteString here as append()
		// will handle it.
		if (init == null) ; else if (typeof init === 'object') {
			const method = init[Symbol.iterator];
			if (method != null) {
				if (typeof method !== 'function') {
					throw new TypeError('Header pairs must be iterable');
				}

				// sequence<sequence<ByteString>>
				// Note: per spec we have to first exhaust the lists then process them
				const pairs = [];
				for (const pair of init) {
					if (typeof pair !== 'object' || typeof pair[Symbol.iterator] !== 'function') {
						throw new TypeError('Each header pair must be iterable');
					}
					pairs.push(Array.from(pair));
				}

				for (const pair of pairs) {
					if (pair.length !== 2) {
						throw new TypeError('Each header pair must be a name/value tuple');
					}
					this.append(pair[0], pair[1]);
				}
			} else {
				// record<ByteString, ByteString>
				for (const key of Object.keys(init)) {
					const value = init[key];
					this.append(key, value);
				}
			}
		} else {
			throw new TypeError('Provided initializer must be an object');
		}
	}

	/**
  * Return combined header value given name
  *
  * @param   String  name  Header name
  * @return  Mixed
  */
	get(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key === undefined) {
			return null;
		}

		return this[MAP][key].join(', ');
	}

	/**
  * Iterate over all headers
  *
  * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
  * @param   Boolean   thisArg   `this` context for callback function
  * @return  Void
  */
	forEach(callback) {
		let thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

		let pairs = getHeaders(this);
		let i = 0;
		while (i < pairs.length) {
			var _pairs$i = pairs[i];
			const name = _pairs$i[0],
			      value = _pairs$i[1];

			callback.call(thisArg, value, name, this);
			pairs = getHeaders(this);
			i++;
		}
	}

	/**
  * Overwrite header values given name
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	set(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		this[MAP][key !== undefined ? key : name] = [value];
	}

	/**
  * Append a value onto existing header
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	append(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			this[MAP][key].push(value);
		} else {
			this[MAP][name] = [value];
		}
	}

	/**
  * Check for header name existence
  *
  * @param   String   name  Header name
  * @return  Boolean
  */
	has(name) {
		name = `${name}`;
		validateName(name);
		return find(this[MAP], name) !== undefined;
	}

	/**
  * Delete all header values given name
  *
  * @param   String  name  Header name
  * @return  Void
  */
	delete(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			delete this[MAP][key];
		}
	}

	/**
  * Return raw headers (non-spec api)
  *
  * @return  Object
  */
	raw() {
		return this[MAP];
	}

	/**
  * Get an iterator on keys.
  *
  * @return  Iterator
  */
	keys() {
		return createHeadersIterator(this, 'key');
	}

	/**
  * Get an iterator on values.
  *
  * @return  Iterator
  */
	values() {
		return createHeadersIterator(this, 'value');
	}

	/**
  * Get an iterator on entries.
  *
  * This is the default iterator of the Headers object.
  *
  * @return  Iterator
  */
	[Symbol.iterator]() {
		return createHeadersIterator(this, 'key+value');
	}
}
Headers.prototype.entries = Headers.prototype[Symbol.iterator];

Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
	value: 'Headers',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Headers.prototype, {
	get: { enumerable: true },
	forEach: { enumerable: true },
	set: { enumerable: true },
	append: { enumerable: true },
	has: { enumerable: true },
	delete: { enumerable: true },
	keys: { enumerable: true },
	values: { enumerable: true },
	entries: { enumerable: true }
});

function getHeaders(headers) {
	let kind = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key+value';

	const keys = Object.keys(headers[MAP]).sort();
	return keys.map(kind === 'key' ? function (k) {
		return k.toLowerCase();
	} : kind === 'value' ? function (k) {
		return headers[MAP][k].join(', ');
	} : function (k) {
		return [k.toLowerCase(), headers[MAP][k].join(', ')];
	});
}

const INTERNAL = Symbol('internal');

function createHeadersIterator(target, kind) {
	const iterator = Object.create(HeadersIteratorPrototype);
	iterator[INTERNAL] = {
		target,
		kind,
		index: 0
	};
	return iterator;
}

const HeadersIteratorPrototype = Object.setPrototypeOf({
	next() {
		// istanbul ignore if
		if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {
			throw new TypeError('Value of `this` is not a HeadersIterator');
		}

		var _INTERNAL = this[INTERNAL];
		const target = _INTERNAL.target,
		      kind = _INTERNAL.kind,
		      index = _INTERNAL.index;

		const values = getHeaders(target, kind);
		const len = values.length;
		if (index >= len) {
			return {
				value: undefined,
				done: true
			};
		}

		this[INTERNAL].index = index + 1;

		return {
			value: values[index],
			done: false
		};
	}
}, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));

Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
	value: 'HeadersIterator',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * Export the Headers object in a form that Node.js can consume.
 *
 * @param   Headers  headers
 * @return  Object
 */
function exportNodeCompatibleHeaders(headers) {
	const obj = Object.assign({ __proto__: null }, headers[MAP]);

	// http.request() only supports string as Host header. This hack makes
	// specifying custom Host header possible.
	const hostHeaderKey = find(headers[MAP], 'Host');
	if (hostHeaderKey !== undefined) {
		obj[hostHeaderKey] = obj[hostHeaderKey][0];
	}

	return obj;
}

/**
 * Create a Headers object from an object of headers, ignoring those that do
 * not conform to HTTP grammar productions.
 *
 * @param   Object  obj  Object of headers
 * @return  Headers
 */
function createHeadersLenient(obj) {
	const headers = new Headers();
	for (const name of Object.keys(obj)) {
		if (invalidTokenRegex.test(name)) {
			continue;
		}
		if (Array.isArray(obj[name])) {
			for (const val of obj[name]) {
				if (invalidHeaderCharRegex.test(val)) {
					continue;
				}
				if (headers[MAP][name] === undefined) {
					headers[MAP][name] = [val];
				} else {
					headers[MAP][name].push(val);
				}
			}
		} else if (!invalidHeaderCharRegex.test(obj[name])) {
			headers[MAP][name] = [obj[name]];
		}
	}
	return headers;
}

const INTERNALS$1 = Symbol('Response internals');

// fix an issue where "STATUS_CODES" aren't a named export for node <10
const STATUS_CODES = http__default['default'].STATUS_CODES;

/**
 * Response class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
class Response {
	constructor() {
		let body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
		let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		Body.call(this, body, opts);

		const status = opts.status || 200;
		const headers = new Headers(opts.headers);

		if (body != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(body);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		this[INTERNALS$1] = {
			url: opts.url,
			status,
			statusText: opts.statusText || STATUS_CODES[status],
			headers,
			counter: opts.counter
		};
	}

	get url() {
		return this[INTERNALS$1].url || '';
	}

	get status() {
		return this[INTERNALS$1].status;
	}

	/**
  * Convenience property representing if the request ended normally
  */
	get ok() {
		return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
	}

	get redirected() {
		return this[INTERNALS$1].counter > 0;
	}

	get statusText() {
		return this[INTERNALS$1].statusText;
	}

	get headers() {
		return this[INTERNALS$1].headers;
	}

	/**
  * Clone this response
  *
  * @return  Response
  */
	clone() {
		return new Response(clone(this), {
			url: this.url,
			status: this.status,
			statusText: this.statusText,
			headers: this.headers,
			ok: this.ok,
			redirected: this.redirected
		});
	}
}

Body.mixIn(Response.prototype);

Object.defineProperties(Response.prototype, {
	url: { enumerable: true },
	status: { enumerable: true },
	ok: { enumerable: true },
	redirected: { enumerable: true },
	statusText: { enumerable: true },
	headers: { enumerable: true },
	clone: { enumerable: true }
});

Object.defineProperty(Response.prototype, Symbol.toStringTag, {
	value: 'Response',
	writable: false,
	enumerable: false,
	configurable: true
});

const INTERNALS$2 = Symbol('Request internals');

// fix an issue where "format", "parse" aren't a named export for node <10
const parse_url = Url__default['default'].parse;
const format_url = Url__default['default'].format;

const streamDestructionSupported = 'destroy' in Stream__default['default'].Readable.prototype;

/**
 * Check if a value is an instance of Request.
 *
 * @param   Mixed   input
 * @return  Boolean
 */
function isRequest(input) {
	return typeof input === 'object' && typeof input[INTERNALS$2] === 'object';
}

function isAbortSignal(signal) {
	const proto = signal && typeof signal === 'object' && Object.getPrototypeOf(signal);
	return !!(proto && proto.constructor.name === 'AbortSignal');
}

/**
 * Request class
 *
 * @param   Mixed   input  Url or Request instance
 * @param   Object  init   Custom options
 * @return  Void
 */
class Request {
	constructor(input) {
		let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		let parsedURL;

		// normalize input
		if (!isRequest(input)) {
			if (input && input.href) {
				// in order to support Node.js' Url objects; though WHATWG's URL objects
				// will fall into this branch also (since their `toString()` will return
				// `href` property anyway)
				parsedURL = parse_url(input.href);
			} else {
				// coerce input to a string before attempting to parse
				parsedURL = parse_url(`${input}`);
			}
			input = {};
		} else {
			parsedURL = parse_url(input.url);
		}

		let method = init.method || input.method || 'GET';
		method = method.toUpperCase();

		if ((init.body != null || isRequest(input) && input.body !== null) && (method === 'GET' || method === 'HEAD')) {
			throw new TypeError('Request with GET/HEAD method cannot have body');
		}

		let inputBody = init.body != null ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;

		Body.call(this, inputBody, {
			timeout: init.timeout || input.timeout || 0,
			size: init.size || input.size || 0
		});

		const headers = new Headers(init.headers || input.headers || {});

		if (inputBody != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(inputBody);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		let signal = isRequest(input) ? input.signal : null;
		if ('signal' in init) signal = init.signal;

		if (signal != null && !isAbortSignal(signal)) {
			throw new TypeError('Expected signal to be an instanceof AbortSignal');
		}

		this[INTERNALS$2] = {
			method,
			redirect: init.redirect || input.redirect || 'follow',
			headers,
			parsedURL,
			signal
		};

		// node-fetch-only options
		this.follow = init.follow !== undefined ? init.follow : input.follow !== undefined ? input.follow : 20;
		this.compress = init.compress !== undefined ? init.compress : input.compress !== undefined ? input.compress : true;
		this.counter = init.counter || input.counter || 0;
		this.agent = init.agent || input.agent;
	}

	get method() {
		return this[INTERNALS$2].method;
	}

	get url() {
		return format_url(this[INTERNALS$2].parsedURL);
	}

	get headers() {
		return this[INTERNALS$2].headers;
	}

	get redirect() {
		return this[INTERNALS$2].redirect;
	}

	get signal() {
		return this[INTERNALS$2].signal;
	}

	/**
  * Clone this request
  *
  * @return  Request
  */
	clone() {
		return new Request(this);
	}
}

Body.mixIn(Request.prototype);

Object.defineProperty(Request.prototype, Symbol.toStringTag, {
	value: 'Request',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Request.prototype, {
	method: { enumerable: true },
	url: { enumerable: true },
	headers: { enumerable: true },
	redirect: { enumerable: true },
	clone: { enumerable: true },
	signal: { enumerable: true }
});

/**
 * Convert a Request to Node.js http request options.
 *
 * @param   Request  A Request instance
 * @return  Object   The options object to be passed to http.request
 */
function getNodeRequestOptions(request) {
	const parsedURL = request[INTERNALS$2].parsedURL;
	const headers = new Headers(request[INTERNALS$2].headers);

	// fetch step 1.3
	if (!headers.has('Accept')) {
		headers.set('Accept', '*/*');
	}

	// Basic fetch
	if (!parsedURL.protocol || !parsedURL.hostname) {
		throw new TypeError('Only absolute URLs are supported');
	}

	if (!/^https?:$/.test(parsedURL.protocol)) {
		throw new TypeError('Only HTTP(S) protocols are supported');
	}

	if (request.signal && request.body instanceof Stream__default['default'].Readable && !streamDestructionSupported) {
		throw new Error('Cancellation of streamed requests with AbortSignal is not supported in node < 8');
	}

	// HTTP-network-or-cache fetch steps 2.4-2.7
	let contentLengthValue = null;
	if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
		contentLengthValue = '0';
	}
	if (request.body != null) {
		const totalBytes = getTotalBytes(request);
		if (typeof totalBytes === 'number') {
			contentLengthValue = String(totalBytes);
		}
	}
	if (contentLengthValue) {
		headers.set('Content-Length', contentLengthValue);
	}

	// HTTP-network-or-cache fetch step 2.11
	if (!headers.has('User-Agent')) {
		headers.set('User-Agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)');
	}

	// HTTP-network-or-cache fetch step 2.15
	if (request.compress && !headers.has('Accept-Encoding')) {
		headers.set('Accept-Encoding', 'gzip,deflate');
	}

	let agent = request.agent;
	if (typeof agent === 'function') {
		agent = agent(parsedURL);
	}

	if (!headers.has('Connection') && !agent) {
		headers.set('Connection', 'close');
	}

	// HTTP-network fetch step 4.2
	// chunked encoding is handled by Node.js

	return Object.assign({}, parsedURL, {
		method: request.method,
		headers: exportNodeCompatibleHeaders(headers),
		agent
	});
}

/**
 * abort-error.js
 *
 * AbortError interface for cancelled requests
 */

/**
 * Create AbortError instance
 *
 * @param   String      message      Error message for human
 * @return  AbortError
 */
function AbortError(message) {
  Error.call(this, message);

  this.type = 'aborted';
  this.message = message;

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

AbortError.prototype = Object.create(Error.prototype);
AbortError.prototype.constructor = AbortError;
AbortError.prototype.name = 'AbortError';

// fix an issue where "PassThrough", "resolve" aren't a named export for node <10
const PassThrough$1 = Stream__default['default'].PassThrough;
const resolve_url = Url__default['default'].resolve;

/**
 * Fetch function
 *
 * @param   Mixed    url   Absolute url or Request instance
 * @param   Object   opts  Fetch options
 * @return  Promise
 */
function fetch(url, opts) {

	// allow custom promise
	if (!fetch.Promise) {
		throw new Error('native promise missing, set fetch.Promise to your favorite alternative');
	}

	Body.Promise = fetch.Promise;

	// wrap http.request into fetch
	return new fetch.Promise(function (resolve, reject) {
		// build request object
		const request = new Request(url, opts);
		const options = getNodeRequestOptions(request);

		const send = (options.protocol === 'https:' ? https__default['default'] : http__default['default']).request;
		const signal = request.signal;

		let response = null;

		const abort = function abort() {
			let error = new AbortError('The user aborted a request.');
			reject(error);
			if (request.body && request.body instanceof Stream__default['default'].Readable) {
				request.body.destroy(error);
			}
			if (!response || !response.body) return;
			response.body.emit('error', error);
		};

		if (signal && signal.aborted) {
			abort();
			return;
		}

		const abortAndFinalize = function abortAndFinalize() {
			abort();
			finalize();
		};

		// send request
		const req = send(options);
		let reqTimeout;

		if (signal) {
			signal.addEventListener('abort', abortAndFinalize);
		}

		function finalize() {
			req.abort();
			if (signal) signal.removeEventListener('abort', abortAndFinalize);
			clearTimeout(reqTimeout);
		}

		if (request.timeout) {
			req.once('socket', function (socket) {
				reqTimeout = setTimeout(function () {
					reject(new FetchError(`network timeout at: ${request.url}`, 'request-timeout'));
					finalize();
				}, request.timeout);
			});
		}

		req.on('error', function (err) {
			reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, 'system', err));
			finalize();
		});

		req.on('response', function (res) {
			clearTimeout(reqTimeout);

			const headers = createHeadersLenient(res.headers);

			// HTTP fetch step 5
			if (fetch.isRedirect(res.statusCode)) {
				// HTTP fetch step 5.2
				const location = headers.get('Location');

				// HTTP fetch step 5.3
				const locationURL = location === null ? null : resolve_url(request.url, location);

				// HTTP fetch step 5.5
				switch (request.redirect) {
					case 'error':
						reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, 'no-redirect'));
						finalize();
						return;
					case 'manual':
						// node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.
						if (locationURL !== null) {
							// handle corrupted header
							try {
								headers.set('Location', locationURL);
							} catch (err) {
								// istanbul ignore next: nodejs server prevent invalid response headers, we can't test this through normal request
								reject(err);
							}
						}
						break;
					case 'follow':
						// HTTP-redirect fetch step 2
						if (locationURL === null) {
							break;
						}

						// HTTP-redirect fetch step 5
						if (request.counter >= request.follow) {
							reject(new FetchError(`maximum redirect reached at: ${request.url}`, 'max-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 6 (counter increment)
						// Create a new Request object.
						const requestOpts = {
							headers: new Headers(request.headers),
							follow: request.follow,
							counter: request.counter + 1,
							agent: request.agent,
							compress: request.compress,
							method: request.method,
							body: request.body,
							signal: request.signal,
							timeout: request.timeout,
							size: request.size
						};

						// HTTP-redirect fetch step 9
						if (res.statusCode !== 303 && request.body && getTotalBytes(request) === null) {
							reject(new FetchError('Cannot follow redirect with body being a readable stream', 'unsupported-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 11
						if (res.statusCode === 303 || (res.statusCode === 301 || res.statusCode === 302) && request.method === 'POST') {
							requestOpts.method = 'GET';
							requestOpts.body = undefined;
							requestOpts.headers.delete('content-length');
						}

						// HTTP-redirect fetch step 15
						resolve(fetch(new Request(locationURL, requestOpts)));
						finalize();
						return;
				}
			}

			// prepare response
			res.once('end', function () {
				if (signal) signal.removeEventListener('abort', abortAndFinalize);
			});
			let body = res.pipe(new PassThrough$1());

			const response_options = {
				url: request.url,
				status: res.statusCode,
				statusText: res.statusMessage,
				headers: headers,
				size: request.size,
				timeout: request.timeout,
				counter: request.counter
			};

			// HTTP-network fetch step 12.1.1.3
			const codings = headers.get('Content-Encoding');

			// HTTP-network fetch step 12.1.1.4: handle content codings

			// in following scenarios we ignore compression support
			// 1. compression support is disabled
			// 2. HEAD request
			// 3. no Content-Encoding header
			// 4. no content response (204)
			// 5. content not modified response (304)
			if (!request.compress || request.method === 'HEAD' || codings === null || res.statusCode === 204 || res.statusCode === 304) {
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// For Node v6+
			// Be less strict when decoding compressed responses, since sometimes
			// servers send slightly invalid responses that are still accepted
			// by common browsers.
			// Always using Z_SYNC_FLUSH is what cURL does.
			const zlibOptions = {
				flush: zlib__default['default'].Z_SYNC_FLUSH,
				finishFlush: zlib__default['default'].Z_SYNC_FLUSH
			};

			// for gzip
			if (codings == 'gzip' || codings == 'x-gzip') {
				body = body.pipe(zlib__default['default'].createGunzip(zlibOptions));
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// for deflate
			if (codings == 'deflate' || codings == 'x-deflate') {
				// handle the infamous raw deflate response from old servers
				// a hack for old IIS and Apache servers
				const raw = res.pipe(new PassThrough$1());
				raw.once('data', function (chunk) {
					// see http://stackoverflow.com/questions/37519828
					if ((chunk[0] & 0x0F) === 0x08) {
						body = body.pipe(zlib__default['default'].createInflate());
					} else {
						body = body.pipe(zlib__default['default'].createInflateRaw());
					}
					response = new Response(body, response_options);
					resolve(response);
				});
				return;
			}

			// for br
			if (codings == 'br' && typeof zlib__default['default'].createBrotliDecompress === 'function') {
				body = body.pipe(zlib__default['default'].createBrotliDecompress());
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// otherwise, use response as-is
			response = new Response(body, response_options);
			resolve(response);
		});

		writeToStream(req, request);
	});
}
/**
 * Redirect code matching
 *
 * @param   Number   code  Status code
 * @return  Boolean
 */
fetch.isRedirect = function (code) {
	return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
};

// expose Promise
fetch.Promise = global.Promise;

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var intToCharMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');

/**
 * Encode an integer in the range of 0 to 63 to a single base 64 digit.
 */
var encode = function (number) {
  if (0 <= number && number < intToCharMap.length) {
    return intToCharMap[number];
  }
  throw new TypeError("Must be between 0 and 63: " + number);
};

/**
 * Decode a single base 64 character code digit to an integer. Returns -1 on
 * failure.
 */
var decode$1 = function (charCode) {
  var bigA = 65;     // 'A'
  var bigZ = 90;     // 'Z'

  var littleA = 97;  // 'a'
  var littleZ = 122; // 'z'

  var zero = 48;     // '0'
  var nine = 57;     // '9'

  var plus = 43;     // '+'
  var slash = 47;    // '/'

  var littleOffset = 26;
  var numberOffset = 52;

  // 0 - 25: ABCDEFGHIJKLMNOPQRSTUVWXYZ
  if (bigA <= charCode && charCode <= bigZ) {
    return (charCode - bigA);
  }

  // 26 - 51: abcdefghijklmnopqrstuvwxyz
  if (littleA <= charCode && charCode <= littleZ) {
    return (charCode - littleA + littleOffset);
  }

  // 52 - 61: 0123456789
  if (zero <= charCode && charCode <= nine) {
    return (charCode - zero + numberOffset);
  }

  // 62: +
  if (charCode == plus) {
    return 62;
  }

  // 63: /
  if (charCode == slash) {
    return 63;
  }

  // Invalid base64 digit.
  return -1;
};

var base64 = {
	encode: encode,
	decode: decode$1
};

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 *
 * Based on the Base 64 VLQ implementation in Closure Compiler:
 * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
 *
 * Copyright 2011 The Closure Compiler Authors. All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *  * Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above
 *    copyright notice, this list of conditions and the following
 *    disclaimer in the documentation and/or other materials provided
 *    with the distribution.
 *  * Neither the name of Google Inc. nor the names of its
 *    contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */



// A single base 64 digit can contain 6 bits of data. For the base 64 variable
// length quantities we use in the source map spec, the first bit is the sign,
// the next four bits are the actual value, and the 6th bit is the
// continuation bit. The continuation bit tells us whether there are more
// digits in this value following this digit.
//
//   Continuation
//   |    Sign
//   |    |
//   V    V
//   101011

var VLQ_BASE_SHIFT = 5;

// binary: 100000
var VLQ_BASE = 1 << VLQ_BASE_SHIFT;

// binary: 011111
var VLQ_BASE_MASK = VLQ_BASE - 1;

// binary: 100000
var VLQ_CONTINUATION_BIT = VLQ_BASE;

/**
 * Converts from a two-complement value to a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
 *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
 */
function toVLQSigned(aValue) {
  return aValue < 0
    ? ((-aValue) << 1) + 1
    : (aValue << 1) + 0;
}

/**
 * Converts to a two-complement value from a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
 *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
 */
function fromVLQSigned(aValue) {
  var isNegative = (aValue & 1) === 1;
  var shifted = aValue >> 1;
  return isNegative
    ? -shifted
    : shifted;
}

/**
 * Returns the base 64 VLQ encoded value.
 */
var encode$1 = function base64VLQ_encode(aValue) {
  var encoded = "";
  var digit;

  var vlq = toVLQSigned(aValue);

  do {
    digit = vlq & VLQ_BASE_MASK;
    vlq >>>= VLQ_BASE_SHIFT;
    if (vlq > 0) {
      // There are still more digits in this value, so we must make sure the
      // continuation bit is marked.
      digit |= VLQ_CONTINUATION_BIT;
    }
    encoded += base64.encode(digit);
  } while (vlq > 0);

  return encoded;
};

/**
 * Decodes the next base 64 VLQ value from the given string and returns the
 * value and the rest of the string via the out parameter.
 */
var decode$2 = function base64VLQ_decode(aStr, aIndex, aOutParam) {
  var strLen = aStr.length;
  var result = 0;
  var shift = 0;
  var continuation, digit;

  do {
    if (aIndex >= strLen) {
      throw new Error("Expected more digits in base 64 VLQ value.");
    }

    digit = base64.decode(aStr.charCodeAt(aIndex++));
    if (digit === -1) {
      throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
    }

    continuation = !!(digit & VLQ_CONTINUATION_BIT);
    digit &= VLQ_BASE_MASK;
    result = result + (digit << shift);
    shift += VLQ_BASE_SHIFT;
  } while (continuation);

  aOutParam.value = fromVLQSigned(result);
  aOutParam.rest = aIndex;
};

var base64Vlq = {
	encode: encode$1,
	decode: decode$2
};

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var util = createCommonjsModule(function (module, exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

/**
 * This is a helper function for getting values from parameter/options
 * objects.
 *
 * @param args The object we are extracting values from
 * @param name The name of the property we are getting.
 * @param defaultValue An optional value to return if the property is missing
 * from the object. If this is not specified and the property is missing, an
 * error will be thrown.
 */
function getArg(aArgs, aName, aDefaultValue) {
  if (aName in aArgs) {
    return aArgs[aName];
  } else if (arguments.length === 3) {
    return aDefaultValue;
  } else {
    throw new Error('"' + aName + '" is a required argument.');
  }
}
exports.getArg = getArg;

var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
var dataUrlRegexp = /^data:.+\,.+$/;

function urlParse(aUrl) {
  var match = aUrl.match(urlRegexp);
  if (!match) {
    return null;
  }
  return {
    scheme: match[1],
    auth: match[2],
    host: match[3],
    port: match[4],
    path: match[5]
  };
}
exports.urlParse = urlParse;

function urlGenerate(aParsedUrl) {
  var url = '';
  if (aParsedUrl.scheme) {
    url += aParsedUrl.scheme + ':';
  }
  url += '//';
  if (aParsedUrl.auth) {
    url += aParsedUrl.auth + '@';
  }
  if (aParsedUrl.host) {
    url += aParsedUrl.host;
  }
  if (aParsedUrl.port) {
    url += ":" + aParsedUrl.port;
  }
  if (aParsedUrl.path) {
    url += aParsedUrl.path;
  }
  return url;
}
exports.urlGenerate = urlGenerate;

/**
 * Normalizes a path, or the path portion of a URL:
 *
 * - Replaces consecutive slashes with one slash.
 * - Removes unnecessary '.' parts.
 * - Removes unnecessary '<dir>/..' parts.
 *
 * Based on code in the Node.js 'path' core module.
 *
 * @param aPath The path or url to normalize.
 */
function normalize(aPath) {
  var path = aPath;
  var url = urlParse(aPath);
  if (url) {
    if (!url.path) {
      return aPath;
    }
    path = url.path;
  }
  var isAbsolute = exports.isAbsolute(path);

  var parts = path.split(/\/+/);
  for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
    part = parts[i];
    if (part === '.') {
      parts.splice(i, 1);
    } else if (part === '..') {
      up++;
    } else if (up > 0) {
      if (part === '') {
        // The first part is blank if the path is absolute. Trying to go
        // above the root is a no-op. Therefore we can remove all '..' parts
        // directly after the root.
        parts.splice(i + 1, up);
        up = 0;
      } else {
        parts.splice(i, 2);
        up--;
      }
    }
  }
  path = parts.join('/');

  if (path === '') {
    path = isAbsolute ? '/' : '.';
  }

  if (url) {
    url.path = path;
    return urlGenerate(url);
  }
  return path;
}
exports.normalize = normalize;

/**
 * Joins two paths/URLs.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be joined with the root.
 *
 * - If aPath is a URL or a data URI, aPath is returned, unless aPath is a
 *   scheme-relative URL: Then the scheme of aRoot, if any, is prepended
 *   first.
 * - Otherwise aPath is a path. If aRoot is a URL, then its path portion
 *   is updated with the result and aRoot is returned. Otherwise the result
 *   is returned.
 *   - If aPath is absolute, the result is aPath.
 *   - Otherwise the two paths are joined with a slash.
 * - Joining for example 'http://' and 'www.example.com' is also supported.
 */
function join(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }
  if (aPath === "") {
    aPath = ".";
  }
  var aPathUrl = urlParse(aPath);
  var aRootUrl = urlParse(aRoot);
  if (aRootUrl) {
    aRoot = aRootUrl.path || '/';
  }

  // `join(foo, '//www.example.org')`
  if (aPathUrl && !aPathUrl.scheme) {
    if (aRootUrl) {
      aPathUrl.scheme = aRootUrl.scheme;
    }
    return urlGenerate(aPathUrl);
  }

  if (aPathUrl || aPath.match(dataUrlRegexp)) {
    return aPath;
  }

  // `join('http://', 'www.example.com')`
  if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
    aRootUrl.host = aPath;
    return urlGenerate(aRootUrl);
  }

  var joined = aPath.charAt(0) === '/'
    ? aPath
    : normalize(aRoot.replace(/\/+$/, '') + '/' + aPath);

  if (aRootUrl) {
    aRootUrl.path = joined;
    return urlGenerate(aRootUrl);
  }
  return joined;
}
exports.join = join;

exports.isAbsolute = function (aPath) {
  return aPath.charAt(0) === '/' || urlRegexp.test(aPath);
};

/**
 * Make a path relative to a URL or another path.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be made relative to aRoot.
 */
function relative(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }

  aRoot = aRoot.replace(/\/$/, '');

  // It is possible for the path to be above the root. In this case, simply
  // checking whether the root is a prefix of the path won't work. Instead, we
  // need to remove components from the root one by one, until either we find
  // a prefix that fits, or we run out of components to remove.
  var level = 0;
  while (aPath.indexOf(aRoot + '/') !== 0) {
    var index = aRoot.lastIndexOf("/");
    if (index < 0) {
      return aPath;
    }

    // If the only part of the root that is left is the scheme (i.e. http://,
    // file:///, etc.), one or more slashes (/), or simply nothing at all, we
    // have exhausted all components, so the path is not relative to the root.
    aRoot = aRoot.slice(0, index);
    if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
      return aPath;
    }

    ++level;
  }

  // Make sure we add a "../" for each component we removed from the root.
  return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
}
exports.relative = relative;

var supportsNullProto = (function () {
  var obj = Object.create(null);
  return !('__proto__' in obj);
}());

function identity (s) {
  return s;
}

/**
 * Because behavior goes wacky when you set `__proto__` on objects, we
 * have to prefix all the strings in our set with an arbitrary character.
 *
 * See https://github.com/mozilla/source-map/pull/31 and
 * https://github.com/mozilla/source-map/issues/30
 *
 * @param String aStr
 */
function toSetString(aStr) {
  if (isProtoString(aStr)) {
    return '$' + aStr;
  }

  return aStr;
}
exports.toSetString = supportsNullProto ? identity : toSetString;

function fromSetString(aStr) {
  if (isProtoString(aStr)) {
    return aStr.slice(1);
  }

  return aStr;
}
exports.fromSetString = supportsNullProto ? identity : fromSetString;

function isProtoString(s) {
  if (!s) {
    return false;
  }

  var length = s.length;

  if (length < 9 /* "__proto__".length */) {
    return false;
  }

  if (s.charCodeAt(length - 1) !== 95  /* '_' */ ||
      s.charCodeAt(length - 2) !== 95  /* '_' */ ||
      s.charCodeAt(length - 3) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 4) !== 116 /* 't' */ ||
      s.charCodeAt(length - 5) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 6) !== 114 /* 'r' */ ||
      s.charCodeAt(length - 7) !== 112 /* 'p' */ ||
      s.charCodeAt(length - 8) !== 95  /* '_' */ ||
      s.charCodeAt(length - 9) !== 95  /* '_' */) {
    return false;
  }

  for (var i = length - 10; i >= 0; i--) {
    if (s.charCodeAt(i) !== 36 /* '$' */) {
      return false;
    }
  }

  return true;
}

/**
 * Comparator between two mappings where the original positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same original source/line/column, but different generated
 * line and column the same. Useful when searching for a mapping with a
 * stubbed out mapping.
 */
function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
  var cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0 || onlyCompareOriginal) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByOriginalPositions = compareByOriginalPositions;

/**
 * Comparator between two mappings with deflated source and name indices where
 * the generated positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same generated line and column, but different
 * source/name/original line and column the same. Useful when searching for a
 * mapping with a stubbed out mapping.
 */
function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0 || onlyCompareGenerated) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;

function strcmp(aStr1, aStr2) {
  if (aStr1 === aStr2) {
    return 0;
  }

  if (aStr1 === null) {
    return 1; // aStr2 !== null
  }

  if (aStr2 === null) {
    return -1; // aStr1 !== null
  }

  if (aStr1 > aStr2) {
    return 1;
  }

  return -1;
}

/**
 * Comparator between two mappings with inflated source and name strings where
 * the generated positions are compared.
 */
function compareByGeneratedPositionsInflated(mappingA, mappingB) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;

/**
 * Strip any JSON XSSI avoidance prefix from the string (as documented
 * in the source maps specification), and then parse the string as
 * JSON.
 */
function parseSourceMapInput(str) {
  return JSON.parse(str.replace(/^\)]}'[^\n]*\n/, ''));
}
exports.parseSourceMapInput = parseSourceMapInput;

/**
 * Compute the URL of a source given the the source root, the source's
 * URL, and the source map's URL.
 */
function computeSourceURL(sourceRoot, sourceURL, sourceMapURL) {
  sourceURL = sourceURL || '';

  if (sourceRoot) {
    // This follows what Chrome does.
    if (sourceRoot[sourceRoot.length - 1] !== '/' && sourceURL[0] !== '/') {
      sourceRoot += '/';
    }
    // The spec says:
    //   Line 4: An optional source root, useful for relocating source
    //   files on a server or removing repeated values in the
    //   “sources” entry.  This value is prepended to the individual
    //   entries in the “source” field.
    sourceURL = sourceRoot + sourceURL;
  }

  // Historically, SourceMapConsumer did not take the sourceMapURL as
  // a parameter.  This mode is still somewhat supported, which is why
  // this code block is conditional.  However, it's preferable to pass
  // the source map URL to SourceMapConsumer, so that this function
  // can implement the source URL resolution algorithm as outlined in
  // the spec.  This block is basically the equivalent of:
  //    new URL(sourceURL, sourceMapURL).toString()
  // ... except it avoids using URL, which wasn't available in the
  // older releases of node still supported by this library.
  //
  // The spec says:
  //   If the sources are not absolute URLs after prepending of the
  //   “sourceRoot”, the sources are resolved relative to the
  //   SourceMap (like resolving script src in a html document).
  if (sourceMapURL) {
    var parsed = urlParse(sourceMapURL);
    if (!parsed) {
      throw new Error("sourceMapURL could not be parsed");
    }
    if (parsed.path) {
      // Strip the last path component, but keep the "/".
      var index = parsed.path.lastIndexOf('/');
      if (index >= 0) {
        parsed.path = parsed.path.substring(0, index + 1);
      }
    }
    sourceURL = join(urlGenerate(parsed), sourceURL);
  }

  return normalize(sourceURL);
}
exports.computeSourceURL = computeSourceURL;
});

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */


var has = Object.prototype.hasOwnProperty;
var hasNativeMap = typeof Map !== "undefined";

/**
 * A data structure which is a combination of an array and a set. Adding a new
 * member is O(1), testing for membership is O(1), and finding the index of an
 * element is O(1). Removing elements from the set is not supported. Only
 * strings are supported for membership.
 */
function ArraySet() {
  this._array = [];
  this._set = hasNativeMap ? new Map() : Object.create(null);
}

/**
 * Static method for creating ArraySet instances from an existing array.
 */
ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
  var set = new ArraySet();
  for (var i = 0, len = aArray.length; i < len; i++) {
    set.add(aArray[i], aAllowDuplicates);
  }
  return set;
};

/**
 * Return how many unique items are in this ArraySet. If duplicates have been
 * added, than those do not count towards the size.
 *
 * @returns Number
 */
ArraySet.prototype.size = function ArraySet_size() {
  return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
};

/**
 * Add the given string to this set.
 *
 * @param String aStr
 */
ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
  var sStr = hasNativeMap ? aStr : util.toSetString(aStr);
  var isDuplicate = hasNativeMap ? this.has(aStr) : has.call(this._set, sStr);
  var idx = this._array.length;
  if (!isDuplicate || aAllowDuplicates) {
    this._array.push(aStr);
  }
  if (!isDuplicate) {
    if (hasNativeMap) {
      this._set.set(aStr, idx);
    } else {
      this._set[sStr] = idx;
    }
  }
};

/**
 * Is the given string a member of this set?
 *
 * @param String aStr
 */
ArraySet.prototype.has = function ArraySet_has(aStr) {
  if (hasNativeMap) {
    return this._set.has(aStr);
  } else {
    var sStr = util.toSetString(aStr);
    return has.call(this._set, sStr);
  }
};

/**
 * What is the index of the given string in the array?
 *
 * @param String aStr
 */
ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
  if (hasNativeMap) {
    var idx = this._set.get(aStr);
    if (idx >= 0) {
        return idx;
    }
  } else {
    var sStr = util.toSetString(aStr);
    if (has.call(this._set, sStr)) {
      return this._set[sStr];
    }
  }

  throw new Error('"' + aStr + '" is not in the set.');
};

/**
 * What is the element at the given index?
 *
 * @param Number aIdx
 */
ArraySet.prototype.at = function ArraySet_at(aIdx) {
  if (aIdx >= 0 && aIdx < this._array.length) {
    return this._array[aIdx];
  }
  throw new Error('No element indexed by ' + aIdx);
};

/**
 * Returns the array representation of this set (which has the proper indices
 * indicated by indexOf). Note that this is a copy of the internal array used
 * for storing the members so that no one can mess with internal state.
 */
ArraySet.prototype.toArray = function ArraySet_toArray() {
  return this._array.slice();
};

var ArraySet_1 = ArraySet;

var arraySet = {
	ArraySet: ArraySet_1
};

var binarySearch = createCommonjsModule(function (module, exports) {
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

exports.GREATEST_LOWER_BOUND = 1;
exports.LEAST_UPPER_BOUND = 2;

/**
 * Recursive implementation of binary search.
 *
 * @param aLow Indices here and lower do not contain the needle.
 * @param aHigh Indices here and higher do not contain the needle.
 * @param aNeedle The element being searched for.
 * @param aHaystack The non-empty array being searched.
 * @param aCompare Function which takes two elements and returns -1, 0, or 1.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 */
function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
  // This function terminates when one of the following is true:
  //
  //   1. We find the exact element we are looking for.
  //
  //   2. We did not find the exact element, but we can return the index of
  //      the next-closest element.
  //
  //   3. We did not find the exact element, and there is no next-closest
  //      element than the one we are searching for, so we return -1.
  var mid = Math.floor((aHigh - aLow) / 2) + aLow;
  var cmp = aCompare(aNeedle, aHaystack[mid], true);
  if (cmp === 0) {
    // Found the element we are looking for.
    return mid;
  }
  else if (cmp > 0) {
    // Our needle is greater than aHaystack[mid].
    if (aHigh - mid > 1) {
      // The element is in the upper half.
      return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
    }

    // The exact needle element was not found in this haystack. Determine if
    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return aHigh < aHaystack.length ? aHigh : -1;
    } else {
      return mid;
    }
  }
  else {
    // Our needle is less than aHaystack[mid].
    if (mid - aLow > 1) {
      // The element is in the lower half.
      return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
    }

    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return mid;
    } else {
      return aLow < 0 ? -1 : aLow;
    }
  }
}

/**
 * This is an implementation of binary search which will always try and return
 * the index of the closest element if there is no exact hit. This is because
 * mappings between original and generated line/col pairs are single points,
 * and there is an implicit region between each of them, so a miss just means
 * that you aren't on the very start of a region.
 *
 * @param aNeedle The element you are looking for.
 * @param aHaystack The array that is being searched.
 * @param aCompare A function which takes the needle and an element in the
 *     array and returns -1, 0, or 1 depending on whether the needle is less
 *     than, equal to, or greater than the element, respectively.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'binarySearch.GREATEST_LOWER_BOUND'.
 */
exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
  if (aHaystack.length === 0) {
    return -1;
  }

  var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack,
                              aCompare, aBias || exports.GREATEST_LOWER_BOUND);
  if (index < 0) {
    return -1;
  }

  // We have found either the exact element, or the next-closest element than
  // the one we are searching for. However, there may be more than one such
  // element. Make sure we always return the smallest of these.
  while (index - 1 >= 0) {
    if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
      break;
    }
    --index;
  }

  return index;
};
});

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

// It turns out that some (most?) JavaScript engines don't self-host
// `Array.prototype.sort`. This makes sense because C++ will likely remain
// faster than JS when doing raw CPU-intensive sorting. However, when using a
// custom comparator function, calling back and forth between the VM's C++ and
// JIT'd JS is rather slow *and* loses JIT type information, resulting in
// worse generated code for the comparator function than would be optimal. In
// fact, when sorting with a comparator, these costs outweigh the benefits of
// sorting in C++. By using our own JS-implemented Quick Sort (below), we get
// a ~3500ms mean speed-up in `bench/bench.html`.

/**
 * Swap the elements indexed by `x` and `y` in the array `ary`.
 *
 * @param {Array} ary
 *        The array.
 * @param {Number} x
 *        The index of the first item.
 * @param {Number} y
 *        The index of the second item.
 */
function swap(ary, x, y) {
  var temp = ary[x];
  ary[x] = ary[y];
  ary[y] = temp;
}

/**
 * Returns a random integer within the range `low .. high` inclusive.
 *
 * @param {Number} low
 *        The lower bound on the range.
 * @param {Number} high
 *        The upper bound on the range.
 */
function randomIntInRange(low, high) {
  return Math.round(low + (Math.random() * (high - low)));
}

/**
 * The Quick Sort algorithm.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 * @param {Number} p
 *        Start index of the array
 * @param {Number} r
 *        End index of the array
 */
function doQuickSort(ary, comparator, p, r) {
  // If our lower bound is less than our upper bound, we (1) partition the
  // array into two pieces and (2) recurse on each half. If it is not, this is
  // the empty array and our base case.

  if (p < r) {
    // (1) Partitioning.
    //
    // The partitioning chooses a pivot between `p` and `r` and moves all
    // elements that are less than or equal to the pivot to the before it, and
    // all the elements that are greater than it after it. The effect is that
    // once partition is done, the pivot is in the exact place it will be when
    // the array is put in sorted order, and it will not need to be moved
    // again. This runs in O(n) time.

    // Always choose a random pivot so that an input array which is reverse
    // sorted does not cause O(n^2) running time.
    var pivotIndex = randomIntInRange(p, r);
    var i = p - 1;

    swap(ary, pivotIndex, r);
    var pivot = ary[r];

    // Immediately after `j` is incremented in this loop, the following hold
    // true:
    //
    //   * Every element in `ary[p .. i]` is less than or equal to the pivot.
    //
    //   * Every element in `ary[i+1 .. j-1]` is greater than the pivot.
    for (var j = p; j < r; j++) {
      if (comparator(ary[j], pivot) <= 0) {
        i += 1;
        swap(ary, i, j);
      }
    }

    swap(ary, i + 1, j);
    var q = i + 1;

    // (2) Recurse on each half.

    doQuickSort(ary, comparator, p, q - 1);
    doQuickSort(ary, comparator, q + 1, r);
  }
}

/**
 * Sort the given array in-place with the given comparator function.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 */
var quickSort_1 = function (ary, comparator) {
  doQuickSort(ary, comparator, 0, ary.length - 1);
};

var quickSort = {
	quickSort: quickSort_1
};

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */



var ArraySet$1 = arraySet.ArraySet;

var quickSort$1 = quickSort.quickSort;

function SourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  return sourceMap.sections != null
    ? new IndexedSourceMapConsumer(sourceMap, aSourceMapURL)
    : new BasicSourceMapConsumer(sourceMap, aSourceMapURL);
}

SourceMapConsumer.fromSourceMap = function(aSourceMap, aSourceMapURL) {
  return BasicSourceMapConsumer.fromSourceMap(aSourceMap, aSourceMapURL);
};

/**
 * The version of the source mapping spec that we are consuming.
 */
SourceMapConsumer.prototype._version = 3;

// `__generatedMappings` and `__originalMappings` are arrays that hold the
// parsed mapping coordinates from the source map's "mappings" attribute. They
// are lazily instantiated, accessed via the `_generatedMappings` and
// `_originalMappings` getters respectively, and we only parse the mappings
// and create these arrays once queried for a source location. We jump through
// these hoops because there can be many thousands of mappings, and parsing
// them is expensive, so we only want to do it if we must.
//
// Each object in the arrays is of the form:
//
//     {
//       generatedLine: The line number in the generated code,
//       generatedColumn: The column number in the generated code,
//       source: The path to the original source file that generated this
//               chunk of code,
//       originalLine: The line number in the original source that
//                     corresponds to this chunk of generated code,
//       originalColumn: The column number in the original source that
//                       corresponds to this chunk of generated code,
//       name: The name of the original symbol which generated this chunk of
//             code.
//     }
//
// All properties except for `generatedLine` and `generatedColumn` can be
// `null`.
//
// `_generatedMappings` is ordered by the generated positions.
//
// `_originalMappings` is ordered by the original positions.

SourceMapConsumer.prototype.__generatedMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_generatedMappings', {
  configurable: true,
  enumerable: true,
  get: function () {
    if (!this.__generatedMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__generatedMappings;
  }
});

SourceMapConsumer.prototype.__originalMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_originalMappings', {
  configurable: true,
  enumerable: true,
  get: function () {
    if (!this.__originalMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__originalMappings;
  }
});

SourceMapConsumer.prototype._charIsMappingSeparator =
  function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
    var c = aStr.charAt(index);
    return c === ";" || c === ",";
  };

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
SourceMapConsumer.prototype._parseMappings =
  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    throw new Error("Subclasses must implement _parseMappings");
  };

SourceMapConsumer.GENERATED_ORDER = 1;
SourceMapConsumer.ORIGINAL_ORDER = 2;

SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
SourceMapConsumer.LEAST_UPPER_BOUND = 2;

/**
 * Iterate over each mapping between an original source/line/column and a
 * generated line/column in this source map.
 *
 * @param Function aCallback
 *        The function that is called with each mapping.
 * @param Object aContext
 *        Optional. If specified, this object will be the value of `this` every
 *        time that `aCallback` is called.
 * @param aOrder
 *        Either `SourceMapConsumer.GENERATED_ORDER` or
 *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
 *        iterate over the mappings sorted by the generated file's line/column
 *        order or the original's source/line/column order, respectively. Defaults to
 *        `SourceMapConsumer.GENERATED_ORDER`.
 */
SourceMapConsumer.prototype.eachMapping =
  function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
    var context = aContext || null;
    var order = aOrder || SourceMapConsumer.GENERATED_ORDER;

    var mappings;
    switch (order) {
    case SourceMapConsumer.GENERATED_ORDER:
      mappings = this._generatedMappings;
      break;
    case SourceMapConsumer.ORIGINAL_ORDER:
      mappings = this._originalMappings;
      break;
    default:
      throw new Error("Unknown order of iteration.");
    }

    var sourceRoot = this.sourceRoot;
    mappings.map(function (mapping) {
      var source = mapping.source === null ? null : this._sources.at(mapping.source);
      source = util.computeSourceURL(sourceRoot, source, this._sourceMapURL);
      return {
        source: source,
        generatedLine: mapping.generatedLine,
        generatedColumn: mapping.generatedColumn,
        originalLine: mapping.originalLine,
        originalColumn: mapping.originalColumn,
        name: mapping.name === null ? null : this._names.at(mapping.name)
      };
    }, this).forEach(aCallback, context);
  };

/**
 * Returns all generated line and column information for the original source,
 * line, and column provided. If no column is provided, returns all mappings
 * corresponding to a either the line we are searching for or the next
 * closest line that has any mappings. Otherwise, returns all mappings
 * corresponding to the given line and either the column we are searching for
 * or the next closest column that has any offsets.
 *
 * The only argument is an object with the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number is 1-based.
 *   - column: Optional. the column number in the original source.
 *    The column number is 0-based.
 *
 * and an array of objects is returned, each with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *    line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *    The column number is 0-based.
 */
SourceMapConsumer.prototype.allGeneratedPositionsFor =
  function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
    var line = util.getArg(aArgs, 'line');

    // When there is no exact match, BasicSourceMapConsumer.prototype._findMapping
    // returns the index of the closest mapping less than the needle. By
    // setting needle.originalColumn to 0, we thus find the last mapping for
    // the given line, provided such a mapping exists.
    var needle = {
      source: util.getArg(aArgs, 'source'),
      originalLine: line,
      originalColumn: util.getArg(aArgs, 'column', 0)
    };

    needle.source = this._findSourceIndex(needle.source);
    if (needle.source < 0) {
      return [];
    }

    var mappings = [];

    var index = this._findMapping(needle,
                                  this._originalMappings,
                                  "originalLine",
                                  "originalColumn",
                                  util.compareByOriginalPositions,
                                  binarySearch.LEAST_UPPER_BOUND);
    if (index >= 0) {
      var mapping = this._originalMappings[index];

      if (aArgs.column === undefined) {
        var originalLine = mapping.originalLine;

        // Iterate until either we run out of mappings, or we run into
        // a mapping for a different line than the one we found. Since
        // mappings are sorted, this is guaranteed to find all mappings for
        // the line we found.
        while (mapping && mapping.originalLine === originalLine) {
          mappings.push({
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
          });

          mapping = this._originalMappings[++index];
        }
      } else {
        var originalColumn = mapping.originalColumn;

        // Iterate until either we run out of mappings, or we run into
        // a mapping for a different line than the one we were searching for.
        // Since mappings are sorted, this is guaranteed to find all mappings for
        // the line we are searching for.
        while (mapping &&
               mapping.originalLine === line &&
               mapping.originalColumn == originalColumn) {
          mappings.push({
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
          });

          mapping = this._originalMappings[++index];
        }
      }
    }

    return mappings;
  };

var SourceMapConsumer_1 = SourceMapConsumer;

/**
 * A BasicSourceMapConsumer instance represents a parsed source map which we can
 * query for information about the original file positions by giving it a file
 * position in the generated source.
 *
 * The first parameter is the raw source map (either as a JSON string, or
 * already parsed to an object). According to the spec, source maps have the
 * following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - sources: An array of URLs to the original source files.
 *   - names: An array of identifiers which can be referrenced by individual mappings.
 *   - sourceRoot: Optional. The URL root from which all sources are relative.
 *   - sourcesContent: Optional. An array of contents of the original source files.
 *   - mappings: A string of base64 VLQs which contain the actual mappings.
 *   - file: Optional. The generated file this source map is associated with.
 *
 * Here is an example source map, taken from the source map spec[0]:
 *
 *     {
 *       version : 3,
 *       file: "out.js",
 *       sourceRoot : "",
 *       sources: ["foo.js", "bar.js"],
 *       names: ["src", "maps", "are", "fun"],
 *       mappings: "AA,AB;;ABCDE;"
 *     }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#
 */
function BasicSourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  var version = util.getArg(sourceMap, 'version');
  var sources = util.getArg(sourceMap, 'sources');
  // Sass 3.3 leaves out the 'names' array, so we deviate from the spec (which
  // requires the array) to play nice here.
  var names = util.getArg(sourceMap, 'names', []);
  var sourceRoot = util.getArg(sourceMap, 'sourceRoot', null);
  var sourcesContent = util.getArg(sourceMap, 'sourcesContent', null);
  var mappings = util.getArg(sourceMap, 'mappings');
  var file = util.getArg(sourceMap, 'file', null);

  // Once again, Sass deviates from the spec and supplies the version as a
  // string rather than a number, so we use loose equality checking here.
  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  if (sourceRoot) {
    sourceRoot = util.normalize(sourceRoot);
  }

  sources = sources
    .map(String)
    // Some source maps produce relative source paths like "./foo.js" instead of
    // "foo.js".  Normalize these first so that future comparisons will succeed.
    // See bugzil.la/1090768.
    .map(util.normalize)
    // Always ensure that absolute sources are internally stored relative to
    // the source root, if the source root is absolute. Not doing this would
    // be particularly problematic when the source root is a prefix of the
    // source (valid, but why??). See github issue #199 and bugzil.la/1188982.
    .map(function (source) {
      return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source)
        ? util.relative(sourceRoot, source)
        : source;
    });

  // Pass `true` below to allow duplicate names and sources. While source maps
  // are intended to be compressed and deduplicated, the TypeScript compiler
  // sometimes generates source maps with duplicates in them. See Github issue
  // #72 and bugzil.la/889492.
  this._names = ArraySet$1.fromArray(names.map(String), true);
  this._sources = ArraySet$1.fromArray(sources, true);

  this._absoluteSources = this._sources.toArray().map(function (s) {
    return util.computeSourceURL(sourceRoot, s, aSourceMapURL);
  });

  this.sourceRoot = sourceRoot;
  this.sourcesContent = sourcesContent;
  this._mappings = mappings;
  this._sourceMapURL = aSourceMapURL;
  this.file = file;
}

BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;

/**
 * Utility function to find the index of a source.  Returns -1 if not
 * found.
 */
BasicSourceMapConsumer.prototype._findSourceIndex = function(aSource) {
  var relativeSource = aSource;
  if (this.sourceRoot != null) {
    relativeSource = util.relative(this.sourceRoot, relativeSource);
  }

  if (this._sources.has(relativeSource)) {
    return this._sources.indexOf(relativeSource);
  }

  // Maybe aSource is an absolute URL as returned by |sources|.  In
  // this case we can't simply undo the transform.
  var i;
  for (i = 0; i < this._absoluteSources.length; ++i) {
    if (this._absoluteSources[i] == aSource) {
      return i;
    }
  }

  return -1;
};

/**
 * Create a BasicSourceMapConsumer from a SourceMapGenerator.
 *
 * @param SourceMapGenerator aSourceMap
 *        The source map that will be consumed.
 * @param String aSourceMapURL
 *        The URL at which the source map can be found (optional)
 * @returns BasicSourceMapConsumer
 */
BasicSourceMapConsumer.fromSourceMap =
  function SourceMapConsumer_fromSourceMap(aSourceMap, aSourceMapURL) {
    var smc = Object.create(BasicSourceMapConsumer.prototype);

    var names = smc._names = ArraySet$1.fromArray(aSourceMap._names.toArray(), true);
    var sources = smc._sources = ArraySet$1.fromArray(aSourceMap._sources.toArray(), true);
    smc.sourceRoot = aSourceMap._sourceRoot;
    smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(),
                                                            smc.sourceRoot);
    smc.file = aSourceMap._file;
    smc._sourceMapURL = aSourceMapURL;
    smc._absoluteSources = smc._sources.toArray().map(function (s) {
      return util.computeSourceURL(smc.sourceRoot, s, aSourceMapURL);
    });

    // Because we are modifying the entries (by converting string sources and
    // names to indices into the sources and names ArraySets), we have to make
    // a copy of the entry or else bad things happen. Shared mutable state
    // strikes again! See github issue #191.

    var generatedMappings = aSourceMap._mappings.toArray().slice();
    var destGeneratedMappings = smc.__generatedMappings = [];
    var destOriginalMappings = smc.__originalMappings = [];

    for (var i = 0, length = generatedMappings.length; i < length; i++) {
      var srcMapping = generatedMappings[i];
      var destMapping = new Mapping;
      destMapping.generatedLine = srcMapping.generatedLine;
      destMapping.generatedColumn = srcMapping.generatedColumn;

      if (srcMapping.source) {
        destMapping.source = sources.indexOf(srcMapping.source);
        destMapping.originalLine = srcMapping.originalLine;
        destMapping.originalColumn = srcMapping.originalColumn;

        if (srcMapping.name) {
          destMapping.name = names.indexOf(srcMapping.name);
        }

        destOriginalMappings.push(destMapping);
      }

      destGeneratedMappings.push(destMapping);
    }

    quickSort$1(smc.__originalMappings, util.compareByOriginalPositions);

    return smc;
  };

/**
 * The version of the source mapping spec that we are consuming.
 */
BasicSourceMapConsumer.prototype._version = 3;

/**
 * The list of original sources.
 */
Object.defineProperty(BasicSourceMapConsumer.prototype, 'sources', {
  get: function () {
    return this._absoluteSources.slice();
  }
});

/**
 * Provide the JIT with a nice shape / hidden class.
 */
function Mapping() {
  this.generatedLine = 0;
  this.generatedColumn = 0;
  this.source = null;
  this.originalLine = null;
  this.originalColumn = null;
  this.name = null;
}

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
BasicSourceMapConsumer.prototype._parseMappings =
  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    var generatedLine = 1;
    var previousGeneratedColumn = 0;
    var previousOriginalLine = 0;
    var previousOriginalColumn = 0;
    var previousSource = 0;
    var previousName = 0;
    var length = aStr.length;
    var index = 0;
    var cachedSegments = {};
    var temp = {};
    var originalMappings = [];
    var generatedMappings = [];
    var mapping, str, segment, end, value;

    while (index < length) {
      if (aStr.charAt(index) === ';') {
        generatedLine++;
        index++;
        previousGeneratedColumn = 0;
      }
      else if (aStr.charAt(index) === ',') {
        index++;
      }
      else {
        mapping = new Mapping();
        mapping.generatedLine = generatedLine;

        // Because each offset is encoded relative to the previous one,
        // many segments often have the same encoding. We can exploit this
        // fact by caching the parsed variable length fields of each segment,
        // allowing us to avoid a second parse if we encounter the same
        // segment again.
        for (end = index; end < length; end++) {
          if (this._charIsMappingSeparator(aStr, end)) {
            break;
          }
        }
        str = aStr.slice(index, end);

        segment = cachedSegments[str];
        if (segment) {
          index += str.length;
        } else {
          segment = [];
          while (index < end) {
            base64Vlq.decode(aStr, index, temp);
            value = temp.value;
            index = temp.rest;
            segment.push(value);
          }

          if (segment.length === 2) {
            throw new Error('Found a source, but no line and column');
          }

          if (segment.length === 3) {
            throw new Error('Found a source and line, but no column');
          }

          cachedSegments[str] = segment;
        }

        // Generated column.
        mapping.generatedColumn = previousGeneratedColumn + segment[0];
        previousGeneratedColumn = mapping.generatedColumn;

        if (segment.length > 1) {
          // Original source.
          mapping.source = previousSource + segment[1];
          previousSource += segment[1];

          // Original line.
          mapping.originalLine = previousOriginalLine + segment[2];
          previousOriginalLine = mapping.originalLine;
          // Lines are stored 0-based
          mapping.originalLine += 1;

          // Original column.
          mapping.originalColumn = previousOriginalColumn + segment[3];
          previousOriginalColumn = mapping.originalColumn;

          if (segment.length > 4) {
            // Original name.
            mapping.name = previousName + segment[4];
            previousName += segment[4];
          }
        }

        generatedMappings.push(mapping);
        if (typeof mapping.originalLine === 'number') {
          originalMappings.push(mapping);
        }
      }
    }

    quickSort$1(generatedMappings, util.compareByGeneratedPositionsDeflated);
    this.__generatedMappings = generatedMappings;

    quickSort$1(originalMappings, util.compareByOriginalPositions);
    this.__originalMappings = originalMappings;
  };

/**
 * Find the mapping that best matches the hypothetical "needle" mapping that
 * we are searching for in the given "haystack" of mappings.
 */
BasicSourceMapConsumer.prototype._findMapping =
  function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName,
                                         aColumnName, aComparator, aBias) {
    // To return the position we are searching for, we must first find the
    // mapping for the given position and then return the opposite position it
    // points to. Because the mappings are sorted, we can use binary search to
    // find the best mapping.

    if (aNeedle[aLineName] <= 0) {
      throw new TypeError('Line must be greater than or equal to 1, got '
                          + aNeedle[aLineName]);
    }
    if (aNeedle[aColumnName] < 0) {
      throw new TypeError('Column must be greater than or equal to 0, got '
                          + aNeedle[aColumnName]);
    }

    return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
  };

/**
 * Compute the last column for each generated mapping. The last column is
 * inclusive.
 */
BasicSourceMapConsumer.prototype.computeColumnSpans =
  function SourceMapConsumer_computeColumnSpans() {
    for (var index = 0; index < this._generatedMappings.length; ++index) {
      var mapping = this._generatedMappings[index];

      // Mappings do not contain a field for the last generated columnt. We
      // can come up with an optimistic estimate, however, by assuming that
      // mappings are contiguous (i.e. given two consecutive mappings, the
      // first mapping ends where the second one starts).
      if (index + 1 < this._generatedMappings.length) {
        var nextMapping = this._generatedMappings[index + 1];

        if (mapping.generatedLine === nextMapping.generatedLine) {
          mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
          continue;
        }
      }

      // The last mapping for each line spans the entire line.
      mapping.lastGeneratedColumn = Infinity;
    }
  };

/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */
BasicSourceMapConsumer.prototype.originalPositionFor =
  function SourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, 'line'),
      generatedColumn: util.getArg(aArgs, 'column')
    };

    var index = this._findMapping(
      needle,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      util.compareByGeneratedPositionsDeflated,
      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
    );

    if (index >= 0) {
      var mapping = this._generatedMappings[index];

      if (mapping.generatedLine === needle.generatedLine) {
        var source = util.getArg(mapping, 'source', null);
        if (source !== null) {
          source = this._sources.at(source);
          source = util.computeSourceURL(this.sourceRoot, source, this._sourceMapURL);
        }
        var name = util.getArg(mapping, 'name', null);
        if (name !== null) {
          name = this._names.at(name);
        }
        return {
          source: source,
          line: util.getArg(mapping, 'originalLine', null),
          column: util.getArg(mapping, 'originalColumn', null),
          name: name
        };
      }
    }

    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  };

/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */
BasicSourceMapConsumer.prototype.hasContentsOfAllSources =
  function BasicSourceMapConsumer_hasContentsOfAllSources() {
    if (!this.sourcesContent) {
      return false;
    }
    return this.sourcesContent.length >= this._sources.size() &&
      !this.sourcesContent.some(function (sc) { return sc == null; });
  };

/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */
BasicSourceMapConsumer.prototype.sourceContentFor =
  function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    if (!this.sourcesContent) {
      return null;
    }

    var index = this._findSourceIndex(aSource);
    if (index >= 0) {
      return this.sourcesContent[index];
    }

    var relativeSource = aSource;
    if (this.sourceRoot != null) {
      relativeSource = util.relative(this.sourceRoot, relativeSource);
    }

    var url;
    if (this.sourceRoot != null
        && (url = util.urlParse(this.sourceRoot))) {
      // XXX: file:// URIs and absolute paths lead to unexpected behavior for
      // many users. We can help them out when they expect file:// URIs to
      // behave like it would if they were running a local HTTP server. See
      // https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
      var fileUriAbsPath = relativeSource.replace(/^file:\/\//, "");
      if (url.scheme == "file"
          && this._sources.has(fileUriAbsPath)) {
        return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)]
      }

      if ((!url.path || url.path == "/")
          && this._sources.has("/" + relativeSource)) {
        return this.sourcesContent[this._sources.indexOf("/" + relativeSource)];
      }
    }

    // This function is used recursively from
    // IndexedSourceMapConsumer.prototype.sourceContentFor. In that case, we
    // don't want to throw if we can't find the source - we just want to
    // return null, so we provide a flag to exit gracefully.
    if (nullOnMissing) {
      return null;
    }
    else {
      throw new Error('"' + relativeSource + '" is not in the SourceMap.');
    }
  };

/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */
BasicSourceMapConsumer.prototype.generatedPositionFor =
  function SourceMapConsumer_generatedPositionFor(aArgs) {
    var source = util.getArg(aArgs, 'source');
    source = this._findSourceIndex(source);
    if (source < 0) {
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    }

    var needle = {
      source: source,
      originalLine: util.getArg(aArgs, 'line'),
      originalColumn: util.getArg(aArgs, 'column')
    };

    var index = this._findMapping(
      needle,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      util.compareByOriginalPositions,
      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
    );

    if (index >= 0) {
      var mapping = this._originalMappings[index];

      if (mapping.source === needle.source) {
        return {
          line: util.getArg(mapping, 'generatedLine', null),
          column: util.getArg(mapping, 'generatedColumn', null),
          lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
        };
      }
    }

    return {
      line: null,
      column: null,
      lastColumn: null
    };
  };

var BasicSourceMapConsumer_1 = BasicSourceMapConsumer;

/**
 * An IndexedSourceMapConsumer instance represents a parsed source map which
 * we can query for information. It differs from BasicSourceMapConsumer in
 * that it takes "indexed" source maps (i.e. ones with a "sections" field) as
 * input.
 *
 * The first parameter is a raw source map (either as a JSON string, or already
 * parsed to an object). According to the spec for indexed source maps, they
 * have the following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - file: Optional. The generated file this source map is associated with.
 *   - sections: A list of section definitions.
 *
 * Each value under the "sections" field has two fields:
 *   - offset: The offset into the original specified at which this section
 *       begins to apply, defined as an object with a "line" and "column"
 *       field.
 *   - map: A source map definition. This source map could also be indexed,
 *       but doesn't have to be.
 *
 * Instead of the "map" field, it's also possible to have a "url" field
 * specifying a URL to retrieve a source map from, but that's currently
 * unsupported.
 *
 * Here's an example source map, taken from the source map spec[0], but
 * modified to omit a section which uses the "url" field.
 *
 *  {
 *    version : 3,
 *    file: "app.js",
 *    sections: [{
 *      offset: {line:100, column:10},
 *      map: {
 *        version : 3,
 *        file: "section.js",
 *        sources: ["foo.js", "bar.js"],
 *        names: ["src", "maps", "are", "fun"],
 *        mappings: "AAAA,E;;ABCDE;"
 *      }
 *    }],
 *  }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit#heading=h.535es3xeprgt
 */
function IndexedSourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  var version = util.getArg(sourceMap, 'version');
  var sections = util.getArg(sourceMap, 'sections');

  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  this._sources = new ArraySet$1();
  this._names = new ArraySet$1();

  var lastOffset = {
    line: -1,
    column: 0
  };
  this._sections = sections.map(function (s) {
    if (s.url) {
      // The url field will require support for asynchronicity.
      // See https://github.com/mozilla/source-map/issues/16
      throw new Error('Support for url field in sections not implemented.');
    }
    var offset = util.getArg(s, 'offset');
    var offsetLine = util.getArg(offset, 'line');
    var offsetColumn = util.getArg(offset, 'column');

    if (offsetLine < lastOffset.line ||
        (offsetLine === lastOffset.line && offsetColumn < lastOffset.column)) {
      throw new Error('Section offsets must be ordered and non-overlapping.');
    }
    lastOffset = offset;

    return {
      generatedOffset: {
        // The offset fields are 0-based, but we use 1-based indices when
        // encoding/decoding from VLQ.
        generatedLine: offsetLine + 1,
        generatedColumn: offsetColumn + 1
      },
      consumer: new SourceMapConsumer(util.getArg(s, 'map'), aSourceMapURL)
    }
  });
}

IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;

/**
 * The version of the source mapping spec that we are consuming.
 */
IndexedSourceMapConsumer.prototype._version = 3;

/**
 * The list of original sources.
 */
Object.defineProperty(IndexedSourceMapConsumer.prototype, 'sources', {
  get: function () {
    var sources = [];
    for (var i = 0; i < this._sections.length; i++) {
      for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
        sources.push(this._sections[i].consumer.sources[j]);
      }
    }
    return sources;
  }
});

/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */
IndexedSourceMapConsumer.prototype.originalPositionFor =
  function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, 'line'),
      generatedColumn: util.getArg(aArgs, 'column')
    };

    // Find the section containing the generated position we're trying to map
    // to an original position.
    var sectionIndex = binarySearch.search(needle, this._sections,
      function(needle, section) {
        var cmp = needle.generatedLine - section.generatedOffset.generatedLine;
        if (cmp) {
          return cmp;
        }

        return (needle.generatedColumn -
                section.generatedOffset.generatedColumn);
      });
    var section = this._sections[sectionIndex];

    if (!section) {
      return {
        source: null,
        line: null,
        column: null,
        name: null
      };
    }

    return section.consumer.originalPositionFor({
      line: needle.generatedLine -
        (section.generatedOffset.generatedLine - 1),
      column: needle.generatedColumn -
        (section.generatedOffset.generatedLine === needle.generatedLine
         ? section.generatedOffset.generatedColumn - 1
         : 0),
      bias: aArgs.bias
    });
  };

/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */
IndexedSourceMapConsumer.prototype.hasContentsOfAllSources =
  function IndexedSourceMapConsumer_hasContentsOfAllSources() {
    return this._sections.every(function (s) {
      return s.consumer.hasContentsOfAllSources();
    });
  };

/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */
IndexedSourceMapConsumer.prototype.sourceContentFor =
  function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];

      var content = section.consumer.sourceContentFor(aSource, true);
      if (content) {
        return content;
      }
    }
    if (nullOnMissing) {
      return null;
    }
    else {
      throw new Error('"' + aSource + '" is not in the SourceMap.');
    }
  };

/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based. 
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */
IndexedSourceMapConsumer.prototype.generatedPositionFor =
  function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];

      // Only consider this section if the requested source is in the list of
      // sources of the consumer.
      if (section.consumer._findSourceIndex(util.getArg(aArgs, 'source')) === -1) {
        continue;
      }
      var generatedPosition = section.consumer.generatedPositionFor(aArgs);
      if (generatedPosition) {
        var ret = {
          line: generatedPosition.line +
            (section.generatedOffset.generatedLine - 1),
          column: generatedPosition.column +
            (section.generatedOffset.generatedLine === generatedPosition.line
             ? section.generatedOffset.generatedColumn - 1
             : 0)
        };
        return ret;
      }
    }

    return {
      line: null,
      column: null
    };
  };

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
IndexedSourceMapConsumer.prototype._parseMappings =
  function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    this.__generatedMappings = [];
    this.__originalMappings = [];
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];
      var sectionMappings = section.consumer._generatedMappings;
      for (var j = 0; j < sectionMappings.length; j++) {
        var mapping = sectionMappings[j];

        var source = section.consumer._sources.at(mapping.source);
        source = util.computeSourceURL(section.consumer.sourceRoot, source, this._sourceMapURL);
        this._sources.add(source);
        source = this._sources.indexOf(source);

        var name = null;
        if (mapping.name) {
          name = section.consumer._names.at(mapping.name);
          this._names.add(name);
          name = this._names.indexOf(name);
        }

        // The mappings coming from the consumer for the section have
        // generated positions relative to the start of the section, so we
        // need to offset them to be relative to the start of the concatenated
        // generated file.
        var adjustedMapping = {
          source: source,
          generatedLine: mapping.generatedLine +
            (section.generatedOffset.generatedLine - 1),
          generatedColumn: mapping.generatedColumn +
            (section.generatedOffset.generatedLine === mapping.generatedLine
            ? section.generatedOffset.generatedColumn - 1
            : 0),
          originalLine: mapping.originalLine,
          originalColumn: mapping.originalColumn,
          name: name
        };

        this.__generatedMappings.push(adjustedMapping);
        if (typeof adjustedMapping.originalLine === 'number') {
          this.__originalMappings.push(adjustedMapping);
        }
      }
    }

    quickSort$1(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
    quickSort$1(this.__originalMappings, util.compareByOriginalPositions);
  };

var IndexedSourceMapConsumer_1 = IndexedSourceMapConsumer;

var sourceMapConsumer = {
	SourceMapConsumer: SourceMapConsumer_1,
	BasicSourceMapConsumer: BasicSourceMapConsumer_1,
	IndexedSourceMapConsumer: IndexedSourceMapConsumer_1
};

var SourceMapConsumer$1 = sourceMapConsumer.SourceMapConsumer;

function get_sourcemap_url(contents) {
    const reversed = contents
        .split('\n')
        .reverse()
        .join('\n');
    const match = /\/[/*]#[ \t]+sourceMappingURL=([^\s'"]+?)(?:[ \t]+|$)/gm.exec(reversed);
    if (match)
        return match[1];
    return undefined;
}
const file_cache = new Map();
function get_file_contents(file_path) {
    if (file_cache.has(file_path)) {
        return file_cache.get(file_path);
    }
    try {
        const data = fs__default['default'].readFileSync(file_path, 'utf8');
        file_cache.set(file_path, data);
        return data;
    }
    catch (_a) {
        return undefined;
    }
}
function sourcemap_stacktrace(stack) {
    const replace = (line) => line.replace(/^ {4}at (?:(.+?)\s+\()?(?:(.+?):(\d+)(?::(\d+))?)\)?/, (input, var_name, file_path, line_num, column) => {
        if (!file_path)
            return input;
        const contents = get_file_contents(file_path);
        if (!contents)
            return input;
        const sourcemap_url = get_sourcemap_url(contents);
        if (!sourcemap_url)
            return input;
        let dir = path__default['default'].dirname(file_path);
        let sourcemap_data;
        if (/^data:application\/json[^,]+base64,/.test(sourcemap_url)) {
            const raw_data = sourcemap_url.slice(sourcemap_url.indexOf(',') + 1);
            try {
                sourcemap_data = Buffer.from(raw_data, 'base64').toString();
            }
            catch (_a) {
                return input;
            }
        }
        else {
            const sourcemap_path = path__default['default'].resolve(dir, sourcemap_url);
            const data = get_file_contents(sourcemap_path);
            if (!data)
                return input;
            sourcemap_data = data;
            dir = path__default['default'].dirname(sourcemap_path);
        }
        let raw_sourcemap;
        try {
            raw_sourcemap = JSON.parse(sourcemap_data);
        }
        catch (_b) {
            return input;
        }
        const consumer = new SourceMapConsumer$1(raw_sourcemap);
        const pos = consumer.originalPositionFor({
            line: Number(line_num),
            column: Number(column),
            bias: SourceMapConsumer$1.LEAST_UPPER_BOUND
        });
        if (!pos.source)
            return input;
        const source_path = path__default['default'].resolve(dir, pos.source);
        const source = `${source_path}:${pos.line || 0}:${pos.column || 0}`;
        if (!var_name)
            return `    at ${source}`;
        return `    at ${var_name} (${source})`;
    });
    file_cache.clear();
    return stack
        .split('\n')
        .map(replace)
        .join('\n');
}

function get_page_handler(manifest, session_getter) {
    const get_build_info = (assets => () => assets)(JSON.parse(fs__default['default'].readFileSync(path__default['default'].join(build_dir, 'build.json'), 'utf-8')));
    const template = (str => () => str)(read_template(build_dir));
    const has_service_worker = fs__default['default'].existsSync(path__default['default'].join(build_dir, 'service-worker.js'));
    const { pages, error: error_route } = manifest;
    function bail(res, err) {
        console.error(err);
        const message = 'Internal server error';
        res.statusCode = 500;
        res.end(`<pre>${message}</pre>`);
    }
    function handle_error(req, res, statusCode, error) {
        handle_page({
            pattern: null,
            parts: [
                { name: null, component: { default: error_route } }
            ]
        }, req, res, statusCode, error || 'Unknown error');
    }
    function handle_page(page, req, res, status = 200, error = null) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const is_service_worker_index = req.path === '/service-worker-index.html';
            const build_info = get_build_info();
            res.setHeader('Content-Type', 'text/html');
            // preload main js and css
            // TODO detect other stuff we can preload like fonts?
            let preload_files = Array.isArray(build_info.assets.main) ? build_info.assets.main : [build_info.assets.main];
            if ((_a = build_info === null || build_info === void 0 ? void 0 : build_info.css) === null || _a === void 0 ? void 0 : _a.main) {
                preload_files = preload_files.concat((_b = build_info === null || build_info === void 0 ? void 0 : build_info.css) === null || _b === void 0 ? void 0 : _b.main);
            }
            let es6_preload = false;
            if (build_info.bundler === 'rollup') {
                es6_preload = true;
                const route = page.parts[page.parts.length - 1].file;
                const deps = build_info.dependencies[route];
                if (deps) {
                    preload_files = preload_files.concat(deps);
                }
            }
            else if (!error && !is_service_worker_index) {
                page.parts.forEach(part => {
                    if (!part)
                        return;
                    // using concat because it could be a string or an array. thanks webpack!
                    preload_files = preload_files.concat(build_info.assets[part.name]);
                });
            }
            const link = preload_files
                .filter((v, i, a) => a.indexOf(v) === i) // remove any duplicates
                .filter(file => file && !file.match(/\.map$/)) // exclude source maps
                .map((file) => {
                const as = /\.css$/.test(file) ? 'style' : 'script';
                const rel = es6_preload && as === 'script' ? 'modulepreload' : 'preload';
                return `<${req.baseUrl}/client/${file}>;rel="${rel}";as="${as}"`;
            })
                .join(', ');
            res.setHeader('Link', link);
            let session;
            try {
                session = yield session_getter(req, res);
            }
            catch (err) {
                return bail(res, err);
            }
            let redirect;
            let preload_error;
            const preload_context = {
                redirect: (statusCode, location) => {
                    if (redirect && (redirect.statusCode !== statusCode || redirect.location !== location)) {
                        throw new Error('Conflicting redirects');
                    }
                    location = location.replace(/^\//g, ''); // leading slash (only)
                    redirect = { statusCode, location };
                },
                error: (statusCode, message) => {
                    preload_error = { statusCode, message };
                },
                fetch: (url, opts) => {
                    const protocol = req.socket.encrypted ? 'https' : 'http';
                    const parsed = new Url__default['default'].URL(url, `${protocol}://127.0.0.1:${process.env.PORT}${req.baseUrl ? req.baseUrl + '/' : ''}`);
                    opts = Object.assign({}, opts);
                    const include_credentials = (opts.credentials === 'include' ||
                        opts.credentials !== 'omit' && parsed.origin === `${protocol}://127.0.0.1:${process.env.PORT}`);
                    if (include_credentials) {
                        opts.headers = Object.assign({}, opts.headers);
                        const cookies = Object.assign({}, parse_1(req.headers.cookie || ''), parse_1(opts.headers.cookie || ''));
                        const set_cookie = res.getHeader('Set-Cookie');
                        (Array.isArray(set_cookie) ? set_cookie : [set_cookie]).forEach((s) => {
                            const m = /([^=]+)=([^;]+)/.exec(s);
                            if (m)
                                cookies[m[1]] = m[2];
                        });
                        const str = Object.keys(cookies)
                            .map(key => `${key}=${cookies[key]}`)
                            .join('; ');
                        opts.headers.cookie = str;
                        if (!opts.headers.authorization && req.headers.authorization) {
                            opts.headers.authorization = req.headers.authorization;
                        }
                    }
                    return fetch(parsed.href, opts);
                }
            };
            let preloaded;
            let match;
            let params;
            try {
                const root_preload = manifest.root_comp.preload || (() => { });
                const root_preloaded = root_preload.call(preload_context, {
                    host: req.headers.host,
                    path: req.path,
                    query: req.query,
                    params: {}
                }, session);
                match = error ? null : page.pattern.exec(req.path);
                let toPreload = [root_preloaded];
                if (!is_service_worker_index) {
                    toPreload = toPreload.concat(page.parts.map(part => {
                        if (!part)
                            return null;
                        // the deepest level is used below, to initialise the store
                        params = part.params ? part.params(match) : {};
                        return part.component.preload
                            ? part.component.preload.call(preload_context, {
                                host: req.headers.host,
                                path: req.path,
                                query: req.query,
                                params
                            }, session)
                            : {};
                    }));
                }
                preloaded = yield Promise.all(toPreload);
            }
            catch (err) {
                if (error) {
                    return bail(res, err);
                }
                preload_error = { statusCode: 500, message: err };
                preloaded = []; // appease TypeScript
            }
            try {
                if (redirect) {
                    const location = Url__default['default'].resolve((req.baseUrl || '') + '/', redirect.location);
                    res.statusCode = redirect.statusCode;
                    res.setHeader('Location', location);
                    res.end();
                    return;
                }
                if (preload_error) {
                    if (!error) {
                        handle_error(req, res, preload_error.statusCode, preload_error.message);
                    }
                    else {
                        bail(res, preload_error.message);
                    }
                    return;
                }
                const segments = req.path.split('/').filter(Boolean);
                // TODO make this less confusing
                const layout_segments = [segments[0]];
                let l = 1;
                page.parts.forEach((part, i) => {
                    layout_segments[l] = segments[i + 1];
                    if (!part)
                        return null;
                    l++;
                });
                if (error instanceof Error && error.stack) {
                    error.stack = sourcemap_stacktrace(error.stack);
                }
                const pageContext = {
                    host: req.headers.host,
                    path: req.path,
                    query: req.query,
                    params,
                    error: error
                        ? error instanceof Error
                            ? error
                            : { message: error, name: 'PreloadError' }
                        : null
                };
                const props = {
                    stores: {
                        page: {
                            subscribe: writable(pageContext).subscribe
                        },
                        preloading: {
                            subscribe: writable(null).subscribe
                        },
                        session: writable(session)
                    },
                    segments: layout_segments,
                    status: error ? status : 200,
                    error: pageContext.error,
                    level0: {
                        props: preloaded[0]
                    },
                    level1: {
                        segment: segments[0],
                        props: {}
                    }
                };
                if (!is_service_worker_index) {
                    let level_index = 1;
                    for (let i = 0; i < page.parts.length; i += 1) {
                        const part = page.parts[i];
                        if (!part)
                            continue;
                        props[`level${level_index++}`] = {
                            component: part.component.default,
                            props: preloaded[i + 1] || {},
                            segment: segments[i]
                        };
                    }
                }
                const { html, head, css } = App.render(props);
                const serialized = {
                    preloaded: `[${preloaded.map(data => try_serialize(data, err => {
                        console.error(`Failed to serialize preloaded data to transmit to the client at the /${segments.join('/')} route: ${err.message}`);
                        console.warn('The client will re-render over the server-rendered page fresh instead of continuing where it left off. See https://sapper.svelte.dev/docs#Return_value for more information');
                    })).join(',')}]`,
                    session: session && try_serialize(session, err => {
                        throw new Error(`Failed to serialize session data: ${err.message}`);
                    }),
                    error: error && serialize_error(props.error)
                };
                let script = `__SAPPER__={${[
                    error && `error:${serialized.error},status:${status}`,
                    `baseUrl:"${req.baseUrl}"`,
                    serialized.preloaded && `preloaded:${serialized.preloaded}`,
                    serialized.session && `session:${serialized.session}`
                ].filter(Boolean).join(',')}};`;
                if (has_service_worker) {
                    script += `if('serviceWorker' in navigator)navigator.serviceWorker.register('${req.baseUrl}/service-worker.js');`;
                }
                const file = [].concat(build_info.assets.main).filter(f => f && /\.js$/.test(f))[0];
                const main = `${req.baseUrl}/client/${file}`;
                // users can set a CSP nonce using res.locals.nonce
                const nonce_value = (res.locals && res.locals.nonce) ? res.locals.nonce : '';
                const nonce_attr = nonce_value ? ` nonce="${nonce_value}"` : '';
                if (build_info.bundler === 'rollup') {
                    if (build_info.legacy_assets) {
                        const legacy_main = `${req.baseUrl}/client/legacy/${build_info.legacy_assets.main}`;
                        script += `(function(){try{eval("async function x(){}");var main="${main}"}catch(e){main="${legacy_main}"};var s=document.createElement("script");try{new Function("if(0)import('')")();s.src=main;s.type="module";s.crossOrigin="use-credentials";}catch(e){s.src="${req.baseUrl}/client/shimport@${build_info.shimport}.js";s.setAttribute("data-main",main);}document.head.appendChild(s);}());`;
                    }
                    else {
                        script += `var s=document.createElement("script");try{new Function("if(0)import('')")();s.src="${main}";s.type="module";s.crossOrigin="use-credentials";}catch(e){s.src="${req.baseUrl}/client/shimport@${build_info.shimport}.js";s.setAttribute("data-main","${main}")}document.head.appendChild(s)`;
                    }
                }
                else {
                    script += `</script><script${nonce_attr} src="${main}" defer>`;
                }
                let styles;
                // TODO make this consistent across apps
                // TODO embed build_info in placeholder.ts
                if (build_info.css && build_info.css.main) {
                    const css_chunks = new Set(build_info.css.main);
                    page.parts.forEach(part => {
                        if (!part || !build_info.dependencies)
                            return;
                        const deps_for_part = build_info.dependencies[part.file];
                        if (deps_for_part) {
                            deps_for_part.filter(d => d.endsWith('.css')).forEach(chunk => {
                                css_chunks.add(chunk);
                            });
                        }
                    });
                    styles = Array.from(css_chunks)
                        .map(href => `<link rel="stylesheet" href="client/${href}">`)
                        .join('');
                }
                else {
                    styles = (css && css.code ? `<style${nonce_attr}>${css.code}</style>` : '');
                }
                const body = template()
                    .replace('%sapper.base%', () => `<base href="${req.baseUrl}/">`)
                    .replace('%sapper.scripts%', () => `<script${nonce_attr}>${script}</script>`)
                    .replace('%sapper.html%', () => html)
                    .replace('%sapper.head%', () => head)
                    .replace('%sapper.styles%', () => styles)
                    .replace(/%sapper\.cspnonce%/g, () => nonce_value);
                res.statusCode = status;
                res.end(body);
            }
            catch (err) {
                if (error) {
                    bail(res, err);
                }
                else {
                    handle_error(req, res, 500, err);
                }
            }
        });
    }
    return function find_route(req, res, next) {
        const path = req.path === '/service-worker-index.html' ? '/' : req.path;
        const page = pages.find(page => page.pattern.test(path));
        if (page) {
            handle_page(page, req, res);
        }
        else {
            handle_error(req, res, 404, 'Not found');
        }
    };
}
function read_template(dir = build_dir) {
    return fs__default['default'].readFileSync(`${dir}/template.html`, 'utf-8');
}
function try_serialize(data, fail) {
    try {
        return devalue(data);
    }
    catch (err) {
        if (fail)
            fail(err);
        return null;
    }
}
// Ensure we return something truthy so the client will not re-render the page over the error
function serialize_error(error) {
    if (!error)
        return null;
    let serialized = try_serialize(error);
    if (!serialized) {
        const { name, message, stack } = error;
        serialized = try_serialize({ name, message, stack });
    }
    if (!serialized) {
        serialized = '{}';
    }
    return serialized;
}

function middleware(opts = {}) {
    const { session, ignore } = opts;
    let emitted_basepath = false;
    return compose_handlers(ignore, [
        (req, res, next) => {
            if (req.baseUrl === undefined) {
                let originalUrl = req.originalUrl || req.url;
                if (req.url === '/' && originalUrl[originalUrl.length - 1] !== '/') {
                    originalUrl += '/';
                }
                req.baseUrl = originalUrl
                    ? originalUrl.slice(0, -req.url.length)
                    : '';
            }
            if (!emitted_basepath && process.send) {
                process.send({
                    __sapper__: true,
                    event: 'basepath',
                    basepath: req.baseUrl
                });
                emitted_basepath = true;
            }
            if (req.path === undefined) {
                req.path = req.url.replace(/\?.*/, '');
            }
            next();
        },
        fs__default['default'].existsSync(path__default['default'].join(build_dir, 'service-worker.js')) && serve({
            pathname: '/service-worker.js',
            cache_control: 'no-cache, no-store, must-revalidate'
        }),
        fs__default['default'].existsSync(path__default['default'].join(build_dir, 'service-worker.js.map')) && serve({
            pathname: '/service-worker.js.map',
            cache_control: 'no-cache, no-store, must-revalidate'
        }),
        serve({
            prefix: '/client/',
            cache_control: 'max-age=31536000, immutable'
        }),
        get_server_route_handler(manifest.server_routes),
        get_page_handler(manifest, session || noop)
    ].filter(Boolean));
}
function compose_handlers(ignore, handlers) {
    const total = handlers.length;
    function nth_handler(n, req, res, next) {
        if (n >= total) {
            return next();
        }
        handlers[n](req, res, () => nth_handler(n + 1, req, res, next));
    }
    return !ignore
        ? (req, res, next) => nth_handler(0, req, res, next)
        : (req, res, next) => {
            if (should_ignore(req.path, ignore)) {
                next();
            }
            else {
                nth_handler(0, req, res, next);
            }
        };
}
function should_ignore(uri, val) {
    if (Array.isArray(val))
        return val.some(x => should_ignore(uri, x));
    if (val instanceof RegExp)
        return val.test(uri);
    if (typeof val === 'function')
        return val(uri);
    return uri.startsWith(val.charCodeAt(0) === 47 ? val : `/${val}`);
}
function serve({ prefix, pathname, cache_control }) {
    const filter = pathname
        ? (req) => req.path === pathname
        : (req) => req.path.startsWith(prefix);
    const cache = new Map();
    const read = (file) => (cache.has(file) ? cache : cache.set(file, fs__default['default'].readFileSync(path__default['default'].join(build_dir, file)))).get(file);
    return (req, res, next) => {
        if (filter(req)) {
            const type = lite.getType(req.path);
            try {
                const file = path__default['default'].posix.normalize(decodeURIComponent(req.path));
                const data = read(file);
                res.setHeader('Content-Type', type);
                res.setHeader('Cache-Control', cache_control);
                res.end(data);
            }
            catch (err) {
                if (err.code === 'ENOENT') {
                    next();
                }
                else {
                    console.error(err);
                    res.statusCode = 500;
                    res.end('an error occurred while reading a static file from disk');
                }
            }
        }
        else {
            next();
        }
    };
}
function noop() { }

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

polka__default['default']() // You can also use Express
	.use(
		compression__default['default']({ threshold: 0 }),
		sirv__default['default']('static', { dev }),
		middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
