/**
 * Remote Flags API
 * Remote Flags openapi definition. Public readonly API for integration with Remote Flags.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@remoteflags.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Status from '../com.remoteflags.model/Status';
import Usage from '../com.remoteflags.model/Usage';

/**
* Public service.
* @module com.remoteflags.api/PublicApi
* @version 1.0.8
*/
export default class PublicApi {

    /**
    * Constructs a new PublicApi. 
    * @alias module:com.remoteflags.api/PublicApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    devToggleIdOptionsWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling devToggleIdOptions");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/dev-toggle/{id}', 'OPTIONS',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    devToggleIdOptions(id) {
      return this.devToggleIdOptionsWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a flag status for 1 click toggle.
     * Use this operation to get a flag status from remoteflags for 1 click toggle.
     * @param {String} id Id to fetch status for
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:com.remoteflags.model/Status} and HTTP response
     */
    get1ClickStatusWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling get1ClickStatus");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/html', 'application/json'];
      let returnType = Status;
      return this.apiClient.callApi(
        '/dev-toggle/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get a flag status for 1 click toggle.
     * Use this operation to get a flag status from remoteflags for 1 click toggle.
     * @param {String} id Id to fetch status for
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:com.remoteflags.model/Status}
     */
    get1ClickStatus(id) {
      return this.get1ClickStatusWithHttpInfo(id)
        .then(function(response_and_data) {
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
    getFlagUsageWithHttpInfo(ownerId, flagId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'ownerId' is set
      if (ownerId === undefined || ownerId === null) {
        throw new Error("Missing the required parameter 'ownerId' when calling getFlagUsage");
      }
      // verify the required parameter 'flagId' is set
      if (flagId === undefined || flagId === null) {
        throw new Error("Missing the required parameter 'flagId' when calling getFlagUsage");
      }

      let pathParams = {
        'ownerId': ownerId,
        'flagId': flagId
      };
      let queryParams = {
        'from': opts['from'],
        'to': opts['to']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['RemoteFlagsAuthorizer'];
      let contentTypes = [];
      let accepts = ['text/html', 'application/json'];
      let returnType = Usage;
      return this.apiClient.callApi(
        '/usage/owner/{ownerId}/flag/{flagId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
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
    getFlagUsage(ownerId, flagId, opts) {
      return this.getFlagUsageWithHttpInfo(ownerId, flagId, opts)
        .then(function(response_and_data) {
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
    getOwnerUsageWithHttpInfo(ownerId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'ownerId' is set
      if (ownerId === undefined || ownerId === null) {
        throw new Error("Missing the required parameter 'ownerId' when calling getOwnerUsage");
      }

      let pathParams = {
        'ownerId': ownerId
      };
      let queryParams = {
        'from': opts['from'],
        'to': opts['to']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['RemoteFlagsAuthorizer'];
      let contentTypes = [];
      let accepts = ['text/html', 'application/json'];
      let returnType = Usage;
      return this.apiClient.callApi(
        '/usage/owner/{ownerId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
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
    getOwnerUsage(ownerId, opts) {
      return this.getOwnerUsageWithHttpInfo(ownerId, opts)
        .then(function(response_and_data) {
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
    getStatusWithHttpInfo(ownerId, flagId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'ownerId' is set
      if (ownerId === undefined || ownerId === null) {
        throw new Error("Missing the required parameter 'ownerId' when calling getStatus");
      }
      // verify the required parameter 'flagId' is set
      if (flagId === undefined || flagId === null) {
        throw new Error("Missing the required parameter 'flagId' when calling getStatus");
      }

      let pathParams = {
        'ownerId': ownerId,
        'flagId': flagId
      };
      let queryParams = {
        'segment': opts['segment'],
        'key': opts['key']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['RemoteFlagsAuthorizer'];
      let contentTypes = [];
      let accepts = ['text/html', 'application/json'];
      let returnType = Status;
      return this.apiClient.callApi(
        '/status/owner/{ownerId}/flag/{flagId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
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
    getStatus(ownerId, flagId, opts) {
      return this.getStatusWithHttpInfo(ownerId, flagId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} ownerId 
     * @param {String} flagId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    statusOwnerOwnerIdFlagFlagIdOptionsWithHttpInfo(ownerId, flagId) {
      let postBody = null;
      // verify the required parameter 'ownerId' is set
      if (ownerId === undefined || ownerId === null) {
        throw new Error("Missing the required parameter 'ownerId' when calling statusOwnerOwnerIdFlagFlagIdOptions");
      }
      // verify the required parameter 'flagId' is set
      if (flagId === undefined || flagId === null) {
        throw new Error("Missing the required parameter 'flagId' when calling statusOwnerOwnerIdFlagFlagIdOptions");
      }

      let pathParams = {
        'ownerId': ownerId,
        'flagId': flagId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/status/owner/{ownerId}/flag/{flagId}', 'OPTIONS',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {String} ownerId 
     * @param {String} flagId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    statusOwnerOwnerIdFlagFlagIdOptions(ownerId, flagId) {
      return this.statusOwnerOwnerIdFlagFlagIdOptionsWithHttpInfo(ownerId, flagId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} ownerId 
     * @param {String} flagId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    usageOwnerOwnerIdFlagFlagIdOptionsWithHttpInfo(ownerId, flagId) {
      let postBody = null;
      // verify the required parameter 'ownerId' is set
      if (ownerId === undefined || ownerId === null) {
        throw new Error("Missing the required parameter 'ownerId' when calling usageOwnerOwnerIdFlagFlagIdOptions");
      }
      // verify the required parameter 'flagId' is set
      if (flagId === undefined || flagId === null) {
        throw new Error("Missing the required parameter 'flagId' when calling usageOwnerOwnerIdFlagFlagIdOptions");
      }

      let pathParams = {
        'ownerId': ownerId,
        'flagId': flagId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/usage/owner/{ownerId}/flag/{flagId}', 'OPTIONS',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {String} ownerId 
     * @param {String} flagId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    usageOwnerOwnerIdFlagFlagIdOptions(ownerId, flagId) {
      return this.usageOwnerOwnerIdFlagFlagIdOptionsWithHttpInfo(ownerId, flagId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} ownerId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    usageOwnerOwnerIdOptionsWithHttpInfo(ownerId) {
      let postBody = null;
      // verify the required parameter 'ownerId' is set
      if (ownerId === undefined || ownerId === null) {
        throw new Error("Missing the required parameter 'ownerId' when calling usageOwnerOwnerIdOptions");
      }

      let pathParams = {
        'ownerId': ownerId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/usage/owner/{ownerId}', 'OPTIONS',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {String} ownerId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    usageOwnerOwnerIdOptions(ownerId) {
      return this.usageOwnerOwnerIdOptionsWithHttpInfo(ownerId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
