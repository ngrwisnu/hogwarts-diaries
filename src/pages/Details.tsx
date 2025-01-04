import Hero from "@/components/Hero";

const Details = () => {
  return (
    <div className="min-h-screen bg-lavender-100">
      <Hero classname="bg-castleton-900 mb-8 text-lavender-100 rounded-b-3xl ">
        <h1 className="mb-5 px-8 text-6xl uppercase">Harry Potter</h1>
        <div className="relative h-full">
          <div className="absolute h-[240px] w-[240px] bg-[url('/images/gryffindor.png')] bg-cover bg-no-repeat opacity-30"></div>
          <div className="relative ml-auto h-[340px] min-w-[240px] max-w-[320px] bg-slate-200"></div>
        </div>
      </Hero>
      <section className="bg-lavender-300 mx-8 mb-14 flex flex-col gap-4 rounded-3xl p-4">
        <div className="flex flex-col">
          <div className="text-base text-slate-600">Date of Birth</div>
          <h6 className="text-3xl font-medium text-castleton-900">11-2-1970</h6>
        </div>
        <div className="flex flex-col">
          <div className="text-base text-slate-600">Gender</div>
          <h6 className="text-3xl font-medium text-castleton-900">Male</h6>
        </div>
        <div className="flex flex-col">
          <div className="text-base text-slate-600">House</div>
          <h6 className="text-3xl font-medium text-castleton-900">
            Gryffindor
          </h6>
        </div>
        <div className="flex flex-col">
          <div className="text-base text-slate-600">Aliases</div>
          <ul className="text-3xl font-medium text-castleton-900">
            <li>a</li>
            <li>b</li>
            <li>c</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Details;
