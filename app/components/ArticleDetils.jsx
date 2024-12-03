import React from 'react'
import Image from "next/image"

const ArticleDetils = ({ articleDetils }) => {
    return (
        <div>
            <div className=' flex p-5'>


                <div>



                    <h2 className=' text-white font-Abrial text-6xl w-fit'>{articleDetils.title}</h2>
                    <p className=' font-medium text-3xl py-4 text-white/80'>{articleDetils.description}</p>
                    <h2>the number of paage :{articleDetils.isLive ? "shit" : "fuck"}</h2>
                    <h2>the number of paage :{articleDetils.publishedAt}</h2>

                </div>

                <div>
                    <img src={articleDetils?.image?.url} className=' rounded-xl shadow-2xl shadow-black/40' width={1920} height={1080} alt="image" />

                </div>
            </div>
        </div>
    )
}

export default ArticleDetils