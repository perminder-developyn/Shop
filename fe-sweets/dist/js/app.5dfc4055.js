(function(){"use strict";var t={3181:function(t,n,e){var o=e(9242),r=e(3396),i=e(7139);const u=["onClick"],c=["onClick"],s={key:1};function a(t,n,e,o,a,l){return(0,r.wg)(),(0,r.iD)(r.HY,null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.shop,((t,n)=>((0,r.wg)(),(0,r.iD)("div",{class:"item",key:n},[(0,r.Uk)((0,i.zw)(t.name)+" ",1),(0,r._)("button",{onClick:n=>l.order(t)}," Order Case : "+(0,i.zw)(t.casesize),9,u),(0,r.Uk)(" "+(0,i.zw)(t.currency)+" € "+(0,i.zw)(t.price)+" ",1),(0,r._)("button",{onClick:n=>l.sell(t)}," Sell ",8,c),(0,r.Uk)(" Stock quantity: "+(0,i.zw)(t.quantity),1)])))),128)),a.count<1?((0,r.wg)(),(0,r.iD)("button",{key:0,onClick:n[0]||(n[0]=t=>l.updateShop())}," Open Shop ")):(0,r.kq)("",!0),a.shop.length>1?((0,r.wg)(),(0,r.iD)("div",s," Stock Total Value : € "+(0,i.zw)(a.total),1)):(0,r.kq)("",!0)],64)}var l=e(6265),p=e.n(l),f={name:"App",methods:{updateShop(){this.shop=[],this.count=0,this.count++,this.subTotal(),p().get("https://perminder.developyn.com/stock").then((t=>{console.log(t),t.data.forEach((t=>{this.shop.push(t)}))}))},sell(t){p()["delete"](`https://perminder.developyn.com/${t.id}`).then(this.updateShop())},order(t){p().post(`https://perminder.developyn.com/${t.id}/restock`).then(this.updateShop())},subTotal(){p().get("https://perminder.developyn.com/value").then((t=>{this.total=t.data}))}},data(){return{count:0,shop:[],total:""}}},h=e(89);const d=(0,h.Z)(f,[["render",a]]);var v=d;(0,o.ri)(v).mount("#app")}},n={};function e(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return t[o](i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(n,o,r,i){if(!o){var u=1/0;for(l=0;l<t.length;l++){o=t[l][0],r=t[l][1],i=t[l][2];for(var c=!0,s=0;s<o.length;s++)(!1&i||u>=i)&&Object.keys(e.O).every((function(t){return e.O[t](o[s])}))?o.splice(s--,1):(c=!1,i<u&&(u=i));if(c){t.splice(l--,1);var a=r();void 0!==a&&(n=a)}}return n}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[o,r,i]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,o){var r,i,u=o[0],c=o[1],s=o[2],a=0;if(u.some((function(n){return 0!==t[n]}))){for(r in c)e.o(c,r)&&(e.m[r]=c[r]);if(s)var l=s(e)}for(n&&n(o);a<u.length;a++)i=u[a],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(l)},o=self["webpackChunkfe_sweets"]=self["webpackChunkfe_sweets"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(3181)}));o=e.O(o)})();
//# sourceMappingURL=app.5dfc4055.js.map