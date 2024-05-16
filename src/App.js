import './App.css';
import Posts from './components/Pages/Home/Posts/posts';
import Categoria from './components/Pages/Home/Categoria/Categoria';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import Users from './components/Pages/Home/Users/Users';

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <Posts />
        <Categoria />
        <Users />
      </main>
      <Footer />
    </div>
  );
}

export default App;
