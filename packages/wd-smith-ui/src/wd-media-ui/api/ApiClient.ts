import OpenAPIClientAxios from "openapi-client-axios";
import type {Client} from './types/openapi.d.ts';

class ApiClient {
  private static instance: Client | null = null;
  private static initializing: Promise<Client> | null = null;

  private constructor() {}

  public static async getInstance(): Promise<Client> {
    if (ApiClient.instance) {
      // console.log('Returning existing instance:', ApiClient.instance);
      return ApiClient.instance;
    }

    if (!ApiClient.initializing) {
      // console.log('Initializing new instance...');
      ApiClient.initializing = (async () => {
        const api = new OpenAPIClientAxios({
          definition: 'https://local.smith.fr/wd-media-api/docs.jsonopenapi',
          transformOperationMethod: (operationMethod, operation) => {
            return (params, body, config) => {
              // ajoute le header Content-Type : application/merge-patch+json pour toutes les requêtes patch
              if (operation.method === 'patch') {
                config = config || {};
                config.headers = {
                  'Content-Type': 'application/merge-patch+json',
                  ...config.headers,
                };
              }
              return operationMethod(params, body, config);
            };
          }
        });

        api.withServer({ url: 'https://local.smith.fr/' });

        const instance = await api.init<Client>();
        ApiClient.instance = instance;
        ApiClient.initializing = null; // Réinitialiser pour permettre de futures initialisations si nécessaire
        // console.log('Instance initialized:', instance);
        return instance;
      })();
    }

    // console.log('Waiting for initialization...');
    return ApiClient.initializing;
  }
}

export default ApiClient;
