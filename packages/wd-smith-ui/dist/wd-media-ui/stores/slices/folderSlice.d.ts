import { Components } from '../../api/types/openapi';

export interface Folder extends Components.Schemas.FolderJsonld {
    children: Folder[];
}
interface PatchFolderParamsType {
    id: number;
    data: {};
}
interface CreateFolderParamsType {
    label: string;
    parent: string;
}
type DialogFormType = {
    isOpen: boolean;
    folder: Folder | null;
    targetFolder: Folder | null;
};
export interface FolderState {
    items: Folder[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
    currentFolder: Folder | null;
    dialogForm: DialogFormType;
    updateStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
    openFolders: number[];
}
export declare const fetchFolderItems: import('@reduxjs/toolkit').AsyncThunk<import("@/wd-media-ui/api/types/openapi").Paths.GetFolders.Responses.$200, void, {
    state?: unknown;
    dispatch?: import('redux-thunk').ThunkDispatch<unknown, unknown, import('redux').UnknownAction> | undefined;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const patchFolder: import('@reduxjs/toolkit').AsyncThunk<Components.Schemas.Folder, PatchFolderParamsType, {
    state?: unknown;
    dispatch?: import('redux-thunk').ThunkDispatch<unknown, unknown, import('redux').UnknownAction> | undefined;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const createFolder: import('@reduxjs/toolkit').AsyncThunk<Components.Schemas.Folder, CreateFolderParamsType, {
    state?: unknown;
    dispatch?: import('redux-thunk').ThunkDispatch<unknown, unknown, import('redux').UnknownAction> | undefined;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const deleteFolder: import('@reduxjs/toolkit').AsyncThunk<number, number, {
    state?: unknown;
    dispatch?: import('redux-thunk').ThunkDispatch<unknown, unknown, import('redux').UnknownAction> | undefined;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const folderInitialState: FolderState;
export declare const setIsOpen: import('@reduxjs/toolkit').ActionCreatorWithPayload<{
    id: number;
    value: boolean;
}, "folder/setIsOpen">, setCurrentFolder: import('@reduxjs/toolkit').ActionCreatorWithPayload<Folder | null, "folder/setCurrentFolder">, setDialogFormIsOpen: import('@reduxjs/toolkit').ActionCreatorWithPayload<boolean, "folder/setDialogFormIsOpen">, setDialogFormFolder: import('@reduxjs/toolkit').ActionCreatorWithPayload<Folder | null, "folder/setDialogFormFolder">, setDialogFormTargetFolder: import('@reduxjs/toolkit').ActionCreatorWithPayload<Folder | null, "folder/setDialogFormTargetFolder">;
declare const _default: import('redux').Reducer<FolderState>;
export default _default;
