import { Link } from 'react-router-dom'
import useExpanded from '../../hooks/useExpanded';

const CardProject = (props) => {
  const { img, project, category, dateCreated, stack, desc, toPreview, toSourceCode} = props

  const [expanded, toggleExpanded] = useExpanded()

  return (
    <div className='flex flex-col lg:flex-row gap-4 md:gap-8'>
      <img className='w-32 h-24 object-cover pt-3' src={img} alt={project} />
      <div>
        <h4>{project}</h4>
        <p>{category} · {dateCreated} </p>
        <p className='text-gray-500 mb-1'>tech-stack : {stack}</p>
        <p className={`line-clamp-${expanded ? 'none' : '2'}`}>{desc}</p>
        <div className='flex justify-start'>
          {desc.length > 2 && (
            <button onClick={toggleExpanded} className="text-base md:text-lg font-medium text-gray-600 leading-relaxed text-justify mb-2">
              {expanded ? 'see less' : 'see more'}
            </button>
          )}
        </div>
        <div className='flex gap-8'>
          <Link to={toPreview} target='_blank'>Preview</Link>
          <Link to={toSourceCode} target='_blank'>Source Code</Link>
        </div>
      </div>
    </div>
  )
}

export default CardProject