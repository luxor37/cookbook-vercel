import { useRouter } from 'next/router'

export default function NavButtonLang({ }) {
    const router = useRouter()
    const { pathname, asPath, query, locale } = router
    return (
        <div className="cursor-pointer" onClick={() => {router.push({ pathname, query }, asPath, { locale: locale === 'en' ? 'fr' : 'en' })}}>
            <a className="text-white opacity-75 block font-extrabold uppercase hover:opacity-100 focus:opacity-100 hover:text-white focus:text-white my-3">
                {locale === 'en' ? 'FR' : 'EN'}
            </a>
        </div>
    )
}