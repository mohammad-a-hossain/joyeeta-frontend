
import categoryReducer from "./categoryReducer"
import { combineReducers } from "redux";
import productReducer from "./productReducer";
import authReducer from "./authReducer";


const rootReducer = combineReducers({

    category :categoryReducer,
    product  :productReducer,
    auth     :authReducer,

})

export default rootReducer