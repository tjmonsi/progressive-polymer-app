/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(14);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import { Element } from 'polymer/polymer-element.html'
// System.import(/* webpackChunkName: "lazy-loaded" */ '../../src/pages/index/dependency.js').then(module => {
//   // module.default()
// })


// console.log(Polymer.PropertyAccessors)

var ProgressiveShell = function (_Polymer$PropertyAcce) {
  _inherits(ProgressiveShell, _Polymer$PropertyAcce);

  _createClass(ProgressiveShell, null, [{
    key: 'is',
    get: function get() {
      return 'progressive-shell';
    }
  }]);

  function ProgressiveShell() {
    _classCallCheck(this, ProgressiveShell);

    var _this = _possibleConstructorReturn(this, (ProgressiveShell.__proto__ || Object.getPrototypeOf(ProgressiveShell)).call(this));

    var shadowRoot = _this.attachShadow({
      mode: 'open'
    });
    shadowRoot.appendChild(document.createElement('slot'));
    return _this;
  }

  return ProgressiveShell;
}(Polymer.PropertyAccessors(window.HTMLElement));

window.customElements.define(ProgressiveShell.is, ProgressiveShell);

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
  'use strict';

  var userPolymer = window.Polymer;

  /**
   * @namespace Polymer
   * @summary Polymer is a lightweight library built on top of the web
   *   standards-based Web Components API's, and makes it easy to build your
   *   own custom HTML elements.
   * @param {!PolymerInit} info Prototype for the custom element. It must contain
   *   an `is` property to specify the element name. Other properties populate
   *   the element prototype. The `properties`, `observers`, `hostAttributes`,
   *   and `listeners` properties are processed to create element features.
   * @return {!Object} Returns a custom element class for the given provided
   *   prototype `info` object. The name of the element if given by `info.is`.
   */
  window.Polymer = function (info) {
    return window.Polymer._polymerFn(info);
  };

  // support user settings on the Polymer object
  if (userPolymer) {
    Object.assign(Polymer, userPolymer);
  }

  // To be plugged by legacy implementation if loaded
  /* eslint-disable valid-jsdoc */
  /**
   * @param {!PolymerInit} info Prototype for the custom element. It must contain
   *   an `is` property to specify the element name. Other properties populate
   *   the element prototype. The `properties`, `observers`, `hostAttributes`,
   *   and `listeners` properties are processed to create element features.
   * @return {!Object} Returns a custom element class for the given provided
   *   prototype `info` object. The name of the element if given by `info.is`.
   */
  window.Polymer._polymerFn = function (info) {
    // eslint-disable-line no-unused-vars
    throw new Error('Load polymer.html to use the Polymer() function.');
  };
  /* eslint-enable */

  window.Polymer.version = '2.0.1';

  /* eslint-disable no-unused-vars */
  /*
  When using Closure Compiler, JSCompiler_renameProperty(property, object) is replaced by the munged name for object[property]
  We cannot alias this function, so we have to use a small shim that has the same behavior when not compiling.
  */
  window.JSCompiler_renameProperty = function (prop, obj) {
    return prop;
  };
  /* eslint-enable */
})();

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);

(function () {

  'use strict';

  // unique global id for deduping mixins.

  var dedupeId = 0;

  /**
   * @constructor
   * @extends {Function}
   */
  function MixinFunction() {}
  /** @type {(WeakMap | undefined)} */
  MixinFunction.prototype.__mixinApplications;
  /** @type {(Object | undefined)} */
  MixinFunction.prototype.__mixinSet;

  /* eslint-disable valid-jsdoc */
  /**
   * Wraps an ES6 class expression mixin such that the mixin is only applied
   * if it has not already been applied its base argument.  Also memoizes mixin
   * applications.
   *
   * @memberof Polymer
   * @template T
   * @param {T} mixin ES6 class expression mixin to wrap
   * @suppress {invalidCasts}
   */
  Polymer.dedupingMixin = function (mixin) {
    var mixinApplications = /** @type {!MixinFunction} */mixin.__mixinApplications;
    if (!mixinApplications) {
      mixinApplications = new WeakMap();
      /** @type {!MixinFunction} */mixin.__mixinApplications = mixinApplications;
    }
    // maintain a unique id for each mixin
    var mixinDedupeId = dedupeId++;
    function dedupingMixin(base) {
      var baseSet = /** @type {!MixinFunction} */base.__mixinSet;
      if (baseSet && baseSet[mixinDedupeId]) {
        return base;
      }
      var map = mixinApplications;
      var extended = map.get(base);
      if (!extended) {
        extended = /** @type {!Function} */mixin(base);
        map.set(base, extended);
      }
      // copy inherited mixin set from the extended class, or the base class
      // NOTE: we avoid use of Set here because some browser (IE11)
      // cannot extend a base Set via the constructor.
      var mixinSet = Object.create( /** @type {!MixinFunction} */extended.__mixinSet || baseSet || null);
      mixinSet[mixinDedupeId] = true;
      /** @type {!MixinFunction} */extended.__mixinSet = mixinSet;
      return extended;
    }

    return dedupingMixin;
  };
  /* eslint-enable valid-jsdoc */
})();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);

(function () {
  'use strict';

  var caseMap = {};
  var DASH_TO_CAMEL = /-[a-z]/g;
  var CAMEL_TO_DASH = /([A-Z])/g;

  /**
   * Module with utilities for converting between "dash-case" and "camelCase"
   * identifiers.
   *
   * @namespace
   * @memberof Polymer
   * @summary Module that provides utilities for converting between "dash-case"
   *   and "camelCase".
   */
  var CaseMap = {

    /**
     * Converts "dash-case" identifier (e.g. `foo-bar-baz`) to "camelCase"
     * (e.g. `fooBarBaz`).
     *
     * @memberof Polymer.CaseMap
     * @param {string} dash Dash-case identifier
     * @return {string} Camel-case representation of the identifier
     */
    dashToCamelCase: function dashToCamelCase(dash) {
      return caseMap[dash] || (caseMap[dash] = dash.indexOf('-') < 0 ? dash : dash.replace(DASH_TO_CAMEL, function (m) {
        return m[1].toUpperCase();
      }));
    },


    /**
     * Converts "camelCase" identifier (e.g. `fooBarBaz`) to "dash-case"
     * (e.g. `foo-bar-baz`).
     *
     * @memberof Polymer.CaseMap
     * @param {string} camel Camel-case identifier
     * @return {string} Dash-case representation of the identifier
     */
    camelToDashCase: function camelToDashCase(camel) {
      return caseMap[camel] || (caseMap[camel] = camel.replace(CAMEL_TO_DASH, '-$1').toLowerCase());
    }
  };

  Polymer.CaseMap = CaseMap;
})();

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(3);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(15);

(function () {

  'use strict';

  var caseMap = Polymer.CaseMap;

  var microtask = Polymer.Async.microTask;

  // Save map of native properties; this forms a blacklist or properties
  // that won't have their values "saved" by `saveAccessorValue`, since
  // reading from an HTMLElement accessor from the context of a prototype throws
  var nativeProperties = {};
  var proto = HTMLElement.prototype;
  while (proto) {
    var props = Object.getOwnPropertyNames(proto);
    for (var i = 0; i < props.length; i++) {
      nativeProperties[props[i]] = true;
    }
    proto = Object.getPrototypeOf(proto);
  }

  /**
   * Used to save the value of a property that will be overridden with
   * an accessor. If the `model` is a prototype, the values will be saved
   * in `__dataProto`, and it's up to the user (or downstream mixin) to
   * decide how/when to set these values back into the accessors.
   * If `model` is already an instance (it has a `__data` property), then
   * the value will be set as a pending property, meaning the user should
   * call `_invalidateProperties` or `_flushProperties` to take effect
   *
   * @param {Object} model Prototype or instance
   * @param {string} property Name of property
   * @private
   */
  function saveAccessorValue(model, property) {
    // Don't read/store value for any native properties since they could throw
    if (!nativeProperties[property]) {
      var value = model[property];
      if (value !== undefined) {
        if (model.__data) {
          // Adding accessor to instance; update the property
          // It is the user's responsibility to call _flushProperties
          model._setPendingProperty(property, value);
        } else {
          // Adding accessor to proto; save proto's value for instance-time use
          if (!model.__dataProto) {
            model.__dataProto = {};
          } else if (!model.hasOwnProperty(JSCompiler_renameProperty('__dataProto', model))) {
            model.__dataProto = Object.create(model.__dataProto);
          }
          model.__dataProto[property] = value;
        }
      }
    }
  }

  /**
   * Element class mixin that provides basic meta-programming for creating one
   * or more property accessors (getter/setter pair) that enqueue an async
   * (batched) `_propertiesChanged` callback.
   *
   * For basic usage of this mixin, simply declare attributes to observe via
   * the standard `static get observedAttributes()`, implement `_propertiesChanged`
   * on the class, and then call `MyClass.createPropertiesForAttributes()` once
   * on the class to generate property accessors for each observed attribute
   * prior to instancing.  Last, call `this._flushProperties()` once to enable
   * the accessors.
   *
   * Any `observedAttributes` will automatically be
   * deserialized via `attributeChangedCallback` and set to the associated
   * property using `dash-case`-to-`camelCase` convention.
   *
   * @mixinFunction
   * @polymer
   * @memberof Polymer
   * @summary Element class mixin for reacting to property changes from
   *   generated property accessors.
   */
  Polymer.PropertyAccessors = Polymer.dedupingMixin(function (superClass) {

    /**
     * @polymer
     * @mixinClass
     * @implements {Polymer_PropertyAccessors}
     * @extends HTMLElement
     * @unrestricted
     */
    var PropertyAccessors = function (_superClass) {
      _inherits(PropertyAccessors, _superClass);

      _createClass(PropertyAccessors, null, [{
        key: 'createPropertiesForAttributes',


        /**
         * Generates property accessors for all attributes in the standard
         * static `observedAttributes` array.
         *
         * Attribute names are mapped to property names using the `dash-case` to
         * `camelCase` convention
         *
         */
        value: function createPropertiesForAttributes() {
          var a$ = this.observedAttributes;
          for (var _i = 0; _i < a$.length; _i++) {
            this.prototype._createPropertyAccessor(caseMap.dashToCamelCase(a$[_i]));
          }
        }
      }]);

      function PropertyAccessors() {
        _classCallCheck(this, PropertyAccessors);

        /** @type {boolean} */
        var _this = _possibleConstructorReturn(this, (PropertyAccessors.__proto__ || Object.getPrototypeOf(PropertyAccessors)).call(this));

        _this.__serializing;
        /** @type {number} */
        _this.__dataCounter;
        /** @type {boolean} */
        _this.__dataEnabled;
        /** @type {boolean} */
        _this.__dataReady;
        /** @type {boolean} */
        _this.__dataInvalid;
        /** @type {!Object} */
        _this.__data;
        /** @type {Object} */
        _this.__dataPending;
        /** @type {Object} */
        _this.__dataOld;
        /** @type {Object} */
        _this.__dataProto;
        /** @type {Object} */
        _this.__dataHasAccessor;
        /** @type {Object} */
        _this.__dataInstanceProps;
        _this._initializeProperties();
        return _this;
      }

      /**
       * Implements native Custom Elements `attributeChangedCallback` to
       * set an attribute value to a property via `_attributeToProperty`.
       *
       * @param {string} name Name of attribute that changed
       * @param {?string} old Old attribute value
       * @param {?string} value New attribute value
       */


      _createClass(PropertyAccessors, [{
        key: 'attributeChangedCallback',
        value: function attributeChangedCallback(name, old, value) {
          if (old !== value) {
            this._attributeToProperty(name, value);
          }
        }

        /**
         * Initializes the local storage for property accessors.
         *
         * Provided as an override point for performing any setup work prior
         * to initializing the property accessor system.
         *
         * @protected
         */

      }, {
        key: '_initializeProperties',
        value: function _initializeProperties() {
          this.__serializing = false;
          this.__dataCounter = 0;
          this.__dataEnabled = false;
          this.__dataReady = false;
          this.__dataInvalid = false;
          this.__data = {};
          this.__dataPending = null;
          this.__dataOld = null;
          if (this.__dataProto) {
            this._initializeProtoProperties(this.__dataProto);
            this.__dataProto = null;
          }
          // Capture instance properties; these will be set into accessors
          // during first flush. Don't set them here, since we want
          // these to overwrite defaults/constructor assignments
          for (var p in this.__dataHasAccessor) {
            if (this.hasOwnProperty(p)) {
              this.__dataInstanceProps = this.__dataInstanceProps || {};
              this.__dataInstanceProps[p] = this[p];
              delete this[p];
            }
          }
        }

        /**
         * Called at instance time with bag of properties that were overwritten
         * by accessors on the prototype when accessors were created.
         *
         * The default implementation sets these properties back into the
         * setter at instance time.  This method is provided as an override
         * point for customizing or providing more efficient initialization.
         *
         * @param {Object} props Bag of property values that were overwritten
         *   when creating property accessors.
         * @protected
         */

      }, {
        key: '_initializeProtoProperties',
        value: function _initializeProtoProperties(props) {
          for (var p in props) {
            this._setProperty(p, props[p]);
          }
        }

        /**
         * Called at ready time with bag of instance properties that overwrote
         * accessors when the element upgraded.
         *
         * The default implementation sets these properties back into the
         * setter at ready time.  This method is provided as an override
         * point for customizing or providing more efficient initialization.
         *
         * @param {Object} props Bag of property values that were overwritten
         *   when creating property accessors.
         * @protected
         */

      }, {
        key: '_initializeInstanceProperties',
        value: function _initializeInstanceProperties(props) {
          Object.assign(this, props);
        }

        /**
         * Ensures the element has the given attribute. If it does not,
         * assigns the given value to the attribute.
         *
         *
         * @param {string} attribute Name of attribute to ensure is set.
         * @param {string} value of the attribute.
         */

      }, {
        key: '_ensureAttribute',
        value: function _ensureAttribute(attribute, value) {
          if (!this.hasAttribute(attribute)) {
            this._valueToNodeAttribute(this, value, attribute);
          }
        }

        /**
         * Deserializes an attribute to its associated property.
         *
         * This method calls the `_deserializeValue` method to convert the string to
         * a typed value.
         *
         * @param {string} attribute Name of attribute to deserialize.
         * @param {?string} value of the attribute.
         * @param {*=} type type to deserialize to.
         */

      }, {
        key: '_attributeToProperty',
        value: function _attributeToProperty(attribute, value, type) {
          // Don't deserialize back to property if currently reflecting
          if (!this.__serializing) {
            var property = caseMap.dashToCamelCase(attribute);
            this[property] = this._deserializeValue(value, type);
          }
        }

        /**
         * Serializes a property to its associated attribute.
         *
         * @param {string} property Property name to reflect.
         * @param {string=} attribute Attribute name to reflect.
         * @param {*=} value Property value to refect.
         */

      }, {
        key: '_propertyToAttribute',
        value: function _propertyToAttribute(property, attribute, value) {
          this.__serializing = true;
          value = arguments.length < 3 ? this[property] : value;
          this._valueToNodeAttribute(this, value, attribute || caseMap.camelToDashCase(property));
          this.__serializing = false;
        }

        /**
         * Sets a typed value to an HTML attribute on a node.
         *
         * This method calls the `_serializeValue` method to convert the typed
         * value to a string.  If the `_serializeValue` method returns `undefined`,
         * the attribute will be removed (this is the default for boolean
         * type `false`).
         *
         * @param {Element} node Element to set attribute to.
         * @param {*} value Value to serialize.
         * @param {string} attribute Attribute name to serialize to.
         */

      }, {
        key: '_valueToNodeAttribute',
        value: function _valueToNodeAttribute(node, value, attribute) {
          var str = this._serializeValue(value);
          if (str === undefined) {
            node.removeAttribute(attribute);
          } else {
            node.setAttribute(attribute, str);
          }
        }

        /**
         * Converts a typed JavaScript value to a string.
         *
         * This method is called by Polymer when setting JS property values to
         * HTML attributes.  Users may override this method on Polymer element
         * prototypes to provide serialization for custom types.
         *
         * @param {*} value Property value to serialize.
         * @return {string | undefined} String serialized from the provided property value.
         */

      }, {
        key: '_serializeValue',
        value: function _serializeValue(value) {
          /* eslint-disable no-fallthrough */
          switch (typeof value === 'undefined' ? 'undefined' : _typeof(value)) {
            case 'boolean':
              return value ? '' : undefined;

            case 'object':
              if (value instanceof Date) {
                return value.toString();
              } else if (value) {
                try {
                  return JSON.stringify(value);
                } catch (x) {
                  return '';
                }
              }

            default:
              return value != null ? value.toString() : undefined;
          }
        }

        /**
         * Converts a string to a typed JavaScript value.
         *
         * This method is called by Polymer when reading HTML attribute values to
         * JS properties.  Users may override this method on Polymer element
         * prototypes to provide deserialization for custom `type`s.  Note,
         * the `type` argument is the value of the `type` field provided in the
         * `properties` configuration object for a given property, and is
         * by convention the constructor for the type to deserialize.
         *
         * Note: The return value of `undefined` is used as a sentinel value to
         * indicate the attribute should be removed.
         *
         * @param {?string} value Attribute value to deserialize.
         * @param {*=} type Type to deserialize the string to.
         * @return {*} Typed value deserialized from the provided string.
         */

      }, {
        key: '_deserializeValue',
        value: function _deserializeValue(value, type) {
          /**
           * @type {*}
           */
          var outValue = void 0;
          switch (type) {
            case Number:
              outValue = Number(value);
              break;

            case Boolean:
              outValue = value !== null;
              break;

            case Object:
              try {
                outValue = JSON.parse( /** @type string */value);
              } catch (x) {
                // allow non-JSON literals like Strings and Numbers
              }
              break;

            case Array:
              try {
                outValue = JSON.parse( /** @type string */value);
              } catch (x) {
                outValue = null;
                console.warn('Polymer::Attributes: couldn\'t decode Array as JSON: ' + value);
              }
              break;

            case Date:
              outValue = new Date(value);
              break;

            case String:
            default:
              outValue = value;
              break;
          }

          return outValue;
        }
        /* eslint-enable no-fallthrough */

        /**
         * Creates a setter/getter pair for the named property with its own
         * local storage.  The getter returns the value in the local storage,
         * and the setter calls `_setProperty`, which updates the local storage
         * for the property and enqueues a `_propertiesChanged` callback.
         *
         * This method may be called on a prototype or an instance.  Calling
         * this method may overwrite a property value that already exists on
         * the prototype/instance by creating the accessor.  When calling on
         * a prototype, any overwritten values are saved in `__dataProto`,
         * and it is up to the subclasser to decide how/when to set those
         * properties back into the accessor.  When calling on an instance,
         * the overwritten value is set via `_setPendingProperty`, and the
         * user should call `_invalidateProperties` or `_flushProperties`
         * for the values to take effect.
         *
         * @param {string} property Name of the property
         * @param {boolean=} readOnly When true, no setter is created; the
         *   protected `_setProperty` function must be used to set the property
         * @protected
         */

      }, {
        key: '_createPropertyAccessor',
        value: function _createPropertyAccessor(property, readOnly) {
          if (!this.hasOwnProperty('__dataHasAccessor')) {
            this.__dataHasAccessor = Object.assign({}, this.__dataHasAccessor);
          }
          if (!this.__dataHasAccessor[property]) {
            this.__dataHasAccessor[property] = true;
            saveAccessorValue(this, property);
            Object.defineProperty(this, property, {
              /* eslint-disable valid-jsdoc */
              /** @this {PropertyAccessors} */
              get: function get() {
                return this.__data[property];
              },
              /** @this {PropertyAccessors} */
              set: readOnly ? function () {} : function (value) {
                this._setProperty(property, value);
              }
              /* eslint-enable */
            });
          }
        }

        /**
         * Returns true if this library created an accessor for the given property.
         *
         * @param {string} property Property name
         * @return {boolean} True if an accessor was created
         */

      }, {
        key: '_hasAccessor',
        value: function _hasAccessor(property) {
          return this.__dataHasAccessor && this.__dataHasAccessor[property];
        }

        /**
         * Updates the local storage for a property (via `_setPendingProperty`)
         * and enqueues a `_proeprtiesChanged` callback.
         *
         * @param {string} property Name of the property
         * @param {*} value Value to set
         * @protected
         */

      }, {
        key: '_setProperty',
        value: function _setProperty(property, value) {
          if (this._setPendingProperty(property, value)) {
            this._invalidateProperties();
          }
        }

        /**
         * Updates the local storage for a property, records the previous value,
         * and adds it to the set of "pending changes" that will be passed to the
         * `_propertiesChanged` callback.  This method does not enqueue the
         * `_propertiesChanged` callback.
         *
         * @param {string} property Name of the property
         * @param {*} value Value to set
         * @return {boolean} Returns true if the property changed
         * @protected
         */

      }, {
        key: '_setPendingProperty',
        value: function _setPendingProperty(property, value) {
          var old = this.__data[property];
          var changed = this._shouldPropertyChange(property, value, old);
          if (changed) {
            if (!this.__dataPending) {
              this.__dataPending = {};
              this.__dataOld = {};
            }
            // Ensure old is captured from the last turn
            if (this.__dataOld && !(property in this.__dataOld)) {
              this.__dataOld[property] = old;
            }
            this.__data[property] = value;
            this.__dataPending[property] = value;
          }
          return changed;
        }

        /**
         * Returns true if the specified property has a pending change.
         *
         * @param {string} prop Property name
         * @return {boolean} True if property has a pending change
         * @protected
         */

      }, {
        key: '_isPropertyPending',
        value: function _isPropertyPending(prop) {
          return Boolean(this.__dataPending && prop in this.__dataPending);
        }

        /**
         * Marks the properties as invalid, and enqueues an async
         * `_propertiesChanged` callback.
         *
         * @protected
         */

      }, {
        key: '_invalidateProperties',
        value: function _invalidateProperties() {
          var _this2 = this;

          if (!this.__dataInvalid && this.__dataReady) {
            this.__dataInvalid = true;
            microtask.run(function () {
              if (_this2.__dataInvalid) {
                _this2.__dataInvalid = false;
                _this2._flushProperties();
              }
            });
          }
        }

        /**
         * Call to enable property accessor processing. Before this method is
         * called accessor values will be set but side effects are
         * queued. When called, any pending side effects occur immediately.
         * For elements, generally `connectedCallback` is a normal spot to do so.
         * It is safe to call this method multiple times as it only turns on
         * property accessors once.
         */

      }, {
        key: '_enableProperties',
        value: function _enableProperties() {
          if (!this.__dataEnabled) {
            this.__dataEnabled = true;
            if (this.__dataInstanceProps) {
              this._initializeInstanceProperties(this.__dataInstanceProps);
              this.__dataInstanceProps = null;
            }
            this.ready();
          }
        }

        /**
         * Calls the `_propertiesChanged` callback with the current set of
         * pending changes (and old values recorded when pending changes were
         * set), and resets the pending set of changes. Generally, this method
         * should not be called in user code.
         *
         *
         * @protected
         */

      }, {
        key: '_flushProperties',
        value: function _flushProperties() {
          if (this.__dataPending && this.__dataOld) {
            var changedProps = this.__dataPending;
            this.__dataPending = null;
            this.__dataCounter++;
            this._propertiesChanged(this.__data, changedProps, this.__dataOld);
            this.__dataCounter--;
          }
        }

        /**
         * Lifecycle callback called the first time properties are being flushed.
         * Prior to `ready`, all property sets through accessors are queued and
         * their effects are flushed after this method returns.
         *
         * Users may override this function to implement behavior that is
         * dependent on the element having its properties initialized, e.g.
         * from defaults (initialized from `constructor`, `_initializeProperties`),
         * `attributeChangedCallback`, or values propagated from host e.g. via
         * bindings.  `super.ready()` must be called to ensure the data system
         * becomes enabled.
         *
         * @public
         */

      }, {
        key: 'ready',
        value: function ready() {
          this.__dataReady = true;
          // Run normal flush
          this._flushProperties();
        }

        /**
         * Callback called when any properties with accessors created via
         * `_createPropertyAccessor` have been set.
         *
         * @param {!Object} currentProps Bag of all current accessor values
         * @param {!Object} changedProps Bag of properties changed since the last
         *   call to `_propertiesChanged`
         * @param {!Object} oldProps Bag of previous values for each property
         *   in `changedProps`
         * @protected
         */

      }, {
        key: '_propertiesChanged',
        value: function _propertiesChanged(currentProps, changedProps, oldProps) {} // eslint-disable-line no-unused-vars


        /**
         * Method called to determine whether a property value should be
         * considered as a change and cause the `_propertiesChanged` callback
         * to be enqueued.
         *
         * The default implementation returns `true` for primitive types if a
         * strict equality check fails, and returns `true` for all Object/Arrays.
         * The method always returns false for `NaN`.
         *
         * Override this method to e.g. provide stricter checking for
         * Objects/Arrays when using immutable patterns.
         *
         * @param {string} property Property name
         * @param {*} value New property value
         * @param {*} old Previous property value
         * @return {boolean} Whether the property should be considered a change
         *   and enqueue a `_proeprtiesChanged` callback
         * @protected
         */

      }, {
        key: '_shouldPropertyChange',
        value: function _shouldPropertyChange(property, value, old) {
          return (
            // Strict equality check
            old !== value && (
            // This ensures (old==NaN, value==NaN) always returns false
            old === old || value === value)
          );
        }
      }]);

      return PropertyAccessors;
    }(superClass);

    return PropertyAccessors;
  });
})();

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);

(function () {

  'use strict';

  /** @typedef {{run: function(function(), number=):number, cancel: function(number)}} */

  var AsyncInterface = void 0; // eslint-disable-line no-unused-vars

  // Microtask implemented using Mutation Observer
  var microtaskCurrHandle = 0;
  var microtaskLastHandle = 0;
  var microtaskCallbacks = [];
  var microtaskNodeContent = 0;
  var microtaskNode = document.createTextNode('');
  new window.MutationObserver(microtaskFlush).observe(microtaskNode, { characterData: true });

  function microtaskFlush() {
    var len = microtaskCallbacks.length;
    for (var i = 0; i < len; i++) {
      var cb = microtaskCallbacks[i];
      if (cb) {
        try {
          cb();
        } catch (e) {
          setTimeout(function () {
            throw e;
          });
        }
      }
    }
    microtaskCallbacks.splice(0, len);
    microtaskLastHandle += len;
  }

  /**
   * Module that provides a number of strategies for enqueuing asynchronous
   * tasks.  Each sub-module provides a standard `run(fn)` interface that returns a
   * handle, and a `cancel(handle)` interface for canceling async tasks before
   * they run.
   *
   * @namespace
   * @memberof Polymer
   * @summary Module that provides a number of strategies for enqueuing asynchronous
   * tasks.
   */
  Polymer.Async = {

    /**
     * Async interface wrapper around `setTimeout`.
     *
     * @namespace
     * @memberof Polymer.Async
     * @summary Async interface wrapper around `setTimeout`.
     */
    timeOut: {
      /**
       * Returns a sub-module with the async interface providing the provided
       * delay.
       *
       * @memberof Polymer.Async.timeOut
       * @param {number} delay Time to wait before calling callbacks in ms
       * @return {AsyncInterface} An async timeout interface
       */
      after: function after(delay) {
        return {
          run: function run(fn) {
            return setTimeout(fn, delay);
          },

          cancel: window.clearTimeout.bind(window)
        };
      },

      /**
       * Enqueues a function called in the next task.
       *
       * @memberof Polymer.Async.timeOut
       * @param {Function} fn Callback to run
       * @return {number} Handle used for canceling task
       */
      run: window.setTimeout.bind(window),
      /**
       * Cancels a previously enqueued `timeOut` callback.
       *
       * @memberof Polymer.Async.timeOut
       * @param {number} handle Handle returned from `run` of callback to cancel
       */
      cancel: window.clearTimeout.bind(window)
    },

    /**
     * Async interface wrapper around `requestAnimationFrame`.
     *
     * @namespace
     * @memberof Polymer.Async
     * @summary Async interface wrapper around `requestAnimationFrame`.
     */
    animationFrame: {
      /**
       * Enqueues a function called at `requestAnimationFrame` timing.
       *
       * @memberof Polymer.Async.animationFrame
       * @param {Function} fn Callback to run
       * @return {number} Handle used for canceling task
       */
      run: window.requestAnimationFrame.bind(window),
      /**
       * Cancels a previously enqueued `animationFrame` callback.
       *
       * @memberof Polymer.Async.timeOut
       * @param {number} handle Handle returned from `run` of callback to cancel
       */
      cancel: window.cancelAnimationFrame.bind(window)
    },

    /**
     * Async interface wrapper around `requestIdleCallback`.  Falls back to
     * `setTimeout` on browsers that do not support `requestIdleCallback`.
     *
     * @namespace
     * @memberof Polymer.Async
     * @summary Async interface wrapper around `requestIdleCallback`.
     */
    idlePeriod: {
      /**
       * Enqueues a function called at `requestIdleCallback` timing.
       *
       * @memberof Polymer.Async.idlePeriod
       * @param {function(IdleDeadline)} fn Callback to run
       * @return {number} Handle used for canceling task
       */
      run: function run(fn) {
        return window.requestIdleCallback ? window.requestIdleCallback(fn) : window.setTimeout(fn, 16);
      },

      /**
       * Cancels a previously enqueued `idlePeriod` callback.
       *
       * @memberof Polymer.Async.idlePeriod
       * @param {number} handle Handle returned from `run` of callback to cancel
       */
      cancel: function cancel(handle) {
        window.cancelIdleCallback ? window.cancelIdleCallback(handle) : window.clearTimeout(handle);
      }
    },

    /**
     * Async interface for enqueueing callbacks that run at microtask timing.
     *
     * Note that microtask timing is achieved via a single `MutationObserver`,
     * and thus callbacks enqueued with this API will all run in a single
     * batch, and not interleaved with other microtasks such as promises.
     * Promises are avoided as an implementation choice for the time being
     * due to Safari bugs that cause Promises to lack microtask guarantees.
     *
     * @namespace
     * @memberof Polymer.Async
     * @summary Async interface for enqueueing callbacks that run at microtask
     *   timing.
     */
    microTask: {

      /**
       * Enqueues a function called at microtask timing.
       *
       * @memberof Polymer.Async.microTask
       * @param {Function} callback Callback to run
       * @return {number} Handle used for canceling task
       */
      run: function run(callback) {
        microtaskNode.textContent = microtaskNodeContent++;
        microtaskCallbacks.push(callback);
        return microtaskCurrHandle++;
      },


      /**
       * Cancels a previously enqueued `microTask` callback.
       *
       * @memberof Polymer.Async.microTask
       * @param {number} handle Handle returned from `run` of callback to cancel
       */
      cancel: function cancel(handle) {
        var idx = handle - microtaskLastHandle;
        if (idx >= 0) {
          if (!microtaskCallbacks[idx]) {
            throw new Error('invalid async handle: ' + handle);
          }
          microtaskCallbacks[idx] = null;
        }
      }
    }
  };
})();

/***/ })
/******/ ]);