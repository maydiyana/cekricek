import Header from "./components/AnimeList/Header"
import AnimeList from "./components/AnimeList"
import MangaList from "./components/AnimeList/mangaList"

export default async function Home() {

const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
   const topAnime = await response.json()

   const response2 = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/manga?limit=8`).then(res=>res.clone().json())


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
