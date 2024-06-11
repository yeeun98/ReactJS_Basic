import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MovieStyle from './Movie.module.css'

function MovieItem({ id, coverImg, title, title_long, genres, summary }) {
  return (
    <div className={ MovieStyle.item }>
      <img src={coverImg} alt={`${title}`} />
      <Link to={`/movie/${id}`}>{title_long}</Link>
      <ul>
        {
          genres.map((g, idx) => (<li key={idx}>{g}</li>))
        }
      </ul>
      <p>{summary}</p>
    </div>
  );
}

MovieItem.protoTypes = {
  id: PropTypes.number,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  title_long: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  summary: PropTypes.string.isRequired,
};

function Movie () {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async() => {
    const response = await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year');
    const json = await response.json();

    setMovies([...json.data.movies])
    setLoading((current) => !current);
  }

  useEffect(()=>{
    getMovies();
  },[])

  return (
    <div>
      { loading ? <h1>Loading...</h1> : 
        <div>
          <h1 className={ MovieStyle.title }>Movie List</h1>
          <section className={ MovieStyle.list_wrap }>
            {
              movies.map((v) => (
                <MovieItem
                  id={v.id}
                  key={v.id}
                  coverImg={v.medium_cover_image}
                  title={v.title}
                  title_long={v.title_long}
                  genres={v.genres}
                  summary={v.summary}
                />
              ))
            }
          </section>
        </div>
      }
    </div>
  );
}

export default Movie;

// [docs] https://yts.mx/api
// https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year