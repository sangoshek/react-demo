(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),i=n(2),c=n.n(i),r=(n(14),n(3)),s=n(4),o=n(6),u=n(5),m=n(7);n(15);function p(e){return l.a.createElement("li",null,l.a.createElement("a",{href:e.link},e.name))}function d(e){return l.a.createElement("div",{className:"content"},l.a.createElement("h1",null,e.headline),l.a.createElement("p",null,e.content))}var h=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={menu:[],content:[],content2:[],facilities:[],keyword:""},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this;fetch("./assets/data/menu.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(function(e){return e.json()}).then(function(t){e.setState({menu:t})}),fetch("./assets/data/content.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(function(e){return e.json()}).then(function(t){e.setState({content:t})}),fetch("./assets/data/content.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(function(e){return e.json()}).then(function(t){e.setState({content2:t})}),fetch("./assets/data/facility.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(function(e){return e.json()}).then(function(t){e.setState({facilities:t})})}},{key:"render",value:function(){var e=this.state.menu,t=this.state.content;return l.a.createElement("div",{className:"App"},l.a.createElement("nav",{id:"menu"},l.a.createElement("ul",{className:"links"},e.map(function(e,t){return l.a.createElement(p,{key:t,link:e.Link,name:e.name})}))),l.a.createElement("section",{id:"banner",className:"wrapper"},t.map(function(e,t){return l.a.createElement(d,{key:t,headline:e.headline,content:e.content})})),l.a.createElement("section",{id:"searching",className:"wrapper bg-grey"},l.a.createElement("h2",null,"Search the Facilities you want:"),l.a.createElement("input",{className:"form-control",type:"text"}),l.a.createElement("button",null,"search"),l.a.createElement("ul",{className:"list-group"})),l.a.createElement("section",{id:"one",className:"wrapper bg-white"},l.a.createElement("div",{className:"inner flex flex-3"},l.a.createElement("div",{className:"flex-item left"},l.a.createElement("div",null,l.a.createElement("h3",null,"Efficient Work"),l.a.createElement("p",null,"Morbi in sem quis dui plalorem ipsum",l.a.createElement("br",null)," euismod in, pharetra sed ultricies.")),l.a.createElement("div",null,l.a.createElement("h3",null,"Cutting-edge tech"),l.a.createElement("p",null,"Tristique yonve cursus jam nulla quam",l.a.createElement("br",null)," loreipsu gravida adipiscing lorem"))),l.a.createElement("div",{className:"flex-item image fit round"},l.a.createElement("img",{src:"images/pic01.jpg",alt:""})),l.a.createElement("div",{className:"flex-item right"},l.a.createElement("div",null,l.a.createElement("h3",null,"Mobile First"),l.a.createElement("p",null,"Sed adipiscing ornare risus. Morbi estes",l.a.createElement("br",null)," blandit sit et amet, sagittis magna.")),l.a.createElement("div",null,l.a.createElement("h3",null,"Viral spread"),l.a.createElement("p",null,"Pellentesque egestas sem. Suspendisse",l.a.createElement("br",null)," modo ullamcorper feugiat lorem."))))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(h,null),document.getElementById("body")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.146f7b49.chunk.js.map