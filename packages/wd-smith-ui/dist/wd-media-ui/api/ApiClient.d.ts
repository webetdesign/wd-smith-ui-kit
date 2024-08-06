import { Client } from './types/openapi.d.ts';

declare class ApiClient {
    private static instance;
    private static initializing;
    private constructor();
    static getInstance(): Promise<Client>;
}
export default ApiClient;
