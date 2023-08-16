import useGetApod from "../../hooks/useGetApod";

const Apod = (): JSX.Element => {
  const { isLoading, error, data } = useGetApod();

  if (isLoading) {
    return <>Cargando..</>;
  }

  return (
    <section className="bg-red-500">
      <h2>ASTRONOMY PICTURE OF THE DAY</h2>
      <h3>Today's Picture</h3>
      <div className="grid grid-cols-2 gap-4">
        <p className="bg-yellow-500">TITLE</p>
        <p className="bg-cyan-500">DATE</p>
        <div className="bg-blue-500 row-span-2">IMAGE</div>
        <p className="bg-violet-500">EXPLANATION</p>
        <p className="bg-pink-500 col-start-2">COPYRIGHT</p>
      </div>
    </section>
  );
};

export default Apod;
