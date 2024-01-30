const movies =[{
  _id: '1',
}];
exports.getAll = () => {
  return movies.slice();
}
exports.create = (movieData) => {
  movieData._id = movies[movies.length - 1]._id + 1;
  movies.push(movieData);
}