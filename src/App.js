import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Authentication/Home";
import Login from "./Authentication/Login";
import Signup from "./Authentication/Signup";
import Landing from "./Landing"
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
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;