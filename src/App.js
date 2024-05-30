import './styles/App.css';
import './styles/home.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header2 from './components/Common/Header2';
import Header1 from './components/Common/Header1';
import Footer from './components/Common/Footer';
import Page from './components/Pages/Blogs/page';
import Empty from './components/Common/Empty';
import Products from './components/Pages/Home/Products/products';
import './output.css'

function App() {
  return (
    <div className='App'>
      <Header1 />
      <Header2 />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/posts" element={<Page />} />
            <Route path="/prods" element={<Products />} />
            <Route path="/" element={<Empty />} />
            <Route path="*" element={<Empty />} />
          </Routes>
        </BrowserRouter>

      </main>
      <br></br>
      <Footer />

    </div>
  );
}

export default App;
