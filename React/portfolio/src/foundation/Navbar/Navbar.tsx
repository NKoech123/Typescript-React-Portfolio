import React from "react"
import { Box, Text } from "@chakra-ui/react"

type LogoProps = {
    logoText: string;
    fontSize: string;
    fontWeight: string;

}

export default function PFNavbar({logoText, fontSize, fontWeight}:LogoProps) {
    return (

        <Box>

            <Text fontSize={fontSize} fontWeight={fontWeight} >
                {logoText}
            </Text>

        </Box>

    )
}

