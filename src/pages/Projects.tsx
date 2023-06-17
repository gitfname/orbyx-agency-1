import { useTranslation } from "react-i18next"
import ProjectsSection from "../components/ProjectsSection"
import Banner_1 from "../components/Banner_1"

function Projects() {
    const [t] = useTranslation()

    return (
        <div className="w-full min-h-screen">

            <div className="w-full py-32 bg-black/95 flex flex-col items-center justify-center px-4">
                <p className="text-white text-6xl lg:text-7xl">Our Projects</p>
                <p className="text-lg mt-3 text-white/60">Home - Our Projects</p>
            </div>

            <ProjectsSection projects={t("home.projects.items")} title={t("home.projects.title")} className="mt-20 px-4 lg:px-10" />

            <Banner_1 className="mt-20 w-full" />

        </div>
    )
}

export default Projects