import {createStore} from 'redux'

import {bookReducer} from './reducers';

export default createStore(bookReducer);

