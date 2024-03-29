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

import ApiClient from '../ApiClient';

/**
 * The Status model module.
 * @module com.remoteflags.model/Status
 * @version 1.0.9
 */
class Status {
    /**
     * Constructs a new <code>Status</code>.
     * @alias module:com.remoteflags.model/Status
     * @param value {String} The current flag value as set at remoteflags.com 
     */
    constructor(value) { 
        
        Status.initialize(this, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, value) { 
        obj['value'] = value;
    }

    /**
     * Constructs a <code>Status</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.remoteflags.model/Status} obj Optional instance to populate.
     * @return {module:com.remoteflags.model/Status} The populated <code>Status</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Status();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The current flag value as set at remoteflags.com 
 * @member {String} value
 */
Status.prototype['value'] = undefined;






export default Status;

