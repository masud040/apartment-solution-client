import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home";
import Apartment from "../pages/Apartment/Apartment";
import Login from "../pages/Login/Login";
import Register from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../pages/NotFound/NotFound";
import Dashboard from "../Layouts/DashboardLayour/Dashboard";
import MyProfile from "../pages/Dashboard/MyProfile";
import Announcement from "../pages/Dashboard/Announcement";
import MakePayment from "../pages/Dashboard/Member/MakePayment";
import PaymentHistory from "../pages/Dashboard/Member/PaymentHistory";
import AdminProfile from "../pages/Dashboard/Admin/AdminProfile";
import ManageMember from "../pages/Dashboard/Admin/ManageMember";
import MakeAnnouncement from "../pages/Dashboard/Admin/MakeAnnouncement";
import AgreementRequest from "../pages/Dashboard/Admin/AgreementRequest";
import MemberRoute from "./MemberRoute";
import AdminRoute from "./AdminRoute";
import Payment from "../pages/Dashboard/Member/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/apartment",
        element: (
          <PrivateRoute>
            <Apartment />
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/apartments-length"),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "my-profile",
        element: <MyProfile />,
      },
      {
        path: "announcements",
        element: <Announcement />,
      },
      {
        path: "make-payment",
        element: (
          <MemberRoute>
            <MakePayment />
          </MemberRoute>
        ),
      },
      {
        path: "payment",
        element: (
          <MemberRoute>
            <Payment />
          </MemberRoute>
        ),
      },
      {
        path: "payment-history",
        element: (
          <MemberRoute>
            <PaymentHistory />
          </MemberRoute>
        ),
      },
      {
        path: "admin-profile",
        element: (
          <AdminRoute>
            <AdminProfile />
          </AdminRoute>
        ),
      },
      {
        path: "manage-members",
        element: (
          <AdminRoute>
            <ManageMember />
          </AdminRoute>
        ),
      },
      {
        path: "make-announcement",
        element: (
          <AdminRoute>
            <MakeAnnouncement />
          </AdminRoute>
        ),
      },
      {
        path: "agreements",
        element: (
          <AdminRoute>
            <AgreementRequest />
          </AdminRoute>
        ),
      },
    ],
  },
]);
export default router;
