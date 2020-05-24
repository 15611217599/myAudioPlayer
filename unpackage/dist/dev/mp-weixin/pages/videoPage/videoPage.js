(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/videoPage/videoPage"],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/*!**************************************************************************************************!*\
  !*** D:/hbuilder/hbuilderProject/myAudioPlayer/main.js?{"page":"pages%2FvideoPage%2FvideoPage"} ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _videoPage = _interopRequireDefault(__webpack_require__(/*! ./pages/videoPage/videoPage.vue */ 17));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_videoPage.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),
/* 17 */
/*!*******************************************************************************!*\
  !*** D:/hbuilder/hbuilderProject/myAudioPlayer/pages/videoPage/videoPage.vue ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _videoPage_vue_vue_type_template_id_30f54b6f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./videoPage.vue?vue&type=template&id=30f54b6f& */ 18);
/* harmony import */ var _videoPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./videoPage.vue?vue&type=script&lang=js& */ 20);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _videoPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _videoPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _videoPage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./videoPage.vue?vue&type=style&index=0&lang=scss& */ 26);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _videoPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _videoPage_vue_vue_type_template_id_30f54b6f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _videoPage_vue_vue_type_template_id_30f54b6f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _videoPage_vue_vue_type_template_id_30f54b6f___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

/* hot reload */
if (false) { var api; }
component.options.__file = "hbuilderProject/myAudioPlayer/pages/videoPage/videoPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 18 */
/*!**************************************************************************************************************!*\
  !*** D:/hbuilder/hbuilderProject/myAudioPlayer/pages/videoPage/videoPage.vue?vue&type=template&id=30f54b6f& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videoPage_vue_vue_type_template_id_30f54b6f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./videoPage.vue?vue&type=template&id=30f54b6f& */ 19);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videoPage_vue_vue_type_template_id_30f54b6f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videoPage_vue_vue_type_template_id_30f54b6f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videoPage_vue_vue_type_template_id_30f54b6f___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videoPage_vue_vue_type_template_id_30f54b6f___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 19 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/hbuilder/hbuilderProject/myAudioPlayer/pages/videoPage/videoPage.vue?vue&type=template&id=30f54b6f& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 20 */
/*!********************************************************************************************************!*\
  !*** D:/hbuilder/hbuilderProject/myAudioPlayer/pages/videoPage/videoPage.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videoPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./videoPage.vue?vue&type=script&lang=js& */ 21);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videoPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videoPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videoPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videoPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videoPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 21 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/hbuilder/hbuilderProject/myAudioPlayer/pages/videoPage/videoPage.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 22));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArrayLimit(arr, i) {var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var util = __webpack_require__(/*! ../../util/util.js */ 25);var refresh = function refresh() {return __webpack_require__.e(/*! import() | components/refresh */ "components/refresh").then(__webpack_require__.bind(null, /*! ../../components/refresh.vue */ 68));};var navTab = function navTab() {return __webpack_require__.e(/*! import() | components/navTab */ "components/navTab").then(__webpack_require__.bind(null, /*! ../../components/navTab.vue */ 75));};var tabBar4 = function tabBar4() {return __webpack_require__.e(/*! import() | components/tabBar4 */ "components/tabBar4").then(__webpack_require__.bind(null, /*! ../../components/tabBar4.vue */ 82));};var uniIcon = function uniIcon() {return Promise.all(/*! import() | components/uni-icons/uni-icons */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/uni-icons/uni-icons")]).then(__webpack_require__.bind(null, /*! ../../components/uni-icons/uni-icons.vue */ 89));};var _default =





{
  components: { refresh: refresh, navTab: navTab, tabBar4: tabBar4, uniIcon: uniIcon },
  data: function data() {
    return {
      //控制筛选显示还是隐藏
      showOrHide: 'hide',
      xuanzhuan: 'down',
      currentPage: 'videoPage',
      toView: '', //回到顶部id
      tabTitle: ['电影', '', '', '', ''], //导航栏格式 --导航栏组件
      currentTab: 0, //sweiper所在页
      pages: [1, 1, 1, 1, 1, 1], //第几个swiper的第几页

      //点击的按钮位置
      clickButtonIds: [
      //第一页
      {
        cid: [0, 0, 0, 0] },

      //第2页
      {
        cid: [0, 0, 0, 0] },

      //第3页
      {
        cid: [0, 0, 0, 0] }],


      //每个页面的参数,手机端控制,用来展示筛选条件的
      paramsForEachPageShow: [
      // 这里对应第一页
      [
      {
        name: '年代 :',
        link_name: 'years',
        item: ['', '2020', '2019', '2018', '2017', '2016', '2015'],
        itemName: ['全部', '2020', '2019', '2018', '2017', '2016', '2015'] },

      {
        name: '分类 :',
        link_name: 'pids',
        item: ['', '11', '12', '13'],
        itemName: ['全部', '武打', '动作', '科幻'] },

      {
        name: '排序 :',
        link_name: 'sortWay',
        item: ['', '0', '1', '2'],
        itemName: ['全部', '上映时间', '更新时间', '评分'] },

      {
        name: '区域 :',
        link_name: 'area',
        item: ['', '美国', '中国', '日本'],
        itemName: ['全部', '美国', '中国', '日本'] }]],




      //每个页面的参数,手机端控制,请求后台的时候使用
      paramsForEachPage: [
      {
        ppid: '',
        pids: '',
        years: '',
        sortWay: '1',
        area: '',
        currentPageNum: 0,
        pageSize: 16 },

      {
        ppid: '',
        pids: '',
        years: [],
        sortWay: '1',
        currentPageNum: 0,
        pageSize: 16 }],



      //如果有值请求慢会显示出来
      list: [], //数据格式

      listHot: [
      [
      {
        picture: 'https://tu.tianzuida.com/pic/upload/vod/2019-12-31/201912311577754419.jpg' },

      {
        picture: 'https://tu.tianzuida.com/pic/upload/vod/2019-12-31/201912311577754419.jpg' }]] };




  },
  onLoad: function onLoad(e) {
    //初始化页面加载主题数据
    this.getCatogory();
  },
  onShow: function onShow() {},
  onHide: function onHide() {},
  methods: {
    toTop: function toTop() {var _this = this;
      this.toView = '';
      setTimeout(function () {
        _this.toView = 'top' + _this.currentTab;
      }, 10);
    },
    changeTab: function changeTab(index) {
      this.currentTab = index;
      console.log('当前滑动到分类 ' + index);
    },

    // swiper 滑动
    swiperTab: function swiperTab(e) {
      var index = e.detail.current; //获取索引
      this.$refs.navTab.longClick(index);
      console.log('当前滑动窗体到分类 ' + index);
    },
    // 加载更多 util.throttle为防抖函数
    lower1: util.throttle(function (e) {
      if (this.currentTab == 0) {
        return;
      }
      console.log("\u52A0\u8F7D".concat(this.currentTab)); //currentTab表示当前所在页数 根据当前所在页数发起请求并带上page页数
      uni.showLoading({
        title: '加载中',
        mask: true });


      //当前页的第几页要更新
      this.pages[this.currentTab]++;

      //这里是刷新回调方法,调用我们自己的
      this.getVideoList('1');
    }, 300),
    // 刷新touch监听
    refreshStart: function refreshStart(e) {
      this.$refs.refresh.refreshStart(e);
    },
    refreshMove: function refreshMove(e) {
      this.$refs.refresh.refreshMove(e);
    },
    refreshEnd: function refreshEnd(e) {
      this.$refs.refresh.refreshEnd(e);
    },
    isRefresh: function isRefresh() {
      //刷新页面
      this.getVideoList(0);
    },
    tabSelect: function tabSelect(e) {
      uni.navigateTo({
        url: '/pages/videoPage/videoPlayer/videoPlayer?video=' + JSON.stringify(e) });

    },
    //currentTab 当前标题数组标 ,type刷新还是下拉更多   0 刷新 1 更多 2初始化
    getVideoList: function getVideoList(type) {
      var times = 1;
      this.currentTab1 = this.currentTab;
      //如果初始化,所有的标题都要请求,否则执行一次
      if (type == '3') {
        times = this.paramsForEachPage.length;
      }
      this.urlRequest(0, type, times);
    },
    //因为ajax是异步并且无法修改,导致回调成功后i都变为了7,所以把方法抽取出来
    urlRequest: function () {var _urlRequest = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(i, type, times) {var datas, _ref, _ref2, err, ret, videos, thisPageVideos, j, video, videoTrans;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                //如果初始化,当前标签肯定是第一个,加i后面的也都是用
                datas = this.paramsForEachPage[this.currentTab + i];

                datas.currentPageNum = this.pages[this.currentTab + i];
                console.log('getVideoList请求' + '当前标题数组' + (this.currentTab + i) + '当前所在的页数 ' + this.pages[this.currentTab + i] + '获取的条件是' + datas);

                //如果是刷新,则要从第一页开始
                if (type == '0' || type == '4') {
                  datas.currentPageNum = 0;
                }_context.next = 6;return (

                  uni.request({
                    url: this.$serverUrl + '/getVideoList',
                    data: datas,
                    method: 'POST',
                    header: {
                      'content-type': 'application/json' },

                    timeout: '100000' }));case 6:_ref = _context.sent;_ref2 = _slicedToArray(_ref, 2);err = _ref2[0];ret = _ref2[1];


                if (err) {
                  uni.showToast({
                    icon: 'fail',
                    title: '网络错误' });


                  if (type == '1') {
                    //没有刷新要捡回去
                    this.pages[this.currentTab]--;
                    //隐藏加载loading
                    uni.hideLoading();
                  } else if (type == '0') {
                    this.$refs.refresh.endAfter(); //刷新结束调用
                  }
                } else {
                  if (ret.statusCode !== 200) {
                    console.log('请求主题信息失败:', ret);
                  } else {
                    console.log(ret.data);
                    videos = ret.data.content;

                    thisPageVideos = [];
                    for (j = 0; j < videos.length; j++) {
                      video = videos[j];
                      //解决显示必须一致的问题

                      videoTrans = this.getVideoFromJavaToPage(video);

                      //当页的视频集合
                      thisPageVideos.push(videoTrans);
                    }
                    //3代表初始化,要把原来数组清空重新赋值
                    if (type == '3') {
                      //替换以前的集合
                      this.list[this.currentTab + i] = thisPageVideos;
                      //1表示加载更多
                    } else if (type == '1') {
                      console.log('下拉更新 ' + thisPageVideos);
                      if (thisPageVideos.length == 0) {
                        uni.showToast({
                          icon: 'success',
                          title: '没有更多了' });

                        this.pages[this.currentTab] = this.pages[this.currentTab] - 1;
                      }

                      this.list[this.currentTab + i] = this.list[this.currentTab + i].concat(thisPageVideos);
                      //隐藏加载loading
                      uni.hideLoading();
                      //0代表刷新页面
                    } else if (type == '0') {
                      console.log('刷新获取的数据是 ' + thisPageVideos);
                      if (thisPageVideos.length > 0 && thisPageVideos[0].id == this.list[this.currentTab + i][0].id) {
                        uni.showToast({
                          icon: 'success',
                          title: '已是最新' });

                      } else {
                        this.list[this.currentTab + i] = thisPageVideos;
                        this.pages[this.currentTab] = 0;
                        uni.showToast({
                          icon: 'success',
                          title: '刷新成功' });

                      }
                      this.$refs.refresh.endAfter(); //刷新结束调用
                      //4代表筛选条件过来的
                    } else if (type == 4) {
                      console.log('分类获取的数据是 ' + thisPageVideos);
                      this.list[this.currentTab1 + i] = thisPageVideos;
                      this.pages[this.currentTab1] = 0;
                    }
                  }

                  i++;
                  if (i < times) {
                    this.urlRequest(i, type, times);
                  } else {
                    //之后开启强制渲染,要不然页面不刷新
                    this.$forceUpdate();
                  }
                }case 11:case "end":return _context.stop();}}}, _callee, this);}));function urlRequest(_x, _x2, _x3) {return _urlRequest.apply(this, arguments);}return urlRequest;}(),


    getVideoFromJavaToPage: function getVideoFromJavaToPage(video) {
      //解决显示必须一致的问题

      var sc = video.showScore;
      if (sc.length == 1) {
        sc = sc + '.0';
      } else if (sc.length == 0) {
        sc = '0.0';
      } else if (sc.length == 4) {
        sc = sc.slice(0, 2);
      }

      var info = video.newInfo;
      if (info.length == 0) {
        info = 'HD高清';
      }

      var na = video.name;
      if (na.length == 0) {
        na = '无';
      }

      var videoTrans = {
        id: video.id,
        name: na,
        new_info: info,
        show_score: sc,
        /* picture: this.$serverUrl + '/images/' + video.picture, */

        //暂时用其他服务器的,感觉没必要用自己的

        picture: video.pictureUrl,
        director: video.director,
        actors: video.actors,
        release_time: video.releaseTime,
        updated_time: video.updatedTime,
        area: video.area,
        language: video.language,
        film_length: video.filmLength,
        film_synopsis: video.filmSynopsis.trim(),
        show_url: video.lookUrl,
        down_url: video.downUrl };

      return videoTrans;
    },
    getHotVideo: function () {var _getHotVideo = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var _ref3, _ref4, err, ret, d, l, v1, v2, v3, v4, v5, j, video, videoTrans;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (
                  uni.request({
                    url: this.$serverUrl + '/getHot',
                    data: '',
                    method: 'POST',
                    header: {
                      'content-type': 'application/json' },

                    timeout: '100000' }));case 2:_ref3 = _context2.sent;_ref4 = _slicedToArray(_ref3, 2);err = _ref4[0];ret = _ref4[1];

                if (err) {
                  console.log('获取轮播图失败');
                } else {
                  this.listHot = [[]];

                  d = ret.data;

                  //i代表第几个标题
                  l = [];

                  v1 = d.最热;
                  v2 = d.热播电影;
                  v3 = d.热播电视剧;
                  v4 = d.热播综艺节目;
                  v5 = d.热播动漫;

                  this.listHot.push([]);
                  //j代表每个标题下面有多少个视频
                  for (j = 0; j < v1.length; j++) {
                    video = v1[j];

                    //这里转换一下格式
                    videoTrans = this.getVideoFromJavaToPage(video);
                    videoTrans.showName = '最热';

                    this.listHot[0].push(videoTrans);
                  }
                  this.listHot.push([]);
                  //j代表每个标题下面有多少个视频
                  for (j = 0; j < v2.length; j++) {
                    video = v2[j];

                    //这里转换一下格式
                    videoTrans = this.getVideoFromJavaToPage(video);
                    videoTrans.showName = '热播电影';

                    this.listHot[1].push(videoTrans);
                  }
                  this.listHot.push([]);
                  //j代表每个标题下面有多少个视频
                  for (j = 0; j < v3.length; j++) {
                    video = v3[j];

                    //这里转换一下格式
                    videoTrans = this.getVideoFromJavaToPage(video);
                    videoTrans.showName = '热播电视剧';

                    this.listHot[2].push(videoTrans);
                  }
                  this.listHot.push([]);
                  //j代表每个标题下面有多少个视频
                  for (j = 0; j < v4.length; j++) {
                    video = v4[j];

                    //这里转换一下格式
                    videoTrans = this.getVideoFromJavaToPage(video);
                    videoTrans.showName = '热播综艺节目';
                    this.listHot[3].push(videoTrans);
                  }
                  this.listHot.push([]);
                  //j代表每个标题下面有多少个视频
                  for (j = 0; j < v5.length; j++) {
                    video = v5[j];

                    //这里转换一下格式
                    videoTrans = this.getVideoFromJavaToPage(video);
                    videoTrans.showName = '热播动漫';
                    this.listHot[4].push(videoTrans);
                  }

                  console.log('轮播图数据' + ret.data);
                }case 7:case "end":return _context2.stop();}}}, _callee2, this);}));function getHotVideo() {return _getHotVideo.apply(this, arguments);}return getHotVideo;}(),

    //点击切换视频按钮
    onClickButton: function onClickButton(index, urlId, link_name, values) {var _this2 = this;
      //给选中的标签赋值
      this.clickButtonIds[this.currentTab].cid[index] = urlId;

      this.$set(this.paramsForEachPage[this.currentTab], link_name, values);

      this.$forceUpdate();

      console.log(this.paramsForEachPage);
      //调用刷新页面
      this.getVideoList(4);

      //返回到第一页

      this.toView = '';
      setTimeout(function () {
        _this2.toView = 'top' + _this2.currentTab;
      }, 10);
    },

    //显示隐藏筛选
    showFilter: function showFilter(e) {
      console.log('点击');
      if (this.showOrHide == 'hide') {
        this.showOrHide = 'show';
        this.xuanzhuan = 'up';
      } else {
        this.showOrHide = 'hide';
        this.xuanzhuan = 'down';
      }
    },
    //搜索
    confirm: function confirm(e) {
      console.log('输入了' + e.detail.value);

      //收起键盘

      uni.hideKeyboard();





      if (e.detail.value.trim().length == 0) {
        return;
      }

      //跳转到搜索页
      uni.navigateTo({
        url: '/pages/videoPage/serch/serch?msg=' + e.detail.value.trim(),
        animationType: 'pop-in',
        animationDuration: 2000 });

    },

    //获取筛选列表请求
    getFilter: function () {var _getFilter = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {var _ref5, _ref6, err, res, showPara, i, a;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return (
                  uni.request({
                    url: this.$serverUrl + '/getSearchFilter',
                    method: 'POST',
                    header: {
                      'content-type': 'application/json' } }));case 2:_ref5 = _context3.sent;_ref6 = _slicedToArray(_ref5, 2);err = _ref6[0];res = _ref6[1];


                //data为一个数组，数组第一项为错误信息，第二项为返回数据

                if (err) {
                  console.log('请求主题信息失败:', err);
                } else {
                  console.log(res.data);
                  showPara = res.data;
                  this.paramsForEachPageShow = showPara;
                  //初始化筛选按钮
                  this.clickButtonIds = [];

                  for (i = 0; i < showPara.length; i++) {
                    //其中4个条件确定,就是不知道有多少页
                    a = {
                      cid: [0, 0, 0, 0] };

                    this.clickButtonIds.push(a);
                  }

                  this.$forceUpdate();
                }case 7:case "end":return _context3.stop();}}}, _callee3, this);}));function getFilter() {return _getFilter.apply(this, arguments);}return getFilter;}(),

    //获取主题数据,也就是左右滑动的标题数据
    getCatogory: function () {var _getCatogory = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {var _ref7, _ref8, err, ret, videoCategories, i, ppid;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:_context4.next = 2;return (
                  uni.request({
                    url: this.$serverUrl + '/getCategory',
                    method: 'POST' }));case 2:_ref7 = _context4.sent;_ref8 = _slicedToArray(_ref7, 2);err = _ref8[0];ret = _ref8[1];


                if (err) {
                  console.log('请求主题getCatogory失败:', err);
                } else {
                  console.log('请求主题getCatogory返回的数据是:' + ret.data);
                  videoCategories = ret.data;

                  this.tabTitle = [];
                  this.paramsForEachPage = [];
                  this.pages = [];
                  for (i = 0; i < videoCategories.length; i++) {
                    //初始化标题
                    this.tabTitle.push(videoCategories[i].name);
                    //初始化查询条件
                    ppid = videoCategories[i].id;
                    this.paramsForEachPage.push({
                      ppid: ppid,
                      pids: '',
                      years: '',
                      area: '',
                      sortWay: '0',
                      currentPageNum: 0,
                      pageSize: 8 });


                    //初始化当前页数

                    this.pages.push(0);
                  }

                  //初始化获取所有的分类下的视频 怀疑是异步执行,所以放在成功里面
                  this.getVideoList('3');
                  //初始化轮播图,按照更新世界排序

                  this.getHotVideo();
                  /* 修改为同步方法 获取筛选列表*/
                  this.getFilter();
                }case 7:case "end":return _context4.stop();}}}, _callee4, this);}));function getCatogory() {return _getCatogory.apply(this, arguments);}return getCatogory;}() } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/*!*****************************************************************************************************************!*\
  !*** D:/hbuilder/hbuilderProject/myAudioPlayer/pages/videoPage/videoPage.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videoPage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--8-oneOf-1-2!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./videoPage.vue?vue&type=style&index=0&lang=scss& */ 27);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videoPage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videoPage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videoPage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videoPage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videoPage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 27 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/hbuilder/hbuilderProject/myAudioPlayer/pages/videoPage/videoPage.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
],[[16,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/videoPage/videoPage.js.map