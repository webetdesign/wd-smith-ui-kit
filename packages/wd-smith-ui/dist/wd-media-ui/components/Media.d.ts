import { Components } from '../api/types/openapi';

interface MediaProps {
    media: Components.Schemas.Media | null;
    placeholder?: false | true;
}
declare function Media({ media, placeholder }: MediaProps): import("react/jsx-runtime").JSX.Element;
export default Media;
