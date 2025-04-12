import './App.css';
import Home from './pages/Home'
import CustomerLogin from './pages/Customer_login';
import CustomerSignup from './pages/Customer_signup';
import Reviews from './pages/Reviews';
import ContactUs from './pages/Contact';
import BusinessLogin from './pages/Business_login';
import BusinessSignup from './pages/Business_signup';
import BusinessDashboard from './pages/Businesspage';
import VerifiedDashboard from './pages/BusinessVerifiedDash';
import About from './pages/About';
import FAQ from './pages/FAQ';
import TermsAndConditions from './pages/TermsAndConditions'
import TermsOfUse from './pages/TermsOfUse';
import NotFound from './components/404'
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
          <Route path="/write-a-review" element={<Reviews />} />
          <Route path="/business-login" element={<BusinessLogin />} />
          <Route path="/business-signup" element={<BusinessSignup />} />
          <Route path="/business" element={<BusinessDashboard />} />
          <Route path="/verified-business" element={<VerifiedDashboard />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms&conditions" element={<TermsAndConditions />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/error404" element={<NotFound />} />

        </Routes>
    </Router>
    </main>
  );
}

export default App;