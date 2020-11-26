import Hero from "../components/Home-page/Hero";
import Layout from "../components/layout";

function IndexPage() {
  return (
    <Layout>
      <Hero/>
      <div className="flex flex-col items-center justify-center">
        <img
          src="team-of-critters.svg"
          className="w-full max-w-xl"
          alt="Four one-eyed aliens playing"
        />

        <h2 className="p-3 my-8 text-lg font-bold bg-yellow-400 md:text-2xl font-heading">
          Hi! Welcome to your first Next.js site.
        </h2>
      </div>
    </Layout>
  );
}

export default IndexPage;
