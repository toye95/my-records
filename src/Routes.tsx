import { Component } from "react";
import Home from "./features/home/Home";
import Login from "./features/forms/login/Login";
import ResetPassword from "./features/forms/passwordreset/ResetPassword";
import Signup from "./features/forms/signup/Signup";
const Route = require('react-router-dom').Route

class Routes extends Component {

  render() {
    return (
      <>
        <Route path="/" exact strict component={Login} />
        <Route path="/signup" exact strict component={Signup} />
        <Route path="/reset-password" exact strict component={ResetPassword} />
        <Route path="/home" exact strict component={Home} />
      </>
    );
  }
}
export default Routes;