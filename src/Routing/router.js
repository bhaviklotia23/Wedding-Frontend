import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import Gallery from "../pages/Gallery/Gallery";
import HostWedding from "../pages/HostWedding/HostWedding";
import CustomTabs from "../pages/Test/CustomTabs";
import { Step3DataProvider } from "../context/Step3Context";
import Test from "../pages/Test/Test";

export const Router = [
  {
    path: "/",
    exact: true,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/host_wedding", element: <HostWedding /> },
      {
        path: "/test",
        element: (
          <Test />
          // <Step3DataProvider>
          //   <CustomTabs />
          // </Step3DataProvider>
        ),
      },
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
