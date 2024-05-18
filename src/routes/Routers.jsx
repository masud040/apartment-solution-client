import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layouts/DashboardLayour/Dashboard";
import Main from "../Layouts/Main";
import Apartment from "../pages/Apartment/Apartment";
import AdminProfile from "../pages/Dashboard/Admin/AdminProfile";
import AgreementRequest from "../pages/Dashboard/Admin/AgreementRequest";
import MakeAnnouncement from "../pages/Dashboard/Admin/MakeAnnouncement";
import ManageCoupons from "../pages/Dashboard/Admin/ManageCoupons";
import ManageMember from "../pages/Dashboard/Admin/ManageMember";
import Announcement from "../pages/Dashboard/Announcement";
import MakePayment from "../pages/Dashboard/Member/MakePayment";
import Payment from "../pages/Dashboard/Member/Payment";
import PaymentHistory from "../pages/Dashboard/Member/PaymentHistory";
import MyProfile from "../pages/Dashboard/MyProfile";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import Register from "../pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute";
import MemberRoute from "./MemberRoute";
import PrivateRoute from "./PrivateRoute";

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
        loader: () => fetch("http://localhost:5000/apartments-length"),
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
      {
        path: "manage-coupons",
        element: (
          <AdminRoute>
            <ManageCoupons />
          </AdminRoute>
        ),
      },
    ],
  },
]);
export default router;
