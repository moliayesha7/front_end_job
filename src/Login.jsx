import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Profile from "./Profile";

let Login = () => {
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");

  const handleSubmit = () => {

    return <Redirect
      to={{
        pathname: "/profile",
      }}
    />

  }


  return (
    <div className="row">
      <div className="col-lg-5 col-md-7 mx-auto">
        <div className="card border-success shadow-lg my-2">
          <div className="card-header border-bottom border-success">
            <h4
              style={{ fontSize: "40px" }}
              className="text-success text-center"
            >
              Login
            </h4>
          </div>

          <div className="card-body border-bottom border-success">
            {/* email starts */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"

                onChange={(event) => {
                  setEmail(event.target.value);
                }}

                placeholder="Email"

              />

            </div>
            {/* email ends  */}

            {/* password starts */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"

                placeholder="Password"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}

              />

            </div>
            {/* password ends  */}
          </div>

          <div className="card-footer text-center">

            <button className="btn btn-success m-2" onClick={handleSubmit()}>
              Login
            </button>

          </div>
        </div>

        <br />
        <br />
        <Profile />
      </div>
    </div>
  );
};


export default Login;
