import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Link to="/">
        <h1>Binar Car Rental.</h1>
      </Link>
      <h1>Ini Home Page</h1>
      <Link to="/carimobil">
        <button>Mulai Cari Mobil</button>
      </Link>

      <Slider {...settings}>
        <div>
          <img src="https://placehold.jp/3d4070/ffffff/300x150.png?text=1" />
        </div>
        <div>
          <img src="https://placehold.jp/3d4070/ffffff/300x150.png?text=2" />
        </div>
        <div>
          <img src="https://placehold.jp/3d4070/ffffff/300x150.png?text=3" />
        </div>
        <div>
          <img src="https://placehold.jp/3d4070/ffffff/300x150.png?text=4" />
        </div>
        <div>
          <img src="https://placehold.jp/3d4070/ffffff/300x150.png?text=5" />
        </div>
        <div>
          <img src="https://placehold.jp/3d4070/ffffff/300x150.png?text=6" />
        </div>
      </Slider>
    </div>
  );
};

export default Home;
