import { default as React, HTMLAttributes } from 'react';
import { Components } from '../api/types/openapi';

export interface MediaPickerProps extends React.HTMLProps<HTMLAttributes<HTMLDivElement>> {
    serverUrl: string;
    dialogContainer: HTMLElement;
    onPickedMedia: (value: number | null) => void;
    value?: number | undefined;
    allowMimeType?: string[] | null;
}
type MediaPickerAppContextType = {
    dialogContainer: HTMLElement;
    onPickedMedia?: (value: number | null) => void;
    isDialogOpen: boolean;
    setIsDialogOpen: (value: boolean) => void;
    selectedMedia: Components.Schemas.Media | null;
    setSelectedMedia: (value: Components.Schemas.Media | null) => void;
    allowMimeType?: string[] | null;
};
export declare const MediaPickerAppContext: React.Context<MediaPickerAppContextType | undefined>;
export declare const usePickerContext: () => MediaPickerAppContextType;
declare function MediaPickerApp({ serverUrl, className, onPickedMedia, dialogContainer, value, allowMimeType }: MediaPickerProps): import("react/jsx-runtime").JSX.Element;
export default MediaPickerApp;
