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

// selectors
export const getAssessmentsState = createFeatureSelector<State>('assessments');

/**
 * Create new selector to watch changes on entities
 */
export const getAssessmentsEntitiesState = createSelector(
    getAssessmentsState,
    state => state.entities
);

/**
 * Create new selector to watch change on selectedAssessmentId.
 * Feel lines above, you can see where we create the const selectedId
 */
export const getSelectedId = createSelector(
    getAssessmentsState,
    selectedId
);

/**
 * This is the basics selectors that we can create using the adapter.
 * This is only possible if you are using @ngrx/entity. Without @ngrx/entity,
 * you have to create every selector you want.
 */
export const {
    selectIds: getAssessmentsIds,
    selectEntities: getAssessmentssEntities,
    selectAll: getAssessmentsAll,
    selectTotal: getAssessmentsTotal
} = adapter.getSelectors(getAssessmentsState);

/**
 * Create new selector to whatch changes on selectedId
 * and return the entity of that id
 */
export const getSelectedAssessment = createSelector(
    getAssessmentsEntitiesState,
    getSelectedId,
    (entities, id) => {
        return entities[id] || null
    }
)
