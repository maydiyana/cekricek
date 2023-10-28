import Header from "./components/AnimeList/Header"
import AnimeList from "./components/AnimeList"
import MangaList from "./components/AnimeList/mangaList"
import { getAnimeResponse } from "./libs/api"

export default async function Page() {
  

const topAnime = await getAnimeResponse("top/anime", "limit=8")

const response2 = await getAnimeResponse("top/manga", "limit=4" )


  return (
    <>
   
    <section>
      <Header title="Popular Anime" linkTitle="See All" linkHref="/popular" /> 
      <AnimeList api={topAnime} />
    </section>
      
    <section>
      <Header title="Popular Manga" linkTitle="See All" linkHref="/popularManga" /> 
      <MangaList api={response2} />
    </section>

    </>
  )
}
