import placeholderPicture from '#/picture.svg';
import {Components} from "@/wd-media-ui/api/types/openapi";


interface MediaProps {
  media: Components.Schemas.Media|null,
  placeholder?: false | true,
}

function Media ({media, placeholder}: MediaProps) {

  return (
    <>
      {media && media.picture && (
        <img src={String(media.thumbnail)} alt={String(media.alt)} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain"/>
      )}
      {media && media.svg && (
        <img src={String(media.reference)} alt={String(media.alt)} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain"/>
      )}
      {placeholder && media === null && (
        <img src={placeholderPicture} alt="Selection" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain"/>
      )}
    </>
  )
}

export default Media;