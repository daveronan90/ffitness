import img1 from "../assets/transformation1.jpeg";
import img2 from "../assets/transformation2.jpeg";
import img3 from "../assets/transformation3.jpeg";
import Slider from "../Components/Slider";

const images = [img1, img2, img3];

const GolfPage = () => {
  return (
    <div>
      <video
        src={process.env.PUBLIC_URL + "/trackman.mp4"}
        loop
        muted
        autoPlay
      ></video>
      <Slider images={images} />
    </div>
  );
};

export default GolfPage;
