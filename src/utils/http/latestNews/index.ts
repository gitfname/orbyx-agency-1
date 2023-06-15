
export interface latestNewsOutPut {
    id: string,
    img: string,
    title: string,
    pubDate: string,
    desc: string,
    link: string,
    commentsCount: number
}

function latestNews(): Promise<Array<latestNewsOutPut>> {
    return new Promise(resolve => {
        resolve([
            {
                id: "1",
                title: "Flooring is a Big Reason Behind Home Comfort",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus vel ratione provident odio voluptas voluptates. Quidem labore quae dolor illo.",
                pubDate: "August 11, 2023",
                img: "/assets/images/abount-img-1.jpg",
                commentsCount: 190,
                link: ""
            },
            {
                id: "2",
                title: "This is Reason To Hire Teprace For Your Flooring Project",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus vel ratione provident odio voluptas voluptates. Quidem labore quae dolor illo.",
                pubDate: "August 7, 2023",
                img: "/assets/images/abount-img-1.jpg",
                commentsCount: 0,
                link: ""
            },
            {
                id: "3",
                title: "How to Choose Exposy Flooring for an Open-Plan House",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus vel ratione provident odio voluptas voluptates. Quidem labore quae dolor illo.",
                pubDate: "August 6, 2023",
                img: "/assets/images/abount-img-1.jpg",
                commentsCount: 11,
                link: ""
            }
        ])
    })
}

export default latestNews