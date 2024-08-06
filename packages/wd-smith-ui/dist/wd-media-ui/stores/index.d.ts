declare const store: import('@reduxjs/toolkit').EnhancedStore<{
    main: import('./slices/mainSlice').MainState;
    media: import('./slices/mediaSlice').MediaState;
}, import('redux').UnknownAction, import('@reduxjs/toolkit').Tuple<[import('redux').StoreEnhancer<{
    dispatch: import('redux-thunk').ThunkDispatch<{
        main: import('./slices/mainSlice').MainState;
        media: import('./slices/mediaSlice').MediaState;
    }, undefined, import('redux').UnknownAction>;
}>, import('redux').StoreEnhancer]>>;
export type MediaLibraryDispatch = typeof store.dispatch;
export type MediaLibraryState = ReturnType<typeof store.getState>;
export default store;
