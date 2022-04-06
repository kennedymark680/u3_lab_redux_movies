import { GET_MOVIES, GET_MOVIES_DETAILS } from '../types'
import { GetMovies, GetMovieDetails } from '../../services/MoviesService'

export const LoadMovies = () => {
  return async (dispatch) => {
    try {
      const movies = await GetMovies()

      dispatch({
        type: GET_MOVIES,
        payload: movies
      })
    } catch (error) {
      throw error
    }
  }
}

export const LoadMoviesDetails = (id) => {
  return async (dispatch) => {
    try {
      const movieDetails = await GetMovieDetails(id)

      dispatch({
        type: GET_MOVIES_DETAILS,
        payload: movieDetails
      })
    } catch (error) {
      throw error
    }
  }
}
