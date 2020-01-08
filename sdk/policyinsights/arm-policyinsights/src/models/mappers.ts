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

export const PolicyDetails: msRest.CompositeMapper = {
  serializedName: "PolicyDetails",
  type: {
    name: "Composite",
    className: "PolicyDetails",
    modelProperties: {
      policyDefinitionId: {
        readOnly: true,
        serializedName: "policyDefinitionId",
        type: {
          name: "String"
        }
      },
      policyAssignmentId: {
        readOnly: true,
        serializedName: "policyAssignmentId",
        type: {
          name: "String"
        }
      },
      policyAssignmentDisplayName: {
        readOnly: true,
        serializedName: "policyAssignmentDisplayName",
        type: {
          name: "String"
        }
      },
      policyAssignmentScope: {
        readOnly: true,
        serializedName: "policyAssignmentScope",
        type: {
          name: "String"
        }
      },
      policySetDefinitionId: {
        readOnly: true,
        serializedName: "policySetDefinitionId",
        type: {
          name: "String"
        }
      },
      policyDefinitionReferenceId: {
        readOnly: true,
        serializedName: "policyDefinitionReferenceId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TrackedResourceModificationDetails: msRest.CompositeMapper = {
  serializedName: "TrackedResourceModificationDetails",
  type: {
    name: "Composite",
    className: "TrackedResourceModificationDetails",
    modelProperties: {
      policyDetails: {
        readOnly: true,
        serializedName: "policyDetails",
        type: {
          name: "Composite",
          className: "PolicyDetails"
        }
      },
      deploymentId: {
        readOnly: true,
        serializedName: "deploymentId",
        type: {
          name: "String"
        }
      },
      deploymentTime: {
        readOnly: true,
        serializedName: "deploymentTime",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const PolicyTrackedResource: msRest.CompositeMapper = {
  serializedName: "PolicyTrackedResource",
  type: {
    name: "Composite",
    className: "PolicyTrackedResource",
    modelProperties: {
      trackedResourceId: {
        readOnly: true,
        serializedName: "trackedResourceId",
        type: {
          name: "String"
        }
      },
      policyDetails: {
        readOnly: true,
        serializedName: "policyDetails",
        type: {
          name: "Composite",
          className: "PolicyDetails"
        }
      },
      createdBy: {
        readOnly: true,
        serializedName: "createdBy",
        type: {
          name: "Composite",
          className: "TrackedResourceModificationDetails"
        }
      },
      lastModifiedBy: {
        readOnly: true,
        serializedName: "lastModifiedBy",
        type: {
          name: "Composite",
          className: "TrackedResourceModificationDetails"
        }
      },
      lastUpdateUtc: {
        readOnly: true,
        serializedName: "lastUpdateUtc",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const QueryFailureError: msRest.CompositeMapper = {
  serializedName: "QueryFailure_error",
  type: {
    name: "Composite",
    className: "QueryFailureError",
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
      }
    }
  }
};

export const QueryFailure: msRest.CompositeMapper = {
  serializedName: "QueryFailure",
  type: {
    name: "Composite",
    className: "QueryFailure",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "QueryFailureError"
        }
      }
    }
  }
};

export const RemediationFilters: msRest.CompositeMapper = {
  serializedName: "RemediationFilters",
  type: {
    name: "Composite",
    className: "RemediationFilters",
    modelProperties: {
      locations: {
        serializedName: "locations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const RemediationDeploymentSummary: msRest.CompositeMapper = {
  serializedName: "RemediationDeploymentSummary",
  type: {
    name: "Composite",
    className: "RemediationDeploymentSummary",
    modelProperties: {
      totalDeployments: {
        readOnly: true,
        serializedName: "totalDeployments",
        type: {
          name: "Number"
        }
      },
      successfulDeployments: {
        readOnly: true,
        serializedName: "successfulDeployments",
        type: {
          name: "Number"
        }
      },
      failedDeployments: {
        readOnly: true,
        serializedName: "failedDeployments",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const Remediation: msRest.CompositeMapper = {
  serializedName: "Remediation",
  type: {
    name: "Composite",
    className: "Remediation",
    modelProperties: {
      policyAssignmentId: {
        serializedName: "properties.policyAssignmentId",
        type: {
          name: "String"
        }
      },
      policyDefinitionReferenceId: {
        serializedName: "properties.policyDefinitionReferenceId",
        type: {
          name: "String"
        }
      },
      resourceDiscoveryMode: {
        serializedName: "properties.resourceDiscoveryMode",
        type: {
          name: "String"
        }
      },
      provisioningState: {
        readOnly: true,
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      },
      createdOn: {
        readOnly: true,
        serializedName: "properties.createdOn",
        type: {
          name: "DateTime"
        }
      },
      lastUpdatedOn: {
        readOnly: true,
        serializedName: "properties.lastUpdatedOn",
        type: {
          name: "DateTime"
        }
      },
      filters: {
        serializedName: "properties.filters",
        type: {
          name: "Composite",
          className: "RemediationFilters"
        }
      },
      deploymentStatus: {
        readOnly: true,
        serializedName: "properties.deploymentStatus",
        type: {
          name: "Composite",
          className: "RemediationDeploymentSummary"
        }
      },
      id: {
        readOnly: true,
        serializedName: "id",
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
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TypedErrorInfo: msRest.CompositeMapper = {
  serializedName: "TypedErrorInfo",
  type: {
    name: "Composite",
    className: "TypedErrorInfo",
    modelProperties: {
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      info: {
        readOnly: true,
        serializedName: "info",
        type: {
          name: "Object"
        }
      }
    }
  }
};

export const ErrorDefinition: msRest.CompositeMapper = {
  serializedName: "ErrorDefinition",
  type: {
    name: "Composite",
    className: "ErrorDefinition",
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
      },
      details: {
        readOnly: true,
        serializedName: "details",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorDefinition"
            }
          }
        }
      },
      additionalInfo: {
        readOnly: true,
        serializedName: "additionalInfo",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TypedErrorInfo"
            }
          }
        }
      }
    }
  }
};

export const RemediationDeployment: msRest.CompositeMapper = {
  serializedName: "RemediationDeployment",
  type: {
    name: "Composite",
    className: "RemediationDeployment",
    modelProperties: {
      remediatedResourceId: {
        readOnly: true,
        serializedName: "remediatedResourceId",
        type: {
          name: "String"
        }
      },
      deploymentId: {
        readOnly: true,
        serializedName: "deploymentId",
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
      resourceLocation: {
        readOnly: true,
        serializedName: "resourceLocation",
        type: {
          name: "String"
        }
      },
      error: {
        readOnly: true,
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorDefinition"
        }
      },
      createdOn: {
        readOnly: true,
        serializedName: "createdOn",
        type: {
          name: "DateTime"
        }
      },
      lastUpdatedOn: {
        readOnly: true,
        serializedName: "lastUpdatedOn",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const ErrorResponse: msRest.CompositeMapper = {
  serializedName: "ErrorResponse",
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorDefinition"
        }
      }
    }
  }
};

export const PolicyEvent: msRest.CompositeMapper = {
  serializedName: "PolicyEvent",
  type: {
    name: "Composite",
    className: "PolicyEvent",
    modelProperties: {
      odataid: {
        serializedName: "@odata\\.id",
        type: {
          name: "String"
        }
      },
      odatacontext: {
        serializedName: "@odata\\.context",
        type: {
          name: "String"
        }
      },
      timestamp: {
        serializedName: "timestamp",
        type: {
          name: "DateTime"
        }
      },
      resourceId: {
        serializedName: "resourceId",
        type: {
          name: "String"
        }
      },
      policyAssignmentId: {
        serializedName: "policyAssignmentId",
        type: {
          name: "String"
        }
      },
      policyDefinitionId: {
        serializedName: "policyDefinitionId",
        type: {
          name: "String"
        }
      },
      effectiveParameters: {
        serializedName: "effectiveParameters",
        type: {
          name: "String"
        }
      },
      isCompliant: {
        serializedName: "isCompliant",
        type: {
          name: "Boolean"
        }
      },
      subscriptionId: {
        serializedName: "subscriptionId",
        type: {
          name: "String"
        }
      },
      resourceType: {
        serializedName: "resourceType",
        type: {
          name: "String"
        }
      },
      resourceLocation: {
        serializedName: "resourceLocation",
        type: {
          name: "String"
        }
      },
      resourceGroup: {
        serializedName: "resourceGroup",
        type: {
          name: "String"
        }
      },
      resourceTags: {
        serializedName: "resourceTags",
        type: {
          name: "String"
        }
      },
      policyAssignmentName: {
        serializedName: "policyAssignmentName",
        type: {
          name: "String"
        }
      },
      policyAssignmentOwner: {
        serializedName: "policyAssignmentOwner",
        type: {
          name: "String"
        }
      },
      policyAssignmentParameters: {
        serializedName: "policyAssignmentParameters",
        type: {
          name: "String"
        }
      },
      policyAssignmentScope: {
        serializedName: "policyAssignmentScope",
        type: {
          name: "String"
        }
      },
      policyDefinitionName: {
        serializedName: "policyDefinitionName",
        type: {
          name: "String"
        }
      },
      policyDefinitionAction: {
        serializedName: "policyDefinitionAction",
        type: {
          name: "String"
        }
      },
      policyDefinitionCategory: {
        serializedName: "policyDefinitionCategory",
        type: {
          name: "String"
        }
      },
      policySetDefinitionId: {
        serializedName: "policySetDefinitionId",
        type: {
          name: "String"
        }
      },
      policySetDefinitionName: {
        serializedName: "policySetDefinitionName",
        type: {
          name: "String"
        }
      },
      policySetDefinitionOwner: {
        serializedName: "policySetDefinitionOwner",
        type: {
          name: "String"
        }
      },
      policySetDefinitionCategory: {
        serializedName: "policySetDefinitionCategory",
        type: {
          name: "String"
        }
      },
      policySetDefinitionParameters: {
        serializedName: "policySetDefinitionParameters",
        type: {
          name: "String"
        }
      },
      managementGroupIds: {
        serializedName: "managementGroupIds",
        type: {
          name: "String"
        }
      },
      policyDefinitionReferenceId: {
        serializedName: "policyDefinitionReferenceId",
        type: {
          name: "String"
        }
      },
      tenantId: {
        serializedName: "tenantId",
        type: {
          name: "String"
        }
      },
      principalOid: {
        serializedName: "principalOid",
        type: {
          name: "String"
        }
      }
    },
    additionalProperties: {
      type: {
        name: "Object"
      }
    }
  }
};

export const PolicyEventsQueryResults: msRest.CompositeMapper = {
  serializedName: "PolicyEventsQueryResults",
  type: {
    name: "Composite",
    className: "PolicyEventsQueryResults",
    modelProperties: {
      odatacontext: {
        serializedName: "@odata\\.context",
        type: {
          name: "String"
        }
      },
      odatacount: {
        serializedName: "@odata\\.count",
        constraints: {
          InclusiveMinimum: 0
        },
        type: {
          name: "Number"
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PolicyEvent",
              additionalProperties: {
                type: {
                  name: "Object"
                }
              }
            }
          }
        }
      }
    }
  }
};

export const ExpressionEvaluationDetails: msRest.CompositeMapper = {
  serializedName: "ExpressionEvaluationDetails",
  type: {
    name: "Composite",
    className: "ExpressionEvaluationDetails",
    modelProperties: {
      result: {
        serializedName: "result",
        type: {
          name: "String"
        }
      },
      expression: {
        serializedName: "expression",
        type: {
          name: "String"
        }
      },
      path: {
        serializedName: "path",
        type: {
          name: "String"
        }
      },
      expressionValue: {
        serializedName: "expressionValue",
        type: {
          name: "Object"
        }
      },
      targetValue: {
        serializedName: "targetValue",
        type: {
          name: "Object"
        }
      },
      operator: {
        serializedName: "operator",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const IfNotExistsEvaluationDetails: msRest.CompositeMapper = {
  serializedName: "IfNotExistsEvaluationDetails",
  type: {
    name: "Composite",
    className: "IfNotExistsEvaluationDetails",
    modelProperties: {
      resourceId: {
        serializedName: "resourceId",
        type: {
          name: "String"
        }
      },
      totalResources: {
        serializedName: "totalResources",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const PolicyEvaluationDetails: msRest.CompositeMapper = {
  serializedName: "PolicyEvaluationDetails",
  type: {
    name: "Composite",
    className: "PolicyEvaluationDetails",
    modelProperties: {
      evaluatedExpressions: {
        serializedName: "evaluatedExpressions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ExpressionEvaluationDetails"
            }
          }
        }
      },
      ifNotExistsDetails: {
        serializedName: "ifNotExistsDetails",
        type: {
          name: "Composite",
          className: "IfNotExistsEvaluationDetails"
        }
      }
    }
  }
};

export const PolicyState: msRest.CompositeMapper = {
  serializedName: "PolicyState",
  type: {
    name: "Composite",
    className: "PolicyState",
    modelProperties: {
      odataid: {
        serializedName: "@odata\\.id",
        type: {
          name: "String"
        }
      },
      odatacontext: {
        serializedName: "@odata\\.context",
        type: {
          name: "String"
        }
      },
      timestamp: {
        serializedName: "timestamp",
        type: {
          name: "DateTime"
        }
      },
      resourceId: {
        serializedName: "resourceId",
        type: {
          name: "String"
        }
      },
      policyAssignmentId: {
        serializedName: "policyAssignmentId",
        type: {
          name: "String"
        }
      },
      policyDefinitionId: {
        serializedName: "policyDefinitionId",
        type: {
          name: "String"
        }
      },
      effectiveParameters: {
        serializedName: "effectiveParameters",
        type: {
          name: "String"
        }
      },
      isCompliant: {
        serializedName: "isCompliant",
        type: {
          name: "Boolean"
        }
      },
      subscriptionId: {
        serializedName: "subscriptionId",
        type: {
          name: "String"
        }
      },
      resourceType: {
        serializedName: "resourceType",
        type: {
          name: "String"
        }
      },
      resourceLocation: {
        serializedName: "resourceLocation",
        type: {
          name: "String"
        }
      },
      resourceGroup: {
        serializedName: "resourceGroup",
        type: {
          name: "String"
        }
      },
      resourceTags: {
        serializedName: "resourceTags",
        type: {
          name: "String"
        }
      },
      policyAssignmentName: {
        serializedName: "policyAssignmentName",
        type: {
          name: "String"
        }
      },
      policyAssignmentOwner: {
        serializedName: "policyAssignmentOwner",
        type: {
          name: "String"
        }
      },
      policyAssignmentParameters: {
        serializedName: "policyAssignmentParameters",
        type: {
          name: "String"
        }
      },
      policyAssignmentScope: {
        serializedName: "policyAssignmentScope",
        type: {
          name: "String"
        }
      },
      policyDefinitionName: {
        serializedName: "policyDefinitionName",
        type: {
          name: "String"
        }
      },
      policyDefinitionAction: {
        serializedName: "policyDefinitionAction",
        type: {
          name: "String"
        }
      },
      policyDefinitionCategory: {
        serializedName: "policyDefinitionCategory",
        type: {
          name: "String"
        }
      },
      policySetDefinitionId: {
        serializedName: "policySetDefinitionId",
        type: {
          name: "String"
        }
      },
      policySetDefinitionName: {
        serializedName: "policySetDefinitionName",
        type: {
          name: "String"
        }
      },
      policySetDefinitionOwner: {
        serializedName: "policySetDefinitionOwner",
        type: {
          name: "String"
        }
      },
      policySetDefinitionCategory: {
        serializedName: "policySetDefinitionCategory",
        type: {
          name: "String"
        }
      },
      policySetDefinitionParameters: {
        serializedName: "policySetDefinitionParameters",
        type: {
          name: "String"
        }
      },
      managementGroupIds: {
        serializedName: "managementGroupIds",
        type: {
          name: "String"
        }
      },
      policyDefinitionReferenceId: {
        serializedName: "policyDefinitionReferenceId",
        type: {
          name: "String"
        }
      },
      complianceState: {
        serializedName: "complianceState",
        type: {
          name: "String"
        }
      },
      policyEvaluationDetails: {
        serializedName: "policyEvaluationDetails",
        type: {
          name: "Composite",
          className: "PolicyEvaluationDetails"
        }
      },
      policyDefinitionGroupNames: {
        serializedName: "policyDefinitionGroupNames",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    },
    additionalProperties: {
      type: {
        name: "Object"
      }
    }
  }
};

export const PolicyStatesQueryResults: msRest.CompositeMapper = {
  serializedName: "PolicyStatesQueryResults",
  type: {
    name: "Composite",
    className: "PolicyStatesQueryResults",
    modelProperties: {
      odatacontext: {
        serializedName: "@odata\\.context",
        type: {
          name: "String"
        }
      },
      odatacount: {
        serializedName: "@odata\\.count",
        constraints: {
          InclusiveMinimum: 0
        },
        type: {
          name: "Number"
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PolicyState",
              additionalProperties: {
                type: {
                  name: "Object"
                }
              }
            }
          }
        }
      }
    }
  }
};

export const ComplianceDetail: msRest.CompositeMapper = {
  serializedName: "ComplianceDetail",
  type: {
    name: "Composite",
    className: "ComplianceDetail",
    modelProperties: {
      complianceState: {
        serializedName: "complianceState",
        type: {
          name: "String"
        }
      },
      count: {
        serializedName: "count",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const SummaryResults: msRest.CompositeMapper = {
  serializedName: "SummaryResults",
  type: {
    name: "Composite",
    className: "SummaryResults",
    modelProperties: {
      queryResultsUri: {
        serializedName: "queryResultsUri",
        type: {
          name: "String"
        }
      },
      nonCompliantResources: {
        serializedName: "nonCompliantResources",
        constraints: {
          InclusiveMinimum: 0
        },
        type: {
          name: "Number"
        }
      },
      nonCompliantPolicies: {
        serializedName: "nonCompliantPolicies",
        constraints: {
          InclusiveMinimum: 0
        },
        type: {
          name: "Number"
        }
      },
      resourceDetails: {
        serializedName: "resourceDetails",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ComplianceDetail"
            }
          }
        }
      },
      policyDetails: {
        serializedName: "policyDetails",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ComplianceDetail"
            }
          }
        }
      },
      policyGroupDetails: {
        serializedName: "policyGroupDetails",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ComplianceDetail"
            }
          }
        }
      }
    }
  }
};

export const PolicyDefinitionSummary: msRest.CompositeMapper = {
  serializedName: "PolicyDefinitionSummary",
  type: {
    name: "Composite",
    className: "PolicyDefinitionSummary",
    modelProperties: {
      policyDefinitionId: {
        serializedName: "policyDefinitionId",
        type: {
          name: "String"
        }
      },
      policyDefinitionReferenceId: {
        serializedName: "policyDefinitionReferenceId",
        type: {
          name: "String"
        }
      },
      policyDefinitionGroupNames: {
        serializedName: "policyDefinitionGroupNames",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      effect: {
        serializedName: "effect",
        type: {
          name: "String"
        }
      },
      results: {
        serializedName: "results",
        type: {
          name: "Composite",
          className: "SummaryResults"
        }
      }
    }
  }
};

export const PolicyGroupSummary: msRest.CompositeMapper = {
  serializedName: "PolicyGroupSummary",
  type: {
    name: "Composite",
    className: "PolicyGroupSummary",
    modelProperties: {
      policyGroupName: {
        serializedName: "policyGroupName",
        type: {
          name: "String"
        }
      },
      results: {
        serializedName: "results",
        type: {
          name: "Composite",
          className: "SummaryResults"
        }
      }
    }
  }
};

export const PolicyAssignmentSummary: msRest.CompositeMapper = {
  serializedName: "PolicyAssignmentSummary",
  type: {
    name: "Composite",
    className: "PolicyAssignmentSummary",
    modelProperties: {
      policyAssignmentId: {
        serializedName: "policyAssignmentId",
        type: {
          name: "String"
        }
      },
      policySetDefinitionId: {
        serializedName: "policySetDefinitionId",
        type: {
          name: "String"
        }
      },
      results: {
        serializedName: "results",
        type: {
          name: "Composite",
          className: "SummaryResults"
        }
      },
      policyDefinitions: {
        serializedName: "policyDefinitions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PolicyDefinitionSummary"
            }
          }
        }
      },
      policyGroups: {
        serializedName: "policyGroups",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PolicyGroupSummary"
            }
          }
        }
      }
    }
  }
};

export const Summary: msRest.CompositeMapper = {
  serializedName: "Summary",
  type: {
    name: "Composite",
    className: "Summary",
    modelProperties: {
      odataid: {
        serializedName: "@odata\\.id",
        type: {
          name: "String"
        }
      },
      odatacontext: {
        serializedName: "@odata\\.context",
        type: {
          name: "String"
        }
      },
      results: {
        serializedName: "results",
        type: {
          name: "Composite",
          className: "SummaryResults"
        }
      },
      policyAssignments: {
        serializedName: "policyAssignments",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PolicyAssignmentSummary"
            }
          }
        }
      }
    }
  }
};

export const SummarizeResults: msRest.CompositeMapper = {
  serializedName: "SummarizeResults",
  type: {
    name: "Composite",
    className: "SummarizeResults",
    modelProperties: {
      odatacontext: {
        serializedName: "@odata\\.context",
        type: {
          name: "String"
        }
      },
      odatacount: {
        serializedName: "@odata\\.count",
        constraints: {
          InclusiveMaximum: 1,
          InclusiveMinimum: 1
        },
        type: {
          name: "Number"
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Summary"
            }
          }
        }
      }
    }
  }
};

export const OperationDisplay: msRest.CompositeMapper = {
  serializedName: "Operation_display",
  type: {
    name: "Composite",
    className: "OperationDisplay",
    modelProperties: {
      provider: {
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "resource",
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "operation",
        type: {
          name: "String"
        }
      },
      description: {
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
        serializedName: "name",
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

export const OperationsListResults: msRest.CompositeMapper = {
  serializedName: "OperationsListResults",
  type: {
    name: "Composite",
    className: "OperationsListResults",
    modelProperties: {
      odatacount: {
        serializedName: "@odata\\.count",
        constraints: {
          InclusiveMinimum: 1
        },
        type: {
          name: "Number"
        }
      },
      value: {
        serializedName: "value",
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

export const PolicyMetadata: msRest.CompositeMapper = {
  serializedName: "PolicyMetadata",
  type: {
    name: "Composite",
    className: "PolicyMetadata",
    modelProperties: {
      metadataId: {
        readOnly: true,
        serializedName: "properties.metadataId",
        type: {
          name: "String"
        }
      },
      category: {
        readOnly: true,
        serializedName: "properties.category",
        type: {
          name: "String"
        }
      },
      title: {
        readOnly: true,
        serializedName: "properties.title",
        type: {
          name: "String"
        }
      },
      owner: {
        readOnly: true,
        serializedName: "properties.owner",
        type: {
          name: "String"
        }
      },
      additionalContentUrl: {
        readOnly: true,
        serializedName: "properties.additionalContentUrl",
        type: {
          name: "String"
        }
      },
      metadata: {
        readOnly: true,
        serializedName: "properties.metadata",
        type: {
          name: "Object"
        }
      },
      description: {
        readOnly: true,
        serializedName: "properties.description",
        type: {
          name: "String"
        }
      },
      requirements: {
        readOnly: true,
        serializedName: "properties.requirements",
        type: {
          name: "String"
        }
      },
      id: {
        readOnly: true,
        serializedName: "id",
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
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SlimPolicyMetadata: msRest.CompositeMapper = {
  serializedName: "SlimPolicyMetadata",
  type: {
    name: "Composite",
    className: "SlimPolicyMetadata",
    modelProperties: {
      metadataId: {
        readOnly: true,
        serializedName: "properties.metadataId",
        type: {
          name: "String"
        }
      },
      category: {
        readOnly: true,
        serializedName: "properties.category",
        type: {
          name: "String"
        }
      },
      title: {
        readOnly: true,
        serializedName: "properties.title",
        type: {
          name: "String"
        }
      },
      owner: {
        readOnly: true,
        serializedName: "properties.owner",
        type: {
          name: "String"
        }
      },
      additionalContentUrl: {
        readOnly: true,
        serializedName: "properties.additionalContentUrl",
        type: {
          name: "String"
        }
      },
      metadata: {
        readOnly: true,
        serializedName: "properties.metadata",
        type: {
          name: "Object"
        }
      },
      id: {
        readOnly: true,
        serializedName: "id",
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
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const QueryOptions: msRest.CompositeMapper = {
  type: {
    name: "Composite",
    className: "QueryOptions",
    modelProperties: {
      top: {
        type: {
          name: "Number"
        }
      },
      filter: {
        type: {
          name: "String"
        }
      },
      orderBy: {
        type: {
          name: "String"
        }
      },
      select: {
        type: {
          name: "String"
        }
      },
      from: {
        type: {
          name: "DateTime"
        }
      },
      to: {
        type: {
          name: "DateTime"
        }
      },
      apply: {
        type: {
          name: "String"
        }
      },
      expand: {
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PolicyTrackedResourcesQueryResults: msRest.CompositeMapper = {
  serializedName: "PolicyTrackedResourcesQueryResults",
  type: {
    name: "Composite",
    className: "PolicyTrackedResourcesQueryResults",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PolicyTrackedResource"
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RemediationDeploymentsListResult: msRest.CompositeMapper = {
  serializedName: "RemediationDeploymentsListResult",
  type: {
    name: "Composite",
    className: "RemediationDeploymentsListResult",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RemediationDeployment"
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RemediationListResult: msRest.CompositeMapper = {
  serializedName: "RemediationListResult",
  type: {
    name: "Composite",
    className: "RemediationListResult",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Remediation"
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PolicyMetadataCollection: msRest.CompositeMapper = {
  serializedName: "PolicyMetadataCollection",
  type: {
    name: "Composite",
    className: "PolicyMetadataCollection",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SlimPolicyMetadata"
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};