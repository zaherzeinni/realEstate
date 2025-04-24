import React, { useState } from "react";
import { Modal } from "antd";
import { Button } from "antd";
import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import router from "next/router";

const LoginModal = ({ open, onClose, isOpen }) => {
  const [loading, setLoading] = useState(false);
  // const [open, setOpen] = useState(false);

  // Use the useAuth hook to get user information

  const { user, logout } = useAuth() || {}; // Ensure useAuth returns an object
  const userName = user?.name || "Guest";
  const userEmail = user?.email || "Not Available";
  const userRole = user?.role || "Not Available";
  console.log("userRoleee", userRole);

  const handleLogout = async () => {
    localStorage.clear();
    // console.log("logout⚡⚡⚡⚡⚡⚡");
    await logout();
    router.reload();
    router.push("/auth/login");
  };

  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // setOpen(false);
      isOpen(false);
    }, 3000);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button onClick={showModal}></Button>
      <Modal
        className="justify-start flex w-auto"
        open={open}
        title=""
        onOk={handleOk}
        onCancel={onClose}
        footer={[
          // <Button key="back" onClick={handleCancel}  >

          userRole === "Not Available" ? null : (
            <Button key="back" onClick={handleLogout}>
              Logout
            </Button>
          ),

          userRole === "Not Available" ? (
            <Link href="/admin" className="text-white">
              <Button
                key="submit"
                className=" primary-btn2 text-white mr-3 "
                loading={loading}
                onClick={handleOk}
              >
                Login
              </Button>
            </Link>
          ) : userRole === "admin" ? (
            <Link href="/admin" className="text-white">
              <Button
                key="submit"
                className=" primary-btn2 text-white mr-3 "
                loading={loading}
                onClick={handleOk}
              >
                Admin Dashboard
              </Button>
            </Link>
          ) : userRole === "staff" ? (
            <Link
              href="/staff/properties/properties-table"
              className="text-white"
            >
              <Button
                key="submit"
                className=" primary-btn2 text-white mr-3 "
                loading={loading}
                onClick={handleOk}
              >
                Staff Dashboard
              </Button>
            </Link>
          ) : null,
        ]}
      >
        {/* Display user information */}
        <div className="user-info mt-4 ">
          <ul dir="ltr" className="list-disc- list-inside">
            <li className="text-lg font-bold  underline-offset-2 underline">
              User Information:
            </li>
            <li className="text-sm">
              Name: <b>{userName}</b>
            </li>
            <li className="text-sm">
              Email: <b>{userEmail}</b>
            </li>
            <li className="text-sm">
              Role: <b>{userRole}</b>
            </li>
          </ul>
        </div>
      </Modal>
    </div>
  );
};
export default LoginModal;
