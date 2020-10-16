import { Action } from '@ngrx/store';
import { Assessment } from "../../models/assessment";

/**
 * All the constants to define our actions
 */
export const LOAD_QRTP = '[QRTP] load assessments';
export const LOAD_QRTP_FAIL = '[QRTP] load assessment fail';
export const LOAD_QRTP_SUCCESS = '[QRTP] load assessment success';
export const ADD_QRTP = '[QRTP] add assessment';
export const ADD_QRTP_SUCCESS = '[QRTP] add assessment success';
export const EDIT_QRTP = '[QRTP] edit assessment';
export const DELETE_QRTP = '[QRTP] delete assessment';
export const SAVE_QRTP = '[QRTP] save assessment';
export const COMPLETE_QRTP = '[QRTP] done assessment';
export const SELECT_QRTP = '[QRTP] select assessment';

/**
 * Implementation of all actions that we are handle
 */

export class LoadQRTPs implements Action {
    readonly type = LOAD_QRTP;
}

export class LoadQRTPFail implements Action {
  readonly type = LOAD_QRTP_FAIL;
  constructor(public payload: any) {}
}

export class LoadQRTPSuccess implements Action {
  readonly type = LOAD_QRTP_SUCCESS;
  constructor(public payload: Assessment[]) {}
}

export class Save implements Action {
    readonly type = SAVE_QRTP;

    constructor(public assessment: Assessment) {}
}

export class Add implements Action {
    readonly type = ADD_QRTP;

    constructor(public assessment: Assessment) {}
}

export class AddAssessmentSuccess implements Action {
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
                LoadQRTPs |
                LoadQRTPFail |
                LoadQRTPSuccess |
                Save |
                Add |
                AddAssessmentSuccess |
                Edit |
                Delete |
                Complete |
                Select;
