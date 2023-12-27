import { createStore } from "redux";
import RootReducers from "./Redux/Reducers/Reducersmain";


const store = createStore(RootReducers)

export default store