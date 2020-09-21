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
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { PolicyClientContext } from "./policyClientContext";


class PolicyClient extends PolicyClientContext {
  // Operation groups
  policyAssignments: operations.PolicyAssignments;
  policyDefinitions: operations.PolicyDefinitions;
  policySetDefinitions: operations.PolicySetDefinitions;
  policyExemptions: operations.PolicyExemptions;

  /**
   * Initializes a new instance of the PolicyClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, options?: Models.PolicyClientOptions) {
    super(credentials, options);
    this.policyAssignments = new operations.PolicyAssignments(this);
    this.policyDefinitions = new operations.PolicyDefinitions(this);
    this.policySetDefinitions = new operations.PolicySetDefinitions(this);
    this.policyExemptions = new operations.PolicyExemptions(this);
  }
}

// Operation Specifications

export {
  PolicyClient,
  PolicyClientContext,
  Models as PolicyModels,
  Mappers as PolicyMappers
};
export * from "./operations";
