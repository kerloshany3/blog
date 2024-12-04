
import React from 'react'
import Image from "next/image"


const ArticleDetils = ({ articleDetils }) => {



    return (

        <div className=' flex p-5'>
            <div className=' w-3/4'>
                <h2 className=' max-sm:text-xl max-sm:w-full text-white font-Abrial text-6xl w-fit'>{articleDetils.title}</h2>
                <p className=' font-medium max-sm:text-xl text-3xl py-4 text-white/80'>{articleDetils.description}</p>
            </div>
            <div className=' '>
                <img src={articleDetils?.image?.url} className=' max-sm:w-full rounded-xl shadow-2xl shadow-black/40 ' width={1000} height={500} alt="image" />

                <video width="1920" className=' rounded-xl ' controls controlsList='nodownload' height="250" >
                    <source src='https://ap-south-1.graphassets.com/cm482x75z097407o68xd57myi/cm49std5n00tk07odtz5gocpv' type='video/mp4' />
                </video>

               


            </div>

        </div>
    )
}

export default ArticleDetils