import React, {HTMLAttributes, useEffect, useState} from "react";
import {Provider} from 'react-redux';
import store, {initializeApp} from '@/wd-media-ui/stores';
import {cn} from "@/lib/utils.ts";
import MediaLibrary from "@/wd-media-ui/MediaLibrary/MediaLibrary.tsx";
import {Toaster} from "@/components/ui/toaster.tsx";

export interface MediaLibraryProps extends React.HTMLProps<HTMLAttributes<HTMLDivElement>> {
  serverUrl: string;
}

function MediaLibraryApp({ serverUrl, className }: MediaLibraryProps) {
  const [initialized, setInitialized] = useState(false);

  className = cn("bg-background h-full", className);

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

  if (!initialized) {
    return <div className={className}>Initialisation ...</div>; // Vous pouvez personnaliser ceci
  }

  return (
    <Provider store={store}>
      <MediaLibrary></MediaLibrary>
      <Toaster />
    </Provider>
  )
}

export default MediaLibraryApp;
