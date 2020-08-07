import { combineReducers } from "redux";

import AuthReducer from "./AuthReducer";
import UtilReducer from "./UtilReducer";

const rootReducer = combineReducers({
    auth: AuthReducer,
    util: UtilReducer
})

export default rootReducer;