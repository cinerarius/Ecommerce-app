import {
  onAuthStateChangeListner,
  createUserdocumentFromAuth,
} from "../utils/firebase/firebase.utils";

import { createContext, useState, useEffect, useReducer } from "react";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPE = {
  SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const userReducer = (state, action) => {
  const { type, payload } = action


switch(type) {
  case USER_ACTION_TYPE.SET_CURRENT_USER:
  return {
    ...state,
    currentUser: payload
  }
  default: 
  throw new Error(`Unhandled type ${type} in userReducer`)
}
}

const INNITIAL_STATE = {
  currentUser: null
}

export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null);
  const [{currentUser}, dispatch] = useReducer(userReducer, INNITIAL_STATE)

  const setCurrentUser = (user) => {
    dispatch({ type: USER_ACTION_TYPE.SET_CURRENT_USER, payload: user })
  }
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListner((user) => {
      if (user) {
        createUserdocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

/*
const userReducer = () => {
  return {
    currentUser:
  }
}
*/