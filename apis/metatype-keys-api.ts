/* tslint:disable */
/* eslint-disable */
/**
 * Deep Lynx
 * The construction of megaprojects has consistently demonstrated challenges for project managers in regard to meeting cost, schedule, and performance requirements. Megaproject construction challenges are common place within megaprojects with many active projects in the United States failing to meet cost and schedule efforts by significant margins. Currently, engineering teams operate in siloed tools and disparate teams where connections across design, procurement, and construction systems are translated manually or over brittle point-to-point integrations. The manual nature of data exchange increases the risk of silent errors in the reactor design, with each silent error cascading across the design. These cascading errors lead to uncontrollable risk during construction, resulting in significant delays and cost overruns. Deep Lynx allows for an integrated platform during design and operations of mega projects.  The Deep Lynx Core API delivers a few main features.  1. Provides a set of methods and endpoints for manipulating data in an object oriented database. This allows us to store complex datatypes as records and then to compile them into actual, modifiable objects at run-time. Users can store taxonomies or ontologies in a readable format.  2. Provides methods for storing and retrieving data in a graph database. This data is structured and validated against the aformentioned object oriented database before storage.
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { CreateMetatypeKeysResponse } from '../models';
import { Generic200Response } from '../models';
import { GetMetatypeKeyResponse } from '../models';
import { ListMetatypeKeysResponse } from '../models';
import { NewMetatypeKeyRequest } from '../models';
import { UpdateMetatypeKeyRequest } from '../models';
import { UpdateMetatypeKeyResponse } from '../models';
/**
 * MetatypeKeysApi - axios parameter creator
 * @export
 */
export const MetatypeKeysApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Archiving the metatype key prevents any new types from implementing the key. It *does not remove key/value pairs on existing types*. We highly recommend you archive type keys instead of deleting them so that previous data is not affected.
         * @summary Archive Metatype Key
         * @param {string} containerId 
         * @param {string} metatypeId 
         * @param {string} keyId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        archiveMetatypeKey: async (containerId: string, metatypeId: string, keyId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'containerId' is not null or undefined
            if (containerId === null || containerId === undefined) {
                throw new RequiredError('containerId','Required parameter containerId was null or undefined when calling archiveMetatypeKey.');
            }
            // verify required parameter 'metatypeId' is not null or undefined
            if (metatypeId === null || metatypeId === undefined) {
                throw new RequiredError('metatypeId','Required parameter metatypeId was null or undefined when calling archiveMetatypeKey.');
            }
            // verify required parameter 'keyId' is not null or undefined
            if (keyId === null || keyId === undefined) {
                throw new RequiredError('keyId','Required parameter keyId was null or undefined when calling archiveMetatypeKey.');
            }
            const localVarPath = `/containers/{container_id}/metatypes/{metatype_id}/keys/{key_id}`
                .replace(`{${"container_id"}}`, encodeURIComponent(String(containerId)))
                .replace(`{${"metatype_id"}}`, encodeURIComponent(String(metatypeId)))
                .replace(`{${"key_id"}}`, encodeURIComponent(String(keyId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BearerAuth required

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates a new key for a metatype. Keys consist of a unique key name (unique to the metatype only), key type, default values, and allowed values. Of those, only the first two are required.  The `dataType` field accepts only one of the following values: number, string, date, boolean, enumeration, file.   The fields `defaultValue` and `options` will only accept an array of the following types: string, boolean, number, float.  Pass in an array for bulk creation.  Currently the validation and cardinality functionality of keys are NOT checked at data insertion.
         * @summary Create Metatype Key
         * @param {NewMetatypeKeyRequest} body 
         * @param {string} containerId 
         * @param {string} metatypeId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createMetatypeKey: async (body: NewMetatypeKeyRequest, containerId: string, metatypeId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling createMetatypeKey.');
            }
            // verify required parameter 'containerId' is not null or undefined
            if (containerId === null || containerId === undefined) {
                throw new RequiredError('containerId','Required parameter containerId was null or undefined when calling createMetatypeKey.');
            }
            // verify required parameter 'metatypeId' is not null or undefined
            if (metatypeId === null || metatypeId === undefined) {
                throw new RequiredError('metatypeId','Required parameter metatypeId was null or undefined when calling createMetatypeKey.');
            }
            const localVarPath = `/containers/{container_id}/metatypes/{metatype_id}/keys`
                .replace(`{${"container_id"}}`, encodeURIComponent(String(containerId)))
                .replace(`{${"metatype_id"}}`, encodeURIComponent(String(metatypeId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BearerAuth required

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Lists all currently valid and available keys for the metatype.
         * @summary List Metatype's Keys
         * @param {string} containerId 
         * @param {string} metatypeId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listMetatypesKeys: async (containerId: string, metatypeId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'containerId' is not null or undefined
            if (containerId === null || containerId === undefined) {
                throw new RequiredError('containerId','Required parameter containerId was null or undefined when calling listMetatypesKeys.');
            }
            // verify required parameter 'metatypeId' is not null or undefined
            if (metatypeId === null || metatypeId === undefined) {
                throw new RequiredError('metatypeId','Required parameter metatypeId was null or undefined when calling listMetatypesKeys.');
            }
            const localVarPath = `/containers/{container_id}/metatypes/{metatype_id}/keys`
                .replace(`{${"container_id"}}`, encodeURIComponent(String(containerId)))
                .replace(`{${"metatype_id"}}`, encodeURIComponent(String(metatypeId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BearerAuth required

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieve the specified key for the metatype.
         * @summary Retrieve Metatype Key
         * @param {string} containerId 
         * @param {string} metatypeId 
         * @param {string} keyId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveMetatypeKey: async (containerId: string, metatypeId: string, keyId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'containerId' is not null or undefined
            if (containerId === null || containerId === undefined) {
                throw new RequiredError('containerId','Required parameter containerId was null or undefined when calling retrieveMetatypeKey.');
            }
            // verify required parameter 'metatypeId' is not null or undefined
            if (metatypeId === null || metatypeId === undefined) {
                throw new RequiredError('metatypeId','Required parameter metatypeId was null or undefined when calling retrieveMetatypeKey.');
            }
            // verify required parameter 'keyId' is not null or undefined
            if (keyId === null || keyId === undefined) {
                throw new RequiredError('keyId','Required parameter keyId was null or undefined when calling retrieveMetatypeKey.');
            }
            const localVarPath = `/containers/{container_id}/metatypes/{metatype_id}/keys/{key_id}`
                .replace(`{${"container_id"}}`, encodeURIComponent(String(containerId)))
                .replace(`{${"metatype_id"}}`, encodeURIComponent(String(metatypeId)))
                .replace(`{${"key_id"}}`, encodeURIComponent(String(keyId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BearerAuth required

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates a single key for a metatype.
         * @summary Update Metatype Key
         * @param {UpdateMetatypeKeyRequest} body 
         * @param {string} containerId 
         * @param {string} metatypeId 
         * @param {string} keyId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateMetatypeKey: async (body: UpdateMetatypeKeyRequest, containerId: string, metatypeId: string, keyId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling updateMetatypeKey.');
            }
            // verify required parameter 'containerId' is not null or undefined
            if (containerId === null || containerId === undefined) {
                throw new RequiredError('containerId','Required parameter containerId was null or undefined when calling updateMetatypeKey.');
            }
            // verify required parameter 'metatypeId' is not null or undefined
            if (metatypeId === null || metatypeId === undefined) {
                throw new RequiredError('metatypeId','Required parameter metatypeId was null or undefined when calling updateMetatypeKey.');
            }
            // verify required parameter 'keyId' is not null or undefined
            if (keyId === null || keyId === undefined) {
                throw new RequiredError('keyId','Required parameter keyId was null or undefined when calling updateMetatypeKey.');
            }
            const localVarPath = `/containers/{container_id}/metatypes/{metatype_id}/keys/{key_id}`
                .replace(`{${"container_id"}}`, encodeURIComponent(String(containerId)))
                .replace(`{${"metatype_id"}}`, encodeURIComponent(String(metatypeId)))
                .replace(`{${"key_id"}}`, encodeURIComponent(String(keyId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BearerAuth required

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MetatypeKeysApi - functional programming interface
 * @export
 */
export const MetatypeKeysApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Archiving the metatype key prevents any new types from implementing the key. It *does not remove key/value pairs on existing types*. We highly recommend you archive type keys instead of deleting them so that previous data is not affected.
         * @summary Archive Metatype Key
         * @param {string} containerId 
         * @param {string} metatypeId 
         * @param {string} keyId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async archiveMetatypeKey(containerId: string, metatypeId: string, keyId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Generic200Response>> {
            const localVarAxiosArgs = await MetatypeKeysApiAxiosParamCreator(configuration).archiveMetatypeKey(containerId, metatypeId, keyId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Creates a new key for a metatype. Keys consist of a unique key name (unique to the metatype only), key type, default values, and allowed values. Of those, only the first two are required.  The `dataType` field accepts only one of the following values: number, string, date, boolean, enumeration, file.   The fields `defaultValue` and `options` will only accept an array of the following types: string, boolean, number, float.  Pass in an array for bulk creation.  Currently the validation and cardinality functionality of keys are NOT checked at data insertion.
         * @summary Create Metatype Key
         * @param {NewMetatypeKeyRequest} body 
         * @param {string} containerId 
         * @param {string} metatypeId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createMetatypeKey(body: NewMetatypeKeyRequest, containerId: string, metatypeId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateMetatypeKeysResponse>> {
            const localVarAxiosArgs = await MetatypeKeysApiAxiosParamCreator(configuration).createMetatypeKey(body, containerId, metatypeId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Lists all currently valid and available keys for the metatype.
         * @summary List Metatype's Keys
         * @param {string} containerId 
         * @param {string} metatypeId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listMetatypesKeys(containerId: string, metatypeId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListMetatypeKeysResponse>> {
            const localVarAxiosArgs = await MetatypeKeysApiAxiosParamCreator(configuration).listMetatypesKeys(containerId, metatypeId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Retrieve the specified key for the metatype.
         * @summary Retrieve Metatype Key
         * @param {string} containerId 
         * @param {string} metatypeId 
         * @param {string} keyId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveMetatypeKey(containerId: string, metatypeId: string, keyId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetMetatypeKeyResponse>> {
            const localVarAxiosArgs = await MetatypeKeysApiAxiosParamCreator(configuration).retrieveMetatypeKey(containerId, metatypeId, keyId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Updates a single key for a metatype.
         * @summary Update Metatype Key
         * @param {UpdateMetatypeKeyRequest} body 
         * @param {string} containerId 
         * @param {string} metatypeId 
         * @param {string} keyId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateMetatypeKey(body: UpdateMetatypeKeyRequest, containerId: string, metatypeId: string, keyId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UpdateMetatypeKeyResponse>> {
            const localVarAxiosArgs = await MetatypeKeysApiAxiosParamCreator(configuration).updateMetatypeKey(body, containerId, metatypeId, keyId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * MetatypeKeysApi - factory interface
 * @export
 */
export const MetatypeKeysApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Archiving the metatype key prevents any new types from implementing the key. It *does not remove key/value pairs on existing types*. We highly recommend you archive type keys instead of deleting them so that previous data is not affected.
         * @summary Archive Metatype Key
         * @param {string} containerId 
         * @param {string} metatypeId 
         * @param {string} keyId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        archiveMetatypeKey(containerId: string, metatypeId: string, keyId: string, options?: any): AxiosPromise<Generic200Response> {
            return MetatypeKeysApiFp(configuration).archiveMetatypeKey(containerId, metatypeId, keyId, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a new key for a metatype. Keys consist of a unique key name (unique to the metatype only), key type, default values, and allowed values. Of those, only the first two are required.  The `dataType` field accepts only one of the following values: number, string, date, boolean, enumeration, file.   The fields `defaultValue` and `options` will only accept an array of the following types: string, boolean, number, float.  Pass in an array for bulk creation.  Currently the validation and cardinality functionality of keys are NOT checked at data insertion.
         * @summary Create Metatype Key
         * @param {NewMetatypeKeyRequest} body 
         * @param {string} containerId 
         * @param {string} metatypeId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createMetatypeKey(body: NewMetatypeKeyRequest, containerId: string, metatypeId: string, options?: any): AxiosPromise<CreateMetatypeKeysResponse> {
            return MetatypeKeysApiFp(configuration).createMetatypeKey(body, containerId, metatypeId, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists all currently valid and available keys for the metatype.
         * @summary List Metatype's Keys
         * @param {string} containerId 
         * @param {string} metatypeId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listMetatypesKeys(containerId: string, metatypeId: string, options?: any): AxiosPromise<ListMetatypeKeysResponse> {
            return MetatypeKeysApiFp(configuration).listMetatypesKeys(containerId, metatypeId, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve the specified key for the metatype.
         * @summary Retrieve Metatype Key
         * @param {string} containerId 
         * @param {string} metatypeId 
         * @param {string} keyId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveMetatypeKey(containerId: string, metatypeId: string, keyId: string, options?: any): AxiosPromise<GetMetatypeKeyResponse> {
            return MetatypeKeysApiFp(configuration).retrieveMetatypeKey(containerId, metatypeId, keyId, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates a single key for a metatype.
         * @summary Update Metatype Key
         * @param {UpdateMetatypeKeyRequest} body 
         * @param {string} containerId 
         * @param {string} metatypeId 
         * @param {string} keyId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateMetatypeKey(body: UpdateMetatypeKeyRequest, containerId: string, metatypeId: string, keyId: string, options?: any): AxiosPromise<UpdateMetatypeKeyResponse> {
            return MetatypeKeysApiFp(configuration).updateMetatypeKey(body, containerId, metatypeId, keyId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * MetatypeKeysApi - object-oriented interface
 * @export
 * @class MetatypeKeysApi
 * @extends {BaseAPI}
 */
export class MetatypeKeysApi extends BaseAPI {
    /**
     * Archiving the metatype key prevents any new types from implementing the key. It *does not remove key/value pairs on existing types*. We highly recommend you archive type keys instead of deleting them so that previous data is not affected.
     * @summary Archive Metatype Key
     * @param {string} containerId 
     * @param {string} metatypeId 
     * @param {string} keyId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetatypeKeysApi
     */
    public archiveMetatypeKey(containerId: string, metatypeId: string, keyId: string, options?: any) {
        return MetatypeKeysApiFp(this.configuration).archiveMetatypeKey(containerId, metatypeId, keyId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Creates a new key for a metatype. Keys consist of a unique key name (unique to the metatype only), key type, default values, and allowed values. Of those, only the first two are required.  The `dataType` field accepts only one of the following values: number, string, date, boolean, enumeration, file.   The fields `defaultValue` and `options` will only accept an array of the following types: string, boolean, number, float.  Pass in an array for bulk creation.  Currently the validation and cardinality functionality of keys are NOT checked at data insertion.
     * @summary Create Metatype Key
     * @param {NewMetatypeKeyRequest} body 
     * @param {string} containerId 
     * @param {string} metatypeId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetatypeKeysApi
     */
    public createMetatypeKey(body: NewMetatypeKeyRequest, containerId: string, metatypeId: string, options?: any) {
        return MetatypeKeysApiFp(this.configuration).createMetatypeKey(body, containerId, metatypeId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Lists all currently valid and available keys for the metatype.
     * @summary List Metatype's Keys
     * @param {string} containerId 
     * @param {string} metatypeId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetatypeKeysApi
     */
    public listMetatypesKeys(containerId: string, metatypeId: string, options?: any) {
        return MetatypeKeysApiFp(this.configuration).listMetatypesKeys(containerId, metatypeId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Retrieve the specified key for the metatype.
     * @summary Retrieve Metatype Key
     * @param {string} containerId 
     * @param {string} metatypeId 
     * @param {string} keyId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetatypeKeysApi
     */
    public retrieveMetatypeKey(containerId: string, metatypeId: string, keyId: string, options?: any) {
        return MetatypeKeysApiFp(this.configuration).retrieveMetatypeKey(containerId, metatypeId, keyId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Updates a single key for a metatype.
     * @summary Update Metatype Key
     * @param {UpdateMetatypeKeyRequest} body 
     * @param {string} containerId 
     * @param {string} metatypeId 
     * @param {string} keyId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetatypeKeysApi
     */
    public updateMetatypeKey(body: UpdateMetatypeKeyRequest, containerId: string, metatypeId: string, keyId: string, options?: any) {
        return MetatypeKeysApiFp(this.configuration).updateMetatypeKey(body, containerId, metatypeId, keyId, options).then((request) => request(this.axios, this.basePath));
    }
}
