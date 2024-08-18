import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {Components} from '@/wd-media-ui/api/types/openapi.d.ts';

export interface MainState {
  currentMedia: Components.Schemas.Media | null
  picker: boolean,
}

const initialState: MainState = {
  currentMedia: null,
  picker: false,
};


const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setCurrentMedia: (state, action: PayloadAction<Components.Schemas.Media | null>) => {
      state.currentMedia = action.payload;
    },
    setPicker: (state, action: PayloadAction<boolean>) => {
      state.picker = action.payload;
    }
  }
});

export const mainInitialState = initialState;
export const {
               setCurrentMedia,
               setPicker,
             } = mainSlice.actions;

export default mainSlice.reducer;
