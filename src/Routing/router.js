import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import Gallery from "../pages/Gallery/Gallery";

export const Router = [
  {
    path: "/",
    exact: true,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/hostwedding", element: <Gallery /> },
    ],
  },
];
