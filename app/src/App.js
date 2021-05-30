import { BrowserRouter as Router, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import Home from "./pages/Home";
import CreateForm from "./pages/CreateForm";

function App() {
  return (
    <Router>
      <NavBar />
      <Route path="/" exact render={() => <Home />} />
      <Route path="/createform" render={() => <CreateForm />} />
    </Router>
  );
}

export default App;
