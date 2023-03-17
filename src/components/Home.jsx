import React, { useState } from 'react'
import { movieDetail } from '../utils'
import MovieList from './MovieList'
import Recommend from './Recommend'
import SearchMovie from './SearchMovie'

const Home = () => {
  const [hidden , setHidden] = useState(false)
  const [movieList, setMovieList] = useState(movieDetail)

  return (
    <div className='home'>
      {
        hidden ?  
        <Recommend movieList={movieList} setMovieList={setMovieList} /> :
        (
          <div className='home__findSomething'>
            <h2>Don't know what to watch?</h2>
            <button type='button' onClick={() => setHidden(!hidden)}>Find Something</button>
          </div>
        )
      }
      <SearchMovie />
      <MovieList movieList={movieList} setMovieList={setMovieList} />
    </div>
  )
}

export default Home