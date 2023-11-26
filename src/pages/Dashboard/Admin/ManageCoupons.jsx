import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import CouponTable from "../../../components/Table/CouponTable";
import { useState } from "react";
import AddCouponModal from "../../../components/Modal/AddCouponModal";
import { Helmet } from "react-helmet";

const ManageCoupons = () => {
  const [isOpen, setIsOpen] = useState(false);
  const axiosSecure = useAxiosSecure();
  const { data: coupons = [], refetch } = useQuery({
    queryKey: ["coupons"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/coupons");
      return data;
    },
  });

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Helmet>
        <title>Diamond House | Manage Coupon</title>
      </Helmet>
      <div className="text-gray-700">
        <h1 className="text-center mb-6 text-xl font-bold">Manage Coupon</h1>
        <div className="overflow-x-auto">
          <table className="w-full ">
            <thead>
              <tr>
                <th>SI</th>
                <th>Coupon Code</th>
                <th>Discount</th>
              </tr>
            </thead>
            <tbody>
              {coupons?.map((coupon, index) => (
                <CouponTable key={coupon._id} coupon={coupon} index={index} />
              ))}
            </tbody>
          </table>
          <button
            onClick={() => setIsOpen(true)}
            className="bg-gradient-to-r from-violet-500 to-fuchsia-500 p-2 rounded-xl mt-4 text-white font-semibold"
          >
            Add Coupon
          </button>
          <AddCouponModal
            closeModal={closeModal}
            isOpen={isOpen}
            refetch={refetch}
          />
        </div>
      </div>
    </>
  );
};

export default ManageCoupons;
