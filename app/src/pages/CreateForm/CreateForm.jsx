import './CreateForm.css'

function CreateForm() {
  return (
  <div className="CreateForm">
    <input type="text" id='form_name' placeholder='Form Name' autoComplete='off' />
    <div className="fields">
    <span>
      <input type="text" id='question_field' placeholder='Enter your question' autoComplete='off' />
      <select name="inputs" id="dropdown">
        <option value="Text">Text</option>
        <option value="options">options</option>
        <option value="dropdown">dropdown</option>
      </select>
      </span>
      <input type='text' id='answer_input' placeholder="Enter your answer" />
    </div>
    <button type='button'>Add field</button>
  </div>
  );
}

export default CreateForm;
