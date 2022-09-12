import { HttpStatus } from "@nestjs/common";
class HttpResponse {
    statusCode: any;
    body: any;
    constructor(statusCode: any, body: any) {
        this.statusCode = statusCode;
        this.body = body;
    }
    static create(responseCode: any, body: any) {
        // if (responseCode === HttpStatus.INTERNAL_SERVER_ERROR || responseCode === HttpStatus.NOT_FOUND || responseCode === HttpStatus.UNAUTHORIZED) {
        //     return new HttpResponse(responseCode, { message: body });
        // }
        return new HttpResponse(responseCode, body);
    }

    static convertToExpress(res: any, httpResponse: any) {
        return res.status(httpResponse.statusCode).json(httpResponse.body);

    }

}

export default HttpResponse;