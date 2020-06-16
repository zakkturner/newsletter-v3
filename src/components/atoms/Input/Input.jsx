import React from "react";

import "./Input.scss";

export default function Input({ type, name, handleChange, handleBlur, value }) {
  return (
    <input
      className="input"
      type={type}
      name={name}
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder={value}
    />
  );
}
