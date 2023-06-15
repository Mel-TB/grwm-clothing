import { compose, createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';

import { rootReduceur } from './root-reducer';

const loggerMiddlewar = (store) => (next) => (action) => {
	if (!action.type) {
		return next(action);
	}

	console.log('type', action.type);
	console.log('payload', action.payload);
	console.log('currentState', store.getState());

	next(action);
	console.log('next state: ', store.getState());
};

const middleWares = [loggerMiddlewar];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReduceur, undefined, composedEnhancers);
