(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-selfPage-xiaocong-login-login-login","pages-musicPage-info-index"],{"3b8d":function(t,n,e){"use strict";e.r(n),e.d(n,"default",function(){return a});var r=e("795b"),i=e.n(r);function o(t,n,e,r,o,a,u){try{var c=t[a](u),s=c.value}catch(f){return void e(f)}c.done?n(s):i.a.resolve(s).then(r,o)}function a(t){return function(){var n=this,e=arguments;return new i.a(function(r,i){var a=t.apply(n,e);function u(t){o(a,r,i,u,c,"next",t)}function c(t){o(a,r,i,u,c,"throw",t)}u(void 0)})}}},"469f":function(t,n,e){e("6c1c"),e("1654"),t.exports=e("7d7b")},"5d73":function(t,n,e){t.exports=e("469f")},"729a":function(t,n,e){var r=e("ef97");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=e("4f06").default;i("00c70542",r,!0,{sourceMap:!1,shadowMode:!1})},"768b":function(t,n,e){"use strict";e.r(n);var r=e("a745"),i=e.n(r);function o(t){if(i()(t))return t}var a=e("5d73"),u=e.n(a);function c(t,n){var e=[],r=!0,i=!1,o=void 0;try{for(var a,c=u()(t);!(r=(a=c.next()).done);r=!0)if(e.push(a.value),n&&e.length===n)break}catch(s){i=!0,o=s}finally{try{r||null==c["return"]||c["return"]()}finally{if(i)throw o}}return e}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function f(t,n){return o(t)||c(t,n)||s()}e.d(n,"default",function(){return f})},"7d7b":function(t,n,e){var r=e("e4ae"),i=e("7cd6");t.exports=e("584a").getIterator=function(t){var n=i(t);if("function"!=typeof n)throw TypeError(t+" is not iterable!");return r(n.call(t))}},9238:function(t,n,e){"use strict";var r,i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"login-bg"},[e("v-uni-view",{staticClass:"login-card"},[e("v-uni-view",{staticClass:"login-head"},[t._v("请输入你的账户")]),e("v-uni-view",{staticClass:"login-input login-margin-b"},[e("v-uni-input",{attrs:{type:"number",placeholder:"请输入您的手机号"},on:{input:function(n){arguments[0]=n=t.$handleEvent(n),t.getName.apply(void 0,arguments)}}})],1),e("v-uni-view",{staticClass:"login-input"},[e("v-uni-input",{attrs:{type:"text",placeholder:"请输入密码(8-16位)"},on:{input:function(n){arguments[0]=n=t.$handleEvent(n),t.getPass.apply(void 0,arguments)}}})],1),e("v-uni-view",{staticClass:"login-function"},[e("v-uni-view",{staticClass:"login-forget",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.go_forget.apply(void 0,arguments)}}},[t._v("忘记密码")]),e("v-uni-view",{staticClass:"login-register",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.go_register.apply(void 0,arguments)}}},[t._v("快速注册>")])],1)],1)],1),e("v-uni-view",{staticClass:"login-btn"},[e("v-uni-button",{staticClass:"landing",attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.login.apply(void 0,arguments)}}},[t._v("登陆")])],1)],1)},o=[];e.d(n,"b",function(){return i}),e.d(n,"c",function(){return o}),e.d(n,"a",function(){return r})},"96cf":function(t,n){!function(n){"use strict";var e,r=Object.prototype,i=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag",s="object"===typeof t,f=n.regeneratorRuntime;if(f)s&&(t.exports=f);else{f=n.regeneratorRuntime=s?t.exports:{},f.wrap=b;var l="suspendedStart",h="suspendedYield",d="executing",g="completed",p={},v={};v[a]=function(){return this};var y=Object.getPrototypeOf,w=y&&y(y(I([])));w&&w!==r&&i.call(w,a)&&(v=w);var m=k.prototype=L.prototype=Object.create(v);E.prototype=m.constructor=k,k.constructor=E,k[c]=E.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var n="function"===typeof t&&t.constructor;return!!n&&(n===E||"GeneratorFunction"===(n.displayName||n.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(m),t},f.awrap=function(t){return{__await:t}},_(T.prototype),T.prototype[u]=function(){return this},f.AsyncIterator=T,f.async=function(t,n,e,r){var i=new T(b(t,n,e,r));return f.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},_(m),m[c]="Generator",m[a]=function(){return this},m.toString=function(){return"[object Generator]"},f.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){while(n.length){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},f.values=I,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var n in this)"t"===n.charAt(0)&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],n=t.completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(r,i){return u.type="throw",u.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],u=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=n,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),p},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),C(e),p}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var i=r.arg;C(e)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:I(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),p}}}function b(t,n,e,r){var i=n&&n.prototype instanceof L?n:L,o=Object.create(i.prototype),a=new S(r||[]);return o._invoke=j(t,e,a),o}function x(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(r){return{type:"throw",arg:r}}}function L(){}function E(){}function k(){}function _(t){["next","throw","return"].forEach(function(n){t[n]=function(t){return this._invoke(n,t)}})}function T(t){function n(e,r,o,a){var u=x(t[e],t,r);if("throw"!==u.type){var c=u.arg,s=c.value;return s&&"object"===typeof s&&i.call(s,"__await")?Promise.resolve(s.__await).then(function(t){n("next",t,o,a)},function(t){n("throw",t,o,a)}):Promise.resolve(s).then(function(t){c.value=t,o(c)},function(t){return n("throw",t,o,a)})}a(u.arg)}var e;function r(t,r){function i(){return new Promise(function(e,i){n(t,r,e,i)})}return e=e?e.then(i,i):i()}this._invoke=r}function j(t,n,e){var r=l;return function(i,o){if(r===d)throw new Error("Generator is already running");if(r===g){if("throw"===i)throw o;return N()}e.method=i,e.arg=o;while(1){var a=e.delegate;if(a){var u=O(a,e);if(u){if(u===p)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(r===l)throw r=g,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r=d;var c=x(t,n,e);if("normal"===c.type){if(r=e.done?g:h,c.arg===p)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(r=g,e.method="throw",e.arg=c.arg)}}}function O(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,O(t,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var i=x(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,p;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,p):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function P(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function C(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function I(t){if(t){var n=t[a];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function n(){while(++r<t.length)if(i.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=e,n.done=!0,n};return o.next=o}}return{next:N}}function N(){return{value:e,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},c9b0:function(t,n,e){"use strict";e.r(n);var r=e("ec13"),i=e.n(r);for(var o in r)"default"!==o&&function(t){e.d(n,t,function(){return r[t]})}(o);n["default"]=i.a},da5e:function(t,n,e){"use strict";var r=e("729a"),i=e.n(r);i.a},ebfb:function(t,n,e){"use strict";e.r(n);var r=e("9238"),i=e("c9b0");for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);e("da5e");var a,u=e("f0c5"),c=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,"a1c25d5c",null,!1,r["a"],a);n["default"]=c.exports},ec13:function(t,n,e){"use strict";(function(t){var r=e("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(e("768b"));e("96cf");var o=r(e("3b8d")),a={data:function(){return{userInfo:{name:"",pass:""}}},onLoad:function(){},methods:{go_forget:function(){uni.navigateTo({url:"../forget/forget"})},go_register:function(){uni.navigateTo({url:"../register/register"})},getName:function(t){this.userInfo.name=t.detail.value.trim()},getPass:function(t){this.userInfo.pass=t.detail.value.trim()},login:function(){var n=(0,o.default)(regeneratorRuntime.mark(function n(){var e,r,o,a,u,c,s;return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:if(e=this.userInfo,r=uni.getStorageSync("userinfo")||[],r.length||0==r.length){n.next=5;break}return uni.showToast({title:"无需重复登陆!",duration:2e3}),n.abrupt("return");case 5:if(!(e.name.length<11)){n.next=8;break}return uni.showToast({title:"用户名格式不正确",duration:2e3}),n.abrupt("return");case 8:if(!(e.pass.length<8||e.pass.length>16)){n.next=11;break}return uni.showToast({title:"密码格式不正确",duration:2e3}),n.abrupt("return");case 11:return uni.showLoading({title:"加载中",mask:!0}),n.next=14,uni.request({url:this.$serverUrl+"/login",data:e,method:"POST",header:{"content-type":"application/json"}});case 14:o=n.sent,a=(0,i.default)(o,2),u=a[0],c=a[1],uni.hideLoading(),u?(t.log(u),uni.showToast({title:"登陆错误,请重试",duration:2e3})):(s=c.data,"0"==s.state?(uni.showToast({title:"登陆成功!",duration:2e3}),uni.setStorageSync("userinfo",s.userInfo),setTimeout(function(){uni.navigateBack(),null},2e3)):uni.showToast({title:s.msg,duration:2e3}),t.log(s));case 20:case"end":return n.stop()}},n,this)}));function e(){return n.apply(this,arguments)}return e}()}};n.default=a}).call(this,e("5a52")["default"])},ef97:function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,".landing[data-v-a1c25d5c]{height:%?84?%;line-height:%?84?%;border-radius:%?44?%;font-size:%?32?%;background:-webkit-linear-gradient(right,#ff978d,#ffbb69);background:linear-gradient(270deg,#ff978d,#ffbb69)}.login-btn[data-v-a1c25d5c]{padding:%?10?% %?20?%;margin-top:%?350?%}.login-function[data-v-a1c25d5c]{overflow:auto;padding:%?20?% %?20?% %?30?% %?20?%}.login-forget[data-v-a1c25d5c]{float:left;font-size:%?26?%;color:#999}.login-register[data-v-a1c25d5c]{color:#666;float:right;font-size:%?26?%}.login-input uni-input[data-v-a1c25d5c]{background:#f2f5f6;font-size:%?28?%;padding:%?10?% %?25?%;height:%?62?%;line-height:%?62?%;border-radius:%?8?%}.login-margin-b[data-v-a1c25d5c]{margin-bottom:%?25?%}.login-input[data-v-a1c25d5c]{padding:%?10?% %?20?%}.login-head[data-v-a1c25d5c]{font-size:%?34?%;text-align:center;padding:%?25?% %?10?% %?55?% %?10?%}.login-card[data-v-a1c25d5c]{background:#fff;border-radius:%?12?%;padding:%?10?% %?25?%;box-shadow:0 %?6?% %?18?% rgba(0,0,0,.12);position:relative;margin-top:%?120?%}.login-bg[data-v-a1c25d5c]{height:%?260?%;padding:%?25?%;background:-webkit-linear-gradient(#ff978d,#ffbb69);background:linear-gradient(#ff978d,#ffbb69)}",""])}}]);