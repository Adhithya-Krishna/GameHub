import genres from "../data/genres";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => ({ data: genres, error: null, isLoading: null })
// When Fetching Genres from server
// const useGenres = () => useData<Genre>('/genres') 

export default useGenres;