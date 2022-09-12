import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Main } from './pages/Main';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Main />} />
        <Route path='/checkout' />
        <Route path='/success' />
      </Route>
    </Routes>
  );
}