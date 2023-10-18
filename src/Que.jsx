import React, { useEffect, useState } from 'react'
import ReactAudioPlayer from 'react-audio-player'

function Que({ list, setlist }) {
    const [current, setcurrent] = useState(0)

    console.log("latest", list)

    useEffect(() => {

    }, [current])

    return (
        <div className='que'>
            <button onClick={() => setcurrent(current - 1)} disabled={current <= 0 }>previous</button>
        
            <ReactAudioPlayer  
                src={list[current]?.downloadUrl[list[current].downloadUrl.length - 1].link}
                controls
                controlslist="play nodownload"
                autoPlay
                onEnded={() => setTimeout(() => { setcurrent(current + 1) }, 1000)}
            />

            <button onClick={() => setcurrent(current + 1)} disabled={current >= list.length-1 }>next</button>
        </div>
    )
}

export default Que