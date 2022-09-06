import HomePage from './pages/HomePage';
import {Route, Routes} from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import AboutPage from './pages/AboutPage';
import ServicePage from './pages/ServicePage';
import GalleryPage from './pages/GalleryPage';
import BlogPage from './pages/BlogPage';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './helpers/ScrollToTop';
import {useState} from 'react';

export default function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  document.body.onscroll = function () {
    setScrollPosition(window.scrollY);
  };

  return (
    <>
      <Header scrollPosition={scrollPosition} />
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/service' element={<ServicePage />} />
          <Route path='/gallery' element={<GalleryPage />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/team' element={<TeamPage />} />
          <Route path='*' element={<HomePage />} />
        </Routes>
      </ScrollToTop>
      <Footer scrollPosition={scrollPosition} />
    </>
  );
}
