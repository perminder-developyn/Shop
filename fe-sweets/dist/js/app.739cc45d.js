(function(){"use strict";var t={2125:function(t,n,e){var o=e(9242),r=e(3396),i=e(7139);const u=["onClick"],c=["onClick"],a={key:1};function s(t,n,e,o,s,p){return(0,r.wg)(),(0,r.iD)(r.HY,null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.shop,((t,n)=>((0,r.wg)(),(0,r.iD)("div",{class:"item",key:n},[(0,r.Uk)((0,i.zw)(t.name)+" ",1),(0,r._)("button",{onClick:n=>p.order(t)}," Order Case : "+(0,i.zw)(t.casesize),9,u),(0,r.Uk)(" "+(0,i.zw)(t.currency)+" € "+(0,i.zw)(t.price)+" ",1),(0,r._)("button",{onClick:n=>p.sell(t)}," Sell ",8,c),(0,r.Uk)(" Stock quantity: "+(0,i.zw)(t.quantity),1)])))),128)),s.count<1?((0,r.wg)(),(0,r.iD)("button",{key:0,onClick:n[0]||(n[0]=t=>p.updateShop())}," Open Shop ")):(0,r.kq)("",!0),s.shop.length>1?((0,r.wg)(),(0,r.iD)("div",a," Stock Total Value : € "+(0,i.zw)(s.total),1)):(0,r.kq)("",!0)],64)}var p=e(6265),l=e.n(p),f={name:"App",methods:{updateShop(){this.shop=[],this.count=0,this.count++,this.subTotal(),l().get("https://perminder.developyn.com/api").then((t=>{console.log(t),t.data.forEach((t=>{this.shop.push(t)}))}))},sell(t){l()["delete"](`https://perminder.developyn.com/api/${t.id}`).then(this.updateShop())},order(t){l().post(`https://perminder.developyn.com/api/${t.id}/restock`).then(this.updateShop())},subTotal(){l().get("https://perminder.developyn.com/api/value").then((t=>{this.total=t.data}))}},data(){return{count:0,shop:[],total:""}}},h=e(89);const d=(0,h.Z)(f,[["render",s]]);var v=d;(0,o.ri)(v).mount("#app")}},n={};function e(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return t[o](i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(n,o,r,i){if(!o){var u=1/0;for(p=0;p<t.length;p++){o=t[p][0],r=t[p][1],i=t[p][2];for(var c=!0,a=0;a<o.length;a++)(!1&i||u>=i)&&Object.keys(e.O).every((function(t){return e.O[t](o[a])}))?o.splice(a--,1):(c=!1,i<u&&(u=i));if(c){t.splice(p--,1);var s=r();void 0!==s&&(n=s)}}return n}i=i||0;for(var p=t.length;p>0&&t[p-1][2]>i;p--)t[p]=t[p-1];t[p]=[o,r,i]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,o){var r,i,u=o[0],c=o[1],a=o[2],s=0;if(u.some((function(n){return 0!==t[n]}))){for(r in c)e.o(c,r)&&(e.m[r]=c[r]);if(a)var p=a(e)}for(n&&n(o);s<u.length;s++)i=u[s],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(p)},o=self["webpackChunkfe_sweets"]=self["webpackChunkfe_sweets"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(2125)}));o=e.O(o)})();
//# sourceMappingURL=app.739cc45d.js.map