import React from "react";

import "./SignUp.scss";

import Title from "../atoms/Title/Title";
import SubTitle from "../atoms/SubTitle/SubTitle";
import Form from "../molecules/Form/Form";

export default function Signup() {
  return (
    <main className="SignUp">
      <div className="SignUp__container">
        <Title />
        <SubTitle />
        <Form />
      </div>
    </main>
  );
}
