import { Route, Routes } from 'react-router-dom'
import './styles/App.css'
import Movies from './components/Movies'
import MovieDetails from './components/MovieDetails'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  )
}

export default App
