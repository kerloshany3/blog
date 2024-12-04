'use client'
import Image from "next/image";
import React, { useEffect, useState } from 'react'
import { getArticlsData } from "../api";
import { useRouter } from "next/navigation";



const Articls = () => {
    const [Articls, setArticls] = useState([])
    useEffect(() => {
        getArticls()
    }, [])

    const getArticls = () => {
        getArticlsData().then(res => {
            console.log(res.articles)
            setArticls(res.articles)
        })
    }

    const router = useRouter()
    const handleClickButton = ( item) => {
        
        router.push(`${item.slugofart}`)
    }
    
    return (
        <div>
            <div>
                <div className="">
                        
                        <ul className=" max-sm:grid-cols-1 grid grid-cols-3 ">
                            {Articls.map((item) => (
                                <li key={item.id}>
                                    <div className="  shadow-xl m-4 shadow-primary5/40 bg-primary5 w-fit p-6 rounded-xl">
                                        <Image className=" rounded-2xl shadow-xl w-fit scale-110 py-5 flex m-auto justify-center" src={item.image.url} width={200} height={300} alt="image"></Image>
                                        <h4 className="   font-Abrial text-white text-3xl line-clamp-2">{item?.title}</h4>
                                        <p className="  text-white/70 font-Abrial line-clamp-2 ">{item.description}</p>

                                        <div className=" flex justify-between  place-items-center">
                                            <button onClick={()=>{handleClickButton(item)}} className=" shadow-xl shadow-primary2/50 bg-primary2 text-white font-Abrial text-2xl p-2 rounded-xl my-3">Read More</button>
                                            {item.isLive ? 
                                            <svg xmlns="http://www.w3.org/2000/svg" className="" width="40" height="40" viewBox="0 0 24 24">
                                            <mask id="lineMdSpeedTwotoneLoop0">
                                                <path fill="#fff" fillOpacity="0" stroke="#fff"  strokeDasharray="56" strokeDashoffset="56" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19v0c-0.3 0 -0.59 -0.15 -0.74 -0.41c-0.8 -1.34 -1.26 -2.91 -1.26 -4.59c0 -4.97 4.03 -9 9 -9c4.97 0 9 4.03 9 9c0 1.68 -0.46 3.25 -1.26 4.59c-0.15 0.26 -0.44 0.41 -0.74 0.41Z">
                                                    <animate fill="freeze" attributeName="fill-opacity" begin="0.3s" dur="0.15s" values="0;0.3" />
                                                    <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0" />
                                                </path>
                                                <g transform="rotate(-100 12 14)">
                                                    <path d="M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z">
                                                        <animate fill="freeze" attributeName="d" begin="0.4s" dur="0.2s" values="M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z;M16 14C16 16.21 14.21 18 12 18C9.79 18 8 16.21 8 14C8 11.79 12 0 12 0C12 0 16 11.79 16 14Z" />
                                                    </path>
                                                    <path fill="#fff" d="M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z">
                                                        <animate fill="freeze" attributeName="d" begin="0.4s" dur="0.2s" values="M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z;M14 14C14 15.1 13.1 16 12 16C10.9 16 10 15.1 10 14C10 12.9 12 4 12 4C12 4 14 12.9 14 14Z" />
                                                    </path>
                                                    <animateTransform attributeName="transform" begin="0.4s" dur="6s" repeatCount="indefinite" type="rotate" values="-100 12 14;45 12 14;45 12 14;45 12 14;20 12 14;10 12 14;0 12 14;35 12 14;45 12 14;55 12 14;50 12 14;15 12 14;-20 12 14;-100 12 14" />
                                                </g>
                                            </mask>
                                            <rect width="24" height="24" fill="#d62727" mask="url(#lineMdSpeedTwotoneLoop0)" />
                                                </svg>
                                        : null }
                                            
                                        </div>

                                    </div>

                                </li>
                            ))}
                        </ul>

                    </div>
                
            </div>
        </div>
    )
}

export default Articls