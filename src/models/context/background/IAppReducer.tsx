import { ISetStateAction } from "../ISetStateAction";
import { ISetTransactionAction } from "../ISetTransactionAction";

/**
 * AppAction type.
 */
type AppAction = ISetTransactionAction | ISetStateAction;

export default AppAction;
