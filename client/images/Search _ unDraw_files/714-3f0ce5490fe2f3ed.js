"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[714],{6259:function(e,n,t){var i=t(7294),o=t(7379),r=t(713),a=t(7927),c=t(4926),l=t(2469),s=t(5893),d=["#00b0ff","#00bfa6","#f50057","#536dfe","#f9a826","#6c63ff"],p=["#93d1f3","#f5a9c4","#cbc8fd","#a9aff5","#f7ddb4","#a0fff0"],f=(0,o.ZP)(a.xz).withConfig({displayName:"ColorPicker__Picker",componentId:"sc-mf13kp-0"})(["height:24px;width:24px;border:1px solid var(--text);border-radius:var(--radius);background-color:",";cursor:pointer;"],(function(e){return e.color})),u=(0,o.ZP)(a.VY).withConfig({displayName:"ColorPicker__ColorPickerContent",componentId:"sc-mf13kp-1"})(['background-color:#fff;box-shadow:0px 5px 15px -5px hsla(206,22%,7%,.15);.chrome-picker{border-radius:var(--radius) !important;div[style*="width: 32px; text-align: right; position: relative;"]{display:none;}div[style*="width: 22px;"]{display:none;}input:focus{outline:none;}div[style*="padding: 16px 16px 12px;"]{padding-bottom:8px !important;}box-shadow:none !important;}.circle-picker{background-color:#fff;padding:8px 16px;}']),g=(0,o.ZP)(l.AS7).withConfig({displayName:"ColorPicker__Icon",componentId:"sc-mf13kp-2"})(["height:20px;width:20px;margin-right:1px;display:none;@media ","{display:inline-block;}"],c.U.tablet);o.ZP.div.withConfig({displayName:"ColorPicker__ColorSelection",componentId:"sc-mf13kp-3"})(["display:inline-flex;margin-right:16px;align-items:center;@media ","{display:flex;justify-content:flex-end;margin-right:0;}"],c.U.tablet),o.ZP.div.withConfig({displayName:"ColorPicker__Label",componentId:"sc-mf13kp-4"})(["font-size:14px;padding-right:8px;@media ","{padding-right:12px;}"],c.U.tablet);n.ZP=function(e){var n=e.pickerColor,t=e.handleColorChange,o=e.hand,c=(0,i.useState)(n),l=(c.currentColor,c.setCurrentColor,function(e){t(e.hex.toLowerCase())});return(0,s.jsxs)(a.fC,{children:[(0,s.jsx)(g,{}),(0,s.jsx)(f,{color:n,"aria-controls":"Color Menu","aria-label":"Colorpicker Button"}),(0,s.jsxs)(u,{sideOffset:4,onOpenAutoFocus:function(e){return e.preventDefault()},onFocusOutside:function(e){return console.log("Called")},children:[(0,s.jsx)(r.AI,{color:n,onChange:l,disableAlpha:!0}),(0,s.jsx)(r.iY,{color:n,onChangeComplete:l,width:"225px",colors:o?p:d,circleSpacing:12,circleSize:20})]})]})}},3375:function(e,n,t){var i=t(7379),o=t(7326),r=t(2469),a=t(4926),c=t(1664),l=t.n(c),s=t(5893),d=(0,i.ZP)(o.xz).withConfig({displayName:"Dropdown__Trigger",componentId:"sc-1roo6xo-0"})(["background-color:transparent;border:none;padding:0;margin-left:16px;cursor:pointer;@media ","{margin-left:24px;}svg{padding-top:4px;width:20px;height:20px;}"],a.U.tablet),p=(0,i.ZP)(o.VY).withConfig({displayName:"Dropdown__Content",componentId:"sc-1roo6xo-1"})(["min-width:120px;background-color:#fff;border-radius:var(--radius);box-shadow:0px 5px 15px -5px hsla(206,22%,7%,.15);border:1px solid var(--line);padding:4px 0;margin-top:16px;"]),f=(0,i.ZP)(o.ck).withConfig({displayName:"Dropdown__Item",componentId:"sc-1roo6xo-2"})(["padding:0 24px;font-size:14px;transition:color 0.3s;text-align:right;> a{padding:12px 0;display:block;}> a:hover{color:var(--primary);}"]);n.Z=function(e){return(0,s.jsxs)(o.fC,{children:[(0,s.jsx)(d,{"aria-label":"Dropdown Trigger",children:(0,s.jsx)(r.nWS,{})}),(0,s.jsxs)(p,{onCloseAutoFocus:function(e){return e.preventDefault()},align:"end",children:[(0,s.jsx)(f,{children:(0,s.jsx)("a",{href:"https://updates.undraw.co",target:"_blank",rel:"noreferrer noopener",children:"Updates"})}),(0,s.jsx)(f,{style:{display:"thank"===e.skip?"none":"inherit"},children:(0,s.jsx)(l(),{href:"/thankful",passHref:!0,children:(0,s.jsx)("a",{children:"Thankful"})})}),(0,s.jsx)(f,{children:(0,s.jsx)("a",{href:"https://twitter.com/undraw_co",target:"_blank",rel:"noreferrer noopener",children:"Twitter"})}),(0,s.jsx)(f,{style:{display:"create"===e.skip?"none":"inherit"},children:(0,s.jsx)(l(),{href:"/creative-tools",passHref:!0,children:(0,s.jsx)("a",{children:"Creative Tools"})})}),(0,s.jsx)(f,{children:(0,s.jsx)("a",{href:"https://blog.undraw.co",target:"_blank",rel:"noreferrer noopener",children:"Blog"})}),(0,s.jsx)(f,{style:{display:"license"===e.skip?"none":"inherit"},children:(0,s.jsx)(l(),{href:"/license",passHref:!0,children:(0,s.jsx)("a",{children:"License"})})})]})]})}},897:function(e,n,t){var i=t(7379),o=t(4926),r=t(1664),a=t.n(r),c=t(5893),l=i.ZP.div.withConfig({displayName:"Navbar__Wrapper",componentId:"sc-bot6ol-0"})(["border-bottom:1px solid var(--line);width:100%;top:0;left:0;z-index:",";background-color:var(--bg);position:fixed;transition:opacity 0.4s;opacity:",";visibility:",";"],(function(e){return e.isVisible?"-1":"100"}),(function(e){return e.isVisible?"0":"1"}),(function(e){return e.isVisible?"hidden":"visible"})),s=i.ZP.div.withConfig({displayName:"Navbar__Inner",componentId:"sc-bot6ol-1"})(["display:flex;align-items:center;justify-content:space-between;height:56px;width:var(--container);max-width:var(--container-max);margin:0 auto;box-shadow:0 1px 2px rgba(16,16,17,0.02),0 3.4px 8px rgba(16,16,17,0.007),0 12px 30px rgba(16,16,17,0.003);"]),d=i.ZP.div.withConfig({displayName:"Navbar__Logo",componentId:"sc-bot6ol-2"})(["color:var(--text-dark);font-weight:var(--weight-bold);font-size:20px;cursor:pointer;"]),p=i.ZP.div.withConfig({displayName:"Navbar__Menu",componentId:"sc-bot6ol-3"})(["display:flex;a{margin-left:8px;font-size:12px;cursor:pointer;padding-top:4px;@media ","{font-size:14px;margin-left:12px;}@media ","{margin-left:24px;transition:color 0.3s;&:hover{color:var(--primary-dark);}}}"],o.U.tablet,o.U.desktop);n.Z=function(e){var n=e.children,t=e.isVisible;return(0,c.jsx)(l,{isVisible:t,children:(0,c.jsxs)(s,{children:[(0,c.jsx)(a(),{href:"/",passHref:!0,children:(0,c.jsx)("a",{children:(0,c.jsx)(d,{children:"unDraw"})})}),(0,c.jsx)(p,{children:n})]})})}},4223:function(e,n,t){var i=t(9008),o=t.n(i),r=t(5893),a=function(e){var n=e.title,t=e.description,i=e.img,a=e.url;return(0,r.jsxs)(o(),{children:[(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("title",{children:n}),(0,r.jsx)("meta",{name:"description",content:t}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:title",content:n}),(0,r.jsx)("meta",{property:"og:url",content:a}),(0,r.jsx)("meta",{property:"og:description",content:t}),(0,r.jsx)("meta",{property:"og:image",content:i}),(0,r.jsx)("meta",{property:"og:locale",content:"en_US"}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:title",content:n}),(0,r.jsx)("meta",{name:"twitter:description",content:t}),(0,r.jsx)("meta",{name:"twitter:image",content:i}),(0,r.jsx)("meta",{name:"twitter:url",content:a}),(0,r.jsx)("meta",{name:"robots",content:"index, follow"}),(0,r.jsx)("link",{rel:"shortcut icon",href:"/favicon.ico"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,r.jsx)("link",{rel:"manifest",href:"/site.webmanifest"}),(0,r.jsx)("link",{rel:"mask-icon",href:"/safari-pinned-tab.svg",color:"#5bbad5"}),(0,r.jsx)("meta",{name:"msapplication-TileColor",content:"#6c63ff"}),(0,r.jsx)("meta",{name:"theme-color",content:"#ffffff"})]})};a.defaultProps={title:"unDraw - Open source illustrations for any idea",description:"The design project with open-source illustrations for any idea you can imagine and create. Create beautiful websites, products and applications with your color, for free.",img:"https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/v2/undraw_social_20.png",url:"https://undraw.co"},n.Z=a},8623:function(e,n,t){t.d(n,{Ck:function(){return u},Eq:function(){return d},PS:function(){return s},T3:function(){return r},aA:function(){return g},fi:function(){return f},ft:function(){return p},h1:function(){return l},h4:function(){return a},y7:function(){return c}});var i=t(7379),o=t(4926),r=i.ZP.div.withConfig({displayName:"Pages__Page",componentId:"sc-1clgew6-0"})(["width:1356px;max-width:80%;margin:0 auto;padding:64px 0;"]),a=i.ZP.header.withConfig({displayName:"Pages__Header",componentId:"sc-1clgew6-1"})(["display:flex;justify-content:space-between;align-items:flex-start;h1{cursor:pointer;}"]),c=i.ZP.div.withConfig({displayName:"Pages__HeaderMenu",componentId:"sc-1clgew6-2"})(["padding-top:10px;user-select:none;display:flex;align-items:center;@media ","{padding-top:16px;}"],o.U.tablet),l=i.ZP.a.withConfig({displayName:"Pages__HeaderMenuItem",componentId:"sc-1clgew6-3"})(["margin-left:8px;font-size:13px;cursor:pointer;position:relative;@media ","{font-size:14px;margin-left:12px;}@media ","{margin-left:24px;transition:color 0.3s;&:hover{color:var(--primary-dark);}}"],o.U.tablet,o.U.desktop),s=i.ZP.div.withConfig({displayName:"Pages__NewTag",componentId:"sc-1clgew6-4"})(["position:absolute;top:-24px;left:0;font-size:11px;font-weight:var(--weight-semi);text-transform:uppercase;background-color:#37dbe2;color:#000;padding:2px 6px 3px 6px;border-radius:6px;"]),d=i.ZP.span.withConfig({displayName:"Pages__HeaderMenuItemText",componentId:"sc-1clgew6-5"})(["display:none;@media ","{display:inline-block;}"],o.U.tablet),p=i.ZP.span.withConfig({displayName:"Pages__HeaderMenuItemIcon",componentId:"sc-1clgew6-6"})(["margin-left:4px;@media ","{display:none;}svg{height:20px;width:20px;display:inline-block;vertical-align:middle;}"],o.U.tablet),f=i.ZP.div.withConfig({displayName:"Pages__Subheader",componentId:"sc-1clgew6-7"})(["width:100%;max-width:560px;margin-bottom:64px;"]),u=i.ZP.div.withConfig({displayName:"Pages__CurrentPage",componentId:"sc-1clgew6-8"})(["color:var(--primary);font-weight:var(--weight-semi);"]),g=i.ZP.span.withConfig({displayName:"Pages__Stress",componentId:"sc-1clgew6-9"})(["border-bottom:1px solid var(--text);font-weight:var(--weight-semi);color:var(--text-dark);"])},2448:function(e,n,t){t.d(n,{Z:function(){return r}});var i=t(2640),o=t(7294);function r(e){var n=(0,o.useState)(!0),t=n[0],r=n[1];return(0,o.useEffect)((function(){var n=new IntersectionObserver((function(e){var n=(0,i.Z)(e,1)[0];return r(n.isIntersecting)}));return n.observe(e.current),function(){n.disconnect()}}),[]),t}},4412:function(e,n,t){t.d(n,{Kz:function(){return c},Nc:function(){return a}});var i=t(542),o=null,r=function(){o||(i.ZP.initialize("UA-98726453-2",{titleCase:!1}),o=!0)},a=function(){r(),i.ZP.set({page:window.location.pathname}),i.ZP.pageview(window.location.pathname)},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";r(),e&&n&&i.ZP.event({category:e,action:n,label:t})}},6243:function(e,n,t){t.d(n,{Cd:function(){return l},P9:function(){return s},Sq:function(){return a},Ty:function(){return c},e:function(){return d}});var i=t(3144),o=t.n(i),r=(t(1752),"https://undraw.co/api");function a(e,n,t){return o()("".concat(r,"/download"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({imgUrl:e,color:n,type:t})})}function c(e){return o()("".concat(r,"/download"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({illoId:e,type:"svg"})})}function l(e){return o()("".concat(r,"/illustrations?page=").concat(e))}function s(e){return o()("".concat(r,"/search"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:e})})}function d(e){return o()("".concat(r,"/community?page=").concat(e))}},9947:function(e,n,t){t.d(n,{$o:function(){return o},Ad:function(){return c},St:function(){return u},Vb:function(){return r},gp:function(){return p},iW:function(){return f},kq:function(){return d},qt:function(){return a},x1:function(){return s}});var i=t(7567),o=function(e){(0,i.L)(document.getElementsByClassName("grid_media"),{renumerateIRIElements:"false",evalScripts:"once",afterEach:function(n,t){n||(t.removeAttribute("data-src"),e&&l(t,null,e))}})},r=function(e){(0,i.L)(document.getElementsByClassName("grid_media"),{renumerateIRIElements:"false",evalScripts:"once",afterEach:function(n,t){n||(t.removeAttribute("data-src"),e&&l(t,"#a0fff0",e))}})},a=function(e,n){if(e||(e="#6c63ff"),e!==n){var t,i=document.querySelectorAll('*[fill="'+e+'"]');for(t=0;t<i.length;++t)i[t].setAttribute("fill",n)}},c=function(e,n){if(e||(e="#a0fff0"),e!==n){var t,i=document.querySelectorAll('*[fill="'+e+'"]');for(t=0;t<i.length;++t)i[t].setAttribute("fill",n)}},l=function(e,n,t){if(n||(n="#6c63ff"),n!==t){var i,o=document.querySelectorAll('*[fill="'+n+'"]');for(i=0;i<o.length;++i)o[i].setAttribute("fill",t)}},s=function(e){var n=(new XMLSerializer).serializeToString(e),t=unescape(encodeURIComponent(n)),i=btoa(t);return"data:image/svg+xml;base64,".concat(i)};function d(e,n){n=n||"";for(var t=1024,i=atob(e),o=i.length,r=Math.ceil(o/t),a=new Array(r),c=0;c<r;++c){for(var l=c*t,s=Math.min(l+t,o),d=new Array(s-l),p=l,f=0;p<s;++f,++p)d[f]=i[p].charCodeAt(0);a[c]=new Uint8Array(d)}return new Blob(a,{type:n})}var p=function(e){return window&&window.localStorage?window.localStorage.setItem("unDrawColor",e):null},f=function(){return window&&window.localStorage?window.localStorage.removeItem("unDrawColor"):null},u=function(){return window&&window.localStorage?window.localStorage.getItem("unDrawColor"):null}}}]);