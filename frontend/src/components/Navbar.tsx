import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import { useEffect, useState } from "react";

import logo from "@assets/logo.png"
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [navbarOpacity, setNavbarOpacity] = useState<number>(85);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setNavbarOpacity(85);
      } else {
        setNavbarOpacity(85);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarStyles = {
    backgroundColor: `rgba(0, 0, 0, ${navbarOpacity / 100})`,
    transition: "background-color 0.3s ease-in-out",
  };

  return (
    <NavigationMenu
      style={navbarStyles}
      className={`z-50 fixed font-arsenalsc flex items-center justify-between p-4 px-16 text-white w-full bg-black transition-all duration-1000 ease-in-out`}
    >
      {/* Logo */}
      <div className="text-lg font-bold flex flex-row gap-x-2 justify-center items-center"
        onClick={() => navigate("/")}
      >
        <img src={logo} className="w-6" alt="" />
        <h1>SuaraBersih.</h1>
      </div>

      {/* Middle Side */}
      <NavigationMenuList className="flex space-x-10 items-center text-sm tracking-widest">
        <NavigationMenuItem>
          <NavigationMenuLink className=" hover:text-slate-300" href="/home">
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className=" hover:text-slate-300"
            href="/search/thread/%20"
          >
            Threads
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className=" hover:text-slate-300"
            href="/blackbox"
          >
            Black Box
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
      {/* Right Side */}
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            className="text-xs hover:text-slate-300 hover:border-slate-300 border-white border rounded-sm  px-5 py-2 tracking-widest"
            href="/create/post"
          >
            + Post
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
