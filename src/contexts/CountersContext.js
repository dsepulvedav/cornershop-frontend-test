import React, { useReducer, createContext, useCallback, useEffect } from 'react';

export const CountersContext = createContext();

const COUNTER_ADD = 'COUNTER_ADD';
const COUNTER_INC = 'COUNTER_INC';
const COUNTER_DEC = 'COUNTER_DEC';
const COUNTER_FETCHING = 'COUNTER_FETCHING';
const COUNTER_FETCH_COMPLETE = 'COUNTER_FETCH_COMPLETE';
const COUNTER_FETCH_ERROR = 'COUNTER_FETCH_ERROR';
const COUNTER_SELECT = 'COUNTER_SELECT';
const COUNTER_DESELECT = 'COUNTER_DESELECT';
const COUNTER_DELETE = 'COUNTER_DELETE';
const COUNTER_SEARCH_CHANGED = 'COUNTER_SEARCH_CHANGED';
const COUNTER_SEARCH_FOCUSED = 'COUNTER_SEARCH_FOCUSED';

const initialState = {
  loading: false,
  error: null,
  counters: [], 
  searchBarFocused: false,
  searchBarTerm: null,
  selectedCounters: []
}

const counterReducer = (state, action) => {
  if (action.type === COUNTER_SEARCH_CHANGED) {
    return {
      ...state,
      searchBarTerm: action.payload.searchTerm
    }
  }

  if (action.type === COUNTER_SEARCH_FOCUSED) {
    return {
      ...state,
      searchBarFocused: action.payload.searchBarFocused
    }
  }

  if (action.type === COUNTER_DELETE) {
    return {
      ...state,
      counters: [...state.counters.filter(item => item.id !== action.payload.id)],
      selectedCounters: [...state.selectedCounters.filter(item => item.id !== action.payload.id)]
    }
  }

  if (action.type === COUNTER_SELECT) {
    return {
      ...state,
      selectedCounters: [...state.selectedCounters, action.payload]
    }
  }

  if (action.type === COUNTER_DESELECT) {
    return {
      ...state,
      selectedCounters: [...state.selectedCounters.filter(item => item.id !== action.payload.id)]
    }
  }

  if (action.type === COUNTER_FETCHING) {
    return {
      ...state,
      error: null,
      loading: true
    }
  }

  if (action.type === COUNTER_FETCH_COMPLETE) {
    return {
      ...state,
      error: null,
      loading: false,
      counters: action.payload
    }
  }

  if (action.type === COUNTER_FETCH_ERROR) {
    return {
      ...state,
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

  const setSearchTerm = (query) => {
    dispatch({ type: COUNTER_SEARCH_CHANGED, payload: { searchTerm: query }})
  }

  const setSearchFocused = (isFocused) => {
    dispatch({ type: COUNTER_SEARCH_FOCUSED, payload: { searchBarFocused: isFocused }})
  }

  const loadCounters =  async () => {
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

  const selectCounter = useCallback(async (counter) => {
    dispatch({ type: COUNTER_SELECT, payload: counter })
  })

  const deselectCounter = useCallback(async (counter) => {
    dispatch({ type: COUNTER_DESELECT, payload: counter })
  })

  const addCounter = useCallback( async (title) => {
    if (!title) return
    const response = await fetch('/api/v1/counter', { 
      method: 'post', 
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({title})
    })
    if (!response.ok) return false
    
    const data = await response.json()
    dispatch({ type: COUNTER_ADD, payload: data })
    return true
  }, [dispatch])

  const incrementCounter = useCallback(async (id) => {
    const body = { id }
    const response = await fetch('/api/v1/counter/inc', { 
      method: 'post', 
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(body) 
    })

    if (!response.ok) return false
    dispatch({ type: COUNTER_INC, payload: { id } });
    return true
  }, [dispatch])

  const decrementCounter = useCallback(async (id) => {
    const body = { id }
    const response = await fetch('/api/v1/counter/dec', { 
      method: 'post', 
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(body) 
    })

    if (!response.ok) return false
    dispatch({ type: COUNTER_DEC, payload: { id } });
    return true
  })

  const deleteCounter = useCallback(async (id) => {
    const body = { id }
    const response = await fetch('/api/v1/counter', { 
      method: 'delete', 
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(body) 
    })

    if (!response.ok) return false
    dispatch({ type: COUNTER_DELETE, payload: { id } })
    return true
  })

  useEffect(() => {
    loadCounters()
  }, [])

  return (
    <CountersContext.Provider value={{ 
      state, 
      addCounter, 
      incrementCounter, 
      decrementCounter, 
      loadCounters,
      selectCounter,
      deselectCounter,
      deleteCounter,
      setSearchTerm,
      setSearchFocused
    }}>
      {children}
    </CountersContext.Provider>
  );
};