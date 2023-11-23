import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import banner2 from "../../../assets/images/banner/2.jpg";
import banner3 from "../../../assets/images/banner/3.jpg";

import banner5 from "../../../assets/images/banner/5.jpg";

const Banner = () => {
  return (
    <div>
      <Carousel className="text-center">
        {/* <div>
          <img src={banner1} />
        </div> */}
        <div>
          <img src={banner2} />
        </div>
        <div>
          <img src={banner3} />
        </div>
        <div>
          <img src={banner5} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
