import ProjectCard from "./ProjectCard";

type SelectedWorkProps = {};

export default function SelectedWork({}: SelectedWorkProps) {
  return (
    <section className="mt-12 flex flex-col gap-5 items-center">
      <h2 className="font-bold text-2xl sm:self-start">Selected Works</h2>

      <section className="grid grid-cols-1 gap-6 items-center sm:grid-cols-4 ">
        <ProjectCard projectName="Project 1" />
        <ProjectCard projectName="Project 2" />
        <ProjectCard projectName="Project 3" />
        <ProjectCard projectName="Project 4" />
      </section>
    </section>
  );
}
