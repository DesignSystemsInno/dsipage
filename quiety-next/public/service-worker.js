if(!self.define){let e,a={};const i=(i,s)=>(i=new URL(i+".js",s).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(a[r])return;let n={};const f=e=>i(e,r),b={module:{uri:r},exports:n,require:f};a[r]=Promise.all(s.map((e=>b[e]||f(e)))).then((e=>(c(...e),n)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts("fallback-yOfX5spI9KeXUbKQ9XDT6.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/8.png",revision:"b23eb68072a23b369a41398b3e95945d"},{url:"/_next/static/chunks/0c428ae2-72327f8c04b6643f.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/chunks/1239-c0a6b6362aa2b983.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/chunks/1242-ca3c24e96844ea12.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/chunks/1a48c3c1-0e795e08a5f5b447.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/chunks/1bfc9850-084f6d9034b030bf.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/chunks/2847-8cb982d8f16e5ab0.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/chunks/2873-cbf86a2f00ec4c7f.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/chunks/3061-4540cbe370f895eb.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/chunks/3151-214758a7e5e39c77.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/chunks/31664189-89f97ca15908cf4c.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/chunks/3547-60155280cfc2e0ad.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/chunks/3864-9c614f7c1ac8e399.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/chunks/6153-ef3c36ee51ba5cec.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/chunks/6562-dc9f160785c100bb.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/chunks/6728d85a-69812f81b60c246e.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/chunks/6893-2375cd9fae036f3f.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/chunks/78e521c3-b4ad8528369112a9.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/chunks/8233-e427979a2038515e.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/chunks/8650-3af737fc8c48a204.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/chunks/9463-a2aaf24354420b01.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/chunks/9958-13cb124492e9b840.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/chunks/ae51ba48-4f455daa622fd88d.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/chunks/d0447323-33de40ff8b6f991f.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/chunks/d64684d8-3708926e1a5c874d.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/chunks/de71a805-1ef23adee8d89186.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/chunks/framework-e37ccac3fdd03b9d.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/chunks/main-6e2b1f4d665929ed.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/chunks/pages/404-c07f26f49ef9d75a.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/chunks/pages/_app-2f2286cbfc1492d1.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/chunks/pages/_error-25839e52160ad85d.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/chunks/pages/_offline-f321e12f4d964b62.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/chunks/pages/about-us-522f1258cedab9bf.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/chunks/pages/app-landing-1c0efbc91ec3e056.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/chunks/pages/app-landing-two-b5ee08d8ee501179.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/chunks/pages/blog-single-88bbfc6c5a7fe880.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/chunks/pages/blogs-129b898d35be69b1.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/chunks/pages/career-ad9a7ce5665cbe82.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/chunks/pages/career-single-7bd845d312300892.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/chunks/pages/coming-soon-26502e6625c80450.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/chunks/pages/contact-us-ab067d402da93f99.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/chunks/pages/data-analysis-4e62899835eeb14b.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/chunks/pages/desktop-app-51ce02fe3f1a7e13.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/chunks/pages/help-center-677fd305bd0e8e54.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/chunks/pages/help-center-single-164279347b584233.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/chunks/pages/index-59b169a790f7e19e.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/chunks/pages/integration-single-a8f2dd71886037ac.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/chunks/pages/integrations-f7389dd7f8e33f84.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/chunks/pages/login-93cdd58727a36d15.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/chunks/pages/password-reset-5ace0827183b4eab.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/chunks/pages/pricing-caf94a06936a192f.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/chunks/pages/register-6e36be7a2545d633.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/chunks/pages/request-demo-24533d559c914def.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/chunks/pages/sass-company-two-60a302cf67f34434.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/chunks/pages/services-5f07a202154a145d.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/chunks/pages/single-service-dbc747da9e0fc76b.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/chunks/pages/software-application-47491208fd5e7aa8.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/chunks/pages/startup-agency-631534090b8762c9.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/chunks/webpack-26c22de39e1969d9.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/css/db36d6a113357109.css",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/media/fa-brands-400.a3aa499a.woff2",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/media/fa-brands-400.def301a9.woff",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/media/fa-duotone-900.3df397be.woff2",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/media/fa-duotone-900.aa50432f.woff",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/media/fa-light-300.65fae12d.woff2",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/media/fa-light-300.91081ddf.woff",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/media/fa-regular-400.192344c0.woff2",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/media/fa-regular-400.ba6ab777.woff",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/media/fa-solid-900.57e9cc37.woff2",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/media/fa-solid-900.ddc2acbc.woff",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/media/fa-thin-100.0e39a0ea.woff2",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/media/fa-thin-100.a9411867.woff",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/yOfX5spI9KeXUbKQ9XDT6/_buildManifest.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/yOfX5spI9KeXUbKQ9XDT6/_middlewareManifest.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_next/static/yOfX5spI9KeXUbKQ9XDT6/_ssgManifest.js",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_offline",revision:"yOfX5spI9KeXUbKQ9XDT6"},{url:"/_redirects",revision:"ec5c809ab4b77e96308e512c6a5f8210"},{url:"/about-img-1.jpg",revision:"69e88ea5198b8c569493c98d88437b60"},{url:"/about-img-2.jpg",revision:"14f0731320e88ccb098ee90d66c4b47d"},{url:"/about-img-3.jpg",revision:"61e709f4e32d952a9056159fa74f7795"},{url:"/app-download-cta.png",revision:"9ad90aa24891a320d408b91e35ea04df"},{url:"/app-two-chart.png",revision:"34015b5155a4bc67d12b0b515eb426d2"},{url:"/app-two-feature-blob-shape.png",revision:"4e21d745ca8fa43b5177ea78bd9c6dd6"},{url:"/app-two-feature-phone-with-shape.png",revision:"1e715e596d588ebdbdcd67f03ead055d"},{url:"/app-two-feature-phone-without-shape.png",revision:"31ea9a88f10785bc505aa83b521d7590"},{url:"/app-two-file.png",revision:"1a4597c3ea8d253a61b629c4dc388956"},{url:"/app-two-mockup-bg.png",revision:"b8d93cb5be1cbbc408e4e4f0a27f7c62"},{url:"/app-two-mockup.png",revision:"a0f93cb281008b6a0f0bba150ab892af"},{url:"/app-two-phone.png",revision:"88f4d94e33798608ccd3cceb594bd172"},{url:"/app-two-video-shape.png",revision:"3ad5247329717942e5871e0a4b5933a5"},{url:"/apply-now-1.jpg",revision:"3adcdad7915bd9729d8f95a70ba2ca12"},{url:"/awards-01.svg",revision:"283aaa2c72b17f5f1f34ca73f3350c2c"},{url:"/awards-02.svg",revision:"f9c2d832e28ca622ff2cdcdeb2e70088"},{url:"/bg-wave-shape.svg",revision:"e43a463ea26d9b723c001d93683ad847"},{url:"/blog/blog-1.jpg",revision:"88abd33a17e5a8da4e8c138810ca0a2f"},{url:"/blog/blog-10.jpg",revision:"43e352cdd10f530a84567f0de28c9b32"},{url:"/blog/blog-11.jpg",revision:"5a24f61015c38e4c1e53aec93ed0af76"},{url:"/blog/blog-12.jpg",revision:"7ac5c4c392a5acc389e1ba89f5041044"},{url:"/blog/blog-2.jpg",revision:"2ba5404353ee8296465e1565d84b8be1"},{url:"/blog/blog-3.jpg",revision:"9ccb77568b2f83ce5f4c435e5cf20d5d"},{url:"/blog/blog-4.jpg",revision:"347a1478902502481d88fd991bf623c0"},{url:"/blog/blog-5.jpg",revision:"3cfc7ee6757311d19d6185da27bbb93c"},{url:"/blog/blog-6.jpg",revision:"95a42ae18659ea49b529d88c4bc81adb"},{url:"/blog/blog-7.jpg",revision:"53cb3e2848d5af10919e735111549f3a"},{url:"/blog/blog-8.jpg",revision:"a7506bd3ad0e20add597251107ee158f"},{url:"/blog/blog-9.jpg",revision:"e11cf5ed3a277685ac0218290fdd5f37"},{url:"/clients/1.svg",revision:"542fad6ab627a6cb23eba25c0dfb0582"},{url:"/clients/2.svg",revision:"e07a4d0ab68470ba38f3d853885388b9"},{url:"/clients/3.svg",revision:"65236be359bb9b2b0ad8a6b2efd352d6"},{url:"/clients/4.svg",revision:"54df9ef6cba3c30edbdd5fa853ca6e67"},{url:"/clients/5.svg",revision:"01360630f06c773f70158ac14f8e43ea"},{url:"/clients/6.svg",revision:"73b466ba7e82089ea38c2ddc6f0cd0ca"},{url:"/clients/7.svg",revision:"43ac56e3466d1209c3c219b7867b18fa"},{url:"/clients/8.svg",revision:"0bc37423070a6de6178c6ed5b2528a03"},{url:"/clients/client-1.svg",revision:"05c4237c9246f544211e1c087edefc7f"},{url:"/clients/client-2.svg",revision:"772bcccf56d7142065254dca2f507fa7"},{url:"/clients/client-3.svg",revision:"05c4237c9246f544211e1c087edefc7f"},{url:"/clients/client-4.svg",revision:"05c1060c545ee26d7beb0c481b154fad"},{url:"/clients/client-5.svg",revision:"f64584cb67610969612ed0e39aba01eb"},{url:"/clients/client-6.svg",revision:"bb156dd70977dbfe3725dc76ad1d538d"},{url:"/clients/client-7.svg",revision:"1d9bbaf02671dd4deb67e84fbed91400"},{url:"/clients/client-8.svg",revision:"15be5531683387bfbe8fecfb218cb955"},{url:"/clients/client-logo-1.svg",revision:"cdd360dd7b69cedbd42694c26c22a81d"},{url:"/clients/client-logo-2.svg",revision:"808ca1381af332b9d0c129aeabc89f74"},{url:"/clients/client-logo-3.svg",revision:"03b5c1ef69a077c808a9808ea8f98865"},{url:"/clients/client-logo-4.svg",revision:"de905cd1e8e234ac41c66a8ad1dfb8f7"},{url:"/clients/client-logo-5.svg",revision:"8556727463f47c72560af33857697fb7"},{url:"/clients/client-logo-6.svg",revision:"20a55027b2da0decff0905305fe31196"},{url:"/clients/client-logo-7.svg",revision:"114a3eae29385476c060a5b6913d6ed2"},{url:"/clients/client-logo-8.svg",revision:"2cbdd4a90f25b8882174f82013850a51"},{url:"/clients/partner-1.png",revision:"dcb300fe9ed42912695c66d6c0e81aaf"},{url:"/clients/partner-10.png",revision:"20fcfe63b42375f2e97db324cfc00804"},{url:"/clients/partner-2.png",revision:"e52df4fe6b5e2c486d392a3e64e9a5d6"},{url:"/clients/partner-3.png",revision:"a17e4c13102ecc2120558c87dca3b7a7"},{url:"/clients/partner-4.png",revision:"57ffe6a1d1b86e2177bc51e38b49acfe"},{url:"/clients/partner-5.png",revision:"cf7ed9355043378bc925f8baeec7237b"},{url:"/clients/partner-6.png",revision:"0595edd0c345b0cbfb5cc32b721a02a2"},{url:"/clients/partner-7.png",revision:"bbe9b5493c8ecd6bf91bd8aa9c75da51"},{url:"/clients/partner-8.png",revision:"0a607a92920103f57d4e0e0addf5a6c6"},{url:"/clients/partner-9.png",revision:"3558ff0f7d1e5e777c62760c817df769"},{url:"/color-shape/feature-1.svg",revision:"524bc3b8c5285b504468efe597a16dac"},{url:"/color-shape/feature-2.svg",revision:"9e6923ff0fccac980deddceb6d221aec"},{url:"/color-shape/feature-3.svg",revision:"26b1894c070b39c0e5bcd02ec0193a6c"},{url:"/color-shape/image-1.svg",revision:"6b45f1793c4bc599f5d4cda90f700c04"},{url:"/color-shape/image-2.svg",revision:"2d78e552f0d79e165941a6758641aa9f"},{url:"/color-shape/image-3.svg",revision:"7620788a6942ef047cc65ce79bde979f"},{url:"/color-shape/image-4.svg",revision:"c95b2fd341a6e236834ae6956e382e10"},{url:"/color-shape/image-5.svg",revision:"d9eb0fadaf91e2c01de1ba2ee2930ed5"},{url:"/color-shape/image-6.svg",revision:"6be7b7261335196c76be5b803008e92d"},{url:"/color-shape/image-7.svg",revision:"a88d509c20e5831d01873ac350887836"},{url:"/company/10.png",revision:"5c770f2a96bad6809982595c3618e23e"},{url:"/company/2.png",revision:"1ccd11e32f78610eaf00ac6666e91756"},{url:"/company/3.png",revision:"edbb541f93cd731b61215fe9cd87d9a7"},{url:"/company/4.png",revision:"8a4620c2004c620ad96b833f67681b94"},{url:"/company/5.png",revision:"52f0a4879cd82c279f1621aaef61f3ac"},{url:"/company/6.png",revision:"a8bf3832a222d84908d64801652ce7f5"},{url:"/company/8.png",revision:"2fb015bcb1405cef255545bae2e0d748"},{url:"/company/9.png",revision:"069498510d16b94827a00c654b5bf530"},{url:"/contact-us-img-1.svg",revision:"151ad11ff3b4d2b30a80bd07df7d7c19"},{url:"/contact-us-img-2.svg",revision:"c2907f1581f0ea361d098afd3ecf1c4c"},{url:"/cta-img-1.png",revision:"98208a40c633d74621bc63cef27d12cf"},{url:"/cta-img-2.png",revision:"68ed7e32c7a6c970e5c915e8c46fc328"},{url:"/dashboard-img-2.png",revision:"dc636bb668904dfb7af1644fbeb4bba3"},{url:"/dashboard-img-4.png",revision:"82240b936b01cddaa96a7311ed58a147"},{url:"/dashboard-img.png",revision:"9efab91de16ffa69068678484abb0691"},{url:"/dashboard-img.svg",revision:"a0ebb55e20c72bf65fec606d179011c2"},{url:"/dashkit.png",revision:"7720cd0ed3b704f66812d1827c5e3dde"},{url:"/dots-pattern.svg",revision:"6eb19f4d08b40a84a4826b5bb3156ce5"},{url:"/dots.svg",revision:"4d35eeba69e6307d5e111a37083f2411"},{url:"/dropdown-arrow.svg",revision:"68ca985dfba3d38bd68dda71760b182c"},{url:"/facebook-icon.svg",revision:"9373ffcdaafccef7c5aa82a1c9b7c0c6"},{url:"/faq-1.svg",revision:"bed15c68ac9b6d64e3565671e2a99e57"},{url:"/faq.svg",revision:"600d096f14ea9cacbb3be760d4cd66ea"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/favicon.png",revision:"8888166e3c2bda19a2c0e6d3d57fd655"},{url:"/fb-logo-w.svg",revision:"13154cf54564347b45224bc9b5c0f957"},{url:"/feature-1.png",revision:"bc025874c3e015b80d34be04cfcdbcf6"},{url:"/feature-bg-1.jpg",revision:"5f512e0766ed2d159cd16ab1629af624"},{url:"/feature-hero-img-2.svg",revision:"393e111ff425df1d99404417b977286a"},{url:"/feature-hero-img.svg",revision:"18b6dd7fa0e334c41aeefd00732af347"},{url:"/feature-img-2.jpg",revision:"25bb1ab1087b09c31f45e2c356b302af"},{url:"/feature-img-3.svg",revision:"7f3bcfee7f133a1f0d8e684c0cb5d418"},{url:"/feature-img.jpg",revision:"a6e0cd6b7c9d9b6cbff4ba6ff5197b8d"},{url:"/feature-img.png",revision:"03a601c5bd8a2275e0632d4441fa5d66"},{url:"/feature-img3.jpg",revision:"0be4cd8b538e5949f69be5bc688e6227"},{url:"/feature-tab-1.png",revision:"c9e524fc6c609b3ffbf1d676b3934cff"},{url:"/feature-tab-2.png",revision:"5182938aec8c982225dabaf98349dcb9"},{url:"/feature-tab-3.png",revision:"b498e38fee28cdac90a18c755385cbc4"},{url:"/features-bg-left.svg",revision:"24eab931b6ad7d780066be9c03c055b9"},{url:"/features-bg.svg",revision:"6907fb9aa1aa34c37dca45941d41bcf5"},{url:"/g-logo-w.svg",revision:"9e0e9d072f2180fe5be2ff2da1257a1f"},{url:"/google-icon.svg",revision:"983a03354011c31ef97db10c64da7c9e"},{url:"/hero-1.png",revision:"e77b5e8eb3bd71fffaa4700ba3c0fb0a"},{url:"/hero-app-two-bg.jpg",revision:"7f52d1d5b2cc4ee41096210890d44011"},{url:"/hero-background-curbe.svg",revision:"82402f50ee2f6e2fcf438b0242cc8262"},{url:"/hero-bg-2.svg",revision:"6484ea1697fa7345d9a0824c2454f399"},{url:"/hero-bg-shapes.svg",revision:"cc515d986d086319155142f949b224c7"},{url:"/hero-bg.svg",revision:"c17bc9666909592e0c80e7a6b24cdfbd"},{url:"/hero-dot-bg.png",revision:"6e3cfb4f34aee0720e27d81e135a0663"},{url:"/hero-img.svg",revision:"db653e98e20f1be5771a0b9c8d21c7b4"},{url:"/icon-192x192.png",revision:"f5ff73e5a036e8e725472c1a7851569f"},{url:"/icon-256x256.png",revision:"d8f81f17b3f6c14950715c09e2baaa3d"},{url:"/icon-384x384.png",revision:"59ad56d4e0c824f31a23bb11a3a5642c"},{url:"/icon-512x512.png",revision:"f05d64ed51c41b3f602e0b600e170c80"},{url:"/integations/1.png",revision:"c743f3afb4661c656824ba1fbb1614f2"},{url:"/integations/10.png",revision:"8f3906283f86d9d985934a7435bd6418"},{url:"/integations/11.png",revision:"65957918aa9cc7373ac949ac57ffb0ee"},{url:"/integations/12.png",revision:"8aa696828735c1d3149bd9b3acb32585"},{url:"/integations/13.png",revision:"045cb14788a8bce6b231131574c6da20"},{url:"/integations/14.png",revision:"ef4b4d1bf3bf3949970111ce57ed7d46"},{url:"/integations/2.png",revision:"5727dcd47a864740795ed7cc53203e5f"},{url:"/integations/3.png",revision:"3905640acf5f9672ba74733f331369b4"},{url:"/integations/4.png",revision:"3c376eb62738cd485202836013e17665"},{url:"/integations/5.png",revision:"a3403dfe70716c79acc611bff5416fe6"},{url:"/integations/6.png",revision:"34074ecbe6d0ac154d63e1f462d5f1fa"},{url:"/integations/7.png",revision:"9c00c5f37687baf4350834e05a0915a7"},{url:"/integations/8.png",revision:"e86247e8faaf6505b73666a49bed02de"},{url:"/integations/9.png",revision:"ce1fa0387ea6fb566b76e65b66a63f08"},{url:"/integations/airbnb.png",revision:"088a36fa967cf5fa59cfd1ddf556dc1e"},{url:"/integations/airbnb.svg",revision:"02fb96d559b6281be93d65484a4ab39b"},{url:"/integations/atlassian.png",revision:"cc66c6f3816a7f52e95b0c388fab6a1f"},{url:"/integations/atlassian.svg",revision:"c8464b2e02c96666c958ae6f950392bc"},{url:"/integations/dropbox-2.png",revision:"37dec72236cd1845b542454fc3eb2f4f"},{url:"/integations/dropbox-2.svg",revision:"00eaa9ed4789af577c65f57d125f9ff5"},{url:"/integations/dynamic-365.png",revision:"b04d432a780eef556139b0cc7481047f"},{url:"/integations/dynamic-365.svg",revision:"021ae99f5072c2dc7c55a52455db68ad"},{url:"/integations/erecruiter.png",revision:"b0f00c6b4945387b0db9c4deb06ded41"},{url:"/integations/erecruiter.svg",revision:"eb4078a408fd46c19a2efa8249afeaa6"},{url:"/integations/evernote.png",revision:"ee7f08a0d0d3c3712baf28e8a772d4b9"},{url:"/integations/evernote.svg",revision:"45035a9e9e8a8272af17f9b64efec7a2"},{url:"/integations/facebook.png",revision:"4b767cef13c752b512fff7ffe2b12289"},{url:"/integations/facebook.svg",revision:"6526ed939df7228152b02c2f754681fa"},{url:"/integations/figma.png",revision:"ca178947bd2df7f34454ec41b6b1fcbe"},{url:"/integations/figma.svg",revision:"5ab1b7726615490bbbc7f9952d3493a8"},{url:"/integations/google-ad-manager.png",revision:"32dda0e737ba28a2af537305c4cf7feb"},{url:"/integations/google-ad-manager.svg",revision:"8eeeeb8ff8438e6edd6a290a72b05b23"},{url:"/integations/google-analytics.png",revision:"91c06ea5d9060e7d92d6fb4f278a2cce"},{url:"/integations/google-analytics.svg",revision:"dd874ba354d2658f69186c330f193fc1"},{url:"/integations/google-drive.png",revision:"6d3d056b51f77c69cdf7e64605238ee5"},{url:"/integations/google-drive.svg",revision:"1997756584bb9348028028bd6be60db8"},{url:"/integations/google-icon.png",revision:"2eee9d04e4a0dc24146be72e670f1303"},{url:"/integations/google-icon.svg",revision:"4055f132572c6e6ea39a25b7d9990955"},{url:"/integations/hubspot.png",revision:"265c8f8ac152d7868bdeb59ba3d7e5cd"},{url:"/integations/hubspot.svg",revision:"ba8a2eea01bca36534bb475dfd6a029d"},{url:"/integations/instagram.png",revision:"1d31f8876a59fceedc8592805091e76b"},{url:"/integations/instagram.svg",revision:"f334a60e327e8167257c779dab699bfc"},{url:"/integations/linkedin.png",revision:"47bad328234625d274d535861dce9c8d"},{url:"/integations/linkedin.svg",revision:"55b7f8aaab8f8e67f8666868d043d038"},{url:"/integations/mailchimp-1.svg",revision:"eda0280db9a24f504ddd609520740ad7"},{url:"/integations/mailchimp.png",revision:"45fba98cef3b4ce85b570b3836865a51"},{url:"/integations/mailchimp.svg",revision:"72a95fafcccbb1f978d11782d8bdfdcc"},{url:"/integations/marekto.png",revision:"670193b8ea41e3ddfe330b28997a47cb"},{url:"/integations/marekto.svg",revision:"dc46e048afcd595a8abcd41f6d98194b"},{url:"/integations/sales-force.png",revision:"df25689c9bcfb199307ace6b36a06d21"},{url:"/integations/sales-force.svg",revision:"a8ec3867442205a12dcd616e21a258a5"},{url:"/integations/shape.svg",revision:"eb465b1c3bf6523476d0ac54222bc6dd"},{url:"/integations/slack.png",revision:"903d3074bd8e433f5dab05289ecb1df4"},{url:"/integations/slack.svg",revision:"46e55616f66ec2fad4642ec11a17dcce"},{url:"/integations/twitter.png",revision:"87828eabe5a6e6daf4dd4cadac480601"},{url:"/integations/twitter.svg",revision:"1c46845b09bef4af4f41dae4d5044866"},{url:"/integations/zapier.png",revision:"95385eb1addc8906f7e71835d1c5b778"},{url:"/integations/zapier.svg",revision:"9facda385d06526cc8c8139184545dc4"},{url:"/integations/zeplin.png",revision:"209e16e05e3c01d20b500d31556313c2"},{url:"/integations/zeplin.svg",revision:"5a46acc77017a48a9589341fcec08087"},{url:"/li-logo-w.svg",revision:"6717504b99756d7f7a8b3ca3e6ecbdc9"},{url:"/logo-color.png",revision:"80105ca81d2a239b38b8490bb658baac"},{url:"/logo-white.png",revision:"dab9242e718a71f18ae2810263069733"},{url:"/logo192.png",revision:"33dbdd0177549353eeeb785d02c294af"},{url:"/logo512.png",revision:"917515db74ea8d1aee6a246cfbcc0b45"},{url:"/manifest.json",revision:"e48f18f6074b2cba9436475287992118"},{url:"/office-img-1.jpg",revision:"e7c5eca81314026637a37a600dce0dc0"},{url:"/office-img-2.jpg",revision:"340b3943aa2d99155f68487855581c50"},{url:"/office-img-3.jpg",revision:"59c8deecb6130224d021915d78d7a67c"},{url:"/office-img-4.jpg",revision:"eb4d1ff16f3ec5c32c54ed9526db0429"},{url:"/office-img-5.jpg",revision:"8aba890213ca9cea9e63fec55549c618"},{url:"/page-header-bg.png",revision:"d332158264fbc122052e91ab802292e6"},{url:"/page-header-bg.svg",revision:"034aa966443109d15318b10c366b81b2"},{url:"/payasgo-module.jpg",revision:"f1a85d304a32c37be410e14d87239cc3"},{url:"/popular-badge.svg",revision:"25bb92a6cb6f883a9e1b5bab323c6c32"},{url:"/robots.txt",revision:"61c27d2cd39a713f7829422c3d9edcc7"},{url:"/screen/animated-screen-1.svg",revision:"74ecf7626156f30364892f997f79e3a2"},{url:"/screen/animated-screen-2.svg",revision:"aa76f4bce0b6f5758e0bc89393253791"},{url:"/screen/animated-screen-3.svg",revision:"a4eec2232f4744399867453cecbc5896"},{url:"/screen/animated-screen-4.svg",revision:"81e9c53b9e0faaad54cb8baf7c82c4eb"},{url:"/screen/animated-screen-5.svg",revision:"c1106a56e83aa56c29efb793bbae7736"},{url:"/screen/animated-screen-6.svg",revision:"fe253fd783986563ec79e27725cb928a"},{url:"/screen/app-screen-1.jpg",revision:"f502b86897468459aa0801323ab5d47d"},{url:"/screen/app-screen-2.jpg",revision:"59579d1c4472b16781e1b182c55f331d"},{url:"/screen/app-screen-3.png",revision:"d922bec66e3548b0fc4b57570290dfcb"},{url:"/screen/app-screen-on-hand.png",revision:"7b1e6dd10d9f4ed97cc824e1770b3151"},{url:"/screen/feature.svg",revision:"a7d418d890a653cf8875f8b0f5959f3f"},{url:"/screen/half-iphone.svg",revision:"dba424665870b372be4b8b3541e3ba8b"},{url:"/screen/hero-app-screen-1.svg",revision:"733d74a1af5b743d331ce72402d2c2e9"},{url:"/screen/hero-app-screen-2.svg",revision:"c87cd8085a65d1a1ef3d9cd689b604b0"},{url:"/screen/hero-screen-3.svg",revision:"9643140e300b6f9aab78804a6927b8fc"},{url:"/screen/hero-screen.svg",revision:"988f3b76209e9a3f5dbbf6ad41e5bed2"},{url:"/screen/mac-screen.png",revision:"82b43a5fa442fc58a1c9fa0c677afb07"},{url:"/screen/phone-screen.png",revision:"ae1cd1664201e78a990421f7c37e93f3"},{url:"/screen/prioritization-screen-2.svg",revision:"034527a7df76aa04ab93ac69b8d9bdde"},{url:"/screen/prioritization-screen-3.svg",revision:"850a017a1be8031a2f97df0e244bd668"},{url:"/screen/prioritization-screen-4.svg",revision:"dca27e095f70fb56c63eccf5f4f812e3"},{url:"/screen/prioritization-screen.svg",revision:"83084ba52204720699895956161be770"},{url:"/screen/screen-1.svg",revision:"5b6566e644b5428958666c45a1c28acd"},{url:"/screen/screen-2.svg",revision:"24807fa23fe277acf1f33ce1d5a3d7e5"},{url:"/screen/screen-3.svg",revision:"ab047940a65226ab472dcc2eb57c5c4e"},{url:"/screen/screen-4.svg",revision:"88a0c986b34c437dcd4d63f256723f4d"},{url:"/screen/screen-5.svg",revision:"5df508762f502fc5067887090b21564b"},{url:"/screen/screen-6.svg",revision:"69977c238ce863c8316b943ffe6925a4"},{url:"/screen/screen-7.svg",revision:"7cf95509942c26c40277d867c3bcb71a"},{url:"/screen/screen-8.svg",revision:"a586c5970701604627f89a8a0bf7e404"},{url:"/screen/screen-9.svg",revision:"6fb3511800d60c33f2e72833fd4320e3"},{url:"/screen/widget-1.png",revision:"12d5ba6a59f7efcca63e1dc22cc9ec6f"},{url:"/screen/widget-1.svg",revision:"c6d65c70ea1b2de1eaf8b4434dd1303d"},{url:"/screen/widget-10.png",revision:"47515069a358ebc54687866d05623ac4"},{url:"/screen/widget-11.png",revision:"5198c607a66c340f2133ddcc05c494f1"},{url:"/screen/widget-12.png",revision:"d3ea76f965cf706f1964a6ab003e6b03"},{url:"/screen/widget-2.png",revision:"72b3564815f1971192aa6c7cc1d784e7"},{url:"/screen/widget-2.svg",revision:"9d665a5b1747caa68752ddd6c0900440"},{url:"/screen/widget-3.png",revision:"ebab6c7ce4664ad55916f99a3f4d5698"},{url:"/screen/widget-4.png",revision:"1ff3d311775b6e3e0e031744c9dbc012"},{url:"/screen/widget-5.png",revision:"41591ed0a05e6e34b8b5268abae2346c"},{url:"/screen/widget-6.png",revision:"004884b6fd2ad294d0f4e71d6e4d9da3"},{url:"/screen/widget-7.png",revision:"a05cf039f5750baedd2720103ffcbcde"},{url:"/screen/widget-8.png",revision:"0b26924f52b710527de6dae2efa37b40"},{url:"/screen/widget-9.png",revision:"da55ecd19eb4879b433c9d9ece39b1c2"},{url:"/screen/widget-b.svg",revision:"4fd40e6bbb2d8fd7d6076c89bdfa7214"},{url:"/screen/widget-d.svg",revision:"1ffb9f2ed62e449870d40d32a7f5fbf2"},{url:"/screen/widget-e.svg",revision:"74ffc3a6ea94921c0bdc282a481defb9"},{url:"/screen/widget-s.svg",revision:"22711f7e4d30249925af4424ef0d18b5"},{url:"/shape/arrow-shape-gray-dark.svg",revision:"e80639a773afdc85818f4bf49c7e65f8"},{url:"/shape/bg-weav-pattern-bottom.svg",revision:"ddfbf039976cef6bc5b77d624fc7b97e"},{url:"/shape/bg-weav-pattern-top.svg",revision:"ef449969f4e23b2d54805830761df5a6"},{url:"/shape/bg-weav-pattern.svg",revision:"ef449969f4e23b2d54805830761df5a6"},{url:"/shape/blob.svg",revision:"d111b1e85d95a5a510066f90eb7cca6e"},{url:"/shape/circel-shape-bottom-1.png",revision:"273abec1492e7cd638aeea6d96938949"},{url:"/shape/circel-shape-bottom-2.png",revision:"d16800abbbb6f43dd0b2617f73183379"},{url:"/shape/circel-shape-top-1.png",revision:"e1a74995097b6d0a64358658c69063bb"},{url:"/shape/circle-1.svg",revision:"3decfe035a703425d163176a9365e529"},{url:"/shape/circle-2.svg",revision:"3decfe035a703425d163176a9365e529"},{url:"/shape/circle-3.svg",revision:"3decfe035a703425d163176a9365e529"},{url:"/shape/circle-4.svg",revision:"3decfe035a703425d163176a9365e529"},{url:"/shape/circle-5.svg",revision:"3decfe035a703425d163176a9365e529"},{url:"/shape/circle-6.svg",revision:"3decfe035a703425d163176a9365e529"},{url:"/shape/color-particles-2.svg",revision:"63e443ecaa6c1665fb1f44a9abd0758b"},{url:"/shape/color-particles.svg",revision:"2ce367f6e0e55108a90ad0186e7c92ab"},{url:"/shape/color-shape-sm-2.svg",revision:"62a385430855723ce0d7e1260ed7a1bd"},{url:"/shape/color-shape-sm.svg",revision:"4dd6c226177b6472655c932d81e7631c"},{url:"/shape/contact-us-bg.svg",revision:"14bce4cf676918ef14a8dd5eb7e7a1cc"},{url:"/shape/dark-dots-circle.svg",revision:"a6a6b28f03918b1bfa2cbffb48e9af16"},{url:"/shape/dot-big-square.svg",revision:"d683c004f1f27c257251e97c0d5a723c"},{url:"/shape/dot-corner.svg",revision:"7efc0e04a7cdbea647b4eaad0f697dad"},{url:"/shape/dot-dot-wave-shape.svg",revision:"482dba814e29f80e8539e1b7e066a7fb"},{url:"/shape/dot-shape-color.svg",revision:"0698f13f546a1dc8943621c267ac30ab"},{url:"/shape/dot-small-square-color.svg",revision:"b3622b06c02e7ee33b7a3b8420a90e5b"},{url:"/shape/dot-small-square-w.svg",revision:"b7c9d32c7291f339ff634ac5ab1f644b"},{url:"/shape/paper-plane.png",revision:"5f16e885a30af4fecef01ca6ae0ce9a7"},{url:"/shape/shape-bg-2.svg",revision:"9a50e4dc48771ce636d44f3bdb29247a"},{url:"/shape/shape-bg-3-left.svg",revision:"631b4ea4be1aa615a4bcac7298a8f158"},{url:"/shape/shape-bg-3.svg",revision:"436189f025634954317ea61947ccf85b"},{url:"/shape/shape-bg.svg",revision:"59385f8e81075fb54456ecf1f0ae6381"},{url:"/shape/shape-gray-dark.svg",revision:"3b526d64cc4868ed1603f9510d2ed080"},{url:"/shape/weav-growth-shape.svg",revision:"98e23996f30b090c4193c089ca020264"},{url:"/shape/weav-shape.svg",revision:"1c42d5b1e21d921864c04941a4328e7f"},{url:"/shape/white-bg.png",revision:"64513d914a9d52b5bbb148a3f7b8ff65"},{url:"/software-integration.svg",revision:"87c3b45915ff9ea61bc3a99d52c7429f"},{url:"/status-screen.png",revision:"3ed8b9e8b6563727eae62c5e37003474"},{url:"/tab-1.svg",revision:"618c45998bbf8063df9db900de0aa3e3"},{url:"/tab-2.svg",revision:"78b1b7db2ca1a0bdd363f94404a7aa15"},{url:"/tab-3.svg",revision:"36d5c1121b36c6e3b26b2f76a53a04c1"},{url:"/tab-4.svg",revision:"b06d3612c3fa9c19c1df901495080dfb"},{url:"/tab-5.svg",revision:"1a786fd2c1d791ca569a92296d0a929c"},{url:"/tab-feature-img-1.png",revision:"154de6affd79688766493384f39dd32e"},{url:"/tab-feature-img-2.png",revision:"582ae4ba1ae2010760ca8a2fa16ce7fc"},{url:"/tab-feature-img-3.png",revision:"29d2231cea5829c3e1e40d4793e1eb44"},{url:"/tab-feature-img-4.png",revision:"1fa1e0df7445272a8e0f82112e3f2a38"},{url:"/tab-feature-img-5.png",revision:"341c3c71c16811bd06bbb45eb62d7ec8"},{url:"/team/team-1.jpg",revision:"8d6c80685d49b68979e4d3bc83344ea6"},{url:"/team/team-2.jpg",revision:"c37ade03bc9ea2b6de936a0704aae9b5"},{url:"/team/team-3.jpg",revision:"64f1fed12fdd491294cc831167383f61"},{url:"/team/team-4.jpg",revision:"1fb63a92a0d3acc4eb1eb76faa74b36c"},{url:"/team/team-5.jpg",revision:"5931ee574db7eaf2c894ea7bc96a3f3d"},{url:"/team/team-6.jpg",revision:"354c4f7d64a4e77ede4d8f56ace2212e"},{url:"/team/team-7.jpg",revision:"fab07eb52e1806c70f36dd9355782227"},{url:"/team/team-8.jpg",revision:"423548b9444a9ed120f2579f364a1118"},{url:"/testimonial/1.jpg",revision:"ee420a5f1cd565c2e926df19acd6e695"},{url:"/testimonial/2.jpg",revision:"ff583818e30a2a8742b7564ca2941428"},{url:"/testimonial/3.jpg",revision:"8a15184bc0459abe85aca3d1b2b86bf3"},{url:"/testimonial/4.jpg",revision:"d7b882e08b1073cd79c113a4872783fe"},{url:"/testimonial/5.jpg",revision:"2331d551e589ac71b523b9e5c80ea810"},{url:"/testimonial/6.jpg",revision:"2e5139b9ef8aa68f6fd8a405a77c170b"},{url:"/testimonial/app-testimonial-1.png",revision:"f7953b71f8773d55794f3aa091306104"},{url:"/testimonial/app-testimonial-2.png",revision:"54e4623eb7cac3d06acc1da8d8c77bdf"},{url:"/testimonial/app-testimonial-3.png",revision:"34d26b6e2ff5d4f76694d28cbc681813"},{url:"/testimonial/quotes-dot.svg",revision:"34dbbcd81978d79fda1b23fe8a882d90"},{url:"/testimonial/quotes-left.svg",revision:"20630e11001a4613fc85670c130bface"},{url:"/testimonial/quotes.svg",revision:"e87018567372f75294b24011218839b0"},{url:"/testimonial/t-1.jpg",revision:"6f49595e8f3a9abf0d2a7c8962be6d2c"},{url:"/testimonial/t-2.jpg",revision:"612f2388df8e204d45967978c50d116b"},{url:"/testimonial/t-3.jpg",revision:"ad69f5b487c874c8afc199df8b1324d7"},{url:"/testimonial/t-4.jpg",revision:"dcc3fd70778258387f8ac46bf0e77a50"},{url:"/testimonial/t-5.jpg",revision:"700c34537fdd83c4f88029dd8faf7fd1"},{url:"/testimonial/t-6.jpg",revision:"e3edb6e4047f46ee4f24cc1188d50c47"},{url:"/testimonial/t-7.jpg",revision:"78b396142bd570d76ff1e70b7f160a39"},{url:"/testimonial/t-8.jpg",revision:"669e9eeb2515d4c9c997e693b958dcc9"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"},{url:"/video-bg.jpg",revision:"4e11bc139f4b152c3a4dae1a66775406"},{url:"/widget-1.png",revision:"2b1b1bba2b21a47af0bb37034c1635c6"},{url:"/widget-2.png",revision:"5464b58045ae4ec6f1bf22afb07b094d"},{url:"/widget-3.png",revision:"ad7d7ee4d249c1c9897a22792c50359a"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:i,state:s})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
