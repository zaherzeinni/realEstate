import useSWR from "swr";
import axios from "axios";

const fetcher = (url: string) =>
  axios.get(url).then(({ data }) => data.properties);

export default function useCountryProperties(countryId: string) {
  const { data, error, isLoading } = useSWR(
    countryId ? `/api/properties/by-country/${countryId}` : null,
    fetcher
  );

  return {
    properties: data || [],
    isLoading,
    error,
  };
} 