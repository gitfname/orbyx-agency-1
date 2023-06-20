import ServiecCard_1 from "./ServiecCard_1"
import { useTranslation } from "react-i18next"  

interface props {
  className?: string
  showReadMoreButton?: boolean
}

function Services_1({className="", showReadMoreButton=true}: props) {
  const [ t ] = useTranslation()

  return (
    <div
      className={
        "w-full px-4 lg:px-10"
        + " " + className
      }
    >

      <p className="text-4xl lg:text-5xl text-slate-900 font-medium tracking-wide">{t("home.services.title")}</p>
      <p className="text-base font-normal tracking-wide leading-6 text-slate-700/90 mt-3">
        {t("home.services.subtitle")}
      </p>

      <div className="mt-12 w-full grid-cols-1 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {
          (():any => t("home.services.items"))()?.map((item, i) => (
            <ServiecCard_1
              key={i}
              img={import.meta.env.BASE_URL+item?.img}
              title={item?.title}
              description={item?.description}
              readMoreText={item?.["read-more-text"]}
              showReadMore={showReadMoreButton}
            />
          ))
        }

      </div>

    </div>
  )
}

export default Services_1