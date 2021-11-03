import axios from 'axios'
import { url } from '../utils'

const ACTIONS = {
  FETCH_START: 'FETCH_START',
  FETCH_SUCCESS: 'FETCH_ERROR',
  FETCH_ERROR: 'FETCH_SUCCESS',
}

const fetchStart = () => ({ type: ACTIONS.FETCH_START })
const fetchSuccess = (result) => ({ type: ACTIONS.FETCH_SUCCESS, payload: result })
const fetchError = (error) => ({ type: ACTIONS.FETCH_ERROR, payload: error })

const getXKCD = () => (dispatch) => {
  dispatch(fetchStart())

  axios
    .get(url)
    .then((res) => {
      dispatch(fetchSuccess(res.data))
    })
    .catch((err) => {
      dispatch(fetchError(err.message))
    })
}

export { ACTIONS, getXKCD }
