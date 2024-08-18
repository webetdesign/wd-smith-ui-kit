import React, {createContext, HTMLAttributes, useContext} from "react";
import Layout from "@/wd-media-ui/components/Layout.tsx";
import {cn} from "@/lib/utils.ts";
import FormDialog from "@/wd-media-ui/components/FormDialog.tsx";

export interface MediaLibraryProps extends React.HTMLProps<HTMLAttributes<HTMLDivElement>> {
  dialogContainer: HTMLElement;
}

type MediaLibraryAppContextType = {
  dialogContainer: HTMLElement;
}

const MediaLibraryAppContext = createContext<MediaLibraryAppContextType | undefined>(undefined);
export const useLibraryContext = () => {
  const context = useContext(MediaLibraryAppContext);
  if (!context) {
    throw new Error('useLibraryContext must be used within a MediaPickerAppProvider');
  }
  return context;
};

function MediaLibrary({ className, dialogContainer, ...rest }: MediaLibraryProps) {
  className = cn("bg-background h-full", className);

  return (
    <MediaLibraryAppContext.Provider value={{ dialogContainer }}>
      <div className={className} {...rest as HTMLAttributes<HTMLDivElement>}>
        <Layout/>
      </div>
      <FormDialog/>
    </MediaLibraryAppContext.Provider>
  )

}

export default MediaLibrary;
