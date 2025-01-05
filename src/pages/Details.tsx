import Container from "@/components/Container";
import Hero from "@/components/Hero";
import { formattedResponse } from "@/lib/characters";
import { useLoaderData } from "react-router";

const Details = () => {
  const data = useLoaderData();

  const { name, dateOfBirth, gender, house, alternate_names, image } =
    formattedResponse(data.character);

  return (
    <div className="flex min-h-screen flex-col bg-lavender-100">
      <Hero classname="bg-castleton-900 mb-8 text-lavender-100 rounded-b-3xl ">
        <h1 className="mb-5 px-8 text-6xl uppercase">{name}</h1>
        <div className="relative flex h-full justify-evenly">
          <div className="h-[240px] w-[240px]">
            <img src={`/images/${house.toLowerCase()}.png`} alt="" />
          </div>
          <div className="relative h-[340px] min-w-[240px] max-w-[320px] overflow-hidden">
            <img src={image} alt="" className="object-cover" />
          </div>
        </div>
      </Hero>
      <section className="mx-8 mb-14 rounded-3xl bg-lavender-300 p-4">
        <Container classname="flex flex-col gap-4">
          <div className="flex flex-col">
            <div className="text-base text-slate-600">Date of Birth</div>
            <h6 className="text-3xl font-medium text-castleton-950">
              {dateOfBirth}
            </h6>
          </div>
          <div className="flex flex-col">
            <div className="text-base text-slate-600">Gender</div>
            <h6 className="text-3xl font-medium text-castleton-950">
              {gender}
            </h6>
          </div>
          <div className="flex flex-col">
            <div className="text-base text-slate-600">House</div>
            <h6 className="text-3xl font-medium text-castleton-950">{house}</h6>
          </div>
          <div className="flex flex-col">
            <div className="text-base text-slate-600">Aliases</div>
            <ul className="text-3xl font-medium text-castleton-950">
              {alternate_names &&
                alternate_names.map((name: string) => (
                  <li key={name}>{name}</li>
                ))}
            </ul>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Details;
