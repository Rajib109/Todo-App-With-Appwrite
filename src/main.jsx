import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import Login from './components/Login.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

const root = document.getElementById("root");

createRoot(root).render(
  <Provider store={store}>
    <RouterProvider router={router} />,
  </Provider>
);
