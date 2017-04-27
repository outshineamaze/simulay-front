webpackJsonp([3],{

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(55),
  /* template */
  __webpack_require__(62),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/laynezhou/graduate_design/simulay/simulay-front/src/components/test.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] test.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f1b0d1d6", Component.options)
  } else {
    hotAPI.reload("data-v-f1b0d1d6", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {};
    },
    mounted() {},
    beforeDestroy() {},
    methods: {}
});

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('i-circle', {
    attrs: {
      "percent": 80
    }
  }, [_c('span', {
    staticClass: "demo-i-circle-inner",
    staticStyle: {
      "font-size": "24px"
    }
  }, [_vm._v("80%")])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-f1b0d1d6", module.exports)
  }
}

/***/ })

});