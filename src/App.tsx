import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/Login/Login';
import Registration from './Pages/Registration/Registration';
import NotFound from './Pages/NotFound/NotFound';
import HomePage from './Pages/Home/Home';
import InvoiceCustomerPage from './Pages/Invoice/Invoice-Customer';
import InvoiceItemPage from './Pages/Invoice/Invoice-Item';
import InvoiceCreatePage from './Pages/Invoice/Invoice-Create';
import InvoicePrintPage from './Pages/Invoice/Invoice-Print';

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
