"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Status = _interopRequireDefault(require("../com.remoteflags.model/Status"));

var _Usage = _interopRequireDefault(require("../com.remoteflags.model/Usage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Public service.
* @module com.remoteflags.api/PublicApi
* @version 1.0.8
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
   * @param {String} id 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
   */


  _createClass(PublicApi, [{
    key: "devToggleIdOptionsWithHttpInfo",
    value: function devToggleIdOptionsWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling devToggleIdOptions");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/dev-toggle/{id}', 'OPTIONS', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "devToggleIdOptions",
    value: function devToggleIdOptions(id) {
      return this.devToggleIdOptionsWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get a flag status for 1 click toggle.
     * Use this operation to get a flag status from remoteflags for 1 click toggle.
     * @param {String} id Id to fetch status for
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.remoteflags.model/Status} and HTTP response
     */

  }, {
    key: "get1ClickStatusWithHttpInfo",
    value: function get1ClickStatusWithHttpInfo(id) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling get1ClickStatus");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/html', 'application/json'];
      var returnType = _Status["default"];
      return this.apiClient.callApi('/dev-toggle/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get a flag status for 1 click toggle.
     * Use this operation to get a flag status from remoteflags for 1 click toggle.
     * @param {String} id Id to fetch status for
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.remoteflags.model/Status}
     */

  }, {
    key: "get1ClickStatus",
    value: function get1ClickStatus(id) {
      return this.get1ClickStatusWithHttpInfo(id).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get a flag usage data.
     * Use this operation to get flag usage data from remoteflags.
     * @param {String} ownerId OwnerID to fetch usage for
     * @param {String} flagId FlagId to fetch usage for
     * @param {Object} opts Optional parameters
     * @param {String} opts.from Get usage data starting from this timestamp. If skipped, will default to 30 days ago.
     * @param {String} opts.to Get usage data ending on this timestamp. If skipped, will default to current date.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.remoteflags.model/Usage} and HTTP response
     */

  }, {
    key: "getFlagUsageWithHttpInfo",
    value: function getFlagUsageWithHttpInfo(ownerId, flagId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'ownerId' is set

      if (ownerId === undefined || ownerId === null) {
        throw new Error("Missing the required parameter 'ownerId' when calling getFlagUsage");
      } // verify the required parameter 'flagId' is set


      if (flagId === undefined || flagId === null) {
        throw new Error("Missing the required parameter 'flagId' when calling getFlagUsage");
      }

      var pathParams = {
        'ownerId': ownerId,
        'flagId': flagId
      };
      var queryParams = {
        'from': opts['from'],
        'to': opts['to']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['RemoteFlagsAuthorizer'];
      var contentTypes = [];
      var accepts = ['text/html', 'application/json'];
      var returnType = _Usage["default"];
      return this.apiClient.callApi('/usage/owner/{ownerId}/flag/{flagId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get a flag usage data.
     * Use this operation to get flag usage data from remoteflags.
     * @param {String} ownerId OwnerID to fetch usage for
     * @param {String} flagId FlagId to fetch usage for
     * @param {Object} opts Optional parameters
     * @param {String} opts.from Get usage data starting from this timestamp. If skipped, will default to 30 days ago.
     * @param {String} opts.to Get usage data ending on this timestamp. If skipped, will default to current date.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.remoteflags.model/Usage}
     */

  }, {
    key: "getFlagUsage",
    value: function getFlagUsage(ownerId, flagId, opts) {
      return this.getFlagUsageWithHttpInfo(ownerId, flagId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get usage data for an owner.
     * Use this operation to get owner usage data from remoteflags.
     * @param {String} ownerId OwnerID to fetch usage for
     * @param {Object} opts Optional parameters
     * @param {String} opts.from Get usage data starting from this timestamp. If skipped, will default to 30 days ago.
     * @param {String} opts.to Get usage data ending on this timestamp. If skipped, will default to current date.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.remoteflags.model/Usage} and HTTP response
     */

  }, {
    key: "getOwnerUsageWithHttpInfo",
    value: function getOwnerUsageWithHttpInfo(ownerId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'ownerId' is set

      if (ownerId === undefined || ownerId === null) {
        throw new Error("Missing the required parameter 'ownerId' when calling getOwnerUsage");
      }

      var pathParams = {
        'ownerId': ownerId
      };
      var queryParams = {
        'from': opts['from'],
        'to': opts['to']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['RemoteFlagsAuthorizer'];
      var contentTypes = [];
      var accepts = ['text/html', 'application/json'];
      var returnType = _Usage["default"];
      return this.apiClient.callApi('/usage/owner/{ownerId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get usage data for an owner.
     * Use this operation to get owner usage data from remoteflags.
     * @param {String} ownerId OwnerID to fetch usage for
     * @param {Object} opts Optional parameters
     * @param {String} opts.from Get usage data starting from this timestamp. If skipped, will default to 30 days ago.
     * @param {String} opts.to Get usage data ending on this timestamp. If skipped, will default to current date.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.remoteflags.model/Usage}
     */

  }, {
    key: "getOwnerUsage",
    value: function getOwnerUsage(ownerId, opts) {
      return this.getOwnerUsageWithHttpInfo(ownerId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get a flag status.
     * Use this operation to get a flag status from remoteflags.
     * @param {String} ownerId OwnerID to fetch status for
     * @param {String} flagId FlagId to fetch status for
     * @param {Object} opts Optional parameters
     * @param {String} opts.segment The segment to get status from. Required for multi-segment flags. For single segment flag skip this.
     * @param {String} opts.key An identifier to be a key to associate the status with. This is used on flag which status you need to be consistent after the first random generated. For always random status behavior skip this.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.remoteflags.model/Status} and HTTP response
     */

  }, {
    key: "getStatusWithHttpInfo",
    value: function getStatusWithHttpInfo(ownerId, flagId, opts) {
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
      var accepts = ['text/html', 'application/json'];
      var returnType = _Status["default"];
      return this.apiClient.callApi('/status/owner/{ownerId}/flag/{flagId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get a flag status.
     * Use this operation to get a flag status from remoteflags.
     * @param {String} ownerId OwnerID to fetch status for
     * @param {String} flagId FlagId to fetch status for
     * @param {Object} opts Optional parameters
     * @param {String} opts.segment The segment to get status from. Required for multi-segment flags. For single segment flag skip this.
     * @param {String} opts.key An identifier to be a key to associate the status with. This is used on flag which status you need to be consistent after the first random generated. For always random status behavior skip this.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.remoteflags.model/Status}
     */

  }, {
    key: "getStatus",
    value: function getStatus(ownerId, flagId, opts) {
      return this.getStatusWithHttpInfo(ownerId, flagId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} ownerId 
     * @param {String} flagId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "statusOwnerOwnerIdFlagFlagIdOptionsWithHttpInfo",
    value: function statusOwnerOwnerIdFlagFlagIdOptionsWithHttpInfo(ownerId, flagId) {
      var postBody = null; // verify the required parameter 'ownerId' is set

      if (ownerId === undefined || ownerId === null) {
        throw new Error("Missing the required parameter 'ownerId' when calling statusOwnerOwnerIdFlagFlagIdOptions");
      } // verify the required parameter 'flagId' is set


      if (flagId === undefined || flagId === null) {
        throw new Error("Missing the required parameter 'flagId' when calling statusOwnerOwnerIdFlagFlagIdOptions");
      }

      var pathParams = {
        'ownerId': ownerId,
        'flagId': flagId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/status/owner/{ownerId}/flag/{flagId}', 'OPTIONS', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} ownerId 
     * @param {String} flagId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "statusOwnerOwnerIdFlagFlagIdOptions",
    value: function statusOwnerOwnerIdFlagFlagIdOptions(ownerId, flagId) {
      return this.statusOwnerOwnerIdFlagFlagIdOptionsWithHttpInfo(ownerId, flagId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} ownerId 
     * @param {String} flagId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "usageOwnerOwnerIdFlagFlagIdOptionsWithHttpInfo",
    value: function usageOwnerOwnerIdFlagFlagIdOptionsWithHttpInfo(ownerId, flagId) {
      var postBody = null; // verify the required parameter 'ownerId' is set

      if (ownerId === undefined || ownerId === null) {
        throw new Error("Missing the required parameter 'ownerId' when calling usageOwnerOwnerIdFlagFlagIdOptions");
      } // verify the required parameter 'flagId' is set


      if (flagId === undefined || flagId === null) {
        throw new Error("Missing the required parameter 'flagId' when calling usageOwnerOwnerIdFlagFlagIdOptions");
      }

      var pathParams = {
        'ownerId': ownerId,
        'flagId': flagId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/usage/owner/{ownerId}/flag/{flagId}', 'OPTIONS', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} ownerId 
     * @param {String} flagId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "usageOwnerOwnerIdFlagFlagIdOptions",
    value: function usageOwnerOwnerIdFlagFlagIdOptions(ownerId, flagId) {
      return this.usageOwnerOwnerIdFlagFlagIdOptionsWithHttpInfo(ownerId, flagId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @param {String} ownerId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "usageOwnerOwnerIdOptionsWithHttpInfo",
    value: function usageOwnerOwnerIdOptionsWithHttpInfo(ownerId) {
      var postBody = null; // verify the required parameter 'ownerId' is set

      if (ownerId === undefined || ownerId === null) {
        throw new Error("Missing the required parameter 'ownerId' when calling usageOwnerOwnerIdOptions");
      }

      var pathParams = {
        'ownerId': ownerId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/usage/owner/{ownerId}', 'OPTIONS', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * @param {String} ownerId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "usageOwnerOwnerIdOptions",
    value: function usageOwnerOwnerIdOptions(ownerId) {
      return this.usageOwnerOwnerIdOptionsWithHttpInfo(ownerId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return PublicApi;
}();

exports["default"] = PublicApi;