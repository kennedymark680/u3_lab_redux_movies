import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { LoadMoviesDetails } from '../store/actions/MovieActions'
import { POSTER_PATH } from '../globals'

const mapStateToProps = ({ movieDetailsState }) => {
  return { movieDetailsState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMoviesDetails: (id) => dispatch(LoadMoviesDetails(id))
  }
}

const MovieDetails = (props) => {
  let { id } = useParams()

  useEffect(() => {
    props.fetchMoviesDetails(id)
  }, [id])

  return (
    <div>
      <h1>{props.movieDetailsState.moviesDetails.title}</h1>
      <img
        src={`${POSTER_PATH}${props.movieDetailsState.moviesDetails.backdrop_path}`}
        alt="poster"
      />
      <h3>{props.movieDetailsState.moviesDetails.overview}</h3>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)
