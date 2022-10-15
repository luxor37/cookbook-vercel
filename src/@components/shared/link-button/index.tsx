import { Link, LinkProps } from "@chakra-ui/react";

export interface ILinkButton extends LinkProps {
    href: string
    text: string
}

export default function LinkButton({ href, text, ...rest }: ILinkButton) {
    return (
        <Link href={href} opacity={0.5} fontWeight={"extrabold"} textTransform={"uppercase"} _hover={{ opacity: 1 }} _focus={{ opacity: 1 }} {...rest}>
            {text}
        </Link>
    )
}