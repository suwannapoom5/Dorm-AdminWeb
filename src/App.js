import Home from "./pages/home/Home";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Login from "./pages/login/Login";
import Repair from "./pages/repair/Repair";
import Clean from "./pages/clean/Clean";
import Security from "./pages/security/Security";
import Room from "./pages/room/Room";
import Detail from "./pages/detail/Detail";
import Electricity from "./pages/electricity/Electricity";
import Water from "./pages/water/Water";
import New from "./pages/new/New";
import Calender from "./pages/calendar/Calender";
import Personnel from "./pages/personnel/Personnel"
import Notifybill from "./pages/notifybill/Notifybill";
import Paybill from "./pages/paybill/Paybill";
import "./styles/global.css";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";


const queryClient = new QueryClient();

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/repair",
          element: <Repair />,
        },
        {
          path: "/clean",
          element: <Clean />,
        },
        {
          path: "/security",
          element: <Security />,
        },
        {
          path: "/room",
          element: <Room />,
        },
        {
          path: "/detail",
          element: <Detail />,
        },
        {
          path: "/electricity",
          element: <Electricity />,
        },
        {
          path: "/water",
          element: <Water />,
        },
        {
          path: "/new",
          element: <New />,
        },
        {
          path: "/calendar",
          element: <Calender />,
        },
        {
          path: "/personnel",
          element: <Personnel />,
        },
        {
          path: "/notifybill",
          element: <Notifybill />,
        },
        {
          path: "/paybill",
          element: <Paybill />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;