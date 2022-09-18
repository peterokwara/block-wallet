import React from "react";
import { InputFieldProps } from "./InputFieldProps";
import "./InputField.scss";

/**
 * Component that returns an input element together with a label.
 * @param param0 Attributes to be passed on to the labels.
 * @returns An input field with a label.
 */
export const InputField: React.FunctionComponent<InputFieldProps> = ({ placeholder, label, onChange }) => {
    return (
        <div className="inputField">
            <label className="label" htmlFor="">
                {label}
            </label>
            <input type="text" className="input" placeholder={placeholder} required onChange={onChange} />
        </div>
    );
};
