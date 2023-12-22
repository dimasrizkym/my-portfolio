import { Link } from "react-router-dom"
import ellipse from "../../assets/ellipse.svg"

const TitleSection = (props) => {
  const { linkExist = false, to, children } = props 
  return (
    linkExist ? 
    (
      <div className="flex justify-between items-center">
        <div className="relative">
          <h2 className="z-10 relative">{children}</h2>
          <img src={ellipse} alt="ornament" className="absolute top-1 -left-1 -z-1"/>
        </div>
        <Link to={to}>See All</Link>
      </div>
    )
    :
    (
      <div className="relative">
        <h2 className="z-10 relative">{children}</h2>
        <img src={ellipse} alt="ornament" className="absolute top-1 -left-1 -z-1"/>
      </div>
    )
  )
}

export default TitleSection