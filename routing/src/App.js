import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
const router = createBrowserRouter([
  { path: "/", element: <HomePage />, errorElement: <HomePage /> },
  { path: "/products", element: <Products />, errorElement: <HomePage /> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
