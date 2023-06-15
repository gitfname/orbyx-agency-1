import ProjectCard_1 from "./ProjectCard_1"

interface Props {
    className: string,
    projects: any
}

function ProjectsSection({className, projects}: Props) {
  return (
    <div className={"w-full " + className}>
        <p className="text-5xl text-slate-800 font-medium">Projects</p>
        <div className="w-full grid grid-cols-3 gap-6 mt-12">
        {
            projects?.map(project => (
            <ProjectCard_1
                key={project.id}
                id={project.id}
                img={project.img}
                title={project.title}
                desc={project.desc}
                link={project.link}
            />
            ))
        }
        </div>
    </div>
  )
}

export default ProjectsSection