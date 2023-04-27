import { ImageShow } from "../ImageShow/ImageShow";
import "./ImageList.css";
const ImageList = ({ images }) => {
  let renderedImages = images.map((image) => {
    return (
      <ImageShow
        alt={image.alt_description}
        src={image.urls.small}
        key={image.id}
      />
    );
  });
  return <div className="image-list">{renderedImages}</div>;
};
export default ImageList;
