type ProjectCardProps = {
  projectName: string;
};
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
export default function ProjectCard({ projectName }: ProjectCardProps) {
  return (
    <>
      <Card className="flex flex-col items-center justify-center rounded-2xl cursor-pointer  bg-gray-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-300 duration-300">
        <CardContent className="w-52 h-48 mt-5 rounded-2xl">
          <img src="banan.png" alt="" />
        </CardContent>
        <CardHeader>
          <CardTitle>{projectName}</CardTitle>
        </CardHeader>
        <CardFooter className="flex flex-col gap-5">
          <CardDescription className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            adipisci porro obcaecati maxime? Error beatae ab aperiam? Accusamus,
            magnam hic!
          </CardDescription>
          <Button>See More</Button>
        </CardFooter>
      </Card>
    </>
  );
}
