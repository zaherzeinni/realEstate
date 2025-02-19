import useSWR from "swr";
import axios from "axios";

const fetcher = (url: string) =>
  axios.get(url).then(({ data }: any) => data?.data);

export default function useStaffProperties(filters = {}) {
  const { data, error, isLoading, mutate } = useSWR(
    `/api/staff/properties?${new URLSearchParams(filters as any).toString()}`,
    fetcher
  );

  return {
    properties: data?.properties || [],
    statusCounts: data?.statusCounts || {},
    currentPage: data?.pagination?.currentPage || 1,
    hasNextPage: data?.pagination?.hasNextPage || false,
    hasPrevPage: data?.pagination?.hasPrevPage || false,
    //statusCounts: formattedStatusCounts,
    statusCounts: data?.statusCounts || {},
    limit: data?.pagination?.limit || 10,
    totalItems: data?.pagination?.totalItems || 0,
    totalPages: data?.pagination?.totalPages || 1,
    isLoading,
    error,
    mutate,
  };
} 