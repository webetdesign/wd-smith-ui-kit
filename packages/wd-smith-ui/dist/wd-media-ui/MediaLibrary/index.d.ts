import { default as React, HTMLAttributes } from 'react';

export interface MediaLibraryProps extends React.HTMLProps<HTMLAttributes<HTMLDivElement>> {
    serverUrl: string;
}
declare function MediaLibraryApp({ serverUrl, className }: MediaLibraryProps): import("react/jsx-runtime").JSX.Element;
export default MediaLibraryApp;
