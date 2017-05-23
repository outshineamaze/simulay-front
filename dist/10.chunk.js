webpackJsonp([10],{

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(39),
  /* template */
  __webpack_require__(74),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/laynezhou/graduate_design/simulay/simulay-front/src/components/analysis.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] analysis.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f83e3a42", Component.options)
  } else {
    hotAPI.reload("data-v-f83e3a42", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 39:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            percent: 0
        };
    },
    computed: {
        color() {
            let color = '#2db7f5';
            if (this.percent == 100) {
                color = '#5cb85c';
            }
            return color;
        }
    },
    methods: {
        add() {
            if (this.percent >= 100) {
                return false;
            }
            this.percent += 10;
        },
        minus() {
            if (this.percent <= 0) {
                return false;
            }
            this.percent -= 10;
        }
    },
    beforeDestroy() {}
});

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('Card', {
    staticStyle: {
      "width": "100%"
    }
  }, [_c('Row', {
    attrs: {
      "type": "flex",
      "justify": "center"
    }
  }, [_c('Col', {
    attrs: {
      "span": "4"
    }
  }, [_c('i-circle', {
    attrs: {
      "percent": _vm.percent,
      "stroke-color": _vm.color
    }
  }, [(_vm.percent == 100) ? _c('Icon', {
    staticStyle: {
      "color": "#5cb85c"
    },
    attrs: {
      "type": "ios-checkmark-empty",
      "size": "60"
    }
  }) : _c('span', {
    staticStyle: {
      "font-size": "24px"
    }
  }, [_vm._v(_vm._s(_vm.percent) + "%")])], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "4"
    }
  }, [_c('i-circle', {
    attrs: {
      "percent": 100,
      "stroke-color": "#5cb85c"
    }
  }, [_c('Icon', {
    staticStyle: {
      "color": "#5cb85c"
    },
    attrs: {
      "type": "ios-checkmark-empty",
      "size": "60"
    }
  })], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "4"
    }
  }, [_c('i-circle', {
    attrs: {
      "percent": 35,
      "stroke-color": "#ff5500"
    }
  }, [_c('span', {
    staticClass: "demo-i-circle-inner"
  }, [_c('Icon', {
    staticStyle: {
      "color": "#ff5500"
    },
    attrs: {
      "type": "ios-close-empty",
      "size": "50"
    }
  })], 1)])], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-f83e3a42", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=10.chunk.js.map