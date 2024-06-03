import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import dish1 from "../assets/dish1.jpg";
import dish2 from "../assets/dish2.jpg";
import dish3 from "../assets/dish3.jpg";
import dish4 from "../assets/dish4.jpg";
import item1 from "../assets/item1.jpg";
import item2 from "../assets/item2.jpg";


const Items = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <section
      id="menu"
      className="w-full h-fit bg-slate-950 px-12 lg:px-20 lg:py-24 py-20 flex flex-col justify-center items-center gap-10"
    >
      <h1
        data-aos="zoom-in"
        className="text-white font-bold text-6xl text-center"
      >
        View Our Tasty <span className="text-green-500 italic">Foods</span>
      </h1>
      <p
        data-aos="slide-up"
        className="text-white font-semibold text-xl text-center"
      >
        Fresh food and good moods
      </p>

      <div
        id="grids"
        className="flex flex-col lg:flex-row justify-center items-center flex-wrap gap-10"
      >
        <div
          data-aos="slide-up"
          data-aos-delay="200"
          className="flex flex-col justify-center items-center gap-4 bg-slate-950 pb-10 lg:w-2/5 w-full rounded-[150px]"
        >
          <img src={dish1} alt="dish image" />
          <div className="w-full flex flex-col justify-center items-center gap-4 px-10">
            <h1 className="text-white font-bold text-2xl">Chicken Garlllic Burger</h1>
            <p className="text-white font-semibold text-lg text-center">
            These garlic chicken burgers are juicy, savory, and loaded with garlicky flavor.
            </p>
            <button className="bg-green-500 px-8 py-4 rounded-full hover:bg-orange-500 hover:text-black font-bold mt-2">
              ORDER NOW
            </button>
          </div>
        </div>
        <div
          data-aos="slide-up"
          data-aos-delay="200"
          className="flex flex-col justify-center items-center gap-4 bg-slate-950 pb-10 lg:w-2/5 w-full rounded-[150px]"
        >
          <img src={dish2} alt="dish image" />
          <div className="w-full flex flex-col justify-center items-center gap-4 px-10">
            <h1 className="text-white font-bold text-2xl">Veg Makhni Burger</h1>
            <p className="text-white font-semibold text-lg text-center">
            Make Burger King Style Crispy Veg Makhani Wrap today at home.
            </p>
            <button className="bg-green-500 px-8 py-4 rounded-full hover:bg-orange-500 hover:text-black font-bold mt-2">
              ORDER NOW
            </button>
          </div>
        </div>
        <div
          data-aos="slide-up"
          data-aos-delay="200"
          className="flex flex-col justify-center items-center gap-4 bg-slate-950 pb-10 lg:w-2/5 w-full rounded-[150px]"
        >
          <img src={dish3} alt="dish image" />
          <div className="w-full flex flex-col justify-center items-center gap-4 px-10">
            <h1 className="text-white font-bold text-2xl">Chili Soya Pasta</h1>
            <p className="text-white font-semibold text-lg text-center">
            Red sauce pasta with cheese loaded
            </p>
            <button className="bg-green-500 px-8 py-4 rounded-full hover:bg-orange-500 hover:text-black font-bold mt-2">
              ORDER NOW
            </button>
          </div>
        </div>
        <div
          data-aos="slide-up"
          data-aos-delay="200"
          className="flex flex-col justify-center items-center gap-4 bg-slate-950 pb-10 lg:w-2/5 w-full rounded-[150px]"
        >
          <img src={dish4} alt="dish image" />
          <div className="w-full flex flex-col justify-center items-center gap-4 px-10">
            <h1 className="text-white font-bold text-2xl">Mushroom Swiss Burger</h1>
            <p className="text-white font-semibold text-lg text-center">
            Juicy and flavorful Mushroom Swiss Burger 
            </p>
            <button className="bg-green-500 px-8 py-4 rounded-full hover:bg-orange-500 hover:text-black font-bold mt-2">
              ORDER NOW
            </button>
          </div>
        </div>
        <div
          data-aos="slide-up"
          data-aos-delay="200"
          className="flex flex-col justify-center items-center gap-4 bg-slate-950 pb-10 lg:w-2/5 w-full rounded-[150px]"
        >
          <img src={item1} alt="dish image" />
          <div className="w-full flex flex-col justify-center items-center gap-4 px-10">
            <h1 className="text-white font-bold text-2xl">Veg Allo mini fry</h1>
            <p className="text-white font-semibold text-lg text-center">
           It is delicacy of indian cusion Patato mix fry
            </p>
            <button className="bg-green-500 px-8 py-4 rounded-full hover:bg-orange-500 hover:text-black font-bold mt-2">
              ORDER NOW
            </button>
          </div>
        </div>
        <div
          data-aos="slide-up"
          data-aos-delay="200"
          className="flex flex-col justify-center items-center gap-4 bg-slate-950 pb-10 lg:w-2/5 w-full rounded-[150px]"
        >
          <img src={item2} alt="dish 4" />
          <div className="w-full flex flex-col justify-center items-center gap-4 px-10">
            <h1 className="text-white font-bold text-2xl">MacaroniPasta </h1>
            <p className="text-white font-semibold text-lg text-center">
            Macaroni recipe made Indian-style with healthy veggies in base of onion-tomato sauce and spices.
            </p>
            <button className="bg-green-500 px-8 py-4 rounded-full hover:bg-orange-500 hover:text-black font-bold mt-2">
              ORDER NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Items;
