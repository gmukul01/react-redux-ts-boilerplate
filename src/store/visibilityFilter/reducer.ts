import { Reducer } from 'redux';
import { SET_VISIBILITY_FILTER, VisibilityFilterAction, VisibilityFilterType } from './types';

export const initialState: VisibilityFilterType = 'SHOW_ALL';

export const visibilityFilter: Reducer<VisibilityFilterType, VisibilityFilterAction> = (state = initialState, action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
};
