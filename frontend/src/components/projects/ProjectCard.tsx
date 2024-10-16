import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type ProjectCardProps = {};

export default function ProjectCard({}: ProjectCardProps) {
  return (
    <>
      <Card className="cursor-pointer hover:animate-out md:flex md:flex-row md:items-center">
        <CardHeader className="md:w-1/2">
          <CardTitle>Project 1</CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            aperiam iste neque accusantium facilis, ea odit, doloribus esse
            nostrum distinctio eaque cupiditate dolorum ipsum incidunt explicabo
            ad aliquid reprehenderit corporis.
          </CardDescription>
        </CardHeader>
        <CardContent className="md:w-1/2">
          <img src="/projectplaceholder.jpg" alt="project overview" />
        </CardContent>
      </Card>
    </>
  );
}
