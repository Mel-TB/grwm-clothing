import { combineReducers } from 'redux';

import { userReducer } from './user/user.reducer';

export const rootReduceur = combineReducers({
	user: userReducer,
});
