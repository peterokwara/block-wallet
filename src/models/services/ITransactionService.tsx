import { Transaction } from "./ITransaction";

/**
 * Transaction service interface.
 */
export interface TransactionsServiceState {
    /**
     * Array of several transactions.
     */
    transactions: Array<Transaction>;
}
