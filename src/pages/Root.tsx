import AboutMe from "@/components/AboutMe/AboutMe";
import Header from "../components/Header/Header";

type RootProps = {};

const Root = ({}: RootProps) => {
  return (
    <>
      <Header />
      <AboutMe />
    </>
  );
};

export default Root;
