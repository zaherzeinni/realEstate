import useSWR from "swr";
import axios from "axios";

interface SubItem {
  id: string;
  title: string;
  titlefr: string;
  desc: string;
  descfr: string;
}

interface Item {
  id: string;
  title: string;
  titlefr: string;
  desc: string;
  descfr: string;
  subitems: SubItem[];
}

export interface Buyguide {
  _id: string;
  title: string;
  titlefr: string;
  desc: string;
  descfr: string;
  items: Item[];
  addBy: string;
  createdAt: string;
  updatedAt: string;
}

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

//export default function useBuyguides(id?: string) {
  // If id is provided, fetch single buyguide, otherwise fetch all
  //const path = id ? `/api/buyguide/${id}` : '/api/buyguide';
  


  export default function useBuyguides(id?: string, isHeader = false) {
    // If id is provided, fetch single buyguide, otherwise fetch all
    const path = id ? `/api/buyguide/${id}` : `/api/buyguide?isHeader=${isHeader}`;


  const {
    data,
    error,
    isLoading,
    mutate
  } = useSWR<id extends string ? Buyguide : Buyguide[]>(path, fetcher);

  return {
    data,
    isLoading,
    isError: error,
    mutate,
    // Helper methods
    createBuyguide: async (buyguideData: Partial<Buyguide>) => {
      try {
        const response = await axios.post('/api/buyguide', buyguideData);
        mutate(); // Revalidate the cache
        return response.data;
      } catch (error) {
        throw error;
      }
    },
    updateBuyguide: async (buyguideId: string, buyguideData: Partial<Buyguide>) => {
      try {
        const response = await axios.put(`/api/buyguide/${buyguideId}`, buyguideData);
        mutate(); // Revalidate the cache
        return response.data;
      } catch (error) {
        throw error;
      }
    },
    deleteBuyguide: async (buyguideId: string) => {
      try {
        await axios.delete(`/api/buyguide/${buyguideId}`);
        mutate(); // Revalidate the cache
      } catch (error) {
        throw error;
      }
    }
  };
} 