
export const ApplicationRoutes = {

    pages: {
        home: import.meta.env.BASE_URL,
        contact: import.meta.env.BASE_URL+"/contact-us",
        company: {
            "about-us": import.meta.env.BASE_URL+"/company/about-us",
            "our-team": import.meta.env.BASE_URL+"/company/our-team",
            services: import.meta.env.BASE_URL+"/company/services"
        },
        work: {
            project: import.meta.env.BASE_URL+"/work/project",
            "project-details": import.meta.env.BASE_URL+"/work/project-details",
            "best-projects": import.meta.env.BASE_URL+"/work/best-projects"
        },
        blog: {
            "blog": import.meta.env.BASE_URL+"/blog",
            "latest-articles": import.meta.env.BASE_URL+"/blog/latest-articles",
            "recommended-for-you": import.meta.env.BASE_URL+"/blog/recommended-for-you",
            "best-of-day": import.meta.env.BASE_URL+"/blog/best-of-day",
            "best-of-week": import.meta.env.BASE_URL+"/blog/best-of-week"
        }
    }

}