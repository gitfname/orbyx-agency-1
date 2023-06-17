import { useTranslation } from "react-i18next"
import OurTeamSection from "../components/OurTeamSection"
import AwardsAccordion from "../components/AwardsAccordion"
import Banner_1 from "../components/Banner_1"

function OurTeam() {
    const [t] = useTranslation()

    return (
        <div className="w-full min-h-screen">

            <div className="w-full py-32 bg-black/95 flex flex-col items-center justify-center px-4">
                <p className="text-white text-6xl lg:text-7xl">{t("our-team.title")}</p>
                <p className="text-lg mt-3 text-white/60">{t("our-team.subtitle")}</p>
            </div>

            <OurTeamSection
                className="mt-28 px-4 lg:px-10"
                teamMembers={t("home.our-team.items")}
                readMoreButtonText={""}
                title={""}
                subtitle={""}
                showTopSection={false}
            />

            <div className="w-full lg:px-10 px-4 grid-cols-1 grid lg:grid-cols-[13fr_11fr] gap-x-8 gap-y-12 my-20 mt-28 place-items-center max-lg:max-w-4xl max-lg:mx-auto">
                <div>
                    <p
                        className="text-5xl font-[iranyekan300] text-slate-900 leading-[3.8rem]"
                    >
                        {t("our-team.text-1")}
                    </p>

                    <p
                        className="text-base font-[iranyekan300] text-slate-900 mt-5 max-w-[90%]"
                    >
                        {t("our-team.text-2")}
                    </p>

                    <p className="text-sm text-slate-600 mt-5 font-[iranyekan300]">
                        {t("our-team.text-3")}
                    </p>

                </div>

                <AwardsAccordion />
            </div>

            <Banner_1 className="mt-20" />

        </div>
    )
}

export default OurTeam