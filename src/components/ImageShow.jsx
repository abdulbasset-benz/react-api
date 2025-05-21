function ImageShow({ image }) {
  return (
    <div className="grid grid-cols-1 gap-4 mb-4">
      <img
        src={image.urls.regular}
        alt={image.alt_description || "Unsplash image"}
        className="w-full h-auto rounded"
      />
    </div>
  );
}

export default ImageShow;
