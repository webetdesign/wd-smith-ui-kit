// localStorageUtils.ts
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('wd-media-ui-state');
    if (serializedState === null) {
      return undefined; // Si pas de données dans localStorage
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state: any) => {
  try {
    const stateToSave = {
      folder: {
        openFolders: state.folder.openFolders,
        currentFolder: state.folder.currentFolder,
      },
    };
    const serializedState = JSON.stringify(stateToSave);
    localStorage.setItem('wd-media-ui-state', serializedState);
  } catch (err) {
    console.error("Could not save state", err);
  }
};
