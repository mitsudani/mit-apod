import useGetApod from "../../hooks/useGetApod";
import Loader from "../Loader/Loader";
import ImageCard from "../ImageCard/ImageCard";
import Container from "../Container/Container";

const Apod = (): JSX.Element => {
  const { isLoading, error, data } = useGetApod();

  if (isLoading) {
    return <Loader />;
  }

  const { copyright, date, explanation, hdurl, title, url } = data;

  return (
    <Container>
      <section>
        <h2
          className="text-center text-4xl font-bold mb-3"
          data-testid="apod-title"
        >
          Astronomy Picture of the Day
        </h2>
        <h3 className="text-center text-3xl my-5" data-testid="apod-subtitle">
          Today's Picture
        </h3>
        {error ? (
          <p>{error}</p>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <div className="grid grid-cols-2 gap-4">
              <p
                className="bg-blue rounded-3xl text-white text-center font-bold text-2xl p-3"
                data-testid="apod-date"
              >
                {date}
              </p>
              <p
                className="bg-blue rounded-3xl text-white font-bold text-2xl p-3"
                data-testid="apod-title"
              >
                {title}
              </p>
              <div className="row-span-2 flex justify-center">
                <ImageCard url={url} hdurl={hdurl} />
              </div>
              <p
                className="bg-violet text-white rounded-3xl p-4"
                data-testid="apod-explanation"
              >
                {explanation}
              </p>
              <p
                className="bg-greyish text-white col-start-2 rounded-3xl p-4"
                data-testid="apod-copyright"
              >
                Copyright: {!copyright ? "No information available" : copyright}
              </p>
            </div>
          </div>
        )}
      </section>
    </Container>
  );
};

export default Apod;
