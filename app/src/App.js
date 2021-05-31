import { BrowserRouter as Router, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import Home from "./pages/Home";
import CreateForm from "./pages/CreateForm";

import { useAuth, useResolved } from "./hooks";

function App() {
  const history = useHistory();
  const authUser = useAuth();
  const authResolved = useResolved(authUser);

  useEffect(() => {
    if (authResolved) {
      history.push(!!authUser ? "/" : "login");
    }
  }, [authResolved, authUser, history]);

  useEffect(() => {
    console.log(authUser, authResolved);
  }, [authUser, authResolved]);

  return (
    <Router>
      <NavBar />
      <Route path="/" exact render={() => <Home />} />
      <Route path="/createform" render={() => <CreateForm />} />
    </Router>
  );
}

export default App;
