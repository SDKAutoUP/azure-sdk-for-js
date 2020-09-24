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

export const acceptLanguage: msRest.OperationParameter = {
  parameterPath: "acceptLanguage",
  mapper: {
    serializedName: "accept-language",
    defaultValue: 'en-US',
    type: {
      name: "String"
    }
  }
};
export const apiVersion: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};
export const applicationID: msRest.OperationURLParameter = {
  parameterPath: "applicationID",
  mapper: {
    required: true,
    serializedName: "applicationID",
    type: {
      name: "String"
    }
  }
};
export const applicationObjectId: msRest.OperationURLParameter = {
  parameterPath: "applicationObjectId",
  mapper: {
    required: true,
    serializedName: "applicationObjectId",
    type: {
      name: "String"
    }
  }
};
export const domainName: msRest.OperationURLParameter = {
  parameterPath: "domainName",
  mapper: {
    required: true,
    serializedName: "domainName",
    type: {
      name: "String"
    }
  }
};
export const expand: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "expand"
  ],
  mapper: {
    serializedName: "$expand",
    type: {
      name: "String"
    }
  }
};
export const filter: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "filter"
  ],
  mapper: {
    serializedName: "$filter",
    type: {
      name: "String"
    }
  }
};
export const groupObjectId: msRest.OperationURLParameter = {
  parameterPath: "groupObjectId",
  mapper: {
    required: true,
    serializedName: "groupObjectId",
    type: {
      name: "String"
    }
  }
};
export const memberObjectId: msRest.OperationURLParameter = {
  parameterPath: "memberObjectId",
  mapper: {
    required: true,
    serializedName: "memberObjectId",
    type: {
      name: "String"
    }
  }
};
export const nextLink: msRest.OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    required: true,
    serializedName: "nextLink",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const nextPageLink: msRest.OperationURLParameter = {
  parameterPath: "nextPageLink",
  mapper: {
    required: true,
    serializedName: "nextLink",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const objectId: msRest.OperationURLParameter = {
  parameterPath: "objectId",
  mapper: {
    required: true,
    serializedName: "objectId",
    type: {
      name: "String"
    }
  }
};
export const ownerObjectId: msRest.OperationURLParameter = {
  parameterPath: "ownerObjectId",
  mapper: {
    required: true,
    serializedName: "ownerObjectId",
    type: {
      name: "String"
    }
  }
};
export const tenantID: msRest.OperationURLParameter = {
  parameterPath: "tenantID",
  mapper: {
    required: true,
    serializedName: "tenantID",
    type: {
      name: "String"
    }
  }
};
export const upnOrObjectId: msRest.OperationURLParameter = {
  parameterPath: "upnOrObjectId",
  mapper: {
    required: true,
    serializedName: "upnOrObjectId",
    type: {
      name: "String"
    }
  }
};
