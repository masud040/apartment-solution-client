import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import axios from "axios";
import { getAllApartment } from "../../api/apartment/getallApartment";

const Apartment = () => {
  const { data: apartments } = useQuery({
    queryKey: ["apartments"],
    queryFn: async () => {
      const res = await getAllApartment();
    },
  });
  console.log(apartments);

  return (
    <div className="pt-[40px] min-h-[calc(100vh-3px)]">
      <SectionTitle title="Apartments" />
    </div>
  );
};

export default Apartment;
