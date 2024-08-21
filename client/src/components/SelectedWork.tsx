import ProjectCard from "./ProjectCard";

type SelectedWorkProps = {};

export default function SelectedWork({}: SelectedWorkProps) {
  return (
    <section className="flex flex-col gap-5">
      <h2 className=" self-center font-bold text-4xl sm:self-start">
        Selected Works
      </h2>
      <section className="grid grid-cols-1 gap-6 items-center sm:grid-cols-4 ">
        <ProjectCard projectName="Project 1" projectType="Fullstack" />
        <ProjectCard projectName="Project 2" projectType="Frontend" />
        <ProjectCard projectName="Project 3" projectType="Frontend" />
        <ProjectCard projectName="Project 4" projectType="Fullstack" />
      </section>
    </section>
  );
}
