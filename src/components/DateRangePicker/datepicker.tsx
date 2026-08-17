import { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

function CustomRangePicker() {
  const [open, setOpen] = useState(false);

  // IMPORTANT: use undefined, NOT null
  const [range, setRange] = useState([
    {
      startDate: undefined,
      endDate: undefined,
      key: "selection",
    },
  ]);

  return (
    <div className="range-wrapper">
      <div className="input-box" onClick={() => setOpen((prev) => !prev)}>
        <span>
          {range[0].startDate
            ? format(range[0].startDate, "dd/MM/yyyy")
            : "Start date"}
        </span>

        <span className="arrow">→</span>

        <span>
          {range[0].endDate
            ? format(range[0].endDate, "dd/MM/yyyy")
            : "End date"}
        </span>

        <span className="close">✕</span>
      </div>

      {open && (
        <div className="calendar-box">
          <DateRange
            ranges={range}
            onChange={(item) => setRange([item.selection])}
            months={1}
            direction="vertical"
            editableDateInputs={true}
            showDateDisplay={false}
            showSelectionPreview={false}
            moveRangeOnFirstSelection={false}
            rangeColors={["#000"]}
          />

          <div className="actions">
            <button
              className="reset"
              onClick={() =>
                setRange([
                  {
                    startDate: undefined,
                    endDate: undefined,
                    key: "selection",
                  },
                ])
              }
            >
              Reset
            </button>

            <div className="right-actions">
              <button onClick={() => setOpen(false)}>Cancel</button>
              <button className="apply" onClick={() => setOpen(false)}>
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomRangePicker;
