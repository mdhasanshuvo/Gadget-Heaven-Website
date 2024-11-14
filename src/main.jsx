import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Gadgets from './Components/Gadgets/Gadgets';
import CategoryData from './Components/CategoryData/CategoryData';
import Dashboard from './Components/Dashboard/Dashboard';
import Statistics from './Components/Statistics/Statistics';
import QA from './Components/QA/QA';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        children: [
          {
            path: '/',
            element: <Gadgets></Gadgets>,
          },
          {
            path: '/home/:category',
            element: <CategoryData></CategoryData>,
            loader: async ({ params }) => {
              const rest = await fetch('/gadget.json')
              const data = await rest.json()
              const items = data.filter(item => item.category === params.category);
              console.log(items);
              return items;
            }
          }
        ]
      },
      {
        path: '/gadget/:gadget_id',
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch('/gadget.json')
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
      },
      {
        path: '/stat',
        loader: () => fetch('/gadget.json'),
        element: <Statistics></Statistics>,
      },
      {
        path: '/qa',
        element: <QA></QA>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
