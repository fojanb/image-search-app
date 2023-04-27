import { ImageShow } from "../ImageShow/ImageShow";
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
  return <div>{renderedImages}</div>;
};
export default ImageList;
