import { useEffect, useState } from "react";
import Symbols from "../../components/Symbols";
import FormField from "../../components/FormField";
import fb from "../../services/firebase";
import "./CreateForm.css";

function CreateForm() {
  const [formData, setFormData] = useState([]);
  const [num, setNum] = useState(0);

  var userData = fb.firestore
    .collection("users")
    .doc(localStorage.getItem("userId"));

  var userAdditionalData = fb.firestore
    .collection("users")
    .doc(localStorage.getItem("userId"))
    .collection("AdditionalData");

  userAdditionalData
    .doc("FieldNumber")
    .get()
    .then((doc) => {
      setNum(doc.data().Number);
    });

  useEffect(() => {
    var li = [];

    userData
      .collection("CurrentForm")
      .get()
      .then((docs) => {
        docs.forEach((doc) => {
          li.push(doc.data());
        });
        setFormData(li);
      });
  }, [userData, num]);

  const addField = () => {
    userData
      .collection("CurrentForm")
      .doc("Field" + num)
      .set({
        FieldName: "Field" + num,
        FieldType: "Text",
        Question: "",
        Options: {},
      });

    userAdditionalData.doc("FieldNumber").update({
      Number: num + 1,
    });

    console.log(num);
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
      <div className="buttons-container">
        <button className="add-field-button" onClick={addField}>
          <Symbols.Plus size="20" fill="#66fcf1" />
          <span>Add field</span>
        </button>
        <button className="publish-form-button">
          <span>Publish Form</span>
        </button>
      </div>
    </div>
  );
}

export default CreateForm;
