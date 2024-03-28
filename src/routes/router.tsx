import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProductsList from "../components/ProductsList/ProductsList";
import ProductDetail from "../components/ProductDetail/ProductDetail";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <ProductsList />
      },
      {
        path: '/product-detail/:productId',
        element: <ProductDetail />
      },
    ]
  }
]);

export default router;
