import React from "react";
import { printName } from "typescript-package";

export const Button = () => {
  return (
    <div>
      Hi
      <div>{printName("Chanwit", "Yimneam")}</div>
    </div>
  );
};
