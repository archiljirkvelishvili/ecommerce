import { gql, useQuery } from "@apollo/client"

const ALLCATS = gql`
    query{
        category(input: {title:"all"}){
            name
            products{
            id
            name
            gallery
                    inStock
                prices{
                currency{
                symbol
                }
                amount
            }
            }
        }
    }
`

export default function useHome(){   
    const {data, error, loading} = useQuery(ALLCATS)
    return{alldata: data, error, loading}
}