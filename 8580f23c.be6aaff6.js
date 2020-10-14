(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{101:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return i}))},102:function(e,t,a){"use strict";function n(e){var t,a,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(i&&(i+=" "),i+=a);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,a=0,i="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}},107:function(e,t,a){"use strict";var n=a(0),i=Object(n.createContext)(void 0);t.a=i},108:function(e,t,a){"use strict";var n=a(0),i=a(107);t.a=function(){var e=Object(n.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},92:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return j})),a.d(t,"metadata",(function(){return g})),a.d(t,"rightToc",(function(){return v})),a.d(t,"default",(function(){return N}));var n=a(2),i=a(6),c=a(0),l=a.n(c),b=a(97),r=a(99),o=a(108),d=a(102),s=a(74),m=a.n(s);const u=37,p=39;var h=function(e){const{block:t,children:a,defaultValue:n,values:i,groupId:b}=e,{tabGroupChoices:r,setTabGroupChoices:s}=Object(o.a)(),[h,O]=Object(c.useState)(n),[j,g]=Object(c.useState)(!1);if(null!=b){const e=r[b];null!=e&&e!==h&&i.some((t=>t.value===e))&&O(e)}const v=e=>{O(e),null!=b&&s(b,e)},f=[],N=e=>{e.metaKey||e.altKey||e.ctrlKey||g(!0)},y=()=>{g(!1)};return Object(c.useEffect)((()=>{window.addEventListener("keydown",N),window.addEventListener("mousedown",y)}),[]),l.a.createElement("div",null,l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(d.a)("tabs",{"tabs--block":t})},i.map((({value:e,label:t})=>l.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===e,className:Object(d.a)("tabs__item",m.a.tabItem,{"tabs__item--active":h===e}),style:j?{}:{outline:"none"},key:e,ref:e=>f.push(e),onKeyDown:e=>{((e,t,a)=>{switch(a.keyCode){case p:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case u:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(f,e.target,e),N(e)},onFocus:()=>v(e),onClick:()=>{v(e),g(!1)},onPointerDown:()=>g(!1)},t)))),l.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},c.Children.toArray(a).filter((e=>e.props.value===h))[0]))};var O=function(e){return l.a.createElement("div",null,e.children)},j={id:"doc4",title:"Examples",slug:"/examples"},g={unversionedId:"doc4",id:"doc4",isDocsHomePage:!1,title:"Examples",description:"Here you will find some examples on how each element is being displayed on EzGitDoc page and how generated code looks in *.md file. Most of them are generated in HTML tags but not all like text list, table. Currently there are no plans on separating those approaches as with raw markdown you cannot for example set image width/height or align it.",source:"@site/docs\\doc4_ezGitDocExamples.md",slug:"/examples",permalink:"/EzGitDoc-documentation/examples",editUrl:"https://github.com/trolit/EzGitDoc-documentation/edit/main/docs/doc4_ezGitDocExamples.md",version:"current",sidebar:"docs",previous:{title:"Quickstart",permalink:"/EzGitDoc-documentation/quick-start"},next:{title:"Quickbuilder",permalink:"/EzGitDoc-documentation/quickbuilder"}},v=[{value:"1. Code",id:"1-code",children:[]},{value:"2. Header",id:"2-header",children:[]},{value:"3. Image",id:"3-image",children:[]},{value:"4. Link",id:"4-link",children:[]},{value:"5. List",id:"5-list",children:[{value:"5.1. Iconic",id:"51-iconic",children:[]},{value:"5.2. Normal",id:"52-normal",children:[]},{value:"5.3. Link",id:"53-link",children:[]}]},{value:"6. Table",id:"6-table",children:[{value:"6.1 Text",id:"61-text",children:[]},{value:"6.2 Image",id:"62-image",children:[]},{value:"6.3 Kbd / Linked Kbd",id:"63-kbd--linked-kbd",children:[]}]},{value:"7. Text",id:"7-text",children:[]},{value:"8. Badge",id:"8-badge",children:[]},{value:"9. Details",id:"9-details",children:[]}],f={rightToc:v};function N(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},f,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",{align:"justify"},"Here you will find some examples on how each element is being displayed on EzGitDoc page and how generated code looks in *.md file. Most of them are generated in HTML tags but not all like text list, table. Currently there are no plans on separating those approaches as with raw markdown you cannot for example set image width/height or align it."),Object(b.b)("h2",{id:"1-code"},"1. Code"),Object(b.b)(h,{defaultValue:"EzGitDoc",values:[{label:"EzGitDoc",value:"EzGitDoc"},{label:"Preview",value:"Result"}],mdxType:"Tabs"},Object(b.b)(O,{value:"EzGitDoc",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),"```javascript\n  var parts = document.getElementsByClassName('myPart');\n  var firstPart = parts.item(0);\n  var firstPartTagName = firstPart.tagName;\n```\n"))),Object(b.b)(O,{value:"Result",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"  // note that highlighting themes can differ\n  var parts = document.getElementsByClassName('myPart');\n  var firstPart = parts.item(0);\n  var firstPartTagName = firstPart.tagName;\n")))),Object(b.b)("h2",{id:"2-header"},"2. Header"),Object(b.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(b.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("p",{align:"justify"},"EzGitDoc is using <h> tags to create headers. It's also possible to use hashtag markdown. HTML tags are 'slightly better' due to the fact that they can be used inside other HTML tags like paragraphs while hashtags not."),Object(b.b)("img",{src:Object(r.a)("img/examples/note1.png"),alt:"Example 05"}))),Object(b.b)(h,{defaultValue:"EzGitDoc",values:[{label:"EzGitDoc",value:"EzGitDoc"},{label:"Preview",value:"Result"}],mdxType:"Tabs"},Object(b.b)(O,{value:"EzGitDoc",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),"<h2>Hey there 2</h2>\n\n<h3>Hey there 3</h3>\n\n<h4>Hey there 4</h4>\n"))),Object(b.b)(O,{value:"Result",mdxType:"TabItem"},Object(b.b)("code",null,Object(b.b)("h2",null,"Hey there 2"),Object(b.b)("h3",null,"Hey there 3"),Object(b.b)("h4",null,"Hey there 4")))),Object(b.b)("h2",{id:"3-image"},"3. Image"),Object(b.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(b.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("p",{parentName:"div"},"If you didn't prepare images yet, leave word blank in URL field and EzGitDoc will use placeholder images which can be overwritten when needed."))),Object(b.b)(h,{defaultValue:"EzGitDoc",values:[{label:"EzGitDoc",value:"EzGitDoc"},{label:"Preview",value:"Result"}],mdxType:"Tabs"},Object(b.b)(O,{value:"EzGitDoc",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<p align="left"><img src="https://cdn.pixabay.com/photo/2018/03/11/08/47/dog-3216207_1280.png" alt="Image 1" width="150"/></p>\n\n<p align="center"><img src="https://cdn.pixabay.com/photo/2018/03/11/08/47/dog-3216207_1280.png" alt="Image 2" width="150"/></p>\n\n<p align="right"><img src="https://cdn.pixabay.com/photo/2018/03/11/08/47/dog-3216207_1280.png" alt="Image 3" width="150"/></p>\n'))),Object(b.b)(O,{value:"Result",mdxType:"TabItem"},Object(b.b)("code",null,Object(b.b)("p",{align:"left"},Object(b.b)("img",{src:"https://cdn.pixabay.com/photo/2018/03/11/08/47/dog-3216207_1280.png",alt:"Image 1",width:"150"})),Object(b.b)("p",{align:"center"},Object(b.b)("img",{src:"https://cdn.pixabay.com/photo/2018/03/11/08/47/dog-3216207_1280.png",alt:"Image 2",width:"150"})),Object(b.b)("p",{align:"right"},Object(b.b)("img",{src:"https://cdn.pixabay.com/photo/2018/03/11/08/47/dog-3216207_1280.png",alt:"Image 3",width:"150"}))))),Object(b.b)("p",null,"Example image from: ",Object(b.b)("a",{href:"https://pixabay.com/pl/vectors/pies-komiczny-portret-zwierz%C4%85t-3216207/",target:"_blank"},"pixabay.com")),Object(b.b)("h2",{id:"4-link"},"4. Link"),Object(b.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(b.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("p",{parentName:"div"},"If you want to align single link(center/right), wrap it inside paragraph and use align attribute."))),Object(b.b)(h,{defaultValue:"EzGitDoc",values:[{label:"EzGitDoc",value:"EzGitDoc"},{label:"Preview",value:"Result"}],mdxType:"Tabs"},Object(b.b)(O,{value:"EzGitDoc",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<a href="https://trolit.github.io/EzGitDoc">Link to EzGitDoc</a>\n'))),Object(b.b)(O,{value:"Result",mdxType:"TabItem"},Object(b.b)("code",null,Object(b.b)("a",{href:"https://trolit.github.io/EzGitDoc"},"Link to EzGitDoc")))),Object(b.b)("h2",{id:"5-list"},"5. List"),Object(b.b)("h3",{id:"51-iconic"},"5.1. Iconic"),Object(b.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(b.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("p",{parentName:"div"},"By adding extra linebreak before description, you can put it's text below title. "))),Object(b.b)(h,{defaultValue:"EzGitDoc",values:[{label:"EzGitDoc",value:"EzGitDoc"},{label:"Preview",value:"Result"}],mdxType:"Tabs"},Object(b.b)(O,{value:"EzGitDoc",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),":smiley: <strong>Note 1</strong>: Blabla 1<br/><br/>\n:smiley: <strong>Note 2</strong>: Blabla 2<br/><br/>\n:smiley: <strong>Note 3</strong>: Blabla 3<br/><br/>\n:smiley: <strong>Note 4</strong>: Blabla 4<br/><br/>\n:smiley: <strong>Note 5</strong>: Blabla 5\n"))),Object(b.b)(O,{value:"Result",mdxType:"TabItem"},Object(b.b)("code",null,"\ud83d\ude03 ",Object(b.b)("strong",null,"Note 1"),": Blabla 1",Object(b.b)("br",null),Object(b.b)("br",null),"\ud83d\ude03 ",Object(b.b)("strong",null,"Note 2"),": Blabla 2",Object(b.b)("br",null),Object(b.b)("br",null),"\ud83d\ude03 ",Object(b.b)("strong",null,"Note 3"),": Blabla 3",Object(b.b)("br",null),Object(b.b)("br",null),"\ud83d\ude03 ",Object(b.b)("strong",null,"Note 4"),": Blabla 4",Object(b.b)("br",null),Object(b.b)("br",null),"\ud83d\ude03 ",Object(b.b)("strong",null,"Note 5"),": Blabla 5"))),Object(b.b)("h3",{id:"52-normal"},"5.2. Normal"),Object(b.b)(h,{defaultValue:"EzGitDoc",values:[{label:"EzGitDoc",value:"EzGitDoc"},{label:"Preview",value:"Result"}],mdxType:"Tabs"},Object(b.b)(O,{value:"EzGitDoc",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-md"}),"- List item 1\n- List item 2\n- List item 3\n- List item 4\n- List item 5\n"))),Object(b.b)(O,{value:"Result",mdxType:"TabItem"},Object(b.b)("ul",null,Object(b.b)("li",null,"List item 1"),Object(b.b)("li",null,"List item 2"),Object(b.b)("li",null,"List item 3"),Object(b.b)("li",null,"List item 4"),Object(b.b)("li",null,"List item 5")))),Object(b.b)("h3",{id:"53-link"},"5.3. Link"),Object(b.b)(h,{defaultValue:"EzGitDoc",values:[{label:"EzGitDoc",value:"EzGitDoc"},{label:"Preview",value:"Result"}],mdxType:"Tabs"},Object(b.b)(O,{value:"EzGitDoc",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'- <a href="https://#to_do:add_href">Link 1</a>\n- <a href="https://#to_do:add_href">Link 2</a>\n- <a href="https://#to_do:add_href">Link 3</a>\n- <a href="https://#to_do:add_href">Link 4</a>\n- <a href="https://#to_do:add_href">Link 5</a>\n'))),Object(b.b)(O,{value:"Result",mdxType:"TabItem"},Object(b.b)("ul",null,Object(b.b)("li",null,Object(b.b)("a",{href:"https://#to_do:add_href"},"Link 1")),Object(b.b)("li",null,Object(b.b)("a",{href:"https://#to_do:add_href"},"Link 2")),Object(b.b)("li",null,Object(b.b)("a",{href:"https://#to_do:add_href"},"Link 3")),Object(b.b)("li",null,Object(b.b)("a",{href:"https://#to_do:add_href"},"Link 4")),Object(b.b)("li",null,Object(b.b)("a",{href:"https://#to_do:add_href"},"Link 5"))))),Object(b.b)("h2",{id:"6-table"},"6. Table"),Object(b.b)("h3",{id:"61-text"},"6.1 Text"),Object(b.b)(h,{defaultValue:"EzGitDoc",values:[{label:"EzGitDoc",value:"EzGitDoc"},{label:"Preview",value:"Result"}],mdxType:"Tabs"},Object(b.b)(O,{value:"EzGitDoc",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-md"}),"| Name | Age | Country |\n| :---: | :---: | :---: |\n| Adam | 23 | Poland |\n| Adrian | 23 | Poland |\n"))),Object(b.b)(O,{value:"Result",mdxType:"TabItem"},Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Age"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Country"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Adam"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"23"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Poland")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Adrian"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"23"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Poland")))))),Object(b.b)("h3",{id:"62-image"},"6.2 Image"),Object(b.b)(h,{defaultValue:"EzGitDoc",values:[{label:"EzGitDoc",value:"EzGitDoc"},{label:"Preview",value:"Result"}],mdxType:"Tabs"},Object(b.b)(O,{value:"EzGitDoc",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'| | |\n| :---: | :---: |\n| <img src="https://place-hold.it/150x100" alt="#toadd" width="150" height="100"/> | <img src="https://place-hold.it/150x100" alt="#toadd" width="150" height="100"/> |\n| <img src="https://place-hold.it/150x100" alt="#toadd" width="150" height="100"/> | <img src="https://place-hold.it/150x100" alt="#toadd" width="150" height="100"/> |\n'))),Object(b.b)(O,{value:"Result",mdxType:"TabItem"},Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"})),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"})))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("img",{src:"https://place-hold.it/150x100",alt:"#toadd",width:"150",height:"100"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("img",{src:"https://place-hold.it/150x100",alt:"#toadd",width:"150",height:"100"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("img",{src:"https://place-hold.it/150x100",alt:"#toadd",width:"150",height:"100"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("img",{src:"https://place-hold.it/150x100",alt:"#toadd",width:"150",height:"100"}))))))),Object(b.b)("h3",{id:"63-kbd--linked-kbd"},"6.3 Kbd / Linked Kbd"),Object(b.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(b.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("p",{parentName:"div"},"Use kbd table to display images and when someone click's them they will appear in fullscreen. Linked kbd can be useful if you want to redirect user to repository or different page. "))),Object(b.b)(h,{defaultValue:"EzGitDoc",values:[{label:"EzGitDoc",value:"EzGitDoc"},{label:"Preview",value:"Result"}],mdxType:"Tabs"},Object(b.b)(O,{value:"EzGitDoc",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<p align="center">\n<kbd><img src="https://place-hold.it/150x130" alt="alt text" width="150" height="130"/></kbd> \n<kbd><img src="https://place-hold.it/150x130" alt="alt text" width="150" height="130"/></kbd> \n<br/> \n<kbd><img src="https://place-hold.it/150x130" alt="alt text" width="150" height="130"/></kbd> \n<kbd><img src="https://place-hold.it/150x130" alt="alt text" width="150" height="130"/></kbd> \n</p>\n'))),Object(b.b)(O,{value:"Result",mdxType:"TabItem"},Object(b.b)("p",{align:"center"},"Result may differ on different sites",Object(b.b)("br",null),Object(b.b)("br",null),Object(b.b)("kbd",null,Object(b.b)("img",{src:"https://place-hold.it/150x130",alt:"alt text",width:"150",height:"130"})),Object(b.b)("kbd",null,Object(b.b)("img",{src:"https://place-hold.it/150x130",alt:"alt text",width:"150",height:"130"})),Object(b.b)("br",null),Object(b.b)("kbd",null,Object(b.b)("img",{src:"https://place-hold.it/150x130",alt:"alt text",width:"150",height:"130"})),Object(b.b)("kbd",null,Object(b.b)("img",{src:"https://place-hold.it/150x130",alt:"alt text",width:"150",height:"130"}))))),Object(b.b)("h4",{id:"difference-between-kbd-and-linked-kbd"},"Difference between kbd and linked kbd"),Object(b.b)("h5",{id:"kbd-single-element"},"kbd single element"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<kbd><img src="https://place-hold.it/100x100" alt="alt text" width="100" height="100"/></kbd> \n')),Object(b.b)("h5",{id:"linked-kbd-single-element"},"linked kbd single element"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<a href="https://addurl/"><kbd><img src="https://place-hold.it/100x100" alt="alt text" width="100" height="100"/></kbd></a> \n')),Object(b.b)("h2",{id:"7-text"},"7. Text"),Object(b.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(b.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("p",{parentName:"div"},"In the text element you can use HTML tags to extend it like anchor(a), header(h), emphasis(em) etc."))),Object(b.b)(h,{defaultValue:"EzGitDoc",values:[{label:"EzGitDoc",value:"EzGitDoc"},{label:"Preview",value:"Result"}],mdxType:"Tabs"},Object(b.b)(O,{value:"EzGitDoc",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<p>Here it comes! Lorem ipsum!</p>\n\n<p align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\ntempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\nexercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure do\nlor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Exc\nepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit a\nnim id est laborum.</p>\n'))),Object(b.b)(O,{value:"Result",mdxType:"TabItem"},Object(b.b)("p",null,"Here it comes! Lorem ipsum!"),Object(b.b)("p",{align:"justify"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure do lor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Exc epteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit a nim id est laborum."))),Object(b.b)("h2",{id:"8-badge"},"8. Badge"),Object(b.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(b.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("p",{align:"justify"},"Labels are great to give short information. EzGitDoc allows to make static badges but you can make dynamic ones by yourself or use predefined. Visit ",Object(b.b)("a",{href:"https://shields.io/"},"Shields.io")," to learn more."))),Object(b.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(b.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("p",{align:"justify"},"To give between badges some space you can use for e.g. HTML character code",Object(b.b)("code",null,"&nbsp;"),"(result shown in fixed preview tab) or linebreaks(br)."))),Object(b.b)(h,{defaultValue:"EzGitDoc",values:[{label:"EzGitDoc",value:"EzGitDoc"},{label:"Preview",value:"Result"},{label:"Fixed Preview",value:"Fixed"}],mdxType:"Tabs"},Object(b.b)(O,{value:"EzGitDoc",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<img src="https://img.shields.io/badge/Badge-N1-red?color=9B2BE2" alt="to do: add alt text"/>\n\n<img src="https://img.shields.io/badge/Badge-N2-red?color=2B95E2&style=plastic" alt="to do: add alt text"/>\n\n<img src="https://img.shields.io/badge/Badge-N3-red?color=2BE29B&style=flat-square" alt="to do: add alt text"/>\n\n<img src="https://img.shields.io/badge/Badge-N4-red?color=A7E22B&style=for-the-badge" alt="to do: add alt text"/>\n\n<img src="https://img.shields.io/badge/Badge-N5-red?color=E2A32B&style=social" alt="to do: add alt text"/>\n'))),Object(b.b)(O,{value:"Result",mdxType:"TabItem"},Object(b.b)("img",{src:"https://img.shields.io/badge/Badge-N1-red?color=9B2BE2",alt:"to do: add alt text"}),Object(b.b)("img",{src:"https://img.shields.io/badge/Badge-N2-red?color=2B95E2&style=plastic",alt:"to do: add alt text"}),Object(b.b)("img",{src:"https://img.shields.io/badge/Badge-N3-red?color=2BE29B&style=flat-square",alt:"to do: add alt text"}),Object(b.b)("img",{src:"https://img.shields.io/badge/Badge-N4-red?color=A7E22B&style=for-the-badge",alt:"to do: add alt text"}),Object(b.b)("img",{src:"https://img.shields.io/badge/Badge-N5-red?color=E2A32B&style=social",alt:"to do: add alt text"})),Object(b.b)(O,{value:"Fixed",mdxType:"TabItem"},Object(b.b)("img",{src:"https://img.shields.io/badge/Badge-N1-red?color=9B2BE2",alt:"to do: add alt text"})," \xa0",Object(b.b)("img",{src:"https://img.shields.io/badge/Badge-N2-red?color=2B95E2&style=plastic",alt:"to do: add alt text"})," \xa0",Object(b.b)("img",{src:"https://img.shields.io/badge/Badge-N3-red?color=2BE29B&style=flat-square",alt:"to do: add alt text"})," \xa0",Object(b.b)("img",{src:"https://img.shields.io/badge/Badge-N4-red?color=A7E22B&style=for-the-badge",alt:"to do: add alt text"})," \xa0",Object(b.b)("img",{src:"https://img.shields.io/badge/Badge-N5-red?color=E2A32B&style=social",alt:"to do: add alt text"}))),Object(b.b)("h2",{id:"9-details"},"9. Details"),Object(b.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(b.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("p",{align:"justify"},Object(b.b)("code",null,"Details-summary")," is handy element to make documentation more compact by hiding specific problems or explanations under title which then can be expanded by user to see details."))),Object(b.b)(h,{defaultValue:"EzGitDoc",values:[{label:"EzGitDoc",value:"EzGitDoc"},{label:"Preview",value:"Result"}],mdxType:"Tabs"},Object(b.b)(O,{value:"EzGitDoc",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<details>\n<summary>This is my summary</summary>\nFirst thing:<br/>\n<a href="https://trolit.github.io/EzGitDoc">EzGitDoc</a><br/>\nSecond thing:<br/>\n<a href="https://trolit.github.io/EzGitDoc-documentation/">Documentation</a>\n</details>\n'))),Object(b.b)(O,{value:"Result",mdxType:"TabItem"},Object(b.b)("details",null,Object(b.b)("summary",null,"This is my summary"),"First thing:",Object(b.b)("br",null),Object(b.b)("a",{href:"https://trolit.github.io/EzGitDoc"},"EzGitDoc"),Object(b.b)("br",null),"Second thing:",Object(b.b)("br",null),Object(b.b)("a",{href:"https://trolit.github.io/EzGitDoc-documentation/"},"Documentation")))))}N.isMDXComponent=!0},97:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return p}));var n=a(0),i=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=i.a.createContext({}),d=function(e){var t=i.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},s=function(e){var t=d(e.components);return i.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,o=r(e,["components","mdxType","originalType","parentName"]),s=d(a),u=n,p=s["".concat(l,".").concat(u)]||s[u]||m[u]||c;return a?i.a.createElement(p,b(b({ref:t},o),{},{components:a})):i.a.createElement(p,b({ref:t},o))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,l=new Array(c);l[0]=u;var b={};for(var r in t)hasOwnProperty.call(t,r)&&(b[r]=t[r]);b.originalType=e,b.mdxType="string"==typeof e?e:n,l[1]=b;for(var o=2;o<c;o++)l[o]=a[o];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},98:function(e,t,a){"use strict";var n=a(0),i=a(20);t.a=function(){var e=Object(n.useContext)(i.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},99:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return l}));var n=a(98),i=a(101);function c(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,c=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var c=void 0===n?{}:n,l=c.forcePrependBaseUrl,b=void 0!==l&&l,r=c.absolute,o=void 0!==r&&r;if(!a)return a;if(a.startsWith("#"))return a;if(Object(i.b)(a))return a;if(b)return t+a;var d=a.startsWith(t)?a:t+a.replace(/^\//,"");return o?e+d:d}(c,a,e,t)}}}function l(e,t){return void 0===t&&(t={}),(0,c().withBaseUrl)(e,t)}}}]);