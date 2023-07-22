import axios from "axios";


const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params:{
        api_key: 'e245788edd56336101811c52ff98db13',
    }
});


export const requestTrendingMovies = async () => {
    const {data} = await instance.get('/trending/movie/day');
    return data;
}; 

export const requestSearchMovie = async (query) => {
    const {data} = await instance.get(`/search/movie?query=${query}`);
    return data;
}; 

export const requestDetailsMovie = async (movieId) => {
    const {data} = await instance.get(`/movie/${movieId}`);
    return data;
};

export const requestCredits = async (movieId) => {
    const {data} = await instance.get(`/movie/${movieId}/credits`);
    return data;
};

export const requestReviews = async (movieId) => {
    const {data} = await instance.get(`/movie/${movieId}/reviews`);
    return data;
};