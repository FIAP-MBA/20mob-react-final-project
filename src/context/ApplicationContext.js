import React, { useState, createContext, useEffect, useContext } from 'react';
import fire from '../firebase/config';
import Movies from '../models/movies';

const ApplicationContext = createContext({});
const firestore = fire.firestore();

export function ApplictionState({ children }) {
  const [currentUser, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(true);
  const [loading, setLoading] = useState(false);
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [addorupdate, setAddOrUpdate] = useState('');
  const [movie, setMovie] = useState([])
  const [hiddenMenu, setHiddenMenu] = useState(true);
  const [activeLink, setActiveLink] = useState("Home");
  const [showPagination, setShowPagination] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [popularMovies, setPopularMovies] = useState([]);
  const [favoriteLogin, setFavoriteLogin] = useState(false);

  const API_KEY = "3fdab48e2bddf5d597050debe64abb1c";
  let uid = null

  const clearError = () => {
    setEmailError('');
    setPasswordError('');
    console.log("clearError")
  }

  const clearInputs = () => {
    setUser('');
    setEmail('');
    setPassword('');
    console.log("clearInputs")
  }

  const handleSignup = async () => {
    console.log("handleSignup")
    setLoading(true)
    clearError();
    await fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            setLoading(false)
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            setLoading(false)
            break;
          default:
            setPasswordError("enviado2");
            setLoading(false)
            break;
        }
      });
  }

  const handleLogin = () => {
    console.log("handleLogin")
    setLoading(true)
    clearError();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        uid = fire.auth()
        console.log(uid)
        setFavoriteLogin(true)
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            setLoading(false)
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            setLoading(false)
            break;
          default:
            setPasswordError("enviado2");
            setLoading(false)
            break;
        }
      });
  };

  const handleLogout = () => {
    console.log("handleLogout")
    setUser(null);
    setFavoriteMovies([])
    return fire.auth()
      .signOut()
      .then(() => {
        setUser(null);
      });
  }

  useEffect(() => {
    console.log("useEffct auth change")
    const unsubscribe = fire.auth().onAuthStateChanged(user => {
      if (user) {
        clearInputs()
        uid = user.uid
        setUser(user)
        setFavoriteLogin(true)
        setLoading(false)
      } else {
        setUser(null);
        setLoading(false)
      }
    });

    return () => unsubscribe();
  }, []);

  const getAllMovieFirebase = async () => {
    console.log("getAllMovieFirebase")
    try {
      const response = await firestore.collection('movies')
        .where("uid", "array-contains", currentUser.uid || uid)
      const data = await response.get();

      let array = []
      
      data.forEach(doc => {
        const moviesFirebase = new Movies(
          doc.data().adult,
          doc.data().backdropPath,
          doc.data().favorite,
          doc.data().genreIds,
          doc.data().genres,
          doc.data().homepage,
          doc.data().id,
          doc.data().originalLanguage,
          doc.data().originalTitle,
          doc.data().overview,
          doc.data().popularity,
          doc.data().posterPath,
          doc.data().releaseDate,
          doc.data().title,
          doc.data().uid,
          doc.data().video,
          doc.data().voteAverage,
          doc.data().voteCount,
          doc.data().year
        );

        array.push(moviesFirebase);

      });


      setFavoriteMovies(array.filter(f => f.favorite === true))

      setAddOrUpdate('inicio')
    } catch (error) {
      console.log(error)
      setFavoriteMovies(null)
    }
  }

  const addData = async (movie) => {
    console.log("addData")
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
      setAddOrUpdate('add')
    } catch (error) {
      console.log(error)
      return (null)
    }
  }

  const updateData = async (movie) => {
    console.log("updateData")
    try {
      const movies = await firestore.collection('movies').doc(movie.id.toString())
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
      setAddOrUpdate('update')
    } catch (error) {
      console.log(error)
    }
  }

  const getData = async (id) => {
    console.log("getData")
    try {
      const movies = await firestore.collection('movies').doc(id)
      const data = await movies.get()
      setAddOrUpdate('one')
      return data.data() || null
    } catch (error) {
      return (null)
    }
  }

  useEffect(() => {
    console.log("useEffct getAllMovieFirebase")
    getAllMovieFirebase()
  }, [addorupdate, uid, loading]);

  const getAllMoviesApi = async () => {
    console.log("getAllMoviesApi")
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=${currentPage}`
    );
    const data = await response.json();

    let array = [];
    let list = []
    data.results.forEach(doc => {
      const movies = new Movies(
        doc.adult || false,
        doc.backdrop_path || "",
        doc.favorite || false,
        doc.genre_ids || [],
        doc.genres || "",
        doc.homepage || "",
        doc.id || "0",
        doc.original_language || "",
        doc.original_title || "",
        doc.overview || "",
        doc.popularity || "",
        `https://image.tmdb.org/t/p/w400${doc.poster_path}`,
        doc.release_date || "",
        doc.title || "",
        doc.uid || [],
        doc.video || false,
        doc.vote_average || "",
        doc.vote_count || "",
        doc.year || ""
      );

      array.push(movies);
    });

    console.log(favoriteMovies)
    if(favoriteMovies !== null) {
    

    array.forEach(a => {
      if (favoriteMovies.filter(f => f.id === a.id).length > 0) {
        const movies1 = new Movies(
          a.adult,
          a.backdropPath,
          true,
          a.genreIds,
          a.genres,
          a.homepage,
          a.id,
          a.originalLanguage,
          a.originalTitle,
          a.overview,
          a.popularity,
          a.posterPath,
          a.releaseDate,
          a.title,
          a.uid,
          a.video,
          a.voteAverage,
          a.voteCount,
          a.year
        );

        list.push(movies1);
      } else {
        const movies2 = new Movies(
          a.adult,
          a.backdropPath,
          a.favorite,
          a.genreIds,
          a.genres,
          a.homepage,
          a.id,
          a.originalLanguage,
          a.originalTitle,
          a.overview,
          a.popularity,
          a.posterPath,
          a.releaseDate,
          a.title,
          a.uid,
          a.video,
          a.voteAverage,
          a.voteCount,
          a.year
        );

        list.push(movies2);
      }
    })
    console.log(list)
  }
    
    if (search.trim() === "") {
      if (list.length > 0) {
        setMovies(list)
      } else {
        setMovies(array);
      }
    }
  };

  const getMovieApi = async (movieId) => {
    console.log("getMovieApi")
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=pt-BR`
    );
    const data = await response.json();
    
      setMovie(data)
  };

  const handleSearch = async (e) => {
    console.log("handleSearch")
    e.preventDefault();
    if (search.trim() === "") {
      return;
    }
    const searchResponse = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=pt-BR&query=${search}&page=${currentPage}`
    );
    const searchData = await searchResponse.json();

    let array = [];
    searchData.results.forEach(doc => {
      const movies = new Movies(
        doc.adult || false,
        doc.backdrop_path || "",
        doc.favorite || false,
        doc.genre_ids || [],
        doc.genres || "",
        doc.homepage || "",
        doc.id || "0",
        doc.original_language || "",
        doc.original_title || "",
        doc.overview || "",
        doc.popularity || "",
        `https://image.tmdb.org/t/p/w400${doc.poster_path}`,
        doc.release_date || "",
        doc.title || "",
        doc.uid || [],
        doc.video || false,
        doc.vote_average || "",
        doc.vote_count || "",
        doc.year || ""
      );

      array.push(movies);
    });

    setMovies(array || null);
    setShowPagination(false);
  };

  const newPage = (direction) => {
    console.log("newPage")
    if (direction === "next") {
      setCurrentPage(currentPage + 1);
      setIsLoading(true);
    } else if (direction === "previous" && currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getPopularMovies = async () => {
    console.log("getPopularMovies")
    const popularMoviesResponse = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=3`
    )
    const popularMoviesData = await popularMoviesResponse.json();

    let array = [];
    let listPopular = []
    popularMoviesData.results.forEach(doc => {
      const movies = new Movies(
        doc.adult || false,
        doc.backdrop_path || "",
        doc.favorite || false,
        doc.genre_ids || [],
        doc.genres || "",
        doc.homepage || "",
        doc.id || "0",
        doc.original_language || "",
        doc.original_title || "",
        doc.overview || "",
        doc.popularity || "",
        `https://image.tmdb.org/t/p/w400${doc.poster_path}`,
        doc.release_date || "",
        doc.title || "",
        doc.uid || [],
        doc.video || false,
        doc.vote_average || "",
        doc.vote_count || "",
        doc.year || ""
      );


      array.push(movies);
    });

    

    if(favoriteMovies !== null) {
      console.log(favoriteMovies)
    array.forEach(a => {
      if (favoriteMovies.filter(f => f.id === a.id).length > 0) {
        const movies1 = new Movies(
          a.adult,
          a.backdropPath,
          true,
          a.genreIds,
          a.genres,
          a.homepage,
          a.id,
          a.originalLanguage,
          a.originalTitle,
          a.overview,
          a.popularity,
          a.posterPath,
          a.releaseDate,
          a.title,
          a.uid,
          a.video,
          a.voteAverage,
          a.voteCount,
          a.year
        );

        listPopular.push(movies1);
      } else {
        const movies2 = new Movies(
          a.adult,
          a.backdropPath,
          a.favorite,
          a.genreIds,
          a.genres,
          a.homepage,
          a.id,
          a.originalLanguage,
          a.originalTitle,
          a.overview,
          a.popularity,
          a.posterPath,
          a.releaseDate,
          a.title,
          a.uid,
          a.video,
          a.voteAverage,
          a.voteCount,
          a.year
        );

        listPopular.push(movies2);
      }
    })
    console.log(listPopular)
  }

    if (listPopular.length > 0) {
      setPopularMovies(listPopular)
    } else {
      setPopularMovies(array || null);
    }
    
  };

  useEffect(() => {
    console.log("useEffct getPopularMovies")
    getPopularMovies();
  }, [favoriteMovies, loading]);

  useEffect(() => {
    console.log("useEffct getAllMoviesApi")
    if (search.trim() === "") {
      setShowPagination(true);
    }
    getAllMoviesApi();
  }, [search, currentPage, favoriteMovies, loading]);

  useEffect(() => {
    console.log("useEffct clear")
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1300);
    return () => clearTimeout(loadingTimeout);
  }, [movies, currentPage]);

  return (
    <ApplicationContext.Provider
      value={{
        currentUser,
        setUser,
        email,
        setEmail,
        password,
        setPassword,
        emailError,
        setEmailError,
        passwordError,
        setPasswordError,
        hasAccount,
        setHasAccount,
        handleSignup,
        handleLogin,
        handleLogout,
        loading,
        favoriteMovies,
        setFavoriteMovies,
        getAllMovieFirebase,
        updateData,
        addData,
        getData,
        movie,
        getAllMoviesApi,
        handleSearch,
        movies,
        setMovies,
        search,
        setSearch,
        activeLink,
        setActiveLink,
        currentPage,
        setCurrentPage,
        newPage,
        showPagination,
        setShowPagination,
        isLoading,
        setIsLoading,
        popularMovies,
        setPopularMovies,
        hiddenMenu,
        setHiddenMenu,
        getMovieApi
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

export function useApplication() {
  const context = useContext(ApplicationContext);

  return context;
}