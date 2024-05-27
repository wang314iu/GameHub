const getCroppedImgUrl = (url: string, width: number, height: number) => {
  const idx = url.indexOf("media/");
  const newUrl = `${url.slice(0, idx + 6)}crop/${width}/${height}/${url.slice(
    idx + 6
  )}`;
  return newUrl;
};

export default getCroppedImgUrl;
