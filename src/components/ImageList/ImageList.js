import { ImageShow } from "../ImageShow/ImageShow";
const ImageList = ({ images }) => {
  let renderedImages = images.map((img, index) => {
    return (
      <ImageShow
        alt={img.alt_description}
        src={img.urls.regular}
        id={img.id}
        key={index}
      />
    );
  });
  return <div>{renderedImages}</div>;
};
export default ImageList;
