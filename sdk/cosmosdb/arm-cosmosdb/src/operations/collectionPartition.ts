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
import * as Mappers from "../models/collectionPartitionMappers";
import * as Parameters from "../models/parameters";
import { CosmosDBManagementClientContext } from "../cosmosDBManagementClientContext";

/** Class representing a CollectionPartition. */
export class CollectionPartition {
  private readonly client: CosmosDBManagementClientContext;

  /**
   * Create a CollectionPartition.
   * @param {CosmosDBManagementClientContext} client Reference to the service client.
   */
  constructor(client: CosmosDBManagementClientContext) {
    this.client = client;
  }

  /**
   * Retrieves the metrics determined by the given filter for the given collection, split by
   * partition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseRid Cosmos DB database rid.
   * @param collectionRid Cosmos DB collection rid.
   * @param filter An OData filter expression that describes a subset of metrics to return. The
   * parameters that can be filtered are name.value (name of the metric, can have an or of multiple
   * names), startTime, endTime, and timeGrain. The supported operator is eq.
   * @param [options] The optional parameters
   * @returns Promise<Models.CollectionPartitionListMetricsResponse>
   */
  listMetrics(resourceGroupName: string, accountName: string, databaseRid: string, collectionRid: string, filter: string, options?: msRest.RequestOptionsBase): Promise<Models.CollectionPartitionListMetricsResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseRid Cosmos DB database rid.
   * @param collectionRid Cosmos DB collection rid.
   * @param filter An OData filter expression that describes a subset of metrics to return. The
   * parameters that can be filtered are name.value (name of the metric, can have an or of multiple
   * names), startTime, endTime, and timeGrain. The supported operator is eq.
   * @param callback The callback
   */
  listMetrics(resourceGroupName: string, accountName: string, databaseRid: string, collectionRid: string, filter: string, callback: msRest.ServiceCallback<Models.PartitionMetricListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseRid Cosmos DB database rid.
   * @param collectionRid Cosmos DB collection rid.
   * @param filter An OData filter expression that describes a subset of metrics to return. The
   * parameters that can be filtered are name.value (name of the metric, can have an or of multiple
   * names), startTime, endTime, and timeGrain. The supported operator is eq.
   * @param options The optional parameters
   * @param callback The callback
   */
  listMetrics(resourceGroupName: string, accountName: string, databaseRid: string, collectionRid: string, filter: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PartitionMetricListResult>): void;
  listMetrics(resourceGroupName: string, accountName: string, databaseRid: string, collectionRid: string, filter: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PartitionMetricListResult>, callback?: msRest.ServiceCallback<Models.PartitionMetricListResult>): Promise<Models.CollectionPartitionListMetricsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        databaseRid,
        collectionRid,
        filter,
        options
      },
      listMetricsOperationSpec,
      callback) as Promise<Models.CollectionPartitionListMetricsResponse>;
  }

  /**
   * Retrieves the usages (most recent storage data) for the given collection, split by partition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseRid Cosmos DB database rid.
   * @param collectionRid Cosmos DB collection rid.
   * @param [options] The optional parameters
   * @returns Promise<Models.CollectionPartitionListUsagesResponse>
   */
  listUsages(resourceGroupName: string, accountName: string, databaseRid: string, collectionRid: string, options?: Models.CollectionPartitionListUsagesOptionalParams): Promise<Models.CollectionPartitionListUsagesResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseRid Cosmos DB database rid.
   * @param collectionRid Cosmos DB collection rid.
   * @param callback The callback
   */
  listUsages(resourceGroupName: string, accountName: string, databaseRid: string, collectionRid: string, callback: msRest.ServiceCallback<Models.PartitionUsagesResult>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseRid Cosmos DB database rid.
   * @param collectionRid Cosmos DB collection rid.
   * @param options The optional parameters
   * @param callback The callback
   */
  listUsages(resourceGroupName: string, accountName: string, databaseRid: string, collectionRid: string, options: Models.CollectionPartitionListUsagesOptionalParams, callback: msRest.ServiceCallback<Models.PartitionUsagesResult>): void;
  listUsages(resourceGroupName: string, accountName: string, databaseRid: string, collectionRid: string, options?: Models.CollectionPartitionListUsagesOptionalParams | msRest.ServiceCallback<Models.PartitionUsagesResult>, callback?: msRest.ServiceCallback<Models.PartitionUsagesResult>): Promise<Models.CollectionPartitionListUsagesResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        databaseRid,
        collectionRid,
        options
      },
      listUsagesOperationSpec,
      callback) as Promise<Models.CollectionPartitionListUsagesResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listMetricsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/databases/{databaseRid}/collections/{collectionRid}/partitions/metrics",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.databaseRid,
    Parameters.collectionRid
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PartitionMetricListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listUsagesOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/databases/{databaseRid}/collections/{collectionRid}/partitions/usages",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.databaseRid,
    Parameters.collectionRid
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PartitionUsagesResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
