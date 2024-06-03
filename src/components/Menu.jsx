import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import menu1 from "../assets/menu1.webp";
import menu2 from "../assets/menu2.webp";
import menu3 from "../assets/menu3.webp";
import vertical1 from "../assets/vertical1.jpg";

const Menu = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <>
      <section className="w-full bg-slate-950 h-fit px-20 py-28 flex flex-col lg:flex-row justify-center items-center gap-16">
        <div
          data-aos="slide-up"
          data-aos-delay="200"
          className="flex justify-center items-center bg-center bg-cover lg:h-[350px] lg:w-[300px] h-[300px] w-[300px] rounded-xl"
          style={{ backgroundImage: `url(${menu1})` }}
        >
          <h1 className="text-white font-semibold text-2xl ">Veg Roll Frankie</h1>
        </div>
        <div
          data-aos="slide-up"
          data-aos-delay="200"
          className="flex justify-center items-center bg-center bg-cover lg:h-[350px] lg:w-[300px] h-[300px] w-[300px] rounded-xl"
          style={{ backgroundImage: `url(${menu2})` }}
        >
          <h1 className="text-white font-semibold text-2xl ">Panner Makhni Slice</h1>
        </div>
        <div
          data-aos="slide-up"
          data-aos-delay="200"
          className="flex justify-center items-center bg-center bg-cover lg:h-[350px] lg:w-[300px] h-[300px] w-[300px] rounded-xl"
          style={{ backgroundImage: `url(${menu3})` }}
        >
          <h1 className="text-white font-semibold text-2xl ">Grilled Veg Sandwich</h1>
        </div>
      </section>
      <section
        id="about"
        className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:py-24 py-20 px-10 lg:px-20 bg-slate-950 w-full h-fit"
      >
        <div
          id="left"
          className="lg:w-[50%] w-full flex flex-col justify-end items-center lg:items-start gap-10"
        >
          <h1 data-aos="zoom-in" className="text-white text-6xl font-bold">
            About <span className="text-green-500 italic">Us</span>
          </h1>
          <p className="text-white text-xl font-semibold text-center lg:text-start">
            At Food Munch, we believe in the power of good food to bring people
            together. Our culinary team, led by talented chefs with a flair for
            innovation, curates a menu that showcases a harmonious blend of
            locally sourced ingredients and international inspirations. Whether
            you are a connoisseur of fine dining or seeking comfort in familiar
            favorites, our diverse menu caters to all palates.
          </p>
          <button
            data-aos="zoom-in-up"
            data-aos-delay="400"
            className="bg-orange-500 px-8 py-4 rounded-full hover:bg-green-500 hover:text-black font-bold mt-6"
          >
            ORDER NOW
          </button>
        </div>
        <div
          id="about-image"
          data-aos="slide-up"
          data-aos-delay="200"
          className="flex justify-center items-center lg:w[50%] w-full"
        >
          <img
            src={vertical1}
            alt="aboutimg"
            width={500}
            className="rounded-xl"
          />
        </div>
      </section>
    </>
  );
};

export default Menu;
