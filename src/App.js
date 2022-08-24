import About from './components/layout/About';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Professional from './components/layout/Professional';
import Service from './components/layout/Service';
import Slider from './components/layout/Slider';

export default function App() {
  return (
    <>
      <Header />
      <Slider />
      <Service />
      <About />
      <Professional />
      {/* <Footer /> */}
    </>
  );
}
