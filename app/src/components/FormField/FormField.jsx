import React, { useState } from "react";
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
  const [count,setcount] = useState(0)

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
        
        <div className="answer-container">
          {(()=>{
             if(fieldType=="Text"){
               return(
                 <input type="text" placeholder='Your answer...' autoComplete='off'/>
              )       
             }
             else if(fieldType=="Check Box"){
               return(
                 <>
                 <input type="checkbox" name="checkbox" />
                 {[...Array(count)].map((_,i)=><input type="checkbox"  name="checkbox" key={i} />)}
                
                 
                 <button className="add-field-button" onClick={()=>setcount(count+1)}>
          <Symbols.Plus size="20" fill="#66fcf1" />
          <span>Add <button></button></span>
        </button>
                </>
               )
             }
    
    else if(fieldType=="Multiple Choice"){
              return(
                <>
                <label><input type="radio" name="radio"/>radio</label>
                {[...Array(count)].map((_,i)=><input type="radio"  name="radio" key={i} />)}
                
                 
                 <button className="add-field-button" onClick={()=>setcount(count+1)}>
          <Symbols.Plus size="20" fill="#66fcf1" />
          <span>Add <button></button></span>
        </button>
                </>
                
              )
             }
            //  else if(fieldType=="Dropdown"){
            //   return(
            //     <>
            //     <Select
            //     options={options}
            //     value={options.find((obj) => obj.value === fieldType)}
            //     onChange={(e) => fieldTypeOnClick(e.value)}
            //     components={{
            //       IndicatorSeparator: () => null,
            //     }}
            //     styles={selectStyle}

            //     />
            //     <input type="text" />
            //    </>
            //   )
            //  }
             
             


          }) ()}
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
