import "./Dropdown.css";
import { Symbols } from "../Symbols";
import { useState } from "react";

const Dropdown = () => {
  const opts = ["Text", "Multiple Choice", "Check Box", "Dropdown"];
  const [selected, setSelected] = useState(opts[0]);
  return (
    <div className="Dropdown">
      <div className="display">
        <p>{selected}</p>
        <Symbols.Arrow fill="#c5c6c7" size="24" />
      </div>
      <div className="options">
        {opts.map((i) => (
          <p
            onClick={() => {
              setSelected(i);
            }}
          >
            {i}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
