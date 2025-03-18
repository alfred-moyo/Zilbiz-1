import logo from './logo.png';
import {FaSearch} from "react-icons/fa";
import './App.css';
import 'animate.css'

function App() {
  return (
    <div className="App">
      <nav>
        <img src={logo} className="App-logo" alt="logo" />
        <div className="search-bar">
          <input type="text" placeholder="Search"/>
          <button><FaSearch /></button>
        </div>
        <ul>
          <li><a href="#write-a-review">Write a review</a></li>
          <li><a href="#business"> Business</a></li>
        </ul>
        <button type="button">LOGIN</button>
      </nav>
      <div class="container">
        <h1>ZilBiz</h1>
        <h3>Empower Your Business, Elevate Your Presence! <span>🚀</span></h3>
        <p>
        Welcome to ZilBiz, Mauritius’s premier SME listing and review platform! 
        Whether you're a small business owner looking to grow or a customer searching 
        for the best local services, we’ve got you covered. ✨
        </p>
        <button>Register Your Business</button>
      </div>
      <div class="spotlight">
        {/* <h2>Spotlight</h2> */}
        <div> 
        </div>
        <div> 
        </div>
        <div> 
        </div>
      </div>
    </div>
  );
}

export default App;
