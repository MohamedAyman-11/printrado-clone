import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "./RootLayout";
import About from "./About";
import Home from "./Home";
import Security from "./Security";
import Software from "./Software";
import Data from "./Data";
import ProductDetailsCard from "../components/ProductDetailsCard";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="security" element={<Security />} />
      <Route path="software-engineering" element={<Software />} />
      <Route path="data-science" element={<Data />} />
      <Route path="about-us" element={<About />} />
      {/* Products Details Page */}
      <Route path="/product/:slug" element={<ProductDetailsCard />} />
    </Route>,
  ),
);
