import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import "./App.css";
import { Navigation } from "./components/navigation";
import { DayLabels } from "./components/daylabels";
import { Grid } from "./components/grid";

export const App = () => {
  const selectedDate = new Date();
  const [date, setDate] = useState(selectedDate);

  return (
    <div className="calendar">
      <Navigation date={date} setDate={setDate} />
      <DayLabels />
      <Grid date={date} actualDate={date} />
    </div>
  );
};
