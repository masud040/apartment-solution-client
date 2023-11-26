import { Helmet } from "react-helmet";
import Container from "../../components/Container/Container";
import Coupons from "../../components/Coupons/Coupons";
import About from "../../components/Home/About/About";
import Banner from "../../components/Home/Banner/Banner";
import Location from "../../components/Home/Location/Location";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Diamond House | Home</title>
      </Helmet>
      <div>
        <Container>
          <div>
            <Banner />
          </div>
          <div className="my-20">
            <About />
          </div>
          <div className="my-20">
            <Coupons />
          </div>
          <div>
            <Location />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Home;
