import DesktopNavLink from "./DesktopNavLink/DesktopNavLink"
import Logo from "./Logo"
import { useTranslation } from "react-i18next"
import MobileMenu from "./MobileMenu"
import ChangeLangButton from "./ChangeLangButton"
import { ApplicationRoutes } from "../routes"

function Header() {

  const [ t, i18n ] = useTranslation()

  return (
    <nav
      className="w-full max-w-[95rem] mx-auto py-5 px-4 lg:px-10 flex items-center justify-between
      bg-[--header-bg]"
    >

      {
        i18n.dir(i18n.language) === "ltr"
        ?
          <>
            <Logo />

            <div className="lg:hidden">
              <MobileMenu />
            </div>

            <div  
              className="flex items-center gap-x-7 max-lg:hidden"
            >
              <DesktopNavLink
                href={ApplicationRoutes.pages.home}
                text={t("header.home")}
              />

              <DesktopNavLink
                items={[
                  {
                    text: t("header.company.sub-links.about-us"),
                    href: ApplicationRoutes.pages.company["about-us"]
                  },
                  {
                    text: t("header.company.sub-links.our-team"),
                    href: ApplicationRoutes.pages.company["our-team"]
                  },
                  {
                    text: t("header.company.sub-links.services"),
                    href: ApplicationRoutes.pages.company.services
                  }
                ]}
                href=""
                text={t("header.company.text")}
              />

              <DesktopNavLink
                href="work"
                text={t("header.work.text")}
                items={[
                  {
                    text: t("header.work.sub-links.project"),
                    href: ApplicationRoutes.pages.work.project
                  },
                  {
                    text: t("header.work.sub-links.project-details"),
                    href: ApplicationRoutes.pages.work["project-details"]
                  },
                  {
                    text: t('header.work.sub-links.hot-projects'),
                    href: ApplicationRoutes.pages.work["best-projects"]
                  }
                ]}
              />

              <DesktopNavLink
                href="blog"
                text={t("header.blog.text")}
                items={[
                  {
                    text: t("header.blog.sub-links.blog"),
                    href: ApplicationRoutes.pages.blog.blog
                  },
                  {
                    text: t("header.blog.sub-links.latest-articles"),
                    href: ApplicationRoutes.pages.blog["latest-articles"]
                  },
                  {
                    text: t("header.blog.sub-links.recommended-for-you"),
                    href: ApplicationRoutes.pages.blog["recommended-for-you"]
                  },
                  {
                    text: t("header.blog.sub-links.best-of-day"),
                    href: ApplicationRoutes.pages.blog["best-of-day"]
                  },
                  {
                    text: t("header.blog.sub-links.best-of-week"),
                    href: ApplicationRoutes.pages.blog["best-of-week"]
                  },
                ]}
              />

              <DesktopNavLink
                href={ApplicationRoutes.pages.contact}
                text={t("header.contact")}
              />

              {/* <ChangeLangButton /> */}
            </div>

            <button className="self-stretch py-6 px-6 text-base bg-gray-100 rounded-sm
            text-slate-800 font-medium active:scale-95 transition-transform duration-300 max-lg:hidden">
              {t("header.cta-text")}
            </button>
          </>
        :
          <>
            <button className="self-stretch py-6 px-6 text-base bg-gray-100 rounded-sm
            text-slate-800 font-medium active:scale-95 transition-transform duration-300 max-lg:hidden">
              {t("header.cta-text")}
            </button>

            <div className="lg:hidden">
              <MobileMenu />
            </div>

            <div  
              className="flex items-center gap-x-7 max-lg:hidden"
            >
              <DesktopNavLink
                href={ApplicationRoutes.pages.home}
                text={t("header.home")}
              />

              <DesktopNavLink
                href={import.meta.env.BASE_URL+"#about-us-section"}
                text={t("about-us.title")}
                asElem="a"
              />
              {/* <DesktopNavLink
                items={[
                  {
                    text: t("header.company.sub-links.about-us"),
                    href: ApplicationRoutes.pages.company["about-us"]
                  },
                  {
                    text: t("header.company.sub-links.our-team"),
                    href: ApplicationRoutes.pages.company["our-team"]
                  },
                  {
                    text: t("header.company.sub-links.services"),
                    href: ApplicationRoutes.pages.company.services
                  }
                ]}
                href=""
                text={t("header.company.text")}
              /> */}

              <DesktopNavLink
                href={import.meta.env.BASE_URL+"#our-services-section"}
                text={t("home.services.title")}
                asElem="a"
              />
              {/* <DesktopNavLink
                href="work"
                text={t("header.work.text")}
                items={[
                  {
                    text: t("header.work.sub-links.project"),
                    href: ApplicationRoutes.pages.work.project
                  },
                  {
                    text: t("header.work.sub-links.project-details"),
                    href: ApplicationRoutes.pages.work["project-details"]
                  },
                  {
                    text: t('header.work.sub-links.hot-projects'),
                    href: ApplicationRoutes.pages.work["best-projects"]
                  }
                ]}
              /> */}


              {/* <DesktopNavLink
                href="blog"
                text={t("header.blog.text")}
                items={[
                  {
                    text: t("header.blog.sub-links.blog"),
                    href: ApplicationRoutes.pages.blog.blog
                  },
                  {
                    text: t("header.blog.sub-links.latest-articles"),
                    href: ApplicationRoutes.pages.blog["latest-articles"]
                  },
                  {
                    text: t("header.blog.sub-links.recommended-for-you"),
                    href: ApplicationRoutes.pages.blog["recommended-for-you"]
                  },
                  {
                    text: t("header.blog.sub-links.best-of-day"),
                    href: ApplicationRoutes.pages.blog["best-of-day"]
                  },
                  {
                    text: t("header.blog.sub-links.best-of-week"),
                    href: ApplicationRoutes.pages.blog["best-of-week"]
                  },
                ]}
              /> */}

              <DesktopNavLink 
                href={import.meta.env.BASE_URL+"#our-projects-section"}
                text={t("home.projects.title")}
                asElem="a"
              />

              <DesktopNavLink
                href={ApplicationRoutes.pages.contact}
                text={t("header.contact")}
              />
              
              {/* <ChangeLangButton /> */}
            </div>

            <Logo />
          </>
      }

    </nav>
  )
}

export default Header