import { useTranslation } from "react-i18next"

interface Props {
    className: string
}

function Banner_1({ className }: Props) {
    const [t] = useTranslation()

  return (
    <div className={"py-28 w-full bg-slate-200/90 " + className}>
        <p className="text-center text-5xl leading-[3.5rem] font-semibold text-black/80">
        {t("home.text-1")}
        </p>
        <p className="text-center text-xl text-black/75 font-normal mt-4">{t("home.text-2")}</p>
        <button className="bg-black/90 mt-9 rounded-sm py-3 px-6 text-white text-lg font-medium w-max
        block mx-auto active:scale-95 duration-300">
        {t("home.call-us")}
        </button>
    </div>
  )
}

export default Banner_1