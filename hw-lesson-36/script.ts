interface IMovie {
  id: number;
  title: string;
  year: number;
  released: string;
  runtime: string;
  genre: string[];
  director: string;
  writer: string;
  actors: string[];
  plot: string;
  country: string;
  poster: string;
  imdbRating: number;
  imdbVotes: number;
  type: string;
  boxOffice: string;
  production: string;
}

const movies: IMovie[] = [
  {
    id: 1,
    title: "Black Widow",
    year: 2021,
    released: "09 Jul 2021",
    runtime: "134 min",
    genre: ["Action", "Sci-Fi", "Adventure"],
    director: "Cate Shortland",
    writer: "Eric Pearson, Jac Schaeffer, Ned Benson",
    actors: ["Scarlett Johansson", "Florence Pugh", "David Harbour"],
    plot: "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",
    country: "United States",
    poster:
      "https://m.media-amazon.com/images/M/MVGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    imdbRating: 6.9,
    imdbVotes: 121932,
    type: "movie",
    boxOffice: "$138,027,361",
    production: "Marvel Studios",
  },
  {
    id: 2,
    title: "Harry Potter and the Deathly Hallows: Part 2",
    year: 2011,
    released: "15 Jul 2011",
    runtime: "130 min",
    genre: ["Adventure", "Drama", "Fantasy"],
    director: "David Yates",
    writer: "Steve Kloves, J.K. Rowling",
    actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
    plot: "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy.",
    country: "United Kingdom, United States",
    poster:
      "https://m.media-amazon.com/images/M/MXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    imdbRating: 8.1,
    imdbVotes: 790377,
    type: "movie",
    boxOffice: "$381,409,310",
    production: "Heyday Films, Moving Picture Company, Warner Bros.",
  },
  {
    id: 3,
    title: "Star Wars",
    year: 1977,
    released: "25 May 1977",
    runtime: "121 min",
    genre: ["Action", "Adventure", "Fantasy"],
    director: "George Lucas",
    writer: "George Lucas",
    actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
    plot: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot",
    country: "United States, United Kingdom",
    poster:
      "https://m.media-amazon.com/images/MkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    imdbRating: 8.6,
    imdbVotes: 1259440,
    type: "movie",
    boxOffice: "$460,998,507",
    production: "Lucasfilm Ltd.",
  },
  {
    id: 4,
    title: "Harry Potter and the Half-Blood Prince",
    year: 2009,
    released: "15 Jul 2009",
    runtime: "153 min",
    genre: ["Action", "Adventure", "Family"],
    director: "David Yates",
    writer: "Steve Kloves, J.K. Rowling",
    actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
    plot: "As Harry Potter begins his sixth year at Hogwarts.",
    country: "United Kingdom",
    poster:
      "https://m.media-amazon.com/images/M/MV5BwOTg2ODg1Mg@@._V1_SX300.jpg",
    imdbRating: 7.6,
    imdbVotes: 492245,
    type: "movie",
    boxOffice: "$302,305,431",
    production: "Heyday Films, Warner Bros.",
  },
  {
    id: 5,
    title: "Harry Potter and the Sorcerer's Stone",
    year: 2001,
    released: "16 Nov 2001",
    runtime: "152 min",
    genre: ["Adventure", "Family", "Fantasy"],
    director: "Chris Columbus",
    writer: "J.K. Rowling, Steve Kloves",
    actors: ["Daniel Radcliffe", "Rupert Grint", "Richard Harris"],
    plot: "An orphaned boy enrolls in a school of wizardry.",
    country: "United Kingdom, United States",
    poster:
      "https://m.media-amazon.com/images/M/MkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
    imdbRating: 7.6,
    imdbVotes: 684604,
    type: "movie",
    boxOffice: "$318,087,620",
    production: "1492 Pictures, Heyday Films, Warner Brothers",
  },
];

// TASK 1

const getGenres = (arr: IMovie[]): string[] => {
  let genres = arr.map(({genre}) => genre).flat();
  let genresSet = new Set<string>(genres);
  let filteredGenres = Array.from(genresSet);
  return filteredGenres;
};

console.log(getGenres(movies));

// TASK 2

const getActors = (arr: IMovie[]): string[] => {
  let actors = arr.map(({actors}) => actors).flat()
  let actorsSet = new Set<string>(actors);
  let filteredActors = Array.from(actorsSet)
  return filteredActors
}

console.log(getActors(movies))

// TASK 3

const sortMovies = (arr: IMovie[]): IMovie[] => {
  return arr.sort((a,b) => a.imdbRating < b.imdbRating ? 1 : -1)
}

console.log(sortMovies(movies))

// TASK 4 

const getNewMovies = (arr: IMovie[]): {}[] => {
    let newMovies = arr.map(({ id, title, released, plot }) => ({ id, title, released, plot }))
    return newMovies
}

console.log(getNewMovies(movies))

// TASK 5

const findYear = (arr: IMovie[], num: number): IMovie[] => {
  return arr.filter(({year}) => year === num)
}

console.log(findYear(movies, 2021))

// TASK 6

const findTitle = (arr: IMovie[], str: string): IMovie[] => {
  return arr.filter(({title}) => title.includes(str))
}

console.log(findTitle(movies, 'Star'))

// TASK 7

const findTitleOrPlot = (arr: IMovie[], str: string): IMovie[] => {
  return arr.filter(({title, plot}) => title.includes(str) || plot.includes(str))
}

console.log(findTitleOrPlot(movies, 'Star'))

// TASK 8

type values = string | number
type keys = keyof IMovie;

const findSameFields = (arr: IMovie[], field: keys, str: values): IMovie[] => {
    return arr.filter(e => e[field] === str)
}

console.log(findSameFields(movies, 'year', 2011))