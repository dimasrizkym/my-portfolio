import Navbar from "../components/layouts/Navbar"
import Footer from "../components/layouts/Footer"
import SectionAbout from "../components/layouts/SectionAbout"
import SectionAside from "../components/layouts/SectionAside"
import SectionExperience from "../components/layouts/SectionExperience"
import SectionProjects from "../components/layouts/SectionProjects"
import SectionAwards from "../components/layouts/SectionAwards"

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center p-8 sm:p-12 md:p-16 gap-12">
        <main className="flex-[2_2_0%] flex flex-col gap-[96px]">
          <SectionAbout />
          <SectionAside className="flex flex-col md:hidden"/>
          <SectionExperience />
          <SectionProjects />
          <SectionAwards />
        </main>
        <aside className="flex-1 sticky top-7 h-min hidden md:block">
          <SectionAside/>
        </aside>
      </div>
      <Footer />
    </>
  )
}

export default Homepage