import Image from "next/image"
import Link from "next/link"

const AnimeId = ({ api }) => {
    return (
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4 ">
            {api.data.map((anime, index) =>
            
      <Link href={`/anime/${anime.mal_id}`} className="cursor-pointer" key={index}>
                <div className="font-bold md:text-xl text-md p-2 hover:text-sky-500 transition-all" >{anime.title}</div>
                <Image src={anime.images.webp.image_url} width={350} height={350} alt="..."  className="w-full max-h-64 object-cover"/>
                
            </Link>
            )}
        </div>
            
    )
}

export default AnimeId