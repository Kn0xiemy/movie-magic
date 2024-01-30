const movies =[{
  _id: '1',
}];
exports.getAll = () => {
  return movies.slice();
}

exports.search = (title, genre, year) => {
  let movies = movies.slice();
  if (title) {
    movies = movies.filter(movie => movies.title.includes(title));
  }
  if (genre) {
    movies = movies.filter(movie => movies.genre === genre);
  }
  if (year) {
    movies = movies.filter(movie => movies.year === genre);
  }

  return movies;
}

exports.getOne = (movieId) => {
  return movies.find(movie => movie._id == movieId);

  return movie;
};

exports.create = (movieData) => {
  movieData._id = movies[movies.length - 1]._id + 1;
  movies.push(movieData);
} 