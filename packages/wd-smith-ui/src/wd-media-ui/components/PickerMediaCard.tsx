import {AspectRatio} from "@/components/ui/aspect-ratio.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUpload} from "@fortawesome/free-solid-svg-icons";
import {Card} from "@/components/ui/card.tsx";
import {cn} from "@/lib/utils.ts";
import Media from "@/wd-media-ui/components/Media.tsx";
import {usePickerContext} from "@/wd-media-ui/MediaPicker";

function PickerMediaCard({ className }: { className?: string }) {
  const { setIsDialogOpen, selectedMedia } = usePickerContext();

  className = cn("group bg-background w-96 m-6 aspect-[4/3]", className);

  return (
    <Card onClick={() => setIsDialogOpen(true)} className={className}>
      <div className="relative">
        <AspectRatio ratio={4 / 3} className="rounded-lg overflow-hidden bg-checkerboard">
          <Media media={selectedMedia} placeholder={true}></Media>
        </AspectRatio>
        <div className="hidden absolute inset-6 flex items-center justify-center group-hover:flex rounded-lg bg-primary/25 text-white border-dashed border-2">
          <FontAwesomeIcon icon={faUpload} className="text-4xl"/>
        </div>
      </div>
    </Card>
  )
}

export default PickerMediaCard
