(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/videoPage/serch/serch"],{"079a":function(e,t,a){"use strict";a.r(t);var r=a("cf23"),n=a.n(r);for(var s in r)"default"!==s&&function(e){a.d(t,e,function(){return r[e]})}(s);t["default"]=n.a},"30a9":function(e,t,a){"use strict";var r,n=function(){var e=this,t=e.$createElement;e._self._c},s=[];a.d(t,"b",function(){return n}),a.d(t,"c",function(){return s}),a.d(t,"a",function(){return r})},"4b17":function(e,t,a){},"8d13":function(e,t,a){"use strict";var r=a("4b17"),n=a.n(r);n.a},c268:function(e,t,a){"use strict";a.r(t);var r=a("30a9"),n=a("079a");for(var s in n)"default"!==s&&function(e){a.d(t,e,function(){return n[e]})}(s);a("8d13");var i,o=a("f0c5"),c=Object(o["a"])(n["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],i);t["default"]=c.exports},cf23:function(e,t,a){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={data:function(){return{hasMsg:!1,serchPara:"",listItem:[]}},onLoad:function(t){var a=t.msg;console.log(e("输如了"+a," at pages\\videoPage\\serch\\serch.vue:50")),this.serchPara=t.msg,this.serchMethod()},methods:{back:function(){a.navigateBack()},confirm:function(t){console.log(e("输入了"+t.detail.value," at pages\\videoPage\\serch\\serch.vue:62")),this.serchPara=t.detail.value.trim(),plus.key.hideSoftKeybord(),0!=t.detail.value.trim().length&&this.serchMethod()},tabSelect:function(e){a.navigateTo({url:"/pages/videoPage/videoPlayer/videoPlayer?video="+JSON.stringify(e)})},serchMethod:function(){var t=this;a.showLoading({title:"加载中",mask:!0}),a.request({url:this.$serverUrl+"/getSearch",data:this.serchPara,method:"POST",header:{"content-type":"application/json"},success:function(r){if(200!==r.statusCode)console.log(e("请求主题信息失败:",r," at pages\\videoPage\\serch\\serch.vue:98")),t.hasMsg=!0,a.hideLoading();else{a.hideLoading();for(var n=r.data,s=[],i=0;i<n.length;i++){var o=n[i],c=o.showScore;1==c.length?c+=".0":0==c.length?c="0.0":4==c.length&&(c=c.slice(0,2));var u=o.newInfo;0==u.length&&(u="HD高清");var l=o.name;0==l.length&&(l="无");var d={id:o.id,name:l,new_info:u,show_score:c,picture:o.pictureUrl,director:o.director,actors:o.actors,release_time:o.releaseTime,updated_time:o.updatedTime,area:o.area,language:o.language,film_length:o.filmLength,film_synopsis:o.filmSynopsis.trim(),show_url:o.lookUrl,down_url:o.downUrl};s.push(d)}t.listItem=s,s.length>0?t.hasMsg=!1:t.hasMsg=!0,console.log(e(r," at pages\\videoPage\\serch\\serch.vue:159")),t.$forceUpdate()}a.hideLoading()},fail:function(e){a.hideLoading()}})},refreshStart:function(e){this.$refs.refresh.refreshStart(e)},refreshMove:function(e){this.$refs.refresh.refreshMove(e)},refreshEnd:function(e){this.$refs.refresh.refreshEnd(e)}}};t.default=r}).call(this,a("0de9")["default"],a("6e42")["default"])},ddda:function(e,t,a){"use strict";(function(e){a("e36c"),a("921b");r(a("66fd"));var t=r(a("c268"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])}},[["ddda","common/runtime","common/vendor"]]]);