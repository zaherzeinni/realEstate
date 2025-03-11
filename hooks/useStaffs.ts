

import axios from "axios";
import useSWR from "swr";

interface StaffQuery {
  page?: number;
  search?: string;
  country?: string;
  status?: 'active' | 'inactive';
}

const fetcher = (url: string) => axios.get(url).then(({ data }) => data);

export default function useStaffs(query: StaffQuery = {}) {
  const { data, error, isLoading, mutate } = useSWR(
    `/api/staff?${new URLSearchParams(query as any).toString()}`,
    fetcher,
    {
      dedupingInterval: 5000,
      revalidateOnFocus: false,
    }
  );

  return {
    staffs: data?.staffs || [],
    pagination: data?.pagination,
    isLoading,
    error,
    mutate,
  };
}