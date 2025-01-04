import Container from "@/components/Container";
import Hero from "../components/Hero";
import AboutDescription from "@/components/about/AboutDescription";

const About = () => {
  return (
    <div className="flex min-h-screen flex-col bg-lavender-100">
      <Hero>
        <Container classname="md:flex md:justify-center md:items-center">
          <h1 className="text-center text-2xl uppercase sm:text-4xl md:max-w-[60%] lg:text-6xl">
            Cast Your Magic on this Website
          </h1>
        </Container>
      </Hero>
      <div>
        <Container classname="flex flex-col gap-4">
          <AboutDescription>
            <p className="max-w-[60%]">
              Welcome to Hogwarts Diaries, a place where magic meets technology!
              This website was created for the enchanting world of Harry Potter
              and its unforgettable characters.
            </p>
          </AboutDescription>
          <AboutDescription>
            <p className="max-w-[60%]">
              The goal of this website is not just to showcase these incredible
              characters and their details but also to invite you, the fans, to
              become part of the experience. Here, you can not only explore
              detailed profiles of each character but also take control of the
              magic!
            </p>
          </AboutDescription>
          <div className="w-full rounded-lg bg-[#e8beba] p-8 sm:mb-11">
            <h2 className="mb-5 w-full text-center text-4xl font-medium">
              What Can You Do Here?
            </h2>
            <AboutDescription>
              <p className="max-w-[60%]">
                ✨Add Characters: Think a magical creature or an overlooked
                character deserves a spot? Add them to our database!
              </p>
            </AboutDescription>
            <AboutDescription>
              <p className="max-w-[60%]">
                ✨Delete Entries: Manage the roster by removing duplicates or
                outdated entries.
              </p>
            </AboutDescription>
          </div>
          <AboutDescription>
            <p className="max-w-[60%]">
              This platform is designed to be fun, interactive, and
              collaborative, just like the Harry Potter fandom itself. Whether
              you’re a Gryffindor seeking heroics, a Ravenclaw chasing
              knowledge, a Hufflepuff celebrating dedication, or a Slytherin
              striving for greatness, there’s something here for everyone.
            </p>
          </AboutDescription>
        </Container>
      </div>
    </div>
  );
};

export default About;
