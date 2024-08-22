type HeaderProps = {};
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
export default function Header({}: HeaderProps) {
  return (
    <header className="flex justify-between">
      <div className="rounded-full h-20 w-20  mb-5 flex justify-center items-center border border-border">
        <span className="text-4xl font-bold"> A</span>
        <span className="text-4xl font-bold"> H</span>
      </div>
      <nav>
        <ul className="flex justify-end gap-5">
          <li>
            <Button className="hidden sm:block rounded-xl outline-4 bg-secondary text-secondary-foreground">
              Let´s Talk
            </Button>
          </li>
          <li>
            <Drawer>
              <DrawerTrigger className="rounded-xl outline-4">
                <Menu />
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader className="grid grid-cols-3">
                  <DrawerTitle className="col-start-2 self-center ">
                    Menu
                  </DrawerTitle>
                  <DrawerClose className="justify-self-end">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
                      />
                    </svg>
                  </DrawerClose>
                </DrawerHeader>
                <ul className="flex flex-col gap-10 font-bold text-2xl items-center p-5 ">
                  <li>Home</li>
                  <li>About me</li>
                  <li>Projects</li>
                  <li>Contact me</li>
                </ul>
              </DrawerContent>
            </Drawer>
          </li>
        </ul>
      </nav>
    </header>
  );
}
