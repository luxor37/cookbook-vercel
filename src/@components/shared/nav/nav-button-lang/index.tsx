import { Box, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export default function NavButtonLang({ }) {
    const router = useRouter()
    const { pathname, asPath, query, locale } = router
    return (
        <Box cursor={'pointer'} onClick={() => { router.push({ pathname, query }, asPath, { locale: locale === 'en' ? 'fr' : 'en' }) }}>
            <Text
                textColor={'white'}
                opacity={'0.75'}
                fontWeight={'extrabold'}
                textTransform={'uppercase'}
                my={'0.75rem'}
                _hover={{ opacity: '1', textColor: 'white' }}
                _focus={{ opacity: '1', textColor: 'white' }}>
                {locale}
            </Text>
        </Box>
    )
}