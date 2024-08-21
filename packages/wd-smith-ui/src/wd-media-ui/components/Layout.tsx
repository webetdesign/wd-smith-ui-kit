import {ResizableHandle, ResizablePanel, ResizablePanelGroup} from "@/components/ui/resizable.tsx";
import Gallery from "@/wd-media-ui/components/Gallery.tsx";
import Information from "@/wd-media-ui/components/Information.tsx";
import {useSelector} from "react-redux";
import {MediaLibraryState} from "@/wd-media-ui/stores";
import Header from "@/wd-media-ui/components/Header.tsx";
import Footer from "@/wd-media-ui/components/Footer.tsx";
import Menu from "@/wd-media-ui/components/Menu.tsx";
import React, { useRef, useState} from "react";
import { ImperativePanelHandle } from "react-resizable-panels";


function Layout() {
  const currentMedia = useSelector((state: MediaLibraryState) => state.main.currentMedia);
  const [menuIsCollapsed, setMenuIsCollapsed] = useState<boolean>(false);

  const panelRef: React.MutableRefObject<ImperativePanelHandle|null> = useRef(null);

  // useEffect(() => {
  //   if (menuIsCollapsed) {
  //     panelRef.current?.collapse()
  //   } else {
  //     panelRef.current?.expand()
  //   }
  // }, [menuIsCollapsed]);

  return (
    <ResizablePanelGroup className="overflow-y-auto" direction="horizontal">
      <ResizablePanel
        ref={panelRef}
        collapsible={false}
        collapsedSize={5}
        minSize={15}
        maxSize={30}
        defaultSize={15}
        onCollapse={() => setMenuIsCollapsed(true)}
        onExpand={() => setMenuIsCollapsed(false)}
        data-collapsed={menuIsCollapsed}
        className="group/collapse border-t-2"
      >
        <Menu/>
      </ResizablePanel>
      <ResizableHandle withHandle/>
      <ResizablePanel>
        <Header/>
        <Gallery/>
        <Footer/>
      </ResizablePanel>
      {currentMedia && (
        <>
          <ResizableHandle withHandle/>
          <ResizablePanel minSize={20} maxSize={30} defaultSize={20}>
            <Information/>
          </ResizablePanel>
        </>
      )}
    </ResizablePanelGroup>
  )
}

export default Layout;
