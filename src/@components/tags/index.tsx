import Lang from "../shared/lang";
import Nullable from "../shared/undefinable"

export default function Tags({ tags }) {
    if (!tags) {
        return <></>
    }
    else {
        return (
            <>
                {tags.map(
                    ({ name }) => {
                        return (
                            <span key={name} className=" my-1 mx-1 bg-primary text-white px-2 rounded-full">
                                <Lang>{name}</Lang>
                            </span>
                        )
                    })
                }
            </>
        )
    }
}