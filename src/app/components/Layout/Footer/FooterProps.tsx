import { ReactNode,ButtonHTMLAttributes, DetailedHTMLProps } from "react";

/**
 * The properties for the footer component
 */
export interface FooterProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    /**
     * The children elements to display as content.
     */
    children?: ReactNode | ReactNode[];
}
