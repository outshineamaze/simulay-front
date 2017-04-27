webpackJsonp([2],{

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(56),
  /* template */
  __webpack_require__(60),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/laynezhou/graduate_design/simulay/simulay-front/src/views/api.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] api.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3dab5eba", Component.options)
  } else {
    hotAPI.reload("data-v-3dab5eba", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 56:
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
    data() {},
    computed: {},
    mounted() {}
});

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "layout"
  }, [_c('Affix', [_c('Menu', {
    attrs: {
      "mode": "horizontal",
      "theme": "dark",
      "active-name": "2"
    }
  }, [_c('div', {
    staticClass: "layout-logo"
  }), _vm._v(" "), _c('div', {
    staticClass: "layout-nav"
  }, [_c('router-link', {
    attrs: {
      "to": "/code"
    }
  }, [_c('Menu-item', {
    attrs: {
      "name": "1"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "ios-navigate"
    }
  }), _vm._v("\n                        线上仿真平台\n                    ")], 1)], 1), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/api"
    }
  }, [_c('Menu-item', {
    attrs: {
      "name": "2"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "ios-keypad"
    }
  }), _vm._v("\n                        数据API\n                    ")], 1)], 1), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/container"
    }
  }, [_c('Menu-item', {
    attrs: {
      "name": "3"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "ios-analytics"
    }
  }), _vm._v("\n                        容器管理系统\n                    ")], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "layout-login"
  }, [_c('Row', {
    staticClass: "code-row-bg",
    attrs: {
      "type": "flex",
      "justify": "end"
    }
  }, [_c('Col', {
    attrs: {
      "span": "8"
    }
  }, [_c('Poptip', {
    attrs: {
      "placement": "bottom",
      "trigger": "hover",
      "width": "300"
    }
  }, [_c('Badge', {
    attrs: {
      "dot": ""
    }
  }, [_c('Icon', {
    attrs: {
      "type": "ios-bell-outline",
      "size": "26"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "api",
    slot: "content"
  }, [_vm._v("\n                            消息提示\n                        ")])], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "16"
    }
  }, [_c('Dropdown', [_c('a', {
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_vm._v("\n                            laynezhou\n                            "), _c('Icon', {
    attrs: {
      "type": "arrow-down-b"
    }
  })], 1), _vm._v(" "), _c('Dropdown-menu', {
    slot: "list"
  }, [_c('Dropdown-item', [_vm._v("个人资料")]), _vm._v(" "), _c('Dropdown-item', [_vm._v("消息设置")]), _vm._v(" "), _c('Dropdown-item', [_vm._v("系统设置")]), _vm._v(" "), _c('Dropdown-item', {
    attrs: {
      "divided": ""
    }
  }, [_vm._v("退出")])], 1)], 1)], 1)], 1)], 1)])], 1), _vm._v(" "), _c('div', {
    staticClass: "layout-content"
  }, [_vm._v("\n        API\n    ")])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-3dab5eba", module.exports)
  }
}

/***/ })

});