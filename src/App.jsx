import { useState } from "react";
import "./calendar.css";

function App() {
  const years = [2017, 2018, 2019, 2020, 2021, 2022];
  const months = [
    "Січень",
    "Лютий",
    "Березень",
    "Квітень",
    "Травень",
    "Червень",
    "Липень",
    "Серпень",
    "Вересень",
    "Жовтень",
    "Листопад",
    "Грудень",
  ];
  const weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"];
  const monthDays = [
    [
      new Date(),
      new Date(),
      new Date(),
      new Date(),
      new Date(),
      new Date(),
      new Date(),
    ],
    [
      new Date(),
      new Date(),
      new Date(),
      new Date(),
      new Date(),
      new Date(),
      new Date(),
    ],
    [
      new Date(),
      new Date(),
      new Date(),
      new Date(),
      new Date(),
      new Date(),
      new Date(),
    ],
    [
      new Date(),
      new Date(),
      new Date(),
      new Date(),
      new Date(),
      new Date(),
      new Date(),
    ],
    [
      new Date(),
      new Date(),
      new Date(),
      new Date(),
      new Date(),
      new Date(),
      new Date(),
    ],
  ];

  const [day, setDay] = useState(1);
  const [mon, setMon] = useState(0);
  const [year, setYear] = useState(2021);

  function fillDays(monthDays) {
    let numDay = new Date(year, mon, 1).getDay();
    if (numDay === 0) numDay = 7;
    let temp = 0;
    let monthDay = 1;
    return monthDays.map((week, index) =>
      week.map((day, indexx) => {
        if (index === 0 && indexx >= numDay - 1) {
          return new Date(year, mon, monthDay++);
          monthDay++;
        }
        if (index != 0 && monthDay<=31) {
          return new Date(year, mon, monthDay++);
        } else {
          return null;
        }
      })
    );
  }
  let temp = fillDays(monthDays);

  function setDate(id) {
    let field = document.getElementById(id);
    field.value = day + ":" + months[mon] + ":" + year;
    //field.appendChild("asd");
  }

  return (
    <div>
      <div className="interval">
        <button onClick={() => setDate("first")}>first</button>
        <input type="text" id="first"></input>


        <br />
        <button onClick={() => setDate("second")}>second</button>
        <input type="text" id="second"></input>

        <br />
        <p>
          {day} : {months[mon]} : {year}
        </p>

        <select
          id="month"
          onChange={() => setMon(document.getElementById("month").value)}
          defaultValue={months[mon]}
        >
          {months.map((name, index) => (
            <option key={name} value={index}>
              {name}
            </option>
          ))}
        </select>

        <select
          id="year"
          onChange={() => setYear(document.getElementById("year").value)}
          defaultValue={year}
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              {weekDays.map((name) => (
                <th key={name}>{name}</th>
              ))}
            </tr>
          </thead>

          <tbody id="selection" className="calendar">
            {temp.map((week, index) => (
              <tr key={index} className={week}>
                {week.map((date, index) =>
                  date ? (
                    <td>
                      <button onClick={() => setDay(date.getDate())}>
                        {date.getDate()}
                      </button>
                    </td>
                  ) : (
                    <td key={index} />
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default App;
