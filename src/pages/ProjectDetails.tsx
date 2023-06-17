import { useTranslation } from "react-i18next"
import Banner_1 from "../components/Banner_1"
import ProjectDetialsCard from "../components/ProjectDetialsCard"

function ProjectDetails() {
    const [t] = useTranslation()
    
    return (
        <div className="w-full min-h-screen">

            <div className="w-full py-32 bg-black/95 flex flex-col items-center justify-center px-4">
                <p className="text-white text-6xl lg:text-7xl">{t("project-details.title")}</p>
                <p className="text-lg mt-3 text-white/60">{t("project-details.subtitle")}</p>
            </div>

            <div className="mt-20 flex flex-col gap-y-12">
                {
                    (():any =>t("project-details.items") )().map(item => (
                        <ProjectDetialsCard
                            key={item.id}
                            title={item.title}
                            subtitle={item.subtitle}
                            desc={item.desc}
                            button_text={item["button-text"]}
                            img={import.meta.env.BASE_URL+item.img}
                            workProperties={item.workProperties}
                        />
                    ))
                }
            </div>
            <Banner_1 className="mt-20" />

        </div>
    )
}

export default ProjectDetails