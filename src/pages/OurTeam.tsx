import { useTranslation } from "react-i18next"
import OurTeamSection from "../components/OurTeamSection"
import AwardsAccordion from "../components/AwardsAccordion"
import Banner_1 from "../components/Banner_1"

function OurTeam() {
    const [t] = useTranslation()

    return (
        <div className="w-full min-h-screen">

            <div className="w-full py-32 bg-black/95 flex flex-col items-center justify-center px-4">
                <p className="text-white text-6xl lg:text-7xl">Our Team</p>
                <p className="text-lg mt-3 text-white/60">Home - Our Team</p>
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
                        985+ Project Complete Over The World
                    </p>

                    <p
                        className="text-base font-[iranyekan300] text-slate-900 mt-5 max-w-[90%]"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo aut nemo perferendis non, nisi quas.
                    </p>

                    <p className="text-sm text-slate-600 mt-5 font-[iranyekan300]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ut nemo recusandae quae ipsum nihil repudiandae laborum accusantium possimus neque. Iste omnis veniam laudantium maxime, quos vitae ullam.
                    </p>

                </div>

                <AwardsAccordion />
            </div>

            <Banner_1 className="mt-20" />

        </div>
    )
}

export default OurTeam