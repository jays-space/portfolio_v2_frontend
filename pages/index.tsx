import type { NextPage } from "next";

// COMPONENTS
import { PageSection } from "../components/PageSection";
import { ProjectGrid } from "../components/ProjectGrid";

const Home: NextPage = () => {
  return (
    <main className="h-full flex flex-col px-96">
      {/* hero/featured works section */}
      <PageSection variant="hero" title="featured works">
        <ProjectGrid />
      </PageSection>

      {/* notable works section */}
      <PageSection title="other notable projects">
        <ProjectGrid />
      </PageSection>

      {/* about section */}
      <PageSection title="about">
        <p>about me</p>
      </PageSection>

      {/* contact section */}
      <PageSection title="contact">
        <p>contact me</p>
      </PageSection>
    </main>
  );
};

export default Home;
