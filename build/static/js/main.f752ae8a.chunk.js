(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,function(e,a,t){},,,function(e,a,t){e.exports=t(16)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(8),r=t.n(l),s=(t(14),t(1)),m=(t(6),function(e,a){var t=Object(n.useState)(a),c=Object(s.a)(t,2),l=c[0],r=c[1];return Object(n.useEffect)((function(){var a=function(a){null===e.current||e.current.contains(a.target)||r(!l)};return l&&window.addEventListener("click",a),function(){window.removeEventListener("click",a)}}),[l,e]),[l,r]});function i(){var e=Object(n.useRef)(null),a=m(e,!1),t=Object(s.a)(a,2),l=t[0],r=t[1],i=function(){return r(!l)};return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"menu-container"},c.a.createElement("div",{onClick:i,className:"menu-trigger ".concat(l?"outline":"")},c.a.createElement("span",null,"\u0633\u0645\u062a/\u0639\u0646\u0648\u0627\u0646")),c.a.createElement("nav",{ref:e,className:"menu ".concat(l?"active":"inactive")},c.a.createElement("ul",null,c.a.createElement("li",{onClick:i,className:" ".concat(l?"active":"inactive")},"\u062a\u0633\u062a 1"),c.a.createElement("li",{className:" ".concat(l?"active":"inactive")},"\u062a\u0633\u062a 2"),c.a.createElement("li",{className:" ".concat(l?"active":"inactive")},"\u062a\u0633\u062a3")))))}function o(){var e=Object(n.useRef)(null),a=m(e,!1),t=Object(s.a)(a,2),l=t[0],r=t[1],i=function(){return r(!l)};return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"menu-container"},c.a.createElement("div",{onClick:i,className:"menu-trigger ".concat(l?"outline":"")},c.a.createElement("span",null,"\u0633\u0645\u062a/\u0639\u0646\u0648\u0627\u0646")),c.a.createElement("nav",{ref:e,className:"menu ".concat(l?"active":"inactive")},c.a.createElement("ul",null,c.a.createElement("li",{onClick:i,className:" ".concat(l?"active":"inactive")},"\u062a\u0633\u062a 1"),c.a.createElement("li",{className:" ".concat(l?"active":"inactive")},"\u062a\u0633\u062a 2"),c.a.createElement("li",{className:" ".concat(l?"active":"inactive")},"\u062a\u0633\u062a3")))))}function u(){var e=Object(n.useRef)(null),a=m(e,!1),t=Object(s.a)(a,2),l=t[0],r=t[1],i=function(){return r(!l)};return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"menu-container"},c.a.createElement("div",{onClick:i,className:"menu-trigger ".concat(l?"outline":"")},c.a.createElement("span",null,"\u0633\u0645\u062a/\u0639\u0646\u0648\u0627\u0646")),c.a.createElement("nav",{ref:e,className:"menu ".concat(l?"active":"inactive")},c.a.createElement("ul",null,c.a.createElement("li",{onClick:i,className:" ".concat(l?"active":"inactive")},"\u062a\u0633\u062a 1"),c.a.createElement("li",{className:" ".concat(l?"active":"inactive")},"\u062a\u0633\u062a 2"),c.a.createElement("li",{className:" ".concat(l?"active":"inactive")},"\u062a\u0633\u062a3")))))}var E=t(2),v=t(3),d=t(4),p=t(5),h=function(e){Object(p.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(E.a)(this,t),(n=a.call(this,e)).handleChangeCorrect=function(e){e.target.value.length>=0&&n.setState({message:!0}),0===e.target.value.length&&n.setState({message:!1})},n.handleChangeInCoorect=function(e){e.target.value.length>=0&&n.setState({message1:!0}),0===e.target.value.length&&n.setState({message1:!1}),console.log("warning",e.target.value)},n.state={message1:!1,message:!1},n}return Object(v.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"allGroup"},c.a.createElement("div",{className:""},c.a.createElement("input",{type:"text",name:"name",className:"disable ",disabled:!0,placeholder:"\u0645\u062a\u0646 \u062e\u0648\u0627\u0633\u062a\u0647 \u0634\u062f\u0647"})),c.a.createElement("div",{className:""},c.a.createElement("input",{type:"text",name:"name",className:"InState ",placeholder:"\u0645\u062a\u0646 \u062e\u0648\u0627\u0633\u062a\u0647 \u0634\u062f\u0647"})),c.a.createElement("div",{className:" message"},c.a.createElement("input",{type:"text",onChange:this.handleChangeCorrect,name:"name",className:"Correct2 ".concat(this.state.message?"Correuct":""),placeholder:"\u0645\u062a\u0646 \u062e\u0648\u0627\u0633\u062a\u0647 \u0634\u062f\u0647"}),c.a.createElement("p",{className:" ".concat(this.state.message?"Correuct":"")},this.state.message?"\u067e\u06cc\u063a\u0627\u0645":"")),c.a.createElement("div",{className:" message"},c.a.createElement("input",{type:"text",onChange:this.handleChangeInCoorect,name:"name",className:"InCorrect3 ".concat(this.state.message1?"inCorreuct":""),placeholder:"\u0645\u062a\u0646 \u062e\u0648\u0627\u0633\u062a\u0647 \u0634\u062f\u0647"}),c.a.createElement("p",{className:" ".concat(this.state.message1?"inCorreuct":"")},this.state.message1?"\u067e\u06cc\u063a\u0627\u0645":""))),c.a.createElement("textarea",{className:"TextArea",placeholder:"\u0645\u062a\u0646 \u062e\u0648\u0627\u0633\u062a\u0647 \u0634\u062f\u0647"}))}}]),t}(n.Component),N=function(e){Object(p.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(E.a)(this,t),(n=a.call(this,e)).state={},n}return Object(v.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"btnFeilds"},c.a.createElement("p",null,"primary"),c.a.createElement("button",{className:"purple"},"hover"),c.a.createElement("button",{className:"black"},"hover"),c.a.createElement("button",{className:"red"},"hover"),c.a.createElement("button",{className:"green"},"hover"),c.a.createElement("button",{className:"orange"},"hover"),c.a.createElement("button",{disabled:!0,className:"disable"})),c.a.createElement("div",{className:"btnFeilds"},c.a.createElement("p",null,"Secondary"),c.a.createElement("button",{className:"SEpurple"},"hover"),c.a.createElement("button",{className:"SEgreen"},"hover"),c.a.createElement("button",{className:"SEorange"},"hover"),c.a.createElement("p",null,"Tertiary"),c.a.createElement("button",{className:"TERpurple"},"hover"),c.a.createElement("button",{className:"TERgreen"},"hover"),c.a.createElement("button",{className:"TERorange"},"hover")),c.a.createElement("div",{className:"widthBtn"},c.a.createElement("button",{className:"one"}),c.a.createElement("button",{className:"two"}),c.a.createElement("button",{className:"three"}),c.a.createElement("button",{className:"four"}),c.a.createElement("button",{className:"five"})),c.a.createElement("div",{className:"sendGroup"},c.a.createElement("button",{className:"send"},"\u0627\u0631\u0633\u0627\u0644"),c.a.createElement("button",{className:"sendOne"},"\u0627\u0631\u0633\u0627\u0644"),c.a.createElement("button",{className:"sendTwo"},"\u0627\u0631\u0633\u0627\u0644")))}}]),t}(n.Component),b=function(e){Object(p.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(E.a)(this,t),(n=a.call(this,e)).state={},n}return Object(v.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"column"},c.a.createElement("p",null,"Checkboxes"),c.a.createElement("label",{class:"containerss"},"One",c.a.createElement("input",{type:"checkbox"}),c.a.createElement("span",{class:"checkmark"})),c.a.createElement("label",{class:"containerss"},"Two",c.a.createElement("input",{type:"checkbox"}),c.a.createElement("span",{class:"checkmark"})),c.a.createElement("label",{class:"containerss"},"Three",c.a.createElement("input",{type:"checkbox",disabled:!0}),c.a.createElement("span",{class:"checkmark disabled"}))),c.a.createElement("div",{className:"column"},c.a.createElement("p",null,"Radio button "),c.a.createElement("input",{type:"radio",value:"male",name:"gender"})," Male",c.a.createElement("input",{type:"radio",value:"female",name:"gender"})," Female"),c.a.createElement("div",{className:"column"},c.a.createElement("p",null,"Switch"),c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null))))}}]),t}(n.Component);t(15);var g=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(i,null),c.a.createElement(o,null),c.a.createElement(u,null),c.a.createElement(h,null),c.a.createElement(N,null),c.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.f752ae8a.chunk.js.map