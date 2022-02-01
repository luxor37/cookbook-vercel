import { ReactNode } from "react";

export interface Column {
    width: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    children: ReactNode;
    className?: string;
    noPadding?: boolean
}

export default function Column({ noPadding = false, width, children, className = "" }:Column) {

    //Width works like Boostrap with a value out of 12 (width/12)
    var col_width = width == 12 ? `w-full` : `w-${width}/12`;

    var paddings = noPadding ? `` : `p-2`;
    return (
        <div className={` ${className} flex flex-col ${paddings} md:${col_width}  w-full`}>
            {children}
        </div>
    )
}