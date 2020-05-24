(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/tabBar4"],{"421a":function(t,e,n){"use strict";var a,c=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",function(){return c}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return a})},"5f98":function(t,e,n){"use strict";var a=n("c717"),c=n.n(a);c.a},"60e7":function(t,e,n){"use strict";n.r(e);var a=n("421a"),c=n("eef9");for(var i in c)"default"!==i&&function(t){n.d(e,t,function(){return c[t]})}(i);n("5f98");var u,r=n("f0c5"),o=Object(r["a"])(c["default"],a["b"],a["c"],!1,null,"91b816e4",null,!1,a["a"],u);e["default"]=o.exports},bc2a:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{currentPage:{type:String,default:"videoPage"}},data:function(){return{tabBar:[{url:"videoPage",text:"视频",imgNormal:"/static/video_change.png",imgClick:"/static/video_index.png"},{url:"musicPage",text:"音乐",imgNormal:"/static/music_change.png",imgClick:"/static/music_index.png"},{url:"selfPage",text:"我的",imgNormal:"/static/my_change.png",imgClick:"/static/my_index.png"}]}},created:function(){t.hideTabBar({})},computed:{},methods:{navTo:function(e){if(e.url!==this.currentPage){var n="/pages/".concat(e.url,"/").concat(e.url);t.switchTab({url:n})}}}};e.default=n}).call(this,n("6e42")["default"])},c717:function(t,e,n){},eef9:function(t,e,n){"use strict";n.r(e);var a=n("bc2a"),c=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=c.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/tabBar4-create-component',
    {
        'components/tabBar4-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("60e7"))
        })
    },
    [['components/tabBar4-create-component']]
]);
