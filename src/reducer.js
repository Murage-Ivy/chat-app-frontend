import {
    combineReducers
} from "redux";
import {
    signupReducer
} from "./components/signup/signupslice";


const reducer = combineReducers({
    signedUser: signupReducer
})

export default reducer;