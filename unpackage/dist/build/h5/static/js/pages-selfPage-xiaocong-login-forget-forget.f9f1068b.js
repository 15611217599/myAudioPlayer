(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-selfPage-xiaocong-login-forget-forget","pages-musicPage-info-index"],{"3b8d":function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return o});var r=n("795b"),i=n.n(r);function a(t,e,n,r,a,o,u){try{var s=t[o](u),c=s.value}catch(f){return void n(f)}s.done?e(c):i.a.resolve(c).then(r,a)}function o(t){return function(){var e=this,n=arguments;return new i.a(function(r,i){var o=t.apply(e,n);function u(t){a(o,r,i,u,s,"next",t)}function s(t){a(o,r,i,u,s,"throw",t)}u(void 0)})}}},"469f":function(t,e,n){n("6c1c"),n("1654"),t.exports=n("7d7b")},"5d73":function(t,e,n){t.exports=n("469f")},"6eed":function(t,e,n){var r=n("ef9a");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("4f06").default;i("94be6c7e",r,!0,{sourceMap:!1,shadowMode:!1})},"768b":function(t,e,n){"use strict";n.r(e);var r=n("a745"),i=n.n(r);function a(t){if(i()(t))return t}var o=n("5d73"),u=n.n(o);function s(t,e){var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=u()(t);!(r=(o=s.next()).done);r=!0)if(n.push(o.value),e&&n.length===e)break}catch(c){i=!0,a=c}finally{try{r||null==s["return"]||s["return"]()}finally{if(i)throw a}}return n}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function f(t,e){return a(t)||s(t,e)||c()}n.d(e,"default",function(){return f})},"7d7b":function(t,e,n){var r=n("e4ae"),i=n("7cd6");t.exports=n("584a").getIterator=function(t){var e=i(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return r(e.call(t))}},8950:function(t,e,n){"use strict";(function(t){var r=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("768b"));n("96cf");var a=r(n("3b8d")),o={data:function(){return{placeholder:"",userInfo:{name:"",pass:"",questions:"",answer:"",activeDate:"",isVip:""}}},onShow:function(){},onLoad:function(){},methods:{getName:function(t){this.userInfo.name=t.detail.value.trim()},getPass:function(t){this.userInfo.pass=t.detail.value.trim()},getanswer:function(t){this.userInfo.answer=t.detail.value.trim()},forget:function(){var e=(0,a.default)(regeneratorRuntime.mark(function e(){var n,r,a,o,u,s,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=this.userInfo,r=uni.getStorageSync("userinfo")||[],t.log("length"+r.length),r.length||0==r.length){e.next=6;break}return uni.showToast({title:"已经登陆,无需找回!",duration:2e3}),e.abrupt("return");case 6:if(!(n.name.length<11)){e.next=9;break}return uni.showToast({title:"用户名不正确",duration:2e3}),e.abrupt("return");case 9:if(0!=n.answer.length){e.next=12;break}return uni.showToast({title:"密保答案不正确",duration:2e3}),e.abrupt("return");case 12:if(!(n.pass.length<8||n.pass.length>16)){e.next=15;break}return uni.showToast({title:"密码格式不正确",duration:2e3}),e.abrupt("return");case 15:return uni.showLoading({title:"加载中",mask:!0}),e.next=18,uni.request({url:this.$serverUrl+"/forget",data:n,method:"POST",header:{"content-type":"application/json"}});case 18:a=e.sent,o=(0,i.default)(a,2),u=o[0],s=o[1],uni.hideLoading(),u?(t.log(u),uni.showToast({title:"找回密码错误,请重试",duration:2e3})):(c=s.data,"0"==c.state?(uni.setStorageSync("userinfo",[]),uni.showToast({title:"找回密码成功!",duration:2e3}),setTimeout(function(){uni.navigateBack(),null},2e3)):uni.showToast({title:c.msg,duration:2e3}),t.log(c));case 24:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),getQuestion:function(){var t=(0,a.default)(regeneratorRuntime.mark(function t(){var e,n,r,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!(this.userInfo.name.length<11)){t.next=3;break}return uni.showToast({title:"用户名不正确",duration:2e3}),t.abrupt("return");case 3:return t.next=5,uni.request({url:this.$serverUrl+"/getQuestionforget",data:this.userInfo.name,method:"POST",header:{"content-type":"application/json"}});case 5:e=t.sent,n=(0,i.default)(e,2),r=n[0],a=n[1],r?uni.showToast({title:"获取密保问题失败!",duration:2e3}):"0"==a.data.state?this.placeholder=a.data.userInfo.questions:uni.showToast({title:a.data.msg,duration:2e3});case 10:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}};e.default=o}).call(this,n("5a52")["default"])},"8e53":function(t,e,n){"use strict";n.r(e);var r=n("b76e"),i=n("c4bd");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n("a192");var o,u=n("f0c5"),s=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,"6694a91a",null,!1,r["a"],o);e["default"]=s.exports},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag",c="object"===typeof t,f=e.regeneratorRuntime;if(f)c&&(t.exports=f);else{f=e.regeneratorRuntime=c?t.exports:{},f.wrap=m;var l="suspendedStart",h="suspendedYield",d="executing",p="completed",v={},g={};g[o]=function(){return this};var y=Object.getPrototypeOf,w=y&&y(y(C([])));w&&w!==r&&i.call(w,o)&&(g=w);var b=E.prototype=k.prototype=Object.create(g);L.prototype=b.constructor=E,E.constructor=L,E[s]=L.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(b),t},f.awrap=function(t){return{__await:t}},_(T.prototype),T.prototype[u]=function(){return this},f.AsyncIterator=T,f.async=function(t,e,n,r){var i=new T(m(t,e,n,r));return f.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},_(b),b[s]="Generator",b[o]=function(){return this},b.toString=function(){return"[object Generator]"},f.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},f.values=C,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(I),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,i){return u.type="throw",u.arg=t,e.next=r,i&&(e.method="next",e.arg=n),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],u=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=i.call(o,"catchLoc"),c=i.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),I(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;I(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:C(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function m(t,e,n,r){var i=e&&e.prototype instanceof k?e:k,a=Object.create(i.prototype),o=new S(r||[]);return a._invoke=j(t,n,o),a}function x(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function k(){}function L(){}function E(){}function _(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function T(t){function e(n,r,a,o){var u=x(t[n],t,r);if("throw"!==u.type){var s=u.arg,c=s.value;return c&&"object"===typeof c&&i.call(c,"__await")?Promise.resolve(c.__await).then(function(t){e("next",t,a,o)},function(t){e("throw",t,a,o)}):Promise.resolve(c).then(function(t){s.value=t,a(s)},function(t){return e("throw",t,a,o)})}o(u.arg)}var n;function r(t,r){function i(){return new Promise(function(n,i){e(t,r,n,i)})}return n=n?n.then(i,i):i()}this._invoke=r}function j(t,e,n){var r=l;return function(i,a){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw a;return N()}n.method=i,n.arg=a;while(1){var o=n.delegate;if(o){var u=O(o,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var s=x(t,e,n);if("normal"===s.type){if(r=n.done?p:h,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=p,n.method="throw",n.arg=s.arg)}}}function O(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,O(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=x(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,v;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function C(t){if(t){var e=t[o];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){while(++r<t.length)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}return{next:N}}function N(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},a192:function(t,e,n){"use strict";var r=n("6eed"),i=n.n(r);i.a},b76e:function(t,e,n){"use strict";var r,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"forget-bg"},[n("v-uni-view",{staticClass:"forget-card"},[n("v-uni-view",{staticClass:"forget-input forget-margin-b"},[n("v-uni-input",{attrs:{type:"number",placeholder:"请输入您的手机号"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.getName.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"forget-input forget-margin-b"},[n("v-uni-view",{staticClass:"verify-left"},[n("v-uni-input",{attrs:{placeholder:t.placeholder},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.getanswer.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"verify-right"},[n("v-uni-button",{staticClass:"verify-btn",attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getQuestion()}}},[t._v("点击获取密保问题")])],1)],1),n("v-uni-view",{staticClass:"forget-input"},[n("v-uni-input",{attrs:{type:"text",placeholder:"请输入新密码(8-16位)"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.getPass.apply(void 0,arguments)}}})],1)],1)],1),n("v-uni-view",{staticClass:"forget-btn"},[n("v-uni-button",{staticClass:"landing",attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.forget.apply(void 0,arguments)}}},[t._v("提交")])],1)],1)},a=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return a}),n.d(e,"a",function(){return r})},c4bd:function(t,e,n){"use strict";n.r(e);var r=n("8950"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);e["default"]=i.a},ef9a:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".verify-left[data-v-6694a91a]{width:calc(100% - %?260?%)}.verify-right[data-v-6694a91a]{padding-left:%?20?%}.verify-btn[data-v-6694a91a]{height:%?80?%;line-height:%?80?%;font-size:%?28?%;width:%?240?%;border-radius:%?8?%;background:-webkit-linear-gradient(right,#ff978d,#ffbb69);background:linear-gradient(270deg,#ff978d,#ffbb69)}.verify-left[data-v-6694a91a],.verify-right[data-v-6694a91a]{float:left}.landing[data-v-6694a91a]{height:%?84?%;line-height:%?84?%;border-radius:%?44?%;font-size:%?32?%;background:-webkit-linear-gradient(right,#ff978d,#ffbb69);background:linear-gradient(270deg,#ff978d,#ffbb69)}.forget-btn[data-v-6694a91a]{padding:%?10?% %?20?%;margin-top:%?380?%}.forget-input uni-input[data-v-6694a91a]{background:#f2f5f6;font-size:%?28?%;padding:%?10?% %?25?%;height:%?62?%;line-height:%?62?%;border-radius:%?8?%}.forget-margin-b[data-v-6694a91a]{margin-bottom:%?25?%}.forget-input[data-v-6694a91a]{padding:%?10?% %?20?%;overflow:auto}.forget-card[data-v-6694a91a]{background:#fff;border-radius:%?12?%;padding:%?60?% %?25?%;box-shadow:0 %?6?% %?18?% rgba(0,0,0,.12);position:relative;margin-top:%?120?%}.forget-bg[data-v-6694a91a]{height:%?260?%;padding:%?25?%;background:-webkit-linear-gradient(#ff978d,#ffbb69);background:linear-gradient(#ff978d,#ffbb69)}",""])}}]);