/**
 * Storage interface.
 */
export interface IStore<S> {
    /**
     * It returns the store state
     */
    getState(): S;

    /**
     * It updates the store state
     * @param partialState The partial state update
     */
    updateState(partialState: Partial<S>): void;
}
