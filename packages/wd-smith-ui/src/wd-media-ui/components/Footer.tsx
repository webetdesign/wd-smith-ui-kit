import {useDispatch, useSelector} from "react-redux";
import {MediaLibraryDispatch, MediaLibraryState} from "@/wd-media-ui/stores";
import {fetchMediaItems} from "@/wd-media-ui/stores/slices/mediaSlice.ts";
import {Button} from "@/components/ui/button.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight, faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import {usePickerContext} from "@/wd-media-ui/MediaPicker";

function Footer() {
  const dispatch = useDispatch<MediaLibraryDispatch>();
  const view = useSelector((state: MediaLibraryState) => state.media.view);
  const picker = useSelector((state: MediaLibraryState) => state.main.picker);
  const currentMedia = useSelector((state: MediaLibraryState) => state.main.currentMedia);
  let handlePickClick = () => {};
  try {
    const { setIsDialogOpen, setSelectedMedia, onPickedMedia} = usePickerContext();
    handlePickClick = () => {
      setSelectedMedia(currentMedia)
      if (onPickedMedia) {
        if (currentMedia !== null && currentMedia !== undefined) {
          onPickedMedia(currentMedia.id !== undefined ? currentMedia.id : null);
          setIsDialogOpen(false);
        }
      }
    }
  }
  catch (error) {

  }

  if (!view) return null;

  const parseUrl = (url: string) => {
    const matches = url.match(/page=(\d+)/i);
    return matches ? matches[1] ?? null : null;
  }

  const handlePreviousClick = () => {
    gotToPage(view["hydra:previous"]);
  }
  const handleNextClick = () => {
    gotToPage(view["hydra:next"]);
  }

  const gotToPage = (url: string | undefined) => {
    if (url == undefined) {
      return
    }
    const page = Number(parseUrl(url))

    if (page === null) {
      return;
    }
    dispatch(fetchMediaItems(page));
  }

  return (
    <div className="px-6 h-20 flex items-center justify-end border-t-2">
      <div className="flex gap-2">
        {picker && (
          <Button onClick={handlePickClick} disabled={currentMedia === null}>
            Valider
          </Button>
        )}
        <Button variant="secondary" onClick={handlePreviousClick} disabled={view["hydra:previous"] === undefined}>
          <FontAwesomeIcon icon={faChevronLeft} className="pr-2"/>
          Précédent
        </Button>
        <Button variant="secondary" onClick={handleNextClick} disabled={view["hydra:next"] === undefined}>
          Suivant
          <FontAwesomeIcon icon={faChevronRight} className="pl-2"/>
        </Button>
      </div>
    </div>
  )
}

export default Footer;
