import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Checkout } from './pages/Checkout';
import { Main } from './pages/Main';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Main />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/success' />
      </Route>
    </Routes>
  );
}