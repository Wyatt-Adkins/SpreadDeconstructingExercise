// 1a
const MCUShows = [`Loki`, `MoonKnight`];
// 1b
const StarWarsShows = [`The Mandolorian`, `The Book Of Boba Fett`];
// 1c
const DisneyPlusShows = [...MCUShows, ...StarWarsShows];
// 1d
console.log (DisneyPlusShows)

// finished with 1

// 2a
const netflixMovies = {
    Action: `Extraction`,
    Crime: `The Irishman`
};
// 2b
const amazonPrimeMovies = {
    Action: `The Tomorrow War`,
    Drama: `One Night In Miami`
};
// 2c
const streamingMovies = {
    ...amazonPrimeMovies, ...netflixMovies, Musical: `Hamilton`,
};
// 2d
console.log (streamingMovies)

// finished with 2

// 3a
const disneyjunior = [`Mickey Mouse Clubhouse`, `Spidey and his amazing friends`];
// 3b
const [Mickey, Spidey] = disneyjunior;
// 3c
console.log (disneyjunior)
console.log (Mickey,Spidey)

// finished with 3

// 4a
const avengers = {
    Warmachine: `James Rhodes`,
    theHulk: `Bruce Banner`
};
// 4b
const {Warmachine,thehulk} = avengers;
// 4c 
console.log (Warmachine,thehulk);
// 4d 
const MoreAvengers = {
    blackWidow:'Natashsa Romanoff',
    hawkeye:'Clint Barton',
    ironman:'Tony Stark'
};
// 4e
const {blackwidow:nat,...others} = MoreAvengers;
// 4f
console.log (nat,others)

// bonus

const bonus = {
    first:[1,2,3],
    second:[4,5,6],
    third:[7,8,9]
};

// 5a
const all = [...bonus.first, ...bonus.second, ...bonus.third];
// 5b
const {one,two,three,four,five,six,seven,eight,nine} = all;


