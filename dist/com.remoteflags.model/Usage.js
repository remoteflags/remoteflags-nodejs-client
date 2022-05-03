"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _UsageRequestsPerMonth = _interopRequireDefault(require("./UsageRequestsPerMonth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The Usage model module.
 * @module com.remoteflags.model/Usage
 * @version 1.0.7
 */
var Usage = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Usage</code>.
   * @alias module:com.remoteflags.model/Usage
   * @param requests {Number} Returned sum of requests
   * @param requestsPerMonth {Array.<module:com.remoteflags.model/UsageRequestsPerMonth>} Requests per month
   */
  function Usage(requests, requestsPerMonth) {
    _classCallCheck(this, Usage);

    Usage.initialize(this, requests, requestsPerMonth);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Usage, null, [{
    key: "initialize",
    value: function initialize(obj, requests, requestsPerMonth) {
      obj['requests'] = requests;
      obj['requestsPerMonth'] = requestsPerMonth;
    }
    /**
     * Constructs a <code>Usage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.remoteflags.model/Usage} obj Optional instance to populate.
     * @return {module:com.remoteflags.model/Usage} The populated <code>Usage</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Usage();

        if (data.hasOwnProperty('requests')) {
          obj['requests'] = _ApiClient["default"].convertToType(data['requests'], 'Number');
        }

        if (data.hasOwnProperty('requestsPerMonth')) {
          obj['requestsPerMonth'] = _ApiClient["default"].convertToType(data['requestsPerMonth'], [_UsageRequestsPerMonth["default"]]);
        }
      }

      return obj;
    }
  }]);

  return Usage;
}();
/**
 * Returned sum of requests
 * @member {Number} requests
 */


Usage.prototype['requests'] = undefined;
/**
 * Requests per month
 * @member {Array.<module:com.remoteflags.model/UsageRequestsPerMonth>} requestsPerMonth
 */

Usage.prototype['requestsPerMonth'] = undefined;
var _default = Usage;
exports["default"] = _default;