
interface SocialLink {
    id: string,
    link: string,
    img: string
}

interface Props {
    id: string,
    img: string,
    name: string,
    role: string,
    socialLinks?: Array<SocialLink>,
    className?: string
}

function TeamMemberCard_1({ className="", id, img, name, role, socialLinks=[] }: Props) {
    
    return (
        <div className={"" + className}>
            <img
                alt=""
                src={img}
                className="w-full h-auto max-w-sm rounded-xl block mx-auto shadow-md shadow-black/10"
            />
            <div className="mt-4 px-2 flex flex-col gap-y-1">
                <p className="text-lg text-slate-800 font-medium">{name}</p>
                <p className="text-sm tracking-wide text-slate-700/90 font-normal">{role}</p>
                <div className="mt-6 flex items-center gap-x-3">
                    {
                        socialLinks.map(socialLink => (
                            <a href={socialLink.link} className="group">
                                <img
                                    key={socialLink.id}
                                    alt=""
                                    src={socialLink.img}
                                    className="w-6 h-6 transition-opacity duration-300 group-hover:opacity-70 object-center object-cover"
                                />
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TeamMemberCard_1