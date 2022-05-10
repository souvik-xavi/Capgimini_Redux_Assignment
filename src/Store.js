import {configureStore} from '@reduxjs/toolkit';
import ColorReducer from './reducers/ColorReducer';

export default configureStore({
    reducer: ColorReducer
})