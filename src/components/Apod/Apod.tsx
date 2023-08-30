import useGetApod from "../../hooks/useGetApod";
import Loader from "../Loader/Loader";
import Container from "../Container/Container";
import Info from "../Info/Info";

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
          <p
            className="text-4xl font-bold text-center"
            data-testid="error-message"
          >
            {error}
          </p>
        ) : (
          <Info
            date={date}
            title={title}
            explanation={explanation}
            copyright={copyright}
            url={url}
            hdurl={hdurl}
          />
        )}
      </section>
    </Container>
  );
};

export default Apod;
