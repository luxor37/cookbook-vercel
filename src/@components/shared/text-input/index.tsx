import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DetailedHTMLProps, InputHTMLAttributes, useState } from "react";

export interface TextInput
    extends Omit<
    DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    >,
    "onChange"
    > {
    className?: string;
    onChange?(event): void;
}

export default function TextInput({
    onChange,
    className = "",
    name,
    value,
    placeholder,
}: TextInput) {

    return (
        <input className={`${className} py-2 px-3 text-base bg-clip-padding border rounded`}
            type="text"
            value={value}
            onChange={(event) => onChange(event.target.value)}
            name={name}
            id={name}
            placeholder={placeholder}
        />
    )
}