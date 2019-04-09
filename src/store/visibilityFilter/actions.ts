import { SET_VISIBILITY_FILTER, VisibilityFilterType } from './types';

export const setVisibilityFilter = (filter: VisibilityFilterType) => ({
    filter,
    type: SET_VISIBILITY_FILTER
});
