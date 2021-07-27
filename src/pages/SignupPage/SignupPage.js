import React, { useState } from "react";
import SignupForm from "../../components/SignupForm/SignupForm";
import "./SignupPage.css";

const SignupPage = (props) => {
  const [message, setMessage] = useState("");

  const updateMessage = (message) => {
    setMessage(message);
  };

  return (
    <div className="SignupPage">
      <SignupForm {...props} updateMessage={updateMessage} />
      <p>{message}</p>
    </div>
  );
};

export default SignupPage;
