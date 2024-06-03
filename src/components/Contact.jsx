import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import phone from "../assets/icons/phone.svg";
import mail from "../assets/icons/mail.svg";
import map from "../assets/icons/map.svg";

const Contact = () => {
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
      id="contact"
      className="bg-slate-950 w-full px-20 py-20 flex flex-col lg:flex-row justify-around items-center"
    >
      <div
        data-aos="slide-up"
        data-aos-delay="600"
        className="flex flex-col justify-center items-center gap-4"
      >
        <div
          id="icon-box"
          className="bg-green-500 p-4 rounded-full hover:bg-orange-500 cursor-pointer"
        >
          <img src={phone} alt="phone icon" width={40} height={40} />
        </div>
        <h1 className="text-white font-bold text-2xl uppercase">CALL US</h1>
        <p className="text-white font-semibold">MON-SAT from (8am-9pm)</p>
        <p className="text-orange-500 text-xl font-bold underline cursor-pointer">
          +91-9860738998
        </p>
      </div>
      <div
        data-aos="slide-up"
        data-aos-delay="600"
        className="flex flex-col justify-center items-center gap-4"
      >
        <div
          id="icon-box"
          className="bg-green-500 p-4 rounded-full hover:bg-orange-500 cursor-pointer"
        >
          <img src={map} alt="phone icon" width={40} height={40} />
        </div>
        <h1 className="text-white font-bold text-2xl uppercase">Reach Us</h1>
        <p className="text-white font-semibold">MON-SAT from (8am-9pm)</p>
        <p className="text-orange-500 text-xl font-semibold cursor-pointer">
          Banner road oppst.Durga Temple-500677
        </p>
      </div>
      <div
        data-aos="slide-up"
        data-aos-delay="600"
        className="flex flex-col justify-center items-center gap-4"
      >
        <div
          id="icon-box"
          className="bg-green-500 p-4 rounded-full hover:bg-orange-500 cursor-pointer"
        >
          <img src={mail} alt="phone icon" width={40} height={40} />
        </div>
        <h1 className="text-white font-bold text-2xl uppercase">Mail Us</h1>
        <p className="text-white font-semibold">MON-SAT from (8am-9pm)</p>
        <p className="text-orange-500 text-xl font-semibold cursor-pointer">
          foodmania@gmail.com
        </p>
      </div>
    </section>
  );
};

export default Contact;
