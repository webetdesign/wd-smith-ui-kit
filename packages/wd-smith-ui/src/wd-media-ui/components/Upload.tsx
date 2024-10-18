import {Input} from "@/components/ui/input.tsx";
import React, {useEffect, useRef, useState} from "react";
import {createMedia, updateMediaFile} from "@/wd-media-ui/stores/slices/mediaSlice.ts";
import {useDispatch} from "react-redux";
import {MediaLibraryDispatch} from "@/wd-media-ui/stores";
import {z, ZodError} from "zod";
import {useToast} from "@/components/ui/use-toast"
import {usePickerContext} from "@/wd-media-ui/MediaPicker/index.tsx"
import {Components} from "@/wd-media-ui/api/types/openapi";
import {setCurrentMedia} from "@/wd-media-ui/stores/slices/mainSlice.ts";
import {cn} from "@/lib/utils.ts";

interface UploadProps {
  children?: React.ReactElement<{ onClick?: () => void }>;
  media?: Components.Schemas.Media,
}

function Upload({ children, media }: UploadProps) {
  const { toast } = useToast()
  const dispatch = useDispatch<MediaLibraryDispatch>();
  const [fileList, setFileList] = useState<FileList | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
      let message = '';

      for (const file of fileList) {
        try {
          fileSchema.parse(file);

          if (media !== undefined && media.id !== undefined) {
            setIsLoading(true);
            const updatedMediaResponse = await dispatch(updateMediaFile({ id: media.id, file }));
            dispatch(setCurrentMedia(updatedMediaResponse.payload as Components.Schemas.Media));
            setIsLoading(false);


            message = 'Fichier mise à jour';
          } else {
            await dispatch(createMedia({
              file,
            }));
            message = 'Media créer';
          }

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
        toast({
          description: message,
        })
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

  const clonedChild = React.isValidElement(children) ? React.cloneElement(children, {
    onClick: handleUploadClick
  }) : children

  return (
    <div className={cn({ 'animate-pulse': isLoading })}>
      {clonedChild}
      <Input className="hidden"
             type="file"
             ref={fileRef}
             onChange={(event) => {
               setFileList(event.target.files);
             }}
      />
    </div>
  )
}

export default Upload;
