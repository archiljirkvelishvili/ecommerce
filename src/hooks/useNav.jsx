import {useQuery, gql } from "@apollo/client";

const NAV = gql`
  query {
    categories {
      name
    } 
  }`
  
export default function useNav(){
  const {data, loading, error} = useQuery(NAV)

  return  {data, loading, error}
}
