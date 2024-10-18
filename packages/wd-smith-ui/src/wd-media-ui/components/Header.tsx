import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList, BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Upload from "@/wd-media-ui/components/Upload.tsx";
import SearchBar from "@/wd-media-ui/components/SearchBar.tsx";
import {useDispatch, useSelector} from "react-redux";
import {MediaLibraryDispatch, MediaLibraryState} from "@/wd-media-ui/stores";
import {Folder, setCurrentFolder} from "@/wd-media-ui/stores/slices/folderSlice.ts";
import React from "react";
import {Button} from "@/components/ui/button.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUpload} from "@fortawesome/free-solid-svg-icons";

function Header() {
  const dispatch = useDispatch<MediaLibraryDispatch>();
  const { currentFolder, items } = useSelector((state: MediaLibraryState) => state.folder)

  const buildNodes = (nodes: Folder[], node: Folder, items: Folder[]): Folder[] => {
    if (node.parent && !node.parent.match(/\/1$/)) {
      const parent = items.find((item) => item['@id'] === node.parent);
      if (parent !== undefined) {
        nodes = buildNodes(nodes, parent, items);
      }
    }

    return [...nodes, node];
  };

  if (currentFolder === null) {
    return;
  }

  let nodes: Folder[] = buildNodes([], currentFolder, items);

  return (
    <div className="border-y-2 h-20 flex items-center">
      <div className="px-6 w-full flex items-center justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            {nodes.map(((node, index) => (
              <React.Fragment key={node.id}>
                {index !== 0 && <BreadcrumbSeparator/>}
                <BreadcrumbItem>
                  {nodes.length - 1 !== index && (
                    <BreadcrumbLink className="cursor-pointer" onClick={() => {
                      dispatch(setCurrentFolder(node))
                    }}
                    >{node.label}</BreadcrumbLink>
                  )}
                  {nodes.length - 1 === index && (
                    <BreadcrumbPage>{node.label}</BreadcrumbPage>
                  )}
                </BreadcrumbItem>
              </React.Fragment>
            )))}
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex gap-3">
          <SearchBar/>
          <Upload>
            <Button type="button">
              <FontAwesomeIcon icon={faUpload}/>
            </Button>
          </Upload>
        </div>
      </div>
    </div>
  )
}

export default Header
