import "./CreateForm.css";
import { Symbols } from "../../components/Symbols";
import { FormField } from "../../components/FormField";

function CreateForm() {
  return (
    <div className="CreateForm">
      <input type="text" className="form-name" placeholder="Form name" />
      <div className="fields">
        <FormField />
        {/* <span>
          <input
            type="text"
            id="question_field"
            placeholder="Enter your question"
            autoComplete="off"
          />
          <select name="inputs" id="dropdown">
            <option value="Text">Text</option>
            <option value="options">options</option>
            <option value="dropdown">dropdown</option>
          </select>
        </span>
        <input type="text" id="answer_input" placeholder="Enter your answer" /> */}
      </div>
      <button className="add-field-button">
        <Symbols.Plus size="20" fill="#66fcf1" />
        <span>Add field</span>
      </button>
    </div>
  );
}

export default CreateForm;
