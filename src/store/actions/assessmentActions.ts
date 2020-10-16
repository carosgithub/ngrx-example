import { Action } from '@ngrx/store';
import { Todo } from "../../models/assessment";

/**
 * All the constants to define our actions
 */
export const SAVE_QRTP = '[QRTP] save todo';
export const ADD_QRTP = '[QRTP] add todo';
export const ADD_QRTP_SUCCESS = '[QRTP] add todo success';
export const EDIT_QRTP = '[QRTP] edit todo';
export const DELETE_QRTP = '[QRTP] delete todo';
export const COMPLETE_QRTP = '[QRTP] done todo';
export const SELECT_QRTP = '[QRTP] select todo';

/**
 * Implementation of all actions that we are handle
 */
export class Save implements Action {
    readonly type = SAVE_QRTP;

    constructor(public todo: Todo) {}
}

export class Add implements Action {
    readonly type = ADD_QRTP;

    constructor(public todo: Todo) {}
}

export class AddTodoSuccess implements Action {
    readonly type = ADD_QRTP_SUCCESS;

    constructor(public todo: Todo) {}
}

export class Edit implements Action {
    readonly type = EDIT_QRTP;

    constructor(public id: number, public changes: Partial<Todo>) {}
}

export class Delete implements Action {
    readonly type = DELETE_QRTP;

    constructor(public id: number) {}
}

export class Complete implements Action {
    readonly type = COMPLETE_QRTP;

    constructor(public id: number) {}
}

export class Select implements Action {
    readonly type = SELECT_QRTP;

    constructor(public id: number) {}
}

export type Actions =
                Save |
                Add |
                AddTodoSuccess |
                Edit |
                Delete |
                Complete |
                Select;
