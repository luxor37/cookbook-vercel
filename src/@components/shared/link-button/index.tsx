import Link from 'next/link';

export default function LinkButton({ className="", href, text }) {
    return (
        <Link href={href}>
            <a className={`${className} opacity-75 font-extrabold uppercase hover:opacity-100 focus:opacity-100`}>
                {text}
            </a>
        </Link>
    )
}