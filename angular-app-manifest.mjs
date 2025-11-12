
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NT3NNIUL.js"
    ],
    "route": "/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MITTODHS.js"
    ],
    "route": "/about"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BK7BGYSN.js"
    ],
    "route": "/kms-approach"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YDTADQFB.js",
      "chunk-AZH5AAF2.js"
    ],
    "route": "/kms-expertise/business-advisory"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HYDFCR7K.js",
      "chunk-AZH5AAF2.js"
    ],
    "route": "/kms-expertise/family-wealth"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QKHRAGUA.js",
      "chunk-AZH5AAF2.js"
    ],
    "route": "/kms-expertise/value-maximization"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3LAHBXLQ.js",
      "chunk-AZH5AAF2.js"
    ],
    "route": "/kms-expertise/business-succession"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5IQK3ARR.js",
      "chunk-AZH5AAF2.js"
    ],
    "route": "/kms-expertise/structuring"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LKE6YPHP.js",
      "chunk-AZH5AAF2.js"
    ],
    "route": "/kms-expertise/financial-insights"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DV2J2SO2.js",
      "chunk-AZH5AAF2.js"
    ],
    "route": "/kms-expertise/inorganic-growth"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UU7FZK2G.js",
      "chunk-AZH5AAF2.js"
    ],
    "route": "/kms-expertise/tech-businesses"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3RPINGKW.js",
      "chunk-AZH5AAF2.js"
    ],
    "route": "/kms-expertise/multinational"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TOUGSSBV.js",
      "chunk-AZH5AAF2.js"
    ],
    "route": "/kms-expertise/tax-efficiencies"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4F4PO2I5.js",
      "chunk-AZH5AAF2.js"
    ],
    "route": "/kms-expertise/legal-commercial"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QK4S4NTF.js"
    ],
    "route": "/industries"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RLRLUFGE.js"
    ],
    "route": "/contact-us"
  },
  {
    "renderMode": 2,
    "redirectTo": "/home",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 52217, hash: 'def4c1347b64e8608e73620faf812db93464da3c0a2d37cef1cc84bab8e92269', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1947, hash: '565a173ef91623ff1a23ac7805c448434a55c13bc13cf2d91e8ca850b9556c0a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 237, hash: 'dcbbd3d1ba769acac38b5122765d43caf9a118a8df7b190acb864c3a5928b47b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'kms-expertise/value-maximization/index.html': {size: 110410, hash: 'f7483ae9b6194b86b36fa1e7fafdf63d11a4041f2e3290dfd914134dd3ea28cd', text: () => import('./assets-chunks/kms-expertise_value-maximization_index_html.mjs').then(m => m.default)},
    'kms-expertise/family-wealth/index.html': {size: 110671, hash: '450931bb97b93991af21e41e5823ae264b526e9da335f639a36035ff4e037e9d', text: () => import('./assets-chunks/kms-expertise_family-wealth_index_html.mjs').then(m => m.default)},
    'kms-expertise/financial-insights/index.html': {size: 110711, hash: '04eb69d073340332e8630b50b1aba87dcf567dedb9c60775fba722975f124ff8', text: () => import('./assets-chunks/kms-expertise_financial-insights_index_html.mjs').then(m => m.default)},
    'kms-expertise/multinational/index.html': {size: 110591, hash: 'e4051abb4bf033c8588bd098aacc533deae3261fb912565d5f0114c575ce3d0a', text: () => import('./assets-chunks/kms-expertise_multinational_index_html.mjs').then(m => m.default)},
    'kms-expertise/legal-commercial/index.html': {size: 110843, hash: '0b2ccd4fbec25ae80d9a70fc760247039505f06913f953cf630f0739eb45db08', text: () => import('./assets-chunks/kms-expertise_legal-commercial_index_html.mjs').then(m => m.default)},
    'contact-us/index.html': {size: 156037, hash: '53f42832d98b3380db20e0351951bedfe5c46938b32f999aca252a41e1b4c51e', text: () => import('./assets-chunks/contact-us_index_html.mjs').then(m => m.default)},
    'kms-approach/index.html': {size: 116224, hash: '3604af2e9170c052550cb3f2fc6e4d20c6a11a158ad28e625ad567febf895853', text: () => import('./assets-chunks/kms-approach_index_html.mjs').then(m => m.default)},
    'kms-expertise/business-succession/index.html': {size: 112550, hash: 'ab6e596ccbf45bf7e6422fdb8d2fd25e1c5997438e95902039c6d53f5bbcae42', text: () => import('./assets-chunks/kms-expertise_business-succession_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 130453, hash: '89a73f8a11b354c7cbee9eb8709f94ba07d66aca8426536194e74ef4bea9e29c', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'kms-expertise/inorganic-growth/index.html': {size: 110550, hash: 'afdfb90afd48e7171fb449e5d252ddfe7f41a10b4ad9176ead06ee782c9f04f9', text: () => import('./assets-chunks/kms-expertise_inorganic-growth_index_html.mjs').then(m => m.default)},
    'kms-expertise/tax-efficiencies/index.html': {size: 111073, hash: 'd3a0a6e5c5644428ee34a9a9dadb6145e5e7e2a591889e8f531500070a220f31', text: () => import('./assets-chunks/kms-expertise_tax-efficiencies_index_html.mjs').then(m => m.default)},
    'industries/index.html': {size: 112334, hash: 'a8f872199e5dca6b4eb5f3aff414cdb4f667f827016bab48470a0b3a7f7f8710', text: () => import('./assets-chunks/industries_index_html.mjs').then(m => m.default)},
    'kms-expertise/structuring/index.html': {size: 110480, hash: '65a977624c11ed9ce9aae878167a67e392c1e64da3151f0418eeba978e582f59', text: () => import('./assets-chunks/kms-expertise_structuring_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 140647, hash: '9f86c1bc1e00b640751b193a6c19e48b8e79fc4079bfd73c7562a8ae46888ce8', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'kms-expertise/tech-businesses/index.html': {size: 110806, hash: '54dd44bc94f2329c3ad04a8a60df58a03c87fc0f8af8450bcd7cc03f2f661506', text: () => import('./assets-chunks/kms-expertise_tech-businesses_index_html.mjs').then(m => m.default)},
    'kms-expertise/business-advisory/index.html': {size: 111126, hash: '9795f898dbdd303025b9f26d66dc819856a49eda2ad7aab3bbd273f8773dc5f8', text: () => import('./assets-chunks/kms-expertise_business-advisory_index_html.mjs').then(m => m.default)},
    'styles-GAPWUBWR.css': {size: 361445, hash: 'lihE/sXKnpI', text: () => import('./assets-chunks/styles-GAPWUBWR_css.mjs').then(m => m.default)}
  },
};
