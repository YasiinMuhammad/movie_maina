const REACT_APP_TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const requests = {
  fetchTrending: `/trending/all/week?api_key=${REACT_APP_TMDB_API_KEY}&language=es-US`,
  fetchTopRated: `/movie/top_rated?api_key=${REACT_APP_TMDB_API_KEY}&language=es-US`,
  fetchAction: `/discover/movie?api_key=${REACT_APP_TMDB_API_KEY}&with_genres=28`,
  fetchComedy: `/discover/movie?api_key=${REACT_APP_TMDB_API_KEY}&with_genres=35`,
  fetchHorror: `/discover/movie?api_key=${REACT_APP_TMDB_API_KEY}&with_genres=27`,
  fetchRomance: `/discover/movie?api_key=${REACT_APP_TMDB_API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${REACT_APP_TMDB_API_KEY}&with_genres=99`,
};

export default requests;
