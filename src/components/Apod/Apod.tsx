import useGetApod from "../../hooks/useGetApod";

const Apod = (): JSX.Element => {
  const { isLoading, error, data } = useGetApod();

  if (isLoading) {
    return <>Cargando..</>;
  }

  const { copyright, date, explanation, hdurl, title, url } = data;

  return (
    <section className="bg-red-500">
      <h2>ASTRONOMY PICTURE OF THE DAY</h2>
      <h3>Today's Picture</h3>
      {error ? (
        <p>{error}</p>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          <p className="bg-yellow-500">{title}</p>
          <p className="bg-cyan-500">{date}</p>
          <div className="bg-blue-500 row-span-2">
            <a href={hdurl} target="_blank" rel="noopener noreferrer">
              <img src={url} alt="Today's picture" />
            </a>
          </div>
          <p className="bg-violet-500">{explanation}</p>
          <p className="bg-pink-500 col-start-2">Copyright: {copyright}</p>
        </div>
      )}
    </section>
  );
};

export default Apod;
