import AboutUs_1 from "../components/AboutUs_1"
import Hero from "../components/Hero"
import Services_1 from "../components/Services_1"
import { useTranslation } from "react-i18next"
import StatsSection_1 from "../components/StatsSection_1"
import ProjectsSection from "../components/ProjectsSection"
import WhyChooseUs from "../components/WhyChooseUs"
import OurTeamSection from "../components/OurTeamSection"
import LatestNewsSection from "../components/LatestNewsSection"
import Banner_1 from "../components/Banner_1"

function Home() {
  const [t, i18n] = useTranslation()


  return (
    <div className="pb-20">
      <Hero />
      <AboutUs_1 />
      <Services_1 className="mt-16" />
      <StatsSection_1 className="mt-14 px-4 lg:px-10" stats={t("home.stats")} />
      <ProjectsSection projects={t("home.projects.items")} title={t("home.projects.title")} className="mt-20 px-4 lg:px-10" />
      <WhyChooseUs className="mt-28 px-4 lg:px-10" />
      <OurTeamSection
        className="mt-28 px-4 lg:px-10"
        teamMembers={t("home.our-team.items")}
        readMoreButtonText={i18n.dir(i18n.language) === "ltr" ? "Read more" : "مشاهده بیشتر"}
        title={t("home.our-team.title")}
        subtitle={t("home.our-team.subtitle")}
      />
      <LatestNewsSection
        className="mt-28 w-full px-4 lg:px-10"
        title={t("home.latest-news.title")}
        readMoreText={t("home.latest-news.read-more-text")}
      />
      <Banner_1 className="mt-28 px-4 lg:px-10" />

    </div>
  )
}

export default Home