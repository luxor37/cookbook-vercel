export default function Section({ id, children, className="bg-red-700" }) {
    return (
        <div id={id} className={`w-full px-12 min-h-screen ${className}`}>
            {children}
        </div>
    )
}