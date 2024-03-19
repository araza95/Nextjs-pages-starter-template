// React Imports
import React, { Fragment } from "react";

// View Import
import LoginView from "../views/Authentication/Login";

// Next JS Imports
import Head from "next/head";

const Login = () => {
  return (
    <Fragment>
      <Head>
        <title>PROJECT_NAME | Login</title>
      </Head>
      <LoginView />
    </Fragment>
  );
};

export default Login;
