const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '4a15935f82ce632c134a2b541631370a',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;