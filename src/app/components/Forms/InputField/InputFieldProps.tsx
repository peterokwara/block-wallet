import { InputHTMLAttributes, DetailedHTMLProps, ChangeEvent } from "react";

/**
 * The properties for the input field component
 */
export interface InputFieldProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    /**
     * Placeholder string for the input field
     */
    placeholder: string;

    /**
     * Text label
     */
    label: string;

    /**
     * On change event
     */
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
