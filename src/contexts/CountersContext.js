import React, { useReducer, createContext, useCallback, useEffect } from 'react';

export const CountersContext = createContext();

const COUNTER_ADD = 'COUNTER_ADD';
const COUNTER_INC = 'COUNTER_INC';
const COUNTER_DEC = 'COUNTER_DEC';
const COUNTER_FETCHING = 'COUNTER_FETCHING';
const COUNTER_FETCH_COMPLETE = 'COUNTER_FETCH_COMPLETE';
const COUNTER_FETCH_ERROR = 'COUNTER_FETCH_ERROR';

const initialState = {
  loading: false,
  error: null,
  counters: null
}

const counterReducer = (state, action) => {
  if (action.type === COUNTER_FETCHING) {
    return {
      ...state,
      error: null,
      loading: true
    }
  }

  if (action.type === COUNTER_FETCH_COMPLETE) {
    return {
      error: null,
      loading: false,
      counters: action.payload
    }
  }

  if (action.type === COUNTER_FETCH_ERROR) {
    return {
      error: action.payload,
      loading: false,
      counters: null
    }
  }

  if (action.type === COUNTER_ADD) {
    return {
      ...state,
      counters: [...state.counters, action.payload]
    }
  }

  if (action.type === COUNTER_INC) {
    return {
      ...state,
      counters: state.counters.map(counter => {
        if (counter.id === action.payload.id) {
          return { ...counter, count: counter.count + 1 };
        }
        return counter;
      })
    }
  }

  if (action.type === COUNTER_DEC) {
    return {
      ...state,
      counters: state.counters.map(counter => {
        if (counter.id === action.payload.id) {
          return { ...counter, count: counter.count - 1 };
        }
        return counter;
      })
    }
  }

  return state
}

export const CountersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const loadCounters =  async () => {
    console.log('hola loadCounters');
    dispatch({ type: COUNTER_FETCHING })
    try {
      const response = await fetch('/api/v1/counter')
      const data = await response.json()
  
      if (response.ok) {
        dispatch({ type: COUNTER_FETCH_COMPLETE, payload: data }) 
      } else {
        dispatch({ type: COUNTER_FETCH_ERROR })
      }
    } catch (error) {
      dispatch({ type: COUNTER_FETCH_ERROR })
    }

  }

  const addCounter = useCallback( async (title) => {
    if (!title) return
    const response = await fetch('/api/v1/counter', { 
      method: 'post', 
      body: JSON.stringify({title})
    })
    const data = await response.json()

    if (response.ok) dispatch({ type: COUNTER_ADD, payload: data })
  }, [dispatch])

  const incrementCounter = async (id) => {

      const body = { id }
      const response = await fetch('/api/v1/counter/inc', { 
        method: 'post', 
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(body) 
      })
      const data = await response.json()

      dispatch({ type: COUNTER_INC, payload: { id } });
    }
  const decrementCounter = 
    id => {
      dispatch({ type: COUNTER_DEC, payload: { id } });
    }

  useEffect(() => {
    loadCounters()
  }, [])

  return (
    <CountersContext.Provider value={{ state, addCounter, incrementCounter, decrementCounter, loadCounters }}>
      {children}
    </CountersContext.Provider>
  );
};