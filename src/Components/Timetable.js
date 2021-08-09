import React from "react";

const Timetable = ({tableData}) => {
  return (
    <div className="flex justify-center">
      <table className="m-2 sm:m-8 w-full table-fixed text-white text-center text-xxxs font-extrabold sm:text-base">
        <thead>
          <tr>
            <th className="w-1/12"></th>
            <th className="border w-1/12 bg-gray-800">MON</th>
            <th className="border w-1/12 bg-gray-800">TUES</th>
            <th className="border w-1/12 bg-gray-800">WED</th>
            <th className="border w-1/12 bg-gray-800">THUR</th>
            <th className="border w-1/12 bg-gray-800">FRI</th>
            <th className="border w-1/12 bg-gray-800">SAT</th>
            <th className="border w-1/12 bg-gray-800">SUN</th>
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
                <td className="border border-white bg-gray-800">
                  {startTime}
                  <br />
                  {endTime}
                </td>
                <td className="border border-base-yellow text-xxxs sm:text-sm">
                  {mon.split("\n").map((item, idx) => (
                    <span key={idx}>
                      {item}
                      <br />
                    </span>
                  ))}
                </td>
                <td className="border border-base-yellow text-xxxs sm:text-sm">
                  {tues.split("\n").map((item, idx) => (
                    <span key={idx}>
                      {item}
                      <br />
                    </span>
                  ))}
                </td>
                <td className="border border-base-yellow text-xxxs sm:text-sm">
                  {wed.split("\n").map((item, idx) => (
                    <span key={idx}>
                      {item}
                      <br />
                    </span>
                  ))}
                </td>
                <td className="border border-base-yellow text-xxxs sm:text-sm">
                  {thur.split("\n").map((item, idx) => (
                    <span key={idx}>
                      {item}
                      <br />
                    </span>
                  ))}
                </td>
                <td className="border border-base-yellow text-xxxs sm:text-sm">
                  {fri.split("\n").map((item, idx) => (
                    <span key={idx}>
                      {item}
                      <br />
                    </span>
                  ))}
                </td>
                <td className="border border-base-yellow text-xxxs sm:text-sm">
                  {sat.split("\n").map((item, idx) => (
                    <span key={idx}>
                      {item}
                      <br />
                    </span>
                  ))}
                </td>
                <td className="border border-base-yellow text-xxxs sm:text-sm">
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
