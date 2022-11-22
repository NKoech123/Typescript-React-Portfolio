import { Button } from "@chakra-ui/button";
import React from "react";

type PFButtonType = {
  variant?: "ghost" | "solid" | "navBar"|"outline";
  children: any;
  stylesProps?: Object;
  OnClick?: any;
  _hover?:any
};

export default function PFButton({
  variant = "solid",
  children,
  stylesProps = {},
  OnClick,
  _hover,
}: PFButtonType) {
  return (
    <Button variant={variant} sx={stylesProps} onClick={OnClick}
    _hover={_hover}
    >
      {children}{" "}
    </Button>
  );
}


export const DownloadResumeButton = () => {
  return (
    <PFButton
      variant = "solid"
      stylesProps={{
        width: "208px",
        height: "47px",
        borderRadius: "10px",
        // fontSize: "20px",
      }}
      OnClick={() => {}}
    >
      Download Resume
    </PFButton>
  );
};