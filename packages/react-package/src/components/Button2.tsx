import React, { FC } from "react";
import { printName } from "@chanwit-y/typescript-package";

type props = {
  onClick: () => void;
  children?: React.ReactElement;
};

export const Button2: FC<props> = ({ onClick, children }) => {
  return (
    <div onClick={onClick}>
      <div>{printName("C", "Y")}</div>
      {children}
    </div>
  );
};
