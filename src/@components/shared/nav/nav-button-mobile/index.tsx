import { Box } from "@chakra-ui/react";

export default function NavButtonMobile() {
    const showMenu = () => {
        document.querySelector("#button").classList.toggle("change");
        document.querySelector(".nav-items").classList.toggle("max-h-96");
        document.querySelector(".nav-items").classList.toggle("max-h-0");
    }

    return (
        <Box id="button" className="inline-block cursor-pointer md:hidden" onClick={showMenu}>
            <Box className="bar1"></Box>
            <Box className="bar2"></Box>
            <Box className="bar3"></Box>
        </Box>
    )
}