
import { useTranslation } from "react-i18next"

function ContactUs() {
    const [t] = useTranslation()
 
    return (
        <div className="w-full min-h-screen">

            <div className="w-full py-32 bg-black/95 flex flex-col items-center justify-center px-4">
                <p className="text-white text-6xl lg:text-7xl">{t("contact-us.title")}</p>
                <p className="text-lg mt-3 text-white/60">{t("contact-us.sub-title")}</p>
            </div>

            <div className="w-full grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-x-10 gap-y-16 px-4 lg:px-10 my-28">

                <div>
                    <p className="text-5xl font-[iranyekan300] text-slate-900">{t("contact-us.get-in-touch")}</p>
                    <p className="text-base text-slate-700 mt-5 font-[iranyekan300] leading-6">
                        {t("contact-us.desc")}
                    </p>
                    <p className="text-xl text-slate-900 font-[iranyekan400] mt-7">{t("contact-us.follow-us")}</p>
                    <div className="mt-4 flex items-center gap-x-3">
                        <a href="#">
                            <img
                                loading="lazy"
                                alt=""
                                src={import.meta.env.BASE_URL+"/assets/icons/icons8-instagram-50.png"}
                                className="w-5 h-5 hover:opacity-60 transition-opacity duration-300"
                            />
                        </a>
                        <a href="#">
                            <img
                                loading="lazy"
                                alt=""
                                src={import.meta.env.BASE_URL+"/assets/icons/icons8-youtube-50.png"}
                                className="w-5 h-5 hover:opacity-60 transition-opacity duration-300"
                            />
                        </a>
                        <a href="#">
                            <img
                                loading="lazy"
                                alt=""
                                src={import.meta.env.BASE_URL+"/assets/icons/icons8-twitter-50.png"}
                                className="w-5 h-5 hover:opacity-60 transition-opacity duration-300"
                            />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col gap-y-4 w-full">
                    <input
                        type="text"
                        className="text-base text-slate-900 font-[iranyekan300] focus:outline-none border-b
                        border-b-slate-300 p-3 pb-1 placeholder-slate-400 focus:border-b-slate-500
                        transition-colors duration-200"
                        placeholder={t("contact-us.form.name")}
                        maxLength={80}
                    />

                    <input
                        type="email"
                        className="text-base text-slate-900 font-[iranyekan300] focus:outline-none border-b
                        border-b-slate-300 p-3 pb-1 placeholder-slate-400 focus:border-b-slate-500
                        transition-colors duration-200"
                        placeholder={t("contact-us.form.email")}
                        maxLength={80}
                    />

                    <textarea
                        className="text-base text-slate-900 font-[iranyekan300] focus:outline-none border-b
                        border-b-slate-300 p-3 pb-1 placeholder-slate-400 focus:border-b-slate-500
                        transition-colors duration-200 mt-6"
                        placeholder={t("contact-us.form.message")}
                        rows={5}
                        maxLength={700}
                    >
                    </textarea>

                    <button
                        className="w-full max-w-md block mx-auto bg-black/90 text-white text-lg font-[iranyekan300]
                        py-3 mt-8 active:scale-95 transition-transform duration-300"
                    >
                        {t("contact-us.form.submit-text")}
                    </button>
                </div>

            </div>

        </div>
    )
}

export default ContactUs