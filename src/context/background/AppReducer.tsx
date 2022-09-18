import AppAction from "../../models/context/background/IAppReducer";
import { IAppState } from "../../models/context/background/IAppState";
import Actions from "../../models/context/IActions";

const appReducer = (state: IAppState, action: AppAction): IAppState => {
    switch (action.type) {
        case Actions.SET_STATE:
            return {
                ...state,
                ...action.payload
            };
        case Actions.SET_TRANSACTIONS:
            return {
                ...state,
                transactions: action.payload
            };
        default:
            return state;
    }
};

export default appReducer;
