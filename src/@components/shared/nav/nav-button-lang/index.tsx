import Link from 'next/link';
import { useRouter } from 'next/router'

export default function NavButtonLang({ }) {
    const router = useRouter()
    return (
        <Link href={router.locale === 'en' ? '/fr' : '/'} locale={router.locale === 'en' ? 'fr' : 'en'}>
            <a className="text-white opacity-75 block font-extrabold uppercase hover:opacity-100 focus:opacity-100 hover:text-white focus:text-white my-3">
                {router.locale === 'en' ? 'FR' : 'EN'}
            </a>
        </Link>
    )
}