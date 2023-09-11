export const contentQuery = `
query Pages($Slug: String!){
  pages: pages(filters: { slug: { eq: $Slug  }}) {
    data {
      attributes {
        title
        description
        pageZone {
          __typename
          ... on ComponentPageImage {
            caption
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
          ... on ComponentPageQuote {
            quote
            quoter
          }
          ... on ComponentPageRichText {
            richText
          }
        }
      }
    }
  }
}`
