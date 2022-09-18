import { IAppState } from "./background/IAppState";
import Actions from "./IActions";

/**
 * SetStateAction interface.
 */
export interface ISetStateAction {
    /**
     * The type of action.
     */
    type: Actions.SET_STATE;

    /**
     * The payload.
     */
    payload: Partial<IAppState>;
}
