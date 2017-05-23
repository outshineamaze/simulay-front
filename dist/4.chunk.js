webpackJsonp([4],{

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(61)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(45),
  /* template */
  __webpack_require__(70),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/laynezhou/graduate_design/simulay/simulay-front/src/views/exp_recom.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] exp_recom.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5d830ad6", Component.options)
  } else {
    hotAPI.reload("data-v-5d830ad6", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 45:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            expList: ["CPLD可编程数字信号发生器", "模拟信号发生器     ", "信宿模块        ", "抽样定理与PAM系统实训", "PCM编码译码原理实训 ", "FSK调制原理及解调原理", "PSK调制原理及解调原理", "PAM综合设计性实验  ", "FSK综合设计性实验  ", "PSK综合设计性实验 "]
        };
    },
    computed: {},
    mounted() {}
});

/***/ }),

/***/ 61:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "exp_list"
  }, [_vm._l((_vm.expList), function(exp) {
    return _c('Card', {
      staticClass: "exp_list_item"
    }, [_c('div', {
      staticStyle: {
        "text-align": "center"
      }
    }, [_c('h3', [_vm._v(_vm._s(exp))])])])
  }), _vm._v(" "), _c('div', {
    staticClass: "exp_list_page"
  }, [_c('Page', {
    attrs: {
      "total": 100
    }
  })], 1)], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-5d830ad6", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=4.chunk.js.map