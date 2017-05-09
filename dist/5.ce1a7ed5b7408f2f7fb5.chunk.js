webpackJsonp([5],{

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(52)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(38),
  /* template */
  __webpack_require__(58),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/laynezhou/graduate_design/simulay/simulay-front/src/components/result.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] result.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1181ce60", Component.options)
  } else {
    hotAPI.reload("data-v-1181ce60", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 38:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            spinShow: true
        };
    },
    computed: {},
    methods: {},
    mounted() {
        setTimeout(() => {
            this.spinShow = false;
        }, 500);
    },
    beforeDestroy() {}
});

/***/ }),

/***/ 52:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('Row', {
    staticClass: "result-row-content",
    attrs: {
      "type": "flex",
      "justify": "center",
      "align": "middle"
    }
  }, [_c('Col', {
    attrs: {
      "span": "10"
    }
  }, [_c('Card', {
    staticStyle: {
      "width": "350px"
    }
  }, [(_vm.spinShow) ? _c('Spin', {
    attrs: {
      "size": "large",
      "fix": ""
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticStyle: {
      "text-align": "center",
      "overflow": "hidden"
    }
  }, [_c('img', {
    staticStyle: {
      "max-width": "330px"
    },
    attrs: {
      "src": "/dist/logo.png"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("logo")])])], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "10"
    }
  }, [_c('Card', {
    staticStyle: {
      "width": "350px",
      "height": "300px"
    }
  }, [(_vm.spinShow) ? _c('Spin', {
    attrs: {
      "size": "large",
      "fix": ""
    }
  }) : _vm._e()], 1)], 1)], 1), _vm._v(" "), _c('Row', {
    staticClass: "result-row-content",
    attrs: {
      "type": "flex",
      "justify": "center",
      "align": "middle"
    }
  }, [_c('Col', {
    attrs: {
      "span": "10"
    }
  }, [_c('Card', {
    staticStyle: {
      "width": "350px",
      "height": "300px"
    }
  }, [(_vm.spinShow) ? _c('Spin', {
    attrs: {
      "size": "large",
      "fix": ""
    }
  }) : _vm._e()], 1)], 1), _vm._v(" "), _c('Col', {
    attrs: {
      "span": "10"
    }
  }, [_c('Card', {
    staticStyle: {
      "width": "350px",
      "height": "350px"
    }
  }, [(_vm.spinShow) ? _c('Spin', {
    attrs: {
      "size": "large",
      "fix": ""
    }
  }) : _vm._e()], 1)], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-1181ce60", module.exports)
  }
}

/***/ })

});