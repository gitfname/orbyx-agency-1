import AboutUs_1 from "../components/AboutUs_1"
import Hero from "../components/Hero"
import Services_1 from "../components/Services_1"
import { useTranslation } from "react-i18next"
import StatsSection_1 from "../components/StatsSection_1"
import ProjectsSection from "../components/ProjectsSection"
import WhyChooseUs from "../components/WhyChooseUs"
import TeamMemberCard_1 from "../components/TeamMemberCard_1"
import ReadMoreButton_1 from "../components/ReadMoreButton_1"
import OurTeamSection from "../components/OurTeamSection"

function Home() {
  const [t, i18n] = useTranslation()

  return (
    <div className="pb-20">
      <Hero />
      <AboutUs_1 />
      <Services_1 className="mt-14" />
      <StatsSection_1 className="mt-14 px-4 lg:px-10" stats={t("home.stats")} />
      <ProjectsSection projects={t("home.projects")} className="mt-20 px-4 lg:px-10" />
      <WhyChooseUs className="mt-28 px-4 lg:px-10" />
      <OurTeamSection
        className="mt-28 px-4 lg:px-10"
        teamMembers={t("home.our-team.items")}
        readMoreButtonText={i18n.dir(i18n.language) === "ltr" ? "Read more" : "مشاهده بیشتر"}
        title={t("home.our-team.title")}
        subtitle={t("home.our-team.subtitle")}
      />
    </div>
  )
}

export default Home