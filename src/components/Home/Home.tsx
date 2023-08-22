import Container from "../Container";

const Home = (): JSX.Element => {
  return (
    <Container>
      <section>
        <h1
          className="text-center text-4xl font-bold mb-3"
          data-testid="apod-title"
        >
          Astronomy Picture of the Day
        </h1>
        <div className="flex flex-col items-center justify-center my-5">
          <div className="grid grid-cols-3 gap-4 text-white text-center">
            <div className="bg-blue rounded-3xl p-3 hover:brightness-125">
              <h2 className="text-2xl font-bold mb-4">What is it?</h2>
              <p className="leading-loose">
                Each day a different image or photograph of our fascinating
                universe is featured, along with a brief explanation written by
                a professional astronomer.
              </p>
            </div>
            <div className="bg-violet rounded-3xl p-3 hover:brightness-125">
              <h2 className="text-2xl font-bold mb-4">Today's Picture</h2>
              <p className="leading-loose">
                Click here to see today's picture.
              </p>
            </div>
            <div className="bg-blue rounded-3xl p-3 hover:brightness-125">
              <h2 className="text-2xl font-bold mb-4">Archive</h2>
              <p className="leading-loose">
                Search for pictures by year, month and day. The archive starts
                in June 15th, 1995.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Home;
