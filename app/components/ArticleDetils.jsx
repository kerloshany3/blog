import React from 'react'
import Image from "next/image"

const ArticleDetils = ({articleDetils}) => {
    return (
        <div>
            <div className=' p-5'>


                <h2 className=' text-white font-Abrial text-5xl w-3/4'>{articleDetils.title}</h2>
                <h2>the number of paage :{articleDetils.description}</h2>
                <h2>the number of paage :{articleDetils.isLive ? "shit" : "fuck"}</h2>
                <h2>the number of paage :{articleDetils.publishedAt}</h2>
                <img src={articleDetils?.image?.url} width={100} height={200} alt="image"/>
            </div>

        </div>
    )
}

export default ArticleDetils