import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUpload} from "@fortawesome/free-solid-svg-icons";
import {Button} from "@/components/ui/button.tsx";
import {Input} from "@/components/ui/input.tsx";
import React, {useEffect, useRef, useState} from "react";
import {createMedia, fetchMediaItems} from "@/wd-media-ui/stores/slices/mediaSlice.ts";
import {useDispatch} from "react-redux";
import {MediaLibraryDispatch} from "@/wd-media-ui/stores";


function Upload() {
  const dispatch = useDispatch<MediaLibraryDispatch>();
  const [fileList, setFileList] = useState<FileList | null>(null);

  const fileRef: React.MutableRefObject<HTMLInputElement | null> = useRef(null);

  useEffect(() => {
    const upload = async (fileList: FileList) => {
      for (const file of fileList) {
        await dispatch(createMedia({
          file,
          category: 'default_cms',
        }));

        if (!fileRef.current) {
          return;
        }
        fileRef.current.value = '';
      }
      dispatch(fetchMediaItems());
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
      <Button onClick={handleUploadClick}>
        <FontAwesomeIcon icon={faUpload}/>
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
