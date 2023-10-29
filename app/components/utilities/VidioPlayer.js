"use client"
import YouTube from "react-youtube"

const VidioPlayer = ({youtubeId}) => {
    const option = {
        width: "100%",
        height: "200"
    }

    return(
        <div>
            <YouTube 
            videoId={youtubeId}
            onReady={(event) => event.target.pauseVideo()}
            opts={option}
            className="w-full max-h-64 object-cover pb-2"
            />
        </div>
    )
}

export default VidioPlayer
