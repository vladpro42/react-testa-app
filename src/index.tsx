import ReactDOM from 'react-dom/client';
import './css/index.css';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import './css/App.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <RouterProvider router={router} />
);
