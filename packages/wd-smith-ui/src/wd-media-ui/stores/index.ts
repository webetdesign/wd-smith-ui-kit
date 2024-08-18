import {configureStore} from '@reduxjs/toolkit';
import mediaReducer, {mediaInitialState, MediaState} from '@/wd-media-ui/stores/slices/mediaSlice';
import mainReducer, {mainInitialState, MainState} from '@/wd-media-ui/stores/slices/mainSlice';
import folderReducer, {folderInitialState, FolderState} from '@/wd-media-ui/stores/slices/folderSlice';
import ApiClient from "@/wd-media-ui/api/ApiClient.ts";
import {loadState, saveState} from "@/lib/localStorageUtils.ts";
import {deepMerge} from "@/lib/utils.ts";

interface State {
  main: MainState;
  media: MediaState;
  folder: FolderState;
}

const initialState: State = {
  main: mainInitialState,
  media: mediaInitialState,
  folder: folderInitialState,
}

const preloadedState: State = loadState(); // Charger l'état depuis localStorage

const store = configureStore({
  reducer: {
    main: mainReducer,
    media: mediaReducer,
    folder: folderReducer,
  },
  preloadedState: deepMerge(initialState, preloadedState),
});

store.subscribe(() => {
  saveState({
    folder: {
      openFolders: store.getState().folder.openFolders,
      currentFolder: store.getState().folder.currentFolder,
    }
  })
});

// Initialisation du Singleton avant d'utiliser le store
export const initializeApp = async (serveurUrl: string) => {
  ApiClient.configure(serveurUrl);
  await ApiClient.getInstance();
};

export type MediaLibraryDispatch = typeof store.dispatch;
export type MediaLibraryState = ReturnType<typeof store.getState>;

export default store;
