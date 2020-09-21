/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/locationBasedRecommendedActionSessionsResultMappers";
import * as Parameters from "../models/parameters";
import { MySQLManagementClientContext } from "../mySQLManagementClientContext";

/** Class representing a LocationBasedRecommendedActionSessionsResult. */
export class LocationBasedRecommendedActionSessionsResult {
  private readonly client: MySQLManagementClientContext;

  /**
   * Create a LocationBasedRecommendedActionSessionsResult.
   * @param {MySQLManagementClientContext} client Reference to the service client.
   */
  constructor(client: MySQLManagementClientContext) {
    this.client = client;
  }

  /**
   * Recommendation action session operation result.
   * @param locationName The name of the location.
   * @param operationId The operation identifier.
   * @param [options] The optional parameters
   * @returns Promise<Models.LocationBasedRecommendedActionSessionsResultListResponse>
   */
  list(locationName: string, operationId: string, options?: msRest.RequestOptionsBase): Promise<Models.LocationBasedRecommendedActionSessionsResultListResponse>;
  /**
   * @param locationName The name of the location.
   * @param operationId The operation identifier.
   * @param callback The callback
   */
  list(locationName: string, operationId: string, callback: msRest.ServiceCallback<Models.RecommendationActionsResultList>): void;
  /**
   * @param locationName The name of the location.
   * @param operationId The operation identifier.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(locationName: string, operationId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RecommendationActionsResultList>): void;
  list(locationName: string, operationId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RecommendationActionsResultList>, callback?: msRest.ServiceCallback<Models.RecommendationActionsResultList>): Promise<Models.LocationBasedRecommendedActionSessionsResultListResponse> {
    return this.client.sendOperationRequest(
      {
        locationName,
        operationId,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.LocationBasedRecommendedActionSessionsResultListResponse>;
  }

  /**
   * Recommendation action session operation result.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.LocationBasedRecommendedActionSessionsResultListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.LocationBasedRecommendedActionSessionsResultListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.RecommendationActionsResultList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RecommendationActionsResultList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RecommendationActionsResultList>, callback?: msRest.ServiceCallback<Models.RecommendationActionsResultList>): Promise<Models.LocationBasedRecommendedActionSessionsResultListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.LocationBasedRecommendedActionSessionsResultListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.DBforMySQL/locations/{locationName}/recommendedActionSessionsOperationResults/{operationId}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.locationName,
    Parameters.operationId
  ],
  queryParameters: [
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RecommendationActionsResultList
    },
    201: {
      bodyMapper: Mappers.RecommendationActionsResultList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RecommendationActionsResultList
    },
    201: {
      bodyMapper: Mappers.RecommendationActionsResultList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
