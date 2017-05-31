webpackJsonp([8],{

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(46),
  /* template */
  __webpack_require__(71),
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

/***/ 46:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            activeTab: '',
            links: [{ path: '/simulation/ide/edit', name: '代码编辑', ico_class: 'ios-paper' }, { path: '/simulation/ide/result', name: '仿真结果', ico_class: 'arrow-right-b' }, { path: '/simulation/ide/analysis', name: '统计分析', ico_class: 'stats-bars' }, { path: '/simulation/ide/setting', name: '综合设置', ico_class: 'settings' }]

        };
    },
    computed: {},
    mounted() {
        let path = window.location.hash;
        for (var i = 0; i < this.links.length; i++) {
            if ('#' + this.links[i].path == path) {
                console.log(path);
                this.activeTab = i;
                break;
            }
        }
    }
});

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('Menu', {
    attrs: {
      "mode": "horizontal",
      "theme": "light",
      "active-name": _vm.activeTab
    }
  }, _vm._l((_vm.links), function(link, index) {
    return _c('div', [_c('router-link', {
      attrs: {
        "to": link.path
      }
    }, [_c('Menu-item', {
      attrs: {
        "name": index
      }
    }, [_c('Icon', {
      attrs: {
        "type": link.ico_class
      }
    }), _vm._v("\n                                " + _vm._s(link.name) + "\n                            ")], 1)], 1)], 1)
  })), _vm._v(" "), _c('div', {
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