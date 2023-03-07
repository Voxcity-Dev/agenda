export const Grid = ({ date, actualDate }) => {
  const toStartOfDay = (date) => {
    const newDate = new Date(date);
    newDate.setHours(0);
    newDate.setMinutes(0);
    newDate.setSeconds(0);
    newDate.setMilliseconds(0);
    return newDate;
  };

  const rowsCount = 6;
  const currentDate = toStartOfDay(new Date());
  const startingDate = new Date(date.getFullYear(), date.getMonth(), 1);
  startingDate.setDate(startingDate.getDate() - (startingDate.getDay() - 1));
  const dates = [];

  for (let i = 0; i < rowsCount * 7; i++) {
    const date = new Date(startingDate);
    dates.push({ date });
    startingDate.setDate(startingDate.getDate() + 1);
  }

  return (
    <>
      {dates.map((date, index) => {
        return (
          <div
            key={index}
            className={`cell ${
              date.date.getTime() === currentDate.getTime() ? "current" : ""
            } ${
              date.date.getMonth() !== actualDate.getMonth() ? "otherMonth" : ""
            }`}
          >
            <div className="date">{date.date.getDate()}</div>
          </div>
        );
      })}
    </>
  );
};
