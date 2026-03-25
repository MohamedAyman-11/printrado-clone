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

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="security" element={<Security />} />
      <Route path="software-engineering" element={<Software />} />
      <Route path="about-us" element={<About />} />
    </Route>,
  ),
);
