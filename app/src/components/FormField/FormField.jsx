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

  const selectStyle = {
    container: (base) => ({
      ...base,
      width: "140px",
      color: "#66fcf1",
    }),
    control: (base, state) => {
      var border;

      if (state.isFocused) {
        border = "1px solid #66fcf1";
      } else {
        border = "1px solid #c5c6c7";
      }

      return {
        width: "inherit",
        padding: "5px",
        borderRadius: "0px",
        backgroundColor: "#28333f",
        boxShadow: "none",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#66fcf1",
        transition: "border 200ms ease-in-out",
      };
    },
    valueContainer: (base) => ({
      ...base,
      color: "#66fcf1",
      fontSize: "12px",
      border: null,
      "&:placeholder": {
        color: "#66fcf1",
      },
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: "black",
    }),
    menu: (base) => ({
      ...base,
      width: "150px",
      padding: "0 10px",
      borderRadius: "0px",
      backgroundColor: "#28333f",
    }),
    menuList: (base) => ({ ...base, width: "130px", padding: "0px" }),
    option: (base, state) => {
      var color = state.isSelected ? "#66fcf1" : "#c5c6c7";
      return {
        ...base,
        width: "inherit",
        fontSize: "12px",
        padding: "10px",
        backgroundColor: "#28333f",
        color,
      };
    },
    placeholder: (base) => ({
      ...base,
      color: "red",
    }),
  };

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
        <div className="react-select-container">
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
