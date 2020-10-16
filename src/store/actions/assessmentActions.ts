import { Action } from '@ngrx/store';
import { Assessment } from "../../models/assessment";

/**
 * All the constants to define our actions
 */
export const SAVE_QRTP = '[QRTP] save assessment';
export const ADD_QRTP = '[QRTP] add assessment';
export const ADD_QRTP_SUCCESS = '[QRTP] add assessment success';
export const EDIT_QRTP = '[QRTP] edit assessment';
export const DELETE_QRTP = '[QRTP] delete assessment';
export const COMPLETE_QRTP = '[QRTP] done assessment';
export const SELECT_QRTP = '[QRTP] select assessment';

/**
 * Implementation of all actions that we are handle
 */
export class Save implements Action {
    readonly type = SAVE_QRTP;

    constructor(public assessment: Assessment) {}
}

export class Add implements Action {
    readonly type = ADD_QRTP;

    constructor(public assessment: Assessment) {}
}

export class AddTodoSuccess implements Action {
    readonly type = ADD_QRTP_SUCCESS;

    constructor(public assessment: Assessment) {}
}

export class Edit implements Action {
    readonly type = EDIT_QRTP;

    constructor(public id: number, public changes: Partial<Assessment>) {}
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
