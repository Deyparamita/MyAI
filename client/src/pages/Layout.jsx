import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { Menu, X } from "lucide-react";
import Sidebar from "../components/Sidebar";
import { SignIn, useUser } from "@clerk/clerk-react";

const Layout = () => {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);
  const { user } = useUser(false);

  return user ? (
    <div className="flex flex-col justify-start items-start h-screen">
      <nav className="w-full px-8 min-h-14 flex justify-between items-center border-b border-gray-200">
        <img src={assets.MyAI} alt="logo" className="w-32 sm:w-44" onClick={() => navigate("/")} />
        {sidebar ? (
          <X
            onClick={() => setSidebar(false)}
            className="w-6 h-6 text-gray-600 sm:hidden"
          />
        ) : (
          <Menu
            onClick={() => setSidebar(true)}
            className="w-6 h-6 text-gray-600 sm:hidden"
          />
        )}
      </nav>

      <div className="flex-l w-full flex h-[calac(100vh-64px)]">
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
        <div className="flex-l bg-[#F4F7FB] w-full">
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center h-screen">
      <SignIn />
    </div>
  );
};

export default Layout;
