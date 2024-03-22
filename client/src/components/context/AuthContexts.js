import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

//Creating Initial State
const INITIAL_STATE = {
  user: null,
  isFetching: false,
  error: false,
};

//Creating Context
export const AuthContext = createContext(INITIAL_STATE);

//Creating a custom  provider hook
export const AuthcontextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
console.log(state?.user)
  return (
    <AuthContext.Provider
      value={{
        user: state?.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
