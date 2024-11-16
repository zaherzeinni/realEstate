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

export default function useServices({
  page = 1,
  search="",

}: Query = {}) {
  // console.log(">C<>" , category)
  const { data, isLoading, error, mutate } = useSWR(

    `/api/service/main/?page=${page}&search=${search}`,
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
