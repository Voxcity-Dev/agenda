import { months } from "../utils/months";

export const Navigation = ({ date, setDate }) => {
  return (
    <div className="navigation">
      <div
        className="back"
        onClick={() => {
          const newDate = new Date(date);
          newDate.setMonth(newDate.getMonth() - 1);
          setDate(newDate);
        }}
      >
        {"<-"} {months[date.getMonth() === 0 ? 11 : date.getMonth() - 1]}
      </div>
      <div className="monthAndYear">
        {months[date.getMonth()]} {date.getFullYear()}
      </div>
      <div
        className="forward"
        onClick={() => {
          const newDate = new Date(date);
          newDate.setMonth(newDate.getMonth() + 1);
          setDate(newDate);
        }}
      >
        {months[date.getMonth() === 11 ? 0 : date.getMonth() + 1]} {"->"}
      </div>
    </div>
  );
};
