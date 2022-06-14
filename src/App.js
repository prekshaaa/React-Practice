import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/TextForm';

function App() {
  return (
    <>
    <Navbar title="Gigvistas" navItemOne="Blog" navItemTwo="Services" navItemThree="How It Works" navItemFour="About Us" navItemFive="Login" navItemSix="Sign Up"/>
    <Textform/>
    </>
  );
}

export default App;
