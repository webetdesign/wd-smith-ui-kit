import React, {createContext, HTMLAttributes, useContext, useEffect, useState} from "react";
import {Provider} from 'react-redux';
import store, {initializeApp} from '@/wd-media-ui/stores';
import {cn} from "@/lib/utils.ts";
import MediaPicker from "@/wd-media-ui/MediaPicker/MediaPicker.tsx";
import {Components} from "@/wd-media-ui/api/types/openapi";
import {mediaItemQuery} from "@/wd-media-ui/stores/slices/mediaSlice.ts";


export interface MediaPickerProps extends React.HTMLProps<HTMLAttributes<HTMLDivElement>> {
  serverUrl: string;
  dialogContainer: HTMLElement
  onPickedMedia: (value: number | null) => void;
  value?: number | undefined;
  allowMimeType?: string[] | null;
}

type MediaPickerAppContextType = {
  dialogContainer: HTMLElement
  onPickedMedia?: (value: number | null) => void;
  isDialogOpen: boolean;
  setIsDialogOpen: (value: boolean) => void;
  selectedMedia: Components.Schemas.Media | null;
  setSelectedMedia: (value: Components.Schemas.Media | null) => void;
  allowMimeType?: string[] | null;
};
export const MediaPickerAppContext = createContext<MediaPickerAppContextType | undefined>(undefined);

export const usePickerContext = () => {
  const context = useContext(MediaPickerAppContext);
  if (!context) {
    throw new Error('usePickerContext must be used within a MediaPickerAppProvider');
  }
  return context;
};


function MediaPickerApp({ serverUrl, className, onPickedMedia, dialogContainer, value, allowMimeType }: MediaPickerProps) {
  // Note : on peut pas dispatch dans ce composant
  const [initialized, setInitialized] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState<Components.Schemas.Media | null>(null);

  className = cn("group bg-background w-96 m-6 aspect-[4/3]", className);

  useEffect(() => {
    const init = async () => {
      try {
        await initializeApp(serverUrl);
        setInitialized(true);
      } catch ( error ) {
        console.error("Failed to initialize the app:", error);
      }
    };
    init();
  }, [serverUrl]);

  useEffect(() => {
    const fetch = async (value: number | string) => {
      const mediaResponse = await mediaItemQuery(value);
      setSelectedMedia(mediaResponse)
    };
    if (initialized && value !== undefined) {
      fetch(value);
    }
  }, [initialized, value]);

  if (!initialized) {
    return <div className={className}>Initialisation ...</div>; // Vous pouvez personnaliser ceci
  }

  if (value !== undefined) {
  }

  return (
    <MediaPickerAppContext.Provider value={{ onPickedMedia, isDialogOpen, setIsDialogOpen, selectedMedia, setSelectedMedia, dialogContainer, allowMimeType }}>
      <Provider store={store}>
        <MediaPicker className={className}/>
      </Provider>
    </MediaPickerAppContext.Provider>
  )
}

export default MediaPickerApp;
