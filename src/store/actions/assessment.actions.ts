import { Action } from '@ngrx/store';
import { Assessment } from "../../models/assessment";

export const LOAD_QRTP = '[QRTP] load assessments';
export const LOAD_QRTP_FAIL = '[QRTP] load assessment fail';
export const LOAD_QRTP_SUCCESS = '[QRTP] load assessment success';

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

export type Actions =
                LoadQRTPs |
                LoadQRTPFail |
                LoadQRTPSuccess;
