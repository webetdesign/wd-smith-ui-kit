import {ResizableHandle, ResizablePanel, ResizablePanelGroup} from "@/components/ui/resizable.tsx";
import Gallery from "@/wd-media-ui/components/Gallery.tsx";
import Information from "@/wd-media-ui/components/Information.tsx";
import {useSelector} from "react-redux";
import {MediaLibraryState} from "@/wd-media-ui/stores";
import Header from "@/wd-media-ui/components/Header.tsx";
import {PagerButton} from "@/wd-media-ui/components/Pagination.tsx";


function Layout() {
  const selectedMedia = useSelector((state: MediaLibraryState) => state.main.selectedMedia);

  return (
    <ResizablePanelGroup className="overflow-y-auto" direction="horizontal">
      <ResizablePanel>
        <Header/>
        <Gallery/>
        <footer className="px-6 h-20 flex items-center justify-end border-t-2">
          <PagerButton/>
        </footer>
      </ResizablePanel>
      {selectedMedia && (
        <>
          <ResizableHandle withHandle/>
          <ResizablePanel minSize={20} maxSize={40} defaultSize={20}>
            <Information/>
          </ResizablePanel>
        </>
      )}
    </ResizablePanelGroup>
  )
}

export default Layout;
