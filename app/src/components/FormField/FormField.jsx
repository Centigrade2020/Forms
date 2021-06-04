import React, { useState } from "react";
import Select from "react-select";
import fb from "../../services/firebase";
import Symbols from "../Symbols";
import "./FormField.css";

const FormField = ({ type, question, keyName }) => {
  const options = [
    { value: "Text", label: "Text" },
    { value: "Multiple Choice", label: "Multiple Choice" },
    { value: "Check Box", label: "Check Box" },
    { value: "Dropdown", label: "Dropdown" },
  ];
  const [fieldType, setFieldType] = useState(type);

  // const customStyles = {
  //   option: (provided, state) => ({
  //     ...provided,
  //     borderBottom: "1px solid pink",
  //     color: state.isSelected ? "red" : "blue",
  //     padding: 20,
  //   }),
  //   control: () => ({
  //     // none of react-select's styles are passed to <Control />
  //     width: 200,
  //   }),
  //   singleValue: (provided, state) => {
  //     const opacity = state.isDisabled ? 0.5 : 1;
  //     const transition = "opacity 300ms";

  //     return { ...provided, opacity, transition };
  //   },
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

  return (
    <div className="form-field" key={keyName}>
      <div className="wrapper">
        <input
          type="text"
          defaultValue={question}
          onChange={(e) => questionOnChange(e.target.value)}
        />
        {/* <p>{fieldType}</p> */}
        <div className="custom-select">
          <Select
            options={options}
            value={options.find((obj) => obj.value === fieldType)}
            onChange={(e) => fieldTypeOnClick(e.value)}
            styles={{
              option: () => ({
                borderBottom: "1px solid #c5c6c730",
                margin: "0px",
                color: "#66fcf1",
                padding: "5px",
                borderRadius: "0px",
                backgroundColor: "#1b232c",
                fontWeight: "100",
                fontSize: "18px",
              }),
              control: () => ({
                width: "150px",
                borderRadius: "0px",
                display: "flex",
                backgroundColor: "#1b232c",
              }),
              singleValue: () => ({
                borderRadius: "0px",
                backgroundColor: "#1b232c",
              }),
              menu: (provided, state) => {
                return {
                  padding: "0px",
                  margin: "0px",
                  fontSize: "18px",
                  ...provided,
                };
              },
            }}
          />
        </div>

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
