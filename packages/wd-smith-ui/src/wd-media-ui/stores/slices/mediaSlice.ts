import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import type {Components, Paths} from '@/wd-media-ui/api/types/openapi.d.ts';
import ApiClient from '@/wd-media-ui/api/ApiClient.ts';

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

const initialState: MediaState = {
  items: [],
  status: 'idle',
  error: null,
  updateStatus: 'idle',
  updateError: null,
};

export const fetchMediaItems = createAsyncThunk('fetch', async () => {
  const client = await ApiClient.getInstance();
  const mediaResponse = await client.getMedias();
  return mediaResponse.data;
});

export const updateMedia = createAsyncThunk<Components.Schemas.Media, Components.Schemas.Media>(
  'patch',
  async (media: Components.Schemas.Media) => {
    const client = await ApiClient.getInstance();
    const mediaResponse = await client.patchMedia(media.id, media)
    return mediaResponse.data;
  });


export const updateMediaFile = createAsyncThunk<Components.Schemas.Media, UpdateMediaFileParams>(
  'patchFile',
  async (media: UpdateMediaFileParams) => {
    const formData = new FormData();
    formData.append('file', media.file);
    const client = await ApiClient.getInstance();
    const mediaResponse = await client.patchMediaFile(media.id, formData as Paths.PatchMediaFile.RequestBody, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    return mediaResponse.data;
  });

const mediaSlice = createSlice({
  name: 'media',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Components.Schemas.Media>) {
      state.items.push(action.payload);
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    setLoading(state) {
      state.status = 'loading';
    },
    setSucceeded(state) {
      state.status = 'succeeded';
    },
    setFailed(state, action: PayloadAction<string>) {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    // fetchMedia
    builder
      .addCase(fetchMediaItems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMediaItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchMediaItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch media items';
      });

    // updateMedia
    builder
      .addCase(updateMedia.pending, (state) => {
        state.updateStatus = 'loading';
      })
      .addCase(updateMedia.fulfilled, (state, action) => {
        state.updateStatus = 'succeeded';
        // Trouver l'index de l'élément à mettre à jour
        const index = state.items.findIndex(item => item.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload; // Mettre à jour l'élément dans le tableau
        }
      })
      .addCase(updateMedia.rejected, (state, action) => {
        state.updateStatus = 'failed';
        state.updateError = action.error.message || 'Failed to update media item';
      });

    builder
      .addCase(updateMediaFile.pending, (state) => {
        state.updateStatus = 'loading';
      })
      .addCase(updateMediaFile.fulfilled, (state, action) => {
        state.updateStatus = 'succeeded';
        // Trouver l'index de l'élément à mettre à jour
        const index = state.items.findIndex(item => item.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload; // Mettre à jour l'élément dans le tableau
        }
      })
      .addCase(updateMediaFile.rejected, (state, action) => {
        state.updateStatus = 'failed';
        state.updateError = action.error.message || 'Failed to update media item';
      });
  },
});
export const { addItem, removeItem, setLoading, setSucceeded, setFailed } = mediaSlice.actions;
export default mediaSlice.reducer;
