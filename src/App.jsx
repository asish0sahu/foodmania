import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Items from "./components/Items";


const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Menu/>
      <Items/>
      <Banner />
      <Contact/>
      <Footer />
    </div>
  )
}

export default App;