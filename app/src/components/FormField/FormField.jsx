import React, { useState } from "react";
import Symbols from "../Symbols";
import "./FormField.css";
import fb from "../../services/firebase";

const FormField = ({ type, question, keyName }) => {
  // const opts = ["Text", "Multiple Choice", "Check Box", "Dropdown"];
  const [fieldType, setFieldType] = useState(type);

  var fieldData = fb.firestore
    .collection("users")
    .doc(localStorage.getItem("userId"))
    .collection("CurrentForm");

  const questionOnChange = (value) => {
    fieldData.doc(keyName).update({
      Question: value,
    });
  };

  const fieldTypeOnClick = (value) => {
    setFieldType(value);
    fieldData.doc(keyName).update({
      FieldType: value,
    });
  };

  // const deleteField = () => {
  //   console.log(keyName);
  //   fieldData.doc(keyName).delete();
  // };

  return (
    <div className="form-field" key={keyName}>
      <div className="wrapper">
        <input
          type="text"
          defaultValue={question}
          onChange={(e) => questionOnChange(e.target.value)}
        />
        <p>{fieldType}</p>
        <select
          className="Dropdown"
          id="Dropdown"
          name="form-type"
          onChange={(e) => fieldTypeOnClick(e.target.value)}
        >
          <option value="Text">Text</option>
          <option value="Multiple Choice">Multiple Choice</option>
          <option value="Check Box">Check Box</option>
          <option value="Dropdown">Dropdown</option>
        </select>

        <div
          className="delete-field"
          onClick={() => {
            console.log(keyName);
            fieldData.doc(keyName).delete();
          }}
        >
          <Symbols.Trash fill="#c5c6c7" size="32" />
        </div>
      </div>
    </div>
  );
};

export default FormField;
