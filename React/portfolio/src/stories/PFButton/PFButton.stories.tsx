import React from "react";
import PFButton from "../../foundation/PFButton/PFButton";

export default {
  title: "Foundation/PFButton",
  component: PFButton,
};

export const Default = () => {
  return (
    <PFButton
      variant = "outline"
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

//will change GhostButton to AboutMeButton
export const GhostButton = () => {
  return (
    <PFButton
      variant="outline"
      stylesProps={{
        fontSize: "16px",
        fontWeight: "400",
      }}
    >
      About me
    </PFButton>
  );
};