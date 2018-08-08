(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define("vue_xy_ui", ["vue"], factory);
	else if(typeof exports === 'object')
		exports["vue_xy_ui"] = factory(require("vue"));
	else
		root["vue_xy_ui"] = factory(root["Vue"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(12)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//更新坐标值
function setPoints(map, points) {
  map.value = [];
  for (var i = 0; i < points.length; i++) {
    map.value.push({
      id: points[i].identifier,
      x: parseInt(points[i].clientX),
      y: parseInt(points[i].clientY)
    });
  }
}

//删除坐标
function deletePoint(map, point, state) {
  for (var i = 0; i < map.value.length; i++) {
    if (map.value[i].id === point.identifier) {
      map.value.splice(i, 1);
      break;
    }
  }
}

//复制坐标值
function copyPoint(target, source) {
  for (var i = 0; i < target.value.length; i++) {
    for (var j = 0; j < source.value.length; j++) {
      if (target.value[i].id === source.value[j].id) {
        target.value[i].x = source.value[j].x;
        target.value[i].y = source.value[j].y;
      }
    }
  }
}

//判断是否在区域内
function isInside(x, y, cx, cy, w, h) {
  if (x < cx || x > cx + w) {
    return false;
  } else if (y < cy || y > cy + h) {
    return false;
  }
  return true;
}

/**
 * 缓动工具
 */
var moveTool = function () {
  //缓动公式
  var moveFn = {
    Linear: function Linear(t, b, c, d) {
      return c * t / d + b;
    },
    CircularEaseInOut: function CircularEaseInOut(t, b, c, d) {
      if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
      return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    },
    CubicEaseOut: function CubicEaseOut(t, b, c, d) {
      return c * ((t = t / d - 1) * t * t + 1) + b;
    },
    QuartEaseOut: function QuartEaseOut(t, b, c, d) {
      return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    },
    ExpoEaseOut: function ExpoEaseOut(t, b, c, d) {
      return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    }

    //毫秒
  };var rate = 1000;
  var time = 10;

  /**
   * 缓动方法
   * @param before 前值
   * @param after 后值
   * @param callback 每帧回调
   * @param finish 完成回调
   * @param r 动画时长(可选)
   * @param fn 缓动公式(可选)
   */
  function move(before, after, callback, finish, r, fn) {
    var i = 0,
        itv = null,
        func = null;
    if (!r) {
      r = rate;
    }
    if (!fn) {
      func = moveFn.CircularEaseInOut;
    } else {
      func = moveFn[fn];
    }
    itv = setInterval(function () {
      var s = r * time / 100;
      var n = func(i, before, after - before, s);
      if (typeof callback == 'function') {
        callback.call(null, n);
      }
      if (i >= s) {
        clearInterval(itv);
        itv = null;
        if (typeof finish == 'function') {
          finish.call();
        }
      } else {
        i++;
      }
    }, time);
    return itv;
  }

  /**
   * 缓动方法(多次)
   * @param list 数值变化数组,如[0,100,300...]即值从0到100,然后从100到300...
   * @param callback 每帧回调
   * @param finish 完成回调
   * @param r 动画时长(可选)
   * @param fn 缓动公式(可选)
   */
  function moveSq(list, callback, finish, r, fn) {
    if (list.length > 1) {
      moveDeep(list, callback, finish, r, 0, list.length, fn);
    } else {
      if (typeof finish == 'function') {
        finish.call();
      }
    }
  }

  //moveSq的递归方法
  function moveDeep(list, callback, finish, r, index, length, fn) {
    move(list[index], list[index + 1], function (val) {
      callback.call(null, val, index);
    }, function () {
      if (index < length - 2) {
        moveDeep(list, callback, finish, r, index + 1, length, fn);
      } else {
        if (typeof finish == 'function') {
          finish.call();
        }
      }
    }, r, fn);
  }

  return {
    move: move,
    moveSq: moveSq
  };
}();

//动画定时器
var inter = {
  x: null,
  y: null
};

var interX = [];
var interY = [];

function clearIntervals(array) {
  array.forEach(function (item, index) {
    clearInterval(item);
  });
}

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'xy-pop-image',
  data: function data() {
    return {
      visible: false,
      img: '',
      imgs: [],
      index: 0,
      loading: true,
      done: false,

      top: 0,
      left: 0,
      width: window.innerWidth,
      height: 0,

      opts: {
        moveLimit: 50,
        onLoad: function onLoad() {}
        //          onNext: function () {
        //
        //          },
        //          onPre: function () {
        //
        //          }
      },
      //图片节点样式状态
      imgState: {
        start: {
          top: 0,
          left: 0,
          width: 0,
          height: 0
        },
        end: {
          top: 0,
          left: 0,
          width: 0,
          height: 0
        }
      },
      //滑动速度
      speed: {
        x: 0,
        y: 0
      },
      //触摸开始坐标
      starts: { value: [] },
      //触摸移动坐标
      moves: { value: [] },
      //对角线长
      len: {
        start: 0,
        move: 0
      },
      //缩放比例
      rate: 1,
      //触摸开始x轴两点的中点
      cenX: {
        start: 0,
        move: 0
      },
      //触摸开始y轴两点的中点
      cenY: {
        start: 0,
        move: 0
      },
      ww: window.innerWidth,
      wh: window.innerHeight,
      oh: 0,
      ow: 0
    };
  },

  methods: {
    //      setImg (img) {
    //        let that = this
    //        that.img = img
    //        that.loading = true
    //      },
    onClose: function onClose() {
      var that = this;
      that.visible = false;
      //        debugger
    },
    onLoad: function onLoad() {
      var that = this;
      that.reset();
      that.$nextTick(function () {
        that.popup();
      });
    },
    onTouchstart: function onTouchstart(e) {
      var that = this;
      //停止动画
      clearIntervals(interX);
      clearIntervals(interY);

      that.speed.x = 0;
      that.speed.y = 0;
      // if (!interX && !interY) {
      //记录上一帧触摸开始坐标
      var tx = 0;
      var ty = 0;
      var preCount = that.starts.value.length;
      if (preCount > 0) {
        tx = that.starts.value[0].x;
        ty = that.starts.value[0].y;
      }
      //刷新触摸开始坐标
      setPoints(that.starts, e.touches);

      //情况: 先击非图片区域, 后点点击图片区域, 然后缩放滑动1
      if (!isInside(e.touches[0].clientX, e.touches[0].clientY, that.imgState.start.left, that.imgState.start.top, that.imgState.start.width, that.imgState.start.height)) {
        deletePoint(that.starts, e.touches[0]);
      }
      //如果双点触摸
      if (that.starts.value.length > 1) {
        //情况: 先击非图片区域, 后点点击图片区域, 然后缩放滑动2
        if (!isInside(e.touches[1].clientX, e.touches[1].clientY, that.imgState.start.left, that.imgState.start.top, that.imgState.start.width, that.imgState.start.height)) {
          deletePoint(that.starts, e.touches[1]);
        }

        that.len.start = Math.sqrt(Math.pow(that.starts.value[0].x - that.starts.value[1].x, 2) + Math.pow(that.starts.value[0].y - that.starts.value[1].y, 2));

        var tempCenX = (that.starts.value[0].x + that.starts.value[1].x) / 2;
        var tempCenY = (that.starts.value[0].y + that.starts.value[1].y) / 2;

        if (preCount == 0) {
          //突然出现两个触摸点的时候
          that.cenX.start = tempCenX;
          that.cenY.start = tempCenY;
        } else {
          //虚构补充单点触摸时的假两点的中点(关键2)
          //新中点 - 旧中点(虚构补充)
          that.cenX.start = tempCenX - (that.starts.value[0].x - tx);
          that.cenY.start = tempCenY - (that.starts.value[0].y - ty);
        }
      }
      // }
    },
    onTouchmove: function onTouchmove(e) {
      var that = this;
      //        debugger
      // if (!interX && !interY) {
      //刷新触摸移动坐标
      setPoints(that.moves, e.touches);
      //删除不在图片区域的触摸点坐标(不产生start, 却产生了move的触摸点)
      //情况: 先点击图片区域, 后点击非图片区域, 然后缩放滑动
      for (var i = 0; i < e.touches.length; i++) {
        //排除超出显示区域的触摸
        if (e.touches[i].clientX <= 0 + that.opts.moveLimit || e.touches[i].clientX >= that.ww - that.opts.moveLimit || e.touches[i].clientY <= 0 + that.opts.moveLimit || e.touches[i].clientY >= that.wh - that.opts.moveLimit) {
          return;
        }

        var has = false;
        for (var j = 0; j < that.starts.value.length; j++) {
          if (that.starts.value[j].id == e.touches[i].identifier) {
            has = true;
            break;
          }
        }
        if (!has) {
          deletePoint(that.moves, e.touches[i]);
        }
      }
      if (that.moves.value.length > 1) {
        //如果双点触摸
        that.len.move = Math.sqrt(Math.pow(that.moves.value[0].x - that.moves.value[1].x, 2) + Math.pow(that.moves.value[0].y - that.moves.value[1].y, 2));
        //根据对角线长度变化计算缩放比例
        that.rate = (that.len.move / that.len.start).toFixed(2);
        //双点触摸两点的中点坐标
        that.cenX.move = (that.moves.value[0].x + that.moves.value[1].x) / 2;
        that.cenY.move = (that.moves.value[0].y + that.moves.value[1].y) / 2;
        //新宽高
        var tmp_w = that.imgState.start.width * that.rate;
        var tmp_h = that.imgState.start.height * that.rate;
        //限制缩放大小
        if (tmp_w <= that.ww && tmp_h <= that.wh) {
          tmp_w = that.imgState.start.width;
          tmp_h = that.imgState.start.height;
          //判断不准确,需要修改
          if (that.ww - tmp_w > that.wh - tmp_h) {
            tmp_w = that.ow / oh * that.wh;
            tmp_h = that.wh;
            that.imgState.end.top = 0;
            that.imgState.end.left = (that.ww - tmp_w) / 2;
          } else if (that.ww - tmp_w < that.wh - tmp_h) {
            tmp_w = that.ww;
            tmp_h = oh / that.ow * that.ww;
            that.imgState.end.top = (that.wh - tmp_h) / 2;
            that.imgState.end.left = 0;
          }
        } else {
          //图片缩放后的顶点坐标(关键1)
          //l2   cx - x2   cy - y2
          //-- = ------- = -------
          //l1   cx - x1   cy - y1
          //分别求 x2,y2
          that.imgState.end.top = that.cenY.move - that.len.move / that.len.start * (that.cenY.move - that.imgState.start.top) + (that.cenY.move - that.cenY.start) * that.rate;
          that.imgState.end.left = that.cenX.move - that.len.move / that.len.start * (that.cenX.move - that.imgState.start.left) + (that.cenX.move - that.cenX.start) * that.rate;
        }
        //图片缩放尺寸
        that.imgState.end.width = tmp_w;
        that.imgState.end.height = tmp_h;
        that.speed.x = (that.cenX.move - that.cenX.start) * that.rate;
        that.speed.y = (that.cenY.move - that.cenY.start) * that.rate;
      } else {
        //如果单点点触摸
        //图片顶点坐标
        that.imgState.end.top = that.imgState.start.top + (that.moves.value[0].y - that.starts.value[0].y);
        that.imgState.end.left = that.imgState.start.left + (that.moves.value[0].x - that.starts.value[0].x);

        that.speed.x = that.moves.value[0].x - that.starts.value[0].x;
        that.speed.y = that.moves.value[0].y - that.starts.value[0].y;
      }
      //        debugger
      //更新图片样式
      that.top = that.imgState.end.top;
      that.left = that.imgState.end.left;
      that.width = that.imgState.end.width;
      that.height = that.imgState.end.height;
      // }
    },
    onTouchend: function onTouchend(e) {
      var that = this;
      // if (!interX && !interY) {
      //删除已离开触摸点坐标
      for (var i = 0; i < e.changedTouches.length; i++) {
        deletePoint(that.starts, e.changedTouches[i]);
        deletePoint(that.moves, e.changedTouches[i]);
      }

      //更新尚在的触摸点坐标
      copyPoint(that.starts, that.moves);
      //更新图片样式值
      that.imgState.start.top = that.imgState.end.top;
      that.imgState.start.left = that.imgState.end.left;
      that.imgState.start.width = that.imgState.end.width;
      that.imgState.start.height = that.imgState.end.height;

      //临时位置动画逻辑
      if (that.imgState.start.width <= that.ww && that.imgState.start.height <= that.wh) {
        if (that.imgState.start.width === that.ww) {
          interX.push(moveTool.move(that.imgState.start.left, 0, function (v) {
            that.left = v;
          }, function () {
            that.imgState.start.left = 0;
            that.imgState.end.left = that.imgState.start.left;
          }, 300, 'CubicEaseOut'));
          interY.push(moveTool.move(that.imgState.start.top, (that.wh - that.imgState.start.height) / 2, function (v) {
            that.top = v;
          }, function () {
            that.imgState.start.top = (that.wh - that.imgState.start.height) / 2;
            that.imgState.end.top = that.imgState.start.top;
          }, 300, 'CubicEaseOut'));
        } else if (that.imgState.start.height === that.wh) {
          interX.push(moveTool.move(that.imgState.start.left, (that.ww - that.imgState.start.width) / 2, function (v) {
            that.left = v;
          }, function () {
            that.imgState.start.left = (that.ww - that.imgState.start.width) / 2;
            that.imgState.end.left = that.imgState.start.left;
          }, 300, 'CubicEaseOut'));
          interY.push(moveTool.move(that.imgState.start.top, 0, function (v) {
            that.top = v;
          }, function () {
            that.imgState.start.top = 0;
            that.imgState.end.top = that.imgState.start.top;
          }, 300, 'CubicEaseOut'));
        }
      }

      var moveLeft = that.ww - that.imgState.start.width;
      if (that.imgState.start.width >= that.ww) {
        if (that.imgState.start.left < moveLeft) {
          interX.push(moveTool.move(that.imgState.start.left, moveLeft, function (v) {
            that.left = v;
          }, function () {
            that.imgState.start.left = moveLeft;
            that.imgState.end.left = that.imgState.start.left;
          }, 200, 'CubicEaseOut'));
        } else if (that.imgState.start.left > 0) {
          interX.push(moveTool.move(that.imgState.start.left, 0, function (v) {
            that.left = v;
          }, function () {
            that.imgState.start.left = 0;
            that.imgState.end.left = that.imgState.start.left;
          }, 200, 'CubicEaseOut'));
        }

        if (that.imgState.start.height < that.wh) {
          var moveTop = (that.wh - that.imgState.start.height) / 2;
          interY.push(moveTool.move(that.imgState.start.top, moveTop, function (v) {
            that.top = v;
          }, function () {
            that.imgState.start.top = moveTop;
            that.imgState.end.top = that.imgState.start.top;
          }, 200, 'CubicEaseOut'));
        }
      } else {
        moveLeft = (that.ww - that.imgState.start.width) / 2;
        interX.push(moveTool.move(that.imgState.start.left, moveLeft, function (v) {
          that.left = v;
        }, function () {
          that.imgState.start.left = moveLeft;
          that.imgState.end.left = that.imgState.start.left;
        }, 200, 'CubicEaseOut'));
      }

      if (that.imgState.start.height > that.wh) {
        var moveTop = that.wh - that.imgState.start.height;
        if (that.imgState.start.top < moveTop) {
          interY.push(moveTool.move(that.imgState.start.top, moveTop, function (v) {
            that.top = v;
          }, function () {
            that.imgState.start.top = moveTop;
            that.imgState.end.top = that.imgState.start.top;
          }, 200, 'CubicEaseOut'));
        } else if (that.imgState.start.top > 0) {
          interY.push(moveTool.move(that.imgState.start.top, 0, function (v) {
            that.top = v;
          }, function () {
            that.imgState.start.top = 0;
            that.imgState.end.top = that.imgState.start.top;
          }, 200, 'CubicEaseOut'));
        }
      } else if (moveLeft === 0 && that.imgState.start.height < that.wh) {
        var moveTop = (that.wh - that.imgState.start.height) / 2;
        interY.push(moveTool.move(that.imgState.start.top, moveTop, function (v) {
          //            debugger
          that.top = v;
        }, function () {
          that.imgState.start.top = moveTop;
          that.imgState.end.top = that.imgState.start.top;
        }, 200, 'CubicEaseOut'));
      }

      var data = {
        index: that.index,
        get img() {
          return that.img;
        },
        set img(v) {
          that.loading = true;
          that.done = false;
          that.img = v;
        }
      };

      //临时切换事件
      if (that.imgState.start.width >= that.ww) {
        if (that.imgState.start.left > that.ww / 3) {
          that.$emit('on-change', 'pre', data);
        } else if (that.imgState.start.left < -(that.imgState.start.width - that.ww) - that.ww / 3) {
          that.$emit('on-change', 'next', data);
        }
      } else {
        if (that.imgState.start.left > that.ww / 3 + (that.ww - that.imgState.start.width) / 2) {
          that.$emit('on-change', 'pre', data);
        } else if (that.imgState.start.left < (that.ww - that.imgState.start.width) / 2 - that.ww / 3) {
          that.$emit('on-change', 'next', data);
        }
      }

      //考虑可以动画移动top/left
      // moveTool.move(that.imgState.start.top, that.imgState.end.top, function (v) {
      //     that.top = v;
      // }, function () {
      //
      // }, 300, 'CubicEaseOut');
      // moveTool.move(that.imgState.start.top, that.imgState.end.left, function (v) {
      //     that.left = v;
      // }, function () {
      //
      // }, 300, 'CubicEaseOut');
      // moveTool.move(that.imgState.start.top, that.imgState.end.top, function (v) {
      //     that.width = v;
      // }, function () {
      //
      // }, 300, 'CubicEaseOut');
      // moveTool.move(that.imgState.start.top, that.imgState.end.top, function (v) {
      //     that.height = v;
      // }, function () {
      //
      // }, 300, 'CubicEaseOut');

      // interX = moveTool.move(that.speed.x, 0, function (v) {
      // 	// console.log([that.imgState.end.left, that.ow, that.imgState.end.width]);
      // 	if (that.imgState.end.left <= 0 && that.imgState.end.left >= that.ww - that.imgState.end.width) {
      // 		that.imgState.end.left = that.imgState.end.left + v / 3 / that.rate;
      // 		that.imgState.start.left = that.imgState.end.left;
      // 		that.left = that.imgState.end.left;
      // 	}
      // 	else {
      // 		that.imgState.end.left = that.speed.x >= 0 ? 0 : (that.ww - that.imgState.end.width);
      // 		that.imgState.start.left = that.imgState.end.left;
      // 		that.left = that.imgState.end.left;
      // 	}
      // }, function () {
      // 	that.imgState.start.left = that.imgState.end.left;
      // 	that.let = that.imgState.end.left;
      // 	clearInterval(interX);
      // 	interX = null;
      // }, 500, 'CubicEaseOut');
      // interY = moveTool.move(that.speed.y, 0, function (v) {
      // 	// console.log([that.imgState.end.top, that.wh, that.imgState.end.height]);
      // 	if (that.imgState.end.top <= 0 && that.imgState.end.top >= that.wh - that.imgState.end.height) {
      // 		that.imgState.end.top = that.imgState.end.top + v / 3 / that.rate;
      // 		that.imgState.start.top = that.imgState.end.top;
      // 		that.top = that.imgState.end.top;
      // 	}
      // 	else {
      // 		that.imgState.end.top = that.speed.y >= 0 ? 0 : (that.wh - that.imgState.end.height);
      // 		that.imgState.start.top = that.imgState.end.top;
      // 		that.top = that.imgState.end.top;
      // 	}
      // }, function () {
      // 	that.imgState.start.top = that.imgState.end.top;
      // 	that.top = that.imgState.end.top;
      // 	clearInterval(interY);
      // 	interY = null;
      // }, 500, 'CubicEaseOut');
      // }
    },
    reset: function reset() {
      var that = this;

      clearIntervals(interX);
      clearIntervals(interY);

      that.top = 0;
      that.left = 0;
      that.width = window.innerWidth;
      that.height = 0;
      that.imgState.start.top = 0;
      that.imgState.start.left = 0;
      that.imgState.start.width = 0;
      that.imgState.start.height = 0;
      that.imgState.end.top = 0;
      that.imgState.end.left = 0;
      that.imgState.end.width = 0;
      that.imgState.end.height = 0;
      that.starts.value = [];
      that.moves.value = [];
      that.len.start = 0;
      that.len.move = 0;
      that.rate = 1;
      that.cenX.start = 0;
      that.cenX.move = 0;
      that.cenY.start = 0;
      that.cenY.move = 0;
      that.oh = 0;
      that.ow = 0;
      that.speed.x = 0;
      that.speed.y = 0;
    },
    popup: function popup() {
      var that = this;
      if (that.img) {
        //计算初始位置
        that.oh = that.$refs.img.offsetHeight;
        that.ow = that.$refs.img.offsetWidth;

        var initTop = 0;
        //假定初始宽度100%, 如果高度<屏幕高度, 居中图片.
        if (that.oh < that.wh) {
          initTop = (that.wh - that.oh) / 2;
        }

        that.top = initTop;

        that.imgState.start.top = initTop;
        that.imgState.start.left = 0;
        that.imgState.start.width = that.ow;
        that.imgState.start.height = that.oh;
        that.imgState.end.top = initTop;
        that.imgState.end.left = 0;
        that.imgState.end.width = that.ow;
        that.imgState.end.height = that.oh;
      }
      setTimeout(function () {
        that.loading = false;
        that.done = true;
      }, 200);
    }
  },
  watch: {
    img: function img() {
      var that = this;
      that.loading = true;
    }
  },
  mounted: function mounted() {
    var that = this;

    setTimeout(function () {
      //        that.$emit('on-next', data)
    }, 5000);
  }
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'xy-article',
  props: {
    des: {
      type: String,
      default: ''
    }
  },
  watch: {
    des: function des(n) {
      var that = this;
      that.update();
    }
  },
  computed: {
    html: function html() {
      var that = this;
      return that.array.join('');
    }
  },
  methods: {
    //      replace (txt) {
    //        return txt.replace(/(<img.*?)(src=")(.*?)(".*?>)/g, `<div class="lazy-load">$1v-lazy="'$3'$4</div>`)
    //      },
    update: function update() {
      var that = this;
      if (that.des) {
        //          let start = 0
        //          that.array = []
        //          let ms = that.des.match(/(<img .*?>)/g)
        //          for (let i = 0; i < ms.length; i++) {
        //            let lc = that.des.indexOf(ms[i], start)
        //            if (start !== lc) {
        //              that.array.push(that.des.substr(start, lc))
        //            }
        //            that.array.push(that.replace(that.des.substr(lc, ms[i].length)))
        //            start = lc + ms[i].length
        //          }
        //          if (start < that.des.length) {
        //            that.array.push(that.replace(that.des.substring(start, that.des.length)))
        //          }

        //          console.log(that.array.map(function (item) {
        //            return item.value
        //          }))
        //          let ta = tmp.split('')
        //          for (let i = 0; i < ms.length; i++) {
        //            let lc = tmp.indexOf(ms[i])
        //            let txt = ''
        //            if (lc > 0) {
        //              //              debugger
        //              txt = ta.splice(0, lc)
        //                      .join('')
        //              that.array.push({
        //                type: 'txt',
        //                value: txt
        //              })
        //              tmp = tmp.replace(txt, '')
        //            }
        //            //            debugger
        //            txt = ta.splice(0, ms[i].length)
        //                    .join('')
        //            that.array.push({
        //              type: 'img',
        //              value: txt
        //            })
        //            tmp = tmp.replace(txt, '')
        //          }
        //          if (tmp) {
        //            that.array.push({
        //              type: 'txt',
        //              value: tmp
        //            })
        //          }
        //          let tpl = `<div>${that.des.replace(/(<img.*?)(src=["'])(.*?)(["'].*?)(.*?>)/g, '<div class="lazy-load">$1v-lazy="\'$3\'$4 v-xy-pop-image data-img="$3" data-index="0" $5</div>')}</div>`
        var tpl = '<div>' + that.des.replace(/(<img.*?)(src=["'])(.*?)(["'])(.*?>)/g, '<div class="lazy-load"><img v-lazy="\'$3\'" v-xy-pop-image data-img="$3"></div>') + '</div>';
        var ls = tpl.match(/v-lazy="'(.*?)'"/g);
        if (ls) {
          var imgs = [];
          for (var i = 0; i < ls.length; i++) {
            var src = ls[i].replace(/v-lazy="'(.*?)'"/g, '$1');
            imgs.push('\'' + src + '\'');
            tpl = tpl.replace(src, src + '?idx=' + i);
          }
          tpl = tpl.replace(/v-xy-pop-image/g, 'v-xy-pop-image:imgs="[' + imgs.join(',') + ']"');
        }
        //          let idx = tpl.indexOf('a',7)
        //          while (){
        //
        //          }
        //          console.log(tpl)
        var text = __WEBPACK_IMPORTED_MODULE_0_vue___default.a.extend({
          template: tpl
        });
        new text().$mount('#xy-article__point');
      }
    }
  },
  data: function data() {
    return {
      array: []
    };
  },

  mounted: function mounted() {
    var that = this;
    that.update();
  }
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'xy-reach-bottom',
  props: {
    threshold: {
      type: String,
      default: 0
    }
  },
  data: function data() {
    return {
      done: true
    };
  },

  mounted: function mounted() {
    var that = this;
    window.addEventListener('scroll', function (e) {
      var threshold = parseInt(that.threshold);
      threshold = isNaN(threshold) ? 0 : threshold;
      console.log(window.scrollY + ' + ' + threshold + ' >= ' + document.body.scrollHeight + ' - ' + window.innerHeight + ' = ' + (document.body.scrollHeight - window.innerHeight));
      if (window.scrollY + threshold >= document.body.scrollHeight - window.innerHeight) {
        if (!that.done) {
          that.done = true;
          that.$emit('on-bottom');
          console.log('reach bottom');
        }
      } else {
        that.done = false;
      }
    });
  }
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var timer = null;
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'xy-scale-slider',
  props: {
    width: {
      type: String,
      default: 0
    },
    height: {
      type: String,
      default: 0
    },
    imgs: {
      type: Array,
      default: []
    },
    interval: {
      type: String,
      default: '1'
    }
  },
  data: function data() {
    return {
      current: 0,
      cur: -1,
      paddingRSH: 0,
      wideRSH: 0,
      widthRSH: 0,
      marginRSH: 0,
      heightRSH: 0,
      leftRSH: 0,

      auto: true,

      sx: 0,
      mx: 0,
      ex: 0
    };
  },

  computed: {
    itv: function itv() {
      var that = this;
      return parseInt(that.interval) * 1000;
    }
  },
  watch: {
    imgs: function imgs(nv, ov) {
      var that = this;
      that.current = 0;
      that.change(true);
    }
  },
  mounted: function mounted() {
    var that = this;
    that.change();
    that.start();
  },
  methods: {
    onTouchstart: function onTouchstart(_ref) {
      var _ref$touches = _slicedToArray(_ref.touches, 1),
          touch = _ref$touches[0];

      var that = this;
      that.stop();
      that.auto = false;
      that.sx = touch.clientX;
      that.mx = touch.clientX;
    },
    onTouchmove: function onTouchmove(e) {
      var that = this;

      var _e$touches = _slicedToArray(e.touches, 1),
          touch = _e$touches[0];

      that.auto = false;
      that.mx = touch.clientX;
      that.leftRSH = (that.mx - that.sx + that.ex) / (750 / 2) * 100;
      if (that.sx !== that.mx) {
        e.preventDefault();
        e.stopPropagation();
      }
    },
    onTouchend: function onTouchend(_ref2) {
      var _ref2$changedTouches = _slicedToArray(_ref2.changedTouches, 1),
          touch = _ref2$changedTouches[0];

      var that = this;
      that.auto = true;

      var tr = Math.abs((that.leftRSH + that.marginRSH) % (that.marginRSH * 2 + that.widthRSH));
      var cr = (that.marginRSH * 2 + that.widthRSH) / 3;
      var wr = that.marginRSH * 2 + that.widthRSH;

      if (that.mx - that.sx > 0) {
        if (wr - tr > cr) {
          that.current--;
        }
      } else if (that.mx - that.sx < 0) {
        if (tr > cr) {
          that.current++;
        }
      }

      that.update();
      that.start();
    },
    change: function change(force) {
      var that = this;

      that.widthRSH = that.width * 100 / 750;
      that.paddingRSH = (100 - that.widthRSH) / 2;
      that.marginRSH = that.paddingRSH / 4;
      that.wideRSH = (that.marginRSH * 2 + that.widthRSH) * that.imgs.length;
      that.heightRSH = that.height * 100 / 750;

      that.update(force);
    },
    update: function update(force) {
      var that = this;

      if (that.current < 0) {
        that.current = 0;
      } else if (that.current >= that.imgs.length) {
        that.current = that.imgs.length - 1;
      }

      //        console.log(that.cur, that.current)
      if (that.cur !== that.current || force) {
        that.cur = that.current;

        that.$emit('on-change', that.imgs[that.current], that.current, that.imgs.length);
      }

      that.leftRSH = -(that.marginRSH * 2 + that.widthRSH) * that.current - that.marginRSH;

      that.ex = that.leftRSH * 750 / 2 / 100;
    },
    stop: function stop() {
      clearInterval(timer);
      timer = null;
    },
    start: function start() {
      var that = this;
      that.stop();
      timer = setInterval(function () {
        that.current++;
        if (that.current >= that.imgs.length) {
          that.current = 0;
        }
        that.update();
      }, that.itv);
    }
  }
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'xy-list-status',
  props: {
    status: String
  },
  data: function data() {
    return {
      top: 0
    };
  },

  watch: {
    status: function status() {
      var that = this;
      that.top = Math.floor(that.$el.parentElement.getBoundingClientRect().top);
    }
  }
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xyDateFormat", function() { return xyDateFormat; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_base_scss__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scss_base_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__scss_base_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scss_nuxt_page_scss__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scss_nuxt_page_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__scss_nuxt_page_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scss_style_scss__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scss_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__scss_style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_xy_keep_top__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_xy_moving_btn__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_xy_pull_refresh__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directives_xy_pop_image__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__plugins_xy_lazyload_resize__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_xy_article_vue__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_xy_reach_bottom_vue__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_xy_scale_slider_vue__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_xy_list_status_vue__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__prototypes_xy_date_format__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__prototypes_xy_id_card__ = __webpack_require__(41);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "xyLazyloadResize", function() { return __WEBPACK_IMPORTED_MODULE_7__plugins_xy_lazyload_resize__["a"]; });










// import VueLazyload from 'vue-lazyload'

// import MessageBox from './mint-ui/packages/message-box'
// import Toast from './mint-ui/packages/toast'
// import Indicator from './mint-ui/packages/indicator'
// import Field from './mint-ui/packages/field'










var xyUI = {
  install: function install(Vue) {
    Vue.directive(__WEBPACK_IMPORTED_MODULE_3__directives_xy_keep_top__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_3__directives_xy_keep_top__["a" /* default */]);
    Vue.directive(__WEBPACK_IMPORTED_MODULE_4__directives_xy_moving_btn__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_4__directives_xy_moving_btn__["a" /* default */]);
    Vue.directive(__WEBPACK_IMPORTED_MODULE_5__directives_xy_pull_refresh__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_5__directives_xy_pull_refresh__["a" /* default */]);
    Vue.directive(__WEBPACK_IMPORTED_MODULE_6__directives_xy_pop_image__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_6__directives_xy_pop_image__["a" /* default */]);

    // 再次, 解决一个奇怪的依赖关系
    // Vue.use(VueLazyload, xyLazyloadResize)

    // 尽量按依赖关系按顺序注册
    Vue.component(__WEBPACK_IMPORTED_MODULE_8__components_xy_article_vue__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_8__components_xy_article_vue__["a" /* default */]);
    Vue.component(__WEBPACK_IMPORTED_MODULE_9__components_xy_reach_bottom_vue__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_9__components_xy_reach_bottom_vue__["a" /* default */]);
    Vue.component(__WEBPACK_IMPORTED_MODULE_10__components_xy_scale_slider_vue__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_10__components_xy_scale_slider_vue__["a" /* default */]);
    Vue.component(__WEBPACK_IMPORTED_MODULE_11__components_xy_list_status_vue__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_11__components_xy_list_status_vue__["a" /* default */]);

    // Vue.MessageBox = MessageBox
    // Vue.prototype.$messageBox = MessageBox
    // Vue.Toast = Toast
    // Vue.prototype.$toast = Toast
    // Vue.Indicator = Indicator
    // Vue.prototype.$indicator = Indicator
    // Vue.component(Field.name, Field)

    Vue.prototype.$xyFormat = {
      formatDate: __WEBPACK_IMPORTED_MODULE_12__prototypes_xy_date_format__["a" /* formatDate */],
      relativeDate: __WEBPACK_IMPORTED_MODULE_12__prototypes_xy_date_format__["b" /* relativeDate */]
    };
    Vue.prototype.$xyValidate = {
      isIdCard: __WEBPACK_IMPORTED_MODULE_13__prototypes_xy_id_card__["a" /* isIdCard */]
    };
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(xyUI);
  window.Vue.use(VueLazyload, __WEBPACK_IMPORTED_MODULE_7__plugins_xy_lazyload_resize__["a" /* default */]);
}

/* harmony default export */ __webpack_exports__["default"] = (xyUI);

// let mintUI = {
//   // MessageBox,
//   // Toast,
//   // Indicator
// }

var xyDateFormat = {
  formatDate: __WEBPACK_IMPORTED_MODULE_12__prototypes_xy_date_format__["a" /* formatDate */],
  relativeDate: __WEBPACK_IMPORTED_MODULE_12__prototypes_xy_date_format__["b" /* relativeDate */]
};



/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(11);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("76c6a4ff", content, true, {});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, ".container{min-height:100vh;display:flex;flex-direction:column;background-color:#fff}button.btn-submit{position:relative}button.btn-submit[disabled]{filter:grayscale(100%) brightness(150%);font-size:0}button.btn-submit[disabled]>*{font-size:0}button.btn-submit[disabled]:after{content:\"\";display:block;width:6vw;padding-top:6vw;animation:rotating 1s linear infinite;background:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABTklEQVQ4y52SPU8CQRBAtzI2mljxD4yJNvoH/FcmGCPe7awGRbidhWAQ/GJn7tBGG8Roa2FlR2kriYmVxESLsYBGNMrx2s17m50dpUYICvUMWNoC5C4g9wF5To1LoXaR1dYLIAsgfwLyPSBNjyUH1tey+YaEEXWNi1dVGvLl1jpYkqPWTV2lRbvmbK50JjuV5ElNgkEPxrFoy8sTBcByD5Df1aQMJ/6Q/uk8BcgzyrhYAOPUAeP4HJA/VFCiXr7a6qcNbJfjtyAiUSHyvkGSoNiYH1euNjuZsERiKj5Rm8U4kyt6MZXkMcXtnTAi0fZ8QSml1G6V9rRlOaB2/t/hRfEaWC/aJcffDkJLlxuFE9GRvzOOV0bFBrWXdOSvAmTRlm9/r1u2evCtAsgvgNwBpGtw/AzIogfy4d97UeZFsHF9GBAYSK9hRKca6ce2fgEBIMcpno6nCQAAAABJRU5ErkJggg==\") no-repeat;background-size:100% 100%;position:absolute;left:50%;top:50%;margin-left:-3vw;margin-top:-3vw}", ""]);

// exports


/***/ }),
/* 12 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(14);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("dd26c81a", content, true, {});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, ".container>*{min-height:100vh}.route-in .page-enter-active{animation:route-in-enter .5s;opacity:1}.route-in .page-leave-active{opacity:0}.route-out .page-enter-active{animation:route-out-enter .5s;opacity:1}.route-out .page-leave-active{opacity:0}.page-enter,.page-leave{transition:opacity .3s}@keyframes route-in-enter{0%{transform:translate(100vw)}to{transform:translate(0)}}@keyframes route-out-enter{0%{transform:translate(-100vw)}to{transform:translate(0)}}", ""]);

// exports


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(16);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("191043ee", content, true, {});

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "@keyframes xy-moving-btn{0%{transform:scale(1)}50%{transform:scale(.9)}to{transform:scale(1)}}.xy-moving-btn.xy-moving-btn--moving{animation:xy-moving-btn .2s ease-in-out}@keyframes rotating{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes delay-show{0%{opacity:0}50%{opacity:0}to{opacity:1}}@keyframes fade-out{0%{opacity:0}to{opacity:1}}.lazy-load{position:relative;display:flex;justify-content:center;overflow:hidden;flex-direction:column;align-items:center;background-repeat:no-repeat;background-size:100%;background-position:50%}.lazy-load.loaded{animation:fade-out .3s ease-in-out}.lazy-load.loading{animation:delay-show 1s ease-in-out;background-color:#fff}.lazy-load.error{background-color:#d9d9d9}.lazy-load img{position:absolute;opacity:0;width:100%;height:100%}@keyframes xy-pull-refresh{0%{top:0}50%{top:5%}to{top:0}}.xy-pull-refresh .xy-pull-refresh__bar{background:linear-gradient(#eee,#eee 90%,#ddd);display:flex;align-items:center;justify-content:center;overflow:hidden}.xy-pull-refresh .xy-pull-refresh__bar>span{width:2.5%;padding-top:2.5%;margin:1%;background-color:#ddd;border-radius:50%;position:relative;animation:xy-pull-refresh .6s ease-in infinite}.xy-pull-refresh .xy-pull-refresh__bar>span:first-child{animation-delay:0s}.xy-pull-refresh .xy-pull-refresh__bar>span:nth-child(2){animation-delay:.2s}.xy-pull-refresh .xy-pull-refresh__bar>span:nth-child(3){animation-delay:.4s}.xy-pull-refresh .xy-pull-refresh__bar.xy-pull-refresh__bar--auto{transition:height .3s ease-in-out}", ""]);

// exports


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var scrolly = 0;
var position = 'unset';
var top = 0;
var left = 0;
var width = 0;
var zindex = 0;
var boxshadow = 'none';
var height = 0;
var scrolly2 = 0;

function scroll(el) {
  // console.log(`window.scrollY:${window.scrollY}, scrolly:${scrolly}, scrolly2:${scrolly2}, height:${height}`)
  if (el.classList.contains('xy-keep-top--ing')) {
    // el.firstElementChild.firstElementChild.firstElementChild.innerHTML = `window.scrollY:${window.scrollY}, scrolly:${scrolly}, height:${height}`
    if (window.scrollY <= scrolly2) {
      el.style.position = position;
      el.style.top = top;
      el.style.left = left;
      el.style.width = width;
      el.style.zIndex = zindex;
      el.style.boxShadow = boxshadow;
      el.classList.remove('xy-keep-top--ing');
      if (el.nextElementSibling) {
        el.nextElementSibling.style.marginTop = 0;
      }
    } else if (window.scrollY <= 1 && window.scrollY <= scrolly) {
      el.style.position = position;
      el.style.top = top;
      el.style.left = left;
      el.style.width = width;
      el.style.zIndex = zindex;
      el.style.boxShadow = boxshadow;
      el.classList.remove('xy-keep-top--ing');
      if (el.nextElementSibling) {
        el.nextElementSibling.style.marginTop = 0;
      }
    }
  } else if (el.getBoundingClientRect().top <= 0 && !el.classList.contains('xy-keep-top--ing')) {
    position = el.style.position;
    top = el.style.top;
    left = el.style.left;
    width = el.style.width;
    zindex = el.style.zIndex;
    boxshadow = el.style.boxShadow;
    scrolly2 = window.scrollY;
    el.style.position = 'fixed';
    el.style.top = '0';
    el.style.left = '0';
    el.style.width = '100%';
    el.style.zIndex = '100';
    el.style.boxShadow = '0 1px 10px rgba(0,0,0,.1)';
    el.classList.add('xy-keep-top--ing');
    if (el.nextElementSibling) {
      el.nextElementSibling.style.marginTop = height + 'px';
    }
  }
  scrolly = window.scrollY;
}

var scrollCb = function scrollCb() {
  console.warn('no scroll callback function');
};

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'xy-keep-top',
  bind: function bind(el) {
    el.classList.add('xy-keep-top');
    scrollCb = scroll.bind({}, el);
    window.addEventListener('scroll', scrollCb);
  },
  inserted: function inserted(el) {
    height = el.offsetHeight;
  },
  unbind: function unbind() {
    window.removeEventListener('scroll', scrollCb);
  }
});

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var timer = null;

function btnClick(el) {
  el.classList.add('xy-moving-btn--moving');
  if (timer) {
    clearTimeout(timer);
    timer = null;
  }
  timer = setTimeout(function () {
    el.classList.remove('xy-moving-btn--moving');
  }, 300);
}

var btnClickCb = function btnClickCb() {
  console.warn('no moving btn callback function');
};

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'xy-moving-btn',
  bind: function bind(el) {
    el.classList.add('xy-moving-btn');
    btnClickCb = btnClick.bind({}, el);
    el.addEventListener('click', btnClickCb);
  },
  unbind: function unbind(el) {
    el.removeEventListener('click', btnClickCb);
  }
});

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// 触发刷新
function pullRefresh(cb, el) {
  log('刷新触发');
  cb.call({}, function stop() {
    // 结束刷新反馈
    eh = 0;
    height = 0;
    move();
    loader.style.height = height;
  });
}

function touchstart(el, _ref) {
  var _ref$touches = _slicedToArray(_ref.touches, 1),
      touch = _ref$touches[0];

  el.classList.add('xy-pull-refresh');
  var y = touch.clientY;

  sy = Math.round(y);
  my = sy;
  direct = '';
  upLock = false;
  downLock = false;
  stLock = true;
  log('start->direct:' + direct + ',sy:' + sy + ',my:' + my + ',st:' + st + ',height:' + height);
}

function touchmove(el, e) {
  var _e$touches = _slicedToArray(e.touches, 1),
      touch = _e$touches[0];

  var y = touch.clientY;

  my = Math.round(y);

  // 判断滑动方向
  if (sy > my) {
    direct = 'up';
  } else if (sy < my) {
    direct = 'down';
  } else {
    direct = '';
  }

  // 预滑动宽度
  var heightTemp = my - sy + eh;
  // 滚动必须为0, 且"下拉"开启
  if (st === 0 && stLock) {
    // 控制宽度
    if (heightTemp < 0) {
      heightTemp = 0;
    } else if (heightTemp > pullHeight) {
      heightTemp = pullHeight;
    }
  } else {
    heightTemp = 0;
  }
  log('move->direct:' + direct + ',sy:' + sy + ',my:' + my + ',st:' + st + ',height:' + height + ',heightTemp:' + heightTemp);
  // 下拉方向
  if (direct === 'down') {
    // 上划锁, 停止下拉
    height = upLock ? 0 : heightTemp;
    // 滚动为0的时候, 防止微信内置浏览器自带下拉傻逼信息展示
    if (st === 0) {
      e.preventDefault();
    }
    // 下滑锁开启
    downLock = true;
  } else if (direct === 'up') {
    // 上划锁, 停止下拉
    height = downLock ? 0 : heightTemp;
    // 上滑锁开启
    upLock = true;
  }
  loader.style.height = height + 'px';
}

function touchend(el, _ref2) {
  var _ref2$changedTouches = _slicedToArray(_ref2.changedTouches, 1),
      touch = _ref2$changedTouches[0];

  var y = touch.clientY;

  sy = Math.round(y);
  my = sy;
  log('end->direct:' + direct + ',sy:' + sy + ',my:' + my + ',st:' + st + ',height:' + height);
  // 滑动结束, 根据最低宽度自动收缩/扩宽
  if (height > pullPoint) {
    height = pullHeight;
    pullRefreshCb();
  } else {
    height = 0;
  }
  eh = height;
  direct = '';
  move();
  loader.style.height = height + 'px';
}

// window scroll event
function onWinScroll() {
  st = window.scrollY;
  // 下拉关闭
  if (st > 0) {
    stLock = false;
  }
  // 判断滑动方向
  if (st > sb) {
    direct = 'up';
  } else if (st < sb) {
    direct = 'down';
  } else {
    direct = '';
  }
  sb = st;
  log('scroll->direct:' + direct + ',sy:' + sy + ',my:' + my + ',st:' + st);
}

// 启动自动动画
function move() {
  loader.classList.add('pull-refresh__bar--auto');
  clearTimeout(timer);
  timer = setTimeout(function () {
    loader.classList.remove('pull-refresh__bar--auto');
  }, 300);
}

// 加载板
var loader = document.createElement('div');

// 日志板
var logger = document.createElement('div');
logger.style.position = 'fixed';
logger.style.zIndex = '100';
logger.style.bottom = 0;
logger.style.left = 0;
logger.style.width = '100%';
logger.style.backgroundColor = 'rgba(0,0,0,0.6)';
logger.style.fontSize = '14px';
logger.style.color = '#fff';
logger.style.minHeight = '16px';
logger.style.maxHeight = '160px';
logger.style.lineHeight = '16px';
logger.style.padding = '0 5px';
logger.style.overflow = 'auto';
logger.addEventListener('touchstart', function (e) {
  e.stopPropagation();
}, true);
logger.addEventListener('touchmove', function (e) {
  e.stopPropagation();
}, true);
logger.addEventListener('touchend', function (e) {
  e.stopPropagation();
}, true);
logger.innerHTML = '';

// 打日志
function log(str) {
  console.log(str);
  logger.innerHTML = logger.innerHTML + (logger.innerHTML ? '<br>' : '') + str;
  logger.scrollTop = logger.scrollHeight;
}

// 动画计时器
var timer = null;

// 下拉宽度
var pullHeight = 70;

// 最小下拉宽度
var pullPoint = 60;

// 上一次下拉宽度
var eh = 0;

// 当前下拉宽度
var height = 0;

// touch start y
var sy = 0;

// touch move y
var my = 0;

// scroll y
var st = 0;

// 上一次 scroll y
var sb = 0;

// 当前滚动方向
var direct = '';

// 上划锁
var upLock = false;

// 下滑锁
var downLock = false;

// 非下拉滑动锁
var stLock = true;

var pullRefreshCb = function pullRefreshCb() {
  console.warn('no pull refresh callback function');
};

var touchstartCb = function touchstartCb() {
  console.warn('no pull refresh touchstart function');
};

var touchmoveCb = function touchmoveCb() {
  console.warn('no pull refresh touchmove function');
};

var touchendCb = function touchendCb() {
  console.warn('no pull refresh touchend function');
};

var onWinScrollCb = function onWinScrollCb() {
  console.warn('no scroll function');
};

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'xy-pull-refresh',
  bind: function bind(el, _ref3) {
    var value = _ref3.value,
        arg = _ref3.arg;

    // 对外
    if (value) {
      pullRefreshCb = pullRefresh.bind({}, value, el);
    }
    el.classList.add('xy-pull-refresh');
    loader.style.height = '0';
    loader.classList.add('xy-pull-refresh__bar');
    loader.innerHTML = '<span></span><span></span><span></span>';
    el.insertBefore(loader, el.children[0]);
    touchstartCb = touchstart.bind({}, el);
    touchmoveCb = touchmove.bind({}, el);
    touchendCb = touchend.bind({}, el);
    onWinScrollCb = onWinScroll.bind({}, el);
    el.addEventListener('touchstart', touchstartCb);
    el.addEventListener('touchmove', touchmoveCb);
    el.addEventListener('touchend', touchendCb);
    window.addEventListener('scroll', onWinScrollCb);
  },
  unbind: function unbind(el) {
    // 解绑所有事件
    el.removeEventListener('touchstart', touchstartCb);
    el.removeEventListener('touchmove', touchmoveCb);
    el.removeEventListener('touchend', touchendCb);
    window.removeEventListener('scroll', onWinScrollCb);
  }
});

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_xy_pop_image_vue__ = __webpack_require__(21);




var cp = __WEBPACK_IMPORTED_MODULE_0_vue___default.a.extend(__WEBPACK_IMPORTED_MODULE_1__components_xy_pop_image_vue__["a" /* default */]);

var handlers = new Map();

var clicks = new Map();

var pops = {};

var instances = {};

var btnClickCb = function btnClickCb() {
  console.warn('no moving btn callback function');
};

function btnClick(el) {
  var parent = el.parentElement;
  var hasA = false;

  while (parent && !parent.classList.contains('xy-article')) {
    // console.log(parent)
    parent = parent.parentElement;
    hasA = parent.tagName === 'A';
    if (hasA) {
      break;
    }
  }

  if (hasA) {
    return;
  }

  instances[el.dataset.id].visible = true;
  instances[el.dataset.id].img = el.dataset.img;
  instances[el.dataset.id].index = el.dataset.index;
}

var count = 0;

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'xy-pop-image',
  bind: function bind(el, _ref) {
    var value = _ref.value,
        arg = _ref.arg;

    var instance = new cp({
      el: document.createElement('div')
    });
    instance.$el.dataset.id = count++;
    el.dataset.id = instance.$el.dataset.id;

    document.body.appendChild(instance.$el);
    instances[el.dataset.id] = instance;
    pops[el.dataset.id] = value;

    if (arg === 'change' && value) {
      // if (handlers.has(value)) {
      //   let els = handlers.get(value)
      //   els.push(el)
      //   handlers.set(value, els)
      // } else {
      //   handlers.set(value, [el])
      //   instance.$on('on-change', value)
      // }
    } else if (arg === 'imgs' && value) {
      instance.$on('on-change', function (direction, data) {
        var imgs = pops[el.dataset.id];
        var idx = imgs.indexOf(instances[el.dataset.id].img);
        var next = direction === 'pre' ? (imgs.length + idx - 1) % imgs.length : (idx + 1) % imgs.length;
        console.log('next:', next);
        instances[el.dataset.id].img = imgs[next];
      });
    }
    btnClickCb = btnClick.bind({}, el);
    el.addEventListener('click', btnClickCb);

    clicks.set(el, btnClickCb);
  },
  unbind: function unbind(el, _ref2) {
    var value = _ref2.value,
        arg = _ref2.arg;

    // if (instance) {
    //   instance.visible = false
    // }
    if (arg === 'change' && value) {
      // debugger
      // let els = handlers.get(value)
      // els.splice(els.indexOf(el), 1)
      // handlers.set(value, els)
    }
    var hd = clicks.get(el);
    el.removeEventListener('click', hd);
    clicks.delete(el);
  }
});

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_xy_pop_image_vue__ = __webpack_require__(4);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_152ccdef_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_xy_pop_image_vue__ = __webpack_require__(24);
function injectStyle (ssrContext) {
  __webpack_require__(22)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_xy_pop_image_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_152ccdef_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_xy_pop_image_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(23);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("2463795f", content, true, {});

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "div.blk-pop-image{position:fixed;width:100%;height:100%;top:0;left:0;z-index:999}div.blk-pop-image-close{position:absolute;top:10px;right:10px;width:30px;height:30px;margin:10px;border:2px solid #fff;border-radius:17px;z-index:4;overflow:hidden;transform:rotate(45deg);font-size:0}div.blk-pop-image-close>span{display:inline-block;width:50%;height:50%;vertical-align:middle;box-sizing:border-box}div.blk-pop-image-close>span:first-child{border-bottom:1px solid #fff;border-right:1px solid #fff}div.blk-pop-image-close>span:nth-child(2){border-bottom:1px solid #fff}div.blk-pop-image-close>span:nth-child(3){border-right:1px solid #fff}div.blk-pop-image-bg{position:absolute;top:0;left:0;width:100%;height:100%;background:#000;opacity:.8;z-index:1}img.blk-pop-image-img{position:absolute;z-index:3;transition-property:opacity,transform;transition-duration:.5s;transform:scale(0);opacity:0}img.blk-pop-image-img.done{opacity:1;transform:scale(1)}div.blk-pop-image-log{position:absolute;z-index:5;top:40px;left:0;width:100%;font-size:12px;color:#fff}@keyframes blk-pop-image-loading{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}div.blk-pop-image-loading{position:absolute;z-index:2;width:15%;padding-top:15%;margin:-7.5% 0 0 -7.5%;border:2px dashed #fff;left:50%;top:50%;border-radius:50%;animation:blk-pop-image-loading 2s linear infinite}", ""]);

// exports


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"blk-pop-image",on:{"touchstart":function($event){$event.stopPropagation();},"touchmove":function($event){$event.stopPropagation();}}},[_c('div',{staticClass:"blk-pop-image-bg"}),_vm._v(" "),_c('img',{ref:"img",staticClass:"blk-pop-image-img",class:{done:_vm.done},style:({opacity:_vm.loading?0:1,visibility:_vm.loading?'hidden':'visible',top:(_vm.top + "px"),left:(_vm.left + "px"),width:(_vm.width + "px"),height:("" + (_vm.height<=0?'auto':(_vm.height+'px')))}),attrs:{"src":_vm.img},on:{"load":_vm.onLoad,"touchstart":function($event){$event.preventDefault();return _vm.onTouchstart($event)},"touchmove":function($event){$event.preventDefault();return _vm.onTouchmove($event)},"touchend":function($event){$event.preventDefault();return _vm.onTouchend($event)}}}),_vm._v(" "),_c('div',{staticClass:"blk-pop-image-close",on:{"click":function($event){$event.stopPropagation();return _vm.onClose($event)}}},[_c('span'),_c('span'),_c('span'),_c('span')]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.loading),expression:"loading"}],staticClass:"blk-pop-image-loading"})])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// function baseSize (info, size) {
//   return {
//     ot: {
//       width: size.width,
//       height: size.height
//     },
//     wt: {
//       width: size.width,
//       height: size.width * info.height / info.width
//     },
//     ht: {
//       width: size.height * info.width / info.height,
//       height: size.height
//     }
//   }
// }

// function contain (el, baseInfo) {
//   if (baseInfo.wt.width === baseInfo.ot.width && baseInfo.wt.height <= baseInfo.ot.height) {
//     el.style.width = `${baseInfo.wt.width}px`
//     el.style.height = `${baseInfo.wt.height}px`
//     el.style.top = `${(baseInfo.ot.height - baseInfo.wt.height) / 2}px`
//     el.style.left = '0px'
//   } else if (baseInfo.ht.height === baseInfo.ot.height && baseInfo.ht.width <= baseInfo.ot.width) {
//     el.style.width = `${baseInfo.ht.width}px`
//     el.style.height = `${baseInfo.ht.height}px`
//     el.style.top = '0px'
//     el.style.left = `${(baseInfo.ot.width - baseInfo.ht.width) / 2}px`
//   }
// }
//
// function cover (el, baseInfo) {
//   console.log('baseInfo.wt.width === baseInfo.ot.width && baseInfo.wt.height >= baseInfo.ot.height')
//   console.log(`${baseInfo.wt.width} === ${baseInfo.ot.width} && ${baseInfo.wt.height} >= ${baseInfo.ot.height}`)
//   console.log('baseInfo.ht.height === baseInfo.ot.height && baseInfo.ht.width >= baseInfo.ot.width')
//   console.log(`${baseInfo.ht.height} === ${baseInfo.ot.height} && ${baseInfo.ht.width} >= ${baseInfo.ot.width}`)
//   if (baseInfo.wt.width === baseInfo.ot.width && baseInfo.wt.height >= baseInfo.ot.height) {
//     el.style.width = `${baseInfo.wt.width + 2}px`
//     el.style.height = `${baseInfo.wt.height + 2}px`
//     el.style.top = `${(-(baseInfo.wt.height - baseInfo.ot.height)) / 2 - 1}px`
//     el.style.left = `${-1}px`
//   } else if (baseInfo.ht.height === baseInfo.ot.height && baseInfo.ht.width >= baseInfo.ot.width) {
//     el.style.width = `${baseInfo.ht.width + 2}px`
//     el.style.height = `${baseInfo.ht.height + 2}px`
//     el.style.top = `${-1}px`
//     el.style.left = `${(-(baseInfo.ht.width - baseInfo.ot.width)) / 2 - 1}px`
//   }
//   console.log('el.style.width', el.style.width)
//   console.log('el.style.height', el.style.height)
//   console.log('el.style.top', el.style.top)
//   console.log('el.style.left', el.style.left)
// }

// window.addEventListener('resize', function () {
//   //lazy-cover loaded resize
//   //lazy-contain loaded resize
//   document.querySelectorAll('.lazy-contain.loaded.resize')
//           .forEach(function (el) {
//             let parent = el.parentElement
//             let baseInfo = baseSize({
//               width: el.offsetWidth,
//               height: el.offsetHeight
//             }, {
//               width: parent.offsetWidth,
//               height: parent.offsetHeight
//             })
//             contain(el, baseInfo)
//           })
//   document.querySelectorAll('.lazy-cover.loaded.resize')
//           .forEach(function (el) {
//             let parent = el.parentElement
//             let baseInfo = baseSize({
//               width: el.offsetWidth,
//               height: el.offsetHeight
//             }, {
//               width: parent.offsetWidth,
//               height: parent.offsetHeight
//             })
//             cover(el, baseInfo)
//           })
// })

/* harmony default export */ __webpack_exports__["a"] = ({
  preLoad: 1.5,
  // error: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAQAAACSoYmJAAACwElEQVRo3u3b3VLaQBTA8Z1x5NoHo9f6OPgIouNb+BZFg1SBWlsL41dLK+FDW2UUEPj3AqEYErIJQfa0OXsN85vM2bN7IEepqWCVJFvsU6XNsqJNlX22SLKq/II1UtQwKeqkWJtF3qCKiVFlwx28wi4mxy4r0+Q9TI89B5ttJMTOJHkdKbH+t2LYYtD2SyUhhaRIKaVIGFaX/aJGQpFEWiQVaXHobcV7ceiMEpbRADVFRxy6oxAY/x56QIMyebLkKFKmycB09C0FLMcq0DQXPeB6Cjxa10t/3h5ob/KQbSC6OZNsYS05SZRbahz7oo+XmiLKrf21NFbdLHRJC10yC53XQufNQh9qobNmoXMS0QWJ6SFyI4oseXqHSz8+xv/XCxMMuPQkX5p6NR0mibAmYPS865TIkyVLnhL1yJ/xD66kNbY3LxW/Lwdtj5PulGcZ6NdHWDHQv39LQjfJOrb4ES2z0bdTZAuLHHfmon+5kofX3ZqZ6N8+TUbFPPSDRotx7nsavCm6pdkVndEzBf3IkRbZwuKEbnTob1o55xZPAcjDdu4xCvSAC+2t4oy2RmPhXB+4nxc9oBxoh09GR/O3FOc69LhTaqL7nAUuTKPoavb37usmLLrHaah6CvDMxznIFlY4dJeT0MdAz+OzC0Z3KIY+vXp8mpscAv3ks4UqM/fB5wjIgdEtjdpa8aw2XyIhB0Tfax66FVfy14jIgdB3mj/5urEna/obohued14d9nmEZG20HZD8mn0RKVkT/TPklw/ZVxGTNdHhv77C98jJC0cvZsXoGB2jY3SMjtExOkYvGy3yBVmRryJnxKEzQl+vlzfI8E6RoCEro0nIHM4RNgZVGw9UCho4mxymZEcEeUf+EKXIcdXxYLCZW9L2GAweD1RuGla3G2zOHMGeGHZPc4A987/exUYXmwPSJElMC/8AAsbzwJ8A0u0AAAAASUVORK5CYII=',
  // loading: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABTklEQVQ4y52SPU8CQRBAtzI2mljxD4yJNvoH/FcmGCPe7awGRbidhWAQ/GJn7tBGG8Roa2FlR2kriYmVxESLsYBGNMrx2s17m50dpUYICvUMWNoC5C4g9wF5To1LoXaR1dYLIAsgfwLyPSBNjyUH1tey+YaEEXWNi1dVGvLl1jpYkqPWTV2lRbvmbK50JjuV5ElNgkEPxrFoy8sTBcByD5Df1aQMJ/6Q/uk8BcgzyrhYAOPUAeP4HJA/VFCiXr7a6qcNbJfjtyAiUSHyvkGSoNiYH1euNjuZsERiKj5Rm8U4kyt6MZXkMcXtnTAi0fZ8QSml1G6V9rRlOaB2/t/hRfEaWC/aJcffDkJLlxuFE9GRvzOOV0bFBrWXdOSvAmTRlm9/r1u2evCtAsgvgNwBpGtw/AzIogfy4d97UeZFsHF9GBAYSK9hRKca6ce2fgEBIMcpno6nCQAAAABJRU5ErkJggg==',
  // loading: 'data:image/gif;base64,R0lGODlhCgAKAJEDAMzMzP9mZv8AAP///yH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAADACwAAAAACgAKAAACF5wncgaAGgJzJ647cWua4sOBFEd62VEAACH5BAUAAAMALAEAAAAIAAMAAAIKnBM2IoMDAFMQFAAh+QQFAAADACwAAAAABgAGAAACDJwHMBGofKIRItJYAAAh+QQFAAADACwAAAEAAwAIAAACChxgOBPBvpYQYxYAIfkEBQAAAwAsAAAEAAYABgAAAgoEhmPJHOGgEGwWACH5BAUAAAMALAEABwAIAAMAAAIKBIYjYhOhRHqpAAAh+QQFAAADACwEAAQABgAGAAACDJwncqi7EQYAA0p6CgAh+QQJAAADACwHAAEAAwAIAAACCpRmoxoxvQAYchQAOw==',
  attempt: 3,
  // throttleWait: 500,
  // listenEvents: ['resize'],
  //lazyload 自动resize
  // dispatchEvent: true,
  // observer: true,
  // silent: false,
  //TODO:瑕疵点: 还没加载完成图片, 数据更新, 重新加载时, 偶发加载图片样式有误.
  //原因: Lazyload的loading事件有几率滞后于替换为loading的图片.
  //导致上一张图片大小遗留影响到loading图片.
  adapter: {
    loaded: function loaded(_ref, formCache) {
      var el = _ref.el;

      var parent = el.parentElement;
      parent.style.backgroundImage = 'url("' + el.src + '")';
      // parent.style.backgroundColor = 'inherit'
      // parent.style.backgroundRepeat = 'no-repeat'
      // parent.style.backgroundPosition = 'inherit'
      if (el.classList.contains('lazy-contain')) {
        parent.style.backgroundSize = 'contain';
      } else if (el.classList.contains('lazy-cover')) {
        parent.style.backgroundSize = 'cover';
      } else {
        parent.style.backgroundSize = '100%';
        parent.style.height = el.offsetHeight + 'px';
      }

      parent.classList.remove('loading');
      parent.classList.remove('error');
      parent.classList.add('loaded');

      // el.classList.remove('loading')
      // el.classList.remove('error')
      //
      // if (el.classList.contains('lazy-contain') || el.classList.contains('lazy-cover')) {
      //   if (el.classList.contains('loading')) {
      //     //            console.warn('loaded')
      //   } else if (formCache) {
      //     //            console.warn('loaded from cache')
      //     el.style.width = null
      //     el.style.height = null
      //     el.style.top = null
      //     el.style.left = null
      //     el.style.marginLeft = null
      //     el.style.marginTop = null
      //   }
      //
      //   console.log('el.offsetWidth', el.offsetWidth, 'el.offsetHeight', el.offsetHeight)
      //   console.log('parent.offsetWidth', parent.offsetWidth, 'parent.offsetHeight', parent.offsetHeight)
      //
      //   let baseInfo = baseSize({
      //     width: el.offsetWidth,
      //     height: el.offsetHeight
      //   }, {
      //     width: parent.offsetWidth,
      //     height: parent.offsetHeight
      //   })
      //
      //   console.log('baseInfo:')
      //   console.log(JSON.stringify(baseInfo))
      //
      //   el.classList.add('resize')
      //
      //   if (el.classList.contains('lazy-contain')) {
      //     contain(el, baseInfo)
      //   } else if (el.classList.contains('lazy-cover')) {
      //     cover(el, baseInfo)
      //   }
      // }
      // el.classList.add('loaded')
    },
    loading: function loading(_ref2) {
      var el = _ref2.el;

      var parent = el.parentElement;
      var min = parent.offsetWidth > parent.offsetHeight ? parent.offsetHeight : parent.offsetWidth;
      parent.style.backgroundImage = 'url("data:image/gif;base64,R0lGODlhEgASAIABAKa4zP///yH/C05FVFNDQVBFMi4wAwEAAAAh+QQJAwABACwAAAAAEgASAEACJwyOoYa3D6N8rVqgLp5M2+x9XcWBTTmGTqqa6qqxFInWUMzhk76TBQAh+QQJAwABACwAAAAAEgASAEACKQyOoYa3D6NUrdHqGJ44d3B9m1ZNZGZ+YXmKnsuq44qaNqSmnZ3rllIAACH5BAkDAAEALAAAAAASABIAQAIpDI6hhrcPo2zt0cRuvG5xoHxfyE2UZJWeKrLtmZ3aWqG2OaOjvfPwUgAAIfkECQMAAQAsAAAAABIAEgBAAigMjqGGtw8jbC3SxO67bnLFhQD4bZRkap4qli37qWSF1utZh7a+41ABACH5BAkDAAEALAAAAAASABIAQAIqDI6hhrcP42pNMgoUdpfanXVgJSaaZ53Yt6kj+a6lI7tcioN5m+o7KSkAACH5BAkDAAEALAAAAAASABIAQAIoDI6hhrcPI2tOKpom3vZyvVEeBgLdKHYhGjZsW63kMp/Sqn4WnrtnAQAh+QQJAwABACwAAAAAEgASAEACKAyOocvtCCN0TB5lM6Ar92hYmChxX2l6qRhqYAui8GTOm8rhlL6/ZgEAIfkECQMAAQAsAAAAABIAEgBAAigMjqHL7QgjdEyeJY2leHOdgZF4KdYJfGTynaq7XmGctuicwZy+j2oBACH5BAkDAAEALAAAAAASABIAQAInDI6hy+0II3RMHrosUFpjbmUROJFdiXmfmoafMZoodUpyLU5sO1MFACH5BAkDAAEALAAAAAASABIAQAImDI6hy+2GDozyKZrspBf7an1aFy2fuJ1Z6I2oho2yGqc0SYN1rRUAIfkECQMAAQAsAAAAABIAEgBAAiYMjqHL7W+QVLJaAOnVd+eeccliRaXZVSH4ee0Uxg+bevUJnuIRFAAh+QQJAwABACwAAAAAEgASAEACKoyBacvtnyI4EtH6QrV6X5l9UYgt2DZ1JRqqIOm1ZUszrIuOeM6x8x4oAAAh+QQJAwABACwAAAAAEgASAEACKIwNqcftryJAMrFqG55hX/wcnlN9UQeipZiGo9vCZ0hD6TbiN7hSZwEAIfkECQMAAQAsAAAAABIAEgBAAiiMH6CL7Z+WNHK2yg5WdLsNQB12VQgJjmZJiqnriZEl1y94423aqlwBACH5BAkDAAEALAAAAAASABIAQAIrjH+gi+2+IjCSvaoo1vUFPHnfxlllBp5mk4qt98KSSKvZCHZ4HtmTrgoUAAAh+QQFAwABACwAAAAAEgASAEACKIyPAcvpr5g0csJYc8P1cgtpwDceGblQmiey69W6oOfEon2f6KirUwEAIfkECQMAAQAsAAAPAAgAAwBAAgSMj6lXACH5BAkDAAEALAAAAAASABIAQAIYjI+JwK0Po5y02glUvrz7bzXiBpbLaD4FACH5BAkDAAEALAAAAAASABIAQAImjI8By8qfojQPTldzw/VymB3aCIidN6KaGl7kSnWpC6ftt00zDRUAIfkECQMAAQAsAAAAABIAEgBAAiaMjwHLyp+iNA9WcO6aVHOneWBYZeUXouJEiu1lWit7jhCX4rMEFwAh+QQJAwABACwAAAAAEgASAEACJ4yPAcvKn6I0r1pA78zWQX51XrWBSzl+Uxia7Jm+mEujW3trubg3BQAh+QQFAwABACwAAAAAEgASAEACJwyOoYa3D6N8rVqgLp5M2+x9XcWBTTmGTqqa6qqxFInWUMzhk76TBQA7")';
      // parent.style.backgroundColor = 'inherit'
      // parent.style.backgroundRepeat = 'no-repeat'
      // parent.style.backgroundPosition = 'center'
      parent.style.backgroundSize = (min / 3 > 18 ? 18 : min / 3) + 'px';
      parent.classList.remove('loaded');
      parent.classList.remove('error');
      parent.classList.add('loading');
      // if (!el.classList.contains('loading')) {
      //   el.classList.remove('loaded')
      //   el.classList.remove('error')
      //   el.classList.add('loading')
      //   if (el.classList.contains('lazy-contain') || el.classList.contains('lazy-cover')) {
      //     el.style.width = null
      //     el.style.height = null
      //     el.style.top = null
      //     el.style.left = null
      //     el.style.marginLeft = null
      //     el.style.marginTop = null
      //   }
      // }
    },
    error: function error(_ref3) {
      var el = _ref3.el;

      var parent = el.parentElement;
      var min = parent.offsetWidth > parent.offsetHeight ? parent.offsetHeight : parent.offsetWidth;
      parent.style.backgroundImage = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAQAAACSoYmJAAACwElEQVRo3u3b3VLaQBTA8Z1x5NoHo9f6OPgIouNb+BZFg1SBWlsL41dLK+FDW2UUEPj3AqEYErIJQfa0OXsN85vM2bN7IEepqWCVJFvsU6XNsqJNlX22SLKq/II1UtQwKeqkWJtF3qCKiVFlwx28wi4mxy4r0+Q9TI89B5ttJMTOJHkdKbH+t2LYYtD2SyUhhaRIKaVIGFaX/aJGQpFEWiQVaXHobcV7ceiMEpbRADVFRxy6oxAY/x56QIMyebLkKFKmycB09C0FLMcq0DQXPeB6Cjxa10t/3h5ob/KQbSC6OZNsYS05SZRbahz7oo+XmiLKrf21NFbdLHRJC10yC53XQufNQh9qobNmoXMS0QWJ6SFyI4oseXqHSz8+xv/XCxMMuPQkX5p6NR0mibAmYPS865TIkyVLnhL1yJ/xD66kNbY3LxW/Lwdtj5PulGcZ6NdHWDHQv39LQjfJOrb4ES2z0bdTZAuLHHfmon+5kofX3ZqZ6N8+TUbFPPSDRotx7nsavCm6pdkVndEzBf3IkRbZwuKEbnTob1o55xZPAcjDdu4xCvSAC+2t4oy2RmPhXB+4nxc9oBxoh09GR/O3FOc69LhTaqL7nAUuTKPoavb37usmLLrHaah6CvDMxznIFlY4dJeT0MdAz+OzC0Z3KIY+vXp8mpscAv3ks4UqM/fB5wjIgdEtjdpa8aw2XyIhB0Tfax66FVfy14jIgdB3mj/5urEna/obohued14d9nmEZG20HZD8mn0RKVkT/TPklw/ZVxGTNdHhv77C98jJC0cvZsXoGB2jY3SMjtExOkYvGy3yBVmRryJnxKEzQl+vlzfI8E6RoCEro0nIHM4RNgZVGw9UCho4mxymZEcEeUf+EKXIcdXxYLCZW9L2GAweD1RuGla3G2zOHMGeGHZPc4A987/exUYXmwPSJElMC/8AAsbzwJ8A0u0AAAAASUVORK5CYII=")';
      // parent.style.backgroundColor = '#d9d9d9'
      // parent.style.backgroundRepeat = 'no-repeat'
      // parent.style.backgroundPosition = 'center'
      parent.style.backgroundSize = (min / 3 > 90 ? 90 : min / 3) + 'px';
      parent.classList.remove('loaded');
      parent.classList.remove('loading');
      parent.classList.add('error');
      // el.classList.remove('loaded')
      // el.classList.remove('loading')
      // el.classList.add('error')
      // el.classList.remove('resize')
      //
      // if (el.classList.contains('lazy-contain') || el.classList.contains('lazy-cover')) {
      //   el.style.width = null
      //   el.style.height = null
      //   el.style.top = null
      //   el.style.left = null
      //   el.style.marginLeft = null
      //   el.style.marginTop = null
      // }
    }
  }
});

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_xy_article_vue__ = __webpack_require__(5);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2ad444f0_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_xy_article_vue__ = __webpack_require__(29);
function injectStyle (ssrContext) {
  __webpack_require__(27)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_xy_article_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2ad444f0_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_xy_article_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(28);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("3e7684fc", content, true, {});

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, ".xy-article img{width:100%;height:auto}", ""]);

// exports


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"xy-article"},[_c('div',{attrs:{"id":"xy-article__point"}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_xy_reach_bottom_vue__ = __webpack_require__(6);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9f4935d8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_xy_reach_bottom_vue__ = __webpack_require__(31);
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_xy_reach_bottom_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9f4935d8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_xy_reach_bottom_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div")}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_xy_scale_slider_vue__ = __webpack_require__(7);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_09bff45b_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_xy_scale_slider_vue__ = __webpack_require__(35);
function injectStyle (ssrContext) {
  __webpack_require__(33)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_xy_scale_slider_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_09bff45b_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_xy_scale_slider_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(34);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("38d4c6d4", content, true, {});

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, ".xy-scale-slider{overflow:hidden;font-size:0;box-sizing:border-box}.xy-scale-slider>div{white-space:nowrap;width:auto;position:relative;box-sizing:border-box}.xy-scale-slider>div.xy-scale-slider--auto{transition:left .3s ease-in-out}.xy-scale-slider>div>a{display:inline-block;box-sizing:border-box;transition:transform .3s ease-in-out;-webkit-tap-highlight-color:transparent}.xy-scale-slider>div>a.xy-scale-slider--wait-l,.xy-scale-slider>div>a.xy-scale-slider--wait-r{transform:scale(.8)}.xy-scale-slider>div>a.xy-scale-slider--wait-r{transform-origin:0 center}.xy-scale-slider>div>a.xy-scale-slider--wait-l{transform-origin:100% center}", ""]);

// exports


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"xy-scale-slider",style:({'padding':("0 " + _vm.paddingRSH + "vw"),'height':(_vm.heightRSH + "vw")})},[_c('div',{class:{'xy-scale-slider--auto':_vm.auto},style:({'width':(_vm.wideRSH + "vw"),'left':(_vm.leftRSH + "vw")}),on:{"touchstart":_vm.onTouchstart,"touchmove":_vm.onTouchmove,"touchend":_vm.onTouchend}},_vm._l((_vm.imgs),function(item,index){return _c('router-link',{key:item.id,staticClass:"lazy-load",class:{'xy-scale-slider--wait-r':index>_vm.current,'xy-scale-slider--wait-l':index<_vm.current},style:({'width':(_vm.widthRSH + "vw"),'height':(_vm.heightRSH + "vw"),'margin':("0 " + _vm.marginRSH + "vw")}),attrs:{"tag":"a","to":item.href}},[_c('img',{directives:[{name:"lazy",rawName:"v-lazy",value:(item.src),expression:"item.src"}],staticClass:"lazy-cover",attrs:{"alt":item.name}})])}))])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_xy_list_status_vue__ = __webpack_require__(8);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_17012697_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_xy_list_status_vue__ = __webpack_require__(39);
function injectStyle (ssrContext) {
  __webpack_require__(37)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-17012697"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_xy_list_status_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_17012697_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_xy_list_status_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(38);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("0cb51a3c", content, true, {});

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "div.xy-list-status[data-v-17012697]{display:flex;flex-direction:column;align-items:center;justify-content:center;padding-bottom:4vw;font-style:normal;font-size:3.73333vw;color:#a6a6a6;line-height:10.66667vw}@keyframes xy-list-status__char-data-v-17012697{0%{top:0}50%{top:1.33333vw}to{top:0}}div.xy-list-status.xy-list-status--loading>div>span[data-v-17012697]{position:relative;animation:xy-list-status__char-data-v-17012697 .6s ease-in infinite}div.xy-list-status.xy-list-status--loading>div>span[data-v-17012697]:first-child{animation-delay:0s}div.xy-list-status.xy-list-status--loading>div>span[data-v-17012697]:nth-child(2){animation-delay:.2s}div.xy-list-status.xy-list-status--loading>div>span[data-v-17012697]:nth-child(3){animation-delay:.4s}", ""]);

// exports


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.status!=='')?_c('div',{staticClass:"xy-list-status",class:{'xy-list-status--empty':_vm.status==='empty','xy-list-status--nomore':_vm.status==='nomore','xy-list-status--loading':_vm.status==='loading'},style:({height:_vm.status==='empty'?("calc(100vh - " + _vm.top + "px)"):'auto'})},[(_vm.status==='empty')?_vm._t("empty",[_c('span',[_vm._v("暂无内容")])]):_vm._e(),_vm._v(" "),(_vm.status==='nomore')?_vm._t("nomore",[_c('span',[_vm._v("没有更多了")])]):_vm._e(),_vm._v(" "),(_vm.status==='loading')?_c('div',[_c('span',[_vm._v("加")]),_c('span',[_vm._v("载")]),_c('span',[_vm._v("中")])]):_vm._e()],2):_vm._e()}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return relativeDate; });
function formatDate(date, fmt) {
  var o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds() // 毫秒
  };
  var format = fmt;
  if (/(y+)/.test(format)) format = format.replace(RegExp.$1, String(date.getFullYear()).substr(4 - RegExp.$1.length));
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(String(o[k]).length));
    }
  }
  return format;
}

function relativeDate(v) {
  var now = new Date();
  var time = new Date(v);
  var span = now - time;
  var day = Math.floor(span / 86400000);
  var hour = Math.floor(span / 3600000);
  var minute = Math.floor(span / 60000);
  // var second = Math.floor(span / 1000)

  if (day > 1) {
    return this.formatDate(time, 'yyyy-MM-dd hh:mm');
  } else if (day > 0 && day <= 1) {
    return day.toString() + '\u5929\u524D';
  } else if (hour > 0) {
    return hour.toString() + '\u5C0F\u65F6\u524D';
  } else if (minute > 0) {
    return minute.toString() + '\u5206\u949F\u524D';
  }
  return '刚刚';
}



/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isIdCard; });
function isIdCard(card) {
  var reg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/;
  return {
    valid: reg.test(card),
    msg: '身份证号不正确'
  };
}



/***/ })
/******/ ]);
});
//# sourceMappingURL=vue-xy-ui.js.map