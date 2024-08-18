import {useDispatch, useSelector} from "react-redux";
import {MediaLibraryDispatch, MediaLibraryState} from "@/wd-media-ui/stores";
import {useEffect} from "react";
import {
  deleteFolder,
  fetchFolderItems,
  Folder,
  setCurrentFolder, setDialogFormFolder,
  setDialogFormIsOpen,
  setDialogFormTargetFolder,
  setIsOpen
} from "@/wd-media-ui/stores/slices/folderSlice.ts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faMinus,} from "@fortawesome/free-solid-svg-icons";
import {faFolder, faFolderOpen, faFolderClosed, faCirclePlay, faFileArchive, faFileLines, faImage, faClock} from "@fortawesome/free-regular-svg-icons"
import {cn} from "@/lib/utils.ts";
import {Separator} from "@/components/ui/separator.tsx";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem, ContextMenuPortal, ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import {useLibraryContext} from "@/wd-media-ui/MediaLibrary/MediaLibrary.tsx";


const buildTree = (folders: Folder[]) => {
  const clonedFolders = folders.map(folder => ({ ...folder }));
  const map = new Map<number, Folder>();

  clonedFolders.forEach(folder => {
    folder.children = [];
    map.set(folder.id, folder);
  });

  const tree: Folder[] = [];

  clonedFolders.forEach(folder => {
    if (folder.parent) {
      const parentFolder = map.get(parseInt(folder.parent.split('/').pop()!));
      parentFolder?.children?.push(folder);
    } else {
      tree.push(folder);
    }
  });

  return tree;
}


function Menu() {
  const dispatch = useDispatch<MediaLibraryDispatch>();
  const { items, status, error, currentFolder } = useSelector((state: MediaLibraryState) => state.folder);
  const nodes = buildTree(items).pop()?.children;
  const otherNodes: Folder[] = [
    {
      id: -1,
      code: 'recent',
      label: 'Recent',
      children: [],
    }
  ]
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchFolderItems());
    }
    if (status === 'succeeded' && currentFolder === null) {
      dispatch(setCurrentFolder(nodes ? nodes[0] ?? null : null));
    }
  }, [status, dispatch]);

  if (status === 'loading' || status === 'idle') {
    return 'Loading ...';
  }

  if (status === 'failed') {
    return 'Failed... ' + error;
  }


  if (nodes === undefined) {
    return null;
  }

  return (
    <div className="py-3">
      <MenuItems nodes={nodes}/>
      <Separator className="my-2"/>
      <MenuItems nodes={otherNodes}/>
    </div>
  )
}

function MenuItems({ nodes }: { nodes: Folder[] }) {
  const dispatch = useDispatch<MediaLibraryDispatch>();
  const { currentFolder, openFolders } = useSelector((state: MediaLibraryState) => state.folder);
  const { dialogContainer } = useLibraryContext()

  const nodeIcon = (node: Folder) => {
    switch ( node.code ) {
      case 'picture' :
        return faImage;
      case 'audio-video' :
        return faCirclePlay;
      case 'archive' :
        return faFileArchive;
      case 'document' :
        return faFileLines;
      case 'recent' :
        return faClock;
    }

    if (!node.children || node.children.length === 0) {
      return faFolder;
    }
    return openFolders.includes(node.id) ? faFolderOpen : faFolderClosed;
  }

  const renderTree = (nodes: Folder[]) => {
    return (
      <>
        {nodes.map(node => (
          <ContextMenu key={node.id}>
            <ContextMenuTrigger>
              <div>
                <div className={cn({
                  'is-active': node.id === currentFolder?.id,
                  '!bg-primary': node.id === currentFolder?.id,
                  '!text-primary-foreground': node.id === currentFolder?.id
                }, 'hs-accordion-heading group py-4 flex items-center gap-x-0.5 w-full hover:bg-accent rounded-sm')}>

                  <button
                    type="button"
                    className="size-6 ml-2 group-[[data-collapsed=true]]/collapse:hidden group-[.is-active]:text-primary-foreground group-[.is-active]:hover:!bg-primary flex justify-center items-center hover:bg-secondary rounded-md focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
                    disabled={!node.children || node.children.length === 0}
                    onClick={() => dispatch(setIsOpen({
                      id: node.id,
                      value: !openFolders.includes(node.id)
                    }))}
                  >
                    {node.children && node.children.length > 0 && (
                      <FontAwesomeIcon icon={openFolders.includes(node.id) ? faMinus : faPlus} className="group-[.is-active]:text-primary-foreground text-secondary-foreground"/>
                    )}
                  </button>

                  {/* group-[[data-collapsed=true]]/collapse:flex group-[[data-collapsed=true]]/collapse:justify-center */}
                  <div
                    className="flex flex-nowrap px-1.5 cursor-pointer items-center"
                    onClick={() => dispatch(setCurrentFolder(node))}
                  >
                    <FontAwesomeIcon icon={nodeIcon(node)} className="group-[.is-active]:text-primary-foreground text-secondary-foreground"/>

                    <span className="pl-2 text-ellipsis text-nowrap group-[[data-collapsed=true]]/collapse:hidden">{node.label}</span>
                  </div>

                </div>
                {node.children && node.children.length > 0 && openFolders.includes(node.id) && (
                  <div className="hs-accordion-content group-[[data-collapsed=true]]/collapse:hidden w-full overflow-hidden transition-[height] duration-300">
                    <div className="ps-7 relative before:absolute before:top-0 before:start-5 before:w-0.5 before:-ms-px before:h-full before:bg-gray-100 dark:before:bg-neutral-700">
                      {renderTree(node.children)}
                    </div>
                  </div>
                )}
              </div>
            </ContextMenuTrigger>
            {node.id > 0 && (
              <ContextMenuPortal container={dialogContainer}>
                <ContextMenuContent>
                  <ContextMenuItem onClick={() => {
                    dispatch(setDialogFormIsOpen(true));
                    dispatch(setDialogFormFolder(null));
                    dispatch(setDialogFormTargetFolder(node));
                  }}>
                    Nouveau
                  </ContextMenuItem>
                  <ContextMenuSeparator></ContextMenuSeparator>
                  <ContextMenuItem onClick={() => {
                    dispatch(setDialogFormIsOpen(true));
                    dispatch(setDialogFormFolder(node));
                    dispatch(setDialogFormTargetFolder(null));
                  }}>
                    Renommer
                  </ContextMenuItem>
                  <ContextMenuItem>Déplacer</ContextMenuItem>
                  <ContextMenuSeparator></ContextMenuSeparator>
                  <ContextMenuItem
                    disabled={node.lvl === undefined || node.lvl <= 1} className="focus:bg-destructive focus:text-destructive-foreground"
                    onClick={() => {
                      dispatch(deleteFolder(node.id))
                    }}
                  >
                    Supprimer
                  </ContextMenuItem>
                </ContextMenuContent>
              </ContextMenuPortal>
            )}
          </ContextMenu>
        ))}
      </>

    )
  }

  return <div className="flex flex-col px-3">{renderTree(nodes)}</div>
}

export default Menu
