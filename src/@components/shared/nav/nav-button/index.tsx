import Link from 'next/link';

export default function NavButton({ href, text }) {
    return (
        <Link href={href}>
            <a className="text-white opacity-75 block font-extrabold uppercase hover:opacity-100 focus:opacity-100 hover:text-white focus:text-white my-3">
                {text}
            </a>
        </Link>
    )
}