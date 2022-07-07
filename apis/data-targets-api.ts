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
import { CreateDataTargetConfig } from '../models';
import { CreateDataTargetRequest } from '../models';
import { CreateDataTargetsResponse } from '../models';
import { Generic200Response } from '../models';
import { GetDataTargetResponse } from '../models';
import { ListDataTargetsResponse } from '../models';
import { UpdateDataTargetResponse } from '../models';
/**
 * DataTargetsApi - axios parameter creator
 * @export
 */
export const DataTargetsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Archive a data target, with options to permanently remove it.
         * @summary Archive Data Target
         * @param {string} containerId 
         * @param {string} dataTargetId 
         * @param {string} [archive] Set to true to archive the data target.
         * @param {string} [forceDelete] Set to true to force deletion of the data target.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        archiveDataTarget: async (containerId: string, dataTargetId: string, archive?: string, forceDelete?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'containerId' is not null or undefined
            if (containerId === null || containerId === undefined) {
                throw new RequiredError('containerId','Required parameter containerId was null or undefined when calling archiveDataTarget.');
            }
            // verify required parameter 'dataTargetId' is not null or undefined
            if (dataTargetId === null || dataTargetId === undefined) {
                throw new RequiredError('dataTargetId','Required parameter dataTargetId was null or undefined when calling archiveDataTarget.');
            }
            const localVarPath = `/containers/{container_id}/export/datatargets/{data_target_id}`
                .replace(`{${"container_id"}}`, encodeURIComponent(String(containerId)))
                .replace(`{${"data_target_id"}}`, encodeURIComponent(String(dataTargetId)));
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

            if (archive !== undefined) {
                localVarQueryParameter['archive'] = archive;
            }

            if (forceDelete !== undefined) {
                localVarQueryParameter['forceDelete'] = forceDelete;
            }

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
         * Create new datatarget. Supported data target types are `http` and `standard`.
         * @summary Create Data Target
         * @param {string} containerId 
         * @param {CreateDataTargetRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createDataTarget: async (containerId: string, body?: CreateDataTargetRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'containerId' is not null or undefined
            if (containerId === null || containerId === undefined) {
                throw new RequiredError('containerId','Required parameter containerId was null or undefined when calling createDataTarget.');
            }
            const localVarPath = `/containers/{container_id}/export/datatargets`
                .replace(`{${"container_id"}}`, encodeURIComponent(String(containerId)));
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
         * List the datatargets for the container.
         * @summary List Data Targets
         * @param {string} containerId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listDatTargets: async (containerId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'containerId' is not null or undefined
            if (containerId === null || containerId === undefined) {
                throw new RequiredError('containerId','Required parameter containerId was null or undefined when calling listDatTargets.');
            }
            const localVarPath = `/containers/{container_id}/export/datatargets`
                .replace(`{${"container_id"}}`, encodeURIComponent(String(containerId)));
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
         * Retrieve a single data target by ID.
         * @summary Retrieve Data Target
         * @param {string} containerId 
         * @param {string} dataTargetId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveDataTarget: async (containerId: string, dataTargetId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'containerId' is not null or undefined
            if (containerId === null || containerId === undefined) {
                throw new RequiredError('containerId','Required parameter containerId was null or undefined when calling retrieveDataTarget.');
            }
            // verify required parameter 'dataTargetId' is not null or undefined
            if (dataTargetId === null || dataTargetId === undefined) {
                throw new RequiredError('dataTargetId','Required parameter dataTargetId was null or undefined when calling retrieveDataTarget.');
            }
            const localVarPath = `/containers/{container_id}/export/datatargets/{data_target_id}`
                .replace(`{${"container_id"}}`, encodeURIComponent(String(containerId)))
                .replace(`{${"data_target_id"}}`, encodeURIComponent(String(dataTargetId)));
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
         * Sets a data target active.
         * @summary Set Data Target Active
         * @param {string} containerId 
         * @param {string} dataTargetId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        setDataTargetActive: async (containerId: string, dataTargetId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'containerId' is not null or undefined
            if (containerId === null || containerId === undefined) {
                throw new RequiredError('containerId','Required parameter containerId was null or undefined when calling setDataTargetActive.');
            }
            // verify required parameter 'dataTargetId' is not null or undefined
            if (dataTargetId === null || dataTargetId === undefined) {
                throw new RequiredError('dataTargetId','Required parameter dataTargetId was null or undefined when calling setDataTargetActive.');
            }
            const localVarPath = `/containers/{container_id}/export/datatargets/{data_target_id}/active`
                .replace(`{${"container_id"}}`, encodeURIComponent(String(containerId)))
                .replace(`{${"data_target_id"}}`, encodeURIComponent(String(dataTargetId)));
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
         * Updates a data target's configuration in storage. Note that this request body's structure must match that of the data target's adapter type.
         * @summary Set Data Target Configuration
         * @param {CreateDataTargetConfig} body 
         * @param {string} containerId 
         * @param {string} dataTargetId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        setDataTargetConfiguration: async (body: CreateDataTargetConfig, containerId: string, dataTargetId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling setDataTargetConfiguration.');
            }
            // verify required parameter 'containerId' is not null or undefined
            if (containerId === null || containerId === undefined) {
                throw new RequiredError('containerId','Required parameter containerId was null or undefined when calling setDataTargetConfiguration.');
            }
            // verify required parameter 'dataTargetId' is not null or undefined
            if (dataTargetId === null || dataTargetId === undefined) {
                throw new RequiredError('dataTargetId','Required parameter dataTargetId was null or undefined when calling setDataTargetConfiguration.');
            }
            const localVarPath = `/containers/{container_id}/export/datatargets/{data_target_id}`
                .replace(`{${"container_id"}}`, encodeURIComponent(String(containerId)))
                .replace(`{${"data_target_id"}}`, encodeURIComponent(String(dataTargetId)));
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
        /**
         * Sets a data target inactive.
         * @summary Set Data Target Inactive
         * @param {string} containerId 
         * @param {string} dataTargetId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        setDataTargetInactive: async (containerId: string, dataTargetId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'containerId' is not null or undefined
            if (containerId === null || containerId === undefined) {
                throw new RequiredError('containerId','Required parameter containerId was null or undefined when calling setDataTargetInactive.');
            }
            // verify required parameter 'dataTargetId' is not null or undefined
            if (dataTargetId === null || dataTargetId === undefined) {
                throw new RequiredError('dataTargetId','Required parameter dataTargetId was null or undefined when calling setDataTargetInactive.');
            }
            const localVarPath = `/containers/{container_id}/export/datatargets/{data_target_id}/active`
                .replace(`{${"container_id"}}`, encodeURIComponent(String(containerId)))
                .replace(`{${"data_target_id"}}`, encodeURIComponent(String(dataTargetId)));
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
    }
};

/**
 * DataTargetsApi - functional programming interface
 * @export
 */
export const DataTargetsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Archive a data target, with options to permanently remove it.
         * @summary Archive Data Target
         * @param {string} containerId 
         * @param {string} dataTargetId 
         * @param {string} [archive] Set to true to archive the data target.
         * @param {string} [forceDelete] Set to true to force deletion of the data target.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async archiveDataTarget(containerId: string, dataTargetId: string, archive?: string, forceDelete?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Generic200Response>> {
            const localVarAxiosArgs = await DataTargetsApiAxiosParamCreator(configuration).archiveDataTarget(containerId, dataTargetId, archive, forceDelete, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Create new datatarget. Supported data target types are `http` and `standard`.
         * @summary Create Data Target
         * @param {string} containerId 
         * @param {CreateDataTargetRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createDataTarget(containerId: string, body?: CreateDataTargetRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateDataTargetsResponse>> {
            const localVarAxiosArgs = await DataTargetsApiAxiosParamCreator(configuration).createDataTarget(containerId, body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * List the datatargets for the container.
         * @summary List Data Targets
         * @param {string} containerId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listDatTargets(containerId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListDataTargetsResponse>> {
            const localVarAxiosArgs = await DataTargetsApiAxiosParamCreator(configuration).listDatTargets(containerId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Retrieve a single data target by ID.
         * @summary Retrieve Data Target
         * @param {string} containerId 
         * @param {string} dataTargetId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveDataTarget(containerId: string, dataTargetId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetDataTargetResponse>> {
            const localVarAxiosArgs = await DataTargetsApiAxiosParamCreator(configuration).retrieveDataTarget(containerId, dataTargetId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Sets a data target active.
         * @summary Set Data Target Active
         * @param {string} containerId 
         * @param {string} dataTargetId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async setDataTargetActive(containerId: string, dataTargetId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Generic200Response>> {
            const localVarAxiosArgs = await DataTargetsApiAxiosParamCreator(configuration).setDataTargetActive(containerId, dataTargetId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Updates a data target's configuration in storage. Note that this request body's structure must match that of the data target's adapter type.
         * @summary Set Data Target Configuration
         * @param {CreateDataTargetConfig} body 
         * @param {string} containerId 
         * @param {string} dataTargetId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async setDataTargetConfiguration(body: CreateDataTargetConfig, containerId: string, dataTargetId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UpdateDataTargetResponse>> {
            const localVarAxiosArgs = await DataTargetsApiAxiosParamCreator(configuration).setDataTargetConfiguration(body, containerId, dataTargetId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Sets a data target inactive.
         * @summary Set Data Target Inactive
         * @param {string} containerId 
         * @param {string} dataTargetId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async setDataTargetInactive(containerId: string, dataTargetId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Generic200Response>> {
            const localVarAxiosArgs = await DataTargetsApiAxiosParamCreator(configuration).setDataTargetInactive(containerId, dataTargetId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * DataTargetsApi - factory interface
 * @export
 */
export const DataTargetsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Archive a data target, with options to permanently remove it.
         * @summary Archive Data Target
         * @param {string} containerId 
         * @param {string} dataTargetId 
         * @param {string} [archive] Set to true to archive the data target.
         * @param {string} [forceDelete] Set to true to force deletion of the data target.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        archiveDataTarget(containerId: string, dataTargetId: string, archive?: string, forceDelete?: string, options?: any): AxiosPromise<Generic200Response> {
            return DataTargetsApiFp(configuration).archiveDataTarget(containerId, dataTargetId, archive, forceDelete, options).then((request) => request(axios, basePath));
        },
        /**
         * Create new datatarget. Supported data target types are `http` and `standard`.
         * @summary Create Data Target
         * @param {string} containerId 
         * @param {CreateDataTargetRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createDataTarget(containerId: string, body?: CreateDataTargetRequest, options?: any): AxiosPromise<CreateDataTargetsResponse> {
            return DataTargetsApiFp(configuration).createDataTarget(containerId, body, options).then((request) => request(axios, basePath));
        },
        /**
         * List the datatargets for the container.
         * @summary List Data Targets
         * @param {string} containerId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listDatTargets(containerId: string, options?: any): AxiosPromise<ListDataTargetsResponse> {
            return DataTargetsApiFp(configuration).listDatTargets(containerId, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve a single data target by ID.
         * @summary Retrieve Data Target
         * @param {string} containerId 
         * @param {string} dataTargetId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveDataTarget(containerId: string, dataTargetId: string, options?: any): AxiosPromise<GetDataTargetResponse> {
            return DataTargetsApiFp(configuration).retrieveDataTarget(containerId, dataTargetId, options).then((request) => request(axios, basePath));
        },
        /**
         * Sets a data target active.
         * @summary Set Data Target Active
         * @param {string} containerId 
         * @param {string} dataTargetId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        setDataTargetActive(containerId: string, dataTargetId: string, options?: any): AxiosPromise<Generic200Response> {
            return DataTargetsApiFp(configuration).setDataTargetActive(containerId, dataTargetId, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates a data target's configuration in storage. Note that this request body's structure must match that of the data target's adapter type.
         * @summary Set Data Target Configuration
         * @param {CreateDataTargetConfig} body 
         * @param {string} containerId 
         * @param {string} dataTargetId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        setDataTargetConfiguration(body: CreateDataTargetConfig, containerId: string, dataTargetId: string, options?: any): AxiosPromise<UpdateDataTargetResponse> {
            return DataTargetsApiFp(configuration).setDataTargetConfiguration(body, containerId, dataTargetId, options).then((request) => request(axios, basePath));
        },
        /**
         * Sets a data target inactive.
         * @summary Set Data Target Inactive
         * @param {string} containerId 
         * @param {string} dataTargetId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        setDataTargetInactive(containerId: string, dataTargetId: string, options?: any): AxiosPromise<Generic200Response> {
            return DataTargetsApiFp(configuration).setDataTargetInactive(containerId, dataTargetId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DataTargetsApi - object-oriented interface
 * @export
 * @class DataTargetsApi
 * @extends {BaseAPI}
 */
export class DataTargetsApi extends BaseAPI {
    /**
     * Archive a data target, with options to permanently remove it.
     * @summary Archive Data Target
     * @param {string} containerId 
     * @param {string} dataTargetId 
     * @param {string} [archive] Set to true to archive the data target.
     * @param {string} [forceDelete] Set to true to force deletion of the data target.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataTargetsApi
     */
    public archiveDataTarget(containerId: string, dataTargetId: string, archive?: string, forceDelete?: string, options?: any) {
        return DataTargetsApiFp(this.configuration).archiveDataTarget(containerId, dataTargetId, archive, forceDelete, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Create new datatarget. Supported data target types are `http` and `standard`.
     * @summary Create Data Target
     * @param {string} containerId 
     * @param {CreateDataTargetRequest} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataTargetsApi
     */
    public createDataTarget(containerId: string, body?: CreateDataTargetRequest, options?: any) {
        return DataTargetsApiFp(this.configuration).createDataTarget(containerId, body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * List the datatargets for the container.
     * @summary List Data Targets
     * @param {string} containerId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataTargetsApi
     */
    public listDatTargets(containerId: string, options?: any) {
        return DataTargetsApiFp(this.configuration).listDatTargets(containerId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Retrieve a single data target by ID.
     * @summary Retrieve Data Target
     * @param {string} containerId 
     * @param {string} dataTargetId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataTargetsApi
     */
    public retrieveDataTarget(containerId: string, dataTargetId: string, options?: any) {
        return DataTargetsApiFp(this.configuration).retrieveDataTarget(containerId, dataTargetId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Sets a data target active.
     * @summary Set Data Target Active
     * @param {string} containerId 
     * @param {string} dataTargetId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataTargetsApi
     */
    public setDataTargetActive(containerId: string, dataTargetId: string, options?: any) {
        return DataTargetsApiFp(this.configuration).setDataTargetActive(containerId, dataTargetId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Updates a data target's configuration in storage. Note that this request body's structure must match that of the data target's adapter type.
     * @summary Set Data Target Configuration
     * @param {CreateDataTargetConfig} body 
     * @param {string} containerId 
     * @param {string} dataTargetId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataTargetsApi
     */
    public setDataTargetConfiguration(body: CreateDataTargetConfig, containerId: string, dataTargetId: string, options?: any) {
        return DataTargetsApiFp(this.configuration).setDataTargetConfiguration(body, containerId, dataTargetId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Sets a data target inactive.
     * @summary Set Data Target Inactive
     * @param {string} containerId 
     * @param {string} dataTargetId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataTargetsApi
     */
    public setDataTargetInactive(containerId: string, dataTargetId: string, options?: any) {
        return DataTargetsApiFp(this.configuration).setDataTargetInactive(containerId, dataTargetId, options).then((request) => request(this.axios, this.basePath));
    }
}
