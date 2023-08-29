import ImageCard from "../ImageCard";

interface IInfo {
  date: string;
  title: string;
  url: string;
  hdurl: string;
  explanation: string;
  copyright?: string;
}

const Info = ({ date, title, url, hdurl, explanation, copyright }: IInfo) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <p
        className="bg-blue rounded-3xl text-white text-center font-bold text-2xl p-3"
        data-testid="apod-date"
      >
        {date}
      </p>
      <p
        className="bg-blue rounded-3xl text-white font-bold text-2xl p-3"
        data-testid="apod-date"
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
  );
};

export default Info;
