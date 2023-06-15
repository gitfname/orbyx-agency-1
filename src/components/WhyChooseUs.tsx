
import { useTranslation } from "react-i18next"
import ReadMoreButton_1 from "./ReadMoreButton_1"

interface Props {
    className: string
}

function WhyChooseUs({ className }: Props) {
    const [t] = useTranslation()

  return (
    <div className={"w-full " + className}>
        <p className="text-4xl text-slate-800 font-normal tracking-wide">{t("home.why-choose-us.title")}</p>
        <p
            className="mt-3 text-slate-600 font-normal leading-6 text-base"
        >
            {t("home.why-choose-us.subtitle")}            
        </p>
        <div
            className="w-full grid grid-cols-3 gap-7 mt-12"
        >
            {
                t("home.why-choose-us.items")?.map(item => (
                    <div key={item.id} className="flex flex-col gap-y-3">
                        <p className="text-2xl text-slate-800/80 font-medium tracking-wide">{item.title}</p>
                        <p className="text-slate-600 font-normal text-base">
                            {item.desc}
                        </p>
                        <ReadMoreButton_1 text={item['read-more-text']} className="mt-4" />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default WhyChooseUs