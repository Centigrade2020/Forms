import React, { useState } from "react";
import Symbols from "../Symbols";
// import Dropdown from "../Dropdown";
import "./FormField.css";
import fb from "../../services/firebase";
// import "../Dropdown/Dropdown.css";

const FormField = ({ name, type, question }) => {
  const opts = ["Text", "Multiple Choice", "Check Box", "Dropdown"];
  const [fieldType, setFormType] = useState(type);

  return (
    <div className="form-field">
      <div className="wrapper">
        <input type="text" value={question} />
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
