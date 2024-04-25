import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type ProjectsProps = {};

const Projects = ({}: ProjectsProps) => {
  return (
    <section className="bg-primary flex flex-col gap-4 items-center ">
      <h2 className="text-primary-foreground">
        Featured <span className="text-red-500">projects</span>
      </h2>

      <Card className="w-3/4 flex justify-center flex-col items-center bg-primary border-none">
        <CardContent className=" p-0 border w-48 h-48 bg-secondary flex items-center justify-center">
          <img
            className="w-full h-full"
            src="public/assets/hero-background.jpg"
            alt=""
          />
        </CardContent>
        <CardHeader>
          <CardTitle className="text-primary-foreground">Project 1</CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            eius, facere aliquid aperiam nisi dicta!
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className="w-3/4 flex justify-center flex-col items-center bg-primary border-none">
        <CardContent className=" p-0 border w-48 h-48 bg-secondary flex items-center justify-center">
          <img
            className="w-full h-full"
            src="public/assets/hero-background.jpg"
            alt=""
          />
        </CardContent>
        <CardHeader>
          <CardTitle className="text-primary-foreground">Project 1</CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            eius, facere aliquid aperiam nisi dicta!
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className="w-3/4 flex justify-center flex-col items-center bg-primary border-none">
        <CardContent className=" p-0 border w-48 h-48 bg-secondary flex items-center justify-center">
          <img
            className="w-full h-full"
            src="public/assets/hero-background.jpg"
            alt=""
          />
        </CardContent>
        <CardHeader>
          <CardTitle className="text-primary-foreground">Project 1</CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            eius, facere aliquid aperiam nisi dicta!
          </CardDescription>
        </CardHeader>
      </Card>
    </section>
  );
};

export default Projects;
