import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@radix-ui/react-navigation-menu';
import { Input } from './ui/input';
import { Button } from './ui/button';

const Navbar = () => {
  return (
    <NavigationMenu className="absolute flex items-center justify-between p-4 text-white w-full bg-transparent">
      {/* Logo */}
      <div className="text-lg font-bold">SuaraBersih.</div>

      {/* Middle Side */}
      <NavigationMenuList className="flex space-x-10 items-center">
        <NavigationMenuItem>
          <NavigationMenuLink className=" hover:text-blue-500" href="/">Home</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className=" hover:text-blue-500" href="/">Post</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className=" hover:text-blue-500" href="/">Trending</NavigationMenuLink>
        </NavigationMenuItem>
        <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="text" placeholder="Search threads, posts & more..." className='min-w-80'/>
      <Button type="submit">Find</Button>
    </div>
      </NavigationMenuList>


      {/* Right Side */}
      <NavigationMenuList>
      <NavigationMenuItem>
          <NavigationMenuLink className=" hover:text-blue-500 border-white border rounded-sm  px-2 py-1" href="/">Login</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
