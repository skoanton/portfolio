import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import { LuMail } from "react-icons/lu";

type AboutMeProps = {};

const AboutMe = ({}: AboutMeProps) => {
  return (
    <>
      <section className="flex flex-col gap-4 justify-center items-center bg-primary pb-4">
        <h2 className="text-primary-foreground">
          About <span className="text-red-500">me</span>.
        </h2>
        <Avatar className="w-28 h-28">
          <AvatarImage src="public/assets/selfie.png" />
          <AvatarFallback>AH</AvatarFallback>
        </Avatar>

        <p className="text-primary-foreground text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          voluptatem quod sint magni, officia maxime eos saepe veniam placeat
          vitae, eligendi obcaecati veritatis, eaque doloremque! Necessitatibus
          fugit id culpa voluptas, totam suscipit odit officia! Ullam quibusdam
          repellat recusandae vel, quod quisquam modi nulla at cumque voluptatem
          perferendis soluta nam numquam!
        </p>
        <h2 className="text-primary-foreground">
          Technical <span className="text-red-500">skills</span>.
        </h2>
        <section className="grid grid-cols-3 gap-4">
          <div className=" rounded-full w-24 h-24 bg-secondary flex justify-center items-center font-bold p-4">
            HTML5
          </div>
          <div className=" rounded-lg w-24 h-24 bg-secondary flex justify-center items-center font-bold p-4">
            JAVASCRIPT
          </div>
          <div className=" rounded-full w-24 h-24 bg-secondary flex justify-center items-center font-bold p-4">
            CSS3
          </div>
          <div className=" rounded-lg w-24 h-24 bg-secondary flex justify-center items-center font-bold p-4">
            REACT
          </div>
          <div className=" rounded-full w-24 h-24 bg-secondary flex justify-center items-center font-bold p-4">
            TAILWIND
          </div>{" "}
          <div className=" rounded-lg w-24 h-24 bg-secondary flex justify-center items-center font-bold p-4">
            TYPESCRIPT
          </div>
        </section>
        <Button variant="secondary">
          <LuMail className="w-8 h-8 mr-4 text-secondary-foreground" />
          Contact me
        </Button>
      </section>
    </>
  );
};

export default AboutMe;
