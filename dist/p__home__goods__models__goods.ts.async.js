(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"0lfv":function(e,t,a){"use strict";var n=a("p0pE"),s=a.n(n),r=a("s4NR"),o=a.n(r),c=(e,t)=>{return e=e,new Promise((a,n)=>{if("GET"===t.method){var r="?"+o.a.stringify(t.params);fetch(e+r,{headers:new Headers(s()({"Content-Type":"application/json"},t.headers))}).then(e=>e.json()).then(e=>{a(e)}).catch(e=>{n(e)})}else console.log(JSON.stringify(t.params)),fetch(e,{method:t.method,headers:new Headers(s()({"Content-Type":"application/json"},t.headers)),body:JSON.stringify(t.params)}).then(e=>e.json()).then(e=>{a(e)}).catch(e=>{n(e)})})};t["a"]=c},P668:function(e,t,a){"use strict";a.r(t);var n=a("d6i3"),s=a.n(n),r=a("0lfv"),o=e=>{return Object(r["a"])("/store/goods/goodslist",{method:"GET",params:e})};t["default"]={namespaced:!0,state:[],reducers:{SET_GOODS(e,t){return[...e,...t.payload]}},effects:{GET_GOODS(e,t){return s.a.mark(function a(){var n,r,c;return s.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=t.call,r=t.put,a.next=3,n(o,e.payload);case 3:if(c=a.sent,1!=c.code){a.next=9;break}return a.next=7,r({type:"SET_GOODS",payload:c.data});case 7:a.next=10;break;case 9:console.log(c.msg);case 10:case"end":return a.stop()}},a)})()}}}}}]);