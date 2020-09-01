import { combineReducers } from "redux";
import { apiResultReducer } from "./apiResultReducer";
export const rootReducer = combineReducers({ data: apiResultReducer });
