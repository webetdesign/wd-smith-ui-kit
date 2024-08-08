import React, {HTMLAttributes, useEffect, useState} from "react";
import {Provider} from 'react-redux';
import store, {initializeApp} from '@/wd-media-ui/stores';
import Layout from "@/wd-media-ui/components/Layout.tsx";
import {cn} from "@/lib/utils.ts";

export interface MediaLibraryProps extends React.HTMLProps<HTMLAttributes<HTMLDivElement>> {
  serverUrl: string;
}

function MediaLibrary({ serverUrl, className, ...rest }: MediaLibraryProps) {
  const [initialized, setInitialized] = useState(false);

  className = cn("bg-background h-full", className);

  useEffect(() => {
    const init = async () => {
      try {
        await initializeApp(serverUrl);
        setInitialized(true);
      } catch (error) {
        console.error("Failed to initialize the app:", error);
      }
    };
    init();
  }, [serverUrl]);

  if (!initialized) {
    return <div className={className}>Initialisation ...</div>; // Vous pouvez personnaliser ceci
  }

  return (
    <div className={className} {...rest as HTMLAttributes<HTMLDivElement>}>
      <Provider store={store}>
        <Layout/>
      </Provider>
    </div>
  )
}

export default MediaLibrary;
