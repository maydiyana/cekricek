
import VidioPlayer from "@/app/components/utilities/VidioPlayer"
import { getAnimeResponse } from "@/app/libs/api"
import Image from "next/image"

const Page = async ({ params: {id}}) => {

    const anime = await getAnimeResponse(`anime/${id}`)
    return(
            <>
            <div className="p-2 px-3">
            <h2 className="text-2xl font-bold">{anime.data.title} - {anime.data.year}</h2>
            </div>

            <div className="p-1 px-1 flex sm:flex-nowrap flex-wrap  gap-2">
                <Image
                src={anime.data.images.webp.image_url}
                alt={anime.data.images.jpg.image_url}
                width={350} height={350}
                className="w-full sm:max-h-80 max-h-64  object-cover"
                />


            </div>
                <div className="flex gap-1  overflow-x-auto py-1 "> 
                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-indigo-500 ">
                <h3>Rank</h3>
                <p>#{anime.data.rank}</p>
                </div>

                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-indigo-500">
                <h3>Score</h3>
                <p>{anime.data.score}</p>
                </div>

                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-indigo-500">
                <h3>Popularity</h3>
                <p>#{anime.data.popularity}</p>
                </div>
                </div>

                <div className="py-2 "> 
                <VidioPlayer youtubeId={anime.data.trailer.youtube_id}/>
                </div>

                <div className="px-2 pb-2 font-bold">
                <p>{anime.data.duration} | {anime.data.type} </p>
                </div>

            <p className="px-2 pb-2">{anime.data.synopsis}</p>

            

            </>
    )
}

export default Page