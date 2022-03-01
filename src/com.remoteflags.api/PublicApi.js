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

/**
* Public service.
* @module com.remoteflags.api/PublicApi
* @version 1.0.6
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


}
