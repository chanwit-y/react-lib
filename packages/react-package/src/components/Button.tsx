import React from "react";
import { printName } from "@chanwit-y/typescript-package";

export const Button = () => {
  return (
    <div>
      Hi
      <div>{printName("Chanwit", "Yimneam")}</div>
    </div>
  );
};
