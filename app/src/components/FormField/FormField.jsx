import { useState } from "react";

const FormField = () => {
  const [formType, setFormType] = useState("text");

  return <div className="form-field">Field</div>;
};

export default FormField;
