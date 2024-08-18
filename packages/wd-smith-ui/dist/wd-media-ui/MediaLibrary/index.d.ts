import { default as React, HTMLAttributes } from 'react';

export interface MediaLibraryProps extends React.HTMLProps<HTMLAttributes<HTMLDivElement>> {
    serverUrl: string;
    dialogContainer: HTMLElement;
}
declare function MediaLibraryApp({ serverUrl, dialogContainer, className }: MediaLibraryProps): import("react/jsx-runtime").JSX.Element;
export default MediaLibraryApp;
