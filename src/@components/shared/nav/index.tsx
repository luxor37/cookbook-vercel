import NavButton from "./nav-button";
import NavButtonMobile from "./nav-button-mobile";
import NavButtonLang from "./nav-button-lang";
import { useTranslation } from 'next-i18next';
import { Box, ListItem, UnorderedList } from "@chakra-ui/react";

export const Navbar = () => {
    const { t } = useTranslation('common');
    return (
        <nav className='md:text-center md:flex-col md:w-full top-0 left-0 right-0 flex z-10 bg-primary flex-wrap items-center content-between py-4 px-4'>

            <span className="flex mx-auto mt-auto mb-0 md:hidden">
                <span className='text-xl text-white font-bold uppercase tracking-wide'>
                    <NavButton href="/" text="cookbook" />
                </span>
            </span>

            <NavButtonMobile />

            <Box className="nav-items md:mb-auto md:items-start md:flex-grow-0 md:max-h-full md:flex max-h-0 box-border w-full items-center flex-grow my-auto">

                <Box className="md:w-full md:flex md:justify-between">
                    <UnorderedList listStyleType={'none'} className='flex flex-col md:flex-row pl-0 mb-0'>
                        <ListItem className="md:mx-5 ml-auto mr-auto">
                            <NavButton href="/" text={t('home')} />
                        </ListItem>
                        <ListItem className="md:mx-5 ml-auto mr-auto">
                            <NavButton href="/appetizers" text={t('appetizers')} />
                        </ListItem>
                        <ListItem className="md:mx-5 ml-auto mr-auto">
                            <NavButton href="/maindishes" text={t('main dishes')} />
                        </ListItem>
                        <ListItem className="md:mx-5 ml-auto mr-auto">
                            <NavButton href="/desserts" text={t('desserts')} />
                        </ListItem>
                        <ListItem className="md:mx-5 ml-auto mr-auto">
                            <NavButton href="/drinks" text={t('drinks')} />
                        </ListItem>
                        <ListItem className="md:mx-5 ml-auto mr-auto">
                            <NavButton href="/others" text={t('others')} />
                        </ListItem>
                    </UnorderedList>
                    <Box className=" text-center">
                        <NavButtonLang />
                    </Box>
                </Box>
            </Box>



        </nav>
    )
}
