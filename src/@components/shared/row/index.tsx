export default function Row({ noDefaultMargins = false, children, className = "" }) {
    var margins = noDefaultMargins ? `` : `my-2`;
    return (
        <div className={`flex flex-row flex-wrap w-full ${margins} ${className}`}>
            {children}
        </div>
    )
}