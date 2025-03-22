import './App.css';
import Home from './pages/Home'
import CustomerLogin from './pages/Customer_login';
import CustomerSignup from './pages/Customer_signup';
// import Reviews from './components/reviews';
// import Contact from './components/contact';
import BusinessLogin from './pages/Business_login';
import BusinessSignup from './pages/Business_signup';
import { 
  BrowserRouter as Router, 
  Route, 
  Routes } from 'react-router-dom';


function App() {
  return (
    <main className="main-content">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<CustomerLogin />} />
          <Route path="/signup" element={<CustomerSignup />} />
          {/* <Route path="/write-a-review" element={<Reviews />} /> */}
          <Route path="/business-login" element={<BusinessLogin />} />
          <Route path="/business-signup" element={<BusinessSignup />} />
          {/* <Route path="/contact" element={<Contact />} /> */}

        </Routes>
    </Router>
    </main>
  );
}

export default App;