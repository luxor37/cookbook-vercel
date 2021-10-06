import NavButton from "./nav-button";
import NavButtonMobile from "./nav-button-mobile";
import NavButtonLang from "./nav-button-lang";
import { useTranslation } from 'next-i18next';

export const Navbar = () => {
    const { t } = useTranslation('common');
    return (
        <nav className='md:text-center md:flex-col md:w-72 md:h-screen fixed top-0 left-0 right-0 flex z-10 bg-primary flex-wrap items-center content-between py-4 px-4'>

            <a className="flex mx-auto mt-auto mb-0 md:hidden">
                <span className='text-xl text-white font-bold uppercase tracking-wide'>
                    Rémi Martel
                </span>
            </a>

            <NavButtonMobile />
            
            <div className="nav-items md:mb-auto md:items-start md:flex-grow-0 md:max-h-full md:flex max-h-0 box-border w-full items-center flex-grow my-auto">
                <ul className='md:w-full flex flex-col pl-0 mb-0 list-none'>
                    <li className="md:block box-border">
                        <NavButton href="#about" text={t('about')} />
                    </li>
                    <li className="block box-border">
                        <NavButton href="#experience" text={t('experience')} />
                    </li>
                    <li className="block box-border">
                        <NavButton href="#education" text={t('education')} />
                    </li>
                    <li className="block box-border">
                        <NavButtonLang />
                    </li>
                </ul>
            </div>

        </nav>
    )
}
