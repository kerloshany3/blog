'use client'
import request, { gql } from "graphql-request"

import React, { useEffect, useState } from 'react'

import ArticleDetils from "../components/ArticleDetils"

const MASTER_URL = "https://ap-south-1.cdn.hygraph.com/content/cm482x6a502j207w6ujty7gg4/master"


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
        id
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