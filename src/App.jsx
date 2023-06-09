import React from 'react';
import { GlobalStyle } from 'styles/GlobalStyles';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from 'pages/Root';
import Splash from 'pages/Splash/Splash';
import Home from 'pages/Home/Home';
import ProductDetail from 'pages/ProductDetail/ProductDetail';
import Cart from 'pages/Cart/Cart';
import NotFound from 'pages/NotFound/NotFound';
import Login from 'pages/Login/Login';
import Signup from 'pages/Signup/Signup';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
  },
  {
    path: '/',
    index: true,
    element: <Splash />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/login/signup',
    element: <Signup />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/products/<int:product_id>',
    element: <ProductDetail />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
]);

function App() {
  return (
    <React.StrictMode>
      <GlobalStyle />
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
export default App;
