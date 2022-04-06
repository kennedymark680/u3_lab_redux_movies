const { GET_MOVIES_DETAILS } = require('../types')

const iState = {
  moviesDetails: ''
}

const MovieDetailsReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_MOVIES_DETAILS:
      return { ...state, moviesDetails: action.payload }
    default:
      return { ...state }
  }
}

export default MovieDetailsReducer
