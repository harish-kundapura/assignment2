import React, { useState } from "react";

function Login(props) {
  const [userDetails, setuserDetails] = useState({
    email: "",
    password: "",
  });
  const [isEmailValid, setisEmailValid] = useState(true);
  const [emailError, setemailError] = useState("");
  const [isPasswordValid, setisPasswordValid] = useState(true);
  const [passwordError, setpasswordError] = useState("");
  const login = (event) => {
    console.log(event);
    event.preventDefault();
    console.log(userDetails);

    const isEmailValid = validateEmail(userDetails.email);
    const isPasswordValid = validatePassword(userDetails.password);

    if (isEmailValid && isPasswordValid) {
      // Programatically navigate
      console.log("props", props);
      props.history.push("/home");
    } else {
      console.error("not valid");
    }
  };
  const validateEmail = (email) => {
    if (emailVal(email)) {
      setisEmailValid(true);
      setemailError("");
      return true;
    } else {
      setisEmailValid(false);
      setemailError("Please enter your email");
      return false;
    }
  };

  const validatePassword = (password) => {
    if (pass(password)) {
      setisPasswordValid(true);
      setpasswordError("");
      return true;
    } else {
      setisPasswordValid(false);
      setpasswordError("Please enter your password");
      return false;
    }
  };
  function pass(ele) {
    let reg = new RegExp(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&\^\$\*])[A-Za-z\d@$!%*?&\^\$\*]{8,}$/
    );

    if (ele.match(reg)) {
      return true;
    } else {
      return false;
    }
  }
  // const handleEmailChange = (event) => {
  //     console.log(event);
  //     console.log('name', event.target.name);
  //     console.log('value', event.target.value);
  //     // 1. take a copy of the state
  //     const userDetailsCopy = { ...userDetails }
  //     userDetailsCopy.email = event.target.value
  //     setuserDetails(userDetailsCopy)
  // }
  // const handlePasswordChange = (event) => {
  //     // 1. take a copy of the state
  //     const userDetailsCopy = { ...userDetails }
  //     userDetailsCopy.password = event.target.value
  //     setuserDetails(userDetailsCopy)
  // }
  function emailVal(ele) {
    if (ele.match(/^[a-z_0-9]+@[a-z]+[\.]{1}[a-z]{2,3}$/)) {
      return true;
    } else {
      return false;
    }
  }
  const handleChange = (event) => {
    console.log(event.target.name);
    const userDetailsCopy = { ...userDetails };

    userDetailsCopy[event.target.name] = event.target.value;
    setuserDetails(userDetailsCopy);
  };
  return (
    <div className="login">
      <form onSubmit={login}>
        <div>
          <input
            className="email"
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={(event) => {
              handleChange(event);
            }}
            value={userDetails.email}
          />
          {!isEmailValid ? (
            <p style={{ color: "red", fontSize: "10px" }}>{emailError}</p>
          ) : null}
        </div>
        <div>
          <input
            className="pass"
            type="password"
            name="password"
            placeholder="Enter password"
            onChange={(event) => {
              handleChange(event);
            }}
            value={userDetails.password}
          />
          {!isPasswordValid ? (
            <p style={{ color: "red", fontSize: "10px" }}>{passwordError}</p>
          ) : null}
        </div>
        <div>
          <input className="button" type="submit" value="Login" />
        </div>
        <div className="regi">
          Dont Have Account?
          <button
            className="button1"
            onClick={() => props.history.push("/Register")}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
