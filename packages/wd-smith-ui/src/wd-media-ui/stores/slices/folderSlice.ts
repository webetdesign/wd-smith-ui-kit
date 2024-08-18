import {Components} from "@/wd-media-ui/api/types/openapi";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import ApiClient from "@/wd-media-ui/api/ApiClient.ts";
import {showToast} from "@/wd-media-ui/services/toastService.ts";

export interface Folder extends Components.Schemas.FolderJsonld {
  children: Folder[];
}

interface PatchFolderParamsType {
  id: number;
  data: {}
}

interface CreateFolderParamsType {
  label: string;
  parent: string;
}

type DialogFormType = {
  isOpen: boolean;
  folder: Folder | null;
  targetFolder: Folder | null;
}

export interface FolderState {
  items: Folder[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  currentFolder: Folder | null;
  dialogForm: DialogFormType;
  updateStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  openFolders: number[]
}

const initialState: FolderState = {
  items: [],
  status: 'idle',
  error: null,
  currentFolder: null,
  dialogForm: {
    isOpen: false,
    folder: null,
    targetFolder: null
  },
  updateStatus: 'idle',
  openFolders: []
}

export const fetchFolderItems = createAsyncThunk(
  'fetchFolderItems',
  async () => {
    const client = await ApiClient.getInstance();
    const response = await client.getFolders();
    return response.data;
  }
)

export const patchFolder = createAsyncThunk<Components.Schemas.Folder, PatchFolderParamsType>(
  'fetchFolder',
  async (params: PatchFolderParamsType) => {
    const client = await ApiClient.getInstance();
    const response = await client.patchFolder(params.id, params.data);
    return response.data;
  }
)

export const createFolder = createAsyncThunk<Components.Schemas.Folder, CreateFolderParamsType>(
  'createFolder',
  async (folder: CreateFolderParamsType) => {
    const client = await ApiClient.getInstance();
    const response = await client.postFolder(null, folder);
    return response.data;
  }
)

export const deleteFolder = createAsyncThunk(
  'deleteFolder',
  async (id: number, { rejectWithValue }) => {
    try {
      const client = await ApiClient.getInstance();
      await client.deleteFolder(id);
      return id;
    } catch ( error: any ) {
      return rejectWithValue(error.response.data.detail)
    }
  }
)


const folderSlice = createSlice({
  name: "folder",
  initialState,
  reducers: {
    setIsOpen(state, action: PayloadAction<{ id: number, value: boolean }>) {
      if (action.payload.value) {
        state.openFolders.push(action.payload.id);
      } else {
        state.openFolders = state.openFolders.filter(item => item !== action.payload.id);
      }
    },
    setCurrentFolder(state, action: PayloadAction<Folder | null>) {
      state.currentFolder = action.payload;
    },
    setDialogFormIsOpen(state, action: PayloadAction<boolean>) {
      state.dialogForm.isOpen = action.payload
    },
    setDialogFormFolder(state, action: PayloadAction<Folder | null>) {
      state.dialogForm.folder = action.payload
    },
    setDialogFormTargetFolder(state, action: PayloadAction<Folder | null>) {
      state.dialogForm.targetFolder = action.payload
    }
  },
  extraReducers: (builder) => {

    builder
      .addCase(fetchFolderItems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFolderItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const items = action.payload["hydra:member"];
        state.items = items.map((item: Components.Schemas.Folder) => {
          return { ...item, children: [] } as Folder;
        });
      })
      .addCase(fetchFolderItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch menu';
      })
    ;

    builder
      .addCase(patchFolder.pending, (state) => {
        state.updateStatus = 'loading';
      })
      .addCase(patchFolder.fulfilled, (state, action) => {
        state.updateStatus = 'succeeded';
        const index = state.items.findIndex(item => item.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = { ...action.payload, children: [] } as Folder;
        }
      })
      .addCase(patchFolder.rejected, (state, action) => {
        state.updateStatus = 'failed';
        state.error = action.error.message || 'Failed to patch item';
      })
    ;

    builder
      .addCase(createFolder.pending, (state) => {
        state.updateStatus = 'loading';
      })
      .addCase(createFolder.fulfilled, (state, action) => {
        state.updateStatus = 'succeeded';
        state.items.push({ ...action.payload, children: [] } as Folder);
      })
      .addCase(createFolder.rejected, (state, action) => {
        state.updateStatus = 'failed';
        state.error = action.error.message || 'Failed to patch item';
      })
    ;

    builder
      .addCase(deleteFolder.pending, (state) => {
        state.updateStatus = 'loading';
      })
      .addCase(deleteFolder.fulfilled, (state, action) => {
        state.updateStatus = 'succeeded';
        state.items = state.items.filter(item => item.id !== action.payload);

      })
      .addCase(deleteFolder.rejected, (state, action) => {
        state.updateStatus = 'failed';
        state.error = action.error.message || 'Failed to delete item';
        showToast('Erreur de suppression !', 'destructive', String(action.payload))
      })
    ;
  }
})

export const folderInitialState = initialState;
export const {
               setIsOpen,
               setCurrentFolder,
               setDialogFormIsOpen,
               setDialogFormFolder,
               setDialogFormTargetFolder,
             } = folderSlice.actions
export default folderSlice.reducer;
