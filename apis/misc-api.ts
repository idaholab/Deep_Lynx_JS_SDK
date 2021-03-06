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
/**
 * MiscApi - axios parameter creator
 * @export
 */
export const MiscApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Simple endpoint, returns 200 on call. Can be used for a simple Up monitor by an external service.
         * @summary Health
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        health: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/health`;
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
    }
};

/**
 * MiscApi - functional programming interface
 * @export
 */
export const MiscApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Simple endpoint, returns 200 on call. Can be used for a simple Up monitor by an external service.
         * @summary Health
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async health(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await MiscApiAxiosParamCreator(configuration).health(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * MiscApi - factory interface
 * @export
 */
export const MiscApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Simple endpoint, returns 200 on call. Can be used for a simple Up monitor by an external service.
         * @summary Health
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        health(options?: any): AxiosPromise<string> {
            return MiscApiFp(configuration).health(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * MiscApi - object-oriented interface
 * @export
 * @class MiscApi
 * @extends {BaseAPI}
 */
export class MiscApi extends BaseAPI {
    /**
     * Simple endpoint, returns 200 on call. Can be used for a simple Up monitor by an external service.
     * @summary Health
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MiscApi
     */
    public health(options?: any) {
        return MiscApiFp(this.configuration).health(options).then((request) => request(this.axios, this.basePath));
    }
}
