import React from "react";
import { useUser, useClerk, Protect } from "@clerk/clerk-react";
import {
  Eraser,
  FileText,
  Hash,
  House,
  Image,
  LogOut,
  Scissors,
  SquarePen,
  Users,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/ai", label: "Dashboard", Icon: House },
  { to: "/ai/write-article", label: "Write Article", Icon: SquarePen },
  { to: "/ai/blog-titles", label: "Blog Titles", Icon: Hash },
  { to: "/ai/generate-images", label: "Generate Images", Icon: Image },
  { to: "/ai/remove-background", label: "Remove Background", Icon: Eraser },
  { to: "/ai/remove-object", label: "Remove Object", Icon: Scissors },
  { to: "/ai/review-resume", label: "Review Resume", Icon: FileText },
  { to: "/ai/community", label: "Community", Icon: Users },
];

const Sidebar = ({ sidebar, setSidebar }) => {
  const { user } = useUser();
  const { signOut, openUserProfile } = useClerk();

  return (
    <div
      className={`w-[280px] h-screen bg-white border-r border-gray-200 flex flex-col justify-between items-center max-sm:absolute top-14 bottom-0 ${
        sidebar ? "translate-x-0" : "max-sm:-translate-x-full"
      } transition-all duration-300 ease-in-out max-sm:w-full`}
    >
      <div className="my-7 w-full">
        {user ? (
          <div>
            <img
              src={user.imageUrl}
              alt="user avatar"
              className="w-13 rounded-full mx-auto"
            />
            <h1 className="mt-1 text-center">
              {user.firstName || user.fullName || user.username || "Anonymous"}
            </h1>
          </div>
        ) : (
          <p>Loading...</p>
        )}
        <div className="px-3 mt-5 text-sm font-medium">
          {navItems.map(({ to, label, Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/ai"}
              onClick={() => setSidebar(false)}
              className={({ isActive }) =>
                `px-3.5 py-2.5 flex items-center gap-3 rounded ${
                  isActive
                    ? "bg-gradient-to-r from-[#3C81F6] to-[#9234EA] text-white"
                    : ""
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon className={`w-4 h-4 ${isActive ? "text-white" : ""}`} />
                  {label}
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>
      <div className=" border-t border-gray-300 w-full py-5 px-3 flex align-center gap-3">
        <div
          onClick={openUserProfile}
          className="flex gap-2 items-center cursor-pointer"
        >
          <img src={user.imageUrl} alt="Img" className="rounded-full w-10" />
          <div>
            <h1 className=" text-sm font-medium">
              {user.firstName || user.fullName || user.username || "Anonymous"}
            </h1>
            <p className="text-xs text-gray-500">
              <Protect plan="premium" fallback="Free">
                Premium{" "}
              </Protect>
            </p>
          </div>
        </div>
        <LogOut
          onClick={signOut}
          className="w-4.5 text-gray-500 hover:text-gray-800 transition cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Sidebar;
