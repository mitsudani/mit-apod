import { useEffect, useState, useRef } from "react";
import Loader from "../Loader/Loader";

interface IImageCard {
  hdurl: string;
  url: string;
}

const ImageCard = ({ hdurl, url }: IImageCard) => {
  const isYoutubeVideo = url.includes("youtube");
  const [loaded, setLoaded] = useState(isYoutubeVideo);
  const prevUrl = useRef(url);

  useEffect(() => {
    if (prevUrl.current !== url) {
      setLoaded(false);
    }
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
        {isYoutubeVideo ? (
          <iframe width="420" height="315" src={url} />
        ) : (
          <img
            className="rounded-3xl max-h-[30rem]"
            src={url}
            alt="Today's picture"
            onLoad={hasLoaded}
            style={loaded ? {} : { display: "none" }}
            data-testid="apod-image"
          />
        )}
      </a>
      {!loaded && <Loader />}
    </>
  );
};

export default ImageCard;
