import DesktopNavLink from "./DesktopNavLink/DesktopNavLink"
import Logo from "./Logo"
import { useTranslation } from "react-i18next"

function Header() {

  const [ t, i18n ] = useTranslation()

  return (
    <nav
      className="w-full max-w-[95rem] mx-auto py-6 px-10 flex items-center justify-between
      bg-[--header-bg]"
    >

      {
        i18n.dir(i18n.language) === "ltr"
        ?
          <>
            <Logo />

            <div  
              className="flex items-center gap-x-7"
            >
              <DesktopNavLink href="" text={t("header.home")}  />
              <DesktopNavLink
                items={[
                  {
                    text: t("header.company.sub-links.about-us"),
                    href: "company/about-us"
                  },
                  {
                    text: t("header.company.sub-links.our-team"),
                    href: "company/our-team"
                  },
                  {
                    text: t("header.company.sub-links.services"),
                    href: "company/services"
                  }
                ]}
                href="company"
                text={t("header.company.text")}
              />
              <DesktopNavLink
                href="work"
                text={t("header.work.text")}
                items={[
                  {
                    text: t("header.work.sub-links.project"),
                    href: "project"
                  },
                  {
                    text: t("header.work.sub-links.project-details"),
                    href: "project/project-details"
                  },
                  {
                    text: t('header.work.sub-links.hot-projects'),
                    href: "project/hot-projects"
                  }
                ]}
              />
              <DesktopNavLink
                href="blog"
                text={t("header.blog.text")}
                items={[
                  {
                    text: t("header.blog.sub-links.blog"),
                    href: "blog"
                  },
                  {
                    text: t("header.blog.sub-links.latest-articles"),
                    href: "blog/latest-articles"
                  },
                  {
                    text: t("header.blog.sub-links.recommended-for-you"),
                    href: "blog/recommended"
                  },
                  {
                    text: t("header.blog.sub-links.best-of-day"),
                    href: "blog/best-of-day"
                  },
                  {
                    text: t("header.blog.sub-links.best-of-week"),
                    href: "blog/best-of-week"
                  },
                ]}
              />
              <DesktopNavLink href="contact-us" text={t("header.contact")}  />
            </div>

            <button className="self-stretch py-6 px-6 text-base bg-gray-100 rounded-sm
            text-slate-800 font-medium active:scale-95 transition-transform duration-300">
              {t("header.cta-text")}
            </button>
          </>
        :
          <>
            <button className="self-stretch py-6 px-6 text-base bg-gray-100 rounded-sm
            text-slate-800 font-medium active:scale-95 transition-transform duration-300">
              {t("header.cta-text")}
            </button>

            <div  
              className="flex items-center gap-x-7"
            >
              <DesktopNavLink href="" text={t("header.home")}  />
              <DesktopNavLink
                items={[
                  {
                    text: t("header.company.sub-links.about-us"),
                    href: "company/about-us"
                  },
                  {
                    text: t("header.company.sub-links.our-team"),
                    href: "company/our-team"
                  },
                  {
                    text: t("header.company.sub-links.services"),
                    href: "company/services"
                  }
                ]}
                href="company"
                text={t("header.company.text")}
              />
              <DesktopNavLink
                href="work"
                text={t("header.work.text")}
                items={[
                  {
                    text: t("header.work.sub-links.project"),
                    href: "project"
                  },
                  {
                    text: t("header.work.sub-links.project-details"),
                    href: "project/project-details"
                  },
                  {
                    text: t('header.work.sub-links.hot-projects'),
                    href: "project/hot-projects"
                  }
                ]}
              />
              <DesktopNavLink
                href="blog"
                text={t("header.blog.text")}
                items={[
                  {
                    text: t("header.blog.sub-links.blog"),
                    href: "blog"
                  },
                  {
                    text: t("header.blog.sub-links.latest-articles"),
                    href: "blog/latest-articles"
                  },
                  {
                    text: t("header.blog.sub-links.recommended-for-you"),
                    href: "blog/recommended"
                  },
                  {
                    text: t("header.blog.sub-links.best-of-day"),
                    href: "blog/best-of-day"
                  },
                  {
                    text: t("header.blog.sub-links.best-of-week"),
                    href: "blog/best-of-week"
                  },
                ]}
              />
              <DesktopNavLink href="contact-us" text={t("header.contact")}  />
            </div>

            <Logo />
          </>
      }

    </nav>
  )
}

export default Header