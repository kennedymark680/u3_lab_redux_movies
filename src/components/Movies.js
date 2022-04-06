import { connect } from 'react-redux'
import { LoadMovies } from '../store/actions/MovieActions'
import { useEffect } from 'react'
import { POSTER_PATH } from '../globals'
import { Link } from 'react-router-dom'

const mapStateToProps = ({ movieState }) => {
  return { movieState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () => dispatch(LoadMovies())
  }
}

const Movies = (props) => {
  useEffect(() => {
    props.fetchMovies()
  }, [])

  return (
    <div className="movies">
      {props.movieState.movies.map((movie) => (
        <div key={movie.id}>
          <Link to={`/${movie.id}`}>
            <h3>{movie.title}</h3>
            <img src={`${POSTER_PATH}${movie.backdrop_path}`} alt="poster" />
          </Link>
        </div>
      ))}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
