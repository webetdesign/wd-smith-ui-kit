import { default as React } from 'react';
import { Components } from '../api/types/openapi';

interface UploadProps {
    children?: React.ReactElement<{
        onClick?: () => void;
    }>;
    media?: Components.Schemas.Media;
}
declare function Upload({ children, media }: UploadProps): import("react/jsx-runtime").JSX.Element;
export default Upload;
