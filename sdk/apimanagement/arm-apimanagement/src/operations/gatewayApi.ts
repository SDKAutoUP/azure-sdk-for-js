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
import * as Mappers from "../models/gatewayApiMappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClientContext } from "../apiManagementClientContext";

/** Class representing a GatewayApi. */
export class GatewayApi {
  private readonly client: ApiManagementClientContext;

  /**
   * Create a GatewayApi.
   * @param {ApiManagementClientContext} client Reference to the service client.
   */
  constructor(client: ApiManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists a collection of the APIs associated with a gateway.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param gatewayId Gateway entity identifier. Must be unique in the current API Management service
   * instance. Must not have value 'managed'
   * @param [options] The optional parameters
   * @returns Promise<Models.GatewayApiListByServiceResponse>
   */
  listByService(resourceGroupName: string, serviceName: string, gatewayId: string, options?: Models.GatewayApiListByServiceOptionalParams): Promise<Models.GatewayApiListByServiceResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param gatewayId Gateway entity identifier. Must be unique in the current API Management service
   * instance. Must not have value 'managed'
   * @param callback The callback
   */
  listByService(resourceGroupName: string, serviceName: string, gatewayId: string, callback: msRest.ServiceCallback<Models.ApiCollection>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param gatewayId Gateway entity identifier. Must be unique in the current API Management service
   * instance. Must not have value 'managed'
   * @param options The optional parameters
   * @param callback The callback
   */
  listByService(resourceGroupName: string, serviceName: string, gatewayId: string, options: Models.GatewayApiListByServiceOptionalParams, callback: msRest.ServiceCallback<Models.ApiCollection>): void;
  listByService(resourceGroupName: string, serviceName: string, gatewayId: string, options?: Models.GatewayApiListByServiceOptionalParams | msRest.ServiceCallback<Models.ApiCollection>, callback?: msRest.ServiceCallback<Models.ApiCollection>): Promise<Models.GatewayApiListByServiceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        gatewayId,
        options
      },
      listByServiceOperationSpec,
      callback) as Promise<Models.GatewayApiListByServiceResponse>;
  }

  /**
   * Checks that API entity specified by identifier is associated with the Gateway entity.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param gatewayId Gateway entity identifier. Must be unique in the current API Management service
   * instance. Must not have value 'managed'
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param [options] The optional parameters
   * @returns Promise<Models.GatewayApiGetEntityTagResponse>
   */
  getEntityTag(resourceGroupName: string, serviceName: string, gatewayId: string, apiId: string, options?: msRest.RequestOptionsBase): Promise<Models.GatewayApiGetEntityTagResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param gatewayId Gateway entity identifier. Must be unique in the current API Management service
   * instance. Must not have value 'managed'
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param callback The callback
   */
  getEntityTag(resourceGroupName: string, serviceName: string, gatewayId: string, apiId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param gatewayId Gateway entity identifier. Must be unique in the current API Management service
   * instance. Must not have value 'managed'
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param options The optional parameters
   * @param callback The callback
   */
  getEntityTag(resourceGroupName: string, serviceName: string, gatewayId: string, apiId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  getEntityTag(resourceGroupName: string, serviceName: string, gatewayId: string, apiId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.GatewayApiGetEntityTagResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        gatewayId,
        apiId,
        options
      },
      getEntityTagOperationSpec,
      callback) as Promise<Models.GatewayApiGetEntityTagResponse>;
  }

  /**
   * Adds an API to the specified Gateway.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param gatewayId Gateway entity identifier. Must be unique in the current API Management service
   * instance. Must not have value 'managed'
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param [options] The optional parameters
   * @returns Promise<Models.GatewayApiCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, serviceName: string, gatewayId: string, apiId: string, options?: Models.GatewayApiCreateOrUpdateOptionalParams): Promise<Models.GatewayApiCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param gatewayId Gateway entity identifier. Must be unique in the current API Management service
   * instance. Must not have value 'managed'
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, serviceName: string, gatewayId: string, apiId: string, callback: msRest.ServiceCallback<Models.ApiContract>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param gatewayId Gateway entity identifier. Must be unique in the current API Management service
   * instance. Must not have value 'managed'
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, serviceName: string, gatewayId: string, apiId: string, options: Models.GatewayApiCreateOrUpdateOptionalParams, callback: msRest.ServiceCallback<Models.ApiContract>): void;
  createOrUpdate(resourceGroupName: string, serviceName: string, gatewayId: string, apiId: string, options?: Models.GatewayApiCreateOrUpdateOptionalParams | msRest.ServiceCallback<Models.ApiContract>, callback?: msRest.ServiceCallback<Models.ApiContract>): Promise<Models.GatewayApiCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        gatewayId,
        apiId,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.GatewayApiCreateOrUpdateResponse>;
  }

  /**
   * Deletes the specified API from the specified Gateway.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param gatewayId Gateway entity identifier. Must be unique in the current API Management service
   * instance. Must not have value 'managed'
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, serviceName: string, gatewayId: string, apiId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param gatewayId Gateway entity identifier. Must be unique in the current API Management service
   * instance. Must not have value 'managed'
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, serviceName: string, gatewayId: string, apiId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param gatewayId Gateway entity identifier. Must be unique in the current API Management service
   * instance. Must not have value 'managed'
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, serviceName: string, gatewayId: string, apiId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, serviceName: string, gatewayId: string, apiId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        gatewayId,
        apiId,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Lists a collection of the APIs associated with a gateway.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.GatewayApiListByServiceNextResponse>
   */
  listByServiceNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.GatewayApiListByServiceNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByServiceNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ApiCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByServiceNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApiCollection>): void;
  listByServiceNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApiCollection>, callback?: msRest.ServiceCallback<Models.ApiCollection>): Promise<Models.GatewayApiListByServiceNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByServiceNextOperationSpec,
      callback) as Promise<Models.GatewayApiListByServiceNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByServiceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/gateways/{gatewayId}/apis",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.gatewayId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.top,
    Parameters.skip,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ApiCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getEntityTagOperationSpec: msRest.OperationSpec = {
  httpMethod: "HEAD",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/gateways/{gatewayId}/apis/{apiId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.gatewayId,
    Parameters.apiId1,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      headersMapper: Mappers.GatewayApiGetEntityTagHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.GatewayApiGetEntityTagHeaders
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/gateways/{gatewayId}/apis/{apiId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.gatewayId,
    Parameters.apiId1,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "parameters"
    ],
    mapper: Mappers.AssociationContract
  },
  responses: {
    200: {
      bodyMapper: Mappers.ApiContract
    },
    201: {
      bodyMapper: Mappers.ApiContract
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/gateways/{gatewayId}/apis/{apiId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.gatewayId,
    Parameters.apiId1,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByServiceNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.ApiCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
