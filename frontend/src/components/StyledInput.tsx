import React from "react";

interface StyledInputProps {
    placeholder: string;
    type: 'text' | 'password';
    icon: React.ReactNode;
    value: string;
    changeHandler: (text: React.FormEvent<HTMLInputElement>) => void;
    blurHandler: () => void;
}

const StyledInput = (props: StyledInputProps) => {

    return (
        <label className="input input-bordered flex items-center gap-2 mb-1">
            {props.icon}
            <input type={props.type} className="grow" placeholder={props.placeholder} value={props.value}
                   onChange={props.changeHandler} onBlur={props.blurHandler}/>
        </label>
    )
}

export default StyledInput;
