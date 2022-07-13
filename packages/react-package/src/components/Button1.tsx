import React, { createElement } from "react";
// import { Button } from "@mui/material";
import { Button2 } from "./Button2";
import { printName } from "@chanwit-y/typescript-package";

export const Button1 = () => {
  let x = createElement(
    Button2,
    {
      onClick: () => {
        console.log("click hi");
      },
    },
    [<p>x1</p>]
  );

  // let x2: React.ReactElement = <button>x 2</button>;

  return (
    <div>
      {x}
      {/* <Button>Hi beer</Button> */}
      <div>{printName("Chanwit", "Yimneam")}</div>
    </div>
  );
};
