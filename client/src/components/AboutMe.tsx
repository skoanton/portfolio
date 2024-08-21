type AboutMeProps = {};

export default function AboutMe({}: AboutMeProps) {
  return (
    <section className="flex flex-col items-center gap-5">
      <h2 className="font-bold text-3xl sm:self-start">About me</h2>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col justify-center items-center gap-5">
          <img
            src="selfie.png"
            alt=""
            className="rounded-full w-48 h-48 shadow-md shadow-gray-500"
          />
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
            laudantium maiores. Doloribus, corporis officia. Rem ratione, modi
            assumenda nulla dolore incidunt aut molestias quo error nobis,
            deserunt expedita adipisci tempora. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Enim, laudantium maiores. Doloribus,
            corporis officia. Rem ratione, modi assumenda nulla dolore incidunt
            aut molestias quo error nobis, deserunt expedita adipisci tempora.
          </p>
        </div>
        <h3 className="font-bold text-xl text-center">Skills</h3>
        <ul className="flex flex-col items-center gap-2">
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Typescript</li>
        </ul>
      </div>
    </section>
  );
}
