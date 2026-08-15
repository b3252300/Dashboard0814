import {
  require_vue
} from "./chunk-3CW3IWSI.js";
import "./chunk-DHU5UYP7.js";
import {
  __commonJS
} from "./chunk-GFT2G5UO.js";

// node_modules/@aacassandra/vue3-progressbar/dist/vue3-progressbar.common.js
var require_vue3_progressbar_common = __commonJS({
  "node_modules/@aacassandra/vue3-progressbar/dist/vue3-progressbar.common.js"(exports, module) {
    module.exports = /******/
    function(modules) {
      var installedModules = {};
      function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) {
          return installedModules[moduleId].exports;
        }
        var module2 = installedModules[moduleId] = {
          /******/
          i: moduleId,
          /******/
          l: false,
          /******/
          exports: {}
          /******/
        };
        modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
        module2.l = true;
        return module2.exports;
      }
      __webpack_require__.m = modules;
      __webpack_require__.c = installedModules;
      __webpack_require__.d = function(exports2, name, getter) {
        if (!__webpack_require__.o(exports2, name)) {
          Object.defineProperty(exports2, name, { enumerable: true, get: getter });
        }
      };
      __webpack_require__.r = function(exports2) {
        if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
          Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
        }
        Object.defineProperty(exports2, "__esModule", { value: true });
      };
      __webpack_require__.t = function(value, mode) {
        if (mode & 1)
          value = __webpack_require__(value);
        if (mode & 8)
          return value;
        if (mode & 4 && typeof value === "object" && value && value.__esModule)
          return value;
        var ns = /* @__PURE__ */ Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", { enumerable: true, value });
        if (mode & 2 && typeof value != "string")
          for (var key in value)
            __webpack_require__.d(ns, key, (function(key2) {
              return value[key2];
            }).bind(null, key));
        return ns;
      };
      __webpack_require__.n = function(module2) {
        var getter = module2 && module2.__esModule ? (
          /******/
          function getDefault() {
            return module2["default"];
          }
        ) : (
          /******/
          function getModuleExports() {
            return module2;
          }
        );
        __webpack_require__.d(getter, "a", getter);
        return getter;
      };
      __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      __webpack_require__.p = "";
      return __webpack_require__(__webpack_require__.s = "fb15");
    }({
      /***/
      "8875": (
        /***/
        function(module2, exports2, __webpack_require__) {
          var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
          (function(root, factory) {
            if (true) {
              !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function" ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports2, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== void 0 && (module2.exports = __WEBPACK_AMD_DEFINE_RESULT__));
            } else {
            }
          })(typeof self !== "undefined" ? self : this, function() {
            function getCurrentScript() {
              var descriptor = Object.getOwnPropertyDescriptor(document, "currentScript");
              if (!descriptor && "currentScript" in document && document.currentScript) {
                return document.currentScript;
              }
              if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
                return document.currentScript;
              }
              try {
                throw new Error();
              } catch (err) {
                var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig, ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig, stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack), scriptLocation = stackDetails && stackDetails[1] || false, line = stackDetails && stackDetails[2] || false, currentLocation = document.location.href.replace(document.location.hash, ""), pageSource, inlineScriptSourceRegExp, inlineScriptSource, scripts = document.getElementsByTagName("script");
                if (scriptLocation === currentLocation) {
                  pageSource = document.documentElement.outerHTML;
                  inlineScriptSourceRegExp = new RegExp("(?:[^\\n]+?\\n){0," + (line - 2) + "}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*", "i");
                  inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, "$1").trim();
                }
                for (var i = 0; i < scripts.length; i++) {
                  if (scripts[i].readyState === "interactive") {
                    return scripts[i];
                  }
                  if (scripts[i].src === scriptLocation) {
                    return scripts[i];
                  }
                  if (scriptLocation === currentLocation && scripts[i].innerHTML && scripts[i].innerHTML.trim() === inlineScriptSource) {
                    return scripts[i];
                  }
                }
                return null;
              }
            }
            ;
            return getCurrentScript;
          });
        }
      ),
      /***/
      "8bbf": (
        /***/
        function(module2, exports2) {
          module2.exports = require_vue();
        }
      ),
      /***/
      "fb15": (
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          "use strict";
          __webpack_require__.r(__webpack_exports__);
          if (typeof window !== "undefined") {
            var currentScript = window.document.currentScript;
            if (true) {
              var getCurrentScript = __webpack_require__("8875");
              currentScript = getCurrentScript();
              if (!("currentScript" in document)) {
                Object.defineProperty(document, "currentScript", { get: getCurrentScript });
              }
            }
            var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
            if (src) {
              __webpack_require__.p = src[1];
            }
          }
          var setPublicPath = null;
          var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
          function render(_ctx, _cache, $props, $setup, $data, $options) {
            return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
              style: $setup.finalStyle
            }, null, 4);
          }
          var inBrowser = typeof window !== "undefined";
          var vue3_progressbarvue_type_script_lang_js = {
            name: "VueProgress",
            serverCacheKey: function serverCacheKey() {
              return "Progress";
            },
            setup: function setup() {
              var progress = inBrowser ? Object(external_commonjs_vue_commonjs2_vue_root_Vue_["inject"])("RADON_LOADING_BAR") : {
                percent: 0,
                options: {
                  canSuccess: true,
                  show: false,
                  color: "rgb(19, 91, 55)",
                  failedColor: "red",
                  thickness: "2px",
                  transition: {
                    speed: "0.2s",
                    opacity: "0.6s",
                    termination: 300
                  },
                  location: "top",
                  autoRevert: true,
                  inverse: false
                }
              };
              var finalStyle = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])(function() {
                var options = progress.options;
                var isShow = !!options.show;
                var location = options.location;
                var style = {
                  "z-index": 999999,
                  "background-color": options.canSuccess ? options.color : options.failedColor,
                  opacity: options.show ? 1 : 0,
                  position: options.position
                };
                if (location === "top" || location === "bottom") {
                  location === "top" ? style.top = "0px" : style.bottom = "0px";
                  if (!options.inverse) {
                    style.left = "0px";
                  } else {
                    style.right = "0px";
                  }
                  style.width = progress.percent + "%";
                  style.height = options.thickness;
                  style.transition = (isShow ? "width " + options.transition.speed + ", " : "") + "opacity " + options.transition.opacity;
                } else if (location === "left" || location === "right") {
                  location === "left" ? style.left = "0px" : style.right = "0px";
                  if (!options.inverse) {
                    style.bottom = "0px";
                  } else {
                    style.top = "0px";
                  }
                  style.height = progress.percent + "%";
                  style.width = options.thickness;
                  style.transition = (isShow ? "height " + options.transition.speed + ", " : "") + "opacity " + options.transition.opacity;
                }
                return style;
              });
              return {
                progress,
                finalStyle
              };
            }
          };
          vue3_progressbarvue_type_script_lang_js.render = render;
          var vue3_progressbar = vue3_progressbarvue_type_script_lang_js;
          function src_assign(target, source) {
            for (var index = 1, key, src2; index < arguments.length; ++index) {
              src2 = arguments[index];
              for (key in src2) {
                if (Object.prototype.hasOwnProperty.call(src2, key)) {
                  target[key] = src2[key];
                }
              }
            }
            return target;
          }
          var src_0 = {
            install: function install(app, options) {
              var DEFAULT_OPTION = {
                canSuccess: true,
                show: false,
                color: "#73ccec",
                position: "fixed",
                failedColor: "red",
                thickness: "2px",
                transition: {
                  speed: "0.2s",
                  opacity: "0.6s",
                  termination: 300
                },
                autoRevert: true,
                location: "top",
                inverse: false,
                autoFinish: true
              };
              var progressOptions = src_assign(DEFAULT_OPTION, options);
              var RADON_LOADING_BAR = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["reactive"])({
                percent: 0,
                options: progressOptions
              });
              app.provide("RADON_LOADING_BAR", RADON_LOADING_BAR);
              var Progress = {
                state: {
                  tFailColor: "",
                  tColor: "",
                  timer: null,
                  cut: 0
                },
                start: function start(time) {
                  var _this = this;
                  if (!time)
                    time = 3e3;
                  RADON_LOADING_BAR.percent = 0;
                  RADON_LOADING_BAR.options.show = true;
                  RADON_LOADING_BAR.options.canSuccess = true;
                  this.state.cut = 1e4 / Math.floor(time);
                  clearInterval(this.state.timer);
                  this.state.timer = setInterval(function() {
                    _this.increase(_this.state.cut * Math.random());
                    if (RADON_LOADING_BAR.percent > 95 && RADON_LOADING_BAR.options.autoFinish) {
                      _this.finish();
                    }
                  }, 100);
                },
                set: function set(num) {
                  RADON_LOADING_BAR.options.show = true;
                  RADON_LOADING_BAR.options.canSuccess = true;
                  RADON_LOADING_BAR.percent = Math.floor(num);
                },
                get: function get() {
                  return Math.floor(RADON_LOADING_BAR.percent);
                },
                increase: function increase(num) {
                  RADON_LOADING_BAR.percent = Math.min(99, RADON_LOADING_BAR.percent + Math.floor(num));
                },
                decrease: function decrease(num) {
                  RADON_LOADING_BAR.percent = RADON_LOADING_BAR.percent - Math.floor(num);
                },
                hide: function hide() {
                  var _this2 = this;
                  clearInterval(this.state.timer);
                  this.state.timer = null;
                  setTimeout(function() {
                    RADON_LOADING_BAR.options.show = false;
                    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["nextTick"])(function() {
                      setTimeout(function() {
                        RADON_LOADING_BAR.percent = 0;
                      }, 100);
                      if (RADON_LOADING_BAR.options.autoRevert) {
                        setTimeout(function() {
                          _this2.revert();
                        }, 300);
                      }
                    });
                  }, RADON_LOADING_BAR.options.transition.termination);
                },
                pause: function pause() {
                  clearInterval(this.state.timer);
                },
                finish: function finish() {
                  RADON_LOADING_BAR.percent = 100;
                  this.hide();
                },
                fail: function fail() {
                  RADON_LOADING_BAR.options.canSuccess = false;
                  RADON_LOADING_BAR.percent = 100;
                  this.hide();
                },
                setFailColor: function setFailColor(color) {
                  RADON_LOADING_BAR.options.failedColor = color;
                },
                setColor: function setColor(color) {
                  RADON_LOADING_BAR.options.color = color;
                },
                setLocation: function setLocation(loc) {
                  RADON_LOADING_BAR.options.location = loc;
                },
                setTransition: function setTransition(transition) {
                  RADON_LOADING_BAR.options.transition = transition;
                },
                tempFailColor: function tempFailColor(color) {
                  this.state.tFailColor = RADON_LOADING_BAR.options.failedColor;
                  RADON_LOADING_BAR.options.failedColor = color;
                },
                tempColor: function tempColor(color) {
                  this.state.tColor = RADON_LOADING_BAR.options.color;
                  RADON_LOADING_BAR.options.color = color;
                },
                tempLocation: function tempLocation(loc) {
                  this.state.tLocation = RADON_LOADING_BAR.options.location;
                  RADON_LOADING_BAR.options.location = loc;
                },
                tempTransition: function tempTransition(transition) {
                  this.state.tTransition = RADON_LOADING_BAR.options.transition;
                  RADON_LOADING_BAR.options.transition = transition;
                },
                revertColor: function revertColor() {
                  RADON_LOADING_BAR.options.color = this.state.tColor;
                  this.state.tColor = "";
                },
                revertFailColor: function revertFailColor() {
                  RADON_LOADING_BAR.options.failedColor = this.state.tFailColor;
                  this.state.tFailColor = "";
                },
                revertLocation: function revertLocation() {
                  RADON_LOADING_BAR.options.location = this.state.tLocation;
                  this.state.tLocation = "";
                },
                revertTransition: function revertTransition() {
                  RADON_LOADING_BAR.options.transition = this.state.tTransition;
                  this.state.tTransition = {};
                },
                revert: function revert() {
                  if (RADON_LOADING_BAR.options.autoRevert) {
                    if (this.state.tColor) {
                      this.revertColor();
                    }
                    if (this.state.tFailColor) {
                      this.revertFailColor();
                    }
                    if (this.state.tLocation) {
                      this.revertLocation();
                    }
                    if (this.state.tTransition && (this.state.tTransition.speed !== void 0 || this.state.tTransition.opacity !== void 0)) {
                      this.revertTransition();
                    }
                  }
                },
                parseMeta: function parseMeta(meta) {
                  for (var x in meta.func) {
                    var func = meta.func[x];
                    switch (func.call) {
                      case "color":
                        switch (func.modifier) {
                          case "set":
                            this.setColor(func.argument);
                            break;
                          case "temp":
                            this.tempColor(func.argument);
                            break;
                        }
                        break;
                      case "fail":
                        switch (func.modifier) {
                          case "set":
                            this.setFailColor(func.argument);
                            break;
                          case "temp":
                            this.tempFailColor(func.argument);
                            break;
                        }
                        break;
                      case "location":
                        switch (func.modifier) {
                          case "set":
                            this.setLocation(func.argument);
                            break;
                          case "temp":
                            this.tempLocation(func.argument);
                            break;
                        }
                        break;
                      case "transition":
                        switch (func.modifier) {
                          case "set":
                            this.setTransition(func.argument);
                            break;
                          case "temp":
                            this.tempTransition(func.argument);
                            break;
                        }
                        break;
                    }
                  }
                }
              };
              app.component("vue-progress-bar", vue3_progressbar);
              app.config.globalProperties.$Progress = Progress;
            }
          };
          var entry_lib = __webpack_exports__["default"] = src_0;
        }
      )
      /******/
    });
  }
});
export default require_vue3_progressbar_common();
//# sourceMappingURL=@aacassandra_vue3-progressbar.js.map
