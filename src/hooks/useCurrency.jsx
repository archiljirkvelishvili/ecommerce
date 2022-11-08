import {gql, useQuery} from "@apollo/client"

const CURRENCY = gql`
    query {
        currencies{
            label
            symbol
        }
    }`

export default function useCurrency(){
    const {loading, error, data} = useQuery(CURRENCY)
   

    return {currencyData: data, currencyError: error, currencyLoading: loading}
}