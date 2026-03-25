import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "./RootLayout";
import About from "./About";
import Home from "./Home";
import ProductList from "./Security";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="security" element={<ProductList />} />
      <Route path="about-us" element={<About />} />
    </Route>,
  ),
);
