import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
  } from "@radix-ui/react-navigation-menu";
  
  const Navbar2 = () => {
  
    return (
      <NavigationMenu 
        className={`border-none shadow-none bg-custom-radial-gradient z-50 fixed font-arsenalsc flex items-center justify-between p-4 px-16 text-white w-full bg-black transition-all duration-1000 ease-in-out`}
      >
        {/* Logo */}
        <div className="text-lg font-bold">SuaraBersih.</div>
  
        {/* Middle Side */} 
        <NavigationMenuList className="flex space-x-10 items-center text-sm tracking-widest">
          <NavigationMenuItem>
            <NavigationMenuLink className=" hover:text-slate-300" href="/">
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className=" hover:text-slate-300" href="/searchthread">
              Threads
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className=" hover:text-slate-300" href="/createpost">
              Create Post
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        {/* Right Side */}
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              className="text-xs hover:text-slate-300 hover:border-slate-300 border-white border rounded-sm  px-4 py-1.5 tracking-widest"
              href="/"
            >
              Login
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
  };
  
  export default Navbar2;
  