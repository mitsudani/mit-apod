import { useState } from "react";
import { format, subDays } from "date-fns";
import DatePicker from "react-date-picker";
import useGetApod from "../../hooks/useGetApod";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import Loader from "../Loader/Loader";
import Container from "../Container/Container";
import Info from "../Info/Info";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const Archive = (): JSX.Element => {
  const today = subDays(new Date(), 1);
  const [pickerDate, setPickerDate] = useState<Value>(today);
  const [selectedDate, setSelectedDate] = useState<Value>(pickerDate);
  const { isLoading, error, data } = useGetApod({
    date: selectedDate ? format(selectedDate as Date, "yyyy-MM-dd") : "",
  });

  const updateDate = () => {
    setSelectedDate(pickerDate);
  };

  if (isLoading) {
    return <Loader />;
  }

  const { copyright, date, explanation, hdurl, title, url } = data;

  return (
    <Container>
      <section>
        <h2
          className="text-center text-4xl font-bold mb-3"
          data-testid="archive-title"
        >
          Astronomy Picture of the Day Archive
        </h2>
        <h3 className="text-center text-3xl" data-testid="archive-subtitle">
          Choose a day to show its picture:
        </h3>
        <div className="flex flex-col items-center justify-center">
          <div className="w-full flex items-center justify-center">
            <DatePicker
              className="my-5 bg-white rounded-3xl border-none"
              onChange={setPickerDate}
              value={pickerDate}
              maxDate={today}
              minDate={new Date("1995-06-16")}
              format="y-MM-dd"
              data-testid="datepicker"
            />
            <button
              className="bg-violet rounded-3xl text-white py-0.5 px-4 ml-2"
              onClick={updateDate}
              data-testid="search-button"
            >
              Search
            </button>
          </div>
          {error ? (
            <p>{error}</p>
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
        </div>
      </section>
    </Container>
  );
};

export default Archive;
