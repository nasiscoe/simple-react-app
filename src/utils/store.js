import React, { useState, useEffect, createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  error: undefined
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      // dispatch actions to affect global state
      case 'SET_DUMMY': {
        const newState = { ...state, dummy: action.payload };
        return newState;
      }
      case 'THROW_ERROR': {
        console.log('error', action.payload);
        const newState = { ...state, error: action.payload };
        return newState;
      }
      default: {
        throw new Error();
      }
    };
  }, initialState);

  // Include anything in the provider state from props
  const providerState = {...state};
  return <Provider value={{ state: providerState, dispatch }}>{children}</Provider>;
};

StateProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export { store, StateProvider };