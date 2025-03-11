import logo from './logo.png';
import './App.css';
import 'animate.css'

function App() {
  return (
    <div className="App">
      <body>
        <nav>
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
            <li><a href="#about">Write a review</a></li>
            <li><a href="business"> Business</a></li>
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
        </div>
          
      </body>
      
    </div>
  );
}

export default App;
