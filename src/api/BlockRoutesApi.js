/**
 * Catapult REST API Reference
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.7.15
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import BlockInfoDTO from '../model/BlockInfoDTO';
import MerkleProofInfoDTO from '../model/MerkleProofInfoDTO';
import StatementsDTO from '../model/StatementsDTO';

/**
* BlockRoutes service.
* @module api/BlockRoutesApi
* @version 0.7.15
*/
export default class BlockRoutesApi {

    /**
    * Constructs a new BlockRoutesApi. 
    * @alias module:api/BlockRoutesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get block information
     * Gets a block from the chain that has the given height.
     * @param {Number} height The height of the block.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BlockInfoDTO} and HTTP response
     */
    getBlockByHeightWithHttpInfo(height) {
      let postBody = null;

      // verify the required parameter 'height' is set
      if (height === undefined || height === null) {
        throw new Error("Missing the required parameter 'height' when calling getBlockByHeight");
      }


      let pathParams = {
        'height': height
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
      let returnType = BlockInfoDTO;

      return this.apiClient.callApi(
        '/block/{height}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get block information
     * Gets a block from the chain that has the given height.
     * @param {Number} height The height of the block.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BlockInfoDTO}
     */
    getBlockByHeight(height) {
      return this.getBlockByHeightWithHttpInfo(height)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get receipts from a block
     * Returns the receipts linked to a block.
     * @param {Number} height The height of the block.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StatementsDTO} and HTTP response
     */
    getBlockReceiptsWithHttpInfo(height) {
      let postBody = null;

      // verify the required parameter 'height' is set
      if (height === undefined || height === null) {
        throw new Error("Missing the required parameter 'height' when calling getBlockReceipts");
      }


      let pathParams = {
        'height': height
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
      let returnType = StatementsDTO;

      return this.apiClient.callApi(
        '/block/{height}/receipts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get receipts from a block
     * Returns the receipts linked to a block.
     * @param {Number} height The height of the block.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StatementsDTO}
     */
    getBlockReceipts(height) {
      return this.getBlockReceiptsWithHttpInfo(height)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get transactions from a block
     * Returns an array of transactions included in a block for a given block height.
     * @param {Number} height The height of the block.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of transactions to return for each request. (default to 10)
     * @param {String} opts.id The transaction id up to which transactions are returned.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<Object>} and HTTP response
     */
    getBlockTransactionsWithHttpInfo(height, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'height' is set
      if (height === undefined || height === null) {
        throw new Error("Missing the required parameter 'height' when calling getBlockTransactions");
      }


      let pathParams = {
        'height': height
      };
      let queryParams = {
        'pageSize': opts['pageSize'],
        'id': opts['id']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Object];

      return this.apiClient.callApi(
        '/block/{height}/transactions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get transactions from a block
     * Returns an array of transactions included in a block for a given block height.
     * @param {Number} height The height of the block.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of transactions to return for each request. (default to 10)
     * @param {String} opts.id The transaction id up to which transactions are returned.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<Object>}
     */
    getBlockTransactions(height, opts) {
      return this.getBlockTransactionsWithHttpInfo(height, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get blocks information
     * Gets up to limit number of blocks after given block height.
     * @param {Number} height The height of the block. If height -1 is not a multiple of the limit provided, the inferior closest multiple + 1 is used instead.
     * @param {Number} limit The number of blocks to be returned.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/BlockInfoDTO>} and HTTP response
     */
    getBlocksByHeightWithLimitWithHttpInfo(height, limit) {
      let postBody = null;

      // verify the required parameter 'height' is set
      if (height === undefined || height === null) {
        throw new Error("Missing the required parameter 'height' when calling getBlocksByHeightWithLimit");
      }

      // verify the required parameter 'limit' is set
      if (limit === undefined || limit === null) {
        throw new Error("Missing the required parameter 'limit' when calling getBlocksByHeightWithLimit");
      }


      let pathParams = {
        'height': height,
        'limit': limit
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
      let returnType = [BlockInfoDTO];

      return this.apiClient.callApi(
        '/blocks/{height}/limit/{limit}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get blocks information
     * Gets up to limit number of blocks after given block height.
     * @param {Number} height The height of the block. If height -1 is not a multiple of the limit provided, the inferior closest multiple + 1 is used instead.
     * @param {Number} limit The number of blocks to be returned.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/BlockInfoDTO>}
     */
    getBlocksByHeightWithLimit(height, limit) {
      return this.getBlocksByHeightWithLimitWithHttpInfo(height, limit)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the merkle path for a given a receipt statement hash and block
     * Returns the merkle path for a receipt statement or resolution linked to a block. The path is the complementary data needed to calculate the merkle root. A client can compare if the calculated root equals the one recorded in the block header, verifying that the receipt was linked with the block. 
     * @param {Number} height The height of the block.
     * @param {String} hash The hash of the receipt statement or resolution.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MerkleProofInfoDTO} and HTTP response
     */
    getMerkleReceiptsWithHttpInfo(height, hash) {
      let postBody = null;

      // verify the required parameter 'height' is set
      if (height === undefined || height === null) {
        throw new Error("Missing the required parameter 'height' when calling getMerkleReceipts");
      }

      // verify the required parameter 'hash' is set
      if (hash === undefined || hash === null) {
        throw new Error("Missing the required parameter 'hash' when calling getMerkleReceipts");
      }


      let pathParams = {
        'height': height,
        'hash': hash
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
      let returnType = MerkleProofInfoDTO;

      return this.apiClient.callApi(
        '/block/{height}/receipt/{hash}/merkle', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get the merkle path for a given a receipt statement hash and block
     * Returns the merkle path for a receipt statement or resolution linked to a block. The path is the complementary data needed to calculate the merkle root. A client can compare if the calculated root equals the one recorded in the block header, verifying that the receipt was linked with the block. 
     * @param {Number} height The height of the block.
     * @param {String} hash The hash of the receipt statement or resolution.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MerkleProofInfoDTO}
     */
    getMerkleReceipts(height, hash) {
      return this.getMerkleReceiptsWithHttpInfo(height, hash)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the merkle path for a given a transaction and block
     * Returns the merkle path for a transaction included in a block. The path is the complementary data needed to calculate the merkle root. A client can compare if the calculated root equals the one recorded in the block header, verifying that the transaction was included in the block. 
     * @param {Number} height The height of the block.
     * @param {String} hash The hash of the transaction.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MerkleProofInfoDTO} and HTTP response
     */
    getMerkleTransactionWithHttpInfo(height, hash) {
      let postBody = null;

      // verify the required parameter 'height' is set
      if (height === undefined || height === null) {
        throw new Error("Missing the required parameter 'height' when calling getMerkleTransaction");
      }

      // verify the required parameter 'hash' is set
      if (hash === undefined || hash === null) {
        throw new Error("Missing the required parameter 'hash' when calling getMerkleTransaction");
      }


      let pathParams = {
        'height': height,
        'hash': hash
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
      let returnType = MerkleProofInfoDTO;

      return this.apiClient.callApi(
        '/block/{height}/transaction/{hash}/merkle', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get the merkle path for a given a transaction and block
     * Returns the merkle path for a transaction included in a block. The path is the complementary data needed to calculate the merkle root. A client can compare if the calculated root equals the one recorded in the block header, verifying that the transaction was included in the block. 
     * @param {Number} height The height of the block.
     * @param {String} hash The hash of the transaction.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MerkleProofInfoDTO}
     */
    getMerkleTransaction(height, hash) {
      return this.getMerkleTransactionWithHttpInfo(height, hash)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
