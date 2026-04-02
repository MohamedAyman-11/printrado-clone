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
import ProductDetailsCard from "../components/ProductDetails/ProductDetailsCard";
import Technology from "./Technology";
import Management from "./Management";
import SelfHelp from "./SelfHelp";
import WishList from "./Wishlist";
import SearchResult from "./SearchResult";
import MyAccount from "./MyAccount";
import Cart from "./Cart";
import Contact from "./Contact";
import NotFound from "./NotFound";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="software-engineering" element={<Software />} />
      <Route path="data-science" element={<Data />} />
      <Route path="technology" element={<Technology />} />
      <Route path="security" element={<Security />} />
      <Route path="management" element={<Management />} />
      <Route path="self-help" element={<SelfHelp />} />
      <Route path="about-us" element={<About />} />
      <Route path="contact-us" element={<Contact />} />
      <Route path="search" element={<SearchResult />} />
      <Route path="my-account" element={<MyAccount />} />
      <Route path="cart" element={<Cart />} />
      <Route path="wishlist" element={<WishList />} />
      {/* Products Details Page */}
      <Route path="product/:slug" element={<ProductDetailsCard />} />
      {/* Page Not Found  */}
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);
