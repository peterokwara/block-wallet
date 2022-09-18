import { IStore } from "../../models/services/infrastructure/IStore";
/**
 * Base store class.
 */
export class BaseStore<S> implements IStore<S> {
    private _state: S;

    constructor(initialState: S) {
        this._state = initialState;
    }

    public getState(): S {
        return this._state;
    }

    public updateState(partialState: Partial<S>): void {
        this._state = Object.assign({}, this._state, partialState);
    }
}
