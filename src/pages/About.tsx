import Hero from "../components/Hero";

const About = () => {
  return (
    <>
      <Hero classname="bg-lavender-100">
        <h1 className="px-8 text-center text-6xl uppercase">
          Cast Your Magic on this Website
        </h1>
      </Hero>
      <div className="flex flex-col gap-4 bg-lavender-100 px-8">
        <p>
          Welcome to Hogwarts Diaries, a place where magic meets technology!
          This website was created for the enchanting world of Harry Potter and
          its unforgettable characters.
        </p>
        <p>
          The goal of this website is not just to showcase these incredible
          characters and their details but also to invite you, the fans, to
          become part of the experience. Here, you can not only explore detailed
          profiles of each character but also take control of the magic!
        </p>
        <p>What Can You Do Here?</p>
        <p>
          Add Characters: Think a magical creature or an overlooked character
          deserves a spot? Add them to our database!
        </p>
        <p>
          Edit Profiles: Update details, correct mistakes, or enrich the
          profiles with new insights.
        </p>
        <p>
          Delete Entries: Manage the roster by removing duplicates or outdated
          entries.
        </p>
        <p>
          This platform is designed to be fun, interactive, and collaborative,
          just like the Harry Potter fandom itself. Whether you’re a Gryffindor
          seeking heroics, a Ravenclaw chasing knowledge, a Hufflepuff
          celebrating dedication, or a Slytherin striving for greatness, there’s
          something here for everyone.
        </p>
      </div>
    </>
  );
};

export default About;
