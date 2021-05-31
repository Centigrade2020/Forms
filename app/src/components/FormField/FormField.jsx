import "./FormField.css";
import { useState } from "react";
import { Dropdown } from "../Dropdown";

const FormField = () => {
  const [formType, setFormType] = useState("text");

  return (
    <div className="form-field">
      <div className="wrapper">
        <input type="text" />
        <Dropdown
          options={["Text", "Multiple Choice", "Check Box", "Dropdown"]}
        />
      </div>
    </div>
  );
};

export default FormField;
