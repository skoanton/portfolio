import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import { AlignJustify } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import Hero from "../Hero/Hero";

type HeaderProps = {};

const Header = ({}: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <header className="bg-primary w-screen border">
      <Button onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <AlignJustify />
      </Button>
      {isMenuOpen && (
        <NavigationMenu className="mx-auto pb-4">
          <NavigationMenuList className="gap-4 text-secondary flex-col">
            <NavigationMenuItem>
              <NavigationMenuLink>Home</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink>Featured projects</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink>About me</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink>Contact me</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      )}
      <Hero />
    </header>
  );
};

export default Header;
