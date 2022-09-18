/**
 * Transaction interface.
 */
export interface Transaction {
    /**
     * The transaction id.
     */
    id: number;

    /**
     * Destination address.
     */
    to: string;

    /**
     * Source address.
     */
    from: string;

    /**
     * Amount to transfer.
     */
    value: number;

    /**
     * Transaction date.
     */
    date: string;
}
