import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import axios from "axios";

import ApartmentCard from "../../components/Card/ApartmentCard";
import Container from "../../components/Container/Container";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Apartment = () => {
  const countData = useLoaderData();

  const [currentPage, setCurrentPage] = useState(0);
  const perPageItem = 6;
  const total = countData.total;
  const pageCount = Math.ceil(total / perPageItem);

  const pages = [...Array(pageCount).keys()];

  const { data: apartments = [] } = useQuery({
    queryKey: ["apartment", currentPage, perPageItem],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/apartments?page=${currentPage}&size=${perPageItem}`
      );
      return res.data?.apartments;
    },
  });
  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <Container>
        <div className="pt-[40px] min-h-[calc(100vh-3px)]">
          <SectionTitle title="Apartments" />
          <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apartments?.map((apartment) => (
              <ApartmentCard key={apartment._id} apartment={apartment} />
            ))}
          </div>
        </div>

        <div className="text-center my-8">
          <button onClick={handlePrev} className="btn font-bold text-sm mr-2">
            Prev
          </button>
          {pages?.map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={
                currentPage === page
                  ? "btn  p-1 mr-2 font-bold rounded-full w-6  bg-fuchsia-500"
                  : "btn rounded-full w-6 font-bold  mr-2"
              }
            >
              {page + 1}
            </button>
          ))}
          <button onClick={handleNext} className="btn font-bold text-sm">
            Next
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Apartment;
