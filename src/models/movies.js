class Movies {
    constructor(adult, backdropPath, favorite, genreIds, genres, homepage, id, originalLanguage, originalTitle, overview, popularity, posterPath, releaseDate, title, uid, video, voteAverage, voteCount, year){
        this.adult = adult;
        this.backdropPath = backdropPath;
        this.favorite = favorite;
        this.genreIds = genreIds;
        this.genres = genres;
        this.homepage = homepage;
        this.id = id;
        this.originalLanguage = originalLanguage;
        this.originalTitle = originalTitle;
        this.overview = overview;
        this.popularity = popularity;
        this.posterPath = posterPath;
        this.releaseDate = releaseDate;
        this.title = title;
        this.uid = uid;
        this.video = video;
        this.voteAverage = voteAverage;
        this.voteCount = voteCount;
        this.year = year;
    }
}

export default Movies;