import { useState } from "react";
import "./App.css";
import "./calendar.css";
import {getYears, getMonths, getWeekDays, getMonthDays} from "./Data";

import {render} from "react-dom";


function App() {
  let years = getYears();
  let months = getMonths();
  let weekDays = getWeekDays();
  const monthDays = getMonthDays();

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
  function setDate2(id) {
    if(document.getElementById("first").value === ""){
      alert("enter a first number");
      return "";
    }

    let field = document.getElementById(id);
    field.value = day + ":" + months[mon] + ":" + year;



    let start = document.getElementById("first").value.substr(0,2).replace(":", "");
    document.getElementById("selection").className = "calendar";
    for (let i = start; i <= day; i++) {
        document.getElementById(i).className = "fill";
    }
  }

  return (


    <div>
      <div className="interval">
        <button onClick={() => setDate("first")}>first</button>
        <input id="first" type="text" id="first"></input>
        <br/>
        <button onClick={() => setDate2("second")}>second</button>
        <input id="second" type="text" id="second"></input>
        <br/>
        {/*<button onClick={() => fill()}>Fill</button>*/}
        <p id="test" >
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
                          <button id={date.getDate()} onClick={() => setDay(date.getDate())}>
                            {date.getDate()}
                          </button>
                        </td>
                    ) : (
                        <td key={index}/>
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
