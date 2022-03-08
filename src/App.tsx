import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import NotFound from './pages/NotFound/NotFound';
import HomePage from './pages/Home/Home';
import InvoiceCustomerPage from './pages/Invoice/Invoice-Customer';
import InvoiceItemPage from './pages/Invoice/Invoice-Item';
import InvoiceCreatePage from './pages/Invoice/Invoice-Create';
import InvoicePrintPage from './pages/Invoice/Invoice-Print';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/invoice-customer" element={<InvoiceCustomerPage />} />
          <Route path="/invoice-item" element={<InvoiceItemPage />} />
          <Route path="/invoice-create" element={<InvoiceCreatePage />} />
          <Route path="/invoice-print" element={<InvoicePrintPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/*" element={<NotFound/>} />
        </Routes> 
      </BrowserRouter>
    </div >
  );
}

export default App;
