import { ACTIONS } from './actions'

const initialState = {
  xkcd: {
    month: '11',
    num: 2536,
    link: '',
    year: '2021',
    news: '',
    safe_title: 'Wirecutter',
    transcript: '',
    alt: "This was always going to be a controversial Wirecutter post, but what really got them in trouble were their 'budget' and 'upgrade' picks.",
    img: 'https://imgs.xkcd.com/comics/wirecutter.png',
    title: 'Wirecutter',
    day: '1',
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
