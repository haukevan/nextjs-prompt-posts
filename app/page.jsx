import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover and Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
        consequatur tempora recusandae in enim fugiat ipsa, modi, blanditiis nam
        eaque eligendi cum itaque accusamus nihil libero voluptatem nulla odit
        quos.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
