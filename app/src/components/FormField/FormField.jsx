import React, { useState, createClass } from "react";
import Symbols from "../Symbols";
// import Dropdown from "../Dropdown";
import "./FormField.css";
// import "../Dropdown/Dropdown.css";

const FormField = ({ id }) => {
  const opts = ["Text", "Multiple Choice", "Check Box", "Dropdown"];
  const [selected, setSelected] = useState(opts[0]);
  const [formType, setFormType] = useState("text");

  return (
    <div className="form-field">
      <div className="wrapper">
        <input type="text" />
        {/* <select className="Dropdown" id="Dropdown" name="form-type">
          <option value="Text">Text</option>
          <option value="Multiple Choice">Multiple Choice</option>
          <option value="Check Box">Check Box</option>
          <option value="Dropdown">Dropdown</option>
        </select> */}
      </div>
    </div>
  );
};

export default FormField;
