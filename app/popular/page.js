import Header from "../components/AnimeList/Header"
import AnimeList from "../components/AnimeList"
import { getAnimeResponse } from "../libs/api"

export default async function Home() {

const topAnime = await getAnimeResponse("top/anime")

  return (
    <section>
      <Header title="Most Popular" linkTitle="See All" linkHref="/popular" /> 
      <AnimeList api={topAnime} />
    </section>
      
    
  )
}
