import { Button } from "./ui/button";

type HeroProps = {};

export default function Hero({}: HeroProps) {
  return (
    <div>
      <h2 className="text-xl text-bold">Hello! I´m Anton.</h2>
      <h1 className="text-7xl font-bold">
        Designing digital product with emphasis on{" "}
        <span className="text-secondary">visual design</span>
      </h1>
      <div className="flex flex-col-reverse mt-5 gap-5 sm:flex-row sm:justify-between ">
        <Button className="rounded-xl outline-4">Lets Talk</Button>
        <p className="sm:w-1/2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit atque
          doloribus illum aperiam maiores harum similique labore soluta.
          Consequuntur, perferendis?
        </p>
      </div>
    </div>
  );
}
