import request, { gql } from "graphql-request"
import { funofdatart } from "../[articleid]/page"


const MASTER_URL = "https://ap-south-1.cdn.hygraph.com/content/cm482x6a502j207w6ujty7gg4/master"


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


