import style from "./Home.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.ttile = "Rais Laundry";
  }, []);

  const imageSlider = [
    {
      image: "slider3.jpeg",
      heading: "DRYCLEANING AND LAUNDRY TO YOUR DOORSTEPS",
      paragraph:
        "Enjoy free pick up and delivery of your laundry and dry cleaning anywhere in Oyo state. From Ibadan, Oyo and Molete to Arisekola and Iwo Road, we've got you covered.",
    },
    {
      image: "slider2.jpeg",
      heading: "Get 30% off your first order when you signup today",
      paragraph:
        "Place an order, fill in your details to sign up and BOOM, you get to pay only 70% of the cost of your first order.",
    },
    {
      image: "slider1.jpeg",
      heading: "Save time for the more important things of life",
      paragraph:
        "Let us take care of all your laundry and dry cleaning needs while you go on to do what's important to you.",
    },
    {
      image: "slider4.jpeg",
      heading: "Earn 10% commission on the orders of your referrals",
      paragraph:
        "Log in to your dashboard, share your referral link and once your friends sign up with your referral code and pay for their order, we will give you 10% of the amount of their order.",
    },
  ];

  return (
    <Carousel
      autoPlay={true}
      interval={4000}
      infiniteLoop={true}
      transitionTime={1000}
      swipeable={true}
      useKeyboardArrows={true}
      showThumbs={false}
      showStatus={false}
    >
      {imageSlider.map((item, index) => (
        <div key={index} className={style["image-slider-wrapper"]}>
          <div className={style.overlay}></div>
          <div>
            <h1>{item.heading}</h1>
            <p>{item.paragraph}</p>
            <Link to="/sign-up">SIGN UP NOW</Link>
          </div>
          <img src={item.image} alt={`slide ${index}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default Home;
