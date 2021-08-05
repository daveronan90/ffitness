import React from "react";

const classSC = "STRENGTH\n&\nCONDITION";
const classUS = "UPPER\nSTRENGTH";
const classLS = "LOWER\nSTRENGTH";
const classBeginner = "BEGINNER";

const tableData = [
  {
    startTime: "06:45 AM",
    endTime: "07:45 AM",
    mon: "",
    tues: classSC,
    wed: "",
    thur: classSC,
    fri: "",
    sat: "",
    sun: "",
  },
  {
    startTime: "07:00 AM",
    endTime: "08:00 AM",
    mon: classSC,
    tues: "",
    wed: classSC,
    thur: "",
    fri: classSC,
    sat: "",
    sun: "",
  },
  {
    startTime: "08:15 AM",
    endTime: "09:15 AM",
    mon: "",
    tues: "",
    wed: "",
    thur: "",
    fri: "",
    sat: classSC,
    sun: "",
  },
  {
    startTime: "09:30 AM",
    endTime: "10:30 AM",
    mon: classSC,
    tues: classSC,
    wed: classSC,
    thur: classSC,
    fri: classSC,
    sat: classSC,
    sun: classSC,
  },
  {
    startTime: "10:45 AM",
    endTime: "11:45 AM",
    mon: "",
    tues: "",
    wed: "",
    thur: "",
    fri: "",
    sat: "",
    sun: classSC,
  },
  {
    startTime: "16:45 PM",
    endTime: "17:45 PM",
    mon: classSC,
    tues: classSC,
    wed: classSC,
    thur: classSC,
    fri: classSC,
    sat: "",
    sun: "",
  },
  {
    startTime: "17:30 PM",
    endTime: "18:30 PM",
    mon: classSC,
    tues: classUS,
    wed: classBeginner,
    thur: classLS,
    fri: classSC,
    sat: "",
    sun: "",
  },
  {
    startTime: "18:45 PM",
    endTime: "19:45 PM",
    mon: classSC,
    tues: classSC,
    wed: classSC,
    thur: classSC,
    fri: classSC,
    sat: "",
    sun: "",
  },
  {
    startTime: "20:00 PM",
    endTime: "21:00 PM",
    mon: classSC,
    tues: "",
    wed: classSC,
    thur: "",
    fri: "",
    sat: "",
    sun: "",
  },
];

const Timetable = () => {
  return (
    <div className="flex justify-center">
      <table className="m-2 sm:m-8 w-full table-fixed text-white text-center text-xxxs font-extrabold sm:text-base">
        <thead>
          <tr>
            <th className="w-1/12"></th>
            <th className="border w-1/12">MON</th>
            <th className="border w-1/12">TUES</th>
            <th className="border w-1/12">WED</th>
            <th className="border w-1/12">THUR</th>
            <th className="border w-1/12">FRI</th>
            <th className="border w-1/12">SAT</th>
            <th className="border w-1/12">SUN</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(
            (
              { startTime, endTime, mon, tues, wed, thur, fri, sat, sun },
              idx
            ) => (
              <tr
                key={idx}
                className={` ${idx !== 8 ? "border-b border-base-yellow" : ""}`}
              >
                <td className="border border-white">
                  {startTime}
                  <br />
                  {endTime}
                </td>
                <td className="text-base-yellow text-xxxs sm:text-sm">
                  {mon.split("\n").map((item, idx) => (
                    <span key={idx}>
                      {item}
                      <br />
                    </span>
                  ))}
                </td>
                <td className="text-base-yellow text-xxxs sm:text-sm">
                  {tues.split("\n").map((item, idx) => (
                    <span key={idx}>
                      {item}
                      <br />
                    </span>
                  ))}
                </td>
                <td className="text-base-yellow text-xxxs sm:text-sm">
                  {wed.split("\n").map((item, idx) => (
                    <span key={idx}>
                      {item}
                      <br />
                    </span>
                  ))}
                </td>
                <td className="text-base-yellow text-xxxs sm:text-sm">
                  {thur.split("\n").map((item, idx) => (
                    <span key={idx}>
                      {item}
                      <br />
                    </span>
                  ))}
                </td>
                <td className="text-base-yellow text-xxxs sm:text-sm">
                  {fri.split("\n").map((item, idx) => (
                    <span key={idx}>
                      {item}
                      <br />
                    </span>
                  ))}
                </td>
                <td className="text-base-yellow text-xxxs sm:text-sm">
                  {sat.split("\n").map((item, idx) => (
                    <span key={idx}>
                      {item}
                      <br />
                    </span>
                  ))}
                </td>
                <td className="text-base-yellow text-xxxs sm:text-sm">
                  {sun.split("\n").map((item, idx) => (
                    <span key={idx}>
                      {item}
                      <br />
                    </span>
                  ))}
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Timetable;
