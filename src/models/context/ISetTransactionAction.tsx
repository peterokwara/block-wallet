import { Transaction } from "../services/ITransaction";
import Actions from "./IActions";

/**
 * SetTransactionAction interface.
 */
export interface ISetTransactionAction {
    /**
     * Type of action.
     */
    type: Actions.SET_TRANSACTIONS;

    /**
     * The payload, array of a transaction.
     */
    payload: Transaction[];
}
