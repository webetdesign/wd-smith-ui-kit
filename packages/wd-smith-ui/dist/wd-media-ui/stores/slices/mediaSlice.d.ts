import { Components, Paths } from '../../api/types/openapi.d.ts';

export interface MediaState {
    items: Components.Schemas.Media[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
    updateStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
    updateError: string | null;
}
export interface UpdateMediaFileParams {
    id: number;
    file: File;
}
export declare const fetchMediaItems: import('@reduxjs/toolkit').AsyncThunk<Paths.GetMedias.Responses.$200, void, {
    state?: unknown;
    dispatch?: import('redux-thunk').ThunkDispatch<unknown, unknown, import('redux').UnknownAction> | undefined;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const updateMedia: import('@reduxjs/toolkit').AsyncThunk<Components.Schemas.Media, Components.Schemas.Media, {
    state?: unknown;
    dispatch?: import('redux-thunk').ThunkDispatch<unknown, unknown, import('redux').UnknownAction> | undefined;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const updateMediaFile: import('@reduxjs/toolkit').AsyncThunk<Components.Schemas.Media, UpdateMediaFileParams, {
    state?: unknown;
    dispatch?: import('redux-thunk').ThunkDispatch<unknown, unknown, import('redux').UnknownAction> | undefined;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const addItem: import('@reduxjs/toolkit').ActionCreatorWithPayload<Components.Schemas.Media, "media/addItem">, removeItem: import('@reduxjs/toolkit').ActionCreatorWithPayload<number, "media/removeItem">, setLoading: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<"media/setLoading">, setSucceeded: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<"media/setSucceeded">, setFailed: import('@reduxjs/toolkit').ActionCreatorWithPayload<string, "media/setFailed">;
declare const _default: import('redux').Reducer<MediaState>;
export default _default;
