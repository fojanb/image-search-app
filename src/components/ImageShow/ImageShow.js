import "./ImageShow.css";
const ImageShow = ({ alt, src }) => {
  return (
    <>
      <img alt={alt} src={src} className="image-show" />
    </>
  );
};
export { ImageShow };
