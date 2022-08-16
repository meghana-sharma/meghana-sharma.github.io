import ProjectItem from '../components/ProjectItem'
import { ProgramList } from '../components/ProgramList'

const Programs = () => {
  return (
    <div className="programs">
      <h1>Our programs</h1>
      <div className="projectList">
        {ProgramList.map((project) => {
          return <ProjectItem name={project.name} image={project.image} />
        })}
      </div>
    </div>
  )
}

export default Programs
