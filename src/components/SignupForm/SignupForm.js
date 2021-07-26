import React, { useState } from "react";
import { Link } from "react-router-dom";
import userService from "../../utils/userService";

const SignupForm = props => {
  const [enteredName, setEnteredName] = useState('')
  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredPassword, setEnteredPassword] = useState('')
  const [enteredPasswordConf, setEnteredPasswordConf] = useState('')

  const handleNameChange = event => {
    props.updateMessage("");
    setEnteredName(event.target.value)
  };

  const handleEmailChange = event => {
    props.updateMessage("");
    setEnteredEmail(event.target.value)
  };

  const handlePasswordChange = event => {
    props.updateMessage("");
    setEnteredPassword(event.target.value)
  };

  const handlePasswordConfChange = event => {
    props.updateMessage("");
    setEnteredPasswordConf(event.target.value)
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await userService.signup({name: setEnteredName, email: enteredEmail, password: enteredPassword});
      props.handleSignupOrLogin();
      props.history.push("/");
    } catch (err) {
      // Invalid user data (probably duplicate email)
      props.updateMessage(err.message);
    }
  };

  const isFormInvalid = () => {
    return !(
      enteredName && enteredEmail && enteredPassword && enteredPasswordConf === enteredPassword
    );
  }


    return (
      <div>
        <header className="header-footer">Sign Up</header>
        <form className="form-horizontal" onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={enteredName}
                name="name"
                onChange={handleNameChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={enteredEmail}
                name="email"
                onChange={handleEmailChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={enteredPassword}
                name="password"
                onChange={handlePasswordChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                value={enteredPasswordConf}
                name="passwordConf"
                onChange={handlePasswordConfChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button
                className="btn btn-default"
                disabled={isFormInvalid()}
              >
                Sign Up
              </button>
              &nbsp;&nbsp;
              <Link to="/">Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    );

}

export default SignupForm;
