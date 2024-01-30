const movies =[{
  _id: '1',
}];
exports.getAll = () => {
  return movies.slice();
}

exports.getOne = (movieId) => {
  return movies.find(movie => movie._id == movieId);

  return movie;
};

exports.create = (movieData) => {
  movieData._id = movies[movies.length - 1]._id + 1;
  movies.push(movieData);
} 