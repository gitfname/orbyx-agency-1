import { useState } from "react"
import { AiOutlineMenu, AiOutlineUser } from "react-icons/ai"
import { Link } from "react-router-dom"
import { useTransition } from "react"
import { useTranslation } from "react-i18next"
import ChangeLangButton from "./ChangeLangButton"


function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false)
    const [t, i18n] = useTranslation()

    return (
        <>
            <button onClick={() => setIsOpen(true)} className="p-2 rounded-lg bg-white/10 grid place-items-center active:scale-95 transition-transform duration-200">
                <AiOutlineMenu className="w-5 h-5 fill-slate-100" />
            </button>
            <div
                className={`fixed top-0 left-0 w-full h-full pointer-events-none z-50
                ${isOpen?"!pointer-events-auto":""}
                `}
            >
                <div
                    onClick={() => setIsOpen(false)}
                    className={`absolute top-0 left-0 z-10 w-full h-full bg-black/40 pointer-events-none opacity-0
                    transition-opacity duration-300
                    ${isOpen?"!opacity-100 !pointer-events-auto":""}`}
                ></div>

                <div
                    className={`w-64 h-full bg-gray-900 absolute top-0 right-0 translate-x-full z-20
                    flex flex-col gap-y-3 pt-6
                    transition-transform duration-300 ${isOpen?"!translate-x-0":""}`}
                >

                    <Link
                        to="/ecommerce-webapp_vite_react"
                        className="text-3xl font-[iranyekan500] text-slate-50 block mx-auto"
                    >
                        {t("mobile-menu.title")}
                    </Link>
                    
                    <div dir={i18n.dir(i18n.language)} className="flex flex-col gap-y-2 px-3 mt-5">
                        {
                            t("mobile-menu.items")?.map(item => (
                                <Link
                                    key={item.id}
                                    to={item.link}
                                    className="text-base text-slate-100 font-[iranyekan500] w-full p-3 rounded-lg
                                    hover:bg-white/5 transition-colors duration-300"
                                >
                                    {item.text}
                                </Link>
                            ))
                        }
                    </div>

                    <div className="mt-auto flex items-center gap-x-2 justify-center mb-6 mx-auto w-max rounded-xl
                    border border-slate-700">
                        {/* <AiOutlineUser className="w-5 h-5 fill-slate-700" />
                        <p
                            className="text-base text-slate-800 font-[iranyekan500]"
                        >
                            {t("mobile-menu.account-text")}
                        </p> */}
                        <ChangeLangButton />
                    </div>


                </div>
            </div>
        </>
    )
}

export default MobileMenu