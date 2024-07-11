import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import { useEffect, useState } from "react";

const Navbar = () => {

  const [navbarOpacity, setNavbarOpacity] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setNavbarOpacity(20);
      } else {
        setNavbarOpacity(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <NavigationMenu
      className={`fixed font-montserrat flex items-center justify-between p-4 p px-16 text-white w-full bg-black bg-opacity-0 transition-all duration-1000 ease-in-out`}
    >
      {/* Logo */}
      <div className="text-lg font-bold">SuaraBersih.</div>

      {/* Middle Side */}
      <NavigationMenuList className="flex space-x-10 items-center text-sm">
        <NavigationMenuItem>
          <NavigationMenuLink className=" hover:text-slate-300" href="/">
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className=" hover:text-slate-300" href="/">
            Threads
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className=" hover:text-slate-300" href="/">
            News
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
      {/* Right Side */}
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            className=" text-sm hover:text-slate-300 hover:border-slate-300 border-white border rounded-sm  px-2 py-1"
            href="/"
          >
            Login
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
