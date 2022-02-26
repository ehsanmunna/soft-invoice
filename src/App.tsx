import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/Login/Login';
import Registration from './Pages/Registration/Registration';
import NotFound from './Pages/NotFound/NotFound';
import HomePage from './Pages/Home/Home';
import InvoiceCustomerPage from './Pages/Invoice/Invoice-Customer';
import InvoiceItemPage from './Pages/Invoice/Invoice-Item';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/invoice-customer" element={<InvoiceCustomerPage />} />
          <Route path="/invoice-item" element={<InvoiceItemPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/reg" element={<Registration />} />
          <Route path="/*" element={<NotFound/>} />
        </Routes> 
      </BrowserRouter>
    </div >
  );
}

export default App;
