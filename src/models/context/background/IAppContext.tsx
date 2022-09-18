import { IAppState } from "./IAppState";
import { Transaction } from "../../services/ITransaction";

/**
 * ContextType type.
 */
type ContextType = {
    state: IAppState;
    addTransaction: (transaction: Transaction) => void;
    setState: (state: IAppState) => void;
};

export default ContextType;
