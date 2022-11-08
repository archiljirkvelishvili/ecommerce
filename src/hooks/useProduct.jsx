import { gql, useQuery } from "@apollo/client"


const GET_PRODUCT = gql`
query GetProduct($id:String!) {
    product(id: $id){
        name
        category
        inStock
        gallery
        description
        category
        brand
        prices{
            amount
            currency{
                label
                symbol
            }
        }
        attributes{
            name
            type
            items{
                value
                displayValue
            }
        }
    }
}
`
export default function useProduct(id){
   
    const{data} = useQuery(GET_PRODUCT, {variables:{id}})

    return {data}

}


    