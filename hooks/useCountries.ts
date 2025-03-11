import axios from "axios";
import { useEffect } from "react";
import useSWR from "swr";
import useSWRImmutable from "swr/immutable";
import Router from "next/router";

interface Query {
  page?: string | number;
  category?: string;
  search?: string;
}

interface BookDetails {
  id: string;
  title: string;
  author: string;
  description: string;
  price: number;
  image: string;
}

const fetcher = (url: string) => axios.get(url).then(({ data }) => data);

export default function useCountries() {
  const { data, isLoading, error, mutate } = useSWR(
    `/api/country/handler`,
    fetcher,
    {
      dedupingInterval: 3600000,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return {
    data,
    isLoading,
    error,
    mutate,
  };
}
