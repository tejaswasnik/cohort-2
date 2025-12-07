var shows = [
  {
    title: "Stranger Things",
    seasons: "5 Seasons",
    genre: "Horror, Supernatural, Thriller",
    ratings: 8.6,
    poster:
      "url(https://image.tmdb.org/t/p/original/uKYUR8GPkKRCksczYDJb3pwZauo.jpg?__cpo=aHR0cHM6Ly9pbWFnZS50bWRiLm9yZw)",
    streaming: "NETFLIX",
    primary: "#e50914",
    secondary: "black",
  },
  {
    title: "Breaking Bad",
    seasons: "5 Seasons",
    genre: "Crime, Classic, Drama",
    ratings: 9.5,
    poster:
      "url(https://image.tmdb.org/t/p/original/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg)",
    streaming: "NETFLIX",
    primary: "#2b9b4f",
    secondary: "yellow",
  },
  {
    title: "Attack on Titan",
    seasons: "4 Seasons",
    genre: "Dark, Action, Mystery",
    ratings: 9.1,
    poster: "url(https://m.media-amazon.com/images/I/61t9ie31jgL.jpg)",
    streaming: "Amazon Prime Video",
    primary: "brown",
    secondary: "dark-red",
  },
  {
    title: "IT: Welcome to Derry",
    seasons: "1 Season",
    genre: "Horror, Supernatural, Thriller",
    ratings: 7.7,
    poster:
      "url(https://resizing.flixster.com/_NEVSfsqEjjW9f4SDGsczUdpyGA=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvNzVlYWY2NjAtOGY3Yi00MjNhLWFhZjQtZjE3OTY4YWFiNzMwLmpwZw==)",
    streaming: "JioHotstar",
    primary: "#b30000",
    secondary: "#222222",
  },
  {
    title: "The Boys",
    seasons: "4 Seasons",
    genre: "Dark, Action, Drama, Superhero",
    ratings: 8.6,
    poster: "url(https://cdn.europosters.eu/image/1300/86754.jpg)",
    streaming: "Amazon Prime Video",
    primary: "red",
    secondary: "black",
  },
  {
    title: "Pluribus",
    seasons: "1 Season",
    genre: "Science Fiction, Drama, Thriller",
    ratings: 8.4,
    poster:
      "url(https://m.media-amazon.com/images/M/MV5BOWNlM2E1MDMtYmI5MS00NDQ1LWI3NTctM2VlNjQ5OTAxYTNmXkEyXkFqcGc@._V1_.jpg)",
    streaming: "Apple TV+",
    primary: "black",
    secondary: "gold",
  },
];
var poster = document.querySelector("#poster");
var button = document.querySelector("button");
var title = document.querySelector("#title");
var seasons = document.querySelector("#seasons");
var genre = document.querySelector("#genre");
var ratings = document.querySelector("#ratings");
var streaming = document.querySelector("#streaming");
var body = document.querySelector("body");
var main = document.querySelector("main");
button.addEventListener("click", function () {
  var index = Math.floor(Math.random() * shows.length);
  poster.style.backgroundImage = shows[index].poster;
  title.innerHTML = shows[index].title;
  seasons.innerHTML = shows[index].seasons;
  genre.innerHTML = shows[index].genre;
  ratings.innerHTML = shows[index].ratings;
  streaming.innerHTML = shows[index].streaming;
  body.style.backgroundColor = shows[index].secondary;
  main.style.backgroundColor = shows[index].primary;
});
