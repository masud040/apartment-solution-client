import Container from "../../components/Container/Container";
import About from "../../components/Home/About/About";
import Banner from "../../components/Home/Banner/Banner";
import Location from "../../components/Home/Location/Location";

const Home = () => {
  return (
    <div>
      <Container>
        <div>
          <Banner />
        </div>
        <div className="my-20">
          <About />
        </div>
        <div>
          <Location />
        </div>
      </Container>
    </div>
  );
};

export default Home;
