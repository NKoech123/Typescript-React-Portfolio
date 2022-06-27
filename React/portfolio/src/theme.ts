import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  colors: {
    backgoundColor: "#1A2C32",
    secondary_green: "#469E84",
    solidButtonColor: "#EF855B",
    outlineButtonColor: "#EF855B",
    whiteColor: "#FFFFFF",
    secondArrowdColor: "#877198",
    darkColor: "#000000"

  },
  components: {

    Button: {
      variants: {
        solid: {
          backgroundColor: "solidButtonColor",
          color: "whiteColor",
        },
        outline: {
          color: "outlineButtonColor",
         
         
        },
        navBar: {
          fontSize: "18px",
          lineHeight: "29px",
        },
      },
    },
    Heading: {
      variants: {
        "1": {
          fontSize: "44px",
          lineHeight: "60px",
        },
        "2": {
          fontSize: "34px",
          lineHeight: "50px",
        },
        "3": {
          fontSize: "30px",
          lineHeight: "44px",
        },
        "4": {
          fontSize: "26px",
          lineHeight: "38px",
        },
      },
    },
    Text: {
      variants: {
        "1": {
          fontSize: "16px",
          lineHeight: "23px",
          color: "whiteColor",
        },
        "2": {
          fontSize: "22px",
          lineHeight: "60px",
          color: "darkColor",
        },
        "3": {
          fontSize: "18px",
          lineHeight: "26px",
          color: "darkColor",
        },
        "4": {
          fontSize: "20px",
          lineHeight: "29.3px",
          color: "lightColor",
        },
        "5": {
          fontSize: "14px",
          lineHeight: "20.5px",
          color: "darkColor",
        },
        "6": {
          fontSize: "20px",
          lineHeight: "29.38px",
          color: "darkColor",
        },
        "7": {
          fontSize: "16px",
          fontWeight: 400,
          lineHeight: "23.5px",
          color: "darkColor",
        },
      },
    },
  },
});

export default customTheme;

