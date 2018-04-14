import { combineReducers } from 'redux';
import bookReducer from '../reducers/book_reducer'
import ActiveBook from '../reducers/active-book-reducer'
const rootReducer = combineReducers({
 books:bookReducer,
    activeBook:ActiveBook
});

export default rootReducer;
