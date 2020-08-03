(this["webpackJsonpclone-uber-app"]=this["webpackJsonpclone-uber-app"]||[]).push([[0],{13:function(e,t,a){},53:function(e,t,a){e.exports=a(92)},59:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(49),l=a.n(c),s=(a(58),a(59),a(8)),o=a(9),i=a(17),m=a(11),u=a(10),h=a(50),d=a.n(h),f=a(93);a(13);var E=function(e){var t=e.isShow,a=e.title,n=e.isClose;return r.a.createElement("div",{className:d()("ShowForm",{"ShowForm-show":t})},a.map((function(e,t){return r.a.createElement(f.a,{href:"#",key:t,className:"ShowForm-text"},e,r.a.createElement("svg",{width:32,height:32},r.a.createElement("path",{d:"M22.2 12l-6.5 9h-3.5l5.5-7.5H2v-3h15.7L12.2 3h3.5l6.5 9z",fill:"currentColor"})))})),r.a.createElement("div",{className:"close",onClick:n},"X"))},p=a(3),v=a.n(p),b=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={isShow:!1},n.isShow=n.isShow.bind(Object(i.a)(n)),n}return Object(o.a)(a,[{key:"isShow",value:function(){this.setState({isShow:!this.state.isShow})}},{key:"render",value:function(){return r.a.createElement("div",{className:v()("HeaderToggle",{"HeaderToggle-show":this.props.isOpen})},r.a.createElement(f.a,{className:"HeaderToggle-title",onClick:this.isShow},"Company"),r.a.createElement(f.a,{className:"HeaderToggle-link",href:"/about-us/"},"About us"),r.a.createElement(f.a,{className:"HeaderToggle-link",href:"/how-uber-works/"},"How Uber works"),r.a.createElement(f.a,{className:"HeaderToggle-link",href:"/global-citizenship/"},"Global citizenship"),r.a.createElement(f.a,{className:"HeaderToggle-link",href:"/newsroom/"},"Newsroom"),r.a.createElement(f.a,{className:"HeaderToggle-link",href:"/investor-relations/"},"Investor relations"),r.a.createElement(f.a,{className:"HeaderToggle-link",href:"/blog/"},"Blog"),r.a.createElement(f.a,{className:"HeaderToggle-link",href:"/careers/"},"Careers"))}}]),a}(n.Component),g=a(94),w=a(95),N=a(96),k=a(97),S=a(98),y=a(99),C=a(106),O=a(105),j=a(107),x=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={isOpen:!1,isShow:!1,title:[]},n.isOpen=n.isOpen.bind(Object(i.a)(n)),n.isShow1=n.isShow1.bind(Object(i.a)(n)),n.isShow2=n.isShow2.bind(Object(i.a)(n)),n.isClose=n.isClose.bind(Object(i.a)(n)),n}return Object(o.a)(a,[{key:"isOpen",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"isShow1",value:function(){this.setState({isShow:!0,title:["Drive Login","Rider login"]})}},{key:"isShow2",value:function(){this.setState({isShow:!0,title:["Sign up to drive","Sign up to ride"]})}},{key:"isClose",value:function(){this.setState({isShow:!1})}},{key:"render",value:function(){var e=this.state,t=e.isOpen,a=e.isShow,n=e.title;return r.a.createElement("header",{className:"Header"},r.a.createElement(g.a,null,r.a.createElement(w.a,{className:"Header-bar"},r.a.createElement(N.a,{md:"6",xs:"2"},r.a.createElement(k.a,{light:!0,expand:"md",className:"pl-0"},r.a.createElement(S.a,{href:"/"},"Uber"),r.a.createElement(y.a,{className:"mr-auto header-nav--none",navbar:!0},r.a.createElement(C.a,{nav:!0,inNavbar:!0},r.a.createElement(O.a,{nav:!0,caret:!0,className:"nav-link-a"},"Company"),r.a.createElement(j.a,{right:!0,className:"header-dropdown"},r.a.createElement(f.a,{href:"/about-us/"},"About us"),r.a.createElement(f.a,{href:"/how-uber-works/"},"How Uber works"),r.a.createElement(f.a,{href:"/global-citizenship/"},"Global citizenship"),r.a.createElement(f.a,{href:"/newsroom/"},"Newsroom"),r.a.createElement(f.a,{href:"/investor-relations/"},"Investor relations"),r.a.createElement(f.a,{href:"/blog/"},"Blog"),r.a.createElement(f.a,{href:"/careers/"},"Careers")))))),r.a.createElement(N.a,{md:"6",xs:"10"},r.a.createElement(k.a,{light:!0,expand:"md",className:"navbar--height pr-0"},r.a.createElement("button",{className:"btn btn-login",onClick:this.isShow1},"Log in"),r.a.createElement("button",{className:"btn btn-signup",onClick:this.isShow2},"Sign up"),r.a.createElement("img",{className:"button-toggle",src:"https://cdn.glitch.com/a26bd76a-6823-41ff-a537-0a2ac1dc5db7%2Fopen-menu.svg?v=1591688923663",onClick:this.isOpen,width:32,height:32}))))),r.a.createElement(b,{isOpen:t}),r.a.createElement(E,{title:n,isShow:a,isClose:this.isClose}),r.a.createElement(g.a,null,r.a.createElement(w.a,{className:"header-flex"},r.a.createElement(N.a,{md:"12",lg:"6"},r.a.createElement("img",{className:"header-image",src:"https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_698,h_465/v1586184518/assets/ef/95d634-7cb9-4b27-8de0-79c9680c7077/original/City-4_5.jpg"})),r.a.createElement(N.a,{md:"12",lg:"6"},r.a.createElement("h1",null,"Help keep each other safe"),r.a.createElement("p",null,"The world is upside down. Everything has changed. We are actively monitoring the coronavirus (COVID\u201119) situation and are taking steps to help keep those that rely on our platform safe."),r.a.createElement("a",{href:"#",className:"btn-more"},"Learn more")))))}}]),a}(n.Component),F=a(19),H=a.n(F),T=r.a.createContext(),z=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={slides:[]},n.onClick=n.onClick.bind(Object(i.a)(n)),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;H.a.get("https://db-server-project.herokuapp.com/slides").then((function(t){e.setState({slides:t.data})})).catch((function(e){console.log(e)}))}},{key:"onClick",value:function(e,t){for(var a=e.parentElement.parentElement.parentElement.children[0],n=this.state.slides,r=n.indexOf(t),c=[],l=0;l<n.length;l++)n[l].isBorder&&(n[l].isBorder=!1),n.indexOf(n[l])===r&&(n[l].isBorder=!0),c.push(n[l]);this.setState({slides:c}),a.style.left=e.parentElement.offsetLeft+"px",a.style.width=e.parentElement.offsetWidth+"px"}},{key:"render",value:function(){var e=this.state.slides;return r.a.createElement(T.Provider,{value:{slides:e,onClick:this.onClick}},this.props.children)}}]),a}(n.Component);function _(){var e=Object(n.useContext)(T),t=e.slides,a=e.onClick;return r.a.createElement("section",{className:"SlideSection"},t.map((function(e,t){return r.a.createElement("div",{key:t,className:v()("SlideSection-image",{"image-show":e.isBorder})},r.a.createElement("img",{src:e.coverUrl,alt:""}))})),r.a.createElement(g.a,{className:"SlideSection-bar"},r.a.createElement("div",{className:"mark"}),r.a.createElement(w.a,{className:"w-100 m-0"},t.map((function(e,t){return r.a.createElement(N.a,{md:"1",sm:"3",xs:"6",key:t,className:"SlideSection-element",onClick:function(t){return a(t.target,e)}},r.a.createElement("img",{src:e.icon,alt:""}),r.a.createElement("p",null,e.name))})))),r.a.createElement(g.a,null,t.map((function(e,t){return r.a.createElement("div",{key:t,className:v()("SlideSection-content",{"SlideSection-show":e.isBorder})},r.a.createElement("h1",null,e.title),r.a.createElement("p",null,e.content),r.a.createElement("a",{href:"#",className:"btn-more btn-background"},e.text))}))))}var B=function(){return r.a.createElement("section",{className:"PostSection"},r.a.createElement("img",{src:"https://www.uber-assets.com/image/upload/v1556927537/assets/e4/ade93c-0b7b-4990-bda4-afef96793277/original/Modalities_banner_home.jpg",alt:""}),r.a.createElement(g.a,{className:"PostSection-content"},r.a.createElement("h1",null,"Setting 900+ cities in motion"),r.a.createElement("a",{href:"#"},"View all cities")))},U=r.a.createContext(),D=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={cards:[]},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;H.a.get("https://db-server-project.herokuapp.com/cards").then((function(t){e.setState({cards:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.cards;return r.a.createElement(U.Provider,{value:{cards:e}},this.props.children)}}]),a}(n.Component),L=a(100),M=a(101),I=a(102),P=a(103),W=a(104);var A=function(e){var t=e.card;return r.a.createElement(L.a,{className:"Item"},r.a.createElement(M.a,{top:!0,width:"100%",src:t.imageUrl,alt:""}),r.a.createElement(I.a,{className:"pl-0"},r.a.createElement(P.a,null,t.title),r.a.createElement(W.a,null,t.content),r.a.createElement(f.a,{className:"link-b",href:"#"},"Learn more")))};var G=function(){var e=Object(n.useContext)(U).cards;return r.a.createElement("section",{className:"CardSection"},r.a.createElement(g.a,null,r.a.createElement("h2",{className:"CardSection-title"},"Uber for Business"),r.a.createElement("p",{className:"CardSection-text"},"The power of Uber in everyday business"),r.a.createElement(w.a,{className:"w-100 m-0 CardSection-body mt-5"},e.map((function(e,t){return r.a.createElement(N.a,{md:"6",lg:"4",sm:"12",className:"card-padding",key:t},r.a.createElement(A,{card:e}))})))))};var V=function(){return r.a.createElement("section",{className:"CommitmentSection"},r.a.createElement(g.a,null,r.a.createElement(w.a,{className:"CommitmentSection-flex w-100 m-0"},r.a.createElement(N.a,{lg:"7",md:"12",className:"pr-0"},r.a.createElement("img",{src:"https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_698,h_465/v1558736931/assets/e5/fb1f43-f1bf-4dd2-b62d-6015c758d2ee/original/Safety_ilo.svg",alt:""})),r.a.createElement(N.a,{lg:"5",md:"12",className:"pl-0"},r.a.createElement("h1",null,"Our commitment to your safety"),r.a.createElement("p",null,"With every safety feature we add and every standard in our Community Guidelines we uphold, we're committed to working to create a safe environment for our users."),r.a.createElement(w.a,{className:"flex-lg-column flex-md-row pl-3"},r.a.createElement(f.a,{className:"link-b link-w mr-5",href:"#"},"Learn more about our Community Guidelines"),r.a.createElement(f.a,{className:"link-b link-w",href:"#"},"See all safety features"))))))},q=r.a.createContext(),J=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={contents:[]},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;H.a.get("https://db-server-project.herokuapp.com/Contents").then((function(t){e.setState({contents:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.contents;return r.a.createElement(q.Provider,{value:{contents:e}},this.props.children)}}]),a}(n.Component);var R=function(){var e=Object(n.useContext)(q).contents;return r.a.createElement("section",{className:"ContextSection"},r.a.createElement(g.a,null,r.a.createElement(w.a,{className:"w-100 m-0"},e.map((function(e,t){return r.a.createElement(N.a,{md:"6",lg:"4",key:t},r.a.createElement("div",{className:"ContextSection-icon"},r.a.createElement("img",{src:e.icon,alt:""})),r.a.createElement("h3",{className:"ContextSection-title"},e.title),r.a.createElement("p",{className:"ContextSection-text"},e.content),r.a.createElement(f.a,{className:"link-b",href:"#"},"Learn more"))})))))};var X=function(){return r.a.createElement("main",{className:"Main"},r.a.createElement(z,null,r.a.createElement(_,null)),r.a.createElement(B,null),r.a.createElement(D,null,r.a.createElement(G,null)),r.a.createElement(V,null),r.a.createElement(J,null,r.a.createElement(R,null)))};var $=function(e){var t=e.children;return r.a.createElement("div",{className:"Data"},t.map((function(e,t){return r.a.createElement(f.a,{className:"Data-link",href:"#",key:t},e)})))},K=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={datas:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;H.a.get("https://db-server-project.herokuapp.com/datas").then((function(t){e.setState({datas:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.datas;return r.a.createElement("section",{className:"ContentFooter"},r.a.createElement(w.a,null,e.map((function(e,t){return r.a.createElement(N.a,{lg:"3",sm:"6",md:"4",key:t},r.a.createElement("h3",{className:"ContentFooter-title"},e.title),r.a.createElement($,null,e.contents))}))))}}]),a}(n.Component),Q=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={icons:["https://cdn.glitch.com/a26bd76a-6823-41ff-a537-0a2ac1dc5db7%2Ffacebook.svg?v=1592132452547","https://cdn.glitch.com/a26bd76a-6823-41ff-a537-0a2ac1dc5db7%2Ftwitter.svg?v=1592132464971","https://cdn.glitch.com/a26bd76a-6823-41ff-a537-0a2ac1dc5db7%2Fyoutube.svg?v=1592132467350","https://cdn.glitch.com/a26bd76a-6823-41ff-a537-0a2ac1dc5db7%2Finstagram.svg?v=1592132462058"],images:["https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/illustrations/app-store-google-4d63c31a3e.svg","https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/illustrations/app-store-apple-f1f919205b.svg"]},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.icons,a=e.images;return r.a.createElement("footer",{className:"Footer"},r.a.createElement("h2",{className:"Footer-name"},"Uber"),r.a.createElement("div",{className:"Footer-link"},r.a.createElement(f.a,{href:"#"},"Visit help center")),r.a.createElement(K,null),r.a.createElement("div",{className:"Footer-icon"},r.a.createElement(w.a,{className:"w-100 m-0 justify-content-between IconSection"},r.a.createElement(N.a,{md:"6",className:"pl-0"},r.a.createElement(w.a,{className:"w-100 m-0 h-100 align-items-center"},t.map((function(e,t){return r.a.createElement("div",{className:"icon-address",key:t},r.a.createElement("a",{className:"icon-link",href:"#"},r.a.createElement("img",{src:e,alt:"",width:16})))})))),r.a.createElement(N.a,{md:"6"},r.a.createElement(w.a,{className:"justify-content-end"},a.map((function(e,t){return r.a.createElement("div",{className:"icon-address",key:t},r.a.createElement("a",{href:"#"},r.a.createElement("img",{src:e,alt:"",width:150,height:50})))}))))),r.a.createElement(w.a,{className:"Footer-footer"},r.a.createElement(N.a,{sm:"6",className:"FooterSection-margin"},r.a.createElement("div",{className:"copyright"},"\xa9 2020 Uber Technologies Inc.")),r.a.createElement(N.a,{sm:"6"},r.a.createElement(w.a,{className:"justify-content-end pr-4"},r.a.createElement(f.a,{className:"copyright-link",href:"#"},"Privacy"),r.a.createElement(f.a,{className:"copyright-link",href:"#"},"Accessibility"),r.a.createElement(f.a,{className:"copyright-link",href:"#"},"Terms"))))))}}]),a}(n.Component);var Y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(x,null),r.a.createElement(X,null),r.a.createElement(Q,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[53,1,2]]]);
//# sourceMappingURL=main.94fd4248.chunk.js.map