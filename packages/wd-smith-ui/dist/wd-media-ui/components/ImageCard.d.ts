import { Components } from '../api/types/openapi.d.ts';

interface ImageCardProps {
    className?: string;
    media: Components.Schemas.Media;
    key?: number | undefined;
}
declare function ImageCard({ className, media }: ImageCardProps): import("react/jsx-runtime").JSX.Element;
export default ImageCard;
