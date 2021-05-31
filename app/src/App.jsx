import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { useAuth, useResolved } from "./hooks";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CreateForm from "./pages/CreateForm";
import NavBar from "./components/NavBar";

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
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route path="/user/createform" component={CreateForm} />
        </>
      </Switch>
    </Router>
  );
}

export default App;
