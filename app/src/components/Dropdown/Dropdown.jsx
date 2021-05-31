import "./Dropdown.css";
import { Symbols } from "../Symbols";
import { useState } from "react";

const Dropdown = () => {
  const opts = ["Text", "Multiple Choice", "Check Box", "Dropdown"];
  const [selected, setSelected] = useState(opts[0]);
  return (
    <div className="Dropdown">
      <div
        className="display"
        id="display"
        onClick={() => {
          document.getElementById("options").classList.toggle("options-active");
          document.getElementById("display").classList.toggle("display-active");
        }}
      >
        <p>{selected}</p>
        <Symbols.Arrow fill="#c5c6c7" size="24" />
      </div>
      <div className="options" id="options">
        {opts.map((i) => (
          <p
            onClick={() => {
              setSelected(i);
              document
                .getElementById("options")
                .classList.toggle("options-active");
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
