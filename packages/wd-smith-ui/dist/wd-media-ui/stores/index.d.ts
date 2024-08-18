import { MediaState } from './slices/mediaSlice';
import { MainState } from './slices/mainSlice';
import { FolderState } from './slices/folderSlice';

declare const store: import('@reduxjs/toolkit').EnhancedStore<{
    main: MainState;
    media: MediaState;
    folder: FolderState;
}, import('redux').UnknownAction, import('@reduxjs/toolkit').Tuple<[import('redux').StoreEnhancer<{
    dispatch: import('redux-thunk').ThunkDispatch<{
        main: MainState;
        media: MediaState;
        folder: FolderState;
    }, undefined, import('redux').UnknownAction>;
}>, import('redux').StoreEnhancer]>>;
export declare const initializeApp: (serveurUrl: string) => Promise<void>;
export type MediaLibraryDispatch = typeof store.dispatch;
export type MediaLibraryState = ReturnType<typeof store.getState>;
export default store;
