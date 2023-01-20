
import { configureStore } from '@reduxjs/toolkit';
import bugReducer from './bugs';
import projectReducer from './projects'


// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
    return configureStore({ reducer: projectReducer });
}
