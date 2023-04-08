export interface ErrorAPI {
    statusCode: number;
    message:    string | string[];
    error?:      string;
}