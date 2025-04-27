import useSWR from "swr";
import axios from "axios";

const fetcher = (url: string) =>
  axios.get(url).then(({ data }) => data);

interface StatusCounts {
  pending: number;
  confirmed: number;
  cancelled: number;
  draft: number;
}

interface StaffPropertiesResponse {
  success: boolean;
  properties: any[];
  statusCounts: StatusCounts;
  currentPage: number;
  totalPages: number;
  totalItems: number;
}

export default function useStaffProperties(filters = {}) {
  const { data, error, isLoading, mutate } = useSWR<StaffPropertiesResponse>(
    `/api/staff/properties?${new URLSearchParams(filters as any).toString()}`,
    fetcher
  );

  console.log(data, "data HOOKS🧑‍💻⚠️🧑‍💻⚠️");

  return {
    properties: data?.properties || [],
    statusCounts: data?.statusCounts || { pending: 0, confirmed: 0, cancelled: 0,draft: 0 },
    currentPage: data?.currentPage || 1,
    totalPages: data?.totalPages || 1,
    totalItems: data?.totalItems || 0,
    isLoading,
    error,
    mutate,
  };
} 