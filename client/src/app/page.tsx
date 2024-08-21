import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <SelectedWork />
    </main>
  );
}
