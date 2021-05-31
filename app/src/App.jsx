import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { useAuth, useResolved } from "./hooks";
import { NavBar } from "./components/NavBar";
import Home from "./pages/Home";
import CreateForm from "./pages/CreateForm";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const history = useHistory();
  const authUser = useAuth();
  const authResolved = useResolved(authUser);

  // useEffect(() => {
  //   if (authResolved) {
  //     history.push(!!authUser ? "login" : "/");
  //   }
  // }, [authResolved, authUser, history]);

  // useEffect(() => {
  //   console.log(authUser, authResolved);
  // }, [authUser, authResolved]);

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/user/createform" component={CreateForm} />
      </Switch>
    </Router>
  );
}

export default App;
