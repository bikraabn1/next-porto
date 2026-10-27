import LandingPage from "./components/layout/landing-page/LandingPage";
import { getProjects } from "./public/datas/projects";
import { getExperiences } from "./public/datas/experiences";
import { getPageSettings, HomePageSettings, CapabilityGroup } from "./public/datas/pages";

export default async function Home() {
  const [projects, homeSettings, experiences, capabilities] = await Promise.all([
    getProjects(),
    getPageSettings<HomePageSettings>("home"),
    getExperiences(),
    getPageSettings<CapabilityGroup[]>("capabilities"),
  ]);

  return (
    <div className="flex bg-background font-sans">
      <LandingPage
        initialProjects={projects}
        pageSettings={homeSettings || undefined}
        experiences={experiences}
        capabilities={capabilities || undefined}
      />
    </div>
  );
}

