import ImageCard from "@/wd-media-ui/components/ImageCard.tsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {MediaLibraryDispatch, MediaLibraryState} from '@/wd-media-ui/stores';
import {fetchMediaItems} from '@/wd-media-ui/stores/slices/mediaSlice';
import {Components} from "@/wd-media-ui/api/types/openapi";

function Gallery() {
  const dispatch = useDispatch<MediaLibraryDispatch>();
  const { items, status, error } = useSelector((state: MediaLibraryState) => state.media);


  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMediaItems());
    }
  }, [status, dispatch]);

  if (status === 'loading' || status === 'idle') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-6 flex gap-3 flex-wrap">
      {items.length > 0 && items.map((media: Components.Schemas.Media) =>
        <ImageCard key={media.id} media={media}></ImageCard>
      )}
    </div>
  )
}

export default Gallery;
