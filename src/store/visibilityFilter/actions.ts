import { SET_VISIBILITY_FILTER, VisibilityFilterAction, VisibilityFilterType } from './types';

export const setVisibilityFilter = (filter: VisibilityFilterType): VisibilityFilterAction => ({
    filter,
    type: SET_VISIBILITY_FILTER
});
