import './App.css';
// import Categoria from './components/Pages/Home/Categoria/Categoria';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
// import Users from './components/Pages/Home/Users/Users';
import Page from './components/Pages/Blogs/page';
import Empty from './components/Common/Empty';
import Products from './components/Pages/Home/Products/products';

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/posts" element={<Page />} />
            <Route path="/prods" element={<Products />} />
            <Route path="/" element={<Empty />} />
          </Routes>
        </BrowserRouter>

      </main>
      <Footer />
    </div>
  );
}

export default App;
