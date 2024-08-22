type LogoProps = {};

export default function Logo({}: LogoProps) {
  return (
    <>
      <div className="rounded-full h-20 w-20  mb-5 flex justify-center items-center border border-border">
        <span className="text-4xl font-bold"> A</span>
        <span className="text-4xl font-bold"> H</span>
      </div>
    </>
  );
}
