import CardAward from "../fragments/CardAward"
import TitleSection from "../fragments/TitleSection"
import { awards } from "../../data/data"

const SectionAwards = () => {

  return (
    <section className="flex flex-col gap-6" id="awards">
      <TitleSection>Awards</TitleSection>
      {
        awards.map((item, index) => {
          return(
            <div key={index}>
              <CardAward title={item.title} issuer={item.issuer} issueDate={item.issueDate}/>
            </div>
          )
        })
      }
    </section>
  )
}

export default SectionAwards