import NavButton from "./nav-button";
import NavButtonMobile from "./nav-button-mobile";
import NavButtonLang from "./nav-button-lang";
import { useTranslation } from 'next-i18next';

export const Navbar = () => {
    const { t } = useTranslation('common');
    return (
        <nav className='md:text-center md:flex-col md:w-full top-0 left-0 right-0 flex z-10 bg-primary flex-wrap items-center content-between py-4 px-4'>

            <a className="flex mx-auto mt-auto mb-0 md:hidden">
                <span className='text-xl text-white font-bold uppercase tracking-wide'>
                    Rémi Martel
                </span>
            </a>

            <NavButtonMobile />

            <div className="nav-items md:mb-auto md:items-start md:flex-grow-0 md:max-h-full md:flex max-h-0 box-border w-full items-center flex-grow my-auto">

                <div className="md:w-full md:flex md:justify-between">
                    <ul className='flex flex-col md:flex-row pl-0 mb-0 list-none'>
                        <li className="md:mx-5 ml-auto mr-auto">
                            <NavButton href="/" text={t('home')} />
                        </li>
                        <li className="md:mx-5 ml-auto mr-auto">
                            <NavButton href="/appetizers" text={t('appetizers')} />
                        </li>
                        <li className="md:mx-5 ml-auto mr-auto">
                            <NavButton href="/maindishes" text={t('main dishes')} />
                        </li>
                        <li className="md:mx-5 ml-auto mr-auto">
                            <NavButton href="/desserts" text={t('desserts')} />
                        </li>
                        <li className="md:mx-5 ml-auto mr-auto">
                            <NavButton href="/drinks" text={t('drinks')} />
                        </li>
                    </ul>
                    <div className=" text-center">
                    <NavButtonLang />
                    </div>
                </div>
            </div>



        </nav>
    )
}
