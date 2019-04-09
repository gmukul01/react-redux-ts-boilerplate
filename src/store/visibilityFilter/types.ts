import { Action } from 'redux';

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export type VisibilityFilterType = 'SHOW_ALL' | 'SHOW_COMPLETED' | 'SHOW_ACTIVE';

export interface VisibilityFilterAction extends Action {
    type: typeof SET_VISIBILITY_FILTER;
    filter: VisibilityFilterType;
}
