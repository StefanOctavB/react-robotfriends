(this.webpackJsonprobotfreinds=this.webpackJsonprobotfreinds||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(6),c=n.n(a),i=(n(12),n(1)),s=n(2),l=n(4),u=n(3),h=function(e){var t=e.name,n=e.email,r=e.id;return o.a.createElement("div",{className:"tc bg-light-green dib br3 ma2 grow bw2 shadow-5"},o.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?200x200")}),o.a.createElement("div",null,o.a.createElement("h2",null,t),o.a.createElement("p",null,n)))},d=function(e){var t=e.robots;return o.a.createElement("div",null,t.map((function(e,n){return o.a.createElement(h,{key:n,id:t[n].id,name:t[n].name,username:t[n].username,email:t[n].email})})))},f=function(e){var t=e.searchChange;return o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{className:"pa3 ba b--green gb-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},m=(n(13),function(e){return o.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid black",height:"800px"}},e.children)}),v=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(s.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null,"Oooops. That doesen't look realy good."):this.props.children}}]),n}(r.Component),g=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value}),console.log(t.target.value)},e.state={robots:[],searchfield:""},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?o.a.createElement("div",{className:"tc"},o.a.createElement("h1",{className:"f1"},"Robofriends"),o.a.createElement(f,{searchChange:this.onSearchChange}),o.a.createElement(m,null,o.a.createElement(v,null,o.a.createElement(d,{robots:r})))):o.a.createElement("h1",{className:"tc"},"LOADING")}}]),n}(r.Component),b=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function p(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(14);c.a.render(o.a.createElement(g,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-robotfriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/react-robotfriends","/service-worker.js");b?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):p(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):p(t,e)}))}}()},7:function(e,t,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.483fa487.chunk.js.map