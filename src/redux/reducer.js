import {combineReducers} from "redux";
import postReducer from "./postReducer";
import {persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['posts']
}
// export const rootReducer = combineReducers({
//     posts:postReducer
// })
export const reducerRoot = combineReducers({
    posts:postReducer,
})
export const pReducer = persistReducer(persistConfig, reducerRoot);

export default persistReducer(persistConfig, reducerRoot);

