import { useTranslation } from "react-i18next"
// import AwardsAccordion from "../components/AwardsAccordion"
import OurTeamSection from "../components/OurTeamSection"
import WhyChooseUs from "../components/WhyChooseUs"
import Banner_1 from "../components/Banner_1"

function AboutUs() {
  const [t, i18n] = useTranslation()

  return (
    <div className="w-full min-h-screen">

      <div className="w-full py-32 bg-black/95 flex flex-col items-center justify-center px-4">
          <p className="text-white text-6xl lg:text-7xl">{t("about-us.title")}</p>
          <p className="text-lg mt-3 text-white/60">{t("about-us.subtitle")}</p>
      </div>

      <div className="w-full lg:px-10 px-4 grid-cols-1 grid lg:grid-cols-[7fr_5fr] gap-x-8 gap-y-12 my-20 place-items-center">

        <div className="max-lg:order-2">
          <p
            className="text-5xl lg:text-6xl font-[iranyekan400] text-slate-900 leading-[4.2rem]"
          >
            {t("about-us.text-1")}
          </p>

          <p className="text-base text-slate-700 mt-5 font-[iranyekan300] leading-7">
            {t("about-us.text-2")}
          </p>

          {/* <div className="mt-9">
            <AwardsAccordion />
          </div> */}

        </div>

        <img
          loading="lazy"
          alt=""
          src={import.meta.env.BASE_URL+"/assets/images/img-4.jpg"}
          className="w-full h-auto rounded-sm max-lg:max-h-[33rem] max-lg:w-auto max-lg:order-1"
        />


      </div>

      <WhyChooseUs className="w-full px-4 lg:px-10 mb-20" />
      <OurTeamSection
        className="mt-28 px-4 lg:px-10"
        teamMembers={t("home.our-team.items")}
        readMoreButtonText={i18n.dir(i18n.language) === "ltr" ? "Read more" : "مشاهده بیشتر"}
        title={t("home.our-team.title")}
        subtitle={t("home.our-team.subtitle")}
      />
      <Banner_1 className="mt-28 px-4 lg:px-10" />

    </div>
  )
}

export default AboutUs