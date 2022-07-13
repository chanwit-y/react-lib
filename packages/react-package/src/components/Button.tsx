import React from "react";
import { printName } from "typescript-package";

export const Button = () => {
  return <div>{printName("Chanwit", "Yimneam")}</div>;
};
