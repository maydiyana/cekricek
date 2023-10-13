import Header from "../components/AnimeList/Header"
import AnimeList from "../components/AnimeList"

export default async function Home() {

const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`)
   const topAnime = await response.json()

  return (
    <section>
      <Header title="Most Popular" linkTitle="See All" linkHref="/popular" /> 
      <AnimeList api={topAnime} />
    </section>
      
    
  )
}
