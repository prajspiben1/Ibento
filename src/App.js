import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home";
import AddEvent from './Components/AddEvent'
import Login from "./Authentication/Login";
import Signup from "./Authentication/Signup";
import Landing from "./Components/Landing"
import CalendarUI from "./Components/Calendar"
import Account from "./Components/Account"
import { AuthProvider } from "./Authentication/Auth";
import PrivateRoute from "./Authentication/PrivateRoute";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/ibento" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/addevent" component={AddEvent} />
          <Route exact path="/calendar" component={CalendarUI} />       
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;