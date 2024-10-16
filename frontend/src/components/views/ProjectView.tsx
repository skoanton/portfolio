import ProjectCard from "../projects/ProjectCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type ProjectViewProps = {};

export default function ProjectView({}: ProjectViewProps) {
  return (
    <div className="p-14">
      <Carousel opts={{ loop: true }}>
        <CarouselPrevious />
        <CarouselContent>
          <CarouselItem className="md:basis-1/3">
            <ProjectCard />
          </CarouselItem>
          <CarouselItem className="md:basis-1/3 ">
            <ProjectCard />
          </CarouselItem>
          <CarouselItem className=" md:basis-1/3">
            <ProjectCard />
          </CarouselItem>
        </CarouselContent>
        <CarouselNext />
      </Carousel>
    </div>
  );
}
