/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { CloudErrorMapper, BaseResourceMapper } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export const CloudError = CloudErrorMapper;
export const BaseResource = BaseResourceMapper;

export const ServiceAccessPolicyEntry: msRest.CompositeMapper = {
  serializedName: "ServiceAccessPolicyEntry",
  type: {
    name: "Composite",
    className: "ServiceAccessPolicyEntry",
    modelProperties: {
      objectId: {
        required: true,
        serializedName: "objectId",
        constraints: {
          Pattern: /^(([0-9A-Fa-f]{8}[-]?(?:[0-9A-Fa-f]{4}[-]?){3}[0-9A-Fa-f]{12}){1})+$/
        },
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServiceCosmosDbConfigurationInfo: msRest.CompositeMapper = {
  serializedName: "ServiceCosmosDbConfigurationInfo",
  type: {
    name: "Composite",
    className: "ServiceCosmosDbConfigurationInfo",
    modelProperties: {
      offerThroughput: {
        serializedName: "offerThroughput",
        constraints: {
          InclusiveMaximum: 10000,
          InclusiveMinimum: 400
        },
        type: {
          name: "Number"
        }
      },
      keyVaultKeyUri: {
        serializedName: "keyVaultKeyUri",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServiceAuthenticationConfigurationInfo: msRest.CompositeMapper = {
  serializedName: "ServiceAuthenticationConfigurationInfo",
  type: {
    name: "Composite",
    className: "ServiceAuthenticationConfigurationInfo",
    modelProperties: {
      authority: {
        serializedName: "authority",
        type: {
          name: "String"
        }
      },
      audience: {
        serializedName: "audience",
        type: {
          name: "String"
        }
      },
      smartProxyEnabled: {
        serializedName: "smartProxyEnabled",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const ServiceCorsConfigurationInfo: msRest.CompositeMapper = {
  serializedName: "ServiceCorsConfigurationInfo",
  type: {
    name: "Composite",
    className: "ServiceCorsConfigurationInfo",
    modelProperties: {
      origins: {
        serializedName: "origins",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      headers: {
        serializedName: "headers",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      methods: {
        serializedName: "methods",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      maxAge: {
        serializedName: "maxAge",
        constraints: {
          InclusiveMaximum: 99999,
          InclusiveMinimum: 0
        },
        type: {
          name: "Number"
        }
      },
      allowCredentials: {
        serializedName: "allowCredentials",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const ServiceExportConfigurationInfo: msRest.CompositeMapper = {
  serializedName: "ServiceExportConfigurationInfo",
  type: {
    name: "Composite",
    className: "ServiceExportConfigurationInfo",
    modelProperties: {
      storageAccountName: {
        serializedName: "storageAccountName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServicesProperties: msRest.CompositeMapper = {
  serializedName: "ServicesProperties",
  type: {
    name: "Composite",
    className: "ServicesProperties",
    modelProperties: {
      provisioningState: {
        readOnly: true,
        serializedName: "provisioningState",
        type: {
          name: "String"
        }
      },
      accessPolicies: {
        serializedName: "accessPolicies",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ServiceAccessPolicyEntry"
            }
          }
        }
      },
      cosmosDbConfiguration: {
        serializedName: "cosmosDbConfiguration",
        type: {
          name: "Composite",
          className: "ServiceCosmosDbConfigurationInfo"
        }
      },
      authenticationConfiguration: {
        serializedName: "authenticationConfiguration",
        type: {
          name: "Composite",
          className: "ServiceAuthenticationConfigurationInfo"
        }
      },
      corsConfiguration: {
        serializedName: "corsConfiguration",
        type: {
          name: "Composite",
          className: "ServiceCorsConfigurationInfo"
        }
      },
      exportConfiguration: {
        serializedName: "exportConfiguration",
        type: {
          name: "Composite",
          className: "ServiceExportConfigurationInfo"
        }
      }
    }
  }
};

export const Resource: msRest.CompositeMapper = {
  serializedName: "Resource",
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        constraints: {
          Pattern: /^[a-z0-9][a-z0-9-]{1,21}[a-z0-9]$/
        },
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      kind: {
        required: true,
        serializedName: "kind",
        type: {
          name: "Enum",
          allowedValues: [
            "fhir",
            "fhir-Stu3",
            "fhir-R4"
          ]
        }
      },
      location: {
        required: true,
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      },
      etag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      },
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "ResourceIdentity"
        }
      }
    }
  }
};

export const ServicesDescription: msRest.CompositeMapper = {
  serializedName: "ServicesDescription",
  type: {
    name: "Composite",
    className: "ServicesDescription",
    modelProperties: {
      ...Resource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "ServicesProperties"
        }
      }
    }
  }
};

export const ServicesPatchDescription: msRest.CompositeMapper = {
  serializedName: "ServicesPatchDescription",
  type: {
    name: "Composite",
    className: "ServicesPatchDescription",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const ResourceIdentity: msRest.CompositeMapper = {
  serializedName: "Resource_identity",
  type: {
    name: "Composite",
    className: "ResourceIdentity",
    modelProperties: {
      principalId: {
        readOnly: true,
        serializedName: "principalId",
        type: {
          name: "String"
        }
      },
      tenantId: {
        readOnly: true,
        serializedName: "tenantId",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ErrorDetailsInternal: msRest.CompositeMapper = {
  serializedName: "ErrorDetailsInternal",
  type: {
    name: "Composite",
    className: "ErrorDetailsInternal",
    modelProperties: {
      code: {
        readOnly: true,
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        readOnly: true,
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      target: {
        readOnly: true,
        serializedName: "target",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ErrorDetails: msRest.CompositeMapper = {
  serializedName: "ErrorDetails",
  type: {
    name: "Composite",
    className: "ErrorDetails",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorDetailsInternal"
        }
      }
    }
  }
};

export const OperationDisplay: msRest.CompositeMapper = {
  serializedName: "OperationDisplay",
  type: {
    name: "Composite",
    className: "OperationDisplay",
    modelProperties: {
      provider: {
        readOnly: true,
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      resource: {
        readOnly: true,
        serializedName: "resource",
        type: {
          name: "String"
        }
      },
      operation: {
        readOnly: true,
        serializedName: "operation",
        type: {
          name: "String"
        }
      },
      description: {
        readOnly: true,
        serializedName: "description",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Operation: msRest.CompositeMapper = {
  serializedName: "Operation",
  type: {
    name: "Composite",
    className: "Operation",
    modelProperties: {
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      origin: {
        readOnly: true,
        serializedName: "origin",
        type: {
          name: "String"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplay"
        }
      }
    }
  }
};

export const CheckNameAvailabilityParameters: msRest.CompositeMapper = {
  serializedName: "CheckNameAvailabilityParameters",
  type: {
    name: "Composite",
    className: "CheckNameAvailabilityParameters",
    modelProperties: {
      name: {
        required: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        required: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServicesNameAvailabilityInfo: msRest.CompositeMapper = {
  serializedName: "ServicesNameAvailabilityInfo",
  type: {
    name: "Composite",
    className: "ServicesNameAvailabilityInfo",
    modelProperties: {
      nameAvailable: {
        readOnly: true,
        serializedName: "nameAvailable",
        type: {
          name: "Boolean"
        }
      },
      reason: {
        readOnly: true,
        serializedName: "reason",
        type: {
          name: "Enum",
          allowedValues: [
            "Invalid",
            "AlreadyExists"
          ]
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationResultsDescription: msRest.CompositeMapper = {
  serializedName: "OperationResultsDescription",
  type: {
    name: "Composite",
    className: "OperationResultsDescription",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      status: {
        readOnly: true,
        serializedName: "status",
        type: {
          name: "String"
        }
      },
      startTime: {
        readOnly: true,
        serializedName: "startTime",
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Object"
        }
      }
    }
  }
};

export const ServicesDescriptionListResult: msRest.CompositeMapper = {
  serializedName: "ServicesDescriptionListResult",
  type: {
    name: "Composite",
    className: "ServicesDescriptionListResult",
    modelProperties: {
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ServicesDescription"
            }
          }
        }
      }
    }
  }
};

export const OperationListResult: msRest.CompositeMapper = {
  serializedName: "OperationListResult",
  type: {
    name: "Composite",
    className: "OperationListResult",
    modelProperties: {
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      },
      value: {
        readOnly: true,
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Operation"
            }
          }
        }
      }
    }
  }
};
