import { createContext } from "react";
import defaults from "../../utils/constants";
import ContextType from "../../models/context/background/IAppContext";
import { Transaction } from "../../models/services/ITransaction";
import { IAppState } from "../../models/context/background/IAppState";

const getPastTransactions = (): Transaction[] => {
    let transactions: Transaction[] = [];

    for (const transaction of Object.values(defaults.pastTransactions)) {
        transactions.push({
            id: Math.round(Math.random() * 1000),
            to: transaction.recipient,
            from: defaults.publicAddress,
            value: parseFloat(transaction.amount),
            date: transaction.date
        });
    }
    return transactions;
};

export const initAppState: IAppState = {
    transactions: getPastTransactions()
};

const AppContext: React.Context<ContextType> = createContext<ContextType>({
    state: initAppState,
    addTransaction: () => {},
    setState: () => {}
});

export default AppContext;
