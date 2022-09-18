import { BaseStore } from "./BaseStore";

/**
 * Base service class.
 */
export class BaseService<T> extends BaseStore<T> {
    constructor(initialState: T) {
        super(initialState)        
    }
}