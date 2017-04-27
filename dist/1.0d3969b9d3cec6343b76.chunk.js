webpackJsonp([1],{

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(57),
  /* template */
  __webpack_require__(61),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/laynezhou/graduate_design/simulay/simulay-front/src/views/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-67916b1b", Component.options)
  } else {
    hotAPI.reload("data-v-67916b1b", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 57:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            code: 'const str = "hello world"',
            editorOption: {
                mode: 'javascript',
                tabSize: 4,
                lineNumbers: true,
                lineWrapping: true,
                extraKeys: { 'Ctrl-Space': 'autocomplete' }
            }
        };
    },
    computed: {},
    mounted() {
        // use editor object...
        //this.editor.focus()
        //console.log('this is current editor object', this.editor)
    }
});

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "layout"
  }, [_c('Affix', [_c('Menu', {
    attrs: {
      "mode": "horizontal",
      "theme": "dark",
      "active-name": "1"
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
  }), _vm._v("\n                    线上仿真平台\n                ")], 1)], 1), _vm._v(" "), _c('router-link', {
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
  }), _vm._v("\n                    数据API\n                ")], 1)], 1), _vm._v(" "), _c('router-link', {
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
  }), _vm._v("\n                    容器管理系统\n                ")], 1)], 1)], 1), _vm._v(" "), _c('div', {
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
  }, [_vm._v("\n                                消息提示\n                            ")])], 1)], 1), _vm._v(" "), _c('Col', {
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
  }, [_c('Row', [_c('i-col', {
    attrs: {
      "span": "5"
    }
  }, [_c('Menu', {
    attrs: {
      "active-name": "1-2",
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
      "type": "ios-navigate"
    }
  }), _vm._v("\n                                波形仿真\n                            ")], 1), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/code/add"
    }
  }, [_c('Menu-item', {
    attrs: {
      "name": "1-1"
    }
  }, [_vm._v("QAM仿真")])], 1), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/code/edit"
    }
  }, [_c('Menu-item', {
    attrs: {
      "name": "1-2"
    }
  }, [_vm._v("QPSK仿真")])], 1)], 2), _vm._v(" "), _c('Submenu', {
    attrs: {
      "name": "2"
    }
  }, [_c('template', {
    slot: "title"
  }, [_c('Icon', {
    attrs: {
      "type": "ios-keypad"
    }
  }), _vm._v("\n                                数值分析\n                            ")], 1), _vm._v(" "), _c('Menu-item', {
    attrs: {
      "name": "2-1"
    }
  }, [_vm._v("实验结果管理")]), _vm._v(" "), _c('Menu-item', {
    attrs: {
      "name": "2-2"
    }
  }, [_vm._v("导出数据")])], 2), _vm._v(" "), _c('Submenu', {
    attrs: {
      "name": "3"
    }
  }, [_c('template', {
    slot: "title"
  }, [_c('Icon', {
    attrs: {
      "type": "ios-analytics"
    }
  }), _vm._v("\n                                在线matlab\n                            ")], 1), _vm._v(" "), _c('Menu-item', {
    attrs: {
      "name": "3-1"
    }
  }, [_vm._v("命令行模式")]), _vm._v(" "), _c('Menu-item', {
    attrs: {
      "name": "3-2"
    }
  }, [_vm._v("图形模式")])], 2)], 1)], 1), _vm._v(" "), _c('i-col', {
    attrs: {
      "span": "19"
    }
  }, [
    [_c('Menu', {
      attrs: {
        "mode": "horizontal",
        "theme": _vm.theme1,
        "active-name": "1"
      }
    }, [_c('router-link', {
      attrs: {
        "to": "/code/edit"
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
        "to": "/code/result"
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
        "to": "/code/analysis"
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
        "to": "/code/setting"
      }
    }, [_c('Menu-item', {
      attrs: {
        "name": "4"
      }
    }, [_c('Icon', {
      attrs: {
        "type": "settings"
      }
    }), _vm._v("\n                                综合设置\n                            ")], 1)], 1)], 1), _vm._v(" "), _c('br')], _vm._v(" "), _c('div', {
      staticClass: "layout-content-main"
    }, [_c('router-view')], 1)
  ], 2)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "layout-copy"
  }, [_vm._v("\n            2011-2017 ©laynezhou\n        ")])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-67916b1b", module.exports)
  }
}

/***/ })

});