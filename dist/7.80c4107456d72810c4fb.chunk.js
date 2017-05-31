webpackJsonp([7],{

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(49),
  /* template */
  __webpack_require__(63),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/laynezhou/graduate_design/simulay/simulay-front/src/views/simulation.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] simulation.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1029fb0e", Component.options)
  } else {
    hotAPI.reload("data-v-1029fb0e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 49:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            theme: 'light',
            activeTab: '1',
            links: [{ path: '/simulation/ide/edit' }, { path: '/simulation/cmd' }, { path: '/simulation/list/teach' }, { path: '/simulation/list/custom' }, { path: '/simulation/experiment/recommend' }, { path: '/simulation/experiment/history' }]

        };
    },
    computed: {},
    mounted() {
        let path = window.location.hash;
        for (var i = 0; i < this.links.length; i++) {
            if ('#' + this.links[i].path == path) {
                console.log(path);
                this.activeTab = '' + ++i;
                break;
            }
        }
    }
});

/***/ }),

/***/ 63:
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
      "theme": _vm.theme,
      "active-name": _vm.activeTab,
      "width": "auto",
      "open-names": ['1', '2', '3']
    }
  }, [_c('Submenu', {
    attrs: {
      "name": "1"
    }
  }, [_c('template', {
    slot: "title"
  }, [_c('Icon', {
    attrs: {
      "type": "ios-analytics"
    }
  }), _vm._v("\n                        在线调试\n                    ")], 1), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/simulation/ide/edit"
    }
  }, [_c('Menu-item', {
    attrs: {
      "name": "1"
    }
  }, [_vm._v("编辑器")])], 1), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/simulation/cmd"
    }
  }, [_c('Menu-item', {
    attrs: {
      "name": "2"
    }
  }, [_vm._v("命令行")])], 1)], 2), _vm._v(" "), _c('Submenu', {
    attrs: {
      "name": "2"
    }
  }, [_c('template', {
    slot: "title"
  }, [_c('Icon', {
    attrs: {
      "type": "ios-navigate"
    }
  }), _vm._v("\n                        波形仿真\n                    ")], 1), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/simulation/list/teach"
    }
  }, [_c('Menu-item', {
    attrs: {
      "name": "3"
    }
  }, [_vm._v("教学仿真")])], 1), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/simulation/list/custom"
    }
  }, [_c('Menu-item', {
    attrs: {
      "name": "4"
    }
  }, [_vm._v("自定义仿真")])], 1)], 2), _vm._v(" "), _c('Submenu', {
    attrs: {
      "name": "3"
    }
  }, [_c('template', {
    slot: "title"
  }, [_c('Icon', {
    attrs: {
      "type": "ios-keypad"
    }
  }), _vm._v("\n                        实验\n                    ")], 1), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/simulation/experiment/recommend"
    }
  }, [_c('Menu-item', {
    attrs: {
      "name": "5"
    }
  }, [_vm._v("推荐实验")])], 1), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/simulation/experiment/history"
    }
  }, [_c('Menu-item', {
    attrs: {
      "name": "6"
    }
  }, [_vm._v("历史实验")])], 1)], 2)], 1)], 1), _vm._v(" "), _c('i-col', {
    attrs: {
      "span": "19"
    }
  }, [_c('router-view')], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-1029fb0e", module.exports)
  }
}

/***/ })

});