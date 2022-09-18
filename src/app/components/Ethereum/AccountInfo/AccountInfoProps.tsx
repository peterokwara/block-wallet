import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

/**
 * The properties for the AccountInfo prop
 */
export interface AccountInfoProps
    extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    /**
     * The account balance in USD
     */
    accountBalance: number;

    /**
     * The account balance in Eth
     */
    ethPrice: number;

    /**
     * Event when mouse is clicked, returns a void function
     */
    onClickSend?: () => void;
}
