import React, {createContext, useContext, useReducer} from 'react';
export const StateContext = createContext();
export const StateProvider = ({reducer, myInitialState, children}) =>(
  <StateContext.Provider value={useReducer(reducer, myInitialState)}>
    {children}
  </StateContext.Provider>
);
export const useStateValue = () => useContext(StateContext);