import { SET_VISIBILITY_FILTER, VisibilityFilter, VisibilityFilterAction } from './types';

export const setVisibilityFilter = (filter: VisibilityFilter): VisibilityFilterAction => ({
    filter,
    type: SET_VISIBILITY_FILTER
});
