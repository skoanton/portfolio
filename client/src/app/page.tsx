import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-5 sm:gap-10">
      <Hero />
      <SelectedWork />
      <hr className="border border-black"></hr>
      <AboutMe />
    </main>
  );
}
