import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import couponBg from "../../assets/images/coupon.webp";
import SectionTitle from "../SectionTitle/SectionTitle";
const Coupons = () => {
  const axiosPublic = useAxiosPublic();
  const { data: coupons = [] } = useQuery({
    queryKey: ["coupons"],
    queryFn: async () => {
      const { data } = await axiosPublic("/coupons");
      return data;
    },
  });

  return (
    <div>
      <SectionTitle
        title="Exclusive Resident Discounts"
        subtitle="Explore the variety of discounts available for our residents. From local businesses to essential services, find deals that suit your preferences. Apply below coupon and get discount!!"
      />
      <img className="w-full h-60" src={couponBg} alt="" />
      <div className="flex justify-between flex-wrap">
        {coupons?.map((coupon) => (
          <div
            className="bg-gradient-to-r from-violet-500 to-fuchsia-500 mt-3 py-1 px-2 text-gray-800 font-semibold rounded-3xl text-sm"
            key={coupon._id}
          >
            <h1 title={coupon?.coupon_details} className="font-nanum">
              {coupon?.coupon_code}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coupons;
