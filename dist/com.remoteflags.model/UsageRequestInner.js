"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The UsageRequestInner model module.
 * @module com.remoteflags.model/UsageRequestInner
 * @version 1.0.8
 */
var UsageRequestInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UsageRequestInner</code>.
   * @alias module:com.remoteflags.model/UsageRequestInner
   * @param flagId {String} 
   * @param date {String} 
   * @param flagProperties {Object} 
   */
  function UsageRequestInner(flagId, date, flagProperties) {
    _classCallCheck(this, UsageRequestInner);

    UsageRequestInner.initialize(this, flagId, date, flagProperties);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UsageRequestInner, null, [{
    key: "initialize",
    value: function initialize(obj, flagId, date, flagProperties) {
      obj['flagId'] = flagId;
      obj['date'] = date;
      obj['flagProperties'] = flagProperties;
    }
    /**
     * Constructs a <code>UsageRequestInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.remoteflags.model/UsageRequestInner} obj Optional instance to populate.
     * @return {module:com.remoteflags.model/UsageRequestInner} The populated <code>UsageRequestInner</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UsageRequestInner();

        if (data.hasOwnProperty('flagId')) {
          obj['flagId'] = _ApiClient["default"].convertToType(data['flagId'], 'String');
        }

        if (data.hasOwnProperty('date')) {
          obj['date'] = _ApiClient["default"].convertToType(data['date'], 'String');
        }

        if (data.hasOwnProperty('flagProperties')) {
          obj['flagProperties'] = _ApiClient["default"].convertToType(data['flagProperties'], Object);
        }
      }

      return obj;
    }
  }]);

  return UsageRequestInner;
}();
/**
 * @member {String} flagId
 */


UsageRequestInner.prototype['flagId'] = undefined;
/**
 * @member {String} date
 */

UsageRequestInner.prototype['date'] = undefined;
/**
 * @member {Object} flagProperties
 */

UsageRequestInner.prototype['flagProperties'] = undefined;
var _default = UsageRequestInner;
exports["default"] = _default;