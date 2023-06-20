import AboutUs_1 from "../components/AboutUs_1"
import Hero from "../components/Hero"
import Services_1 from "../components/Services_1"
import { useTranslation } from "react-i18next"
import StatsSection_1 from "../components/StatsSection_1"
import ProjectsSection from "../components/ProjectsSection"
import WhyChooseUs from "../components/WhyChooseUs"
// import OurTeamSection from "../components/OurTeamSection"
// import LatestNewsSection from "../components/LatestNewsSection"
import Banner_1 from "../components/Banner_1"
import ScrollToTop from "react-scroll-to-top";
import { Link, useLocation } from "react-router-dom"
import { useEffect, useRef } from "react"

function Home() {
  const [t, i18n] = useTranslation()
  const container = useRef(null)
  const location = useLocation()

  useEffect(
    () => {
      if(location.hash.length > 0) {
        setTimeout(() => {
          document.getElementById(location.hash.slice(1)).scrollIntoView()
        }, 200);
      }
    },
    []
  )


  return (
    <div className="pb-20">
      <Hero />
      <div id="about-us-section">
        <AboutUs_1 />
      </div>
      <div id="our-services-section">
        <Services_1 className="mt-16" />
      </div>
      <StatsSection_1 className="mt-14 px-4 lg:px-10" stats={t("home.stats")} />
      <div id="our-projects-section">
        <ProjectsSection projects={t("home.projects.items")} title={t("home.projects.title")} className="mt-20 px-4 lg:px-10" />
      </div>
      <WhyChooseUs className="mt-28 px-4 lg:px-10" />
      {/* <OurTeamSection
        className="mt-28 px-4 lg:px-10"
        teamMembers={t("home.our-team.items")}
        readMoreButtonText={i18n.dir(i18n.language) === "ltr" ? "Read more" : "مشاهده بیشتر"}
        title={t("home.our-team.title")}
        subtitle={t("home.our-team.subtitle")}
      /> */}
      {/* <LatestNewsSection
        className="mt-28 w-full px-4 lg:px-10"
        title={t("home.latest-news.title")}
        readMoreText={t("home.latest-news.read-more-text")}
      /> */}
      <Banner_1 className="mt-28 px-4 lg:px-10" />
      <ScrollToTop smooth top={600} width="1.1rem" height="1.1rem" className="grid xl:scale-110 2xl:scale-125 place-items-center shadow-md shadow-black/20 bg-slate-50" />
    </div>
  )
}

export default Home