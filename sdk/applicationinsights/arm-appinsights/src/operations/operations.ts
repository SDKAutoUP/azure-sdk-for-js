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
import * as Mappers from "../models/operationsMappers";
import * as Parameters from "../models/parameters";
import { ApplicationInsightsManagementClientContext } from "../applicationInsightsManagementClientContext";

/** Class representing a Operations. */
export class Operations {
  private readonly client: ApplicationInsightsManagementClientContext;

  /**
   * Create a Operations.
   * @param {ApplicationInsightsManagementClientContext} client Reference to the service client.
   */
  constructor(client: ApplicationInsightsManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists all of the available insights REST API operations.
   * @param [options] The optional parameters
   * @returns Promise<Models.OperationsListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.OperationsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.OperationListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationListResult>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.OperationListResult>, callback?: msRest.ServiceCallback<Models.OperationListResult>): Promise<Models.OperationsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.OperationsListResponse>;
  }

  /**
   * List the available operations supported by the resource provider.
   * @summary List available operations.
   * @param [options] The optional parameters
   * @returns Promise<Models.OperationsList1Response>
   */
  list1(options?: msRest.RequestOptionsBase): Promise<Models.OperationsList1Response>;
  /**
   * @param callback The callback
   */
  list1(callback: msRest.ServiceCallback<Models.OperationsListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list1(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationsListResult>): void;
  list1(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.OperationsListResult>, callback?: msRest.ServiceCallback<Models.OperationsListResult>): Promise<Models.OperationsList1Response> {
    return this.client.sendOperationRequest(
      {
        options
      },
      list1OperationSpec,
      callback) as Promise<Models.OperationsList1Response>;
  }

  /**
   * Lists all of the available insights REST API operations.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.OperationsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.OperationsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.OperationListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.OperationListResult>, callback?: msRest.ServiceCallback<Models.OperationListResult>): Promise<Models.OperationsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.OperationsListNextResponse>;
  }

  /**
   * List the available operations supported by the resource provider.
   * @summary List available operations.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.OperationsList1NextResponse>
   */
  list1Next(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.OperationsList1NextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  list1Next(nextPageLink: string, callback: msRest.ServiceCallback<Models.OperationsListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  list1Next(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationsListResult>): void;
  list1Next(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.OperationsListResult>, callback?: msRest.ServiceCallback<Models.OperationsListResult>): Promise<Models.OperationsList1NextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      list1NextOperationSpec,
      callback) as Promise<Models.OperationsList1NextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Insights/operations",
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OperationListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const list1OperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/microsoft.insights/operations",
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OperationsListResult
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
      bodyMapper: Mappers.OperationListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const list1NextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.OperationsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
