import HomePage from './pages/HomePage';
import {Route, Routes} from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import AboutPage from './pages/AboutPage';
import ServicePage from './pages/ServicePage';
import GalleryPage from './pages/GalleryPage';
import BlogPage from './pages/BlogPage';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/service' element={<ServicePage />} />
        <Route path='/gallery' element={<GalleryPage />} />
        <Route path='/blog' element={<BlogPage />} />
      </Routes>
      <Footer />
    </>
  );
}
