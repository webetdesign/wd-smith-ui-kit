import {Dialog, DialogContent} from "@/components/ui/dialog.tsx";
import {useLibraryContext} from "@/wd-media-ui/MediaLibrary/MediaLibrary.tsx";
import FolderForm from "@/wd-media-ui/components/FolderForm.tsx";
import {useDispatch, useSelector} from "react-redux";
import {MediaLibraryDispatch, MediaLibraryState} from "@/wd-media-ui/stores";
import {setDialogFormIsOpen} from "@/wd-media-ui/stores/slices/folderSlice.ts";


function FormDialog() {
  const dispatch = useDispatch<MediaLibraryDispatch>();
  const {isOpen} = useSelector((state:MediaLibraryState) => state.folder.dialogForm)
  const {dialogContainer} = useLibraryContext();

  const FormComponent = FolderForm;

  return (
    <Dialog open={isOpen} onOpenChange={(value) => dispatch(setDialogFormIsOpen(value))}>
      <DialogContent container={dialogContainer}>
        <FormComponent/>
      </DialogContent>
    </Dialog>
  )
}

export default FormDialog
