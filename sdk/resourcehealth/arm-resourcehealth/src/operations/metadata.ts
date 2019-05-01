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
import * as Mappers from "../models/metadataMappers";
import * as Parameters from "../models/parameters";
import { MicrosoftResourceHealthContext } from "../microsoftResourceHealthContext";

/** Class representing a Metadata. */
export class Metadata {
  private readonly client: MicrosoftResourceHealthContext;

  /**
   * Create a Metadata.
   * @param {MicrosoftResourceHealthContext} client Reference to the service client.
   */
  constructor(client: MicrosoftResourceHealthContext) {
    this.client = client;
  }

  /**
   * @summary Gets the metadata entity.
   * @param name Name of metadata entity.
   * @param [options] The optional parameters
   * @returns Promise<Models.MetadataGetResponse>
   */
  get(name: string, options?: msRest.RequestOptionsBase): Promise<Models.MetadataGetResponse>;
  /**
   * @param name Name of metadata entity.
   * @param callback The callback
   */
  get(name: string, callback: msRest.ServiceCallback<any>): void;
  /**
   * @param name Name of metadata entity.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(name: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<any>): void;
  get(name: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<any>, callback?: msRest.ServiceCallback<any>): Promise<Models.MetadataGetResponse> {
    return this.client.sendOperationRequest(
      {
        name,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.MetadataGetResponse>;
  }

  /**
   * @summary Gets the list of metadata entities.
   * @param [options] The optional parameters
   * @returns Promise<Models.MetadataListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.MetadataListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.MetadataEntityListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MetadataEntityListResult>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.MetadataEntityListResult>, callback?: msRest.ServiceCallback<Models.MetadataEntityListResult>): Promise<Models.MetadataListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.MetadataListResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.ResourceHealth/metadata/{name}",
  urlParameters: [
    Parameters.name
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.MetadataEntity
    },
    404: {
      bodyMapper: Mappers.ErrorResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.ResourceHealth/metadata",
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.MetadataEntityListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};