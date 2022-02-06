import { useEffect, useReducer } from "react"

const initialState = {
    data: null,
    loading: true,
    error: null
}

const fetchReducer = (state, action) => {
    if (action.type === 'LOADING') {
        return initialState
    }

    if (action.type === 'RESPONSE_COMPLETE') {
        return {
            data: action.payload.data,
            loading: false,
            error: null
        }
    }

    if (action.type === 'ERROR') {
        return {
            data: null,
            loading: false,
            error: action.payload.error
        }
    }

    return state
}

export const useFetch = (url, method = 'get') => {
    const [state, dispatch] = useReducer(fetchReducer, initialState)

    useEffect(() => {
        dispatch({ type: 'LOADING'})

        const fetchUrl = async () => {
            try {
                const response = await fetch(url, { method: method})
                const data = await response.json()
                dispatch({ type: 'RESPONSE_COMPLETE', payload: { data } })
            } catch (error) {
                dispatch({ type: 'ERROR', payload: { error }})
            }
        }

        fetchUrl()
    }, [])

    return [state.data, state.loading, state.error]

}