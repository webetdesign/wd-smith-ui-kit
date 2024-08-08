import {ResizableHandle, ResizablePanel, ResizablePanelGroup} from "@/components/ui/resizable.tsx";
import Gallery from "@/wd-media-ui/components/Gallery.tsx";
import Information from "@/wd-media-ui/components/Information.tsx";
import {useSelector} from "react-redux";
import {MediaLibraryState} from "@/wd-media-ui/stores";
import Header from "@/wd-media-ui/components/Header.tsx";
import Footer from "@/wd-media-ui/components/Footer.tsx";


function Layout() {
  const currentMedia = useSelector((state: MediaLibraryState) => state.main.currentMedia);

  return (
    <ResizablePanelGroup className="overflow-y-auto" direction="horizontal">
      <ResizablePanel>
        <Header/>
        <Gallery/>
        <Footer/>
      </ResizablePanel>
      {currentMedia && (
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
