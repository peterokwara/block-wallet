import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

/**
 * The properties for the Transaction prop
 */
export interface TransactionProps
    extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    /**
     * Key used to iterate through the list of transactions
     */
    key: number;

    /**
     * The date of the Transaction
     */
    date: string;

    /**
     * The value of the Transaction
     */
    value: number;
}
