import { gql, useQuery } from "@apollo/client"
 
const PRODUCTS = gql`
    query {
        category(input: {title:"clothes"}){
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

export default function useClothes(){

    const {data, error, loading} = useQuery(PRODUCTS)
    return {data, error, loading}
}