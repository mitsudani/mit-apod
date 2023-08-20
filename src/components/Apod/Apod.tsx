import useGetApod from "../../hooks/useGetApod";
import Loader from "../Loader/Loader";
import ImageCard from "../ImageCard/ImageCard";

const Apod = (): JSX.Element => {
  const { isLoading, error, data } = useGetApod();

  if (isLoading) {
    return <Loader />;
  }

  const { copyright, date, explanation, hdurl, title, url } = data;

  return (
    <section className="pt-5">
      <h2 className="text-center">ASTRONOMY PICTURE OF THE DAY</h2>
      <h3 className="text-center">Today's Picture</h3>
      {error ? (
        <p>{error}</p>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          <p className="bg-yellow-500">{title}</p>
          <p className="bg-cyan-500">{date}</p>
          <div className="row-span-2">
            <ImageCard url={url} hdurl={hdurl} />
          </div>
          <p className="bg-violet-500">{explanation}</p>
          <p className="bg-pink-500 col-start-2">Copyright: {copyright}</p>
        </div>
      )}
    </section>
  );
};

export default Apod;
