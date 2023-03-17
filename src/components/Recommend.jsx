import { useEffect, useState } from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'

const Recommend = ( { movieList, setMovieList }) => {
    const [randomMovie, setRandomMovie] = useState([])
   
    const randomIndex = () => {
        return Math.floor(Math.random() * movieList.length)
    }

    const seenClick = () => {
        let newList = [...movieList]
        
        movieList.map((element) => {

            if(element.movie === randomMovie.movie) {
                newList[element.id].seen = true
            }
        })
        setMovieList(newList)
        fetchRandomMovie()      
    }

    const fetchRandomMovie = () => {
        setRandomMovie(movieList[randomIndex()])
    }

    useEffect(() => {
        fetchRandomMovie()
    }, [])

  return (
    <div className='recommend'>
        <h2>We recommend</h2>
        <div className="recommend__movie">
            <h3>{randomMovie.movie}</h3>
            <p>Movie Score - 52% <AiOutlineInfoCircle /> </p>
        </div>

        <div className="recommend__buttons">
            <button className='skip' onClick={() => fetchRandomMovie()}>Skip</button>
            <button className='seen' onClick={() => seenClick()}>Seen it!</button>
        </div>
    </div>
  )
}

export default Recommend