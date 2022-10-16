import NavButton from "./nav-button";
import NavButtonLang from "./nav-button-lang";
import { useTranslation } from 'next-i18next';
import { Box, ListItem, UnorderedList } from "@chakra-ui/react";
import { useState } from "react";

export const PATHS = [
    { path: "/appetizers", name: 'Appetizers' },
    { path: "/maindishes", name: 'Main Dishes' },
    { path: "/desserts", name: 'Desserts' },
    { path: "/drinks", name: 'Drinks' },
    { path: "/others", name: 'Others' },
]

export const Navbar = () => {
    const { t } = useTranslation('common');
    const [isMobileMenuExpanded, setIsMobileMenuExpanded] = useState<boolean>(false)

    return (
        <Box
            w={'full'}
            display={'flex'}
            zIndex={10}
            alignItems={'center'}
            alignContent={'space-between'}
            flexWrap={'wrap'}
            p={"1rem"}
            className='bg-primary'>

            <span className="flex mx-auto mt-auto mb-0 md:hidden">
                <span className='text-xl text-white font-bold uppercase tracking-wide'>
                    <NavButton href="/" text="cookbook" />
                </span>
            </span>

            <Box
                id="button"
                cursor={'pointer'}
                display={{ base: 'inline-block', md: 'none' }}
                onClick={() => setIsMobileMenuExpanded(!isMobileMenuExpanded)}>
                <Box w={'35px'} h={'5px'} bgColor={'black'} m={'6px 0'} transition={'0.4s'} transform={isMobileMenuExpanded && 'rotate(-45deg) translate(-9px, 6px);'}></Box>
                <Box w={'35px'} h={'5px'} bgColor={'black'} m={'6px 0'} transition={'0.4s'} opacity={isMobileMenuExpanded && 0}></Box>
                <Box w={'35px'} h={'5px'} bgColor={'black'} m={'6px 0'} transition={'0.4s'} transform={isMobileMenuExpanded && 'rotate(45deg) translate(-8px, -8px)'}></Box>
            </Box>

            <Box
                mb={{ md: 'auto' }}
                my={'auto'}
                alignItems={{ base: 'center', md: 'flex-start' }}
                flexGrow={{ base: 0, md: 0 }}
                maxH={{ base: isMobileMenuExpanded ? '24rem' : 0, md: 'full' }}
                display={{ md: 'flex' }}
                boxSizing={'border-box'}
                w={'full'}
                overflow={'hidden'}
                transition={'all 0.3s ease-in-out'}>

                <Box className="md:w-full md:flex md:justify-between">
                    <UnorderedList listStyleType={'none'} className='flex flex-col md:flex-row pl-0 mb-0'>
                        <ListItem className="md:mx-5 ml-auto mr-auto">
                            <NavButton href="/" text={t('home')} />
                        </ListItem>
                        {PATHS.map(({ path, name }, index) => {
                            return (
                                <ListItem key={index} className="md:mx-5 ml-auto mr-auto">
                                    <NavButton key={index} href={path} text={t(name)} />
                                </ListItem>
                            )
                        })}
                    </UnorderedList>
                    <Box className=" text-center">
                        <NavButtonLang />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
