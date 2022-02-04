"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Status = _interopRequireDefault(require("../com.remoteflags.model/Status"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Public service.
* @module com.remoteflags.api/PublicApi
* @version 1.0.0
*/
var PublicApi = /*#__PURE__*/function () {
  /**
  * Constructs a new PublicApi. 
  * @alias module:com.remoteflags.api/PublicApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function PublicApi(apiClient) {
    _classCallCheck(this, PublicApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the getStatus operation.
   * @callback module:com.remoteflags.api/PublicApi~getStatusCallback
   * @param {String} error Error message, if any.
   * @param {module:com.remoteflags.model/Status} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get a flag status.
   * Use this operation to get a flag status from remoteflags.
   * @param {String} ownerId OwnerID to fetch status for
   * @param {String} flagId FlagId to fetch status for
   * @param {Object} opts Optional parameters
   * @param {String} opts.segment The segment to get status from. Required for multi-segment flags. For single segment flag skip this.
   * @param {String} opts.key An identifier to be a key to associate the status with. This is used on flag which status you need to be consistent after the first random generated. For always random status behavior skip this.
   * @param {module:com.remoteflags.api/PublicApi~getStatusCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:com.remoteflags.model/Status}
   */


  _createClass(PublicApi, [{
    key: "getStatus",
    value: function getStatus(ownerId, flagId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'ownerId' is set

      if (ownerId === undefined || ownerId === null) {
        throw new Error("Missing the required parameter 'ownerId' when calling getStatus");
      } // verify the required parameter 'flagId' is set


      if (flagId === undefined || flagId === null) {
        throw new Error("Missing the required parameter 'flagId' when calling getStatus");
      }

      var pathParams = {
        'ownerId': ownerId,
        'flagId': flagId
      };
      var queryParams = {
        'segment': opts['segment'],
        'key': opts['key']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['RemoteFlagsAuthorizer'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Status["default"];
      return this.apiClient.callApi('/status/owner/{ownerId}/flag/{flagId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return PublicApi;
}();

exports["default"] = PublicApi;