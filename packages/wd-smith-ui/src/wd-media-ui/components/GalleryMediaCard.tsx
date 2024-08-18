import {AspectRatio} from "@/components/ui/aspect-ratio.tsx";
import {Card, CardContent, CardHeader} from "@/components/ui/card.tsx";
import type {Components} from "@/wd-media-ui/api/types/openapi.d.ts";
import {setCurrentMedia} from "@/wd-media-ui/stores/slices/mainSlice";
import {useDispatch, useSelector} from "react-redux";
import {MediaLibraryDispatch, MediaLibraryState} from "@/wd-media-ui/stores";
import {cn} from "@/lib/utils.ts";
import Media from "@/wd-media-ui/components/Media.tsx";
import { Skeleton } from "@/components/ui/skeleton";

interface ImageCardProps {
  className?: string;
  media: Components.Schemas.Media,
  key?: number | undefined
}

function GalleryMediaCard({ media }: ImageCardProps) {
  const dispatch = useDispatch<MediaLibraryDispatch>();
  const currentMedia = useSelector((state: MediaLibraryState) => state.main.currentMedia);

  const handleCardClick = () => {
    dispatch(setCurrentMedia(media));
  }


  return (
    <Card className={cn('aspect-[124/129] min-w-[150px] max-w-[250px]', { 'border-primary': media.id === currentMedia?.id, 'drop-shadow-xl': media.id === currentMedia?.id })} onClick={handleCardClick}>
      <CardHeader className="p-0 pb-6">
        <AspectRatio ratio={4 / 3} className="rounded-t-lg overflow-hidden has-[[data-checkerboard]]:bg-checkerboard has-[[data-checkerboard]]:bg-checkerboard-size has-[[data-checkerboard]]:bg-checkerboard-position">
          <Media media={media}></Media>
        </AspectRatio>
      </CardHeader>
      <CardContent className="text-ellipsis overflow-hidden text-nowrap">
        {media.label}
      </CardContent>
    </Card>
  )
}

export function GallerySkeletonCard() {
  return (
    <Card>
      <CardHeader className="p-0 pb-6">
      <Skeleton className="w-full aspect-[4/3]"></Skeleton>
      </CardHeader>
      <CardContent className="text-ellipsis overflow-hidden text-nowrap">
        <Skeleton className="h-6 w-3/4"></Skeleton>
      </CardContent>
    </Card>
  )
}

export default GalleryMediaCard
