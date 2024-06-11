import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function MovieDetail () {
  const { id } = useParams();
  const [ movie, setMovie ] = useState({});

  const getMovie = async() => {
    const response = await fetch(`https://yts.mx/api/v2/list_movies.json?movie_id=${id}`);
    const json = await response.json();

    setMovie({...json.data.movies})
  }

  useEffect(()=>{
    getMovie();
  },[])

  return (
    <div>
      detail
    </div>
  );
}

export default MovieDetail;
// https://yts.mx/api/v2/list_movies.json?movie_id=