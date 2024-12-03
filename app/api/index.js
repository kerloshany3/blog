import request, { gql } from "graphql-request"
import { funofdatart } from "../[articleid]/page"


const MASTER_URL = process.env.NEXT_PUBLIC_HYGRAPH_KEY


export const getArticlsData = async () => {
    const query = gql`

query MyQuery {
  articles {
    createdAt
    id
    image {
      url
    }
    isLive
    slugofart
    title
    description
  }
}
    `

    const result = await request(MASTER_URL, query)
    return result;
}


