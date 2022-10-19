import { extendTheme } from "@chakra-ui/react";
import "@fontsource/heebo";

const customTheme = extendTheme({
  colors: {
    backgoundColor: "#121C20", 
    secondary_green: "#469E84",
    solidButtonColor: "#EF855B",
    outlineButtonColor: "#EF855B",
    whiteColor: "#FFFFFF",
    secondArrowdColor: "#877198",
    darkColor: "#000000",
    arrowColor: "#469E84"

  },
  fonts:{
    heading: "Heebo",
    body: "Heebo",

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
        "OrderedContents": {
          fontSize: "90px",
          lineHeight: "100px",
        },
        "ProjectsHeading": {
            fontSize: "30px",
            lineHeight: "45px",
          },
       
        },
      },
    },
    Text: {
      variants: {
        "1": {
          fontSize: "16px",
          lineHeight: "23px",
          color: "darkColor",
        },
        "2": {
          fontSize: "22px",
          lineHeight: "60px",
          color: "darkColor",
        },
 
      },
    },
  },
);

export default customTheme;

