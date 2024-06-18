import './styles/App.css';
import './styles/home.css';
import './output.css'
import './styles/Carrito.css';
import './styles/Auth.css'

import Header2 from './components/Common/Headers/Header2';
import Header1 from './components/Common/Headers/Header1';
import Footer from './components/Common/Footers/Footer';
import Routing from './components/Routes/Routing';
import CopyRights from './components/Common/Footers/CopyRights';

// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Empty from './components/Common/Empty';
// import Page from './components/Pages/Blogs/page';
// import Products from './components/Pages/Home/Products/products';
// import Error from './components/Common/Error';


function App() {
  return (
    <div className='App'>
      <Header1 />
      <Header2 />
      <main>
        <Routing />


      </main>
      <br></br>
      <Footer />
      <CopyRights />

    </div>
  );
}

export default App;
