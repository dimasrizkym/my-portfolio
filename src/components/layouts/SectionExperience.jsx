import CardExperience from "../fragments/CardExperience"
import TitleSection from "../fragments/TitleSection"
import { experience } from "../../data/data"

const SectionExperience = () => {

  return (
    <section className="flex flex-col gap-6" id="experience">
      <TitleSection>Experience</TitleSection>
      {
        experience.map((item, index) => {
          return (
            <div key={index}>
              <CardExperience
                position={item.position} 
                companyName={item.companyName}
                periode={item.periode}
                desc={item.desc}
              />  
            </div>
          )
        })
      }
    </section>
  )
}

export default SectionExperience