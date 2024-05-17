import logo from './logo.svg';
import './App.css';
import './css/header.css';
import './css/post.css'
import { LandingPage } from './pages/LandingPages';
import { Header } from './components/header/Header';


function App() {
  return (
    <>  
      <Header/>  
      <LandingPage/>
    </>
  );
}

export default App;
