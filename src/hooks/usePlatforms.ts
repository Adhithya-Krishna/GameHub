import platforms from "../data/platforms";

export interface Platforms {
    id: number;
    name: string;
    slug: string;
}
const usePlatforms = () => ({ data: platforms, error: null })
// Fetching Platforms from Server
// const usePlatforms = () => useData<Platforms>('/platforms/lists/parents')
export default usePlatforms;