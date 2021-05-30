import { useHistory } from "react-router-dom";
import "./Home.css";
import { Plus } from "../../components/Symbols";

function Home() {
  const history = useHistory();

  return (
    <div className="Home">
      <div className="templates-container">
        <div
          className="create-form template"
          onClick={() => {
            history.push("/createform");
          }}
        >
          <Plus fill="#66fcf1" size="32" />
        </div>
        <div className="template1 template"></div>
        <div className="template2 template"></div>
        <div className="template3 template"></div>
      </div>
      <div className="line"></div>
      <div className="my-forms">
        <div className="form1 form"></div>
        <div className="form2 form"></div>
        <div className="form3 form"></div>
        <div className="form4 form"></div>
        <div className="form5 form"></div>
      </div>
    </div>
  );
}

export default Home;
