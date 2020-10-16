import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromReducers from '../reducers/assessmentReducers'

// selectors
export const getAssessmentsState = createFeatureSelector<fromReducers.State>('assessments');

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
    fromReducers.selectedId
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
} = fromReducers.adapter.getSelectors(getAssessmentsState);

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
