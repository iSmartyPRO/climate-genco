(function(t){function e(e){for(var n,o,i=e[0],u=e[1],s=e[2],l=0,d=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);p&&p(e);while(d.length)d.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var t,e=0;e<c.length;e++){for(var r=c[e],n=!0,i=1;i<r.length;i++){var u=r[i];0!==a[u]&&(n=!1)}n&&(c.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},a={app:0},c=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var p=u;c.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),a={id:"nav"};function c(t,e){var r=Object(n["x"])("router-link"),c=Object(n["x"])("router-view");return Object(n["t"])(),Object(n["f"])(n["a"],null,[Object(n["g"])("div",a,[Object(n["h"])(r,{to:"/"})]),Object(n["h"])(c)],64)}r("fc42");var o=r("6b0d"),i=r.n(o);const u={},s=i()(u,[["render",c]]);var p=s,l=r("6c02"),d={class:"container"},h={class:"buttons"},f={class:"page"},b={class:"charts"};function g(t,e,r,a,c,o){var i=Object(n["x"])("Line");return Object(n["t"])(),Object(n["f"])("div",d,[Object(n["g"])("div",h,[Object(n["g"])("a",{class:"button success",onClick:e[0]||(e[0]=function(){return o.prev&&o.prev.apply(o,arguments)})},"Предыдущий"),Object(n["g"])("a",{class:"button info",onClick:e[1]||(e[1]=function(){return o.next&&o.next.apply(o,arguments)})},"Следующий")]),Object(n["g"])("div",f,"Страница: "+Object(n["z"])(this.page)+", Дата: "+Object(n["z"])(this.d),1),Object(n["g"])("div",b,[c.loaded?(Object(n["t"])(),Object(n["d"])(i,{key:0,"chart-data":c.chartPPM,width:c.width,height:c.height},null,8,["chart-data","width","height"])):Object(n["e"])("",!0),c.loaded?(Object(n["t"])(),Object(n["d"])(i,{key:1,"chart-data":c.chartTemperature,width:c.width,height:c.height},null,8,["chart-data","width","height"])):Object(n["e"])("",!0)])])}var v=r("1da1"),O=(r("96cf"),r("99af"),r("ac1f"),r("1276"),r("d81d"),r("bc3a")),j=r.n(O),m=r("368d"),w=r("9b4a");w["e"].register(w["p"],w["q"],w["g"],w["i"],w["b"],w["d"],w["j"],w["l"]);var y={name:"PPM Chart",components:{Line:m["a"]},data:function(){return{loaded:!1,chartPPM:null,chartTemperature:null,width:900,height:200,prevPage:0,page:1,nextPage:2,d:null}},methods:{prev:function(){1==this.page?this.page=1:this.page=this.page-1,this.drawChart()},next:function(){this.page=this.page+1,this.drawChart()},drawChart:function(){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function e(){var r,n,a,c,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("".concat("/api","/").concat(t.page));case 3:r=e.sent.data.docs,t.d="".concat(r[0].date.split("T")[0]),n=r.map((function(t){return t.date.split("T")[1].split(".")[0]})),a=r.map((function(t){return t.ppm})),c=r.map((function(t){return t.temperature})),o={labels:n,datasets:[{label:"Уровень концентрации CO2",borderColor:"#0e286b",pointBackgroundColor:"#ff6f00",pointBorderColor:"#ff6f00",data:a}]},i={labels:n,datasets:[{label:"Температура",borderColor:"#73a24e",pointBackgroundColor:"#a9c25d",pointBorderColor:"#39395f",data:c}]},t.chartPPM=o,t.chartTemperature=i,t.loaded=!0,e.next=18;break;case 15:e.prev=15,e.t0=e["catch"](0),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})))()}},mounted:function(){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.drawChart();case 1:case"end":return e.stop()}}),e)})))()}};const x=i()(y,[["render",g]]);var P=x,C=[{path:"/",name:"Home",component:P},{path:"/:page",name:"History",component:P}],k=Object(l["a"])({history:Object(l["b"])("/"),routes:C}),M=k;Object(n["c"])(p).use(M).mount("#app")},b434:function(t,e,r){},fc42:function(t,e,r){"use strict";r("b434")}});
//# sourceMappingURL=app.27757d79.js.map