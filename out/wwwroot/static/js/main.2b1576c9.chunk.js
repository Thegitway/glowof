(this.webpackJsonpglowof=this.webpackJsonpglowof||[]).push([[0],{44:function(e,t,n){},45:function(e,t){},61:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);n(39);var a,r,c=n(0),i=n(21),s=n.n(i),o=n(17),l=n(12),d=n(13),j=n(15),b=n(14),h=n(5),u=n(18),O=n(7),m=n(63),p=n(64),f=n(65),x=n(66),g=n(69),v=n(67),y=n(68),w=(n(44),n(45),n(8)),k=n(2),N=w.a.div(a||(a=Object(O.a)(["\ndisplay:flex;\nflex-direction:column;\nborder: 1px;\nborder-color: black;\nborder-style: dotted;\nborder-radius: 20px;\n"]))),C=w.a.img(r||(r=Object(O.a)(["\nobject-fit: fill;\nborder-radius: 19px;\nheight: 20vh;\n"]))),T=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).toggleNavbar=a.toggleNavbar.bind(Object(u.a)(a)),a.state={collapsed:!0},a}return Object(d.a)(n,[{key:"toggleNavbar",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"render",value:function(){return Object(k.jsx)("header",{children:Object(k.jsx)(m.a,{className:"navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-0",light:!0,children:Object(k.jsxs)(p.a,{children:[Object(k.jsx)(f.a,{tag:o.b,to:"/",children:Object(k.jsx)("img",{style:{height:"20vh"},src:"logo.png"})}),Object(k.jsx)(x.a,{onClick:this.toggleNavbar,className:"mr-2"}),Object(k.jsx)(g.a,{className:"d-sm-inline-flex flex-sm-row-reverse",isOpen:!this.state.collapsed,navbar:!0,children:Object(k.jsxs)("ul",{className:"navbar-nav flex-grow",children:[Object(k.jsx)(v.a,{children:Object(k.jsx)(y.a,{tag:o.b,className:"text-dark",to:"/",children:"Home"})}),Object(k.jsx)(v.a,{children:Object(k.jsx)(y.a,{tag:o.b,className:"text-dark",to:"/fetch-data",children:"Products"})})]})}),Object(k.jsx)(y.a,{tag:o.b,className:"text-dark",to:"/description",children:Object(k.jsx)(N,{children:Object(k.jsx)(C,{src:"user.png"})})})]})})})}}]),n}(c.Component);T.displayName=T.name;var F,S,A,I,G,L=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(k.jsxs)("div",{children:[Object(k.jsx)(T,{}),this.props.children]})}}]),n}(c.Component);L.displayName=L.name;var P=w.a.img(F||(F=Object(O.a)(["\nflex:1;\nwidth: 30vw;\npadding: 4%;\nborder-radius: 20px;\n"]))),R=w.a.div(S||(S=Object(O.a)(["\nbackground-color:pink;\n      height:100vh;\n      width:100vw;\n      display:flex;\n     flex-direction:column;\n    align-items:center;\n     justify-content:center;\n"]))),W=w.a.div(A||(A=Object(O.a)(["\nflex:1;\ndisplay:flex;\nflex-direction:column;\n height:60vh;\n align-items:center;\n  justify-content:center;\n"]))),B=w.a.div(I||(I=Object(O.a)(["\ndisplay:flex;\n\n"]))),D=w.a.div(G||(G=Object(O.a)(["\npadding:0% 4% 0% 9%;"]))),H=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(k.jsxs)(R,{children:[Object(k.jsx)("h1",{children:"Welcome to GlowOf"}),Object(k.jsx)("p",{children:"Hello World"}),Object(k.jsxs)(B,{children:[Object(k.jsxs)(W,{children:[Object(k.jsx)(P,{src:"pro1.png"}),Object(k.jsx)(D,{children:"Free gifts | Save on your skin & body faves while bagging some incredible free treats"})]}),Object(k.jsxs)(W,{children:[Object(k.jsx)(P,{src:"pro2.png"}),Object(k.jsx)(D,{children:"Free gifts | Save on your skin & body faves while bagging some incredible free treats"})]}),Object(k.jsxs)(W,{children:[Object(k.jsx)(P,{src:"pro3.png"}),Object(k.jsx)(D,{children:"Free gifts | Save on your skin & body faves while bagging some incredible free treats"})]})]})]})}}]),n}(c.Component);H.displayName=H.name;var M=n(28),q=n.n(M),z=n(37),E=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={data:[],loading:!0},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.populate()}},{key:"render",value:function(){var e=this.state.loading?Object(k.jsx)("p",{children:Object(k.jsx)("em",{children:"Loading..."})}):n.renderForecastsTable(this.state.data);return Object(k.jsxs)("div",{children:[Object(k.jsx)("h1",{id:"tabelLabel",children:"Glowof Product"}),Object(k.jsx)("p",{children:"This component demonstrates fetching data from the server."}),e]})}},{key:"populate",value:function(){var e=Object(z.a)(q.a.mark((function e(){var t,n;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://20.101.92.75/product");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({data:n,loading:!1});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}],[{key:"renderForecastsTable",value:function(e){return Object(k.jsxs)("table",{className:"table table-striped","aria-labelledby":"tabelLabel",children:[Object(k.jsx)("thead",{children:Object(k.jsxs)("tr",{children:[Object(k.jsx)("th",{children:"Name"}),Object(k.jsx)("th",{children:"Description"}),Object(k.jsx)("th",{children:"Price (DH)"}),Object(k.jsx)("th",{children:"Quantite"})]})}),Object(k.jsx)("tbody",{children:e.map((function(e){return Object(k.jsxs)("tr",{children:[Object(k.jsx)("td",{children:e.name}),Object(k.jsx)("td",{children:e.description}),Object(k.jsx)("td",{children:e.price}),Object(k.jsx)("td",{children:e.stock})]},e.id)}))})]})}}]),n}(c.Component);E.displayName=E.name;var J,U,Q,$,K,V,X,Y,Z,_,ee=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={currentCount:0},a.incrementCounter=a.incrementCounter.bind(Object(u.a)(a)),a}return Object(d.a)(n,[{key:"incrementCounter",value:function(){this.setState({currentCount:this.state.currentCount+1})}},{key:"render",value:function(){return Object(k.jsxs)("div",{children:[Object(k.jsx)("h1",{children:"Counter"}),Object(k.jsx)("p",{children:"This is a simple example of a React component."}),Object(k.jsxs)("p",{"aria-live":"polite",children:["Current count: ",Object(k.jsx)("strong",{children:this.state.currentCount})]}),Object(k.jsx)("button",{className:"btn btn-primary",onClick:this.incrementCounter,children:"Increment"})]})}}]),n}(c.Component);ee.displayName=ee.name;var te=w.a.div(J||(J=Object(O.a)(["\nwidth: 90vw;\nheight: 90vh;\nbackground-color: white;\n"]))),ne=w.a.img(U||(U=Object(O.a)(["\n   object-fit:cover;\n  width: 40vw;\n  height: 90vh;\n  border-radius: 0px;\n"]))),ae=w.a.div(Q||(Q=Object(O.a)(["\ndisplay: flex;\nmargin-left: 5%;\njustify-content: start;\nalign-items: start;\nflex-direction: column;\n"]))),re=w.a.div($||($=Object(O.a)(["\ndisplay: flex;\npadding:3%;\njustify-content: space-between;\nalign-items: flex-start;\n"]))),ce=w.a.h1(K||(K=Object(O.a)(["\nfont-family: Georgia, 'Times New Roman', Times, serif;\nfont-weight: 200;\n"]))),ie=w.a.div(V||(V=Object(O.a)(["\nfont-weight: 100;\nfont-size: 40px;\nfont-family: Georgia, 'Times New Roman', Times, serif;\n\n"]))),se=w.a.div(X||(X=Object(O.a)(["\nmargin: 10px 0px;\nfont-family: Georgia, 'Times New Roman', Times, serif;\n\n"]))),oe=(w.a.div(Y||(Y=Object(O.a)(["\ndisplay: flex;\nmargin-top: 5%;\nalign-items: center;\njustify-content: center;\n"]))),Object(w.b)(Z||(Z=Object(O.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"]))));w.a.div(_||(_=Object(O.a)(["\n  display: inline-block;\n  animation: "," 2s linear infinite;\n  padding: 8rem 1rem;\n  font-size: 1.2rem;\n"])),oe);function le(){return Object(k.jsx)(te,{children:Object(k.jsxs)(re,{children:[Object(k.jsx)(ne,{flex:"1",src:"user.png"}),Object(k.jsxs)(ae,{children:[Object(k.jsx)(ce,{children:"OUMAIMA AFRAOUI"}),Object(k.jsx)(se,{children:"A princess is the daughter of a king or queen, or the wife of a prince. Some children like to have princess parties because they get to wear fancy dresses, tiaras, and little plastic high heels. In countries that are monarchies, rulers are born into their positions and are typically called kings and queens.    "}),Object(k.jsx)(ie,{children:"Wydad 37"})]})]})})}n(61);var de=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(k.jsxs)(L,{children:[Object(k.jsx)(h.a,{exact:!0,path:"/",component:H}),Object(k.jsx)(h.a,{path:"/counter",component:ee}),Object(k.jsx)(h.a,{path:"/fetch-data",component:E}),Object(k.jsx)(h.a,{path:"/description",component:le})]})}}]),n}(c.Component);de.displayName=de.name;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var je=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,70)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))},be=document.getElementsByTagName("base")[0].getAttribute("href"),he=document.getElementById("root");s.a.render(Object(k.jsx)(o.a,{basename:be,children:Object(k.jsx)(de,{})}),he),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),je()}},[[62,1,2]]]);
//# sourceMappingURL=main.2b1576c9.chunk.js.map