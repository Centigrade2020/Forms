import { useState } from "react";
import Symbols from "../../components/Symbols";
import FormField from "../../components/FormField";
import "./CreateForm.css";

function CreateForm() {
  const AddedElement = () => (
    <div className="fields">
      <FormField />
    </div>
  );

  const [addfield, setaddfield] = useState(0);
  return (
    <div className="CreateForm">
      <input type="text" className="form-name" placeholder="Form name" />
      <div className="fields">
        <FormField />
      </div>
      {[...Array(addfield)].map((i) => (
        <AddedElement key={i} />
      ))}
      {addfield > 0 ? (
        <button
          className="add-field-button"
          onClick={() => setaddfield(addfield - 1)}
        >
          Remove field
        </button>
      ) : null}

      <button
        className="add-field-button"
        onClick={() => setaddfield(addfield + 1)}
      >
        <Symbols.Plus size="20" fill="#66fcf1" />
        <span>Add field</span>
      </button>
    </div>
  );
}

export default CreateForm;
