import AboutMe from "@/components/AboutMe/AboutMe";
import Header from "../components/Header/Header";
import Projects from "@/components/Projects/Projects";

type RootProps = {};

const Root = ({}: RootProps) => {
  return (
    <>
      <Header />
      <Projects />
      <AboutMe />
    </>
  );
};

export default Root;
