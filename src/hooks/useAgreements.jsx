import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAgreements = () => {
  const axiosSecure = useAxiosSecure();
  const { data: agreements = [], refetch } = useQuery({
    queryKey: ["agreements"],
    queryFn: async () => {
      const { data } = await axiosSecure("/agreements?status=pending");
      return data;
    },
  });
  return [agreements, refetch];
};

export default useAgreements;
