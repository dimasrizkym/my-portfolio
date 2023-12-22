import CardProject from "../fragments/CardProject"
import TitleSection from "../fragments/TitleSection"
import { projects } from "../../data/data"

const SectionProjects = () => {
  
  return (
    <section className="flex flex-col gap-6" id="projects">
      <TitleSection>Projects</TitleSection>
      {
        projects.map((item, index) => {
          return (
            <div key={index}>
              <CardProject 
                img={item.img}
                project={item.project} 
                category={item.category}
                dateCreated={item.dateCreated}
                stack={item.stack}
                desc={item.desc}
                toPreview={item.toPreview}
                toSourceCode={item.toSourceCode} 
              />
            </div>
          )
        })
      }
      
    </section>
  )
}

export default SectionProjects