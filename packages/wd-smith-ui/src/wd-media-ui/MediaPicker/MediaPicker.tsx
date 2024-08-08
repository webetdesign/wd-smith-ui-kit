import React, {HTMLAttributes} from "react";
import MediaLibrary from "@/wd-media-ui/MediaLibrary/MediaLibrary.tsx";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {useDispatch} from "react-redux";
import {MediaLibraryDispatch} from "@/wd-media-ui/stores";
import {setPicker} from "@/wd-media-ui/stores/slices/mainSlice.ts";
import PickerMediaCard from "@/wd-media-ui/components/PickerMediaCard.tsx";
import {usePickerContext} from "@/wd-media-ui/MediaPicker/index.tsx";

export interface MediaPickerProps extends React.HTMLProps<HTMLAttributes<HTMLDivElement>> {
}

function MediaPicker({ className }: MediaPickerProps) {
  const dispatch = useDispatch<MediaLibraryDispatch>();
  dispatch(setPicker(true));

  const {isDialogOpen} = usePickerContext();


  return (
    <>
      <PickerMediaCard className={className}></PickerMediaCard>

      <Dialog open={isDialogOpen}>
        <DialogContent className="p-0 h-[75vh] w-[75vw] max-h-none max-w-none">
          <DialogHeader className="pt-6 px-6">
            <DialogTitle>Médiathèque</DialogTitle>
            <DialogDescription>
              Sélectionnez ou ajoutez un nouveau média.
            </DialogDescription>
          </DialogHeader>

          <MediaLibrary className={`h-[calc(75vh-1.5rem-70px)]`}></MediaLibrary>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default MediaPicker;
