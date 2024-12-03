'use client'
import request, { gql } from "graphql-request"

import React, { useEffect, useState } from 'react'

import ArticleDetils from "../components/ArticleDetils"

const MASTER_URL = process.env.NEXT_PUBLIC_HYGRAPH_KEY


const page = ({ params }) => {

    const [articleDetils, setArticleDetils] = useState([])
    const { articleid } = React.use(params)



    /* ********************************* */


    const getSpecificArticle = async () => {
        const query = gql`
    query MyQuery {
      articles(where: {slugofart: "${articleid}"}) {
        description
        image {
          url
        }
        isLive
        slugofart
        title
        publishedAt
      }
    }
        `

        const dataofarticle = await request(MASTER_URL, query)
        return dataofarticle;
    }

    /* ********************************* */




    useEffect(() => {
        getSpecificArticle_()
    }, [articleid])


    const getSpecificArticle_ = () => {

        getSpecificArticle().then(res => {
            console.log(res)
            console.log(res.articles[0].slugofart)

            
            setArticleDetils(res.articles[0])
        })
    }





    return (



        <ArticleDetils articleDetils={articleDetils}></ArticleDetils>
       
    )
}

export default page