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
 * The UsageRequestsPerMonth model module.
 * @module com.remoteflags.model/UsageRequestsPerMonth
 * @version 1.0.7
 */
var UsageRequestsPerMonth = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UsageRequestsPerMonth</code>.
   * @alias module:com.remoteflags.model/UsageRequestsPerMonth
   * @param year {Number} 
   * @param month {Number} 
   * @param requests {Number} 
   */
  function UsageRequestsPerMonth(year, month, requests) {
    _classCallCheck(this, UsageRequestsPerMonth);

    UsageRequestsPerMonth.initialize(this, year, month, requests);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UsageRequestsPerMonth, null, [{
    key: "initialize",
    value: function initialize(obj, year, month, requests) {
      obj['year'] = year;
      obj['month'] = month;
      obj['requests'] = requests;
    }
    /**
     * Constructs a <code>UsageRequestsPerMonth</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.remoteflags.model/UsageRequestsPerMonth} obj Optional instance to populate.
     * @return {module:com.remoteflags.model/UsageRequestsPerMonth} The populated <code>UsageRequestsPerMonth</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UsageRequestsPerMonth();

        if (data.hasOwnProperty('year')) {
          obj['year'] = _ApiClient["default"].convertToType(data['year'], 'Number');
        }

        if (data.hasOwnProperty('month')) {
          obj['month'] = _ApiClient["default"].convertToType(data['month'], 'Number');
        }

        if (data.hasOwnProperty('requests')) {
          obj['requests'] = _ApiClient["default"].convertToType(data['requests'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return UsageRequestsPerMonth;
}();
/**
 * @member {Number} year
 */


UsageRequestsPerMonth.prototype['year'] = undefined;
/**
 * @member {Number} month
 */

UsageRequestsPerMonth.prototype['month'] = undefined;
/**
 * @member {Number} requests
 */

UsageRequestsPerMonth.prototype['requests'] = undefined;
var _default = UsageRequestsPerMonth;
exports["default"] = _default;