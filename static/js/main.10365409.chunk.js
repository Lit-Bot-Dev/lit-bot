(this["webpackJsonplit-bot"]=this["webpackJsonplit-bot"]||[]).push([[0],{30:function(e,t){e.exports={CORS_SERVER_URL:"https://lit-cors.herokuapp.com/",LIT_BOT_SERVER_URL:"https://litbot.advaithm26.repl.co/"}},42:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(16),r=n.n(s),o=(n(42),n(15)),i=n(7),l=n(61),b=n(58),j=n(62),d=n(2);function m(){return Object(d.jsx)(l.a,{style:{backgroundColor:"#23272A"},variant:"dark",expand:"lg",children:Object(d.jsxs)(b.a,{children:[Object(d.jsx)(o.b,{style:{fontFamily:"Julius Sans One"},className:"navbar-brand",to:"/",children:"lit\u2122"}),Object(d.jsx)(l.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(d.jsx)(l.a.Collapse,{id:"basic-navbar-nav",children:Object(d.jsxs)(j.a,{className:"ml-auto",style:{fontFamily:"Inter"},children:[Object(d.jsx)(j.a.Link,{href:"https://ptb.discord.com/api/oauth2/authorize?client_id=808034778393608244&permissions=8&scope=bot",target:"_blank",children:"Invite"}),Object(d.jsx)(o.b,{className:"hover:no-underline nav-link",to:"/commands",children:"Commands"})]})})]})})}var h=n(27),x=n(28);function u(){return Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"pt-44 text-center text-white",style:{fontFamily:"Inter"},children:Object(d.jsxs)(b.a,{children:[Object(d.jsx)("h1",{style:{fontFamily:"Julius Sans One"},className:"mb-4 text-7xl",children:"lit bot"}),Object(d.jsx)("h4",{className:"mb-3",children:"The perfect multi-purpose bot by Lit\u2122 Enterprises."}),Object(d.jsx)(o.b,{to:"/commands",className:"b text-white rounded-sm home-btn text-2xl",style:{backgroundColor:"#7289DA"},children:"Commands"}),Object(d.jsxs)("a",{className:"ml-2 b rounded-sm hover:text-black home-btn text-2xl mt-2",style:{backgroundColor:"#FF0"},href:"https://ptb.discord.com/api/oauth2/authorize?client_id=808034778393608244&permissions=8&scope=bot",target:"_blank",children:[Object(d.jsx)(h.a,{icon:x.a})," Invite"]}),Object(d.jsxs)("a",{className:"ml-2 b text-white rounded-sm home-btn text-2xl mt-2",style:{backgroundColor:"#7289DA"},href:"https://discord.gg/ADvWvmgKYd",target:"_blank",children:[Object(d.jsx)(h.a,{icon:x.a})," Official Server"]})]})})})}var O=n(29),p=n.n(O),f=n(37),v=n(31),y=n(59),g=n(60),k=n(63),C=n(30);function F(){var e=Object(c.useState)(""),t=Object(v.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(),r=Object(v.a)(s,2),o=r[0],i=r[1];function l(){return(l=Object(f.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(C.CORS_SERVER_URL).concat(C.LIT_BOT_SERVER_URL,"api/commands"));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,i(n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(c.useEffect)((function(){!function(){l.apply(this,arguments)}()}),[]);var j={borderRadius:"0.5rem",border:"none",backgroundColor:"#2C2F33",color:"#fff",fontFamily:"Inter"};return o?Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{children:[Object(d.jsxs)(b.a,{children:[Object(d.jsx)("h1",{className:"pt-4 text-white mb-0",style:{fontFamily:"Manrope"},children:"Commands"}),Object(d.jsx)("input",{type:"text",className:"border-0 text-lg",style:{backgroundColor:"#23272A",color:"#fff",fontFamily:"Manrope",outline:"none"},placeholder:"Search for commands..",onChange:function(e){return a(e.target.value)},value:n}),Object(d.jsx)(y.a,{children:o&&o.filter((function(e){return""===n||e.name.toLowerCase().includes(n.toLowerCase())?e:void 0})).map((function(e){return!e.dev&&Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(g.a,{sm:"4",children:Object(d.jsx)(k.a,{style:j,className:"mt-4",children:Object(d.jsxs)(k.a.Body,{children:[Object(d.jsx)("h3",{children:e.name}),Object(d.jsx)("p",{className:"mb-0",children:e.siteDescription})]})})},e.name)})}))})]}),Object(d.jsx)("br",{})]})}):Object(d.jsxs)("div",{className:"text-white text-center mt-48",children:[Object(d.jsx)("h1",{style:{fontFamily:"Manrope"},className:"text-6xl",children:"Loading.."}),Object(d.jsx)("h3",{style:{fontFamily:"Julius Sans One"},children:"lit\u2122"})]})}var N=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(o.a,{basename:"/lit-bot",children:[Object(d.jsx)(m,{}),Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{path:"/",exact:!0,component:u}),Object(d.jsx)(i.a,{path:"/commands",exact:!0,component:F})]})]})})};n(55);r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.10365409.chunk.js.map