import { default as React, HTMLAttributes } from 'react';

export interface MediaLibraryProps extends React.HTMLProps<HTMLAttributes<HTMLDivElement>> {
    dialogContainer: HTMLElement;
}
type MediaLibraryAppContextType = {
    dialogContainer: HTMLElement;
};
export declare const useLibraryContext: () => MediaLibraryAppContextType;
declare function MediaLibrary({ className, dialogContainer, ...rest }: MediaLibraryProps): import("react/jsx-runtime").JSX.Element;
export default MediaLibrary;
