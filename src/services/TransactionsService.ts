import { Transaction } from "../models/services/ITransaction";
import { TransactionsServiceState } from "../models/services/ITransactionService";
import { BaseService } from "./infrastructure/BaseService";

/**
 * TransactionService Class.
 */
export class TransactionsService extends BaseService<TransactionsServiceState> {
    constructor(initialState: TransactionsServiceState) {
        super(
            initialState || {
                transactions: []
            }
        );
    }

    /**
     * Adds a new transaction
     * @param newTransaction The new transaction to add.
     * @returns Null.
     */
    public async addTransaction(newTransaction: Transaction): Promise<void> {
        return new Promise<void>(resolve => {
            setTimeout(() => {
                this.getState().transactions.push(newTransaction);
                this.updateState(this.getState());
                resolve();
            }, 300);
        });
    }

    /**
     * Returns the list of transactions.
     * @returns List of transactions.
     */
    public async getListOfTransactions(): Promise<Array<Transaction>> {
        return new Promise<Array<Transaction>>(resolve => {
            setTimeout(() => {
                resolve(this.getState().transactions);
            }, 300);
        });
    }
}
