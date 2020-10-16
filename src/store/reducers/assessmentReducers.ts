import { createSelector, createFeatureSelector } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { Assessment } from "../../models/assessment";
import * as fromActions from '../actions/assessmentActions';

// create new state based on EntityState
export interface State extends EntityState<Assessment> {
    selectedAssessmentId: number | null;
}

// create new adapter
export const adapter: EntityAdapter<Assessment> = createEntityAdapter<Assessment>({
    selectId: (assessment: Assessment) => assessment.id
});

// set the initial state of the app
export const initialState: State = adapter.getInitialState({
    selectedAssessmentId: null,
    ids: []
})

// this function is called after every execution of a action
export function reducer(
    state = initialState,
    action: fromActions.Actions
): State {

    switch(action.type) {

        case fromActions.ADD_QRTP_SUCCESS: {
            return adapter.addOne(action.assessment, state);
        }

        case fromActions.EDIT_QRTP: {
            return adapter.updateOne({
                id: action.id,
                changes: action.changes
            }, state);
        }

        case fromActions.DELETE_QRTP: {
            return adapter.removeOne(action.id, state);
        }

        case fromActions.COMPLETE_QRTP: {
            return adapter.updateOne({
                id: action.id,
                changes: { complete: !state.entities[action.id].complete }
            }, state);
        }

        case fromActions.SELECT_QRTP: {
            return {
                ...state,
                selectedAssessmentId: action.id
            };
        }

        default: {
            return state;
        }
    }

}

export const selectedId = (state: State) => state.selectedAssessmentId;
