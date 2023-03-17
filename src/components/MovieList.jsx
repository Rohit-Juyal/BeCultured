import { BiCheckCircle } from 'react-icons/bi'
import { MdAddCircleOutline } from 'react-icons/md'
import { AiOutlineInfoCircle } from 'react-icons/ai'

const MovieList = ({ movieList, setMovieList }) => {

  const updateSeen = (e) => {
    const index = e.currentTarget.id
    const newList = [...movieList]
    newList[index].seen = !newList[index].seen
    setMovieList(newList)
  }

  return (
    <div className='movieList'>
      <div className='movieList__heading'>
        <h4>Movie Name</h4>
        <div className='movieList__score--heading'>
          <h4>Movie Score</h4>
          <button><AiOutlineInfoCircle /></button>
        </div>
        
      </div>
      {
          movieList.map((value) => (
            <div className='movieList__detail' key={value.id}>
              <p className='name'>
                {
                  value.seen ? 
                  <button id={value.id} onClick={updateSeen}>
                    <BiCheckCircle color='#0FA958' />
                  </button> : 
                  <button id={value.id} onClick={updateSeen}>
                    <MdAddCircleOutline color='#699BF7' />
                  </button> 
                }
                {value.movie}
              </p>
              <p className='score'>52%</p>
            </div>  
          ))
        }
    </div>
  )
}

export default MovieList