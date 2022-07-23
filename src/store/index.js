import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from './../reducers/index';
import thunk from "redux-thunk";


const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)) )

//console.log(store)
export default store