import Header from "../components/AnimeList/Header"
import MangaList from "../components/AnimeList/mangaList"
import { getAnimeResponse } from "../libs/api"

export default async function Home() {
 
  const topAnime = await getAnimeResponse("top/manga")

  return (
    <section>
      <Header title="Most Popular" linkTitle="See All" linkHref="/popular" /> 
      <MangaList api={topAnime} />
    </section>
      
    
  )
}
