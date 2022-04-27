import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Invoices from './components/routing/Invoices';
import Expenses from './components/routing/Expenses';
import NotFound from './components/routing/NotFound';
import InvoiceDetail from './components/routing/InvoiceDetail';
import Search from './components/routing/Search';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='invoices' element={<Invoices />}>
            <Route index
              element={
                <h3 className='index'>
                  Select Invoice...
                </h3>
              } />
            <Route path=':InvoiceId' element={<InvoiceDetail />} />
          </Route>
          <Route path='expenses' element={<Expenses />} />
          <Route path='search' element={<Search />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);