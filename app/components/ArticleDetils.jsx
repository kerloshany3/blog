import React from 'react'
import Image from "next/image"

const ArticleDetils = ({ articleDetils }) => {

   
    

    return (
        
            <div className=' flex p-5'>


                <div className=' w-3/4'>



                    <h2 className=' text-white font-Abrial text-6xl w-fit'>{articleDetils.title}</h2>
                    <p className=' font-medium text-3xl py-4 text-white/80'>{articleDetils.description}</p>

                    
                </div>

                <div className=''>
                    <img src={articleDetils?.image?.url} className=' rounded-xl shadow-2xl shadow-black/40 ' width={1000} height={500} alt="image" />

                </div>
            
        </div>
    )
}

export default ArticleDetils