import { createSelector, createFeatureSelector } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { Assessment } from "../../models/assessment";
import * as assessment from '../actions/assessmentActions';

// create new state based on EntityState
export interface State extends EntityState<Assessment> {
    selectedTodoId: number | null;
}

// create new adapter
export const adapter: EntityAdapter<Assessment> = createEntityAdapter<Assessment>({
    selectId: (assessment: Assessment) => assessment.id
});

// set the initial state of the app
export const initialState: State = adapter.getInitialState({
    selectedTodoId: null,
    ids: []
})

// this function is called after every execution of a action
export function reducer(
    state = initialState,
    action: assessment.Actions
): State {

    switch(action.type) {

        case assessment.ADD_QRTP_SUCCESS: {
            return adapter.addOne(action.assessment, state);
        }

        case assessment.EDIT_QRTP: {
            return adapter.updateOne({
                id: action.id,
                changes: action.changes
            }, state);
        }

        case assessment.DELETE_QRTP: {
            return adapter.removeOne(action.id, state);
        }

        case assessment.COMPLETE_QRTP: {
            return adapter.updateOne({
                id: action.id,
                changes: { complete: !state.entities[action.id].complete }
            }, state);
        }

        case assessment.SELECT_QRTP: {
            return {
                ...state,
                selectedTodoId: action.id
            };
        }

        default: {
            return state;
        }
    }

}

export const selectedId = (state: State) => state.selectedTodoId;

// selectors
export const getTodosState = createFeatureSelector<State>('assessments');

/**
 * Create new selector to watch changes on entities
 */
export const getTodosEntitiesState = createSelector(
    getTodosState,
    state => state.entities
);

/**
 * Create new selector to watch change on selectedTodoId.
 * Feel lines above, you can see where we create the const selectedId
 */
export const getSelectedId = createSelector(
    getTodosState,
    selectedId
);

/**
 * This is the basics selectors that we can create using the adapter.
 * This is only possible if you are using @ngrx/entity. Without @ngrx/entity,
 * you have to create every selector you want.
 */
export const {
    selectIds: getTodosIds,
    selectEntities: getTodosEntities,
    selectAll: getTodosAll,
    selectTotal: getTodosTotal
} = adapter.getSelectors(getTodosState);

/**
 * Create new selector to whatch changes on selectedId
 * and return the entity of that id
 */
export const getSelectedTodo = createSelector(
    getTodosEntitiesState,
    getSelectedId,
    (entities, id) => {
        return entities[id] || null
    }
)
