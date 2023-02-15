import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Blog } from './pages/Blog';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Blog />,
      },
    ],
  },
]);
