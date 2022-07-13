import React from "react";
import {Button} from "@mui/material";
import { printName } from "@chanwit-y/typescript-package";

export const Button1 = () => {
  return (
    <div>
      <Button>Hi beer</Button>
      <div>{printName("Chanwit", "Yimneam")}</div>
    </div>
  );
};
