import reducers from "./reducers";
import {createStore,applyMiddleware,compose} from 'redux'
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {composeWithDevTools} from "redux-devtools-extension";
const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2 // 查看 'Merge Process' 部分的具体情况
}

// @ts-ignore
const myPersistReducer = persistReducer(persistConfig, reducers)
const store =createStore(myPersistReducer);
export const persistor = persistStore(store)
export default store