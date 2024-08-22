type ProjectCardProps = {
  projectName: string;
  projectType: string;
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
import { ArrowRight } from "lucide-react";
export default function ProjectCard({
  projectName,
  projectType,
}: ProjectCardProps) {
  return (
    <>
      <Card className="flex flex-col items-center justify-center rounded-2xl cursor-default shadow-md shadow-gray-400 bg-background transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-accent duration-300">
        <CardContent className="w-52 h-48 mt-5 rounded-2xl">
          <img src="banan.png" alt="" />
        </CardContent>
        <CardFooter className="flex flex-col">
          <div className="flex flex-col gap-2">
            <CardTitle className="">{projectName}</CardTitle>
            <p className="text-center">{projectType}</p>
          </div>
          <Button variant={"link"} className="underline">
            Read more
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
