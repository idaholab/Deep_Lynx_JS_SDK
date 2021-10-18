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
import { Generic200Response } from '../models';
import { GetDataExportResponse } from '../models';
import { ListDataExportsResponse } from '../models';
import { NewDataExportRequest } from '../models';
/**
 * DataExportApi - axios parameter creator
 * @export
 */
export const DataExportApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a new data export with the included configuration. Configuration values may be encrypted depending on the adapter you've choosen. See the readme for the exporters for more information.
         * @summary CreateDataExport
         * @param {NewDataExportRequest} body 
         * @param {string} containerId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createDataExport: async (body: NewDataExportRequest, containerId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling createDataExport.');
            }
            // verify required parameter 'containerId' is not null or undefined
            if (containerId === null || containerId === undefined) {
                throw new RequiredError('containerId','Required parameter containerId was null or undefined when calling createDataExport.');
            }
            const localVarPath = `/containers/{container_id}/data/export`
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

            // authentication httpBearer required

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
         * Deletes a data export record. This does not guarantee the export will stop immediately.
         * @summary DeleteDataExport
         * @param {string} containerId 
         * @param {string} exportId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteDataExport: async (containerId: string, exportId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'containerId' is not null or undefined
            if (containerId === null || containerId === undefined) {
                throw new RequiredError('containerId','Required parameter containerId was null or undefined when calling deleteDataExport.');
            }
            // verify required parameter 'exportId' is not null or undefined
            if (exportId === null || exportId === undefined) {
                throw new RequiredError('exportId','Required parameter exportId was null or undefined when calling deleteDataExport.');
            }
            const localVarPath = `/containers/{container_id}/data/export/{export_id}`
                .replace(`{${"container_id"}}`, encodeURIComponent(String(containerId)))
                .replace(`{${"export_id"}}`, encodeURIComponent(String(exportId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication httpBearer required

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
         * List data exports for the container.
         * @summary ListDataExports
         * @param {string} containerId 
         * @param {boolean} [count] boolean indicating if the return value should be a count only
         * @param {number} [limit] 
         * @param {number} [offset] 
         * @param {string} [sortBy] column to sort results by
         * @param {boolean} [sortDesc] boolean indicating if results should be in descending order
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listDataExports: async (containerId: string, count?: boolean, limit?: number, offset?: number, sortBy?: string, sortDesc?: boolean, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'containerId' is not null or undefined
            if (containerId === null || containerId === undefined) {
                throw new RequiredError('containerId','Required parameter containerId was null or undefined when calling listDataExports.');
            }
            const localVarPath = `/containers/{container_id}/data/export`
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

            // authentication httpBearer required

            if (count !== undefined) {
                localVarQueryParameter['count'] = count;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (sortBy !== undefined) {
                localVarQueryParameter['sortBy'] = sortBy;
            }

            if (sortDesc !== undefined) {
                localVarQueryParameter['sortDesc'] = sortDesc;
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
         * Fetch a data export record by ID
         * @summary RetrieveDataExport
         * @param {string} containerId 
         * @param {string} exportId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveDataExport: async (containerId: string, exportId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'containerId' is not null or undefined
            if (containerId === null || containerId === undefined) {
                throw new RequiredError('containerId','Required parameter containerId was null or undefined when calling retrieveDataExport.');
            }
            // verify required parameter 'exportId' is not null or undefined
            if (exportId === null || exportId === undefined) {
                throw new RequiredError('exportId','Required parameter exportId was null or undefined when calling retrieveDataExport.');
            }
            const localVarPath = `/containers/{container_id}/data/export/{export_id}`
                .replace(`{${"container_id"}}`, encodeURIComponent(String(containerId)))
                .replace(`{${"export_id"}}`, encodeURIComponent(String(exportId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication httpBearer required

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
         * Start or restart a data export by id.
         * @summary StartDataExport
         * @param {string} containerId 
         * @param {string} exportId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        startDataExport: async (containerId: string, exportId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'containerId' is not null or undefined
            if (containerId === null || containerId === undefined) {
                throw new RequiredError('containerId','Required parameter containerId was null or undefined when calling startDataExport.');
            }
            // verify required parameter 'exportId' is not null or undefined
            if (exportId === null || exportId === undefined) {
                throw new RequiredError('exportId','Required parameter exportId was null or undefined when calling startDataExport.');
            }
            const localVarPath = `/containers/{container_id}/data/export/{export_id}`
                .replace(`{${"container_id"}}`, encodeURIComponent(String(containerId)))
                .replace(`{${"export_id"}}`, encodeURIComponent(String(exportId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication httpBearer required

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
         * Stops a data export. Please note that this just sends a **stop** signal. The application's export adapter determines how to handle the said signal. In some cases the export stopping might not be immediate.
         * @summary StopDataExport
         * @param {string} containerId 
         * @param {string} exportId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        stopDataExport: async (containerId: string, exportId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'containerId' is not null or undefined
            if (containerId === null || containerId === undefined) {
                throw new RequiredError('containerId','Required parameter containerId was null or undefined when calling stopDataExport.');
            }
            // verify required parameter 'exportId' is not null or undefined
            if (exportId === null || exportId === undefined) {
                throw new RequiredError('exportId','Required parameter exportId was null or undefined when calling stopDataExport.');
            }
            const localVarPath = `/containers/{container_id}/data/export/{export_id}`
                .replace(`{${"container_id"}}`, encodeURIComponent(String(containerId)))
                .replace(`{${"export_id"}}`, encodeURIComponent(String(exportId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication httpBearer required

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
 * DataExportApi - functional programming interface
 * @export
 */
export const DataExportApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Create a new data export with the included configuration. Configuration values may be encrypted depending on the adapter you've choosen. See the readme for the exporters for more information.
         * @summary CreateDataExport
         * @param {NewDataExportRequest} body 
         * @param {string} containerId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createDataExport(body: NewDataExportRequest, containerId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Generic200Response>> {
            const localVarAxiosArgs = await DataExportApiAxiosParamCreator(configuration).createDataExport(body, containerId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Deletes a data export record. This does not guarantee the export will stop immediately.
         * @summary DeleteDataExport
         * @param {string} containerId 
         * @param {string} exportId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteDataExport(containerId: string, exportId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Generic200Response>> {
            const localVarAxiosArgs = await DataExportApiAxiosParamCreator(configuration).deleteDataExport(containerId, exportId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * List data exports for the container.
         * @summary ListDataExports
         * @param {string} containerId 
         * @param {boolean} [count] boolean indicating if the return value should be a count only
         * @param {number} [limit] 
         * @param {number} [offset] 
         * @param {string} [sortBy] column to sort results by
         * @param {boolean} [sortDesc] boolean indicating if results should be in descending order
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listDataExports(containerId: string, count?: boolean, limit?: number, offset?: number, sortBy?: string, sortDesc?: boolean, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListDataExportsResponse>> {
            const localVarAxiosArgs = await DataExportApiAxiosParamCreator(configuration).listDataExports(containerId, count, limit, offset, sortBy, sortDesc, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Fetch a data export record by ID
         * @summary RetrieveDataExport
         * @param {string} containerId 
         * @param {string} exportId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveDataExport(containerId: string, exportId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetDataExportResponse>> {
            const localVarAxiosArgs = await DataExportApiAxiosParamCreator(configuration).retrieveDataExport(containerId, exportId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Start or restart a data export by id.
         * @summary StartDataExport
         * @param {string} containerId 
         * @param {string} exportId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async startDataExport(containerId: string, exportId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Generic200Response>> {
            const localVarAxiosArgs = await DataExportApiAxiosParamCreator(configuration).startDataExport(containerId, exportId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Stops a data export. Please note that this just sends a **stop** signal. The application's export adapter determines how to handle the said signal. In some cases the export stopping might not be immediate.
         * @summary StopDataExport
         * @param {string} containerId 
         * @param {string} exportId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async stopDataExport(containerId: string, exportId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Generic200Response>> {
            const localVarAxiosArgs = await DataExportApiAxiosParamCreator(configuration).stopDataExport(containerId, exportId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * DataExportApi - factory interface
 * @export
 */
export const DataExportApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Create a new data export with the included configuration. Configuration values may be encrypted depending on the adapter you've choosen. See the readme for the exporters for more information.
         * @summary CreateDataExport
         * @param {NewDataExportRequest} body 
         * @param {string} containerId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createDataExport(body: NewDataExportRequest, containerId: string, options?: any): AxiosPromise<Generic200Response> {
            return DataExportApiFp(configuration).createDataExport(body, containerId, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes a data export record. This does not guarantee the export will stop immediately.
         * @summary DeleteDataExport
         * @param {string} containerId 
         * @param {string} exportId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteDataExport(containerId: string, exportId: string, options?: any): AxiosPromise<Generic200Response> {
            return DataExportApiFp(configuration).deleteDataExport(containerId, exportId, options).then((request) => request(axios, basePath));
        },
        /**
         * List data exports for the container.
         * @summary ListDataExports
         * @param {string} containerId 
         * @param {boolean} [count] boolean indicating if the return value should be a count only
         * @param {number} [limit] 
         * @param {number} [offset] 
         * @param {string} [sortBy] column to sort results by
         * @param {boolean} [sortDesc] boolean indicating if results should be in descending order
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listDataExports(containerId: string, count?: boolean, limit?: number, offset?: number, sortBy?: string, sortDesc?: boolean, options?: any): AxiosPromise<ListDataExportsResponse> {
            return DataExportApiFp(configuration).listDataExports(containerId, count, limit, offset, sortBy, sortDesc, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetch a data export record by ID
         * @summary RetrieveDataExport
         * @param {string} containerId 
         * @param {string} exportId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveDataExport(containerId: string, exportId: string, options?: any): AxiosPromise<GetDataExportResponse> {
            return DataExportApiFp(configuration).retrieveDataExport(containerId, exportId, options).then((request) => request(axios, basePath));
        },
        /**
         * Start or restart a data export by id.
         * @summary StartDataExport
         * @param {string} containerId 
         * @param {string} exportId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        startDataExport(containerId: string, exportId: string, options?: any): AxiosPromise<Generic200Response> {
            return DataExportApiFp(configuration).startDataExport(containerId, exportId, options).then((request) => request(axios, basePath));
        },
        /**
         * Stops a data export. Please note that this just sends a **stop** signal. The application's export adapter determines how to handle the said signal. In some cases the export stopping might not be immediate.
         * @summary StopDataExport
         * @param {string} containerId 
         * @param {string} exportId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        stopDataExport(containerId: string, exportId: string, options?: any): AxiosPromise<Generic200Response> {
            return DataExportApiFp(configuration).stopDataExport(containerId, exportId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DataExportApi - object-oriented interface
 * @export
 * @class DataExportApi
 * @extends {BaseAPI}
 */
export class DataExportApi extends BaseAPI {
    /**
     * Create a new data export with the included configuration. Configuration values may be encrypted depending on the adapter you've choosen. See the readme for the exporters for more information.
     * @summary CreateDataExport
     * @param {NewDataExportRequest} body 
     * @param {string} containerId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataExportApi
     */
    public createDataExport(body: NewDataExportRequest, containerId: string, options?: any) {
        return DataExportApiFp(this.configuration).createDataExport(body, containerId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Deletes a data export record. This does not guarantee the export will stop immediately.
     * @summary DeleteDataExport
     * @param {string} containerId 
     * @param {string} exportId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataExportApi
     */
    public deleteDataExport(containerId: string, exportId: string, options?: any) {
        return DataExportApiFp(this.configuration).deleteDataExport(containerId, exportId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * List data exports for the container.
     * @summary ListDataExports
     * @param {string} containerId 
     * @param {boolean} [count] boolean indicating if the return value should be a count only
     * @param {number} [limit] 
     * @param {number} [offset] 
     * @param {string} [sortBy] column to sort results by
     * @param {boolean} [sortDesc] boolean indicating if results should be in descending order
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataExportApi
     */
    public listDataExports(containerId: string, count?: boolean, limit?: number, offset?: number, sortBy?: string, sortDesc?: boolean, options?: any) {
        return DataExportApiFp(this.configuration).listDataExports(containerId, count, limit, offset, sortBy, sortDesc, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Fetch a data export record by ID
     * @summary RetrieveDataExport
     * @param {string} containerId 
     * @param {string} exportId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataExportApi
     */
    public retrieveDataExport(containerId: string, exportId: string, options?: any) {
        return DataExportApiFp(this.configuration).retrieveDataExport(containerId, exportId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Start or restart a data export by id.
     * @summary StartDataExport
     * @param {string} containerId 
     * @param {string} exportId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataExportApi
     */
    public startDataExport(containerId: string, exportId: string, options?: any) {
        return DataExportApiFp(this.configuration).startDataExport(containerId, exportId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Stops a data export. Please note that this just sends a **stop** signal. The application's export adapter determines how to handle the said signal. In some cases the export stopping might not be immediate.
     * @summary StopDataExport
     * @param {string} containerId 
     * @param {string} exportId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataExportApi
     */
    public stopDataExport(containerId: string, exportId: string, options?: any) {
        return DataExportApiFp(this.configuration).stopDataExport(containerId, exportId, options).then((request) => request(this.axios, this.basePath));
    }
}
