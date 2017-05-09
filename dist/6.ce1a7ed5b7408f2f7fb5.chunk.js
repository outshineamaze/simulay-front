webpackJsonp([6],{

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(42),
  /* template */
  __webpack_require__(64),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/laynezhou/graduate_design/simulay/simulay-front/src/views/ide.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ide.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-73a9a533", Component.options)
  } else {
    hotAPI.reload("data-v-73a9a533", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 42:
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
        return {};
    },
    computed: {},
    mounted() {
        console.log(this.$route.params.simulationId);
    }
});

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('Menu', {
    attrs: {
      "mode": "horizontal",
      "theme": _vm.theme1,
      "active-name": "1"
    }
  }, [_c('router-link', {
    attrs: {
      "to": "/simulation/ide/edit"
    }
  }, [_c('Menu-item', {
    attrs: {
      "name": "1"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "ios-paper"
    }
  }), _vm._v("\n                                代码编辑\n                            ")], 1)], 1), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/simulation/ide/result"
    }
  }, [_c('Menu-item', {
    attrs: {
      "name": "2"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "arrow-right-b"
    }
  }), _vm._v("\n                                仿真结果\n                            ")], 1)], 1), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/simulation/ide/analysis"
    }
  }, [_c('Menu-item', {
    attrs: {
      "name": "3"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "stats-bars"
    }
  }), _vm._v("\n                                统计分析\n\n                            ")], 1)], 1), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/simulation/ide/setting"
    }
  }, [_c('Menu-item', {
    attrs: {
      "name": "4"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "settings"
    }
  }), _vm._v("\n                                综合设置\n                            ")], 1)], 1)], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
    staticClass: "layout-content-main"
  }, [_c('router-view')], 1), _vm._v(" "), _c('div', {
    staticClass: "layout-copy"
  }, [_vm._v("\n        2011-2017 ©laynezhou\n    ")])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-73a9a533", module.exports)
  }
}

/***/ })

});