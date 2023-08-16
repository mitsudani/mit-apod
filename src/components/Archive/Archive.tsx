import { useEffect, useState } from "react";
import { format, subDays } from "date-fns";
import DatePicker from "react-date-picker";
import useGetApod from "../../hooks/useGetApod";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import Loader from "../Loader/Loader";
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const Archive = (): JSX.Element => {
  const today = subDays(new Date(), 1);
  const [selectedDate, setSelectedDate] = useState<Value>(today);
  const { isLoading, error, data } = useGetApod({
    date: format(selectedDate as Date, "yyyy-MM-dd"),
  });
  const [loaded, setLoaded] = useState(false);

  const hasLoaded = () => {
    setLoaded(true);
  };

  if (isLoading) {
    return <Loader />;
  }

  const { copyright, date, explanation, hdurl, title, url } = data;

  return (
    <section className="bg-red-500">
      <h2>Astronomy Picture of the Day Calendar</h2>
      <h3>Today's Picture</h3>

      <DatePicker
        onChange={(val: Value) => {
          setLoaded(false);
          setSelectedDate(val);
        }}
        value={selectedDate}
        maxDate={today}
        minDate={new Date("1995-06-16")}
      />

      {error ? (
        <p>{error}</p>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          <p className="bg-yellow-500">{title}</p>
          <p className="bg-cyan-500">{date}</p>
          <div className="bg-blue-500 row-span-2">
            <a href={hdurl} target="_blank" rel="noopener noreferrer">
              <img
                src={url}
                alt="Today's picture"
                style={loaded ? {} : { display: "none" }}
                onLoad={hasLoaded}
              />
            </a>
            {!loaded && <Loader />}
          </div>
          <p className="bg-violet-500">{explanation}</p>
          <p className="bg-pink-500 col-start-2">Copyright: {copyright}</p>
        </div>
      )}
    </section>
  );
};

export default Archive;
