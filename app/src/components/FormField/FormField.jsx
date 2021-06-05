import React, { useEffect, useState } from "react";
import Select from "react-select";
import fb from "../../services/firebase";
import Symbols from "../Symbols";
import selectStyle from "./selectStyle";
import "./FormField.css";

const FormField = ({ type, question, keyName }) => {
  const options = [
    { value: "Text", label: "Text" },
    { value: "Multiple Choice", label: "Multiple Choice" },
    { value: "Check Box", label: "Check Box" },
    { value: "Dropdown", label: "Dropdown" },
  ];
  const [fieldType, setFieldType] = useState(type);

  const [num, setNum] = useState(1);
  const [fieldOptions, setFieldOptions] = useState({
    Option1: "",
  });

  var userData = fb.firestore
    .collection("users")
    .doc(localStorage.getItem("userId"));

  var userAdditionalData = fb.firestore
    .collection("users")
    .doc(localStorage.getItem("userId"))
    .collection("AdditionalData");

  // userAdditionalData
  //   .doc("OptionNumber")
  //   .get()
  //   .then((doc) => {
  //     setNum(doc.data().Number);
  //   });

  // const updateFieldOptions = () => {
  //   userData
  //     .collection("CurrentForm")
  //     .doc(keyName)
  //     .get()
  //     .then((doc) => {
  //       if (doc.exists) {
  //         setFieldOptions(doc.data().Options);
  //       }
  //     });
  // };

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

  function renderAnswerContainer() {
    return fieldType === "Text" ? (
      <input type="text" placeholder="Answer goes here" readOnly />
    ) : (
      <>
        {Object.keys(fieldOptions).map((a) => (
          <p key={a}>{a}</p>
        ))}
        <button
          className="add-option-button"
          onClick={() => {
            setNum(num + 1);
            setFieldOptions((a) => [...a, ""]);
            console.log(num, fieldOptions);
          }}
        >
          Add option
        </button>
      </>
    );
  }

  return (
    <div className="form-field" key={keyName}>
      <div className="form-field-row1">
        <input
          type="text"
          defaultValue={question}
          onChange={(e) => questionOnChange(e.target.value)}
          placeholder="Enter the question"
        />
        <Select
          options={options}
          value={options.find((obj) => obj.value === fieldType)}
          onChange={(e) => fieldTypeOnClick(e.value)}
          components={{
            IndicatorSeparator: () => null,
          }}
          styles={selectStyle}
        />
      </div>

      <div className="form-field-row2">
        <div className="answer-container">{renderAnswerContainer()}</div>
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
