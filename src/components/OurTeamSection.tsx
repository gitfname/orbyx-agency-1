import ReadMoreButton_1 from "./ReadMoreButton_1"
import TeamMemberCard_1 from "./TeamMemberCard_1"

interface Props {
    className: string,
    teamMembers: any,
    readMoreButtonText: string,
    title: string,
    subtitle: string
}

function OurTeamSection({ className, teamMembers=[], readMoreButtonText, subtitle, title }: Props) {
  return (
    <div className={"w-full " + className }>
        <div className="w-full flex max-md:flex-col max-md:items-start max-md:gap-y-5 items-center justify-between">

        <div>
            <p className="text-3xl lg:text-4xl text-slate-800 font-normal tracking-wide">{title}</p>
            <p
                className="mt-3 text-slate-600 font-normal leading-6 text-base max-w-xl"
            >
                {subtitle}
            </p>
        </div>

        <ReadMoreButton_1 text={readMoreButtonText} />

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 max-lg:gap-y-12 lg:grid-cols-3 gap-6 mt-12 place-items-center">
        {
            teamMembers?.map((member: any) => (
                <TeamMemberCard_1
                    id={member.id}
                    img={import.meta.env.BASE_URL+member.img}
                    name={member.name}
                    role={member.role}
                    socialLinks={member["social-links"]}
                />
            ))
        }
        </div>
    </div>
  )
}

export default OurTeamSection