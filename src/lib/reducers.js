import { ACTIONS } from './actions'

const initialState = {
  xkcd: {
    month: '',
    year: '',
    safe_title: '',
    alt: '',
    img: '',
    title: '',
    day: '',
  },
  isFetch: false,
  error: '',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_START:
      return {
        ...state,
        xkcd: {},
        isFetching: true,
        error: '',
      }

    case ACTIONS.FETCH_SUCCESS:
      return {
        ...state,
        xkcd: action.payload,
        isFetching: false,
        error: '',
      }

    case ACTIONS.FETCH_ERROR:
      return {
        ...state,
        xkcd: {},
        isFetching: false,
        error: action.payload,
      }

    default:
      return state
  }
}

export { reducer }
