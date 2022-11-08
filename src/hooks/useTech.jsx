import { gql, useQuery } from "@apollo/client"
 
const PRODUCTS = gql`
    query {
        category(input: {title:"tech"}){
            name
            products{
            name
            id
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

export default function useTech(){

    const {data, error, loading} = useQuery(PRODUCTS)
    return {data, error, loading}
}