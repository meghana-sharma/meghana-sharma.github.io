function ProjectItem({ image, name }) {
  return (
    <div className="projectItem">
      <div style={{ backgroundiImage: `url(${image})` }} className="bgImage" />
      <h1>{name}</h1>
    </div>
  )
}

export default ProjectItem
