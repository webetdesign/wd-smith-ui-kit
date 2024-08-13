import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {useLibraryContext} from "@/wd-media-ui/MediaLibrary";
import {useDispatch} from "react-redux";
import {MediaLibraryDispatch} from "@/wd-media-ui/stores";
import {fetchMediaItems} from "@/wd-media-ui/stores/slices/mediaSlice.ts";
import {isNotEmpty} from "@/lib/utils.ts";

function SearchBar() {
  const dispatch = useDispatch<MediaLibraryDispatch>();

  const [searchText, setSearchText] = useState('')
  const {  } = useLibraryContext();

  useEffect(() => {
    const search = async () => {
      dispatch(fetchMediaItems({page: 1, label: searchText}))
    }

    if (isNotEmpty(searchText)) {
      search();
    }

  }, [searchText]);

  return (
    <>

      <div className="flex gap-3 items-center justify-center w-full">
        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
        <input className="h-11 w-full bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
               type="text" placeholder="Recherche" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
      </div>

    </>
  )
}

export default SearchBar
