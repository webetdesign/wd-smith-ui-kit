import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type { Components } from '@/wd-media-ui/api/types/openapi.d.ts';

export interface MainState {
  selectedMedia: Components.Schemas.Media | null
}

const initialState: MainState = {
  selectedMedia: null,
};


const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setSelectedMedia: (state, action: PayloadAction<Components.Schemas.Media|null>) => {
      state.selectedMedia = action.payload;
    },
  }
});

export const {setSelectedMedia} = mainSlice.actions;
export default mainSlice.reducer;
