import { Button } from "@chakra-ui/button";
import React from "react";

type PFButtonType = {
  variant?: "ghost" | "solid" | "navBar";
  children: any;
  stylesProps?: Object;
  OnClick?: any;
};

export default function PFButton({
  variant = "solid",
  children,
  stylesProps = {},
  OnClick,
}: PFButtonType) {
  return (
    <Button variant={variant} sx={stylesProps} onClick={OnClick}>
      {children}{" "}
    </Button>
  );
}