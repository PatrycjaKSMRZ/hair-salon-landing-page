
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import PriceList from './components/PriceList/PriceList';
import Team from './components/Team/Team';



function App() {


  return (
    <>
   <div>
    <Header />
    <main>
      <section id="Hero"><Hero /></section>
      <section id="About"><About /></section>
      <section id="Gallery"><Gallery /></section>
      <section id="PriceList"><PriceList /></section>
      <section id="Team"><Team /></section>
      <section id="Contact"><Contact /></section>
      <section id="Footer"><Footer /></section>
    </main>
   </div>
    </>
  )
}

export default App
