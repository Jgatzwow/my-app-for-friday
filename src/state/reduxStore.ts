import { combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./reducers/authReducer";
import { profileReducer } from "./reducers/profileReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
});

type AppStateType = ReturnType<typeof store.getState>;
export const store = legacy_createStore(rootReducer);

// @ts-ignore
window.store = store;
