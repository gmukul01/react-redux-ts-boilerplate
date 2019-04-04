import { SET_VISIBILITY_FILTER, VisibilityFilter, VisibilityFilterAction } from './types';

export const initialState: VisibilityFilter = 'SHOW_ALL';

export const visibilityFilter = (state: VisibilityFilter = initialState, action: VisibilityFilterAction): VisibilityFilter => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
};
