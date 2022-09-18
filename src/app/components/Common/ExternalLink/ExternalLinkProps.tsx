import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

/**
 * The properties for the External link prop.
 */
export interface ExternalLinkProps
    extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    /**
     * Name of the title.
     */
    content: string;
    /**
     * The external link.
     */
    externalLink: string;
}
