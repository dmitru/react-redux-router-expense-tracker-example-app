import * as constants from '../constants'

import api from '../api'


export function fetchEntries() {
  return (dispatch, getState) => {
    const { auth: { token } } = getState()
    dispatch({
      type: constants.ENTRIES_FETCH_REQUEST,
    })
    api.entries.getAll({ token })
      .then((res) => {
        const data = res.data
        dispatch({
          type: constants.ENTRIES_FETCH_SUCCESS,
          payload: data,
        })
      })
      .catch((err) => {
        dispatch({
          type: constants.ENTRIES_FETCH_FAILURE,
          payload: err.data,
        })
      })
  }
}
