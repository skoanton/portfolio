type HeaderProps = {};
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Header({}: HeaderProps) {
  return (
    <header className="flex justify-between">
      <div className="rounded-full h-20 w-20  mb-5 flex justify-center items-center border border-black">
        <span className="text-4xl font-bold "> A</span>
        <span className="text-4xl font-bold"> H</span>
      </div>
      <nav>
        <ul className="flex justify-end gap-5">
          <li>
            <Button
              className="hidden sm:block rounded-xl outline-4"
              variant="outline"
            >
              Let´s Talk
            </Button>
          </li>
          <li>
            <Button className="rounded-xl outline-4" variant="outline">
              <Menu />
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
