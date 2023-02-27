import { days } from "../utils/days";

export const DayLabels = () => {
  return days.map((dayLabel, index) => {
    return (
      <div className="dayLabel cell" key={index}>
        {dayLabel}
      </div>
    );
  });
};
