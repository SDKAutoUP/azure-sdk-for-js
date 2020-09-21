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
import * as Mappers from "../models/alertsMappers";
import * as Parameters from "../models/parameters";
import { SecurityCenterContext } from "../securityCenterContext";

/** Class representing a Alerts. */
export class Alerts {
  private readonly client: SecurityCenterContext;

  /**
   * Create a Alerts.
   * @param {SecurityCenterContext} client Reference to the service client.
   */
  constructor(client: SecurityCenterContext) {
    this.client = client;
  }

  /**
   * List all the alerts that are associated with the subscription
   * @param [options] The optional parameters
   * @returns Promise<Models.AlertsListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.AlertsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.AlertList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AlertList>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AlertList>, callback?: msRest.ServiceCallback<Models.AlertList>): Promise<Models.AlertsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.AlertsListResponse>;
  }

  /**
   * List all the alerts that are associated with the resource group
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param [options] The optional parameters
   * @returns Promise<Models.AlertsListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.AlertsListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.AlertList>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AlertList>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AlertList>, callback?: msRest.ServiceCallback<Models.AlertList>): Promise<Models.AlertsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.AlertsListByResourceGroupResponse>;
  }

  /**
   * List all the alerts that are associated with the subscription that are stored in a specific
   * location
   * @param [options] The optional parameters
   * @returns Promise<Models.AlertsListSubscriptionLevelByRegionResponse>
   */
  listSubscriptionLevelByRegion(options?: msRest.RequestOptionsBase): Promise<Models.AlertsListSubscriptionLevelByRegionResponse>;
  /**
   * @param callback The callback
   */
  listSubscriptionLevelByRegion(callback: msRest.ServiceCallback<Models.AlertList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listSubscriptionLevelByRegion(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AlertList>): void;
  listSubscriptionLevelByRegion(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AlertList>, callback?: msRest.ServiceCallback<Models.AlertList>): Promise<Models.AlertsListSubscriptionLevelByRegionResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listSubscriptionLevelByRegionOperationSpec,
      callback) as Promise<Models.AlertsListSubscriptionLevelByRegionResponse>;
  }

  /**
   * List all the alerts that are associated with the resource group that are stored in a specific
   * location
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param [options] The optional parameters
   * @returns Promise<Models.AlertsListResourceGroupLevelByRegionResponse>
   */
  listResourceGroupLevelByRegion(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.AlertsListResourceGroupLevelByRegionResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param callback The callback
   */
  listResourceGroupLevelByRegion(resourceGroupName: string, callback: msRest.ServiceCallback<Models.AlertList>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param options The optional parameters
   * @param callback The callback
   */
  listResourceGroupLevelByRegion(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AlertList>): void;
  listResourceGroupLevelByRegion(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AlertList>, callback?: msRest.ServiceCallback<Models.AlertList>): Promise<Models.AlertsListResourceGroupLevelByRegionResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listResourceGroupLevelByRegionOperationSpec,
      callback) as Promise<Models.AlertsListResourceGroupLevelByRegionResponse>;
  }

  /**
   * Get an alert that is associated with a subscription
   * @param alertName Name of the alert object
   * @param [options] The optional parameters
   * @returns Promise<Models.AlertsGetSubscriptionLevelResponse>
   */
  getSubscriptionLevel(alertName: string, options?: msRest.RequestOptionsBase): Promise<Models.AlertsGetSubscriptionLevelResponse>;
  /**
   * @param alertName Name of the alert object
   * @param callback The callback
   */
  getSubscriptionLevel(alertName: string, callback: msRest.ServiceCallback<Models.Alert>): void;
  /**
   * @param alertName Name of the alert object
   * @param options The optional parameters
   * @param callback The callback
   */
  getSubscriptionLevel(alertName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Alert>): void;
  getSubscriptionLevel(alertName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Alert>, callback?: msRest.ServiceCallback<Models.Alert>): Promise<Models.AlertsGetSubscriptionLevelResponse> {
    return this.client.sendOperationRequest(
      {
        alertName,
        options
      },
      getSubscriptionLevelOperationSpec,
      callback) as Promise<Models.AlertsGetSubscriptionLevelResponse>;
  }

  /**
   * Get an alert that is associated a resource group or a resource in a resource group
   * @param alertName Name of the alert object
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param [options] The optional parameters
   * @returns Promise<Models.AlertsGetResourceGroupLevelResponse>
   */
  getResourceGroupLevel(alertName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.AlertsGetResourceGroupLevelResponse>;
  /**
   * @param alertName Name of the alert object
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param callback The callback
   */
  getResourceGroupLevel(alertName: string, resourceGroupName: string, callback: msRest.ServiceCallback<Models.Alert>): void;
  /**
   * @param alertName Name of the alert object
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param options The optional parameters
   * @param callback The callback
   */
  getResourceGroupLevel(alertName: string, resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Alert>): void;
  getResourceGroupLevel(alertName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Alert>, callback?: msRest.ServiceCallback<Models.Alert>): Promise<Models.AlertsGetResourceGroupLevelResponse> {
    return this.client.sendOperationRequest(
      {
        alertName,
        resourceGroupName,
        options
      },
      getResourceGroupLevelOperationSpec,
      callback) as Promise<Models.AlertsGetResourceGroupLevelResponse>;
  }

  /**
   * Update the alert's state
   * @param alertName Name of the alert object
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  updateSubscriptionLevelStateToDismiss(alertName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param alertName Name of the alert object
   * @param callback The callback
   */
  updateSubscriptionLevelStateToDismiss(alertName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param alertName Name of the alert object
   * @param options The optional parameters
   * @param callback The callback
   */
  updateSubscriptionLevelStateToDismiss(alertName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  updateSubscriptionLevelStateToDismiss(alertName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        alertName,
        options
      },
      updateSubscriptionLevelStateToDismissOperationSpec,
      callback);
  }

  /**
   * Update the alert's state
   * @param alertName Name of the alert object
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  updateSubscriptionLevelStateToResolve(alertName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param alertName Name of the alert object
   * @param callback The callback
   */
  updateSubscriptionLevelStateToResolve(alertName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param alertName Name of the alert object
   * @param options The optional parameters
   * @param callback The callback
   */
  updateSubscriptionLevelStateToResolve(alertName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  updateSubscriptionLevelStateToResolve(alertName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        alertName,
        options
      },
      updateSubscriptionLevelStateToResolveOperationSpec,
      callback);
  }

  /**
   * Update the alert's state
   * @param alertName Name of the alert object
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  updateSubscriptionLevelStateToActivate(alertName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param alertName Name of the alert object
   * @param callback The callback
   */
  updateSubscriptionLevelStateToActivate(alertName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param alertName Name of the alert object
   * @param options The optional parameters
   * @param callback The callback
   */
  updateSubscriptionLevelStateToActivate(alertName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  updateSubscriptionLevelStateToActivate(alertName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        alertName,
        options
      },
      updateSubscriptionLevelStateToActivateOperationSpec,
      callback);
  }

  /**
   * Update the alert's state
   * @param alertName Name of the alert object
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  updateResourceGroupLevelStateToResolve(alertName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param alertName Name of the alert object
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param callback The callback
   */
  updateResourceGroupLevelStateToResolve(alertName: string, resourceGroupName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param alertName Name of the alert object
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param options The optional parameters
   * @param callback The callback
   */
  updateResourceGroupLevelStateToResolve(alertName: string, resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  updateResourceGroupLevelStateToResolve(alertName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        alertName,
        resourceGroupName,
        options
      },
      updateResourceGroupLevelStateToResolveOperationSpec,
      callback);
  }

  /**
   * Update the alert's state
   * @param alertName Name of the alert object
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  updateResourceGroupLevelStateToDismiss(alertName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param alertName Name of the alert object
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param callback The callback
   */
  updateResourceGroupLevelStateToDismiss(alertName: string, resourceGroupName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param alertName Name of the alert object
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param options The optional parameters
   * @param callback The callback
   */
  updateResourceGroupLevelStateToDismiss(alertName: string, resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  updateResourceGroupLevelStateToDismiss(alertName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        alertName,
        resourceGroupName,
        options
      },
      updateResourceGroupLevelStateToDismissOperationSpec,
      callback);
  }

  /**
   * Update the alert's state
   * @param alertName Name of the alert object
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  updateResourceGroupLevelStateToActivate(alertName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param alertName Name of the alert object
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param callback The callback
   */
  updateResourceGroupLevelStateToActivate(alertName: string, resourceGroupName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param alertName Name of the alert object
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param options The optional parameters
   * @param callback The callback
   */
  updateResourceGroupLevelStateToActivate(alertName: string, resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  updateResourceGroupLevelStateToActivate(alertName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        alertName,
        resourceGroupName,
        options
      },
      updateResourceGroupLevelStateToActivateOperationSpec,
      callback);
  }

  /**
   * List all the alerts that are associated with the subscription
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.AlertsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.AlertsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AlertList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AlertList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AlertList>, callback?: msRest.ServiceCallback<Models.AlertList>): Promise<Models.AlertsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.AlertsListNextResponse>;
  }

  /**
   * List all the alerts that are associated with the resource group
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.AlertsListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.AlertsListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AlertList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AlertList>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AlertList>, callback?: msRest.ServiceCallback<Models.AlertList>): Promise<Models.AlertsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.AlertsListByResourceGroupNextResponse>;
  }

  /**
   * List all the alerts that are associated with the subscription that are stored in a specific
   * location
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.AlertsListSubscriptionLevelByRegionNextResponse>
   */
  listSubscriptionLevelByRegionNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.AlertsListSubscriptionLevelByRegionNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listSubscriptionLevelByRegionNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AlertList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listSubscriptionLevelByRegionNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AlertList>): void;
  listSubscriptionLevelByRegionNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AlertList>, callback?: msRest.ServiceCallback<Models.AlertList>): Promise<Models.AlertsListSubscriptionLevelByRegionNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listSubscriptionLevelByRegionNextOperationSpec,
      callback) as Promise<Models.AlertsListSubscriptionLevelByRegionNextResponse>;
  }

  /**
   * List all the alerts that are associated with the resource group that are stored in a specific
   * location
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.AlertsListResourceGroupLevelByRegionNextResponse>
   */
  listResourceGroupLevelByRegionNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.AlertsListResourceGroupLevelByRegionNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listResourceGroupLevelByRegionNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AlertList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listResourceGroupLevelByRegionNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AlertList>): void;
  listResourceGroupLevelByRegionNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AlertList>, callback?: msRest.ServiceCallback<Models.AlertList>): Promise<Models.AlertsListResourceGroupLevelByRegionNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listResourceGroupLevelByRegionNextOperationSpec,
      callback) as Promise<Models.AlertsListResourceGroupLevelByRegionNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/alerts",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion7
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AlertList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/alerts",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion7
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AlertList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listSubscriptionLevelByRegionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/locations/{ascLocation}/alerts",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.ascLocation
  ],
  queryParameters: [
    Parameters.apiVersion7
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AlertList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listResourceGroupLevelByRegionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/locations/{ascLocation}/alerts",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.ascLocation,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion7
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AlertList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getSubscriptionLevelOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/locations/{ascLocation}/alerts/{alertName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.ascLocation,
    Parameters.alertName
  ],
  queryParameters: [
    Parameters.apiVersion7
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Alert
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getResourceGroupLevelOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/locations/{ascLocation}/alerts/{alertName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.ascLocation,
    Parameters.alertName,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion7
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Alert
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateSubscriptionLevelStateToDismissOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/locations/{ascLocation}/alerts/{alertName}/dismiss",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.ascLocation,
    Parameters.alertName
  ],
  queryParameters: [
    Parameters.apiVersion7
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateSubscriptionLevelStateToResolveOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/locations/{ascLocation}/alerts/{alertName}/resolve",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.ascLocation,
    Parameters.alertName
  ],
  queryParameters: [
    Parameters.apiVersion7
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateSubscriptionLevelStateToActivateOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/locations/{ascLocation}/alerts/{alertName}/activate",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.ascLocation,
    Parameters.alertName
  ],
  queryParameters: [
    Parameters.apiVersion7
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateResourceGroupLevelStateToResolveOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/locations/{ascLocation}/alerts/{alertName}/resolve",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.ascLocation,
    Parameters.alertName,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion7
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateResourceGroupLevelStateToDismissOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/locations/{ascLocation}/alerts/{alertName}/dismiss",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.ascLocation,
    Parameters.alertName,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion7
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateResourceGroupLevelStateToActivateOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/locations/{ascLocation}/alerts/{alertName}/activate",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.ascLocation,
    Parameters.alertName,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion7
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    204: {},
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
      bodyMapper: Mappers.AlertList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.AlertList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listSubscriptionLevelByRegionNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.AlertList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listResourceGroupLevelByRegionNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.AlertList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
