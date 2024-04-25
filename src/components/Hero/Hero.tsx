import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";
import { LuGithub, LuLinkedin, LuMail, LuTwitter } from "react-icons/lu";

type HeroProps = {};

const Hero = ({}: HeroProps) => {
  return (
    <>
      <div className="h-max text-primary-foreground text-center p-4">
        <h1 className="text-3xl ">
          Hi, I am <span className="text-red-500">Anton Håkansson</span>
        </h1>
        <p className="mt-2">
          A seasoned <span className=" text-red-500">Frontend Developer</span>{" "}
          transforming idea into stunning digital experiences. Lets Create
          something amazing.
        </p>
      </div>
      <NavigationMenu className="pb-4 flex justify-center mt-5">
        <NavigationMenuList className="gap-4 flex flex-row">
          <NavigationMenuItem>
            <NavigationMenuLink>
              <LuMail className="w-8 h-8 text-primary-foreground" />
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink>
              <LuLinkedin className="w-8 h-8 text-primary-foreground" />
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink>
              <LuGithub className="w-8 h-8 text-primary-foreground" />
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink>
              <LuTwitter className="w-8 h-8 text-primary-foreground" />
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};

export default Hero;
