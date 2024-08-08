import {AspectRatio} from "@/components/ui/aspect-ratio.tsx";
import {Card, CardContent, CardHeader} from "@/components/ui/card.tsx";
import type {Components} from "@/wd-media-ui/api/types/openapi.d.ts";
import {setCurrentMedia} from "@/wd-media-ui/stores/slices/mainSlice";
import {useDispatch, useSelector} from "react-redux";
import {MediaLibraryDispatch, MediaLibraryState} from "@/wd-media-ui/stores";
import {cn} from "@/lib/utils.ts";
import Media from "@/wd-media-ui/components/Media.tsx";

interface ImageCardProps {
  className?: string;
  media: Components.Schemas.Media,
  key?: number | undefined
}

function GalleryMediaCard({ className, media }: ImageCardProps) {
  const dispatch = useDispatch<MediaLibraryDispatch>();
  const currentMedia = useSelector((state: MediaLibraryState) => state.main.currentMedia);

  const handleCardClick = () => {
    dispatch(setCurrentMedia(media));
  }

  return (
    <Card className={cn(className, { 'border-primary': media.id === currentMedia?.id })} onClick={handleCardClick}>
      <CardHeader className="p-0 pb-6">
        <AspectRatio ratio={4 / 3} className="rounded-t-lg overflow-hidden bg-checkerboard">
          <Media media={media}></Media>
        </AspectRatio>
      </CardHeader>
      <CardContent className="text-ellipsis overflow-hidden text-nowrap">
        {media.label}
      </CardContent>
    </Card>
  )
}

export default GalleryMediaCard
