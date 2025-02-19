import axios from "axios";
import { useEffect } from "react";
import useSWR from "swr";
import useSWRImmutable from "swr/immutable";
import Router from "next/router";

interface Query {
  page?: string | number;

  search?: string;
}

interface BookDetails {
  id: string;
  title: string;
  author: string;
  story: string;
  price: number;
  image: string;
}

const fetcher = (url: string) => axios.get(url).then(({ data }: any) => data);

export default function useCustomers({
  page = 1,
  search="",

}: Query = {}) {
  // console.log(">C<>" , category)
  const { data, isLoading, error, mutate } = useSWR(

    `/api/customer/?page=${page}&search=${search}`,
    fetcher
    
    // ,

    // {
    //   dedupingInterval: 3600000,
    //   revalidateOnFocus: false,
    //   revalidateOnReconnect: false,
    // }
  );

  return {
    data,

    isLoading: isLoading,
    error: error,
    mutate: mutate,
  };
}


// import useSWR from "swr";
// import axios from "axios";
// const fetcher = (url: string) =>
//     axios.get(url).then(({ data }: any) => data?.data);

// export default function useCustomers({ page = 1, search = "" } = {}) {
//   const { data, error, mutate } = useSWR(
//     `/api/customer?page=${page}&search=${search}`,
//     fetcher
//   );    

//   console.log("da3333",data ,error);

//   return {
//     data,
//     isLoading: !error && !data,
//     error,
//     mutate,
//   };
// } 