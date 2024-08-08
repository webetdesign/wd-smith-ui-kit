import React, {HTMLAttributes} from "react";
import Layout from "@/wd-media-ui/components/Layout.tsx";
import {cn} from "@/lib/utils.ts";

export interface MediaLibraryProps extends React.HTMLProps<HTMLAttributes<HTMLDivElement>> {
}

function MediaLibrary({ className, ...rest }: MediaLibraryProps) {

  className = cn("bg-background h-full", className);

  return (
    <div className={className} {...rest as HTMLAttributes<HTMLDivElement>}>
      <Layout/>
    </div>
  )

}

export default MediaLibrary;
