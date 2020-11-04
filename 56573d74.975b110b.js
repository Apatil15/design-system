(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{75:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return o}));var n=a(2),b=a(6),c=(a(0),a(106)),i={title:"Typography"},l={unversionedId:"typography",id:"typography",isDocsHomePage:!1,title:"Typography",description:"Our typographical subsystem helps you to create a consistent, flexible typographic style for your application.",source:"@site/docs/typography.md",slug:"/typography",permalink:"/design-system/docs/typography",editUrl:"https://github.com/wwnorton/design-system/edit/main/website/docs/typography.md",version:"current",lastUpdatedBy:"Evan Yamanishi",lastUpdatedAt:1604521424,sidebar:"docs",previous:{title:"Motion",permalink:"/design-system/docs/motion"},next:{title:"Button",permalink:"/design-system/docs/components/button"}},s=[{value:"Typesets",id:"typesets",children:[{value:"Body Typesets",id:"body-typesets",children:[]},{value:"UI Typesets",id:"ui-typesets",children:[]},{value:"Heading Typesets",id:"heading-typesets",children:[]}]},{value:"Font Family",id:"font-family",children:[{value:"Usage Examples",id:"usage-examples",children:[]}]},{value:"Font Size",id:"font-size",children:[{value:"Usage Examples",id:"usage-examples-1",children:[]}]}],r={rightToc:s};function o(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},r,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Our typographical subsystem helps you to create a consistent, flexible typographic style for your application.\nDesign tokens for ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#font-family"}),"font family"),", ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#font-size"}),"font size"),", ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#line-height"}),"line height"),", and ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#font-weight"}),"font weight")," give you a granular way to customize type,\nand our ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#typesets"}),"typeset")," convention gives you a flexible and easy way to apply and define composed sets of typographic properties."),Object(c.b)("h2",{id:"typesets"},"Typesets"),Object(c.b)("p",null,"A typeset is a composed set of typographical styles that are used for specific purposes.\nWe include three categories of typesets to be used with body text, UI text, and headings.\nAll three come in a variety of sizing variants, but you can also define your own typesets as needed."),Object(c.b)("p",null,"The default typeset, which is used as the default ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#body-typesets"}),"body typeset"),", utilizes all ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"design-tokens#base-tokens"}),"base tokens"),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scss",metastring:'title="The default typeset"',title:'"The',default:!0,'typeset"':!0}),"@use '@wwnds/core' as nds;\n\n.my-selector {\n    @include nds.typeset;\n}\n\n// CSS output\n// .my-selector {\n//   font-family: var(--nds-font-family-base);\n//   font-size: var(--nds-font-size-base);\n//   line-height: var(--nds-line-height-base);\n// }\n")),Object(c.b)("h3",{id:"body-typesets"},"Body Typesets"),Object(c.b)("p",null,"Used for content, the body typesets are typically set at the document body to define the defaults for most content.\nThey always use a font family of ",Object(c.b)("inlineCode",{parentName:"p"},"font-family-base")," and a line height of ",Object(c.b)("inlineCode",{parentName:"p"},"line-height-base"),"."),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Body Typesets")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("table",{parentName:"div"},Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"th"},"body-xs")),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"th"},"body-sm")),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"th"},"body-md")),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"th"},"body-lg")))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("div",{class:"body-xs"},"Lorem ipsum dolor sit, amet consectetur adipisicing elit.")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("div",{class:"body-sm"},"Lorem ipsum dolor sit, amet consectetur adipisicing elit.")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("div",{class:"body-md"},"Lorem ipsum dolor sit, amet consectetur adipisicing elit.")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("div",{class:"body-lg"},"Lorem ipsum dolor sit, amet consectetur adipisicing elit."))))),Object(c.b)("p",{parentName:"div"},"Additionally, the ",Object(c.b)("inlineCode",{parentName:"p"},"body-base")," typeset uses the base font size token (",Object(c.b)("inlineCode",{parentName:"p"},"font-size-base"),")."))),Object(c.b)("h3",{id:"ui-typesets"},"UI Typesets"),Object(c.b)("p",null,"Used for user interface elements where text doesn't typically reflow, the UI typesets have a smaller default line height than body typesets.\nThey always use a font family of ",Object(c.b)("inlineCode",{parentName:"p"},"font-family-base")," and a line height of ",Object(c.b)("inlineCode",{parentName:"p"},"line-height-3"),"."),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"UI Typesets")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("table",{parentName:"div"},Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"th"},"ui-xs")),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"th"},"ui-sm")),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"th"},"ui-md")),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"th"},"ui-lg")))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("div",{class:"ui-xs"},"Lorem ipsum dolor sit, amet consectetur adipisicing elit.")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("div",{class:"ui-sm"},"Lorem ipsum dolor sit, amet consectetur adipisicing elit.")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("div",{class:"ui-md"},"Lorem ipsum dolor sit, amet consectetur adipisicing elit.")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("div",{class:"ui-lg"},"Lorem ipsum dolor sit, amet consectetur adipisicing elit."))))),Object(c.b)("p",{parentName:"div"},"Additionally, the ",Object(c.b)("inlineCode",{parentName:"p"},"ui-base")," typeset uses the base font size token (",Object(c.b)("inlineCode",{parentName:"p"},"font-size-base"),")."))),Object(c.b)("h3",{id:"heading-typesets"},"Heading Typesets"),Object(c.b)("p",null,"Used to convey hierarchy, the heading typesets create greater vertical separation while still adhering to a consistent vertical rhythm."),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Heading Typesets")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("table",{parentName:"div"},Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"th"},"heading-xs")),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"th"},"heading-sm")),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"th"},"heading-md")),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"th"},"heading-lg")))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("div",{class:"heading-xs"},"Lorem ipsum dolor sit, amet consectetur adipisicing elit.")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("div",{class:"heading-sm"},"Lorem ipsum dolor sit, amet consectetur adipisicing elit.")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("div",{class:"heading-md"},"Lorem ipsum dolor sit, amet consectetur adipisicing elit.")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("div",{class:"heading-lg"},"Lorem ipsum dolor sit, amet consectetur adipisicing elit."))))))),Object(c.b)("h2",{id:"font-family"},"Font Family"),Object(c.b)("p",null,"Our font family system provides design tokens for sans serif, serif, and monospace\nfont family types, all defaulting to their respective ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://systemfontstack.com/"}),"system stack"),".\nSystem stack defaults help us keep the size of the design system down while ensuring\nthat all devices use a font that looks good on that device."),Object(c.b)("p",null,"To customize the font family and ensure a more consistent typographic experience\nfor your users, simply override the font family design tokens."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Token"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Customizable"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Usage"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("code",{class:"ff-system-sans"},"font-family-system-sans")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"a sans serif system font stack")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("code",{class:"ff-system-serif"},"font-family-system-serif")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"a serif system font stack")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("code",{class:"ff-system-mono"},"font-family-system-mono")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"a monospace system font stack")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("code",{class:"ff-sans"},"font-family-sans")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the main sans serif font family")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("code",{class:"ff-serif"},"font-family-serif")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the main serif font family")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("code",{class:"ff-mono"},"font-family-mono")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the main monospace font family")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("code",{class:"ff-base"},"font-family-base")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the main font family that will be used throughout your application")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("code",{class:"ff-headings"},"font-family-headings")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the font family that will be used for headings")))),Object(c.b)("h3",{id:"usage-examples"},"Usage Examples"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scss",metastring:'title="Use a font family token"',title:'"Use',a:!0,font:!0,family:!0,'token"':!0}),"@use '@wwnds/core' as nds;\n\n.my-serif-selector {\n    font-family: var(--nds-font-family-serif);\n}\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scss",metastring:'title="Set custom serif font as base"',title:'"Set',custom:!0,serif:!0,font:!0,as:!0,'base"':!0}),"@use '@wwnds/core' with (\n    $font-family-serif: 'Lora',\n    $font-family-base: var(--nds-font-family-serif),\n);\n\n// --nds-font-family-base will resolve to \"'Lora', var(--nds-font-family-system-serif)\"\n")),Object(c.b)("h2",{id:"font-size"},"Font Size"),Object(c.b)("p",null,"The main way to control font sizing in the Norton Design System is with the font\nsize ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"design-tokens#role-tokens"}),"role tokens"),". These tokens capture the base font\nsize for your content, sizes suitable to convey hierarchy (in other words: headings),\nand a small subset of t-shirt sizes to help create a consistent sense of scale\nfor typography in your application."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Role Token"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default value"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Px equivalent",Object(c.b)("sup",Object(n.a)({parentName:"th"},{id:"fnref-1"}),Object(c.b)("a",Object(n.a)({parentName:"sup"},{href:"#fn-1",className:"footnote-ref"}),"1"))))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("code",{class:"fs-base"},"font-size-base")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"font-size-md")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"16px"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("code",{class:"fs-xs"},"font-size-xs")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"font-size-12")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"12px"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("code",{class:"fs-sm"},"font-size-sm")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"font-size-14")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"14px"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("code",{class:"fs-md"},"font-size-md")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"font-size-16")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"16px"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("code",{class:"fs-lg"},"font-size-lg")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"font-size-18")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"18px"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("code",{class:"fs-h1"},"font-size-h1")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"font-size-32")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"32px"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("code",{class:"fs-h2"},"font-size-h2")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"font-size-24")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"24px"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("code",{class:"fs-h3"},"font-size-h3")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"font-size-20")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"20px"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("code",{class:"fs-h4"},"font-size-h4")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"font-size-18")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"18px"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("code",{class:"fs-h5"},"font-size-h5")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"font-size-16")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"16px"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("code",{class:"fs-h6"},"font-size-h6")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"font-size-14")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"14px"))))),Object(c.b)("p",null,"Font size ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"design-tokens#system-tokens"}),"system tokens")," form the basis of the font\nsizing system. Note that these cannot be modified and always use ",Object(c.b)("inlineCode",{parentName:"p"},"rem")," units to\nensure that ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://css-tricks.com/accessible-font-sizing-explained/"}),"the user is in charge of text size"),"."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"System Token"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Px equivalent",Object(c.b)("sup",Object(n.a)({parentName:"th"},{id:"fnref-1"}),Object(c.b)("a",Object(n.a)({parentName:"sup"},{href:"#fn-1",className:"footnote-ref"}),"1"))))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("code",{class:"fs-10"},"font-size-10")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"0.625rem")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"10px"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("code",{class:"fs-12"},"font-size-12")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"0.75rem")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"12px"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("code",{class:"fs-14"},"font-size-14")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"0.875em")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"14px"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("code",{class:"fs-16"},"font-size-16")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"1rem")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"16px"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("code",{class:"fs-18"},"font-size-18")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"1.125rem")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"18px"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("code",{class:"fs-20"},"font-size-20")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"1.25rem")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"20px"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("code",{class:"fs-24"},"font-size-24")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"1.5rem")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"24px"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("code",{class:"fs-32"},"font-size-32")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"2rem")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"32px"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("code",{class:"fs-40"},"font-size-40")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"2.5rem")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"40px"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("code",{class:"fs-48"},"font-size-48")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"3rem")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"48px"))))),Object(c.b)("a",{name:"px-rem",class:"anchor enhancedAnchor__-node_modules-@docusaurus-theme-classic-lib-theme-Heading-"}),Object(c.b)("h3",{id:"usage-examples-1"},"Usage Examples"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scss",metastring:'title="Using a font size token"',title:'"Using',a:!0,font:!0,size:!0,'token"':!0}),"@use '@wwnds/core' as nds;\n\n.my-large-text {\n    font-size: var(--nds-font-size-lg);\n}\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scss",metastring:'title="Use larger font sizes across your application"',title:'"Use',larger:!0,font:!0,sizes:!0,across:!0,your:!0,'application"':!0}),"@use '@wwnds/core' with (\n    $font-size-xs: var(--nds-font-size-14),\n    $font-size-sm: var(--nds-font-size-16),\n    $font-size-md: var(--nds-font-size-18),\n    $font-size-lg: var(--nds-font-size-20),\n);\n\n// --nds-font-size-base is still equal to var(--nds-font-size-md),\n// making the base font size equivalent to 18px\n")),Object(c.b)("div",{className:"footnotes"},Object(c.b)("hr",{parentName:"div"}),Object(c.b)("ol",{parentName:"div"},Object(c.b)("li",Object(n.a)({parentName:"ol"},{id:"fn-1"}),"Since all font sizes are set as ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/length#rem"}),"rem"),",\nthe computed pixel equivalent assumes a browser font size of ",Object(c.b)("inlineCode",{parentName:"li"},"16px"),".",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#fnref-1",className:"footnote-backref"}),"\u21a9")))))}o.isMDXComponent=!0}}]);