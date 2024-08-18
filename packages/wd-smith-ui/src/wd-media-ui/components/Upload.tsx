import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUpload} from "@fortawesome/free-solid-svg-icons";
import {Button} from "@/components/ui/button.tsx";
import {Input} from "@/components/ui/input.tsx";
import React, {useEffect, useRef, useState} from "react";
import {createMedia, fetchMediaItems} from "@/wd-media-ui/stores/slices/mediaSlice.ts";
import {useDispatch} from "react-redux";
import {MediaLibraryDispatch} from "@/wd-media-ui/stores";
import {z, ZodError} from "zod";
import {useToast} from "@/components/ui/use-toast"
import {usePickerContext} from "@/wd-media-ui/MediaPicker/index.tsx"


function Upload({ title }: { title?: string }) {
  const { toast } = useToast()
  const dispatch = useDispatch<MediaLibraryDispatch>();
  const [fileList, setFileList] = useState<FileList | null>(null);

  const fileRef: React.MutableRefObject<HTMLInputElement | null> = useRef(null);

  let allowMimeType: string[] | null | undefined = null;
  try {
    const pickerContext = usePickerContext();
    allowMimeType = pickerContext.allowMimeType;
  } catch ( e ) {
  }

  const fileSchema = z.any()
    .refine((file: File) => {
      if (allowMimeType === null || allowMimeType === undefined) {
        return true;
      }
      return allowMimeType.includes(file.type);
    }, 'Type de fichier invalide !')

  useEffect(() => {
    let uploaded = 0;
    const upload = async (fileList: FileList) => {
      for (const file of fileList) {
        try {
          fileSchema.parse(file);
          await dispatch(createMedia({
            file,
          }));
          uploaded++;
        } catch ( error: ZodError | any ) {
          toast({
            variant: "destructive",
            description: error.errors.map((message: any) => message.message).join(" | "),
          })
        }

        if (!fileRef.current) {
          return;
        }
        fileRef.current.value = '';
      }
      if (uploaded > 0) {
        dispatch(fetchMediaItems());
      }
    }
    if (fileList) {
      upload(fileList);
    }
  }, [fileList])

  const handleUploadClick = () => {
    if (!fileRef.current) {
      return;
    }
    fileRef.current.click();
  }

  return (
    <>
      <Button type="button" onClick={handleUploadClick}>
        <FontAwesomeIcon icon={faUpload}/>
        {title !== undefined && (<span className="ml-2"> {title}</span>)}
      </Button>

      <Input className="hidden"
             type="file"
             ref={fileRef}
             onChange={(event) => {
               setFileList(event.target.files);
             }}
      />
    </>
  )
}

export default Upload;
