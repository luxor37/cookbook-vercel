export default function Nullable({ children, obj }) {
    if (!obj) {
        return <></>
    }
    else {
        return <>{children}</>
    }
}