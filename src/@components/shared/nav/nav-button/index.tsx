import { Link, Text } from "@chakra-ui/react";

export default function NavButton({ href, text }) {
    return (
        <Link href={href}>
            <Text
                textColor={'white'}
                opacity={'0.75'}
                fontWeight={'extrabold'}
                textTransform={'uppercase'}
                my={'0.75rem'}
                _hover={{ opacity: '1', textColor: 'white' }}
                _focus={{ opacity: '1', textColor: 'white' }}>
                {text}
            </Text>
        </Link>
    )
}