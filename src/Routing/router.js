import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import Gallery from "../pages/Gallery/Gallery";
import StepperComponent from "../components/common/stepper.component";

export const Router = [
  {
    path: "/",
    exact: true,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/host_wedding", element: <StepperComponent /> },
    ],
  },

  // {
  //   path: "/host_wedding",
  //   exact: true,
  //   children: [
  //     { path: "1", element: <Step1 /> },
  //     { path: "2", element: <Step2 /> },
  //     { path: "3", element: <Step3 /> },
  //   ],
  // },
];
