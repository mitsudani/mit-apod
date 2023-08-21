import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";

interface IImageCard {
  hdurl: string;
  url: string;
}

const ImageCard = ({ hdurl, url }: IImageCard) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [url]);

  const hasLoaded = () => {
    setLoaded(true);
  };

  return (
    <>
      <a
        href={hdurl}
        target="_blank"
        rel="noopener noreferrer"
        className="contents"
        data-testid="apod-image-link"
      >
        <img
          className="rounded-3xl max-h-[35rem]"
          src={url}
          alt="Today's picture"
          onLoad={hasLoaded}
          style={loaded ? {} : { display: "none" }}
        />
      </a>
      {!loaded && <Loader />}
    </>
  );
};

export default ImageCard;
