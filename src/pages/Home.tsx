import AboutUs_1 from "../components/AboutUs_1"
import Hero from "../components/Hero"
import Services_1 from "../components/Services_1"
import { useTranslation } from "react-i18next"
import StatsSection_1 from "../components/StatsSection_1"
import ProjectCard_1 from "../components/ProjectCard_1"
import ProjectsSection from "../components/ProjectsSection"

function Home() {
  const [t] = useTranslation()

  return (
    <div className="pb-20">
      <Hero />
      <AboutUs_1 />
      <Services_1 className="mt-14" />
      <StatsSection_1 className="mt-14 px-4 lg:px-10" stats={t("home.stats")} />
      <ProjectsSection projects={t("home.projects")} className="mt-20 px-4 lg:px-10" />
    </div>
  )
}

export default Home