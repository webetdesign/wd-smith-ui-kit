import {AspectRatio} from "@/components/ui/aspect-ratio.tsx";
import {Card, CardContent, CardHeader} from "@/components/ui/card.tsx";
import type {Components} from "@/wd-media-ui/api/types/openapi.d.ts";
import {setSelectedMedia} from "@/wd-media-ui/stores/slices/mainSlice";
import {useDispatch, useSelector} from "react-redux";
import {MediaLibraryDispatch, MediaLibraryState} from "@/wd-media-ui/stores";
import {cn} from "@/lib/utils.ts";

interface ImageCardProps {
  className?: string;
  media: Components.Schemas.Media,
  key?: number | undefined
}

function ImageCard({ className, media }: ImageCardProps) {
  const dispatch = useDispatch<MediaLibraryDispatch>();
  const selectedMedia = useSelector((state: MediaLibraryState) => state.main.selectedMedia);

  const handleCardClick = () => {
    dispatch(setSelectedMedia(media));
  }

  return (
    <Card className={cn(className, { 'border-primary': media.id === selectedMedia?.id })} onClick={handleCardClick}>
      <CardHeader className="p-0 pb-6">
        <AspectRatio ratio={4 / 3} className="rounded-t-lg overflow-hidden bg-checkerboard">
          {media.picture && (
            <img src={String(media.thumbnail)} alt={String(media.alt)} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain"/>
          )}
          {media.svg && (
            <img src={String(media.reference)} alt={String(media.alt)} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain"/>
          )}
        </AspectRatio>
      </CardHeader>
      <CardContent className="text-ellipsis overflow-hidden text-nowrap">
        {media.label}
      </CardContent>
    </Card>
  )
}

export default ImageCard
