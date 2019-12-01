import cats from './Cats';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    cats: cats
})

export default rootReducer