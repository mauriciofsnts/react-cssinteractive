(this.webpackJsonpreactinteractive=this.webpackJsonpreactinteractive||[]).push([[0],{35:function(e,t,c){},49:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(2),o=c.n(n),r=c(18),l=c.n(r),i=(c(35),c(36),c(19)),s=c(7),j=c(56),b=c(57),d=c(9),h=c(50),x=c(51),u=c(52),p=c(53),m=c(54),O=c(55),g="/box-shadow",f="/border-radius",v="/text-shadow";var y=Object(s.f)((function(e){var t=e.history,c=Object(n.useState)(!1),o=Object(d.a)(c,2),r=o[0],l=o[1];return Object(a.jsxs)(h.a,{color:"dark",className:"w-100 text-white d-flex justify-content-center align-items-center",expand:"lg",dark:!0,children:[Object(a.jsx)(x.a,{className:"flex-grow-1 text-white c-pointer",onClick:function(){return t.push("/")},children:"css-interactive"}),Object(a.jsx)(u.a,{onClick:function(){return l(!r)}}),Object(a.jsx)(p.a,{isOpen:r,navbar:!0,children:Object(a.jsxs)(m.a,{className:"mr-auto",navbar:!0,children:[Object(a.jsx)(O.a,{className:"mx-2 c-pointer",onClick:function(){return t.push(g)},children:"Box shadow"}),Object(a.jsx)(O.a,{className:"mx-2 c-pointer",onClick:function(){return t.push(f)},children:"Border radius"}),Object(a.jsx)(O.a,{className:"mx-2 c-pointer",onClick:function(){return t.push(v)},children:"Text shadow"}),Object(a.jsx)(O.a,{className:"mx-2",children:"Gradientes"}),Object(a.jsx)(O.a,{className:"mx-2",children:"Flexbox"}),Object(a.jsx)(O.a,{className:"mx-2",children:"Button Generator"})]})})]})})),C=function(e){var t=e.children;return Object(a.jsxs)(j.a,{fluid:"lg",children:[Object(a.jsx)(b.a,{children:Object(a.jsx)(y,{})}),Object(a.jsx)(b.a,{children:Object(a.jsx)(s.c,{children:t})})]})},w=c(58);var S=function(){return Object(a.jsx)(j.a,{children:Object(a.jsx)(b.a,{children:Object(a.jsx)(w.a,{children:"Hello World"})})})},k=c(13),N=c(10),B=c(59),z=c(60),V=c(61),R=c(65),I=function(e){var t=e.onChange,c=e.name,n=e.value,o=e.min,r=e.max,l=e.label,i=e.labelValue,s=e.step,j=void 0===s?1:s;return Object(a.jsxs)(B.a,{children:[Object(a.jsxs)(z.a,{for:"id".concat(c),className:"d-flex justify-content-between",children:[Object(a.jsx)("p",{children:l}),Object(a.jsxs)("p",{children:[i,"px"]})]}),Object(a.jsx)(V.a,{type:"range",min:o,max:r,id:"id".concat(c),name:c,value:n,onChange:t,step:j})]})},T=c(64);var L=function(e){var t=e.onclose,c=e.text;return setTimeout((function(){t()}),3e3),Object(a.jsx)(T.a,{color:"success",className:"clipboard-alert",fade:!0,children:c})};var A=function(e){var t=e.open,c=e.children,n=e.copyCallback;return Object(a.jsx)("div",{children:t&&Object(a.jsx)(b.a,{noGutters:!0,className:"p-3 bg-light rounded",onClick:function(){var e=document.createElement("textarea"),t=document.getElementById("codeCopyId").textContent;e.innerText=t,document.body.appendChild(e),e.select(),document.execCommand("copy"),e.remove(),n(!0)},children:Object(a.jsx)("p",{id:"codeCopyId",children:c})})})},F=c(62),G=c(63);var H=function(e){var t=e.title,c=e.description,n=e.toggle,o=e.reset,r=e.hideCode;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{className:"fs-2 text-center pt-3",children:t}),Object(a.jsx)("p",{className:"mt-2 fs-6",children:c}),Object(a.jsxs)(b.a,{noGutters:!0,className:"pt-2 d-flex justify-content-between",children:[Object(a.jsx)("h5",{children:"Platform"}),Object(a.jsxs)(F.a,{children:[Object(a.jsx)(G.a,{color:"secondary",children:"Web"}),Object(a.jsx)(G.a,{color:"primary",children:"React"})]})]}),Object(a.jsx)("hr",{}),Object(a.jsxs)(b.a,{noGutters:!0,className:"pb-3 d-flex justify-content-between",children:[Object(a.jsx)("h5",{children:"Properties"}),Object(a.jsxs)("div",{className:"d-flex  align-items-center",children:[Object(a.jsx)("button",{type:"button",className:"button-p px-2 c-pointer underline",onClick:n,children:r?"Hide code":"Show code"}),Object(a.jsx)("button",{type:"button",className:"button-p px-2 c-pointer underline",onClick:o,children:"Reset"})]})]})]})},q=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,c=e.match(/\w\w/g).map((function(e){return parseInt(e,16)})),a=Object(d.a)(c,3),n=a[0],o=a[1],r=a[2];return"rgba(".concat(n,",").concat(o,",").concat(r,",").concat(t,")")},E={horizontal:0,vertical:0,blur:0,spread:0,color:"#000000",opacity:1,inset:!1};var W={topleft:0,topright:0,bottomleft:0,bottomright:0,width:50,color:"#000",background:"#a83232",style:"solid",all:0,includeBg:!1};var J={horizontal:15,vertical:20,blur:0,color:"#000000",opacity:.2};var P=[{path:"/",component:S,exact:!0},{path:g,component:function(){var e=Object(n.useState)(E),t=Object(d.a)(e,2),c=t[0],o=t[1],r=Object(n.useState)(!1),l=Object(d.a)(r,2),i=l[0],s=l[1],h=Object(n.useState)(!1),x=Object(d.a)(h,2),u=x[0],p=x[1],m=function(e){var t=e.target,c=t.name,a=t.value;o((function(e){return Object(N.a)(Object(N.a)({},e),{},Object(k.a)({},c,a))}))},O={boxShadow:"".concat(c.horizontal,"px ").concat(c.vertical,"px ").concat(c.blur,"px ").concat(c.spread,"px ").concat(q(c.color,c.opacity)," ").concat(c.inset?"inset":""),height:300,width:300,backgroundColor:"red",overflow:"hidden"};return Object(a.jsxs)(j.a,{children:[Object(a.jsxs)(b.a,{style:{height:"80vh"},children:[Object(a.jsxs)(w.a,{md:6,children:[Object(a.jsx)(H,{title:"Box shadow",description:" A box-shadow CSS generator that helps you quickly generate box-shadow CSS declarations for your website. It comes with many options and it demonstrates instantly",toggle:function(){return s(!i)},reset:function(){return o(E)},hideCode:i}),Object(a.jsx)(b.a,{children:Object(a.jsxs)(w.a,{md:12,children:[Object(a.jsx)(A,{open:i,copyCallback:p,children:Object(a.jsxs)(a.Fragment,{children:["box-shadow:"," ","".concat(c.horizontal,"px ").concat(c.vertical,"px ").concat(c.blur,"px ").concat(c.spread,"px ").concat(q(c.color,c.opacity)," ").concat(c.inset?"inset":""),";",Object(a.jsx)("br",{}),"-webkit-box-shadow:"," ","".concat(c.horizontal,"px ").concat(c.vertical,"px ").concat(c.blur,"px ").concat(c.spread,"px ").concat(q(c.color,c.opacity)," ").concat(c.inset?"inset":""),";",Object(a.jsx)("br",{}),"-moz-box-shadow:"," ","".concat(c.horizontal,"px ").concat(c.vertical,"px ").concat(c.blur,"px ").concat(c.spread,"px ").concat(q(c.color,c.opacity)," ").concat(c.inset?"inset":""),";"]})}),Object(a.jsx)(I,{label:"Horizontal Shadow Length",labelValue:c.horizontal,value:c.horizontal,onChange:m,min:-100,max:100,name:"horizontal"}),Object(a.jsx)(I,{label:"Vertical Shadow Length",labelValue:c.vertical,value:c.vertical,onChange:m,min:-100,max:100,name:"vertical"}),Object(a.jsx)(I,{label:"Blur Radius",labelValue:c.blur,value:c.blur,onChange:m,min:0,max:100,name:"blur"}),Object(a.jsx)(I,{label:"Spread Radius",labelValue:c.spread,value:c.spread,onChange:m,min:0,max:100,name:"spread"}),Object(a.jsxs)(B.a,{children:[Object(a.jsx)(z.a,{for:"shadowColor",children:"Shadow Color"}),Object(a.jsx)(V.a,{type:"color",name:"color",id:"shadowColor",value:c.color,onChange:m})]}),Object(a.jsx)(I,{label:"Spread Shadow Color Opacity",labelValue:c.opacity,value:c.opacity,onChange:m,min:0,max:1,name:"opacity",step:"0.01"}),Object(a.jsx)(B.a,{className:"d-flex justify-content-end mt-2",children:Object(a.jsx)(R.a,{type:"switch",id:"insertSwitch",name:"inset",label:"Inset",value:c.inset,onChange:function(e){var t=e.target.name;o((function(e){return Object(N.a)(Object(N.a)({},e),{},Object(k.a)({},t,!c[t]))}))}})})]})})]}),Object(a.jsx)(w.a,{md:6,className:"d-flex justify-content-center align-items-center",children:Object(a.jsx)("div",{style:O,className:"mb-5"})})]}),u&&Object(a.jsx)(L,{text:"Copied to the clipboard!",onclose:function(){return p(!1)}})]})},exact:!0},{path:f,component:function(){var e=Object(n.useState)(W),t=Object(d.a)(e,2),c=t[0],o=t[1],r=Object(n.useState)(!1),l=Object(d.a)(r,2),i=l[0],s=l[1],h=Object(n.useState)(!1),x=Object(d.a)(h,2),u=x[0],p=x[1],m=function(e){var t=e.target,c=t.name,a=t.value;o((function(e){return Object(N.a)(Object(N.a)({},e),{},Object(k.a)({},c,a))}))},O={height:300,width:300,backgroundColor:c.background,overflow:"hidden",border:"".concat(c.width,"px ").concat(c.style," ").concat(c.color),borderRadius:"".concat(c.topleft,"px ").concat(c.topright,"px ").concat(c.bottomleft,"px ").concat(c.bottomright,"px")};return Object(a.jsxs)(j.a,{children:[Object(a.jsxs)(b.a,{style:{height:"80vh"},children:[Object(a.jsxs)(w.a,{md:6,className:"bshadow-container",children:[Object(a.jsx)(H,{title:"Border radius",description:"A border-radius CSS generator that helps you quickly generate border-radius CSS declarations for your website. It comes with many options and it demonstrates instantly",reset:function(){return o(W)},toggle:function(){return p(!u)},hideCode:u}),Object(a.jsx)(b.a,{children:Object(a.jsxs)(w.a,{md:12,children:[Object(a.jsx)(A,{open:u,copyCallback:s,children:Object(a.jsxs)(a.Fragment,{children:["border-radius:"," ","".concat(c.topleft,"px ").concat(c.topright,"px ").concat(c.bottomleft,"px ").concat(c.bottomright,"px"),";",Object(a.jsx)("br",{}),"-webkit-border-radius:"," ","".concat(c.topleft,"px ").concat(c.topright,"px ").concat(c.bottomleft,"px ").concat(c.bottomright,"px"),";",Object(a.jsx)("br",{}),"-moz-border-radius:"," ","".concat(c.topleft,"px ").concat(c.topright,"px ").concat(c.bottomleft,"px ").concat(c.bottomright,"px"),";",Object(a.jsx)("br",{}),"border:"," ","".concat(c.width,"px ").concat(c.style," ").concat(c.color),";",Object(a.jsx)("br",{}),"".concat(c.includeBg?"background: ".concat(c.background,";"):"")]})}),Object(a.jsx)(I,{label:"All Corners Radius",labelValue:c.all,value:c.all,onChange:function(e){var t=e.target.value;o((function(e){return Object(N.a)(Object(N.a)({},e),{},{topleft:t,topright:t,bottomleft:t,bottomright:t,all:t})}))},min:0,max:200,name:"all"}),Object(a.jsx)(I,{label:"Top Left Radius",labelValue:c.topleft,value:c.topleft,onChange:m,min:0,max:200,name:"topleft"}),Object(a.jsx)(I,{label:"Top Right Radius",labelValue:c.topright,value:c.topright,onChange:m,min:0,max:200,name:"topright"}),Object(a.jsx)(I,{label:"Bottom Left Radius",labelValue:c.bottomleft,value:c.bottomleft,onChange:m,min:0,max:200,name:"bottomleft"}),Object(a.jsx)(I,{label:"Bottom Right Radius",labelValue:c.bottomright,value:c.bottomright,onChange:m,min:0,max:200,name:"bottomright"}),Object(a.jsx)(I,{label:"Border Width",labelValue:c.width,value:c.width,onChange:m,min:0,max:200,name:"width"}),Object(a.jsxs)(B.a,{children:[Object(a.jsx)(z.a,{for:"borderColor",children:"Border Color"}),Object(a.jsx)(V.a,{type:"color",name:"color",id:"borderColor",value:c.color,onChange:m})]}),Object(a.jsxs)(B.a,{row:!0,children:[Object(a.jsx)(z.a,{for:"exampleSelect",sm:12,children:"Border Style"}),Object(a.jsx)(w.a,{sm:12,children:Object(a.jsxs)(V.a,{type:"select",name:"style",id:"exampleSelect",onChange:m,children:[Object(a.jsx)("option",{children:"solid"}),Object(a.jsx)("option",{children:"dotted"}),Object(a.jsx)("option",{children:"dashed"}),Object(a.jsx)("option",{children:"double"}),Object(a.jsx)("option",{children:"groove"}),Object(a.jsx)("option",{children:"ridge"}),Object(a.jsx)("option",{children:"inset"}),Object(a.jsx)("option",{children:"outset"}),Object(a.jsx)("option",{children:"none"}),Object(a.jsx)("option",{children:"hidden"})]})})]}),Object(a.jsxs)(B.a,{children:[Object(a.jsx)(z.a,{for:"backgroundColor",children:"Background Color"}),Object(a.jsx)(V.a,{type:"color",name:"background",id:"backgroundColor",value:c.background,onChange:m})]}),Object(a.jsx)(B.a,{className:"d-flex justify-content-end mt-2",children:Object(a.jsx)(R.a,{type:"switch",id:"includeBgSwitch",name:"includeBg",label:"Include background color in generating code",value:c.includeBg,onChange:function(e){var t=e.target.name;o((function(e){return Object(N.a)(Object(N.a)({},e),{},Object(k.a)({},t,!c[t]))}))}})})]})})]}),Object(a.jsx)(w.a,{md:6,className:"d-flex justify-content-center align-items-center mt-5",children:Object(a.jsx)("div",{style:O,className:"mb-5"})})]}),i&&Object(a.jsx)(L,{text:"Copied to the clipboard!",onclose:function(){return s(!1)}})]})},exact:!0},{path:v,component:function(){var e=Object(n.useState)(J),t=Object(d.a)(e,2),c=t[0],o=t[1],r=Object(n.useState)(!1),l=Object(d.a)(r,2),i=l[0],s=l[1],h=Object(n.useState)(!1),x=Object(d.a)(h,2),u=x[0],p=x[1],m=function(e){var t=e.target,c=t.name,a=t.value;o((function(e){return Object(N.a)(Object(N.a)({},e),{},Object(k.a)({},c,a))}))},O={textShadow:"".concat(c.horizontal,"px ").concat(c.vertical,"px ").concat(c.blur,"px ").concat(q(c.color,c.opacity))};return Object(a.jsxs)(j.a,{children:[Object(a.jsxs)(b.a,{style:{height:"80vh"},children:[Object(a.jsxs)(w.a,{md:6,children:[Object(a.jsx)(H,{title:"Text shadow",description:"A text-shadow CSS generator that helps you quickly generate text-shadow CSS declarations for your website. It comes with many options and it demonstrates instantly",toggle:function(){return s(!i)},reset:function(){return o(J)},hideCode:i}),Object(a.jsx)(b.a,{children:Object(a.jsxs)(w.a,{md:12,children:[Object(a.jsx)(A,{open:i,copyCallback:p,children:Object(a.jsxs)(a.Fragment,{children:["text-shadow:"," ","".concat(c.horizontal,"px ").concat(c.vertical,"px ").concat(c.blur,"px ").concat(q(c.color,c.opacity))]})}),Object(a.jsx)(I,{label:"Horizontal Shadow Length",labelValue:c.horizontal,value:c.horizontal,onChange:m,min:-200,max:200,name:"horizontal"}),Object(a.jsx)(I,{label:"Vertical Shadow Length",labelValue:c.vertical,value:c.vertical,onChange:m,min:-200,max:200,name:"vertical"}),Object(a.jsx)(I,{label:"Blur Radius",labelValue:c.blur,value:c.blur,onChange:m,min:1,max:50,name:"blur"}),Object(a.jsxs)(B.a,{children:[Object(a.jsx)(z.a,{for:"shadowColor",children:"Shadow Color"}),Object(a.jsx)(V.a,{type:"color",name:"color",id:"shadowColor",value:c.color,onChange:m})]}),Object(a.jsx)(I,{label:"Spread Shadow Color Opacity",labelValue:c.opacity,value:c.opacity,onChange:m,min:0,max:1,name:"opacity",step:"0.01"})]})})]}),Object(a.jsx)(w.a,{md:6,className:"d-flex justify-content-center align-items-center",children:Object(a.jsxs)("h1",{style:O,className:"mb-5",children:[" ","This text is the preview text"," "]})})]}),u&&Object(a.jsx)(L,{text:"Copied to the clipboard!",onclose:function(){return p(!1)}})]})},exact:!0}];var M=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(i.a,{children:Object(a.jsx)(C,{children:P.map((function(e){return Object(a.jsx)(s.a,{path:e.path,component:e.component,exact:e.exact},e.path)}))})})})};l.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(M,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.a18b794d.chunk.js.map