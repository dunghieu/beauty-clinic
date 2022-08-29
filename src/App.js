import HomePage from './pages/HomePage';
import {Route, Routes} from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import AboutPage from './pages/AboutPage';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
      <Footer />
    </>
  );
}
