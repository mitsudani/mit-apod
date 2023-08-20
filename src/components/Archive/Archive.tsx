import { useState } from "react";
import { format, subDays } from "date-fns";
import DatePicker from "react-date-picker";
import useGetApod from "../../hooks/useGetApod";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import Loader from "../Loader/Loader";
import ImageCard from "../ImageCard/ImageCard";
import Container from "../Container/Container";
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const Archive = (): JSX.Element => {
  const today = subDays(new Date(), 1);
  const [selectedDate, setSelectedDate] = useState<Value>(today);
  const { isLoading, error, data } = useGetApod({
    date: format(selectedDate as Date, "yyyy-MM-dd"),
  });

  if (isLoading) {
    return <Loader />;
  }

  const { copyright, date, explanation, hdurl, title, url } = data;

  return (
    <Container>
      <section>
        <h2 className="text-center text-4xl font-bold">
          Astronomy Picture of the Day Calendar
        </h2>
        <h3 className="text-center text-3xl">
          Choose a day to show its picture:
        </h3>
        <div className="flex flex-col items-center justify-center">
          <DatePicker
            className="my-5 bg-white"
            onChange={setSelectedDate}
            value={selectedDate}
            maxDate={today}
            minDate={new Date("1995-06-16")}
          />
          {error ? (
            <p>{error}</p>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              <p className="bg-blue rounded-3xl text-white text-center font-bold text-2xl p-3">
                {date}
              </p>
              <p className="bg-blue rounded-3xl text-white font-bold text-2xl p-3">
                {title}
              </p>
              <div className="row-span-2 flex justify-center">
                <ImageCard url={url} hdurl={hdurl} />
              </div>
              <p className="bg-violet text-white rounded-3xl p-4">
                {explanation}
              </p>
              <p className="bg-greyish text-white col-start-2 rounded-3xl p-4">
                Copyright: {copyright}
              </p>
            </div>
          )}
        </div>
      </section>
    </Container>
  );
};

export default Archive;
