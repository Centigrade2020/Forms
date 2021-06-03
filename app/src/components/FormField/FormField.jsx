import React, { useState, useEffect } from "react";
import Symbols from "../Symbols";
// import Dropdown from "../Dropdown";
import "./FormField.css";
import fb from "../../services/firebase";
// import "../Dropdown/Dropdown.css";

const FormField = ({ type, question, keyName }) => {
  const opts = ["Text", "Multiple Choice", "Check Box", "Dropdown"];
  const [fieldType, setFormType] = useState(type);

  const questionOnChange = (keyName, value) => {
    var fieldData = fb.firestore
      .collection("users")
      .doc(localStorage.getItem("userId"))
      .collection("CurrentForm")
      .doc(keyName);

    console.log(keyName);
    fieldData.update({
      Question: value,
    });
  };

  return (
    <div className="form-field" key={keyName}>
      <div className="wrapper">
        <input
          type="text"
          defaultValue={question}
          onChange={(e) => questionOnChange(keyName, e.target.value)}
        />
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
