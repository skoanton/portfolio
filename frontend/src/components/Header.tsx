type HeaderProps = {};

export default function Header({}: HeaderProps) {
  return (
    <>
      <header className="bg-primary p-5 flex flex-col items-center md:flex-row md:justify-between md:mb-24">
        <h1 className="text-primary-foreground text-6xl font-bold text-center animate-fadeIn md:text-8xl">
          Anton Håkansson
        </h1>
        <p className="text-primary-foreground animate-fadeIn">
          Here are some projects i made
        </p>
      </header>
    </>
  );
}
