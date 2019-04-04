import { setVisibilityFilter } from './actions';
import { initialState, visibilityFilter } from './reducer';

describe('Todos reducer', () => {
    it('should handle SET_VISIBILITY_FILTER action', () => {
        expect(visibilityFilter(initialState, setVisibilityFilter('SHOW_ACTIVE'))).toEqual('SHOW_ACTIVE');
    });
});
