webpackJsonp([9],{

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(42),
  /* template */
  __webpack_require__(66),
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
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            columns4: [{
                type: 'selection',
                width: 60,
                align: 'center'
            }, {
                title: 'action',
                key: 'action'
            }, {
                title: 'method',
                key: 'method'
            }, {
                title: 'route',
                key: 'route'
            }, {
                title: 'require',
                key: 'require'
            }],
            data1: [{
                action: "List Runner",
                method: "GET",
                route: "/runner",
                require: "Optional"
            }, {
                action: "GET Runner",
                method: "GET",
                route: "//runner/:id",
                require: "Optional"
            }, {
                action: "Update  runner ",
                method: "GET",
                route: "//runner/:id",
                require: "Optional"
            }, {
                action: "delete Runner",
                method: "GET",
                route: "/runner",
                require: "Optional"
            }, {
                action: "Get result",
                method: "GET",
                route: "//runner/:id",
                require: "Optional"
            }]
        };
    }
});

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "layout-content"
  }, [_c('Row', [_c('i-col', {
    attrs: {
      "span": "5"
    }
  }, [_c('Menu', {
    attrs: {
      "theme": _vm.light,
      "active-name": "1"
    }
  }, [_c('Menu-group', {
    attrs: {
      "title": "API管理"
    }
  }, [_c('Menu-item', {
    attrs: {
      "name": "1"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "document-text"
    }
  }), _vm._v("\n                API 列表\n            ")], 1), _vm._v(" "), _c('Menu-item', {
    attrs: {
      "name": "2"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "chatbubbles"
    }
  }), _vm._v("\n                统计分析\n            ")], 1)], 1), _vm._v(" "), _c('Menu-group', {
    attrs: {
      "title": "用户管理"
    }
  }, [_c('Menu-item', {
    attrs: {
      "name": "3"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "heart"
    }
  }), _vm._v("\n                用户列表\n            ")], 1), _vm._v(" "), _c('Menu-item', {
    attrs: {
      "name": "4"
    }
  }, [_c('Icon', {
    attrs: {
      "type": "heart-broken"
    }
  }), _vm._v("\n                待审核用户\n            ")], 1)], 1)], 1)], 1), _vm._v(" "), _c('i-col', {
    attrs: {
      "span": "19"
    }
  }, [_c('Table', {
    attrs: {
      "border": "",
      "columns": _vm.columns4,
      "data": _vm.data1
    }
  })], 1)], 1)], 1)
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