import { ButtonHTMLAttributes, DetailedHTMLProps, MouseEvent } from "react";

/**
 * The properties for the button prop.
 */
export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    /**
     * Event when mouse is clicked, returns a void function.
     */
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
