import React from "react";
import {Button as MuiButton} from "@mui/material";
import { printName } from "@chanwit-y/typescript-package";

export const Button2 = () => {
  return (
    <div>
      <MuiButton>Hi beer</MuiButton>
      <div>{printName("Chanwit", "Yimneam")}</div>
    </div>
  );
};
