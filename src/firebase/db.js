import firebase from './config';

const firestore = firebase.firestore();


export const addData = async (movie) => {
    try {
        await firestore.collection('movies').doc(movie.id.toString()).set({
            adult: movie.adult,
            backdropPath: movie.backdropPath,
            favorite: movie.favorite,
            genreIds: movie.genreIds,
            genres: movie.genres,
            homepage: movie.homepage,
            id: movie.id,
            originalLanguage: movie.originalLanguage,
            originalTitle: movie.originalTitle,
            overview: movie.overview,
            popularity: movie.popularity,
            posterPath: movie.posterPath,
            releaseDate: movie.releaseDate,
            title: movie.title,
            uid: movie.uid,
            video: movie.video,
            voteAverage: movie.voteAverage,
            voteCount: movie.voteCount,
            year: movie.year,
        })
    } catch (error) {
        console.log(error)
        return (null)
    }
}

export const getData = async (id) => {
    try {
        const movies = await firestore.collection('movies').doc(id)
        const data = await movies.get()
        return data.data() || null
    } catch (error) {
        return (null)
    }
}

export const updateData = async (movie) => {
    try {
        console.log(movie)
        const movies = await firestore.collection('movies').doc(movie.id.toString())
        console.log("achou")
        console.log(movies)
        await movies.update({
            adult: movie.adult,
            backdropPath: movie.backdropPath,
            favorite: movie.favorite,
            genreIds: movie.genreIds,
            genres: movie.genres,
            homepage: movie.homepage,
            id: movie.id,
            originalLanguage: movie.originalLanguage,
            originalTitle: movie.originalTitle,
            overview: movie.overview,
            popularity: movie.popularity,
            posterPath: movie.posterPath,
            releaseDate: movie.releaseDate,
            title: movie.title,
            uid: movie.uid,
            video: movie.video,
            voteAverage: movie.voteAverage,
            voteCount: movie.voteCount,
            year: movie.year,
        })
    } catch (error) {
        console.log(error)
    }
}

export const deleteData = async (id) => {
    try {
        await firestore.collection('movies').doc(id).delete();
    } catch (error) {
        console.log(error)
    }
}