import React, { useReducer } from "react";
import AppContext, { initAppState } from "./AppContext";
import AppReducer from "./AppReducer";
import Actions from "../contextActions";
import { TransactionsService } from "../../services/TransactionsService";
import { IAppState } from "../../models/context/background/IAppState";
import { Transaction } from "../../models/services/ITransaction";

const AppState = (props: any) => {
    const [state, dispatch] = useReducer(AppReducer, initAppState);

    const transactionService = new TransactionsService(state);

    // Set app state
    const setState = (newState: IAppState) => {
        dispatch({
            type: Actions.SET_STATE,
            payload: newState
        });
    };

    // TODO: Complete the addTransaction method
    const addTransaction = (transaction: Transaction) => {
        transactionService.addTransaction(transaction);
        transactionService.getListOfTransactions();
    };

    return (
        <AppContext.Provider
            value={{
                state,
                setState,
                addTransaction
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};

export default AppState;
