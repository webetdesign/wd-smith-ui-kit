import {useDispatch, useSelector} from "react-redux";
import {MediaLibraryDispatch, MediaLibraryState} from "@/wd-media-ui/stores";
import {fetchMediaItems} from "@/wd-media-ui/stores/slices/mediaSlice.ts";
import {Button} from "@/components/ui/button.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight, faChevronLeft} from "@fortawesome/free-solid-svg-icons";

export function PagerButton() {
  const dispatch = useDispatch<MediaLibraryDispatch>();
  const view = useSelector((state: MediaLibraryState) => state.media.view);

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
    <div className="flex gap-2">
      <Button onClick={handlePreviousClick} disabled={view["hydra:previous"] === undefined}>
        <FontAwesomeIcon icon={faChevronLeft} className="pr-2"/>
        Précédant
      </Button>
      <Button onClick={handleNextClick} disabled={view["hydra:next"] === undefined}>
        Suivant
        <FontAwesomeIcon icon={faChevronRight} className="pl-2"/>
      </Button>
    </div>
  )
}
