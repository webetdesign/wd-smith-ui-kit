import GalleryMediaCard, {GallerySkeletonCard} from "@/wd-media-ui/components/GalleryMediaCard.tsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {MediaLibraryDispatch, MediaLibraryState} from '@/wd-media-ui/stores';
import {fetchMediaItems} from '@/wd-media-ui/stores/slices/mediaSlice';
import {Components} from "@/wd-media-ui/api/types/openapi";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert.tsx";
import {AlertCircle} from "lucide-react";
import Upload from "@/wd-media-ui/components/Upload.tsx";

function Gallery() {
  const dispatch = useDispatch<MediaLibraryDispatch>();
  const { items, status, error } = useSelector((state: MediaLibraryState) => state.media);
  const folderState = useSelector((state: MediaLibraryState) => state.folder);


  // useEffect(() => {
  //   if (folderState.status !== 'succeeded') {
  //     return;
  //   }
  //   if (status === 'idle' && folderState.currentFolder) {
  //     dispatch(fetchMediaItems({folder: [String(folderState.currentFolder.id)]}));
  //   }
  // }, [status, folderState.status, folderState.currentFolder]);

  useEffect(() => {
    if (folderState.currentFolder) {
      if (folderState.currentFolder.id !== -1) {
        dispatch(fetchMediaItems({
          // createdAt: ,
        }));
      } else {
        dispatch(fetchMediaItems({ folder: [String(folderState.currentFolder.id)] }));
      }
    }
  }, [folderState.currentFolder]);

  // loading display skeletonCard
  if (status === 'loading' || status === 'idle') {
    return (
      <div className="p-3 h-[calc(100%-10rem)] overflow-y-auto">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,2fr))] gap-2">
          {[...Array.from(Array(30).keys())].map((i) => <GallerySkeletonCard key={i}/>)}
        </div>
      </div>
    );
  }

  // if erreur : display error
  if (status === 'failed') {
    return (
      <div className="p-3">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4"/>
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="p-3 h-[calc(100%-10rem)] overflow-y-auto">
        <div className="h-full flex justify-center content-center items-center text-2xl">
          <div className="p-6 border-2 border-dashed border-secondary rounded-xl flex flex-col gap-3">
            Le dossier {folderState.currentFolder?.label} ne contient aucun média.
            <Upload title="Ajouter un media"/>
          </div>
        </div>
      </div>
    );
  }

  // Display medias
  return (
    <div className="p-3 h-[calc(100%-10rem)] overflow-y-auto">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,2fr))] gap-2">
        {items.length > 0 && items.map((media: Components.Schemas.Media) =>
          <GalleryMediaCard key={media.id} media={media}></GalleryMediaCard>
        )}
      </div>
    </div>
  )
}

export default Gallery;
