import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

/**
 * The properties for the heading prop.
 */
export interface HeadingProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    /**
     * Name of the title.
     */
    title: string;
}
