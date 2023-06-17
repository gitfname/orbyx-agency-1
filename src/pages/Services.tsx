import { useTranslation } from "react-i18next"
import StatsSection_1 from "../components/StatsSection_1"
import Services_1 from "../components/Services_1"
import LatestNewsSection from "../components/LatestNewsSection"
import Banner_1 from "../components/Banner_1"


function Services() {
    const [t] = useTranslation()

    return (
        <div className="w-full min-h-screen">

            <div className="w-full py-32 bg-black/95 flex flex-col items-center justify-center px-4">
                <p className="text-white text-6xl lg:text-7xl">Our services</p>
                <p className="text-lg mt-3 text-white/60">Home - Our services</p>
            </div>

            <Services_1 className="my-16" />

            <StatsSection_1 className="px-4 lg:px-10" stats={t("home.stats")} />

            <LatestNewsSection
                className="mt-24 w-full px-4 lg:px-10"
                title={t("home.latest-news.title")}
                readMoreText={t("home.latest-news.read-more-text")}
            />

            <Banner_1 className="mt-24" />

        </div>
    )
}

export default Services