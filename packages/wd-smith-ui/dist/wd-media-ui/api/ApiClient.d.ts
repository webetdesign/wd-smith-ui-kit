import { Client } from './types/openapi.d.ts';

declare class ApiClient {
    private static instance;
    private static initializing;
    private static serverUrl;
    private constructor();
    static configure(apiUrl: string): void;
    static getInstance(): Promise<Client>;
}
export default ApiClient;
