import { configureStore } from '@reduxjs/toolkit';
import mediaReducer from '@/wd-media-ui/stores/slices/mediaSlice';
import mainReducer from '@/wd-media-ui/stores/slices/mainSlice';
import ApiClient from "@/wd-media-ui/api/ApiClient.ts";

const store = configureStore({
  reducer: {
    main: mainReducer,
    media: mediaReducer,
  },
});

// Initialisation du Singleton avant d'utiliser le store
export const initializeApp = async (serveurUrl: string) => {
  ApiClient.configure(serveurUrl);
  await ApiClient.getInstance();
};

export type MediaLibraryDispatch = typeof store.dispatch;
export type MediaLibraryState = ReturnType<typeof store.getState>;

export default store;
