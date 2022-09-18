import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

/**
 * The properties for the Account prop
 */
export interface AccountProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    /**
     * The account public address
     */
    publicAddress: string;
}
