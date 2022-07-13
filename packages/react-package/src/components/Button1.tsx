import React from "react";
// import { Button } from "@mui/material";
import { printName } from "@chanwit-y/typescript-package";

export const Button1 = () => {
  let x: JSX.Element = <button>test</button>;
  x.props = {
    onclick: () => {
      console.log("click hi");
    },
  };

  return (
    <div>
      {x}
      {/* <Button>Hi beer</Button> */}
      <div>{printName("Chanwit", "Yimneam")}</div>
    </div>
  );
};
