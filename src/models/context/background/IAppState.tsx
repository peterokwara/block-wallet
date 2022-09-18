import { Transaction } from "../../services/ITransaction";

/**
 * The AppState interface.
 */
export interface IAppState {
    /**
     * The transactions.
     */
    transactions: Array<Transaction>;
}
