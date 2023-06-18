import { ApplicationRoutes } from "../../../routes"

interface menuItemsInnerItemsOptions {
    id: string,
    text: string,
    link: string,
    items: Array<{
        id: string,
        text: string,
        link: string,
    }>
}

export interface menuItemOptions {
    title: string,
    account_text: string,
    items: Array<menuItemsInnerItemsOptions>,
}

interface menuItemsProps {
    lng: string
}

async function menuItems({ lng }: menuItemsProps): Promise<menuItemOptions> {
    return new Promise((resolve): menuItemOptions => {
        if (lng === "en") {
            resolve(
                {
                    account_text: "",
                    title: "",
                    items: [
                        {
                            "id": "0",
                            "text": "Home",
                            "link": ApplicationRoutes.pages.home,
                            items: []
                        },
                        {
                            "id": "1",
                            "text": "Company",
                            "link": import.meta.env.BASE_URL + "/still-in-dev",
                            items: [
                                {
                                    id: "0",
                                    text: "About Us",
                                    link: ApplicationRoutes.pages.company["about-us"]
                                },
                                {
                                    id: "1",
                                    text: "Our Team",
                                    link: ApplicationRoutes.pages.company["our-team"]
                                },
                                {
                                    id: "2",
                                    text: "Services",
                                    link: ApplicationRoutes.pages.company["services"]
                                }
                            ]
                        },
                        {
                            "id": "2",
                            "text": "Work",
                            "link": "",
                            items: [
                                {
                                    id: "0",
                                    text: "Projects",
                                    link: ApplicationRoutes.pages.work.project
                                },
                                {
                                    id: "1",
                                    text: "Project Details",
                                    link: ApplicationRoutes.pages.work["project-details"]
                                },
                                {
                                    id: "1",
                                    text: "Best Projects",
                                    link: ApplicationRoutes.pages.work["best-projects"]
                                }
                            ]
                        },
                        {
                            "id": "2",
                            "text": "Blog",
                            "link": "",
                            items: [
                                {
                                    id: "0",
                                    text: "Blog",
                                    link: ApplicationRoutes.pages.blog.blog
                                },
                                {
                                    id: "1",
                                    text: "Latest Articles",
                                    link: ApplicationRoutes.pages.blog["latest-articles"]
                                },
                                {
                                    id: "2",
                                    text: "Recommended for You",
                                    link: ApplicationRoutes.pages.blog["recommended-for-you"]
                                },
                                {
                                    id: "3",
                                    text: "Today's top Articles",
                                    link: ApplicationRoutes.pages.blog["best-of-day"]
                                },
                                {
                                    id: "4",
                                    text: "This Week top Articles",
                                    link: ApplicationRoutes.pages.blog["best-of-week"]
                                }
                            ]
                        },
                        {
                            "id": "2",
                            "text": "Contact Us",
                            "link": ApplicationRoutes.pages.contact,
                            items: []
                        }
                    ]
                }
            )
        }
        else if (lng === "fa") {
            resolve(
                {
                    account_text: "",
                    title: "",
                    items: [
                        {
                            "id": "0",
                            "text": "خانه",
                            "link": ApplicationRoutes.pages.home,
                            items: []
                        },
                        {
                            "id": "1",
                            "text": "شرکت",
                            "link": "",
                            items: [
                                {
                                    id: "0",
                                    text: "درباره ما",
                                    link: ApplicationRoutes.pages.company["about-us"]
                                },
                                {
                                    id: "1",
                                    text: "تیم ما",
                                    link: ApplicationRoutes.pages.company["our-team"]
                                },
                                {
                                    id: "2",
                                    text: "خدمات ما",
                                    link: ApplicationRoutes.pages.company["services"]
                                }
                            ]
                        },
                        {
                            "id": "2",
                            "text": "کار",
                            "link": "",
                            items: [
                                {
                                    id: "0",
                                    text: "پروژه ها",
                                    link: ApplicationRoutes.pages.work.project
                                },
                                {
                                    id: "1",
                                    text: "جزیات پروژه",
                                    link: ApplicationRoutes.pages.work["project-details"]
                                },
                                {
                                    id: "1",
                                    text: "پروژه های تاپ",
                                    link: ApplicationRoutes.pages.work["best-projects"]
                                }
                            ]
                        },
                        {
                            "id": "2",
                            "text": "وبلاگ",
                            "link": "",
                            items: [
                                {
                                    id: "0",
                                    text: "وبلاگ",
                                    link: ApplicationRoutes.pages.blog.blog
                                },
                                {
                                    id: "1",
                                    text: "آخرین مقالات",
                                    link: ApplicationRoutes.pages.blog["latest-articles"]
                                },
                                {
                                    id: "2",
                                    text: "پیشنهادی برای شما",
                                    link: ApplicationRoutes.pages.blog["recommended-for-you"]
                                },
                                {
                                    id: "3",
                                    text: "برترین های امروز",
                                    link: ApplicationRoutes.pages.blog["best-of-day"]
                                },
                                {
                                    id: "4",
                                    text: "برترین های این هفته",
                                    link: ApplicationRoutes.pages.blog["best-of-week"]
                                }
                            ]
                        },
                        {
                            "id": "2",
                            "text": "ارتباط با ما",
                            "link": ApplicationRoutes.pages.contact,
                            items: []
                        }
                    ]
                }
            )
        }
        return
    })
}

export default menuItems