import { useDebugValue, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Symbols from "../../components/Symbols";
import FormField from "../../components/FormField";
import fb from "../../services/firebase";
import "./CreateForm.css";

function CreateForm() {
  const location = useLocation();

  const [formData, setFormData] = useState([]);
  const [formSize, setFormSize] = useState(0);

  var userData = fb.firestore
    .collection("users")
    .doc(localStorage.getItem("userId"));

  useEffect(() => {
    var li = [];

    userData
      .collection("CurrentForm")
      .get()
      .then((docs) => {
        docs.forEach((doc) => {
          li.push(doc.data());
        });
        setFormSize(docs.size);
        setFormData(li);
      });
  }, [formSize]);

  const addField = () => {
    userData
      .collection("CurrentForm")
      .doc("Field" + (formSize + 1))
      .set({
        FieldName: "Field" + (formSize + 1),
        Question: "Enter your question",
        Options: {},
      });
    console.log(formSize);

    window.location.reload();
  };

  return (
    <div className="CreateForm">
      <input type="text" className="form-name" placeholder="Form name" />
      <div className="fields">
        {formData.map((field) => (
          <FormField
            key={field.FieldName}
            keyName={field.FieldName}
            question={field.Question}
            type={field.FieldType}
          />
        ))}
      </div>

      <button className="add-field-button" onClick={addField}>
        <Symbols.Plus size="20" fill="#66fcf1" />
        <span>Add field</span>
      </button>
    </div>
  );
}

export default CreateForm;
