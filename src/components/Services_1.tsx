import ServiecCard_1 from "./ServiecCard_1"
import { useTranslation } from "react-i18next"  

interface props {
  className?: string
}

function Services_1({className=""}: props) {
  const [ t ] = useTranslation()

  return (
    <div
      className={
        "w-full px-4 lg:px-10"
        + " " + className
      }
    >

      <p className="text-5xl text-slate-900 font-medium tracking-wide">{t("home.services.title")}</p>
      <p className="text-base font-normal tracking-wide leading-6 text-slate-700/90 mt-3">
        {t("home.services.subtitle")}
      </p>

      <div className="mt-12 w-full grid grid-cols-4 gap-6">

        {
          t("home.services.items")?.map((item, i) => (
            <ServiecCard_1
              key={i}
              img={item?.img}
              title={item?.title}
              description={item?.description}
              readMoreText={item?.["read-more-text"]}
            />
          ))
        }

      </div>

    </div>
  )
}

export default Services_1