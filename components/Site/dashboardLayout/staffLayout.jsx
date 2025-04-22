import React, { useEffect } from "react";
import SidebarAdmin from "./sidebarStaff";
import FooterAdmin from "./footer";
import Header4 from "../../../components/components/header/Header4";
import useAuth from '@/hooks/useAuth';
import { useRouter } from 'next/router';

const StaffMainLayout = ({ children }) => {
  const router = useRouter();
  const { user, loading } = useAuth({
    redirectTo: "/auth/login",
    redirectIfFound: false,
  });

  useEffect(() => {
    // If we have user data and they're not an admin, redirect to home
    // if (user && user.role !== 'staff') {
    //   router.push('/');
    // }
  }, [user, router]);

  // Show nothing while checking authentication
  if (loading || !user) {
    return null;
  }

  // If user is not admin, don't render the layout
  // if (user.role !== 'staff') {
  //   return null;
  // }

  return (
    <div dir="ltr" className="dashboard-wrapper">
      <Header4 />

      <SidebarAdmin />

      <div className="main-content">{children}</div>

      <FooterAdmin />
    </div>
  );
};

export default StaffMainLayout;
