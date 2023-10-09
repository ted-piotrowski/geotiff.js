export class FetchClient extends BaseClient {
    constructor(url: any, credentials: any);
    credentials: any;
    request({ headers, credentials, signal }?: {
        headers: any;
        credentials: any;
        signal: any;
    }): Promise<FetchResponse>;
}
import { BaseClient } from "./base.js";
declare class FetchResponse extends BaseResponse {
    /**
     * BaseResponse facade for fetch API Response
     * @param {Response} response
     */
    constructor(response: Response);
    response: Response;
    get status(): any;
    getHeader(name: any): any;
    getData(): Promise<any>;
}
import { BaseResponse } from "./base.js";
export {};
//# sourceMappingURL=fetch.d.ts.map