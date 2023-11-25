import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

import PaymentCard from "../../../components/Card/PaymentCard";

const MakePayment = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: agreements } = useQuery({
    queryKey: ["agreements", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/agreements/${user?.email}`);
      return data;
    },
  });

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {agreements?.length > 0 &&
        agreements.map((agreement) => (
          <PaymentCard key={agreement._id} agreement={agreement} />
        ))}
    </div>
  );
};

export default MakePayment;
