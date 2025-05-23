import useSWR from "swr";
import axios from "axios";

const fetcher = (url: string) =>
  axios.get(url).then(({ data }) => data);

interface StatusCounts {
  pending: number;
  confirmed: number;
  cancelled: number;
  reserved: number;
}

interface AdminPropertiesResponse {
  success: boolean;
  properties: any[];
  statusCounts: StatusCounts;
  currentPage: number;
  totalPages: number;
  totalItems: number;
}

export default function useAdminProperties(filters = {}) {
  const { data, error, isLoading, mutate } = useSWR<AdminPropertiesResponse>(
    `/api/staff/properties?${new URLSearchParams(filters as any).toString()}`,
    fetcher
  );

  console.log(data, "data HOOKS AdminProperties🧑‍💻⚠️🧑‍💻⚠️");

  return {
    properties: data?.properties || [],
    statusCounts: data?.statusCounts || { pending: 0, confirmed: 0, cancelled: 0,reserved: 0 },
    currentPage: data?.currentPage || 1,
    totalPages: data?.totalPages || 1,
    totalItems: data?.totalItems || 0,
    isLoading,
    error,
    mutate,
  };
} 