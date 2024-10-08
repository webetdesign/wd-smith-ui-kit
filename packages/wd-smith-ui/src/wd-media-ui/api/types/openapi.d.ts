import type {
  OpenAPIClient,
  Parameters,
  UnknownParamsObject,
  OperationResponse,
  AxiosRequestConfig,
} from 'openapi-client-axios';

declare namespace Components {
    namespace Schemas {
        /**
         *
         */
        export interface Folder {
            id: number;
            label?: string;
            code?: string | null;
            lft?: number;
            rgt?: number;
            lvl?: number;
            /**
             * example:
             * https://example.com/
             */
            root?: string | null; // iri-reference
            /**
             * example:
             * https://example.com/
             */
            parent?: string | null; // iri-reference
            createdAt?: string; // date-time
            updatedAt?: string; // date-time
        }
        /**
         *
         */
        export interface FolderJsonld {
            "@context"?: string | {
                [name: string]: any;
                "@vocab": string;
                hydra: "http://www.w3.org/ns/hydra/core#";
            };
            "@id"?: string;
            "@type"?: string;
            id: number;
            label?: string;
            code?: string | null;
            lft?: number;
            rgt?: number;
            lvl?: number;
            /**
             * example:
             * https://example.com/
             */
            root?: string | null; // iri-reference
            /**
             * example:
             * https://example.com/
             */
            parent?: string | null; // iri-reference
            createdAt?: string; // date-time
            updatedAt?: string; // date-time
        }
        /**
         *
         */
        export interface FolderJsonldRead {
            "@context"?: string | {
                [name: string]: any;
                "@vocab": string;
                hydra: "http://www.w3.org/ns/hydra/core#";
            };
            "@id"?: string;
            "@type"?: string;
            id: number;
            label?: string;
            code?: string | null;
            lft?: number;
            rgt?: number;
            lvl?: number;
            /**
             * example:
             * https://example.com/
             */
            parent?: string | null; // iri-reference
            createdAt?: string; // date-time
            updatedAt?: string; // date-time
        }
        /**
         *
         */
        export interface FolderJsonldWrite {
            label?: string;
            code?: string | null;
            /**
             * example:
             * https://example.com/
             */
            parent?: string | null; // iri-reference
        }
        /**
         *
         */
        export interface FolderRead {
            id: number;
            label?: string;
            code?: string | null;
            lft?: number;
            rgt?: number;
            lvl?: number;
            /**
             * example:
             * https://example.com/
             */
            parent?: string | null; // iri-reference
            createdAt?: string; // date-time
            updatedAt?: string; // date-time
        }
        /**
         *
         */
        export interface FolderWrite {
            label?: string;
            code?: string | null;
            /**
             * example:
             * https://example.com/
             */
            parent?: string | null; // iri-reference
        }
        /**
         *
         */
        export interface Media {
            id?: number;
            label?: string;
            category?: string | null;
            categoryLabel?: string | null;
            fileName?: string | null;
            file?: string | null; // binary
            mimeType?: string;
            extension?: string;
            cropData?: string | null;
            description?: string | null;
            permalink?: string | null;
            alt?: string | null;
            reference?: string | null;
            thumbnail?: string | null;
            createdAt?: string; // date-time
            updatedAt?: string; // date-time
            picture?: boolean;
            gif?: boolean;
            svg?: boolean;
        }
        /**
         *
         */
        export interface MediaJsonld {
            "@context"?: string | {
                [name: string]: any;
                "@vocab": string;
                hydra: "http://www.w3.org/ns/hydra/core#";
            };
            "@id"?: string;
            "@type"?: string;
            id?: number;
            label?: string;
            category?: string | null;
            categoryLabel?: string | null;
            fileName?: string | null;
            file?: string | null; // binary
            mimeType?: string;
            extension?: string;
            cropData?: string | null;
            description?: string | null;
            permalink?: string | null;
            alt?: string | null;
            reference?: string | null;
            thumbnail?: string | null;
            createdAt?: string; // date-time
            updatedAt?: string; // date-time
            picture?: boolean;
            gif?: boolean;
            svg?: boolean;
        }
        /**
         *
         */
        export interface MediaJsonldRead {
            "@context"?: string | {
                [name: string]: any;
                "@vocab": string;
                hydra: "http://www.w3.org/ns/hydra/core#";
            };
            "@id"?: string;
            "@type"?: string;
            id?: number;
            label?: string;
            category?: string | null;
            categoryLabel?: string | null;
            fileName?: string | null;
            mimeType?: string;
            extension?: string;
            cropData?: string | null;
            description?: string | null;
            permalink?: string | null;
            reference?: string | null;
            thumbnail?: string | null;
            createdAt?: string; // date-time
            updatedAt?: string; // date-time
            picture?: boolean;
            gif?: boolean;
            svg?: boolean;
        }
        /**
         *
         */
        export interface MediaRead {
            id?: number;
            label?: string;
            category?: string | null;
            categoryLabel?: string | null;
            fileName?: string | null;
            mimeType?: string;
            extension?: string;
            cropData?: string | null;
            description?: string | null;
            permalink?: string | null;
            reference?: string | null;
            thumbnail?: string | null;
            createdAt?: string; // date-time
            updatedAt?: string; // date-time
            picture?: boolean;
            gif?: boolean;
            svg?: boolean;
        }
    }
}
declare namespace Paths {
    namespace DeleteFolder {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $204 {
            }
            export interface $404 {
            }
        }
    }
    namespace DeleteMedia {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $204 {
            }
            export interface $404 {
            }
        }
    }
    namespace GetFolder {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = /*  */ Components.Schemas.FolderRead;
            export interface $404 {
            }
        }
    }
    namespace GetFolders {
        namespace Responses {
            export interface $200 {
                "hydra:member": /*  */ Components.Schemas.FolderJsonldRead[];
                "hydra:totalItems"?: number;
                /**
                 * example:
                 * {
                 *   "@id": "string",
                 *   "type": "string",
                 *   "hydra:first": "string",
                 *   "hydra:last": "string",
                 *   "hydra:previous": "string",
                 *   "hydra:next": "string"
                 * }
                 */
                "hydra:view"?: {
                    "@id"?: string; // iri-reference
                    "@type"?: string;
                    "hydra:first"?: string; // iri-reference
                    "hydra:last"?: string; // iri-reference
                    "hydra:previous"?: string; // iri-reference
                    "hydra:next"?: string; // iri-reference
                };
                "hydra:search"?: {
                    "@type"?: string;
                    "hydra:template"?: string;
                    "hydra:variableRepresentation"?: string;
                    "hydra:mapping"?: {
                        "@type"?: string;
                        variable?: string;
                        property?: string | null;
                        required?: boolean;
                    }[];
                };
            }
        }
    }
    namespace GetMedia {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export type $200 = /*  */ Components.Schemas.MediaRead;
            export interface $404 {
            }
        }
    }
    namespace GetMedias {
        namespace Parameters {
            export type Folder = string[];
            export type Label = string;
            export type Page = number;
        }
        export interface QueryParameters {
            page?: Parameters.Page;
            label?: Parameters.Label;
            folder?: Parameters.Folder;
            "folder[]"?: Parameters.Folder;
        }
        namespace Responses {
            export interface $200 {
                "hydra:member": /*  */ Components.Schemas.MediaJsonldRead[];
                "hydra:totalItems"?: number;
                /**
                 * example:
                 * {
                 *   "@id": "string",
                 *   "type": "string",
                 *   "hydra:first": "string",
                 *   "hydra:last": "string",
                 *   "hydra:previous": "string",
                 *   "hydra:next": "string"
                 * }
                 */
                "hydra:view"?: {
                    "@id"?: string; // iri-reference
                    "@type"?: string;
                    "hydra:first"?: string; // iri-reference
                    "hydra:last"?: string; // iri-reference
                    "hydra:previous"?: string; // iri-reference
                    "hydra:next"?: string; // iri-reference
                };
                "hydra:search"?: {
                    "@type"?: string;
                    "hydra:template"?: string;
                    "hydra:variableRepresentation"?: string;
                    "hydra:mapping"?: {
                        "@type"?: string;
                        variable?: string;
                        property?: string | null;
                        required?: boolean;
                    }[];
                };
            }
        }
    }
    namespace PatchFolder {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = /*  */ Components.Schemas.FolderWrite;
        namespace Responses {
            export type $200 = /*  */ Components.Schemas.FolderRead;
            export interface $400 {
            }
            export interface $404 {
            }
            export interface $422 {
            }
        }
    }
    namespace PatchMedia {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = /*  */ Components.Schemas.Media;
        namespace Responses {
            export type $200 = /*  */ Components.Schemas.MediaRead;
            export interface $400 {
            }
            export interface $404 {
            }
            export interface $422 {
            }
        }
    }
    namespace PatchMediaFile {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface RequestBody {
            file?: string; // binary
        }
        namespace Responses {
            export type $201 = /*  */ Components.Schemas.MediaRead;
            export interface $400 {
            }
            export interface $422 {
            }
        }
    }
    namespace PostFolder {
        export type RequestBody = /*  */ Components.Schemas.FolderWrite;
        namespace Responses {
            export type $201 = /*  */ Components.Schemas.FolderRead;
            export interface $400 {
            }
            export interface $422 {
            }
        }
    }
    namespace PostMedia {
        export interface RequestBody {
            file?: string; // binary
        }
        namespace Responses {
            export type $201 = /*  */ Components.Schemas.MediaRead;
            export interface $400 {
            }
            export interface $422 {
            }
        }
    }
    namespace PutFolder {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = /*  */ Components.Schemas.FolderWrite;
        namespace Responses {
            export type $200 = /*  */ Components.Schemas.FolderRead;
            export interface $400 {
            }
            export interface $404 {
            }
            export interface $422 {
            }
        }
    }
    namespace PutMedia {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = /*  */ Components.Schemas.Media;
        namespace Responses {
            export type $200 = /*  */ Components.Schemas.MediaRead;
            export interface $400 {
            }
            export interface $404 {
            }
            export interface $422 {
            }
        }
    }
}

export interface OperationMethods {
  /**
   * getFolders - Retrieves the collection of Folder resources.
   * 
   * Retrieves the collection of Folder resources.
   */
  'getFolders'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetFolders.Responses.$200>
  /**
   * postFolder - Creates a Folder resource.
   * 
   * Creates a Folder resource.
   */
  'postFolder'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.PostFolder.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PostFolder.Responses.$201>
  /**
   * getFolder - Retrieves a Folder resource.
   * 
   * Retrieves a Folder resource.
   */
  'getFolder'(
    parameters?: Parameters<Paths.GetFolder.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetFolder.Responses.$200>
  /**
   * putFolder - Replaces the Folder resource.
   * 
   * Replaces the Folder resource.
   */
  'putFolder'(
    parameters?: Parameters<Paths.PutFolder.PathParameters> | null,
    data?: Paths.PutFolder.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PutFolder.Responses.$200>
  /**
   * patchFolder - Updates the Folder resource.
   * 
   * Updates the Folder resource.
   */
  'patchFolder'(
    parameters?: Parameters<Paths.PatchFolder.PathParameters> | null,
    data?: Paths.PatchFolder.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PatchFolder.Responses.$200>
  /**
   * deleteFolder - Removes the Folder resource.
   * 
   * Removes the Folder resource.
   */
  'deleteFolder'(
    parameters?: Parameters<Paths.DeleteFolder.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DeleteFolder.Responses.$204>
  /**
   * getMedias - Retrieves the collection of Media resources.
   * 
   * Retrieves the collection of Media resources.
   */
  'getMedias'(
    parameters?: Parameters<Paths.GetMedias.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetMedias.Responses.$200>
  /**
   * postMedia - Creates a Media resource.
   * 
   * Creates a Media resource.
   */
  'postMedia'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.PostMedia.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PostMedia.Responses.$201>
  /**
   * getMedia - Retrieves a Media resource.
   * 
   * Retrieves a Media resource.
   */
  'getMedia'(
    parameters?: Parameters<Paths.GetMedia.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetMedia.Responses.$200>
  /**
   * putMedia - Replaces the Media resource.
   * 
   * Replaces the Media resource.
   */
  'putMedia'(
    parameters?: Parameters<Paths.PutMedia.PathParameters> | null,
    data?: Paths.PutMedia.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PutMedia.Responses.$200>
  /**
   * patchMedia - Updates the Media resource.
   * 
   * Updates the Media resource.
   */
  'patchMedia'(
    parameters?: Parameters<Paths.PatchMedia.PathParameters> | null,
    data?: Paths.PatchMedia.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PatchMedia.Responses.$200>
  /**
   * deleteMedia - Removes the Media resource.
   * 
   * Removes the Media resource.
   */
  'deleteMedia'(
    parameters?: Parameters<Paths.DeleteMedia.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DeleteMedia.Responses.$204>
  /**
   * patchMediaFile - Creates a Media resource.
   * 
   * Creates a Media resource.
   */
  'patchMediaFile'(
    parameters?: Parameters<Paths.PatchMediaFile.PathParameters> | null,
    data?: Paths.PatchMediaFile.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PatchMediaFile.Responses.$201>
}

export interface PathsDictionary {
  ['/wd-media-api/folders']: {
    /**
     * getFolders - Retrieves the collection of Folder resources.
     * 
     * Retrieves the collection of Folder resources.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetFolders.Responses.$200>
    /**
     * postFolder - Creates a Folder resource.
     * 
     * Creates a Folder resource.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.PostFolder.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PostFolder.Responses.$201>
  }
  ['/wd-media-api/folders/{id}']: {
    /**
     * getFolder - Retrieves a Folder resource.
     * 
     * Retrieves a Folder resource.
     */
    'get'(
      parameters?: Parameters<Paths.GetFolder.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetFolder.Responses.$200>
    /**
     * putFolder - Replaces the Folder resource.
     * 
     * Replaces the Folder resource.
     */
    'put'(
      parameters?: Parameters<Paths.PutFolder.PathParameters> | null,
      data?: Paths.PutFolder.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PutFolder.Responses.$200>
    /**
     * deleteFolder - Removes the Folder resource.
     * 
     * Removes the Folder resource.
     */
    'delete'(
      parameters?: Parameters<Paths.DeleteFolder.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DeleteFolder.Responses.$204>
    /**
     * patchFolder - Updates the Folder resource.
     * 
     * Updates the Folder resource.
     */
    'patch'(
      parameters?: Parameters<Paths.PatchFolder.PathParameters> | null,
      data?: Paths.PatchFolder.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PatchFolder.Responses.$200>
  }
  ['/wd-media-api/medias']: {
    /**
     * getMedias - Retrieves the collection of Media resources.
     * 
     * Retrieves the collection of Media resources.
     */
    'get'(
      parameters?: Parameters<Paths.GetMedias.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetMedias.Responses.$200>
    /**
     * postMedia - Creates a Media resource.
     * 
     * Creates a Media resource.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.PostMedia.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PostMedia.Responses.$201>
  }
  ['/wd-media-api/medias/{id}']: {
    /**
     * getMedia - Retrieves a Media resource.
     * 
     * Retrieves a Media resource.
     */
    'get'(
      parameters?: Parameters<Paths.GetMedia.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetMedia.Responses.$200>
    /**
     * putMedia - Replaces the Media resource.
     * 
     * Replaces the Media resource.
     */
    'put'(
      parameters?: Parameters<Paths.PutMedia.PathParameters> | null,
      data?: Paths.PutMedia.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PutMedia.Responses.$200>
    /**
     * deleteMedia - Removes the Media resource.
     * 
     * Removes the Media resource.
     */
    'delete'(
      parameters?: Parameters<Paths.DeleteMedia.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DeleteMedia.Responses.$204>
    /**
     * patchMedia - Updates the Media resource.
     * 
     * Updates the Media resource.
     */
    'patch'(
      parameters?: Parameters<Paths.PatchMedia.PathParameters> | null,
      data?: Paths.PatchMedia.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PatchMedia.Responses.$200>
  }
  ['/wd-media-api/medias/{id}/file']: {
    /**
     * patchMediaFile - Creates a Media resource.
     * 
     * Creates a Media resource.
     */
    'post'(
      parameters?: Parameters<Paths.PatchMediaFile.PathParameters> | null,
      data?: Paths.PatchMediaFile.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PatchMediaFile.Responses.$201>
  }
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>

