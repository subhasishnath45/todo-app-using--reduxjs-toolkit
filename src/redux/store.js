import {configureStore} from '@reduxjs/toolkit';
import todoReducer from './todoSlice'
// This creates a Redux store
export default configureStore({
    reducer: {
        // we will add our reducers here.
        todos:todoReducer
    }
});