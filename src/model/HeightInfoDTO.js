/**
 * Catapult REST API Reference
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 0.7.15
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The HeightInfoDTO model module.
 * @module model/HeightInfoDTO
 * @version 0.7.15
 */
class HeightInfoDTO {
    /**
     * Constructs a new <code>HeightInfoDTO</code>.
     * @alias module:model/HeightInfoDTO
     * @param height {Array.<Number>} 
     */
    constructor(height) { 
        
        HeightInfoDTO.initialize(this, height);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, height) { 
        obj['height'] = height;
    }

    /**
     * Constructs a <code>HeightInfoDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HeightInfoDTO} obj Optional instance to populate.
     * @return {module:model/HeightInfoDTO} The populated <code>HeightInfoDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HeightInfoDTO();

            if (data.hasOwnProperty('height')) {
                obj['height'] = ApiClient.convertToType(data['height'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<Number>} height
 */
HeightInfoDTO.prototype['height'] = undefined;






export default HeightInfoDTO;
